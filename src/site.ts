export const site = {
  name: 'Zabrinna Vargas Antinori',
  // Nombre corto para el título de la pestaña y al compartir.
  shortName: 'Zabrinna Vargas',
  discipline: 'Marketing digital',
  description: 'Portfolio de Zabrinna Vargas Antinori: marketing digital, gestión de cuentas, SEO y contenidos y coordinación de proyectos, contados caso a caso.',
};

export const areas = [
  { id: 'estrategia', label: 'Estrategia' },
  { id: 'contenido', label: 'Contenido' },
  { id: 'web', label: 'Web y SEO' },
  { id: 'eventos', label: 'Eventos' },
  { id: 'ia', label: 'IA y automatización' },
] as const;

// Direcciones limpias, sin .html y con barra final.
export const homeUrl = import.meta.env.BASE_URL;
export const projectUrl = (id: string) => `${import.meta.env.BASE_URL}proyectos/${id}/`;
export const imageUrl = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;
