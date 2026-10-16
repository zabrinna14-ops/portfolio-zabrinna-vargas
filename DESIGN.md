# Design System: Portfolio de Zabrinna Vargas Antinori

## Identidad

Navy #202941, crema #e8e4d6, papel #f4f1e9. Playfair Display para titulares e Inter para lectura (cambio pedido por Zabrinna el 17 de octubre de 2026; antes eran Didot y Arial). Se configuran en `astro.config.mjs` con la API de fuentes de Astro (proveedor Fontsource): se descargan al compilar y se sirven desde el propio sitio, sin peticiones a terceros al visitar la web. Inter 400 y 600; Playfair Display 400 normal y cursiva. Toda la web usa números alineados (Playfair trae números antiguos por defecto). Los tokens están en `src/styles/tokens.css` y todas las reglas en una sola hoja, `src/styles/global.css`, que solo usa valores de los tokens.

### Decisiones fijas

Elegidas por Zabrinna. Las skills de diseño (Impeccable, frontend-design) las marcan como patrones genéricos, pero aquí son parte de la identidad: no proponer cambiarlas ni avisar de ellas salvo que Zabrinna lo pida.

- **Fondo crema/papel** (`#f4f1e9` y `#e8e4d6`) con navy `#202941`, basado en su primer portfolio de Canva.
- **Playfair Display para titulares e Inter para lectura.**
- **Etiqueta en mayúsculas sobre el nombre en el hero** («DIGITAL MARKETING MANAGER»). Se probó a moverla debajo del nombre en texto normal y Zabrinna prefirió la versión original.

Salvia (`--sage: #c7cec2`) y albaricoque (`--apricot: #dcb99e`) son apoyos de los diagramas de automatización y web, no una nueva identidad ni colores para sustituir navy, crema y papel.

## Sistema visual — 17 de octubre de 2026

Aprobado por Zabrinna. Todo valor visual sale de `tokens.css`:

- **Tipografía:** siete tamaños (`--fs-display`, `--fs-1` a `--fs-3` en serif; `--fs-lead`, `--fs-body` 16px, `--fs-small` 14px) más `--fs-label` 12px y dos tamaños de cifra (`--fs-figure`, `--fs-figure-lg`).
- **Etiquetas:** un solo estilo en mayúsculas espaciadas (600, 12px, `--tracking-label`), el mismo de «DIGITAL MARKETING MANAGER». Lo usan los rótulos sobre cada titular (`.eyebrow`), filtros, tarjetas, ficha, pasos, enlaces de acción y navegación entre casos. Los textos descriptivos largos no van en mayúsculas.
- **Espacio:** escala `--s-1` a `--s-10` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px).
- **Rejilla común (`.split`):** columna lateral `--aside` y separación `--col-gap`, iguales en la portada (Sobre mí, Cómo trabajo, Marca personal, Contacto) y en los casos (ficha y relato, Resultados, Herramientas). El titular de cada sección ocupa todo el ancho, con su rótulo encima. Las secciones con fondo (`.band`: Cómo trabajo, Resultados y Contacto) son bandas a todo el ancho, sin esquinas ni márgenes, con su contenido alineado a la misma rejilla.
- **Formas curvas, más amables:** `--radius-sm` 12px, `--radius-md` 24px (tarjetas, ficha y figuras), `--radius-lg` 40px (portada de caso e imagen de Marca personal), `--radius-arch` para el arco del hero y el retrato, y `--radius-pill` para menú, filtros y botones. Las secciones, las herramientas y la navegación entre casos no llevan forma de tarjeta: herramientas como lista con línea fina y navegación con enlaces normales.
- **Cifras:** un único componente `Metric` (`.metric`) en dos tamaños: normal en tarjetas, ficha y Sobre mí; grande en Resultados.
- **Ancho:** se mantiene el ancho actual (1440px con márgenes fluidos); unificarlo quedó aplazado por decisión de Zabrinna.

## Arquitectura aplicada — 16 de octubre de 2026

