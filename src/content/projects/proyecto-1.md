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

<section class="summary" aria-labelledby="resumen">
  <h2 id="resumen" class="summary__title">Resumen</h2>
  <div class="summary__grid">
    <!-- Columna izquierda (fija) -->
    <div class="summary__main">
      <article class="summary-card">
        <p class="summary-card__eyebrow">Contexto</p>
        <p>
          “Lo de siempre” es la funcionalidad que permite a usuarios recurrentes completar su compra semanal de manera más rápida. A pesar de ser una pieza clave para mejorar ATC Recurrentes y Home A2C, existía una brecha clara entre comportamiento y uso: <strong>el 70% de los usuarios recurrentes repetían compras similares, pero solo el 20% utilizaba esta funcionalidad.</strong>
        </p>
        <p>
          El desafío consistía en <strong>replantear su valor estratégico,</strong> transformándola en una herramienta que realmente representara el hábito natural de recompra, <strong>redujera el esfuerzo cognitivo y acelerara la toma de decisión</strong> dentro de la experiencia.
        </p>
      </article>
      <article class="summary-card">
        <p class="summary-card__eyebrow">Mi contribución</p>
        <p>
          Lideré el replanteamiento de la funcionalidad desde una perspectiva de producto, definiendo hipótesis claras, priorizando un MVP y tomando decisiones informadas sobre qué optimizar y qué postergar para iteraciones posteriores. <strong> Mi enfoque estuvo en traducir un patrón de comportamiento existente en una experiencia clara y accionable,</strong> alineando objetivos de negocio, necesidades del usuario y viabilidad técnica.
        </p>
      </article>
  </div>

  <!-- Columna derecha (variable: cards opcionales) -->
  <aside class="summary__side" aria-label="Detalles del proyecto">
    <article class="summary-card">
      <p class="summary-card__eyebrow">Cliente</p>
        <p>
          <strong>Jüsto.mx</strong><br />
          Supermercado 100% digital en México, Perú y Brasil.
       </p>
    </article>

  <article class="summary-card">
    <p class="summary-card__eyebrow">Mi puesto</p>
    <p>Product Designer</p>
  </article>
    <article class="summary-card">
    <p class="summary-card__eyebrow">Plataforma</p>
    <p>App y Web</p>
  </article>

  </aside>

  <!-- ✅ Impacto ahora es “full width” debajo de las 2 columnas -->
  <article class="summary-card summary-card--full">
      <p class="summary-card__eyebrow">Impacto</p>
      <p>
        El rediseño <strong>incrementó el uso de “Lo de siempre” entre usuarios recurrentes en +30%,</strong> validando la hipótesis de que una experiencia alineada al hábito natural de recompra mejora su adopción. La funcionalidad pasó a integrarse de forma más clara dentro del flujo de compra, reduciendo fricción y facilitando decisiones recurrentes sin depender de búsqueda manual.
      </p>
    </article>
  </div>
</section>

<!-- PROCESO PASO 1 -->
<section class="step">
  <h2 id="problema" class="headline-2 section-title">El problema y la oportunidad</h2>
  <p>
    Los usuarios recurrentes de Jüsto muestran un comportamiento claro: tienden a repetir los mismos productos en cada compra. Sin embargo, aunque este patrón estaba presente en los datos (70% de los usuarios recurrentes repetían compras similares), la funcionalidad diseñada para facilitar ese hábito —“Lo de siempre”— era utilizada solo por el 20%.
  </p>
  <br>
  <p>
    A través de investigación con usuarios recurrentes y análisis del flujo de compra, identificamos que el problema no estaba en la intención de recompra, sino en <strong>cómo el sistema acompañaba ese comportamiento.</strong> Los usuarios ya sabían qué necesitaban comprar y, en muchos casos, preferían ir directamente al buscador o a los departamentos antes que interactuar con una funcionalidad que no se sentía integrada de forma natural en su recorrido.
  </p>
    <figure class="media">
    <img src="/imagenes/project1/Problema.png" alt="Mapa de momentos clave"/>
  </figure>
  <p>
    Esto reveló una oportunidad de producto clara: reducir la fricción entre el hábito mental del usuario y la forma en que la experiencia lo representaba. Más que incentivar nuevas acciones, el reto era alinear la experiencia con un comportamiento existente, facilitando que los usuarios completaran su compra de manera más rápida y con menor esfuerzo cognitivo.
  </p>

<!-- PROCESO · PASO 2 -->
<section class="step" aria-labelledby="definicion">
  <h2 id="definicion" class="headline-2 section-title">
    Cómo definimos el rumbo
  </h2>

  <p>
    Con el problema claro, el siguiente paso fue definir una dirección de producto, no solo una mejora incremental. Partimos de una hipótesis central: si la experiencia de recompra se alineaba mejor con el hábito real del usuario, su adopción aumentaría sin necesidad de incentivos adicionales.
  </p>
  <br>
  <p>
    Esta dirección se definió a través de sesiones de trabajo con el equipo y contraste con patrones observados en otros productos de e-commerce, lo que nos permitió establecer tres principios para el MVP:
  </p>
  <br>
  <div class="grid-3">
    <article class="card">
      <h4>Visibilidad estratégica</h4>
      <p>
        La funcionalidad debía ocupar un lugar coherente dentro del flujo de compra, sin competir con comportamientos ya consolidados como la búsqueda.
      </p>
    </article>
    <article class="card">
      <h4>Claridad sobre exhaustividad</h4>
      <p>
        Era más valioso facilitar decisiones rápidas que mostrar todo el historial de compras.
      </p>
    </article>
    <article class="card">
      <h4>Escalabilidad</h4>
      <p>
        La solución debía funcionar tanto en app como en web y permitir iteraciones futuras basadas en datos.
      </p>
    </article>
  </div>
    <br>
  <p>
    A partir de estos principios, priorizamos un alcance enfocado en reorganizar la información y el comportamiento de la funcionalidad, dejando fuera del primer lanzamiento ideas de mayor complejidad técnica o dependencia de modelos avanzados de data. El éxito del MVP se mediría principalmente por adopción y uso entre usuarios recurrentes, más que por métricas aisladas de interacción.
  </p>
  <figure class="media">
    <img src="/imagenes/project1/Definicion.png" alt="Mapa de momentos clave"/>
  </figure>
