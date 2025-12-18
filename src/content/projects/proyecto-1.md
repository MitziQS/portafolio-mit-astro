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
    “Lo de siempre” es la funcionalidad que permite a usuarios recurrentes completar su compra semanal de manera más rápida. A pesar de ser una pieza clave para mejorar ATC Recurrentes y Home A2C, su uso era menor al esperado: visualmente confusa, poco confiable y con fricción para encontrar productos habituales.
    </p>
    <br>
    <p>
      Mi misión fue replantearla desde su valor estratégico: convertirla en una herramienta que realmente acompañara el hábito natural de recompra, reduciendo esfuerzo cognitivo y acelerando la decisión. Para lograrlo, trabajé en reorganizar la información, mejorar la claridad del contenido y unificar el comportamiento cross-platform, haciendo que la herramienta fuera más visible, útil y coherente tanto en app como en web.
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
      <li>Definición y priorización de MVP y alcance funcional junto con producto y desarrollo.</li>
      <li>Facilitación de workshops con PMs y diseño para alinear visión, hipótesis y prioridades </li>
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
    <div class="kpi"><div class="kpi__value">+20%</div><div class="kpi__label">en uso de la funcionalidad por parte de usuarios recurrentes.</div></div>
    <div class="kpi"><div class="kpi__value">+12pp en MX</div><div class="kpi__label"> y +8pp en BR en la conversión en flujos que incluían “Lo de siempre”.</div></div>
    <div class="kpi"><div class="kpi__value">+15%</div><div class="kpi__label">Incremento en Home Add-to-Cart de usuarios recurrentes.</div></div>
  </div>
</section>

<!-- PROCESO PASO 1 -->
<section class="step">
  <h2 id="investigacion" class="headline-2 section-title">Investigación y descubrimiento</h2>
  <p>
    Antes de diseñar cualquier solución, necesitaba entender qué estaba fallando realmente en la funcionalidad. Los datos mostraban algo claro: aunque más del 70% de los usuarios repetía productos semana a semana, solo 20% interactuaba con “Lo de Siempre”. No era un problema de hábito —era un problema de cómo la experiencia vivía dentro del flujo.
  </p>
  <br>
  <h4>1. Alinear el reto: separar hechos de suposiciones</h4>
  <p>
    Para ordenar el reto, facilité un workshop con PMs utilizando la matriz CSD (Certezas, Suposiciones y Dudas). Esto nos permitió diferenciar lo que sabíamos de lo que solo asumíamos y alinear un punto de partida común entre diseño, producto y negocio.
  </p>
  <h4>2. Entender la experiencia completa: Journey del usuario recurrente</h4>
  <p>
    Luego mapeé el recorrido del usuario recurrente en conjunto con el equipo de diseño.
    El User Journey Map evidenció dos cosas importantes:
  </p>
   <ol class="bulleted">
    <li>Identificamos oportunidades donde “Lo de Siempre” podía actuar como un motor de recurrencia, no solo como un módulo en la home. Esto abrió una pregunta clave de diseño: ¿Cómo insertar esta funcionalidad en los momentos correctos del flujo —cuando realmente suma valor— sin generar distracciones ni fricción?</li>
    <li>Uno de los aprendizajes más fuertes fue que los usuarios no compran desde una lista, sino a través de un patrón: por departamento → por hábitos → por confirmación rápida. “Lo de Siempre” no respetaba ese orden mental.</li>
  </ol>
    <figure class="media">
    <img src="/imagenes/project1/Proyecto1-Paso3.png" alt="Mapa de momentos clave"/>
  </figure>

  <h4>3. Benchmarking: cómo otras plataformas diseñan la recompra</h4>

  <p>
    En paralelo analicé cómo otras plataformas resolvían este mismo problema. Encontré tres patrones consistentes:
  </p>
  <ul class="bulleted">
  <li>agrupación por departamento como primer nivel cognitivo,</li>
  <li>visibilidad clara de promociones o sustitutos,</li>
  <li>	secciones destacadas en la home para recordar al usuario sus hábitos.</li>
  </ul>
  <p>
    Este análisis reforzó una idea clave: <strong>las plataformas no sólo muestran productos repetidos; diseñan señales de confianza para validar la decisión rápida. </strong> Esto conectó directamente con los indicadores internos: si queríamos mejorar ATC Recurrentes, necesitábamos reducir el esfuerzo cognitivo antes del tap.
  </p>
  <figure class="media">
    <img src="/imagenes/project1/Analisis-competitivo.png" alt="Análisis competitivo"/>
  </figure>

  <h4>4. Validar en campo: encuestas y entrevistas</h4>

  <p>
    Para contrastar hipótesis, realicé encuestas con usuarios recurrentes. Las respuestas tocaron puntos sensibles:
  </p>
  <ul class="bulleted">
    <li>Preferían buscar manualmente para comparar precios y verificar opciones antes de agregar al carrito.</li>
    <li>Las listas ordenadas por fechas de compras no correspondía con su patrón navegación habitual, lo que confirmó que nuestra hipótesis iba en la dirección correcta.</li>
    <li>Cuando un producto estaba agotado, no se ofrecian recomendaciones de sustitutos, generando fricción y abandonos.</li>
  </ul>
  <p>
    Una usuaria lo resumió en una frase que terminó guiando parte del diseño: <strong>“Si tengo que revisar todo otra vez, entonces no es ‘lo de siempre". </strong>
  </p>
