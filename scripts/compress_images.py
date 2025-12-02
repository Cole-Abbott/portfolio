#!/usr/bin/env python3
"""
Compress images under a directory (recursively).

Usage:
  python scripts/compress_images.py [--path public/projects] [--quality 85] [--dry-run] [--backup]

This script uses Pillow to re-save images with reasonable defaults and replaces
the original file only when the compressed file is smaller (unless --overwrite).

Supported formats: JPEG/JPG, PNG, WEBP, GIF

Install requirements:
  pip install pillow tqdm

Notes:
- The script writes a temporary file next to the original and replaces it only
  when the compressed file is smaller (or when --overwrite is given).
- Use --dry-run to see what would happen without modifying files.
- Use --backup to keep a `.bak` copy next to the original when replacing.
"""
from __future__ import annotations

import argparse
import io
import os
import shutil
import sys
import tempfile
from pathlib import Path

from PIL import Image, ImageFile

try:
    from tqdm import tqdm
except Exception:  # pragma: no cover - tqdm optional
    tqdm = lambda x, **kw: x

# Allow loading truncated images
ImageFile.LOAD_TRUNCATED_IMAGES = True


IMAGE_EXTS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.tif', '.tiff'}


def compress_image(src_path: Path, dst_path: Path, quality: int, overwrite: bool, png_compress_level: int = 9) -> bool:
    """Compress a single image and write to dst_path.

    Returns True if dst_path was written successfully.
    """
    src = str(src_path)
    ext = src_path.suffix.lower()
    try:
        with Image.open(src) as im:
            im_format = im.format or ("WEBP" if ext == '.webp' else None)

            # JPEG-like
            if ext in ('.jpg', '.jpeg'):
                # Convert to RGB if needed
                if im.mode in ('RGBA', 'LA'):
                    background = Image.new('RGB', im.size, (255, 255, 255))
                    background.paste(im, mask=im.split()[-1])
                    im = background
                elif im.mode != 'RGB':
                    im = im.convert('RGB')

                im.save(dst_path, format='JPEG', quality=quality, optimize=True, progressive=True)
                return True

            # WebP
            if ext == '.webp':
                im.save(dst_path, format='WEBP', quality=quality, method=6)
                return True

            # PNG: keep alpha if present; use optimize and compress_level
            if ext == '.png':
                save_kwargs = {'optimize': True, 'compress_level': png_compress_level}
                # If image is paletted already, just save
                if im.mode == 'P':
                    im.save(dst_path, format='PNG', **save_kwargs)
                else:
                    # For images without alpha, converting to palette can drastically reduce size
                    if 'A' not in im.getbands():
                        # quantize to 256 colors to reduce size while keeping reasonable quality
                        q = im.convert('RGB').quantize(method=Image.MEDIANCUT)
                        q.save(dst_path, format='PNG', **save_kwargs)
                    else:
                        # keep alpha channel
                        im.save(dst_path, format='PNG', **save_kwargs)
                return True

            # GIF: try to optimize
            if ext == '.gif':
                im.save(dst_path, format='GIF', optimize=True)
                return True

            # TIFF and others: try to save as JPEG if no alpha (riskier)
            if ext in ('.tif', '.tiff'):
                if 'A' in im.getbands():
                    # skip conversion with alpha
                    im.save(dst_path, format='TIFF')
                else:
                    im.convert('RGB').save(dst_path, format='JPEG', quality=quality, optimize=True)
                return True

    except Exception as e:
        print(f"[ERROR] Failed to process {src}: {e}")
        return False

    return False


def should_process(path: Path) -> bool:
    return path.is_file() and path.suffix.lower() in IMAGE_EXTS


def compress_tree(root: Path, quality: int = 85, dry_run: bool = False, backup: bool = False, overwrite: bool = False):
    files = [p for p in root.rglob('*') if should_process(p)]
    if not files:
        print(f"No image files found in {root}")
        return

    for p in tqdm(files, desc='Images'):
        try:
            orig_size = p.stat().st_size
        except OSError:
            continue

        # create temp file in same directory to preserve filesystem (permissions)
        tmp_fd, tmp_path = tempfile.mkstemp(suffix=p.suffix, dir=str(p.parent))
        os.close(tmp_fd)
        tmp_path = Path(tmp_path)

        ok = compress_image(p, tmp_path, quality=quality, overwrite=overwrite)
        if not ok:
            if tmp_path.exists():
                tmp_path.unlink()
            continue

        try:
            new_size = tmp_path.stat().st_size
        except OSError:
            new_size = orig_size

        if dry_run:
            # report
            saved = orig_size - new_size
            print(f"[DRY] {p}: {orig_size} -> {new_size} bytes (saved {saved})")
            tmp_path.unlink()
            continue

        # Decide whether to replace
        if new_size < orig_size or overwrite:
            if backup:
                bak = p.with_suffix(p.suffix + '.bak')
                shutil.copy2(p, bak)
            shutil.move(str(tmp_path), str(p))
            print(f"[OK]   {p}: {orig_size} -> {new_size} bytes")
        else:
            # compressed file not smaller; remove it
            tmp_path.unlink()
            print(f"[SKIP] {p}: compressed not smaller ({orig_size} -> {new_size})")


def parse_args():
    ap = argparse.ArgumentParser(description='Compress images in a directory tree')
    ap.add_argument('--path', '-p', default='public/projects', help='Root folder to search')
    ap.add_argument('--quality', '-q', type=int, default=85, help='Quality for lossy formats (JPEG/WebP)')
    ap.add_argument('--dry-run', action='store_true', help='Do not replace any files; show savings')
    ap.add_argument('--backup', action='store_true', help='Keep a .bak copy when replacing')
    ap.add_argument('--overwrite', action='store_true', help='Replace even if new file is larger')
    return ap.parse_args()


def main():
    args = parse_args()
    root = Path(args.path)
    if not root.exists():
        print(f"Path not found: {root}")
        sys.exit(1)

    compress_tree(root, quality=args.quality, dry_run=args.dry_run, backup=args.backup, overwrite=args.overwrite)


if __name__ == '__main__':
    main()
