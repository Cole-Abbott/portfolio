import { Project } from '../types';
import fs from 'fs';
import path from 'path';


const IMG_DOMAIN = "http://localhost:3000/images/";

// Reads all `projectinfo.json` files under `app/projects/**` using Node fs.
// This runs server-side (in Next.js server components) and returns a typed list.
export const getProjectData = async (): Promise<Project[]> => {
  const projectsDir = path.join(process.cwd(), 'app', 'projects');
  const projects: Project[] = [];

  async function walk(dir: string) {
    let entries: fs.Dirent[] = [];
    try {
      entries = await fs.promises.readdir(dir, { withFileTypes: true });
    } catch (err) {
      return; // directory doesn't exist
    }

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile() && entry.name === 'projectinfo.json') {
        try {
          const raw = await fs.promises.readFile(full, 'utf-8');
          const parsed = JSON.parse(raw) as Project;
          projects.push(parsed);
        } catch (err) {
          // ignore parse/read errors for a single file
          // eslint-disable-next-line no-console
          console.warn(`Failed to read or parse ${full}:`, err);
        }
      }
    }
  }

  await walk(projectsDir);

  //loop over projects and prepend image paths
  for (const project of projects) {
    project.imagePlaceholder = IMG_DOMAIN + project.imagePlaceholder;
  }

  return projects;
};
