"use client";

import React, { useState, useMemo } from 'react';
import { Briefcase, FlaskConical, Code, Cpu, X, Filter, Hammer, GitBranch } from 'lucide-react';
import { Project, ProjectCardProps, ProjectModalProps } from '../types';

const RESUME_PATH = "https://portfolio-eqcmlmf21-cole-abbotts-projects.vercel.app/resume.pdf";

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div 
    className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 cursor-pointer border-2 border-gray-700 hover:border-indigo-500"
    onClick={() => onClick(project)}
  >
    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.imagePlaceholder})` }} aria-label={`Image for ${project.title}`}>
        <img 
            src={project.imagePlaceholder} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            // className="w-full h-full object-cover opacity-0" 
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => { 
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "https://placehold.co/600x400/1e293b/cbd5e1?text=ME+Project+Visual"; 
            }} 
        />
    </div>

    <div className="p-5">
      <h3 className="text-xl font-bold text-white mb-2 truncate">{project.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.category.map((cat, index) => (
          <span 
            key={index} 
            className="text-xs font-medium px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          className="absolute top-4 right-4 text-white hover:text-indigo-400 transition"
          onClick={onClose}
          aria-label="Close Project Details"
        >
          <X size={28} />
        </button>

        <div className="relative">
          <div className="h-64 bg-cover bg-center rounded-t-xl" style={{ backgroundImage: `url(${project.imagePlaceholder})` }}>
             <img 
                src={project.imagePlaceholder} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                // className="w-full h-full object-cover opacity-0" 
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => { 
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = "https://placehold.co/600x400/1e293b/cbd5e1?text=ME+Project+Visual"; 
                }} 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6 flex items-end">
            <h2 className="text-3xl font-extrabold text-white">{project.title}</h2>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2 flex items-center"><Briefcase className="w-5 h-5 mr-2" /> Project Summary</h3>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2 flex items-center"><FlaskConical className="w-5 h-5 mr-2" /> Technical Deep Dive</h3>
            <p className="text-gray-300 leading-relaxed">{project.details}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-3 flex items-center"><Hammer className="w-5 h-5 mr-2" /> Key Tools & Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 text-sm font-medium bg-gray-700 text-gray-100 rounded-lg shadow-md transition hover:bg-indigo-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-4 flex space-x-4">
            <a href="#" className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300">
              <Code className="w-4 h-4 mr-2" /> View Report / GitHub (Mock)
            </a>
            <a href="#" className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-400 border border-indigo-400 rounded-lg hover:bg-indigo-400/10 transition duration-300">
              <GitBranch className="w-4 h-4 mr-2" /> Process Documentation (Mock)
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

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

      <header className="py-16 px-4 md:px-8 bg-gray-800 border-b border-indigo-500/30 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <p className="text-indigo-400 text-sm font-medium uppercase mb-2">Mechanical Engineering Senior | Northwestern University</p>
          <h1 className="4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300">
            Cole Abbott's Engineering Portfolio
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl">
            A showcase of design, analysis, and control systems projects demonstrating proficiency in CAD, FEA, CFD, and embedded programming for complex mechanical systems.
          </p>
          <div className="mt-8 flex gap-4">
            <a href={RESUME_PATH} className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105">
                Resume
            </a>
            <a href="#" className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 transition">
                Contact Me (Mock)
            </a>
          </div>
        </div>
      </header>

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
                className={`px-4 py-2 text-sm rounded-full transition duration-150 ${
                  filter === cat 
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
