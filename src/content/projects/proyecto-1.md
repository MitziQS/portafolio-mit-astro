---
title: '¿Lo de siempre?'
titleHighlight: ['siempre?']
date: 2024-05-01
cover: '/src/images/projects/proyecto-1/proy-1-banner.jpg'
coverAlt: 'Listado de productos recurrentes'
company: 'Jüsto.mx'
role: 'Product Designer'
status: 'En producción'
process: 'Datos → hipótesis → principios del MVP → lanzamiento → ajustes'
summary: 'Cómo transformé un historial de compras que casi nadie usaba en una forma rápida de volver a comprar lo de siempre: por departamento y frecuencia, no por fecha. Pasó de usarlo el 27% al 44% de los usuarios recurrentes.'
summaryHighlight: ['por departamento y frecuencia, no por fecha']
tags: ['Producto', 'Recompra', 'App y Web', 'MVP + iteración']

# Tarjeta de la home
card:
  order: 1
  image: '/src/images/projects/proyecto-1/proyecto-1.jpg'
  summary: 'Cómo transformé un historial de compras que casi nadie usaba en una forma rápida de volver a comprar lo de siempre: por departamento y frecuencia, no por fecha. Pasó de usarlo el 27% al 44% de los usuarios recurrentes.'
  techs: ['Figma', 'illustrator']

# Tarjetas de arriba: show prende o apaga; place es opcional (side o full)
cards:
  - show: true
    label: 'El punto de partida'
    text: |
      <p>El 70% de los usuarios recurrentes repetían sus compras, pero solo el 20% usaba el componente.</p>
      <p>Objetivo: mejorar la usabilidad, aumentar Home Add to Cart y facilitar que los usuarios recurrentes hagan su súper más rápido.</p>
  - show: true
    label: 'Mi rol'
    text: |
      <p>Product Designer · 2024 · may–dic</p>
      <p>Tribu Usuarios (Growth), con PM, Data, Back y desarrollo; V2 con dos diseñadores más.</p>
      <p>Lideré el replanteamiento de la funcionalidad: definí hipótesis, prioricé un MVP y decidí qué optimizar y qué postergar.</p>
  - show: true
    label: 'El producto'
    text: |
      <p>"Lo de siempre" es la funcionalidad que permite a usuarios recurrentes completar su compra semanal de manera más rápida, en la app y la web de Jüsto.</p>
  - show: true
    label: 'Resultados'
    place: full
    text: |
      <div class="kpi-grid" aria-label="Resultados clave">
        <div class="kpi">
          <div class="kpi__label">Estado</div>
          <div class="kpi__value kpi__value--text">En producción</div>
          <div class="kpi__label">Salió como "Haz tu súper en 15 min" (v1 en agosto 2024, ajustes hasta diciembre).</div>
        </div>
        <div class="kpi">
          <div class="kpi__label">Métrica destacada</div>
          <div class="kpi__value">27% → 44%</div>
          <div class="kpi__label">de los usuarios recurrentes la usan. +17 puntos.</div>
        </div>
        <div class="kpi">
          <div class="kpi__label">Impacto en negocio</div>
          <div class="kpi__value kpi__value--text">Home A2C</div>
          <div class="kpi__label">Uno de los dos factores del crecimiento del KR (MX al 163% de la meta en nov 2024).</div>
        </div>
      </div>

# Secciones de la plantilla: show prende o apaga; title y label son opcionales
sections:
  problema:
    show: true
    title: 'El reto'
    label: 'Reto'
  objetivos:
    show: true
    title: 'Research'
    label: 'Research'
  hallazgos:
    show: true
    title: 'Síntesis'
    label: 'Síntesis'
  proceso:
    show: true
    title: 'Principios y alcance del MVP'
    label: 'MVP'
  liderazgo:
    show: true
    title: 'Arquitectura de información'
    label: 'Arquitectura'
  solucion:
    show: true
    title: 'Solución'
    label: 'Solución'
  resultado:
    show: true
    title: 'Validación e iteración'
    label: 'Validación'
  impacto:
    show: true
    title: 'Post-lanzamiento'
    label: 'Impacto'
  reflexion:
    show: true
    title: 'Cierre'
    label: 'Cierre'
---

<!-- seccion: problema -->

<div class="case-quote-block">
  <p class="case-label">El problema</p>
  <p class="case-question">"El usuario no tiene un espacio donde pueda navegar y encontrar con facilidad sus básicos del súper."</p>
  <p>Siempre tenía que volver a buscar sus productos o explorar un pequeño componente en la home, entre sus fechas de compras anteriores.</p>
</div>

<p>Replantear su valor estratégico para que realmente representara el hábito natural de recompra, redujera el esfuerzo cognitivo y acelerara la toma de decisión.</p>

<!-- seccion: objetivos -->

