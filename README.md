# Portfolio web de Zabrinna Vargas Antinori

Portfolio profesional en Astro con páginas estáticas en español. Los componentes compartidos mantienen la portada y los seis casos coherentes; los casos se editan como Markdown validado y generan rutas HTML independientes.

## Desarrollo

Requiere Node.js 22.12 o posterior y pnpm. Instala dependencias con `pnpm install`; ejecuta `pnpm dev` para trabajar localmente. `pnpm check` revisa tipos y plantillas Astro, `pnpm build` genera el sitio estático en `dist/` y `pnpm verify` valida las páginas generadas y su navegación. `pnpm preview` sirve la compilación local.

## Estructura

- `src/components/`: navegación, portada, tarjetas, datos de contexto, resultados, herramientas y estructura compartida de cada caso.
- `src/content/projects/`: contenido Markdown y datos validados para los seis casos.
- `src/pages/`: portada y rutas dinámicas de los casos.
- `src/styles/`: tokens de identidad y estilos compartidos.
- `scripts/verify-build.mjs`: comprobaciones de rutas, enlaces, metadatos, navegación y contenido generado.

Los filtros de proyectos usan radios accesibles y CSS generado desde las áreas declaradas; no requieren JavaScript de cliente. Astro pre-renderiza la portada y cada caso. Las direcciones de casos conservan el formato `.html`.

## Contenido y referencias

Se conservan los textos fuente trasladados desde Notion, con resúmenes breves basados en ellos. No se inventan cifras, herramientas ni imágenes. Las referencias visuales y los criterios recopilados están en [docs/REFERENCIAS-PORTFOLIO.md](docs/REFERENCIAS-PORTFOLIO.md). Identidad navy, crema y serif de sistema basada en el portfolio de Canva DAHSQbAx1eg.

La versión estática previa se conserva en `legacy-static/` para consulta. No debe colocarse en la raíz: sus archivos coinciden con las rutas públicas y el servidor de desarrollo de Astro bloquea esas navegaciones con un 404. El proyecto activo vive en `src/`.

## Verificación — 16 de octubre de 2026

`astro check`, la compilación estática y `scripts/verify-build.mjs` completan sin errores. La verificación confirma siete páginas, metadatos, H1 e IDs únicos, enlaces y anclas locales resolubles, contenido de los seis casos, fichas, herramientas/resultados disponibles y navegación circular. La revisión visual se comprobó en escritorio y móvil, incluidos filtros por teclado, ficha sticky en escritorio y su flujo normal en móvil.

## Organización del trabajo

La web vive en este repositorio. Los originales, imágenes seleccionadas, scripts y entregables generados en otros chats viven en [Portfolio-materiales](../Portfolio-materiales/README.md), agrupados por caso en `produccion/`, `seleccion/` y `entregables/`.

Para integrar una imagen aprobada, copiarla a `public/images/`. La web conserva sus recursos y no depende de la carpeta de materiales. Las antiguas carpetas `artifacts/` y `assents/` se han trasladado allí; el inventario de traslado permite localizar cada archivo.

Las referencias y propuestas están en `docs/`; `DESIGN.md` y `PRODUCT.md` permanecen en la raíz para las herramientas de diseño. Las capturas e informes temporales están en `tmp/visual-review/`, excluido de Git.
