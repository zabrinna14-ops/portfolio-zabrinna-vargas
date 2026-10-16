# Contexto del proyecto

Este directorio contiene el portafolio profesional de Zabrinna Vargas Antinori, especialista en estrategia y comunicación digital, marketing de contenidos y SEO, creatividad y coordinación de proyectos. Los casos parten de materiales de Notion y de trabajo profesional real.

- Repositorio privado de GitHub: <https://github.com/zabrinna14-ops/portfolio-zabrinna-vargas>.
- La versión aprobable y de trabajo está en este directorio. Este directorio tiene Git configurado; comprobar la rama, los cambios pendientes y el estado remoto antes de integrar o subir. No asumir que el contenido local coincide con GitHub.
- En GitHub solo existe la rama `main`. La rama obsoleta `feat/migrate-to-astro` se borró el 16 de octubre de 2026; sus borradores ya estaban incluidos en `main`.
- GitHub CLI está instalado en `/opt/homebrew/bin/gh` con la sesión de `zabrinna14-ops`, que también da credenciales a Git por HTTPS. Si `gh` no está en el PATH de la terminal, usar la ruta completa. El clon local es superficial (shallow).
- Sitio multipágina estático con Astro 7.4.0, Node.js >=22.12 y pnpm. Los filtros funcionan solo con HTML y CSS; un script ligero de la portada los mejora (área en la URL y en la sesión, recuento anunciado). Es el único JavaScript cliente.
- Estructura: `src/components/` componentes compartidos; `src/content/projects/` seis casos en Markdown con esquema validado; `src/pages/` portada y rutas dinámicas; `src/styles/` tokens y estilos; `scripts/verify-build.mjs` validación del resultado generado. `dist/` es salida de compilación, no fuente.
- Comandos del proyecto: `pnpm dev`, `pnpm check`, `pnpm build`, `pnpm verify`, `pnpm preview`.
- Se conservan archivos HTML/CSS antiguos en `legacy-static/` como referencia de la versión anterior. La fuente activa está en `src/`.
- Identidad visual: navy `#202941`, crema `#e8e4d6`, papel `#f4f1e9`, serif de sistema para titulares y sans serif para lectura. Diseño editorial, limpio, responsive, navegación compacta, casos segmentados, resultados destacados cuando existen y herramientas solo cuando están documentadas.
- No inventar métricas, herramientas, imágenes ni atribuciones. Las imágenes provisionales (IA o stock) solo se admiten en ramas de prueba, identificadas con pie visible y registradas en `public/images/FUENTES.md`; deben sustituirse por material original antes de publicar. Mantener en cada caso los textos fuente, áreas, datos y enlaces documentados. Las referencias visuales y anotaciones de Zabrinna están en `docs/REFERENCIAS-PORTFOLIO.md`.
- Publicación (decidido el 16 de octubre de 2026, aún sin publicar): GitHub Pages del repositorio, en `https://zabrinna14-ops.github.io/portfolio-zabrinna-vargas/`. `astro.config.mjs` define `site` y `base` (`/portfolio-zabrinna-vargas/`): los enlaces y las imágenes de los componentes usan `import.meta.env.BASE_URL` (helpers de `src/site.ts`) y las imágenes dentro del Markdown de los casos usan rutas relativas (`../images/...`), nunca `/images/...`. `.github/workflows/deploy.yml` publica la web al actualizar `main`. Todo lo pendiente (repositorio privado, activar Pages, imagen para compartir, ajustes técnicos y orden de ramas) está en `docs/ANTES-DE-PUBLICAR.md`.
- Astro Docs MCP está registrado con el nombre `astro-docs` en la configuración local de Codex y en la de Claude Code (ámbito local de este proyecto).

# Agentes y herramientas

- Este archivo es la fuente única de instrucciones. Codex lo lee directamente; Claude Code lo carga a través de `CLAUDE.md`, que solo lo importa. No duplicar reglas en `CLAUDE.md`.
- La skill de diseño Impeccable está en `.agents/skills/impeccable/`. Claude Code la usa mediante el enlace simbólico `.claude/skills/impeccable`, sin copia. Sus hooks automáticos (`.codex/hooks.json`) solo se aplican en Codex.
- La skill `frontend-design` (de `anthropics/skills`) está en `.agents/skills/frontend-design/`, con enlace simbólico en `.claude/skills/frontend-design`. Orienta la dirección visual, la tipografía y los textos de interfaz. `skills-lock.json` registra su origen; para reinstalarla: `npx skills add anthropics/skills -s frontend-design -a claude-code -a codex -y`.
- Ambas skills señalan como «genéricos» rasgos que en este portfolio son decisiones fijas de Zabrinna. Antes de proponer cambios visuales, respetar la sección «Decisiones fijas» de `DESIGN.md`: no proponer cambiarlas salvo que ella lo pida.
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

