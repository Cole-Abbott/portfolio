"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Base styles for links with animated underline
const BASE = 'relative transition-all duration-300 font-semibold uppercase tracking-wide ';
const INACTIVE = 'text-heading hover:text-heading-active';
const ACTIVE = 'text-heading-active';

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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // set initial hash and listen for hash changes (for in-page anchors)
        const update = () => setHash(window.location.hash || '');
        update();
        window.addEventListener('hashchange', update);
        return () => window.removeEventListener('hashchange', update);
    }, []);

    useEffect(() => {
        // Add scroll listener for sticky header effect
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/80 backdrop-blur-md shadow-md' 
                : 'bg-white/95'
        }`}>
            <div className="py-4 px-4 md:px-6">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link 
                        href="/" 
                        className={`${INACTIVE} ${BASE} text-lg hover:scale-105 transform`}
                    >
                        Cole Abbott
                    </Link>

                    <nav>
                        <ul className="flex space-x-6 md:space-x-8">
                            <li>
                                <Link 
                                    href="/" 
                                    className={`${linkClass('/', pathname, hash)} group`}
                                >
                                    <span className="relative">
                                        Home
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-heading-active transition-all duration-300 ${
                                            pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/projects" 
                                    className={`${linkClass('/projects', pathname, hash)} group`}
                                >
                                    <span className="relative">
                                        Projects
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-heading-active transition-all duration-300 ${
                                            pathname.startsWith('/projects') || pathname === '/ecvt' || pathname === '/eskin' || pathname === '/ee327' || pathname === '/340-2'
                                                ? 'w-full' 
                                                : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/about" 
                                    className={`${linkClass('/about', pathname, hash)} group`}
                                >
                                    <span className="relative">
                                        About
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-heading-active transition-all duration-300 ${
                                            pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/resume" 
                                    className={`${linkClass('/resume', pathname, hash)} group`}
                                >
                                    <span className="relative">
                                        Resume
                                        <span className={`absolute bottom-0 left-0 h-0.5 bg-heading-active transition-all duration-300 ${
                                            pathname === '/resume' ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;