# Contexto del proyecto

Este directorio contiene el portafolio profesional de Zabrinna Vargas Antinori, especialista en estrategia y comunicación digital, marketing de contenidos y SEO, creatividad y coordinación de proyectos. Los casos parten de materiales de Notion y de trabajo profesional real.

- Repositorio privado de GitHub: <https://github.com/zabrinna14-ops/portfolio-zabrinna-vargas>.
- La versión aprobable y de trabajo está en este directorio. Este directorio tiene Git configurado; comprobar la rama, los cambios pendientes y el estado remoto antes de integrar o subir. No asumir que el contenido local coincide con GitHub.
- En GitHub solo existe la rama `main`. La rama obsoleta `feat/migrate-to-astro` se borró el 16 de octubre de 2026; sus borradores ya estaban incluidos en `main`.
- GitHub CLI está instalado en `/opt/homebrew/bin/gh` con la sesión de `zabrinna14-ops`, que también da credenciales a Git por HTTPS. Si `gh` no está en el PATH de la terminal, usar la ruta completa. El clon local es superficial (shallow).
- Sitio multipágina estático con Astro 7.4.0, Node.js >=22.12 y pnpm. No depende de JavaScript cliente para los filtros.
- Estructura: `src/components/` componentes compartidos; `src/content/projects/` seis casos en Markdown con esquema validado; `src/pages/` portada y rutas dinámicas; `src/styles/` tokens y estilos; `scripts/verify-build.mjs` validación del resultado generado. `dist/` es salida de compilación, no fuente.
- Comandos del proyecto: `pnpm dev`, `pnpm check`, `pnpm build`, `pnpm verify`, `pnpm preview`.
- Se conservan archivos HTML/CSS antiguos en `legacy-static/` como referencia de la versión anterior. La fuente activa está en `src/`.
- Identidad visual: navy `#202941`, crema `#e8e4d6`, papel `#f4f1e9`, serif de sistema para titulares y sans serif para lectura. Diseño editorial, limpio, responsive, navegación compacta, casos segmentados, resultados destacados cuando existen y herramientas solo cuando están documentadas.
- No inventar métricas, herramientas, imágenes ni atribuciones. Las imágenes provisionales (IA o stock) solo se admiten en ramas de prueba, identificadas con pie visible y registradas en `public/images/FUENTES.md`; deben sustituirse por material original antes de publicar. Mantener en cada caso los textos fuente, áreas, datos y enlaces documentados. Las referencias visuales y anotaciones de Zabrinna están en `docs/REFERENCIAS-PORTFOLIO.md`.
- Publicación (decidido el 16 de octubre de 2026, aún sin publicar; cambiado a Cloudflare el mismo día): Cloudflare Pages con dominio propio, en la raíz del dominio (sin `base` ni subcarpeta); el repositorio sigue privado. `site` está en `astro.config.mjs`; `BaseLayout.astro` genera a partir de él la URL canónica y `og:url`. Pendiente antes de publicar: 1) elegir y comprar el dominio y sustituir el valor provisional `https://dominio-pendiente.invalid` de `astro.config.mjs`; 2) aprobar una imagen original para compartir (1200×630, en `public/images/`) y ponerla en `defaultImage` de `BaseLayout.astro`, que activa `og:image` y `twitter:card` `summary_large_image`; no usar imágenes provisionales; 3) más adelante, conectar el repositorio en Cloudflare Pages (comando `corepack pnpm build`, carpeta `dist`) y apuntar el dominio; no se usará Netlify. `pnpm verify` avisa con «PENDIENTE» mientras falten 1) o 2).
- Astro Docs MCP está registrado con el nombre `astro-docs` en la configuración local de Codex y en la de Claude Code (ámbito local de este proyecto).

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