# Git: ramas, commits y publicación

## En palabras sencillas

Zabrinna no necesita usar términos técnicos. El agente traduce y explica cada paso así:

| Término | Significa |
|---|---|
| Rama | Una copia de trabajo aparte para una tarea; la versión oficial no se toca. |
| Commit | Un punto de guardado con una nota de qué cambió. Se puede volver a él. |
| Push | Subir la copia de trabajo a GitHub como respaldo. Todavía no es la versión oficial. |
| Merge a `main` | Pasar los cambios aprobados a la versión oficial del portafolio. |

Frases que Zabrinna puede usar y lo que hace el agente:

| Zabrinna dice | El agente hace |
|---|---|
| "Quiero cambiar…", "arregla…", "añade…" | Crea una rama nueva para esa tarea y trabaja en local. |
| "¿Cómo va?", "¿qué hay pendiente?" | Explica en qué rama está, qué está guardado y qué falta. |
| "Enséñamelo" | Abre la vista previa local y muestra el resultado. |
| "Está bien", "validado", "súbelo" | Hace push de la rama a GitHub y abre un Pull Request. |
| "Aprobado, pásalo a la versión oficial" o "merge a main" | Integra en `main`, actualiza GitHub y borra la rama terminada. |
| "Descarta esto", "vuelve a como estaba" | Explica qué se perdería y pide confirmación antes de deshacer. |

El agente también sugiere, sin esperar a que se lo pidan:

- Al empezar: si hay cambios sin guardar o una tarea a medias, lo dice antes de tocar nada y propone qué hacer con ellos.
- Al terminar un cambio: resume en una o dos frases qué hizo, dónde verlo y cuál es el siguiente paso (por ejemplo, "Si te gusta, dime 'validado' y lo subo").
- Si una tarea nueva no tiene relación con la actual: propone hacerla en otra rama.
- Si hay ramas viejas o trabajo que no está en `main`: lo avisa y propone ordenarlo.
- Siempre indica en qué estado está el trabajo: solo en local, subido a GitHub o en la versión oficial.

## Ramas

- Nunca trabajar directamente en `main`. Cada tarea va en su propia rama, creada desde `main` actualizado.
- Nombre: `tipo/descripcion-corta`, en minúsculas, con guiones y sin tildes ni ñ.
  - `feat/` algo nuevo (sección, caso, componente): `feat/caso-campana-seo`.
  - `fix/` corrección de un error: `fix/menu-movil`.
  - `style/` cambios visuales o de CSS sin cambiar contenido: `style/legibilidad-tipografia`.
  - `content/` textos, imágenes o datos de los casos: `content/textos-portada`.
  - `docs/` documentación (`AGENTS.md`, `DESIGN.md`, `docs/`): `docs/lineamientos-git`.
  - `chore/` configuración, dependencias o limpieza: `chore/actualizar-astro`.
  - `test/` experimentos o imágenes provisionales que no se publican: `test/layout-visual`.
- Una rama por tarea. Si aparece algo sin relación con la tarea, proponerlo para otra rama.

## Commits

- Un commit por cambio lógico, no uno al final con todo.
- Formato en español: `tipo: descripción breve`, en imperativo, con menos de 70 caracteres y los mismos tipos que las ramas. Ejemplos: `style: aumentar interlineado en textos de casos`, `fix: corregir ancla rota en navegación del caso 3`.
- Antes de cada commit, revisar el diff y ejecutar las verificaciones del cambio (`pnpm check`, `pnpm build`, `pnpm verify` si cambia el código).
- No incluir `dist/`, `tmp/`, archivos de `../Portfolio-materiales/` ni secretos.

## Push, Pull Request y merge

1. Terminar el trabajo en local y mostrar a Zabrinna la vista previa y el resultado de las verificaciones.
2. Hacer push de la rama (`git push -u origin <rama>`) solo cuando Zabrinna la valide. Los ajustes posteriores van como commits nuevos en la misma rama.
3. Al subir la rama, abrir un Pull Request con el resumen de los cambios y su verificación.
4. Hacer merge a `main` solo con aprobación explícita. Validar el push no equivale a aprobar el merge.
5. Usar un merge que conserve los commits individuales; después borrar la rama en local y en GitHub, y actualizar `main` local (`git pull`).

Sin preguntar: crear ramas, hacer commits locales, ejecutar verificaciones y revisar el estado del repositorio. Preguntar antes de: hacer push, hacer merge a `main`, borrar ramas con trabajo sin integrar o reescribir el historial (`force push`, `rebase` de ramas subidas).
