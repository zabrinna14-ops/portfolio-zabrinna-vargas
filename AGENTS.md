# Contexto del proyecto

Este directorio contiene el portafolio profesional de Zabrinna Vargas Antinori, especialista en estrategia y comunicación digital, marketing de contenidos y SEO, creatividad y coordinación de proyectos. Los casos parten de materiales de Notion y de trabajo profesional real.

- Repositorio privado de GitHub: <https://github.com/zabrinna14-ops/portfolio-zabrinna-vargas>.
- La versión aprobable y de trabajo está en este directorio. Este directorio tiene Git configurado; comprobar la rama, los cambios pendientes y el estado remoto antes de integrar o subir. No asumir que el contenido local coincide con GitHub.
- La rama remota `feat/migrate-to-astro` se creó durante la migración, pero su contenido se dejó incompleto mientras se completaba y validaba la versión local. Revisar el estado remoto antes de integrarla; la versión local validada es la referencia.
- Sitio multipágina estático con Astro 7.4.0, Node.js >=22.12 y pnpm. No depende de JavaScript cliente para los filtros.
- Estructura: `src/components/` componentes compartidos; `src/content/projects/` seis casos en Markdown con esquema validado; `src/pages/` portada y rutas dinámicas; `src/styles/` tokens y estilos; `scripts/verify-build.mjs` validación del resultado generado. `dist/` es salida de compilación, no fuente.
- Comandos del proyecto: `pnpm dev`, `pnpm check`, `pnpm build`, `pnpm verify`, `pnpm preview`.
- Se conservan archivos HTML/CSS antiguos en `legacy-static/` como referencia de la versión anterior. La fuente activa está en `src/`.
- Identidad visual: navy `#202941`, crema `#e8e4d6`, papel `#f4f1e9`, serif de sistema para titulares y sans serif para lectura. Diseño editorial, limpio, responsive, navegación compacta, casos segmentados, resultados destacados cuando existen y herramientas solo cuando están documentadas.
- No inventar métricas, herramientas, imágenes ni atribuciones. Mantener en cada caso los textos fuente, áreas, datos y enlaces documentados. Las referencias visuales y anotaciones de Zabrinna están en `docs/REFERENCIAS-PORTFOLIO.md`.
- Astro Docs MCP está registrado en la configuración local de Codex con el nombre `astro-docs`.

# Agentes y herramientas

- Este archivo es la fuente única de instrucciones. Codex lo lee directamente; Claude Code lo carga a través de `CLAUDE.md`, que solo lo importa. No duplicar reglas en `CLAUDE.md`.
- La skill de diseño Impeccable está en `.agents/skills/impeccable/`. Claude Code la usa mediante el enlace simbólico `.claude/skills/impeccable`, sin copia. Sus hooks automáticos (`.codex/hooks.json`) solo se aplican en Codex.
- Node.js está instalado en `/usr/local/bin` (v24). Si el comando `pnpm` no está habilitado, usar `corepack pnpm <comando>`.

# Flujo de trabajo

- Realiza primero todo el trabajo de código en local. No edites ni subas cambios a GitHub mientras la versión local esté en curso.
- Deja el resultado local ejecutable y revisable, y completa las verificaciones apropiadas para el cambio. Para la migración actual pasan `astro check`, `astro build` y `scripts/verify-build.mjs` (siete páginas, enlaces, anclas, SEO básico, contenido y navegación circular).
- Trabaja en una rama de cambios. Cuando Zabrinna apruebe la versión local, integra los cambios aprobados en la rama local `main` y súbelos a la rama `main` del repositorio de GitHub.
- No hagas el merge ni publiques cambios en `main` antes de esa aprobación explícita.
- Si el directorio de trabajo no tiene Git configurado o la autenticación impide la subida, termina y valida el trabajo local, y explica con claridad qué falta para integrar y publicar.

# Organización de archivos

- Este repositorio contiene únicamente la web. Los materiales de producción y entregables de otros chats están en `../Portfolio-materiales/`, agrupados por caso con instrucciones propias en su `AGENTS.md`.
- No volver a crear `artifacts/` ni `assents/` en este proyecto. Guardar originales, variantes, scripts de imágenes y ZIP en `../Portfolio-materiales/<caso>/produccion/`, `seleccion/` o `entregables/`, según corresponda.
- Copiar a `public/images/` solo las piezas aprobadas para incorporar al sitio. La compilación no debe depender de archivos fuera del repositorio.
- Referencias y propuestas visuales: `docs/`. Mantener `DESIGN.md` y `PRODUCT.md` en la raíz como contexto de diseño para las herramientas y agentes.
- Capturas e informes de verificación temporales: `tmp/` (excluido de Git). La vista previa y el informe de auditoría existentes están en `tmp/visual-review/`.
- La aprobación de esta organización de carpetas no constituye aprobación para publicar la versión web ni integrarla en `main`.
