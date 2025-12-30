import { Cpu, Filter } from 'lucide-react';
import { Project } from '../types';
import { useState, useMemo, useEffect } from 'react';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface Props {
    projectsData: Project[];
}


const ProjectGallery = ({ projectsData }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'CAD', 'Analysis', 'Robotics', 'Manufacturing', 'Control Systems', 'Programming', 'Thermal', 'Fluid Dynamics'];

    useEffect(() => {
        // Trigger animation after component mounts
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') {
            return projectsData;
        }
        return projectsData.filter(project => project.category.includes(filter));
    }, [filter, projectsData]);

    const openModal = (project: Project) => {
        
        if ("slug" in project && project.slug) {
            // Navigate to project page if slug exists
            window.location.href = `/${project.slug}`;
            return;
        }
        setSelectedProject(project);
    };

    const closeModal = () => setSelectedProject(null);

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-content-dark mb-8 pb-2 flex items-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <Cpu className="w-8 h-8 mr-3 text-accent" /> Technical Projects
            </h2>

            <div className={`flex flex-wrap gap-2 mb-10 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-200 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
                <span className="text-gray-600 font-medium mr-2 flex items-center">
                    <Filter size={18} className='mr-1' /> Filter by Skill:
                </span>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 text-sm rounded-full transition-all duration-300 transform hover:scale-105 ${filter === cat
                            ? 'bg-pop text-white font-bold shadow-lg scale-105'
                            : 'bg-content-dark text-white hover:bg-accent'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: `${200 + index * 50}ms` }}
                        >
                            <ProjectCard
                                project={project}
                                onClick={openModal}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-content-dark col-span-full text-center py-12">
                        No projects found for the selected filter: <strong>{filter}</strong>. Try a different category!
                    </p>
                )}
            </div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </div>
    )
};

export default ProjectGallery;