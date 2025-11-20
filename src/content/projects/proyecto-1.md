---
title: '¿Lo de siempre?'
date: 2023-08-01
cover: '/src/images/projects/proy-1-banner.jpg'
coverAlt: 'Listado de productos recurrentes'
company: 'Jüsto'
role: 'Product Designer'
summary: 'Hice que la recurrencia fuera realmente útil: menos clicks, más claridad y velocidad en la recompra.'
tags: ['e-commerce', 'UX', 'recurrencia']
---

<!-- GRID PRIMARIA: Misión / Cliente / Servicios -->
<section class="grid-2">
  <article class="card">
    <h3>Misión</h3>
    <p>
      “Lo de Siempre” era una funcionalidad importante para Jüsto: mostraba a cada usuario sus productos habituales para agilizar la recompra. Sin embargo, aunque existía desde hacía tiempo, no estaba cumpliendo su propósito. Era poco visible, ofrecía información limitada y no reflejaba la forma real en que las personas hacen su súper cada semana.
    </p>
    <br>
    <p>
      Mi misión fue replantearla desde su valor estratégico: convertirla en un módulo que realmente acompañara el hábito natural de recompra, reduciendo esfuerzo cognitivo y acelerando la decisión. Para lograrlo, trabajé en reorganizar la información, mejorar la claridad del contenido y unificar el comportamiento cross-platform, haciendo que la herramienta fuera más visible, útil y coherente tanto en app como en web.
    </p>
    <br>
    <p>
      Con esto, preparamos las bases para futuras evoluciones en personalización, retención y crecimiento del ticket promedio.
    </p>
  </article>

  <div class="stack" role="complementary">
    <article class="card">
      <h3>Cliente</h3>
      <p><strong>Jüsto.mx</strong><br/>Supermercado 100% digital en México, Perú y Brasil.</p>
    </article>

  <article class="card">
    <h3>Servicios</h3>
    <ul class="bulleted">
      <li>Investigación con usuarios recurrentes y análisis de comportamiento de compra.</li>
      <li>Definición de MVP y alcance funcional junto con producto y desarrollo.</li>
      <li>Facilitación de workshops con PMs y diseño para alinear visión, hipótesis y prioridades </li>
      <li>Priorización de iniciativas por impacto en negocio, esfuerzo y valor para el usuario.</li>
    </ul>
  </div>
  </article>
</section>

<!-- MI CONTRIBUCIÓN -->
<section class="card">
  <h3>Mi contribución</h3>
 <p>
   Comencé auditando la funcionalidad para entender por qué no ayudaba realmente al usuario recurrente. Aunque el 70% repetía los mismos productos, solo el 20% usaba “Lo de Siempre”, una señal clara de problemas de claridad, navegación y organización que no conectaban con su hábito semanal.
  </p>
  <p>
   Con esa visión desde diseño, me reuní con mi PM para comunicarle los hallazgos y definir un MVP realista, alineando expectativas, limitantes y los trade-offs necesarios para avanzar. Esta fase permitió destrabar puntos ambiguos, alinear prioridades y tomar decisiones de producto.
  </p>
  <p>
    En diseño, reorganicé la información y propuse una estructura más cercana al hábito de recompra: categorización por frecuencia y departamento, flujos más intuitivos y una lógica visual que redujera el esfuerzo cognitivo. También unifiqué el comportamiento entre web y app para ofrecer una experiencia coherente.
  </p>
  <p>
    Finalmente, documenté lineamientos UI y consideraciones funcionales para integrarlos al design system, dejando la base preparada para futuras evoluciones en personalización e inteligencia de consumo.
 </p>
</section>

<!-- IMPACTO (KPI CARDS) -->
<section class="card">
  <h3>Impacto</h3>
  <p>
    Antes del rediseño, “Lo de Siempre” existía, pero no generaba el valor esperado: era poco visible, difícil de navegar y no conectaba con el hábito natural de recompra. Esto limitaba su adopción y, en consecuencia, su impacto en la recurrencia y el ticket promedio.
  </p>
  <p>
    Gracias al trabajo en equipo detrás de este proyecto, los usuarios recurrentes lograron completar su compra habitual con mayor fluidez y menor esfuerzo.
  </p>
  <p>
    Los resultados fueron claros:
  </p>
  <div class="kpi-grid">
    <div class="kpi"><div class="kpi__value">+20%</div><div class="kpi__label">Aumento en el uso, señal de que los usuarios comenzaron a integrarla naturalmente en su rutina de compra.</div></div>
    <div class="kpi"><div class="kpi__value">-40%</div><div class="kpi__label">Reducción de pasos en la recompra, haciendo el proceso más ágil y alineado con el hábito del usuario.</div></div>
    <div class="kpi"><div class="kpi__value">+15%</div><div class="kpi__label">Incremento en Home Add-to-Cart gracias a una arquitectura más clara desde el inicio del recorrido.</div></div>
  </div>
