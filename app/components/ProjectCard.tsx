import { ProjectCardProps } from '../types';

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
    <div
        className="bg-base-bg rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-300 cursor-pointer border-2 border-content-dark hover:border-pop"
        onClick={() => onClick(project)}
    >
        <div className="h-48 bg-cover bg-center" aria-label={`Image for ${project.title}`}>
            <img
                src={project.images[0]}
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
            <h3 className="text-xl font-bold text-content-dark mb-2 truncate">{project.title}</h3>
            <p className="text-content-dark text-sm line-clamp-2 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.category.map((cat, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium px-3 py-1 bg-content-dark text-content-light rounded-full"
                    >
                        {cat}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectCard;