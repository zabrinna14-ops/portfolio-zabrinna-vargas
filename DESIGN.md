# Design System: Portfolio de Zabrinna Vargas Antinori

## Identidad

Navy #202941, crema #e8e4d6, papel #f4f1e9. Serif Didot/Bodoni MT/Times New Roman para titulares; Arial/Helvetica para lectura. Fuentes locales; su apariencia cambia según el equipo. Los tokens están en `src/styles/tokens.css` y las reglas compartidas en `src/styles/global.css`.

## Arquitectura aplicada — 16 de octubre de 2026

Sitio estático generado con Astro. La portada, la navegación y las seis páginas de caso comparten componentes. El contenido estructurado de los casos vive en Markdown y un esquema tipado, bajo `src/content/projects/`. Cada caso mantiene una dirección `.html`. Referencias y preferencias en REFERENCIAS-PORTFOLIO.md.

## Componentes

- Cabecera sticky clara con nombre y menú compacto en contorno redondeado: Proyectos, Sobre mí y Contacto.
- Índice de tarjetas con área, título, cliente, resumen, dato de impacto o alcance identificado y acceso al caso. Solo de Croquetas destacado a todo el ancho; Croque-Quedada y automatización después.
- Filtros radios de selección única con etiquetas y CSS generado desde las áreas compartidas; foco visible, uso con flechas del teclado y proyectos disponibles sin CSS. No hay búsqueda ni recuento dinámico.
- Casos: cabecera de síntesis y atribución original; ficha izquierda sticky con rol, áreas, fechas cuando constan y dato contextual; desarrollo por secciones con etiqueta a la izquierda y texto a la derecha.
- Numeración solo en pasos de la narración; resultados en superficie navy independiente cuando hay resultados documentados.
- Herramientas como lista contextual, solo si constan en las fuentes.
- Cierre con enlace al índice y siguiente proyecto, en circuito entre los seis casos.

## Layout y adaptación

Ancho máximo 1440px; márgenes fluidos de 24 a 80px. Dos columnas en tarjetas y ficha/contenido. A 1050px se simplifican las secciones del caso. A 700px todo pasa a una columna; ficha deja de ser sticky y menú ocupa una segunda fila. Contenido legible con líneas de hasta 70ch, separadores finos y espacio en blanco. Resultados grandes con cifras tabulares. Tarjetas de 12px de radio; pills limitadas a filtros y navegación. Sin imágenes decorativas inventadas.

## Accesibilidad

Un H1 por página, landmarks, enlace de salto, anclas con margen para la cabecera, radios nativos etiquetados y foco visible. Movimiento de scroll desactivado con prefers-reduced-motion. Controles principales de al menos 44px.

## Evidencia de verificación

`astro check`, `astro build` y `scripts/verify-build.mjs` pasan. Se verifican siete páginas, metadatos, H1 e IDs únicos, enlaces internos y anclas, contenido de los casos, fichas, resultados/herramientas disponibles y navegación circular. La revisión visual de escritorio y móvil confirma el diseño responsive, el uso por teclado de filtros y la ficha sticky solo en escritorio.