</section>

<!-- PROCESO PASO 1 -->
<section class="step">
  <h2 id="investigacion" class="headline-2 section-title">Investigación y descubrimiento</h2>
  <p>
    Antes de diseñar cualquier solución, necesitaba entender qué estaba fallando realmente en la función. Aunque los datos mostraban que el 70% de los usuarios repetía los mismos productos semana a semana, solo el 20% usaba “Lo de Siempre”. Esto señalaba que el problema no era la recurrencia en sí, sino cómo la funcionalidad vivía dentro de la experiencia.
  </p>
  <br>
  <p>
    Para ordenar el reto, facilité un workshop con PMs utilizando la matriz CSD (Certezas, Suposiciones y Dudas). Esto nos permitió diferenciar lo que sabíamos de lo que solo asumíamos y alinear un punto de partida común entre diseño, producto y negocio. Fue un paso clave para reducir ambigüedad y definir qué necesitábamos validar antes de movernos a soluciones.
  </p>
  <br>
  <p>
    Después, realicé un User Journey Map junto con el equipo de diseño para visualizar el recorrido completo de un usuario recurrente. Este ejercicio reveló tres cosas:
  </p>
   <ol class="bulleted">
    <li>Dónde se perdía el valor dentro del flujo.</li>
    <li>Qué decisiones eran más difíciles de tomar para una recompra rápida.</li>
    <li><strong>Qué oportunidades existían </strong> para introducir recomendaciones relevantes basadas en tiempo y frecuencia de compra.</li>
  </ol>

  <p>
    A partir del User Journey Map, identifiqué puntos clave donde la recurrencia podía aportar valor: búsqueda, resultados, categorías, Mi súper y carrito. Cada uno tenía comportamientos y expectativas distintas, por lo que evalué cómo “Lo de Siempre” debía adaptarse sin interrumpir al usuario.
  </p>

  <figure class="media">
    <img src="/imagenes/project1/Proyecto1-Paso3.png" alt="Mapa de momentos clave"/>
  </figure>

  <p>
    En paralelo, analicé cómo otras plataformas resolvían la recompra. Encontré patrones comunes: secciones destacadas, agrupación por departamentos y visibilidad clara de promociones y sustitutos. Esto confirmó la hipótesis de que el problema no era “si la gente quiere repetir productos”, sino cómo facilitarlo sin añadir esfuerzo cognitivo.
  </p>
  <figure class="media">
    <img src="/imagenes/project1/Analisis-competitivo.png" alt="Análisis competitivo"/>
  </figure>
  <p>
    Finalmente, realicé encuestas con usuarios recurrentes. Sus respuestas reforzaron lo encontrado en el journey:
  </p>
  <ul class="bulleted">
    <li>Preferían buscar manualmente para comparar precios y verificar opciones antes de agregar al carrito.</li>
    <li>Se perdían en listas sin orden claro: la visualización por fecha de compra no correspondía con su navegación habitual por categoría, lo que confirmó que nuestra hipótesis iba en la dirección correcta.</li>
    <li>Cuando un producto estaba agotado, la plataforma no ofrecía recomendaciones de sustitutos, generando fricción y abandonos.</li>
  </ul>
  <p>
    Toda esta investigación definió la dirección del proyecto: hacer que “Lo de Siempre” funcionara como una extensión natural del comportamiento real del usuario, no como un módulo aislado dentro de la interfaz.
  </p>
</section>

