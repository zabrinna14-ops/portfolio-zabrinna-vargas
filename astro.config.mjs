import { defineConfig, fontProviders } from 'astro/config';

// Alojamiento: GitHub Pages de usuario (repositorio zabrinnavargas.github.io),
// publicado en la raíz. Si más adelante se usa un dominio propio, cambiar `site`.
export default defineConfig({
  site: 'https://zabrinnavargas.github.io',
  base: '/',
  output: 'static',
  // Direcciones limpias, sin .html: /proyectos/petritegi/
  build: { format: 'directory' },
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // Fuentes descargadas al compilar y servidas desde el propio sitio.
  fonts: [
    { provider: fontProviders.fontsource(), name: 'Lato', cssVariable: '--font-lato', weights: [400, 700], styles: ['normal'], fallbacks: ['Arial', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'Playfair Display', cssVariable: '--font-playfair', weights: [400], styles: ['normal', 'italic'], fallbacks: ['Georgia', 'serif'] },
  ],
});
