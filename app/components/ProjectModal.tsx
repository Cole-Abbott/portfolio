import { ProjectModalProps } from '../types';
import { Briefcase, FlaskConical, Code, Hammer, GitBranch, X } from 'lucide-react';


const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    if (!project) return null;

    const maxHeightForImages = '50vh'; // Maximum height for the image container


    return (
        <div className="fixed inset-0 bg-opacity-80 z-50 flex justify-center items-center p-4 backdrop-blur-xs" onClick={onClose}>
            <div
                className="relative bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 z-50 text-white hover:text-indigo-400 transition"
                    onClick={onClose}
                    aria-label="Close Project Details"
                >
                    <X size={28} />
                </button>

                {/* <div className="relative">
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
        </div> */}

                {/* Scrollable container for multiple images */}
                <div className="flex flex-wrap md:flex-no-wrap" style={{ maxHeight: maxHeightForImages }}>
                    {project.images.map((image, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4 flex-shrink-0 relative" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Add any overlay or caption here if needed */}
                        </div>
                    ))}
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

export default ProjectModal;