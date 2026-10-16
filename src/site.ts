export const site = {
  name: 'Zabrinna Vargas Antinori',
  discipline: 'Digital Marketing Manager',
  description: 'Portfolio profesional de Zabrinna Vargas Antinori. Estrategia, creatividad y gestión de proyectos de marketing.',
};

export const areas = [
  { id: 'estrategia', label: 'Estrategia' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'web', label: 'Web y SEO' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'ia', label: 'IA y automatización' },
] as const;

// File output preserves the existing public URLs, including .html.
export const homeUrl = `${import.meta.env.BASE_URL}index.html`;
export const projectUrl = (id: string) => `${import.meta.env.BASE_URL}proyectos/${id}.html`;
export const imageUrl = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;
