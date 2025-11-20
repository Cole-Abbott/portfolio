import React from 'react';
import ClientPage from './components/ClientPage';
import { getProjectData } from './utils/projectReader';

// Server component: fetch project metadata at build/server time and
// render the client component with the data as a prop.
export default async function Page() {
  const projectsData = await getProjectData();
  return <ClientPage projectsData={projectsData} />;
}