</section>

<!-- PROCESO PASO 2 -->
<section class="step">
  <h2 id="definicion" class="headline-2 section-title">Definición - Primer MVP</h2>
  <p>
    Después de entender dónde se perdía el valor de la funcionalidad, necesitaba aterrizar esos hallazgos en una definición clara del problema. “Lo de Siempre” no era únicamente una sección poco utilizada; era una parte importante del flujo para usuarios frecuentes, y su estado actual no estaba ayudando a mejorar indicadores como ATC Recurrentes, Home A2C y ABS, que en ese periodo.
  </p>

  <h4>1. Problema estratégico</h4>
  <div class="grid-1">
    <article class="card"><p>La experiencia actual no representaba el hábito real de compra y no facilitaba una decisión rápida. Esto afectaba tanto la experiencia del usuario como el desempeño del producto.</p></article>
  </div>
  <br>
  <p>
    La funcionalidad existía, pero no vivía en su máximo potencial.
  </p>

  <h4>2. Oportunidad detectada</h4>
  <p>
    La investigación reveló que la oportunidad no estaba en crear una funcionalidad nueva, sino en ordenar y potenciar lo que ya sucedía de forma natural: la recompra. Los usuarios regresaban, buscaban sus productos frecuentes y seguían rutinas claras, pero la experiencia actual no acompañaba ese comportamiento.
 </p>
  <br>
  <p>
    El análisis competitivo confirmó esta dirección: las plataformas con mejor recurrencia son aquellas que ofrecen claridad, orden y señales de confianza desde el primer tap.
  </p>

  <h4>3. Hipótesis de producto</h4>
  <div class="grid-1">
    <article class="card"><p>Si reorganizamos “Lo de Siempre” para que refleje cómo realmente compra el usuario —por departamentos, frecuencia y disponibilidad— entonces aumentará el uso de la funcionalidad y mejorará la rapidez y calidad de la decisión, con impacto directo en indicadores de recompra.</p></article>
  </div>

  <br>
  <p>
    Era una hipótesis simple, pero con un alcance claro:
    reducir el esfuerzo cognitivo y potenciar la decisión rápida en un momento clave del flujo.
  </p>
  </section>

  <h4>4. Estrategia de UX</h4>

  <div class="grid-3">
    <article class="card"><h4>Clarificar la propuesta de valor</h4><p>Que la funcionalidad no se sienta como un historial, sino como una herramienta útil y relevante para la rutina semanal.</p></article>
    <article class="card"><h4>Reducir fricción para decidir</h4><p> Agrupar por departamento y ordenar por frecuencia no era un cambio visual: era una forma de ayudar al usuario a decidir.</p></article>
    <article class="card"><h4>Usar data como soporte</h4><p>con reglas claras para sugerir productos relevantes basados en tiempo y adaptación a comportamiento.</p></article>
  </div>

  <h4>5. Criterios de éxito</h4>

  <p>
    Desde el inicio definimos cómo sabríamos que íbamos en la dirección correcta:
  </p>

  <ul class="bulleted">
  <li> incremento en el uso de “Lo de Siempre”,</li>
  <li> mejora en la tasa de productos agregados desde la sección,</li>
	<li> y señales positivas en ATC Recurrentes y Home A2C</li>
  </ul>
   <p>
    Tener estos criterios claros permitió tomar decisiones con intención y priorizar.
  </p>

