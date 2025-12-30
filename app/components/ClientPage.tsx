"use client";

import { Project } from '../types';

import Header from './Header';
import About from './About';
import ProjectGallery from './ProjectGallery';
import ProjectCard from './ProjectCard';
import Link from 'next/link';


interface Props {
    projectsData: Project[];
}

const ClientPage = ({ projectsData }: Props) => {
    // Find the ECVT, E-skin, and EE327 projects specifically
    const ecvtProject = projectsData.find(p => p.slug === 'ecvt') || projectsData[0];
    const eskinProject = projectsData.find(p => p.slug === 'eskin') || projectsData[1];
    const ee327Project = projectsData.find(p => p.slug === 'ee327') || projectsData[2]; // QuackTrack has id 2
    const me340Project = projectsData.find(p => p.slug === '340-2') || projectsData[3];

    return (
        <div className="min-h-screen bg-base-bg text-white font-inter">
            <style>{` :root { font-family: 'Inter', sans-serif; } `}</style>

            <Header/>

            <main className="px-4 md:px-8 bg-base-bg">
                <About />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
                    {/* ECVT, E-skin, and EE327 link to their project pages */}
                    <Link href="/ecvt">
                        <ProjectCard project={ecvtProject} onClick={() => { }} />
                    </Link>
                    <Link href="/eskin">
                        <ProjectCard project={eskinProject} onClick={() => { }} />
                    </Link>
                    <Link href="/ee327">
                        <ProjectCard project={ee327Project} onClick={() => { }} />
                    </Link>
                    <Link href="/340">
                        <ProjectCard project={me340Project} onClick={() => { }} />
                    </Link>
                    
                </div>

                <a href="/projects" className="block max-w-3xl mx-auto mb-16 text-center text-heading-active font-semibold hover:underline">
                    View All My Projects
                </a>
            </main>



            <footer className="py-6 px-4 md:px-8 bg-base-bg mt-10">
                <div className="max-w-6xl mx-auto text-center text-sm text-content-light">
                    Built with React & Tailwind CSS by Cole Abbott | Northwestern ME '26
                </div>
            </footer>
        </div>
    );
};

export default ClientPage;

