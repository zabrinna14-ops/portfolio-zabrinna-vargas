# Conclusiones de referencias del portafolio

Fecha: 16 de octubre de 2026.
Fuente: 14 comentarios de la usuaria, capturas anotadas y comentario adicional sobre DataLab. Son preferencias y propuestas para la siguiente iteración; no cambios ya implementados. La web actual mantiene sus restricciones de HTML/CSS y su identidad navy/crema/serif mientras no se acuerde otra dirección.

## Dirección general

Un portafolio profesional, limpio y editorial, con jerarquía clara y dos niveles de lectura: entender rápidamente el proyecto desde su preview y profundizar después en un caso dividido en secciones. Mostrar estrategia, aportación personal, herramientas y resultados. Espacio en blanco, alineaciones y contraste entre secciones como recursos de organización.

## Referencias y decisiones

| Referencia | Comentarios | Preferencia e implicación |
|---|---|---|
| [Zoë Mills — Rhythm Yoga](https://www.zoemillsportfolio.com/work/rhythm-yoga) | 1 y 2 | Resultados con números grandes y etiquetas breves. Proceso segmentado en pasos numerados y secciones diferenciadas. |
| [Casey Burridge — Portfolio](https://caseyrb.com/portfolio/) | 3 a 6 | Índice filtrable por áreas. Previews con etiqueta, título, resumen, cifras y acceso al caso completo. Distinguir área de trabajo y rol: «Head of Marketing» es un rol, no una categoría. Un caso puede pertenecer a varias áreas. |
| [Andrew Kaufman — Atlantic Health System](https://andrewkaufmancontentstrategist.com/portfolio/atlantic-health-system) | 7 | Continuidad de lectura mediante anterior/siguiente al terminar. La preferencia posterior por Pablo Duobert tiene prioridad para el diseño del cierre. |
| [Jonny Czar — N26](https://www.jonnyczar.com/project/n26#section-mentorship) | 8 y 9 | Menú superior compacto y separado visualmente del contenido. Índice lateral por anclas como opción futura para casos extensos, no requisito inmediato. |
| [Pablo Duobert — Emori](https://pabloduobert.com/recent-work/emori/) | 10 a 13 | Resultados en sección propia con fondo contrastante. Herramientas utilizadas por proyecto. Secciones numeradas con etiqueta a la izquierda y desarrollo a la derecha. Cierre preferido: volver al índice y siguiente proyecto. |
| [Work & Co — IKEA](https://work.co/clients/ikea/) | 14 | Limpieza, márgenes amplios, lectura cómoda y pocos elementos compitiendo por atención. Adaptar el principio a la identidad propia. |
| [DataLab — Rubbermaid](https://wearedatalab.com/en/case-studies/rubbermaid-latam-paid-media-ecommerce/) | Comentario adicional | Ficha lateral izquierda sticky de datos del proyecto y cifras clave. En móvil pasaría al flujo normal. Preferencia descrita por la usuaria; la página no pudo recuperarse con la herramienta web en esta revisión. |

## Arquitectura propuesta, pendiente de implementación

1. Inicio: presentación y propuesta profesional, acceso a proyectos.
2. Índice de proyectos: filtros por área, previews y uno o varios proyectos destacados según contenido disponible.
3. Caso: título y síntesis; ficha de cliente, rol, periodo, áreas y alcance cuando existan datos; reto y objetivo; enfoque y decisiones; ejecución y piezas; resultados; herramientas; cierre con volver al índice y siguiente proyecto.
4. Sobre mí y contacto accesibles desde el menú principal.

La longitud y las secciones deben ajustarse al material real de cada caso. No convertir casos breves en procesos artificialmente largos. Páginas individuales por proyecto son una recomendación para separar índice y lectura, no una decisión aprobada ni una condición técnica.

## Tres elementos distintos

- Ficha del proyecto: contexto y responsabilidad (cliente, rol, fechas, áreas).
- Resultados: efectos del trabajo, con cifras y explicación cuando estén documentados.
- Herramientas: programas realmente usados en ese proyecto y, si ayuda, para qué se utilizaron.

No forzar métricas en todos los proyectos. Distinguir volumen/alcance de impacto. Ejemplos existentes: automatización de aproximadamente 60 a 15 minutos (75 % menos en esa tarea); Croque-Quedada, 30 asistentes de 30 plazas en la primera edición y 15 de 30 en la segunda. Los 70+ clientes de YACREA describen alcance profesional, no un resultado atribuible a un caso concreto.

## HTML y CSS frente a JavaScript

Previews, páginas de caso, anclas, pasos, fichas sticky, bloques de resultados, herramientas y navegación entre proyectos pueden hacerse con HTML y CSS.

Un filtro sencillo por una categoría cada vez puede hacerse sin JS con radios y CSS (:checked; opcionalmente :has). Mantener semántica de formulario, etiquetas, selección visible y navegación por teclado. Sin CSS, todos los proyectos deben seguir disponibles.

JS no es obligatorio para ese filtro básico. Sería aconsejable para búsqueda textual, combinaciones complejas, contador/anuncio de resultados dinámicos y gestión avanzada del estado. También puede haber categorías en páginas HTML separadas. El 17 de octubre de 2026 Zabrinna autorizó JS para mejorar el filtro: se añadió como mejora progresiva (área en la URL y la sesión, recuento anunciado), sin quitar el filtro con CSS.

## Prioridades

- Base: índice con previews informativas, etiquetas por área, casos segmentados, resultados destacados, herramientas y cierre volver/siguiente.
- Adaptación: menú compacto, ficha sticky en escritorio y filtros sencillos con pocas categorías útiles.
- Futuro: índice lateral por anclas solo en casos cuya longitud lo justifique.

## Límites de interpretación

Las anotaciones no piden copiar una web completa ni cambiar automáticamente colores o tipografías. El objetivo es adaptar patrones de organización a la identidad existente. No se deduce ninguna garantía de SEO de estas preferencias visuales.
