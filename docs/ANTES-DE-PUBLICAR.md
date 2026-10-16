# Antes de publicar la web

Recordatorio de lo que falta antes de lanzar el portfolio. Nada de esto está hecho todavía: la web no está publicada.

Alojamiento previsto: **Cloudflare Pages** con **dominio propio**, en la raíz del dominio (sin subcarpeta). El repositorio sigue privado.

## Pendiente

- [ ] **Dominio**: elegir y comprar el dominio. Después, sustituir el valor provisional `https://dominio-pendiente.invalid` de `astro.config.mjs` por el dominio real.
- [ ] **Imagen para compartir**: aprobar una imagen original (1200×630 px) para la vista previa en LinkedIn, WhatsApp, etc. Guardarla en `public/images/` y poner su ruta en `defaultImage` de `src/components/BaseLayout.astro`. No usar las imágenes provisionales (IA o stock).
- [ ] **Imágenes de los casos**: sustituir las referencias provisionales por material original (ver `public/images/FUENTES.md`).
- [ ] **Cloudflare Pages**: conectar el repositorio (comando de compilación `corepack pnpm build`, carpeta de salida `dist`) y apuntar el dominio a la web.
- [ ] **Aprobación de Zabrinna**: integrar en `main` y subir a GitHub solo con su aprobación explícita.

`pnpm verify` muestra un aviso «PENDIENTE» mientras falten el dominio o la imagen para compartir.
