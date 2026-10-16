import { defineConfig } from 'astro/config';

// Alojamiento previsto: Cloudflare Pages con dominio propio, sin subcarpeta (sin `base`).
// PENDIENTE: el dominio aún no está elegido. Sustituir este valor provisional
// por el dominio real antes de publicar (ver AGENTS.md).
const site = 'https://dominio-pendiente.invalid';

export default defineConfig({
  site,
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