</section>

<!-- PROCESO PASO 3 -->
<section class="step">
  <h2 id="diseno" class="headline-2 section-title">Diseñar un sistema, no una feature</h2>
  <p>
    Desde el diseño, el objetivo no fue <em>“mejorar una sección”</em>, sino construir un sistema capaz de representar el hábito de recompra de forma consistente y escalable. Esto implicó dejar de pensar en <strong>“Lo de siempre”</strong> como un listado histórico y empezar a tratarlo como una capa de apoyo al flujo principal de compra.
  </p>
  <br>
  <p>
    La decisión central fue reorganizar la información en función de cómo los usuarios piensan su súper, no de cómo el sistema almacenaba sus compras. En lugar de priorizar un orden cronológico, el diseño se enfocó en facilitar el reconocimiento rápido de productos habituales, reduciendo el tiempo y esfuerzo necesarios para volver a agregarlos al carrito.
  </p>
  <br>
  <p>
    Para sostener esta lógica, se trabajó en:
  </p>
  <ul>
    <li>
      <strong>Jerarquía y agrupación de productos</strong>, priorizando claridad sobre volumen.
    </li>
    <li>
      <strong>Patrones de interacción consistentes</strong> entre app y web, evitando comportamientos distintos para una misma acción.
    </li>
    <li>
      <strong>Estados y accesos claros</strong>, que permitieran al usuario entender cuándo y cómo interactuar con la funcionalidad sin interrumpir su flujo natural de compra.
    </li>
  </ul>
  <figure class="media">
    <img src="/imagenes/project1/Diseno.png" alt="Prototipo y pruebas" />
  </figure>
  <p>
    El resultado fue una solución que no dependía de un solo punto de entrada ni de una pantalla específica, sino que podía integrarse de forma natural al recorrido del usuario, sentando las bases para futuras iteraciones basadas en frecuencia, relación entre productos y señales de uso real.
  </p>
</section>

<!-- PROCESO PASO 4 -->
<section class="step">
  <h2 id="validacion" class="headline-2 section-title">Qué validamos y qué cambió</h2>

  <section class="content-block">
    <p>
      Una vez en uso, el foco estuvo en observar cómo los usuarios interactuaban realmente con la funcionalidad, más allá de lo esperado en diseño. La validación no se centró solo en si <strong>“Lo de siempre”</strong> se usaba más, sino en cómo se integraba al flujo de compra y si efectivamente reducía fricción frente a comportamientos ya existentes como la búsqueda manual.
    </p>
    <br>
    <p>
      A través del seguimiento de métricas de adopción y sesiones reales de usuarios recurrentes, se confirmó que una mejor alineación con el hábito de recompra aumentaba el uso de la funcionalidad, validando la hipótesis inicial. Sin embargo, también surgieron aprendizajes clave: no todos los productos recurrentes debían mostrarse con la misma prioridad, y el exceso de información podía volver a generar fricción si no se controlaba la jerarquía.
    </p>
    <br>
    <p>
      Estos hallazgos llevaron a ajustes posteriores al primer release, enfocados en:
    </p>
    <br>
    <ul>
      <li>
        <strong>Refinar la priorización de productos</strong> dentro de la funcionalidad.
      </li>
      <li>
        <strong>Ajustar la visibilidad y el acceso</strong>, evitando competir con otros patrones consolidados del usuario.
      </li>
      <li>
        <strong>Preparar el sistema para futuras iteraciones</strong> basadas en señales de uso real, como frecuencia y tiempo entre compras.
      </li>
    </ul>
    <figure class="media">
      <img src="/imagenes/project1/Validacion.png" alt="Prototipo y pruebas" />
    </figure>
    <p>
      Esta etapa permitió confirmar que el valor de la solución no estaba en añadir más opciones, sino en afinar el sistema para responder mejor al comportamiento observado.
    </p>
</section>

<!-- PROCESO PASO 5 -->
<section class="step">
  <h2 id="aprendizaje" class="headline-2 section-title">Qué se lanzó y qué aprendí</h2>

<section class="content-block">
  <p>
    El rediseño de <strong>“Lo de siempre”</strong> se lanzó a producción como una evolución del sistema de recompra, enfocada en mejorar su adopción y utilidad para usuarios recurrentes. El incremento del <strong>+30% en su uso</strong> confirmó que una experiencia alineada al comportamiento real del usuario puede generar impacto sin necesidad de introducir nuevas features complejas.
  </p>
  <br>
  <p>
    Más allá del resultado, este proyecto reforzó un aprendizaje clave en mi forma de diseñar producto: los problemas de adopción no siempre se resuelven con más funcionalidades, sino con mejores decisiones sobre <em>qué mostrar, cuándo y por qué</em>. Entender el hábito del usuario y representarlo de forma clara dentro del sistema fue más efectivo que intentar modificar su comportamiento.
  </p>
  <br>
  <p>
    Hoy aplico este enfoque en otros proyectos de producto, priorizando hipótesis claras, decisiones iterativas y soluciones que acompañen comportamientos existentes, buscando siempre un equilibrio entre experiencia, negocio y viabilidad técnica.
  </p>
</section>
