import { ProjectCardProps } from '../types';

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
    <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-pop hover:shadow-2xl hover:-translate-y-2 group"
        onClick={() => onClick(project)}
    >
        <div className="h-48 bg-cover bg-center overflow-hidden" aria-label={`Image for ${project.title}`}>
            <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://placehold.co/600x400/1e293b/cbd5e1?text=ME+Project+Visual";
                }}
            />
        </div>

        <div className="p-5 bg-white">
            <h3 className="text-xl font-bold text-content-dark mb-2 truncate group-hover:text-heading transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-content-dark text-sm line-clamp-2 mb-3 leading-relaxed">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {project.category.map((cat, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium px-3 py-1 bg-content-dark text-white rounded-full transition-all duration-300 hover:bg-accent hover:scale-105"
                    >
                        {cat}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectCard;