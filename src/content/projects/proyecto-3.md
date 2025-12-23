---
title: 'Pagos y Comisiones'
date: 2021-06-11
cover: '/src/images/projects/proy-3-banner.jpg'
coverAlt: 'Administrador de pagos y comisiones – Hotel resort Cancún'
company: 'Hotel resort (Cancún)'
role: 'UX/UI Designer'
summary: 'Rediseñé flujos internos para agilizar la afiliación a programas de beneficios y la gestión de comisiones, mejorando la eficiencia operativa y la trazabilidad de procesos clave.'
tags: ['hotelería', 'UX/UI', 'design system', 'procesos internos']
---

<!-- GRID PRIMARIA: Misión / Cliente / Servicios -->
<section class="grid-2">
  <article class="card">
    <h3>Contexto</h3>
    <p>
     Este proyecto se desarrolló para una cadena hotelera internacional con modelo de membresías, donde el cierre de una afiliación ocurre durante la estancia del huésped y depende de múltiples áreas operando en paralelo.
    </p>
    <p>
      El reto principal no era la venta en sí, sino cerrar correctamente la afiliación antes del checkout, con toda la información, documentación y validaciones necesarias para que el contrato fuera válido y el proceso pudiera continuar sin fricciones posteriores.
    </p>
    <p>
      Aquí decidí abordar el problema no como un formulario largo, sino como un proceso crítico que necesitaba visibilidad de estado y requisitos mínimos claros para avanzar.
    </p>
  </article>

  <div class="stack" role="complementary">
    <article class="card">
      <h3>Cliente</h3>
      <p>
        Cadena hotelera internacional con operación en múltiples países y un modelo de negocio basado en membresías y programas de beneficios.
      </p>
    </article>

  <article class="card">
    <h3>Servicios</h3>
    <ul class="bulleted">
      <li>Diagnóstico del proceso de enrolamiento de membresías y cierre de contrato.</li>
	    <li>Análisis de flujos operativos y puntos de quiebre en sistemas internos.</li>
	    <li>Definición y organización de la información para un proceso compartido entre distintos roles.</li>
      <li>Redefinición del flujo de enrolamiento con foco en trazabilidad y estados.</li>
      <li>Diseño UX/UI de un sistema interno orientado a operación y cierre de ventas.</li>
    </ul>
  </div>
  </article>
</section>

<!-- MI CONTRIBUCIÓN -->
<section class="card">
  <h3>Mi contribución</h3>
  <p>
    Formé parte del equipo responsable del rediseño del sistema interno de enrolamiento de membresías, con un enfoque en entender el proceso operativo real, más allá del flujo ideal documentado.
  </p>
  <p>
    Mi contribución se centró en identificar puntos críticos de pérdida de información y fricción entre roles, y traducir esa complejidad en una estructura clara, compartida y trazable. Concretamente, trabajé en:
  </p>

  <ul class="bulleted">
	  <li>Analizar cómo se cerraban realmente los contratos en operación diaria, identificando quiebres entre áreas, validaciones tardías y duplicidad de información.
    <li>Definir los estados clave del proceso de enrolamiento y los requisitos mínimos necesarios para avanzar en cada etapa.
    <li>Diseñar una estructura que permitiera visualizar qué estaba completo, qué faltaba y quién había intervenido en cada afiliación.
    <li>Colaborar estrechamente con el equipo para alinear diseño, operación y reglas de negocio en un solo flujo compartido.
  </ul>
  </section>

<!-- IMPACTO (KPI CARDS) -->
<section class="card">
  <h3>Impacto</h3>

  <ul class="bulleted">
    <li>Reduje la pérdida de información crítica durante el proceso de enrolamiento, disminuyendo reprocesos y validaciones tardías en aproximadamente 20–30%.</li>
    <li>Mejoré la visibilidad del estado de cada afiliación, facilitando la colaboración entre áreas y reduciendo dependencias manuales entre roles.</li>
    <li>Optimicé el cierre de contratos antes del checkout del huésped, disminuyendo incidencias detectadas en etapas posteriores del proceso.</li>
    <li>Estandaricé los criterios mínimos por etapa, habilitando un proceso más predecible y auditable para operación y finanzas.</li>
  </ul>

  <p>
    Más allá del impacto operativo, el proyecto fortaleció la confianza interna en el sistema, al convertir un proceso opaco en uno entendible y compartido.
  </p>
</section>

  <p>
    Por acuerdos de confidencialidad, el nombre del cliente y algunos detalles visuales han sido omitidos.
  </p>

<!-- PROCESO PASO 1 INVESTIGACIÓN -->
<section class="step">
  <h2 id="investigacion" class="headline-2 section-title">Investigación y descubrimiento</h2>
  <p>
    El proyecto inició con una fase de entendimiento profundo del proceso operativo real. El objetivo no era solo conocer cómo debería funcionar el sistema, sino entender cómo se cerraban realmente las afiliaciones bajo presión de tiempo, múltiples roles y dependencias entre áreas.
  </p>
    <br>
  <p>
    Para ello, analizamos documentación existente, diagramas de flujo, reportes de hallazgos y realizamos entrevistas con usuarios clave que interactúan diariamente con el sistema, incluyendo perfiles administrativos, legales y financieros.
  </p>
    <br>
  <p>
    Durante esta fase se hizo evidente que el mayor problema no estaba en la cantidad de información a capturar, sino en la falta de visibilidad compartida sobre el estado del proceso. Una afiliación podía avanzar parcialmente sin que fuera claro qué información ya había sido registrada, qué seguía pendiente o quién había intervenido previamente.
  </p>
    <br>
  <p>
    Entre los principales hallazgos se identificaron:
  </p>
  <ul class="bulleted">
    <li>El proceso de enrolamiento era fragmentado y no lineal, con información distribuida en múltiples módulos y pestañas.</li>
    <li>Los usuarios dependían de memoria, experiencia previa o validaciones posteriores para saber si un contrato estaba realmente listo para cierre.</li>
    <li>Errores críticos (documentos faltantes, datos incorrectos, firmas incompletas) solían detectarse demasiado tarde, cuando el huésped ya había abandonado el hotel.</li>
    <li>La participación de múltiples roles en una misma afiliación dificultaba la trazabilidad y generaba ambigüedad sobre responsabilidades y aportaciones.</li>
  </ul>
<br>
  <img src="/imagenes/project3/investigacion.png" alt="Investigación"/>

</section>

<!-- PROCESO PASO 2 DEFINICIÓN-->
<section class="step">
  <h2 id="definicion" class="headline-2 section-title">Definición</h2>
  <p>
    <strong>
      ¿Cómo diseñar un sistema que permita a distintos roles colaborar sobre una misma afiliación,
      con claridad sobre el estado real del proceso, los requisitos mínimos por etapa
      y las responsabilidades involucradas, sin depender de validaciones posteriores?
    </strong>
  </p>

  <br>
<p>
    Este cuestionamiento marcó un punto de inflexión en el proyecto.
    El sistema existente permitía capturar información, pero no ayudaba a responder preguntas clave para la operación diaria:
    ¿Este contrato está realmente listo para cerrar? ¿Qué falta? ¿Quién ya intervino y quién debe hacerlo después?
  </p>
  <br>
 <p>
    La falta de respuestas claras generaba dependencia de validaciones manuales, retrabajo entre áreas y detección tardía de errores críticos, especialmente en un contexto donde el cierre debía completarse antes del checkout del huésped.
  </p>

  <h4>Criterio de diseño</h4>
  <p>
    A partir de este entendimiento, se definieron criterios de diseño orientados a reducir ambigüedad operativa
    y hacer visible el avance real del proceso:
  </p>
  <ul class="bulleted">
    <li><strong>Visibilidad del estado:</strong> cada afiliación debía mostrar claramente en qué punto del proceso se encontraba y qué acciones seguían pendientes.
    <li><strong>Requisitos mínimos por etapa:</strong> no se podría avanzar sin cumplir condiciones críticas que aseguraran un cierre válido.
    <li><strong>Trazabilidad de intervención:</strong> el sistema debía permitir identificar quién había participado en cada etapa del proceso.
    <li><strong>Reducción de ambigüedad:</strong> el diseño debía minimizar la interpretación individual y la dependencia de experiencia previa.
    <li><strong>Soporte a múltiples roles:</strong> la estructura debía funcionar para perfiles distintos sin fragmentar la información.
  </ul>

   <h4>Decisiones clave</h4>

  <div class="grid-3">
    <article class="card">
      <p>Se priorizó estructura y control sobre flexibilidad absoluta, aceptando más reglas a cambio de menos errores críticos.</p>
    </article>
    <article class="card">
      <p>Se decidió modelar el proceso como un sistema de estados, en lugar de un flujo lineal de pasos, para reflejar mejor la realidad operativa.</p>
    </article>
    <article class="card">
      <p>Se evitó añadir más validaciones manuales, enfocándose en la prevención de errores desde el diseño.</p>
    </article>
  </div>
  <br>
  <img src="/imagenes/project3/definicion.png" alt="definición"/>

  </section>