<!-- PROCESO PASO 2 -->
<section class="step">
  <h2 id="definicion" class="headline-2 section-title">Definición - Primer MVP</h2>
  <p>
    Con los hallazgos de investigación, quedó claro que la solución no podía centrarse únicamente en “hacer más visible” la funcionalidad. Había retos más profundos: la forma en que los usuarios interpretaban la información, cómo navegaban su compra recurrente y qué tan oportuno era el momento en que aparecía “Lo de Siempre” dentro del flujo.
  </p>
    <br>
  <p>
    Para avanzar sin perder foco, facilité sesiones con PMs y desarrollo donde priorizamos las oportunidades identificadas. En esta etapa fue clave separar lo “deseable” de lo “viable”, definiendo el alcance del primer MVP con base en tres criterios:
  </p>

  <ul class="bulleted">
    <li>Impacto en negocio: impulsar la métrica de Home Add-to-Cart y fortalecer la recurrencia.</li>
    <li>Valor para el usuario: reducir esfuerzo cognitivo y agilizar la compra de artículos habituales.</li>
    <li>Viabilidad técnica: aprovechar data disponible y componentes existentes sin frenar el roadmap.</li>
  </ul>

  <p>
    De esta priorización surgió un MVP enfocado en tres acciones concretas:
  </p>
  </section>

  <div class="grid-3">
    <article class="card"><h4>Mejorar la visibilidad y el acceso,</h4><p> ubicando la funcionalidad en puntos del recorrido donde realmente aporta valor.</p></article>
    <article class="card"><h4>Reorganizar la información por departamento y frecuencia,</h4><p> alineando la estructura con la manera natural en la que las personas clasifican mentalmente su súper.</p></article>
    <article class="card"><h4>Usar data como soporte,</h4><p> con reglas claras para sugerir productos relevantes basados en tiempo y adaptación a comportamiento.</p></article>
  </div>

  <p>
    Con el alcance definido, pasé a estructurar cómo debía integrarse “Lo de Siempre” dentro del flujo real de compra. No se trataba solo de mostrar la funcionalidad, sino de identificar en qué momentos del recorrido tenía más sentido recordarle al usuario sus productos habituales y cómo presentar esa información sin añadir fricción.
  </p>
  <br>
   <p>
    Esta decisión conectaba directamente con lo encontrado en investigación: los usuarios pensaban su súper por categorías, no por fechas, y las plataformas de referencia también privilegiaban esa lógica.
  </p>

<!-- PROCESO PASO 3 -->
<section class="step">
  <h2 id="diseno" class="headline-2 section-title">Diseño</h2>
  <p>
    Durante esta fase exploré diferentes alternativas de arquitectura y wireframes para analizar: ué tan intuitiva era la navegación,cómo debía organizarse la información para reducir esfuerzo cognitivo,y qué visualización permitía tomar decisiones más rápidas.
  </p>
  <br>
  <p>
    En estos ejercicios surgió un patrón claro: la lista cronológica existente no representaba la forma en que la gente piensa su súper. La solución no era ordenar por fecha, sino por departamento y frecuencia, facilitando que el usuario encontrara lo que realmente compra semana a semana.
  </p>
  <figure class="media">
    <img src="/imagenes/project1/Proyecto1-Paso4.png" alt="Prototipo y pruebas"/>
  </figure>
  <p>
    Con esa premisa, diseñé un prototipo que transformó “Lo de Siempre” en un bottom sheet estructurado, categorizado y coherente con la lógica visual del resto de la tienda. La funcionalidad dejó de sentirse como un módulo aislado y pasó a integrarse como parte natural del flujo.
  </p>
  <br>
  <p>
    Además, consideré estados reales del inventario: disponibilidad, agotados y sustitutos. Esto permitió que la experiencia dejara de ser estática y se adaptara a escenarios comunes en e-commerce, sin obligar al usuario a buscar alternativas manualmente.
  </p>
  <br>
  <p>
    El diseño final equilibró tres ejes: claridad, velocidad de decisión y consistencia cross-platform, permitiendo que el usuario retomara su compra habitual con fluidez desde cualquier punto de entrada.
  </p>
</section>

<!-- PROCESO PASO 4 -->
<section class="step">
  <h2 id="pruebas" class="headline-2 section-title">Prototipo y pruebas</h2>
