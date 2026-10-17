import type { APIRoute } from 'astro';
import { getProjects } from '../projects';
import { homeUrl, projectUrl } from '../site';

// Mapa del sitio para buscadores: la portada y cada caso.
export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects();
  const urls = [homeUrl, ...projects.map((project) => projectUrl(project.id))].map((path) => new URL(path, site).href);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
