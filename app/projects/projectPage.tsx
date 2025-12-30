'use client';

// import header and projectGallery
import Header from '../components/Header';
import ProjectGallery from '../components/ProjectGallery';
import { Project } from '../types';

interface Props {
        projectsData: Project[];
}

const ProjectsPage = ({ projectsData }: Props) => {

    return (
        <div className="min-h-screen">
            <Header />
            <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
                <ProjectGallery projectsData={projectsData} />
            </main>
        </div>
    );
}

export default ProjectsPage;