<!-- PROCESO PASO 3 -->
<section class="step">
  <h2 id="diseno" class="headline-2 section-title">Diseño</h2>

  <p>
    El diseño de “Lo de Siempre” no empezó con pantallas. Empezó con una pregunta incómoda que apareció al revisar datos: <strong> si los usuarios recurrentes repiten gran parte de su carrito cada semana… ¿por qué seguían reconstruyéndolo manualmente, producto por producto? </strong>
  </p>
  <br>
  <p>
    Ese hallazgo parecía obvio, pero en la práctica estaba generando fricción real: tiempo perdido, carga mental y carritos incompletos. Era el tipo de problema que no se resuelve “embelleciendo” una sección; se resuelve cambiando el nivel de ayuda que le damos al usuario.
  </p>

  <h4>Antes</h4>
  <p>
    La funcionalidad mostraba un listado lineal de productos sin agrupación, sin jerarquía y sin contexto. Esto generaba tres problemas claros:
  </p>

  <ul class="bulleted">
    <li>Era difícil reconocer patrones de compra porque todo se presentaba igual.</li>
    <li>Los productos agotados aparecían sin alternativas, lo que interrumpía la decisión.</li>
    <li>La experiencia variaba entre web, iOS y Android, lo que afectaba tanto la coherencia como el mantenimiento.</li>
  </ul>

  <h4>Después</h4>
  <p>
    Transformé “Lo de Siempre” en un bottom sheet organizado por categorías y frecuencia, con un diseño más limpio, claro y alineado al comportamiento de quienes hacen su súper semanalmente.
  </p>
  <p>
    El nuevo diseño permite:
  </p>
  <ul class="bulleted">
    <li>identificar rápidamente los productos habituales,</li>
    <li>navegar por departamentos (como lo hacen en la tienda física),</li>
    <li>entender disponibilidad antes de decidir,</li>
    <li>y agregar productos sin interrumpir el flujo actual.</li>
  </ul>

  <figure class="media">
    <img src="/imagenes/project1/antesydespues.png" alt="Prototipo y pruebas" />
  </figure>

  <h4>Decisiones de diseño (y por qué tomé cada una)</h4>

  <h4>1. Agrupación por departamento en lugar de un listado cronológico</h4>
  <p>
    En investigación vimos que la gente piensa su compra por secciones (“frutas”, “lácteos”, “limpieza”), no por fechas de compra.
    El diseño anterior obligaba a escanear una lista sin estructura.
  </p>
  <p>
    <strong>Decisión:</strong> agrupar por categoría y priorizar los ítems con mayor repetición.<br>
    <strong>Motivo:</strong> reducir esfuerzo cognitivo y reflejar cómo realmente navegan los usuarios.
  </p>

  <h4>2. Ordenar por frecuencia y relevancia, no por fecha</h4>
  <p>
    La fecha de última compra no ayuda a decidir rápido. La frecuencia sí.
  </p>
  <p>
    <strong>Decisión:</strong> ordenar automáticamente los productos que el usuario compra más seguido.<br>
    <strong>Motivo:</strong> acercar primero lo que casi siempre termina en el carrito; esto impacta el tiempo de acción y el valor de la funcionalidad.
  </p>

  <h4>3. Nuevo tratamiento para productos agotados (y sustitutos potenciales)</h4>
  <p>
    Uno de los principales puntos de fricción era descubrir que un producto frecuente no estaba disponible.
  </p>
  <p>
    <strong>Decisión:</strong> marcar agotados de forma clara, sin ocultarlos, y preparar la estructura para sugerir alternativas equilibradas.<br>
    <strong>Motivo:</strong> preservar la confianza del usuario y evitar abandonos por fricción inesperada.
  </p>

  <h4>4. Unificar comportamiento cross-platform</h4>
  <p>
    La versión anterior tenía diferencias significativas entre plataformas que afectaban tanto la experiencia como la velocidad de desarrollo.
  </p>
  <p>
    <strong>Decisión:</strong> definir un patrón claro adaptable a web, iOS y Android.<br>
    <strong>Motivo:</strong> mejorar coherencia, reducir deuda futura y facilitar experimentación desde Growth.
  </p>

  <h4>Trade-offs y decisiones debatidas</h4>
  <p>
    En el diseño original, “Lo de Siempre” no iba solo. Estábamos diseñando en paralelo una funcionalidad llamada “Listas”, pensada para convivir con “Lo de Siempre” y alimentarse mutuamente: una lógica más inteligente, donde el usuario pudiera guardar, ajustar y repetir compras con aún más intención.
  </p>
  <br>
  <p>
    Pero esa visión completa no salió por un motivo real: tiempo y alcance.
  </p>
  <br>
  <p>
    Trade-off real: preferimos lanzar una versión sólida de “Lo de Siempre” que resolviera la fricción principal de recompra, y dejar “Listas” como una evolución posterior.
  </p>
  <br>
  <p>
    Mencionar esto en tu caso te posiciona muy bien, porque demuestra que:
  </p>
    <ul class="bulleted">
    <li>pensabas en un sistema, no en pantallas,</li>
	  <li>sabías priorizar,</li>
	  <li>y no te casaste con el “feature ideal” si eso bloqueaba el impacto.</li>
    </ul>

  <h4>Cómo este diseño prepara el camino para lo que sigue</h4>
  <p>
    El nuevo modelo visual y estructural deja abierta la puerta a futuras mejoras:
  </p>
  <ul class="bulleted">
    <li>recomendaciones personalizadas,</li>
    <li>sustitutos inteligentes,</li>
    <li>badges de ahorro,</li>
    <li>lógica predictiva basada en frecuencia real,</li>
    <li>oportunidades de A/B testing entre plataformas.</li>
  </ul>
  <p>
    El objetivo no era solo “mejorar la UI”, sino dejar una base sólida para seguir iterando sobre el hábito de recompra, uno de los pilares más importantes del negocio.
  </p>
