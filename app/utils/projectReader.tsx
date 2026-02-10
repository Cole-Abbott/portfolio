import { Project } from '../types';
import fs from 'fs';
import path from 'path';



// Reads all `projectinfo.json` files under `app/projects/**` using Node fs.
// This runs server-side (in Next.js server components) and returns a typed list.
export const getProjectData = async (): Promise<Project[]> => {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  const projects: Project[] = [];

  async function walk(dir: string) {
    let entries: fs.Dirent[] = [];
    try {
      entries = await fs.promises.readdir(dir, { withFileTypes: true });
    } catch (err) {
      return; // directory doesn't exist
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile() && entry.name === 'projectinfo.json') {
        try {
          const raw = await fs.promises.readFile(full, 'utf-8');
          const parsed = JSON.parse(raw) as Project;
          

          // search for images in the same directory and add to project.images
          const imageFiles = await fs.promises.readdir(path.dirname(full));
          parsed.images = imageFiles
            .filter(file => file !== 'projectinfo.json' && /\.(png|jpe?g|gif|webp|svg)$/i.test(file))
            .map(file => path.join("projects", path.relative(projectsDir, path.dirname(full)), file));
          
          // search for thumbnail image in the same directory
          if (parsed.thumbnail) {
            const thumbPath = path.join(path.dirname(full), parsed.thumbnail);
            if (fs.existsSync(thumbPath)) {
              parsed.thumbnail = path.join("projects", path.relative(projectsDir, path.dirname(full)), parsed.thumbnail);
            } else {
              parsed.thumbnail = parsed.images[0]; // fallback to first image
            }
          } else {
            parsed.thumbnail = parsed.images[0]; // fallback to first image
          }

          // derive slug from directory name
          //parsed.slug = path.basename(path.dirname(full));
          
          projects.push(parsed);
        } catch (err) {
          // ignore parse/read errors for a single file
          // eslint-disable-next-line no-console
          console.warn(`Failed to read or parse ${full}:`, err);
        }
      }
    }
  }

  await walk(projectsDir);

  // Sort projects by ID descending so highest IDs (ECVT=10, E-skin=9) appear first
  projects.sort((a, b) => b.id - a.id);

  return projects;
};
