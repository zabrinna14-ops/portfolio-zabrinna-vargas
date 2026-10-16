import { defineConfig } from 'astro/config';

// Alojamiento: GitHub Pages del repositorio, publicado en una subcarpeta con el
// nombre del repositorio. Si más adelante se usa un dominio propio, cambiar
// `site` por ese dominio y `base` por '/'.
export default defineConfig({
  site: 'https://zabrinna14-ops.github.io',
  base: '/portfolio-zabrinna-vargas/',
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