<div class="grid-3">
  <article class="card">
    <h3>Encuesta</h3>
    <p>Recurrentes con una compra en la última semana, separados entre quienes usaban la funcionalidad y quienes no.</p>
  </article>
  <article class="card">
    <h3>Benchmark</h3>
    <p>Walmart, Gopuff, PedidosYa e Instacart: mejores prácticas de recompra.</p>
  </article>
  <article class="card">
    <h3>Workshop</h3>
    <p>Con otros diseñadores, para revisar el journey y encontrar otros momentos de recompra.</p>
  </article>
</div>

<figure class="media">
  <img src="/imagenes/project1/Analisis-competitivo.png" alt="Benchmark de recompra en Walmart, Gopuff, Weee!, PedidosYa, Rappi e Instacart" />
</figure>

<div class="case-data">
  <p class="case-label">Datos</p>
  <p>70% de los recurrentes repite compras · 20% usa el componente · "Agregar todo" lo usa el 0.2% de las sesiones en web.</p>
</div>

<div class="case-voices">
  <figure class="case-voice">
    <p class="case-label">Voces</p>
    <p class="case-voice__quote">"Normalmente agrego directamente lo que necesito."</p>
    <figcaption>Usuario recurrente</figcaption>
  </figure>
  <figure class="case-voice">
    <p class="case-label">Voces</p>
    <p class="case-voice__quote">"Casi siempre busco directo, pero a veces me meto por departamento para ver si no se me olvida nada."</p>
    <figcaption>Usuario recurrente</figcaption>
  </figure>
</div>

<figure class="media">
  <img src="/imagenes/project1/Proyecto1-Paso3.png" alt="Momentos de recompra en el journey: buscador, categorías y carrito" />
</figure>

<!-- seccion: hallazgos -->

<div class="case-insight">
  <p class="case-label">Insight principal</p>
  <p>El problema no estaba en la intención de recompra, sino en cómo el sistema acompañaba ese comportamiento.</p>
</div>

<div class="grid-3">
  <article class="card">
    <h3>No la veían</h3>
    <p>Muchos usuarios no sabían que existía.</p>
  </article>
  <article class="card">
    <h3>El orden por fecha no servía</h3>
    <p>Era un historial de todo lo comprado alguna vez.</p>
  </article>
  <article class="card">
    <h3>Ya saben qué comprar</h3>
    <p>Prefieren ir directo al buscador.</p>
  </article>
  <article class="card">
    <h3>App y web, distintas</h3>
    <p>La visibilidad y el comportamiento cambiaban.</p>
  </article>
  <article class="card">
    <h3>Agotados</h3>
    <p>Productos agotados sin alternativas sugeridas.</p>
  </article>
</div>

<figure class="media">
  <img src="/imagenes/project1/Definicion.png" alt="Jobs to be done, pains y joins de la recompra" />
</figure>

<!-- seccion: proceso -->

<div class="grid-2">
  <article class="card">
    <h4>Hipótesis</h4>
    <p>Si en lugar de ordenar por fecha de compra organizamos los productos por departamento, mejoramos la navegación y facilitamos la recompra.</p>
  </article>
  <article class="card">
    <h4>Hipótesis</h4>
    <p>Si la experiencia de recompra se alineaba mejor con el hábito real del usuario, su adopción aumentaría sin necesidad de incentivos adicionales.</p>
  </article>
</div>

<div class="grid-3">
  <article class="card">
    <h3>Visibilidad estratégica</h3>
    <p>Un lugar coherente dentro del flujo de compra, sin competir con la búsqueda.</p>
  </article>
  <article class="card">
    <h3>Claridad sobre exhaustividad</h3>
    <p>Facilitar decisiones rápidas antes que mostrar todo el historial.</p>
  </article>
  <article class="card">
    <h3>Escalabilidad</h3>
    <p>Funcionar en app y web, y permitir iteraciones basadas en datos.</p>
  </article>
</div>

<div class="grid-3">
  <article class="card">
    <h4>Decisión</h4>
    <h3>Solo lo que compras seguido</h3>
    <p>Solo productos comprados 3 o más veces: deja de ser un historial.</p>
  </article>
  <article class="card">
    <h4>Decisión</h4>
    <h3>Sin "agregar todo"</h3>
    <p>En web solo lo usaba el 0.2% de las sesiones.</p>
  </article>
  <article class="card">
    <h3>Cómo se mediría el éxito</h3>
    <p>Adopción y uso entre usuarios recurrentes.</p>
  </article>
  <article class="card">
    <h4>Decisión</h4>
    <h3>Sin filtros por frecuencia en v1</h3>
    <p>No era práctica común en el benchmark y costaba mucho en desarrollo y data. Sí se incluyó el modelo de data.</p>
  </article>
  <article class="card">
    <h4>Decisión</h4>
    <h3>Solo para Retention</h3>
    <p>3+ compras y al menos una en los últimos 30 días. En Activation todavía no hay hábito que mostrar.</p>
  </article>
  <article class="card">
    <h4>Postergado</h4>
    <h3>Quedó fuera</h3>
    <p>Cómo sale un producto de la lista (3 opciones exploradas) y sustitutos de agotados: mucho esfuerzo para un MVP.</p>
  </article>