<!-- PROCESO PASO 3 DISEÑO -->
<section class="step">
  <h2 id="diseno" class="headline-2 section-title">Diseño</h2>

  <p>
    El diseño de la solución se centró en traducir los criterios definidos en una estructura operativa clara, capaz de sostener la colaboración entre múltiples roles y reducir errores críticos antes del cierre de la afiliación.
  </p>
  <br>
  <p>
    La decisión clave fue modelar el proceso de enrolamiento como un sistema de estados, en lugar de un flujo lineal. Cada afiliación solo avanzaba cuando cumplía con requisitos mínimos definidos, haciendo visible qué estaba completo, qué faltaba y qué rol debía intervenir.
  </p>
  <br>
  <p>
    Este enfoque permitió detectar y prevenir errores desde etapas tempranas, evitando cierres incompletos que antes solo se identificaban cuando el huésped ya había abandonado el hotel.
  </p>
  <br>
  <p>
    La información se reorganizó según su relevancia operativa —no por su origen técnico— para que todos los roles trabajaran sobre una misma afiliación con una visión compartida del estado real del proceso.
  </p>
  <br>
  <p>
    Se priorizó claridad y control sobre velocidad aparente, aceptando más reglas a cambio de menos reprocesos y dependencias de validaciones posteriores.
  </p>
  <br>
  <img src="/imagenes/project3/diseno.png" alt="diseño"/>

</section>

  <!-- PROCESO PASO 5 ENTREGA -->
  <section class="step">
    <h2 id="entrega" class="headline-2 section-title">Entrega</h2>
    <p>
      Una vez definida la estructura del sistema, el siguiente paso fue validar que el modelo de estados y la reorganización de la información funcionaran en la operación real, no solo en teoría.
    </p>
    <br>
    <p>
      Se desarrolló un prototipo que permitió simular el flujo completo de una afiliación, desde la captura inicial hasta el cierre del contrato, incorporando los distintos estados, requisitos mínimos y puntos de validación definidos previamente.
    </p>
    <h4>Pruebas con usuarios operativos</h4>
    <p>
      Las pruebas se realizaron con usuarios que interactúan diariamente con el sistema, priorizando perfiles administrativos y de operación que suelen detectar errores bajo presión de tiempo.
    </p>
    <ul class="bulleted">
      <li>¿Es claro en qué estado se encuentra una afiliación?
      <li>¿Se entiende qué falta para poder cerrar el contrato?
      <li>¿El sistema reduce la necesidad de validaciones posteriores?
    </ul>
    <p>
      Durante las pruebas, los usuarios pudieron identificar con mayor facilidad: cuándo un contrato aún no estaba listo para cierre, qué información faltaba completar, y en qué punto debían intervenir ellos u otro rol.
    </p>
    </section>

  <!-- PROCESO PASO 6 CONCLUSIÓN -->
  <section class="step">
    <h2 class="headline-2 section-title">Reflexión</h2>
    <p>
      Este proyecto reforzó mi forma de abordar problemas de producto en contextos complejos: no todo se resuelve con más pantallas o menos pasos.
    </p>
    <br>
    <p>
      Aprendí que muchos problemas atribuidos a “errores de captura” o “fallas humanas” en realidad son consecuencia de procesos mal diseñados o invisibles para quienes los operan. Cuando un flujo es crítico para el negocio, el diseño debe hacer visibles los riesgos, incluso si eso implica frenar el avance.
    </p>
    <br>
    <p>
      Hoy aplico este enfoque en proyectos donde la colaboración entre roles, la trazabilidad y la prevención de errores son más importantes que la velocidad aparente del flujo.
    </p>
    <br>
  </section>
</sectvion>
