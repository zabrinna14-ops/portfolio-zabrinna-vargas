# Design System: Portfolio de Zabrinna Vargas Antinori

## Identidad

Navy #202941, crema #e8e4d6, papel #f4f1e9. Playfair Display para titulares y Lato para lectura (pedido por Zabrinna el 17 de octubre de 2026; antes eran Didot y Arial, y después Inter). Se configuran en `astro.config.mjs` con la API de fuentes de Astro (proveedor Fontsource): se descargan al compilar y se sirven desde el propio sitio, sin peticiones a terceros al visitar la web. Lato 400 y 700 (Lato no tiene 600: las reglas con peso 600 se muestran en 700); Playfair Display 400 normal y cursiva. Toda la web usa números alineados (Playfair trae números antiguos por defecto). Los tokens están en `src/styles/tokens.css` y todas las reglas en una sola hoja, `src/styles/global.css`, que solo usa valores de los tokens.

### Decisiones fijas

Elegidas por Zabrinna. Las skills de diseño (Impeccable, frontend-design) las marcan como patrones genéricos, pero aquí son parte de la identidad: no proponer cambiarlas ni avisar de ellas salvo que Zabrinna lo pida.

- **Fondo crema/papel** (`#f4f1e9` y `#e8e4d6`) con navy `#202941`, basado en su primer portfolio de Canva.
- **Playfair Display para titulares y Lato para lectura.**
- **Hero con pocas capas** (decidido por Zabrinna el 17 de octubre de 2026): nombre, una línea de palabras clave en mayúsculas («Estrategia · Creatividad · Gestión de proyectos»), la frase y el botón. Sin rótulo «Digital Marketing Manager» sobre el nombre (ya figura en la cabecera) ni franja inferior. Sustituye a la decisión anterior de mantener ese rótulo.

Salvia (`--sage: #c7cec2`) y albaricoque (`--apricot: #dcb99e`) son apoyos de los diagramas de automatización y web, no una nueva identidad ni colores para sustituir navy, crema y papel.

## Sistema visual — 17 de octubre de 2026

Aprobado por Zabrinna. Todo valor visual sale de `tokens.css`:

- **Tipografía:** siete tamaños (`--fs-display`, `--fs-1` a `--fs-3` en serif; `--fs-lead`, `--fs-body` 16px, `--fs-small` 14px) más `--fs-label` 12px y dos tamaños de cifra (`--fs-figure`, `--fs-figure-lg`).
- **Etiquetas:** un solo estilo en mayúsculas espaciadas (600, 12px, `--tracking-label`), el mismo de «DIGITAL MARKETING MANAGER». Lo usan los rótulos sobre cada titular (`.eyebrow`), filtros, tarjetas, ficha, pasos, enlaces de acción y navegación entre casos. Los textos descriptivos largos no van en mayúsculas.
- **Espacio:** escala `--s-1` a `--s-10` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px).
- **Rejilla común (`.split`):** columna lateral `--aside` y separación `--col-gap`, iguales en la portada (Sobre mí, Cómo trabajo, Marca personal, Contacto) y en los casos (ficha y relato, Resultados, Herramientas). El titular de cada sección ocupa todo el ancho, con su rótulo encima. Cómo trabajo invierte las columnas (`.split-reverse`, decidido por Zabrinna el 17 de octubre de 2026): los cinco pasos, lo principal, van a la izquierda en la columna ancha, con número, título en serif y texto; a la derecha, Creatividad, Herramientas (con la cifra ≈1 h → 15 min en un recuadro suave) y Equipo, con textos breves. En el HTML los pasos van antes, así que en móvil también se leen primero. Las secciones con fondo (`.band`: Sobre mí, Cómo trabajo, Resultados y Contacto) son bandas a todo el ancho, sin esquinas ni márgenes, con su contenido alineado a la misma rejilla. En la portada los fondos se alternan para que cada sección se distinga de la siguiente: hero crema, Proyectos papel, Sobre mí crema, Cómo trabajo navy, Marca personal papel y Contacto navy.
- **Formas curvas, más amables:** `--radius-sm` 12px, `--radius-md` 24px (tarjetas, ficha y figuras), `--radius-lg` 40px (portada de caso y collage de Marca personal), `--radius-arch` para el arco del hero y el retrato, y `--radius-pill` para menú, filtros y botones. Las secciones, las herramientas y la navegación entre casos no llevan forma de tarjeta: herramientas como lista con línea fina y navegación con enlaces normales.
- **Cifras:** un único componente `Metric` (`.metric`) en dos tamaños: normal en tarjetas, ficha y Sobre mí; grande en Resultados.
- **Ancho:** se mantiene el ancho actual (1440px con márgenes fluidos); unificarlo quedó aplazado por decisión de Zabrinna.

## Arquitectura aplicada — 16 de octubre de 2026

Sitio estático generado con Astro. La portada, la navegación y las seis páginas de caso comparten componentes. El contenido estructurado de los casos vive en Markdown y un esquema tipado, bajo `src/content/projects/`. Cada caso mantiene una dirección `.html`. Referencias y preferencias en docs/REFERENCIAS-PORTFOLIO.md.

## Componentes