</div>

<!-- seccion: liderazgo -->

<div class="case-quote-block">
  <p class="case-label">Principio en una frase</p>
  <p class="case-question">Ordenar según cómo los usuarios piensan su súper, no según cómo el sistema guardaba sus compras.</p>
</div>

<div class="case-compare">
  <figure>
    <img src="/imagenes/project1/Problema.png" alt="Antes: componente pequeño en la home con el historial por fecha de compra" />
    <figcaption><strong>Antes</strong> Historial de todo lo comprado alguna vez, ordenado por fecha de compra, en un componente pequeño de la home.</figcaption>
  </figure>
  <figure>
    <img src="/imagenes/project1/Diseno.png" alt="Después: productos por departamento y frecuencia dentro de un bottom sheet" />
    <figcaption><strong>Después</strong> Productos por departamento y frecuencia de compra, dentro de un bottom sheet.</figcaption>
  </figure>
</div>

<!-- seccion: solucion -->

<div class="grid-3">
  <article class="card">
    <h3>Jerarquía y agrupación</h3>
    <p>Por departamento y frecuencia, priorizando claridad sobre volumen.</p>
  </article>
  <article class="card">
    <h3>Patrones consistentes</h3>
    <p>La misma acción se comporta igual en app y web.</p>
  </article>
  <article class="card">
    <h3>Estados y accesos claros</h3>
    <p>Sin interrumpir el flujo natural de compra.</p>
  </article>
</div>

<figure class="media">
  <img src="/imagenes/project1/Proyecto1-Paso4.png" alt="Flujos de la solución: favoritos por departamento y acceso a Lo de siempre desde la home" />
</figure>

<!-- seccion: resultado -->

<div class="case-data">
  <p class="case-label">Un mes después del lanzamiento</p>
  <p>Contacté a usuarios para escuchar cómo la usaban. 4 de 7 no habían notado la sección: la visibilidad seguía siendo el problema.</p>
</div>

<h3>Segunda iteración: 3 hipótesis</h3>

<ol class="case-steps">
  <li>
    <span class="case-steps__n">1</span>
    <div>
      <h4>Subirla en la home</h4>
      <p>Los clics pasaron de 13% a 23.7% después de moverla.</p>
    </div>
  </li>
  <li>
    <span class="case-steps__n">2</span>
    <div>
      <h4>Ampliar el área cliqueable</h4>
      <p>Y homologar la experiencia entre iOS y Android.</p>
    </div>
  </li>
  <li>
    <span class="case-steps__n">3</span>
    <div>
      <h4>Cambiar el chevron</h4>
      <p>Se descartó: es un patrón que el usuario ya conoce. No reinventamos la rueda.</p>
    </div>
  </li>
</ol>

<div class="case-voices">
  <figure class="case-voice">
    <p class="case-label">Voces</p>
    <p class="case-voice__quote">"Me costó trabajo verla la primera vez… estaría bien que fuera un poco más grande o visible."</p>
    <figcaption>Usuario recurrente</figcaption>
  </figure>
  <figure class="case-voice">
    <p class="case-label">Voces</p>
    <p class="case-voice__quote">"No creo que muchos bajen en la página home."</p>
    <figcaption>Usuaria recurrente</figcaption>
  </figure>
</div>

<figure class="media">
  <img src="/imagenes/project1/Validacion.png" alt="Antes y después: Lo de siempre como Haz tu súper en 15 min, más arriba en la home" />
</figure>

<!-- seccion: impacto -->

<div class="kpi-grid kpi-grid--single" aria-label="Resultado">
  <div class="kpi">
    <div class="kpi__value">27% → 44%</div>
    <div class="kpi__label">de los usuarios recurrentes la usan.</div>
  </div>
</div>

<div class="case-callout">
  <p class="case-label">Contribución al negocio</p>
  <p>Uno de los dos factores del crecimiento de Home A2C, junto con la personalización de la home. Contribución, no logro exclusivo.</p>
</div>

<h3>Lo que todavía faltaba</h3>

<ul>
  <li>Priorizar por frecuencia real (el azúcar no se compra cada semana)</li>
  <li>Sugerir productos similares y Marca Jüsto</li>
  <li>Señal negativa: "ya no lo compro"</li>
  <li>Sustitutos cuando un favorito está agotado</li>
  <li>Compartir la lista por WhatsApp</li>
</ul>

<!-- seccion: reflexion -->

<blockquote>
  <p>"Los problemas de adopción no siempre se resuelven con más funcionalidades, sino con mejores decisiones sobre qué mostrar, cuándo y por qué."</p>
</blockquote>

<p>Entender el hábito del usuario y representarlo de forma clara fue más efectivo que intentar modificar su comportamiento.</p>
