"use client";

import { Project } from '../types';
import { useEffect, useState } from 'react';

import Header from './Header';
import About from './About';
import ProjectGallery from './ProjectGallery';
import ProjectCard from './ProjectCard';
import Link from 'next/link';


interface Props {
    projectsData: Project[];
}

const ClientPage = ({ projectsData }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    // Find the ECVT, E-skin, and EE327 projects specifically
    const ecvtProject = projectsData.find(p => p.slug === 'ecvt') || projectsData[0];
    const eskinProject = projectsData.find(p => p.slug === 'eskin') || projectsData[1];
    const ee327Project = projectsData.find(p => p.slug === 'ee327') || projectsData[2];
    const me340Project = projectsData.find(p => p.slug === '340-2') || projectsData[3];

    return (
        <div className="min-h-screen text-white font-inter">
            <style>{` :root { font-family: 'Inter', sans-serif; } `}</style>

            <Header/>

            <main className="px-4 md:px-8">
                <About />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
                    {/* ECVT, E-skin, and EE327 link to their project pages */}
                    <Link 
                        href="/ecvt"
                        className={`transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <ProjectCard project={ecvtProject} onClick={() => { }} />
                    </Link>
                    <Link 
                        href="/eskin"
                        className={`transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <ProjectCard project={eskinProject} onClick={() => { }} />
                    </Link>
                    <Link 
                        href="/ee327"
                        className={`transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <ProjectCard project={ee327Project} onClick={() => { }} />
                    </Link>
                    <Link 
                        href="/340-2"
                        className={`transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <ProjectCard project={me340Project} onClick={() => { }} />
                    </Link>
                    
                </div>

                <a 
                    href="/projects" 
                    className={`block max-w-3xl mx-auto mb-16 text-center text-heading-active font-semibold hover:text-pop transition-all duration-300 text-lg group ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '700ms' }}
                >
                    <span className="relative inline-block">
                        View All My Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pop transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </a>
            </main>



            <footer className="py-6 px-4 md:px-8 mt-10 bg-white/50 backdrop-blur-sm border-t border-gray-200">
                <div className="max-w-6xl mx-auto text-center text-sm text-content-light">
                    Built with React & Tailwind CSS by Cole Abbott | Northwestern ME '26
                </div>
            </footer>
        </div>
    );
};

export default ClientPage;