Sitio estático generado con Astro. La portada, la navegación y las seis páginas de caso comparten componentes. El contenido estructurado de los casos vive en Markdown y un esquema tipado, bajo `src/content/projects/`. Cada caso mantiene una dirección `.html`. Referencias y preferencias en docs/REFERENCIAS-PORTFOLIO.md.

## Componentes

- Cabecera sticky clara con nombre y menú compacto en contorno redondeado: Proyectos, Sobre mí y Contacto.
- Índice de tarjetas con área, título, cliente, resumen, dato de impacto o alcance identificado y acceso al caso. Solo de Croquetas destacado a todo el ancho; Croque-Quedada y automatización después.
- Filtros radios de selección única con etiquetas y CSS generado desde las áreas compartidas; foco visible, uso con flechas del teclado y proyectos disponibles sin CSS. Mejora progresiva con JavaScript: el área elegida se guarda en la URL (`?area=`) y en la sesión, de modo que «Volver a proyectos» recupera el filtro, y un texto con `aria-live` anuncia cuántos proyectos coinciden. Sin JavaScript el filtro funciona igual, sin recuento. No hay búsqueda.
- Casos: cabecera de síntesis y atribución original; ficha izquierda sticky con rol, áreas, fechas cuando constan y dato contextual; desarrollo por secciones con etiqueta a la izquierda y texto a la derecha.
- Numeración solo en pasos de la narración; resultados en superficie navy independiente cuando hay resultados documentados.
- Herramientas como lista contextual, solo si constan en las fuentes.
- Cierre con enlace al índice y siguiente proyecto, en circuito entre los seis casos.

### Extensión visual en prueba local

`ProjectVisual.astro` comparte las portadas entre hero, tarjetas y casos. Mientras faltan las piezas originales, los espacios de imagen usan referencias provisionales: tres imágenes generadas con IA y dos fotografías de stock (Unsplash y Pexels), en WebP local con proporciones reservadas, carga diferida salvo portada y pie visible que las identifica como provisionales. El retrato de stock no representa a Zabrinna y el paisaje rural no representa Petritegi. Fuentes y licencias en `public/images/FUENTES.md`. Sobre mí, Marca personal y el detalle de Solo de Croquetas usan el mismo tratamiento. El componente conserva dos explicaciones hechas en HTML/CSS: el flujo semanal de 60 → 15 minutos y una maqueta de arquitectura web identificada como referencia. Esta última no representa una captura del trabajo real.

La portada incorpora el proyecto destacado junto a la presentación; las tarjetas anteponen la pieza visual a la síntesis y el destacado combina superficie navy con dos columnas. Los casos abren con una portada visual. El hero y el retrato enmarcan su imagen con un arco superior. Las imágenes fuente, el retrato y las piezas de contenido siguen pendientes de aportación y sustitución. Estado: implementado para revisión local, sin aprobación de publicación.

## Layout y adaptación

Ancho máximo 1440px; márgenes fluidos de 24 a 80px. Dos columnas en tarjetas y ficha/contenido. A 1050px se simplifican las secciones del caso. A 700px todo pasa a una columna; ficha deja de ser sticky y menú ocupa una segunda fila. Contenido legible con líneas de hasta 70ch, separadores finos y espacio en blanco. Resultados grandes con cifras tabulares. Radios según el sistema visual; píldoras para menú, filtros y botones. Las imágenes provisionales se identifican siempre como tales y no se presentan como trabajo real.

## Accesibilidad

Un H1 por página, landmarks, enlace de salto, anclas con margen para la cabecera, radios nativos etiquetados y foco visible. Movimiento de scroll desactivado con prefers-reduced-motion. Controles principales de al menos 44px.

## Evidencia de verificación

`astro check`, `astro build` y `scripts/verify-build.mjs` pasan. Se verifican siete páginas, metadatos, H1 e IDs únicos, enlaces internos y anclas, contenido de los casos, fichas, resultados/herramientas disponibles, navegación circular y que el único script cliente sea el del filtro de la portada. La revisión visual de escritorio y móvil confirma el diseño responsive, el uso por teclado de filtros y la ficha sticky solo en escritorio.
