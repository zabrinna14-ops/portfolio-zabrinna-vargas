import { defineConfig, fontProviders } from 'astro/config';

// Alojamiento: GitHub Pages del repositorio, publicado en una subcarpeta con el
// nombre del repositorio. Si más adelante se usa un dominio propio, cambiar
// `site` por ese dominio y `base` por '/'.
export default defineConfig({
  site: 'https://zabrinna14-ops.github.io',
  base: '/portfolio-zabrinna-vargas/',
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
  // Fuentes descargadas al compilar y servidas desde el propio sitio.
  fonts: [
    { provider: fontProviders.fontsource(), name: 'Inter', cssVariable: '--font-inter', weights: [400, 600], styles: ['normal'], fallbacks: ['Arial', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'Playfair Display', cssVariable: '--font-playfair', weights: [400], styles: ['normal', 'italic'], fallbacks: ['Georgia', 'serif'] },
  ],
});
