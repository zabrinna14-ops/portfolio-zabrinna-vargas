# Pendientes del portfolio

Lista de lo que falta antes de lanzar la web y de las tareas abiertas. Nada de esto está publicado todavía.

Alojamiento elegido: **GitHub Pages** del repositorio, en `https://zabrinna14-ops.github.io/portfolio-zabrinna-vargas/` (subcarpeta con el nombre del repositorio). La configuración está en `astro.config.mjs` (`site` y `base`) y la publicación automática en `.github/workflows/deploy.yml`, que se ejecuta cada vez que se actualiza `main`.

## Para publicar

- [ ] **Repositorio privado**: GitHub Pages con repositorio privado requiere un plan de pago (GitHub Pro). Decidir entre hacer público el repositorio o contratar el plan. La web publicada es pública en cualquier caso.
- [ ] **Activar Pages**: en GitHub, *Settings → Pages → Source: GitHub Actions*. Lo hace Zabrinna o el agente con su aprobación.
- [ ] **Imagen para compartir**: aprobar una imagen original (1200×630 px) para la vista previa en LinkedIn, WhatsApp, etc. Guardarla en `public/images/` y poner su ruta en `defaultImage` de `src/components/BaseLayout.astro` (relativa a la base, p. ej. `images/compartir.jpg`). No usar las imágenes provisionales (IA o stock). `pnpm verify` avisa con «PENDIENTE» mientras falte.
- [ ] **Imágenes provisionales**: sustituir las referencias de IA y stock que quedan (imagen del hero y portadas de Solo de Croquetas, Croque-Quedada, Petritegi y Automatización YACREA) por material original (ver `public/images/FUENTES.md`).
- [ ] **Portada de Solo de Croquetas**: es una imagen de IA y aparece también en la portada de la web. Decidir si se sustituye por una imagen real ya incorporada, por ejemplo la colección de personajes (`public/images/casos/solo-de-croquetas/03-personajes-coleccion.webp`).
- [ ] **Imágenes pendientes en los casos**: Petritegi (pilares de contenido y una o dos piezas publicadas) muestra una caja azul «Imagen pendiente» hasta que Zabrinna aporte el material. Storytelling ya tiene la vista previa del vídeo (17 de octubre de 2026).
- [ ] **Dominio propio (opcional)**: si se quiere una dirección propia en lugar de github.io, comprar el dominio, configurarlo en Pages y cambiar `site` y `base` (a `'/'`) en `astro.config.mjs`.
- [ ] **Aprobación de Zabrinna**: integrar en `main` y subir a GitHub solo con su aprobación explícita. Al actualizar `main` se publica la web.

## Ajustes técnicos

- [ ] **Dato destacado**: el campo `highlight` de los casos a veces no es una cifra (Petritegi, Planeta Dots, Storytelling, Solo de Croquetas) y se muestra con estilo de número grande en tarjetas y fichas. Decidir si hacerlo opcional o darle otro estilo cuando es texto.
- [ ] **Campos duplicados**: en los seis casos, `summary` e `intro` tienen el mismo texto. Decidir si se unifican en uno o se mantienen para escribir textos distintos.

## Comprobado

- [x] **Decisiones fijas de diseño**: fondo crema, serif de titulares y etiqueta del hero anotados en `DESIGN.md` para que las skills los respeten.
- [x] **Ramas integradas y borradas** (16 de octubre de 2026): en local y en GitHub solo queda `main`.
- [x] **Enlace «Contacto» en móvil**: lleva a su sección. En la simulación de móvil del navegador integrado el desplazamiento suave no se anima y parece que no funciona; en un navegador real sí.