- Cabecera sticky clara con nombre y menú compacto en contorno redondeado: Proyectos, Sobre mí y Contacto. En móvil, menú hamburguesa.
- Índice de tarjetas con área, título, cliente, resumen, dato de impacto o alcance identificado y acceso al caso. Solo de Croquetas destacado a todo el ancho; Croque-Quedada y automatización después.
- Filtros radios de selección única con etiquetas y CSS generado desde las áreas compartidas; foco visible, uso con flechas del teclado y proyectos disponibles sin CSS. Mejora progresiva con JavaScript: el área elegida se guarda en la URL (`?area=`) y en la sesión, de modo que «Volver a proyectos» recupera el filtro, y un texto con `aria-live` anuncia cuántos proyectos coinciden. Sin JavaScript el filtro funciona igual, sin recuento. No hay búsqueda. El proyecto destacado solo se presenta como destacado (navy, a todo el ancho) con «Todos»; al elegir un área en la que está etiquetado aparece como una ficha normal más, sin la etiqueta «Proyecto destacado». Solo se ofrecen áreas con algún proyecto. Cada área de un caso debe estar documentada en su relato (regla en `AGENTS.md`). Solo de Croquetas aparece en las cinco áreas; además, Estrategia muestra Croque-Quedada, Planeta Dots y Petritegi; Contenido, esos tres y Storytelling; Web y SEO, Planeta Dots; Eventos, Croque-Quedada; IA y automatización, Automatización · YACREA.
- Casos: cabecera de síntesis y atribución original; ficha izquierda sticky con rol, áreas, fechas cuando constan y dato contextual; desarrollo por secciones con etiqueta a la izquierda y texto a la derecha.
- Numeración solo en pasos de la narración; resultados en superficie navy independiente cuando hay resultados documentados.
- Herramientas como lista contextual, solo si constan en las fuentes.
- Cierre con enlace al índice y siguiente proyecto, en circuito entre los seis casos.

### Extensión visual en prueba local

`ProjectVisual.astro` comparte las portadas entre hero, tarjetas y casos. Mientras faltan las piezas originales, los espacios de imagen usan referencias provisionales: tres imágenes generadas con IA y dos fotografías de stock (Unsplash y Pexels), en WebP local con proporciones reservadas, carga diferida salvo portada y sin pie visible (decisión de Zabrinna del 17 de octubre de 2026). El retrato de stock no representa a Zabrinna y el paisaje rural no representa Petritegi. Fuentes y licencias en `public/images/FUENTES.md`. El detalle de Solo de Croquetas usa el mismo tratamiento. El componente conserva dos explicaciones hechas en HTML/CSS: el flujo semanal de 60 → 15 minutos y una maqueta de arquitectura web, sin pie desde el 17 de octubre de 2026. Esta última no representa una captura del trabajo real.

El hero funciona como portada propia: banda crema a todo el ancho, con el nombre en `--fs-display` y la altura que pide su contenido, para separarlo del índice de proyectos sobre papel. La portada acompaña la presentación con una imagen conceptual propia (no enlaza a un caso); las tarjetas anteponen la pieza visual a la síntesis y el destacado combina superficie navy con dos columnas. Los casos abren con una portada visual. El hero y el retrato enmarcan su imagen con un arco superior. El retrato de Sobre mí es una fotografía real de Zabrinna. Bajo el retrato, «Lo que me caracteriza» se muestra como cuatro desplegables nativos (`<details>`, sin JavaScript) con número y título en letra pequeña; el texto completo se abre al pulsar (decidido por Zabrinna el 17 de octubre de 2026). Las portadas de los casos y el hero son provisionales generadas con IA, sin pie visible y registradas en `public/images/FUENTES.md`. Marca personal (decidido por Zabrinna el 17 de octubre de 2026) muestra en la columna izquierda el proceso como línea de tiempo vertical (Estrategia → Publicación, con un punto por paso) y, dentro del texto tras el segundo párrafo, un collage sin IA de seis publicaciones reales de su Instagram, sin recortar; Planeta Dots mantiene su maqueta. Estado: implementado para revisión local, sin aprobación de publicación.

## Layout y adaptación

Ancho máximo 1440px; márgenes fluidos de 24 a 80px. Dos columnas en tarjetas y ficha/contenido. A 1050px se simplifican las secciones del caso. A 700px todo pasa a una columna; ficha deja de ser sticky; la cabecera ocupa una sola fila (69px) con el nombre y un botón de menú hamburguesa (44px) que despliega Proyectos, Sobre mí y Contacto en un panel bajo la cabecera. Usa el atributo `popover` del navegador, sin JavaScript: se cierra con el mismo botón (que pasa a ×), con Esc o tocando fuera; en la portada, el script del filtro también lo cierra al saltar a una sección. Si el navegador no admite `popover`, el menú se muestra en una segunda fila. Contenido legible con líneas de hasta 70ch, separadores finos y espacio en blanco. Resultados grandes con cifras tabulares. Radios según el sistema visual; píldoras para menú, filtros y botones. Las imágenes provisionales se identifican siempre como tales y no se presentan como trabajo real.

## Accesibilidad

Un H1 por página, landmarks, enlace de salto, anclas con margen para la cabecera, radios nativos etiquetados y foco visible. Movimiento de scroll desactivado con prefers-reduced-motion. Controles principales de al menos 44px.

## Evidencia de verificación

`astro check`, `astro build` y `scripts/verify-build.mjs` pasan. Se verifican siete páginas, metadatos, H1 e IDs únicos, enlaces internos y anclas, contenido de los casos, fichas, resultados/herramientas disponibles, navegación circular y que el único script cliente sea el del filtro de la portada. La revisión visual de escritorio y móvil confirma el diseño responsive, el uso por teclado de filtros y la ficha sticky solo en escritorio.