</section>

<!-- PROCESO PASO 4 -->
<section class="step">
  <h2 id="pruebas" class="headline-2 section-title">Prototipo y pruebas</h2>
  <p>
    Una vez definida la dirección, construí prototipos interactivos para validar si “Lo de Siempre” realmente ayudaba a los usuarios a reconstruir su súper de forma más rápida y natural, sin agregar fricción.
  </p>
  <br>
  <p>
  El foco no estuvo en la estética, sino en el comportamiento:
  ¿se entendía la propuesta?, ¿los usuarios reconocían sus productos habituales?, ¿la experiencia aceleraba la decisión?
  </p>
  <br>
  <p>
  Realicé pruebas moderadas con usuarios recurrentes, planteando escenarios simples de recompra semanal. Sin guiar explícitamente hacia la funcionalidad, observé cómo la encontraban, cómo la interpretaban y qué tan fácil les resultaba avanzar hacia el carrito.
  </p>
  <p>Hallazgos</p>

  <ul class="bulleted">
    <li>La lógica por categorías y frecuencia se entendía de inmediato..</li>
    <li>El flujo se percibía más corto y claro, incluso con el mismo número de productos.</li>
    <li>Tener gran parte del carrito “resuelto” generaba confianza y reducía la carga mental.</li>
    <li>Los estados de disponibilidad claros disminuían la frustración.</li>
  </ul>
</section>

<!-- PROCESO PASO 5 -->
<section class="step">
  <h2 id="entrega" class="headline-2 section-title">Entrega</h2>

  <p>
    El rediseño de “Lo de Siempre” se entregó como una funcionalidad preparada para escalar: con una estructura clara, coherente entre plataformas y alineada al comportamiento real de los usuarios recurrentes.
  </p>
  <br>
  <p>
  Más allá del output visual, el mayor impacto estuvo en resolver un problema que llevaba tiempo sin atenderse: usuarios que repetían gran parte de su súper cada semana, pero tenían que reconstruir su carrito manualmente una y otra vez.
  </p>
  <br />
  <p>
  Desde las primeras semanas, observamos señales claras de mejora:
  </p>
  <ul class="bulleted">
    <li> mayor adopción de la funcionalidad por parte de usuarios recurrentes, </li>
    <li> carritos más completos desde el inicio del flujo, </li>
    <li> y una experiencia percibida como más rápida y confiable. </li>
  </ul>
  <p>
    Esto permitió que los usuarios avanzaran al checkout con menos fricción y más seguridad, y dejó una base sólida para futuras evoluciones en personalización, retención y crecimiento del ticket promedio.
  </p>
</section>

<section class="step">
  <h2 id="entrega" class="headline-2 section-title">Reflexión final</h2>
  <p>
    Diseñar “Lo de Siempre” fue un ejercicio de simplificación consciente.
    El reto no estaba en crear algo nuevo, sino en ordenar mejor lo que ya pasaba cada semana.
  </p>
  <br>
  <p>
    Este proyecto me recordó que cuando el diseño respeta los hábitos del usuario y reduce fricción real, la experiencia se vuelve casi invisible… y eso suele ser una buena señal.
  </p>
</section>
