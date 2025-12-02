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
        <>
            <Header />
            <main className="max-w-5xl mx-auto px-4 md:px-8 py-8">
                <ProjectGallery projectsData={projectsData} />
            </main>
        </>
    );
}

export default ProjectsPage;