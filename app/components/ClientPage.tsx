"use client";

import { Project } from '../types';

import Header from './Header';
import About from './About';
import ProjectGallery from './ProjectGallery';
import ProjectCard from './ProjectCard';


interface Props {
    projectsData: Project[];
}

const ClientPage = ({ projectsData }: Props) => {

    return (
        <div className="min-h-screen bg-base-bg text-white font-inter">
            <style>{` :root { font-family: 'Inter', sans-serif; } `}</style>

            <Header/>

            <main className="px-4 md:px-8 bg-base-bg">
                <About />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
                    <ProjectCard project={projectsData[0]} onClick={() => { }} />
                    <ProjectCard project={projectsData[1]} onClick={() => { }} />
                    <ProjectCard project={projectsData[2]} onClick={() => { }} />
                    <ProjectCard project={projectsData[3]} onClick={() => { }} />
                </div>

                <ProjectGallery projectsData={projectsData} />
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

