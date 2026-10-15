import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export async function getProjects(): Promise<Project[]> {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  if (new Set(projects.map(({ data }) => data.order)).size !== projects.length) {
    throw new Error('Cada proyecto debe tener un orden único.');
  }
  return projects;
}

// The Markdown loader renders trusted, local content at build time. Group its
// level-two headings so one component controls every case section's markup.
export function getSections(project: Project) {
  const rendered = project.rendered?.html;
  if (!rendered) throw new Error(`No se ha renderizado el contenido de ${project.id}.`);
  const headings = [...rendered.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)];
  if (!headings.length || rendered.slice(0, headings[0].index).trim()) {
    throw new Error(`${project.id}: el relato debe empezar con un título ##.`);
  }
  return headings.map((heading, index) => ({
    title: heading[1].replace(/<[^>]+>/g, ''),
    html: rendered.slice(heading.index! + heading[0].length, headings[index + 1]?.index ?? rendered.length),
  }));
}
