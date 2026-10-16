# Pendientes del portfolio

Lista de lo que falta antes de lanzar la web y de las tareas abiertas. Nada de esto está publicado todavía.

Alojamiento elegido: **GitHub Pages** del repositorio, en `https://zabrinna14-ops.github.io/portfolio-zabrinna-vargas/` (subcarpeta con el nombre del repositorio). La configuración está en `astro.config.mjs` (`site` y `base`) y la publicación automática en `.github/workflows/deploy.yml`, que se ejecuta cada vez que se actualiza `main`.

## Para publicar

- [ ] **Repositorio privado**: GitHub Pages con repositorio privado requiere un plan de pago (GitHub Pro). Decidir entre hacer público el repositorio o contratar el plan. La web publicada es pública en cualquier caso.
- [ ] **Activar Pages**: en GitHub, *Settings → Pages → Source: GitHub Actions*. Lo hace Zabrinna o el agente con su aprobación.
- [ ] **Imagen para compartir**: aprobar una imagen original (1200×630 px) para la vista previa en LinkedIn, WhatsApp, etc. Guardarla en `public/images/` y poner su ruta en `defaultImage` de `src/components/BaseLayout.astro` (relativa a la base, p. ej. `images/compartir.jpg`). No usar las imágenes provisionales (IA o stock). `pnpm verify` avisa con «PENDIENTE» mientras falte.
- [ ] **Imágenes provisionales**: sustituir las referencias de IA y stock que quedan (portadas de Solo de Croquetas, Croque-Quedada, Petritegi y Storytelling; retrato de Sobre mí; Marca personal) por material original (ver `public/images/FUENTES.md`).
- [ ] **Dominio propio (opcional)**: si se quiere una dirección propia en lugar de github.io, comprar el dominio, configurarlo en Pages y cambiar `site` y `base` (a `'/'`) en `astro.config.mjs`.
- [ ] **Aprobación de Zabrinna**: integrar en `main` y subir a GitHub solo con su aprobación explícita. Al actualizar `main` se publica la web.

## Ajustes técnicos

- [ ] **Dato destacado**: el campo `highlight` de los casos a veces no es una cifra (Petritegi, Planeta Dots, Storytelling, Solo de Croquetas) y se muestra con estilo de número grande en tarjetas y fichas. Decidir si hacerlo opcional o darle otro estilo cuando es texto.
- [ ] **Campos duplicados**: en los seis casos, `summary` e `intro` tienen el mismo texto. Decidir si se unifican en uno o se mantienen para escribir textos distintos.

## Orden del repositorio

- [ ] **Ramas ya integradas**: `prueba-skill`, `ajustes-legibilidad` y `claude/arreglos-tecnicos-080b89` ya están en `main`; se pueden borrar.
- [ ] **Ramas unificadas**: `docs/lineamientos-git`, `claude/preparar-publicacion-2b6d6f` y `claude/arreglos-contenido-83e111` están unidas en `chore/unificar-ramas` (y esta, en `chore/github-pages`); borrarlas cuando se integre en `main`.

## Diseño

- [ ] **Etiqueta del hero**: «DIGITAL MARKETING MANAGER» encima del nombre es una decisión de Zabrinna; Impeccable la seguirá marcando como aviso. Anotarlo en `DESIGN.md` para que no se proponga quitarla.
