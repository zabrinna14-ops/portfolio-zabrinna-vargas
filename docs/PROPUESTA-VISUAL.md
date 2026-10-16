# Propuesta visual para prueba-skill

Estado: prueba implementada en local en `prueba-skill`, pendiente de revisión y sin publicación. Conserva navy, crema y tipografía serif; `visual.css` adapta la composición y `ProjectVisual.astro` comparte el tratamiento visual de hero, tarjetas y casos. Los espacios de imagen usan referencias provisionales a petición de Zabrinna: tres imágenes generadas con IA y dos fotografías de stock, identificadas con pie visible (véase `public/images/FUENTES.md`). Se mantienen el flujo 60 → 15 minutos y el esquema web en HTML/CSS. Las piezas originales, capturas reales, retrato y contenido propio siguen pendientes. Basada en la portada renderizada, componentes compartidos, [DESIGN.md](../DESIGN.md), [PRODUCT.md](../PRODUCT.md) y [REFERENCIAS-PORTFOLIO.md](REFERENCIAS-PORTFOLIO.md). Las referencias externas se interpretan desde las anotaciones guardadas; no se afirma una revisión nueva de sus páginas.

## Dirección

Conservar navy, crema y carácter editorial. Pasar de explicar el trabajo a mostrarlo: piezas reales como protagonistas, con texto que explica la decisión y la aportación personal. El portfolio es una experiencia de exploración de trabajo; no necesita patrones de dashboard ni contratos de CRUD.

## Cambios prioritarios

1. Acercar los proyectos a la primera pantalla. Reducir espacio vertical de presentación y sumar una pieza del proyecto destacado junto al texto. Mantener nombre y propuesta profesional legibles. Una pieza reconocible del trabajo es más útil aquí que una fotografía genérica de oficina.
2. Convertir el destacado en una composición de imagen y síntesis. Solo de Croquetas: colección de personajes, carta o merchandising. Mostrar cliente, aportación y enlace con jerarquía clara. Las demás tarjetas usan una imagen de proporción común y una síntesis breve; evitar que título, resumen y destacado repitan la misma idea.
3. Abrir cada caso con una pieza principal. Después, conservar ficha de proyecto y relato. Insertar pruebas visuales junto a las decisiones correspondientes, con pies que expliquen qué se hizo y para qué. No colocar una galería sin contexto al final.
4. Separar contexto, decisiones y resultados. Mantener resultados contrastados como en las notas de Pablo Duobert y Zoë Mills. En automatización, visualizar 60 → 15 minutos y su alcance semanal. En Croque-Quedada, mostrar 30/30 en primera edición y 15/30 en segunda; no ocultar la segunda. La gestión de 70+ clientes pertenece a experiencia profesional, no a un resultado de proyecto.
5. Aportar cercanía en Sobre mí con un retrato real; en la prueba puede reservarse el espacio y usar una referencia identificada como tal, nunca una persona ficticia presentada como Zabrinna. Acompañar la experiencia con funciones y contexto de los equipos, sin añadir afirmaciones.
6. Convertir Marca personal en muestra de contenido: una pieza vertical y una portada horizontal enlazadas a contenido real. Poster estático y reproducción voluntaria; sin vídeo automático ni carrusel obligatorio.
7. Afinar navegación y movimiento: estados de foco/hover consistentes, subrayados claros y transición sutil de imágenes. Mantener filtros nativos y lectura completa sin JavaScript. No añadir desplazamiento secuestrado, cursor personalizado ni animaciones que oculten contenido. Respetar reduced-motion.

## Mapa de imágenes y assets

| Proyecto / sección | Pieza prioritaria | Qué demuestra | Sustitución final |
|---|---|---|---|
| Solo de Croquetas | Composición de personajes y una aplicación en carta o merchandising | Coherencia de identidad en varios soportes | Diseños propios y capturas reales |
| Croque-Quedada | Cartel + detalle de hoja de juegos; foto del encuentro si existe | Concepto convertido en experiencia | Cartel, dinámicas y foto autorizada |
| Automatización YACREA | Diagrama legible de pasos + vista del sistema anonimizada | Cómo cambia la organización del trabajo | Capturas sin datos de clientes |
| Planeta Dots | Vista de página web y detalle de arquitectura | Estructura, priorización y coordinación | Capturas reales; antes/después solo si hay ambas versiones |
| Petritegi | Fotografía del lugar junto a una pieza de contenido | Relación entre experiencia y comunicación | Material propio o autorizado; la foto contextual no acredita autoría |
| Storytelling audiovisual | Fotograma grande y secuencia breve de tres planos | Guion, encuadre y montaje | Fotogramas del vídeo original |
| Sobre mí | Retrato natural en entorno de trabajo | Identidad y cercanía | Retrato real de Zabrinna |
| Marca personal | Portada YouTube + frame vertical | Lenguaje y variedad de formatos | Contenido propio publicado |

En la prueba actual cada espacio de imagen usa una referencia provisional identificada como tal. El mapa anterior define las piezas fuente que faltan, no recursos ya incorporados. Al aportar material real, conservar fuente/licencia y no presentar stock o mockups como entregables reales. Para procesos sin fotografía, usar diagramas HTML/CSS claros antes que una imagen decorativa; el esquema web actual permanece identificado como maqueta de referencia.

## Orden recomendado de prueba

La prueba ya aplica portada e índice visual y el patrón compartido a los seis casos, con un detalle adicional en Solo de Croquetas. Incluye los espacios de retrato y Marca personal. La revisión local debe validar esta composición; después se sustituirán las referencias provisionales por las piezas originales del mapa. El footer sigue compartido.

## Verificación al implementar

Comparar inicio y caso piloto en escritorio y móvil; navegación y filtros por teclado; foco visible; contraste; zoom y reduced-motion; imágenes con dimensiones reservadas, texto alternativo y carga diferida fuera de portada; Astro check, build, verify-build y verify-dev con cabeceras de navegador. Las imágenes deben estar resueltas y optimizadas, sin prometer fidelidad ni resultados basados en placeholders.
