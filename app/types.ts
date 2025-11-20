// Shared types for the portfolio app
export interface Project {
  id: number;
  title: string;
  category: string[];
  description: string;
  details: string;
  tools: string[];
  imagePlaceholder: string;
}

export interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}
