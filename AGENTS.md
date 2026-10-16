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
