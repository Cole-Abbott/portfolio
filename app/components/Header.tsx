"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const RESUME_PATH = "https://portfolio-eqcmlmf21-cole-abbotts-projects.vercel.app/resume.pdf";

// Base styles for links
const BASE = 'transition';
const INACTIVE = 'text-gray-300 hover:text-indigo-400';
const ACTIVE = 'text-indigo-300 font-semibold';

function linkClass(href: string, pathname: string, hash: string) {
    // If href is an in-page anchor (starts with '#'), check hash
    if (href.startsWith('#')) {
        return `${hash === href ? ACTIVE : INACTIVE} ${BASE}`;
    }

    // For routes, consider exact match or pathname startsWith for section indexes
    const isActive = href === pathname || (href !== '/' && pathname.startsWith(href));
    return `${isActive ? ACTIVE : INACTIVE} ${BASE}`;
}

const Header = () => {
    const pathname = usePathname() || '/';
    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        // set initial hash and listen for hash changes (for in-page anchors)
        const update = () => setHash(window.location.hash || '');
        update();
        window.addEventListener('hashchange', update);
        return () => window.removeEventListener('hashchange', update);
    }, []);

    return (
        <header>
            <div className="py-4 px-4 md:px-8 bg-gray-800 shadow-lg">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="/" className={INACTIVE + ' ' + BASE}>
                        Cole Abbott
                    </Link>

                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link href="/" className={linkClass('/', pathname, hash)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                {/* in-page anchor, active when hash === '#projects' */}
                                <a href="#projects" className={linkClass('#projects', pathname, hash)}>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href={RESUME_PATH} className={`${INACTIVE} ${BASE}`} target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;