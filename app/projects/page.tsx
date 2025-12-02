import React from 'react';
import ProjectsPage from './projectPage';
import { getProjectData } from './../utils/projectReader';

export const metadata = {
  title: 'Projects — Cole Abbott',
  description: 'A showcase of my engineering projects and work.',
};

// Server component: fetch project metadata at build/server time and
// render the client component with the data as a prop.
export default async function Page() {
  const projectsData = await getProjectData();
  return <ProjectsPage projectsData={projectsData} />;
}