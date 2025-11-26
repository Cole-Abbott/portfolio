import { Briefcase, FlaskConical, Code, Cpu, X, Filter, Hammer, GitBranch } from 'lucide-react';
import { Project } from '../types';
import { useState, useMemo } from 'react';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface Props {
    projectsData: Project[];
}


const ProjectGallery = ({ projectsData }: Props) => {

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
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-content-dark mb-8 border-b-2 border-accent pb-2 flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-accent" /> Technical Projects
            </h2>

            <div className="flex flex-wrap gap-2 mb-10 p-3 bg-base-bg rounded-xl shadow-inner border-2 border-accent">
                <span className="text-gray-400 font-medium mr-2 flex items-center"><Filter size={18} className='mr-1' /> Filter by Skill:</span>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 text-sm rounded-full transition duration-150 ${filter === cat
                            ? 'bg-pop text-white font-bold shadow-md'
                            : 'bg-content-dark text-content-light hover:bg-gray-600'
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
                    <p className="text-content-dark col-span-full text-center py-12">
                        No projects found for the selected filter: **{filter}**. Try a different category!
                    </p>
                )}
            </div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </div>
    )
};

export default ProjectGallery;  