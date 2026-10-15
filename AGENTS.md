# Contexto del proyecto

Este directorio contiene el portafolio profesional de Zabrinna Vargas Antinori, especialista en estrategia y comunicación digital, marketing de contenidos y SEO, creatividad y coordinación de proyectos. Los casos parten de materiales de Notion y de trabajo profesional real.

- Repositorio privado de GitHub: <https://github.com/zabrinna14-ops/portfolio-zabrinna-vargas>.
- La versión aprobable y de trabajo está en este directorio. **Este directorio no es actualmente un checkout Git**; no asumir que existe un `main` local ni que el contenido local coincide con GitHub. Preparar/configurar Git antes de intentar un merge o un push.
- La rama remota `feat/migrate-to-astro` se creó durante la migración, pero su contenido se dejó incompleto mientras se completaba y validaba la versión local. Revisar el estado remoto antes de integrarla; la versión local validada es la referencia.
- Sitio multipágina estático con Astro 7.4.0, Node.js >=22.12 y pnpm. No depende de JavaScript cliente para los filtros.
- Estructura: `src/components/` componentes compartidos; `src/content/projects/` seis casos en Markdown con esquema validado; `src/pages/` portada y rutas dinámicas; `src/styles/` tokens y estilos; `scripts/verify-build.mjs` validación del resultado generado. `dist/` es salida de compilación, no fuente.
- Comandos del proyecto: `pnpm dev`, `pnpm check`, `pnpm build`, `pnpm verify`, `pnpm preview`.
- Se conservan archivos HTML/CSS antiguos en la raíz y `proyectos/` como referencia de la versión anterior. La fuente activa está en `src/`.
- Identidad visual: navy `#202941`, crema `#e8e4d6`, papel `#f4f1e9`, serif de sistema para titulares y sans serif para lectura. Diseño editorial, limpio, responsive, navegación compacta, casos segmentados, resultados destacados cuando existen y herramientas solo cuando están documentadas.
- No inventar métricas, herramientas, imágenes ni atribuciones. Mantener en cada caso los textos fuente, áreas, datos y enlaces documentados. Las referencias visuales y anotaciones de Zabrinna están en `REFERENCIAS-PORTFOLIO.md`.
- Astro Docs MCP está registrado en la configuración local de Codex con el nombre `astro-docs`.

# Flujo de trabajo

- Realiza primero todo el trabajo de código en local. No edites ni subas cambios a GitHub mientras la versión local esté en curso.
- Deja el resultado local ejecutable y revisable, y completa las verificaciones apropiadas para el cambio. Para la migración actual pasan `astro check`, `astro build` y `scripts/verify-build.mjs` (siete páginas, enlaces, anclas, SEO básico, contenido y navegación circular).
- Trabaja en una rama de cambios. Cuando Zabrinna apruebe la versión local, integra los cambios aprobados en la rama local `main` y súbelos a la rama `main` del repositorio de GitHub.
- No hagas el merge ni publiques cambios en `main` antes de esa aprobación explícita.
- Si el directorio de trabajo no tiene Git configurado o la autenticación impide la subida, termina y valida el trabajo local, y explica con claridad qué falta para integrar y publicar.