<p>
    Con la arquitectura definida, llevé el diseño a un prototipo de alta fidelidad para evaluar si la experiencia realmente hacía más sencilla la recompra y si “Lo de Siempre” funcionaba como un atajo natural dentro del flujo.
  </p>
  <br />

  <p>
    Para validar la propuesta, diseñé escenarios centrados en tareas reales de usuarios recurrentes. Estas pruebas buscaban entender no solo si el diseño era usable, sino si la lógica de organización por departamentos y frecuencia conectaba con el modelo mental del usuario.
  </p>

  <ul class="bulleted">
    <li>Repetir parte de su compra habitual desde el home, sin pasar por búsqueda.</li>
    <li>Acceder a “Lo de Siempre” desde distintas rutas (favoritos, categorías, Mi súper).</li>
    <li>Resolver qué hacer cuando un producto recurrente aparecía agotado.</li>
  </ul>

  <p>
    Realicé pruebas cualitativas con usuarios recurrentes y validé el flujo con stakeholders internos (producto, operaciones y atención al cliente). Esto permitió observar tanto el uso real como las implicaciones operativas de cada decisión.
  </p>
  <br />

  <p>
    Los aprendizajes fueron consistentes:
  </p>

  <ul class="bulleted">
    <li><strong>Los usuarios encontraban “Lo de Siempre” con mayor facilidad,</strong> aunque algunos mantenían el hábito de buscar primero, lo que confirmó la importancia de reforzar el acceso desde el home.</li>
    <li><strong>La organización por departamentos y frecuencia reducía el tiempo de decisión</strong>, pero fue necesario ajustar etiquetas y mensajes para que el beneficio se entendiera al primer vistazo.</li>
    <li><strong>Los sustitutos sugeridos en productos agotados evitaron rupturas del flujo,</strong> reduciendo la necesidad de buscar alternativas manualmente.</li>
  </ul>

  <p>
    Con estos hallazgos, refiné el prototipo ajustando copys, jerarquía visual y accesos dentro del recorrido. El resultado fue una experiencia más directa, entendible y alineada con el hábito real de recompra, lista para implementarse como MVP.
  </p>
</section>

<!-- PROCESO PASO 5 -->
<section class="step">
  <h2 id="entrega" class="headline-2 section-title">Entrega</h2>

  <p>
    Tras las iteraciones del prototipo, consolidé los lineamientos funcionales y visuales del MVP y colaboré estrechamente con desarrollo para asegurar una implementación consistente entre app y web. Documenté reglas, estados, jerarquías y comportamientos, facilitando un handoff claro y alineado con las decisiones de diseño.
  </p>
  <br />

  <p>
    Durante la implementación realicé pruebas QA en Android, iOS y web para validar que la experiencia se comportara de forma coherente en todas las plataformas. Esta etapa me permitió detectar y ajustar diferencias de interacción, microcopys y estados que impactaban la fluidez del recorrido. Trabajar de la mano con el equipo de desarrollo fue clave para resolver estos detalles y garantizar una experiencia uniforme.
  </p>
  <br />

  <p>
    Una vez liberada la primera versión, monitoreamos el desempeño inicial. Los resultados fueron claros: el uso de “Lo de Siempre” pasó del 27% al 44% entre usuarios recurrentes. Más allá de la métrica, las entrevistas posteriores confirmaron que la nueva organización por departamentos facilitaba la navegación y reducía el tiempo dedicado a reconstruir la compra habitual.
  </p>
  <br />

  <p>
    La entrega del MVP no marcó el final del proyecto, sino el inicio de una evolución. La nueva estructura abrió la puerta a futuras mejoras basadas en personalización, inteligencia de consumo y recomendaciones dinámicas. El proyecto dejó establecida una base sólida para construir una experiencia de recompra más predictiva, flexible y alineada con los hábitos reales de los usuarios.
  </p>

  <figure class="media">
    <img src="/imagenes/project1/prototipo.jpg" alt="Vistas del prototipo"/>
  </figure>
</section>

<section class="step">
  <p>
    Estos hallazgos me recordaron que un producto nunca está realmente terminado: cada versión resuelve algo, pero al mismo tiempo revela nuevas aristas. La evolución de “Lo de Siempre” no fue solo un ajuste visual, sino el inicio de un sistema de recompra más flexible, capaz de crecer con los hábitos reales de los usuarios.
  </p>
  <br />

  <p>
    Acompañar el proyecto de principio a fin —investigación, definición, diseño, iteración y QA— reforzó mi forma de trabajar: entender profundamente el comportamiento del usuario, colaborar de forma cercana con desarrollo y tomar decisiones que equilibren impacto, viabilidad y claridad. Es ahí donde el diseño aporta valor real.
  </p>
</section>
