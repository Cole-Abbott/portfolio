"use client";

import React, { useState, useMemo } from 'react';
import { Briefcase, FlaskConical, Code, Cpu, X, Filter, Hammer, GitBranch } from 'lucide-react';
import { Project, ProjectCardProps, ProjectModalProps } from '../types';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Header from './Header';
import  About  from './About';


interface Props {
    projectsData: Project[];
}

const ClientPage = ({ projectsData }: Props) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'CAD', 'Analysis', 'Robotics', 'Manufacturing', 'Control Systems', 'Programming', 'Thermal', 'Fluid Dynamics'];

    const filteredProjects = useMemo(() => {
        if (filter === 'All') {
            return projectsData;
        }
        return projectsData.filter(project => project.category.includes(filter));
    }, [filter, projectsData]);

    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <div className="min-h-screen bg-gray-900 text-white font-inter">
            <style>{` :root { font-family: 'Inter', sans-serif; } `}</style>

            <Header />
            <About />


            <main className="py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-indigo-600 pb-2 flex items-center">
                        <Cpu className="w-6 h-6 mr-3 text-indigo-400" /> Technical Projects
                    </h2>

                    <div className="flex flex-wrap gap-2 mb-10 p-3 bg-gray-800 rounded-xl shadow-inner">
                        <span className="text-gray-400 font-medium mr-2 flex items-center"><Filter size={18} className='mr-1' /> Filter by Skill:</span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 text-sm rounded-full transition duration-150 ${filter === cat
                                        ? 'bg-indigo-600 text-white font-bold shadow-md'
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={openModal}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 col-span-full text-center py-12">
                                No projects found for the selected filter: **{filter}**. Try a different category!
                            </p>
                        )}
                    </div>
                </div>
            </main>

            <ProjectModal project={selectedProject} onClose={closeModal} />

            <footer className="py-6 px-4 md:px-8 bg-gray-800 mt-10">
                <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
                    Built with React & Tailwind CSS by Cole Abbott | Northwestern ME '26
                </div>
            </footer>
        </div>
    );
};

export default ClientPage;

