/**
 * Interacciones de las páginas de caso de estudio:
 * aparición al hacer scroll, barra de progreso de cada sección,
 * conteo de KPIs, destello de color y cursor propio.
 */

// Cambia a false para apagar el cursor propio
const CUSTOM_CURSOR = true

const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches
const root = document.documentElement

/* ===== Aparición al hacer scroll ===== */
const REVEAL_SELECTORS = [
  '.case-eyebrow',
  '.case-title',
  '.case-intro',
  '.scroll-cue',
  '.case-meta',
  '.case-banner',
  '.summary__title',
  '.summary-card',
  '.kpi',
  '.step__aside',
  '.step__body > *',
  '.content-block > *',
  '.grid-3 > .card',
  '.next-case'
].join(',')

const revealItems = Array.from(
  document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS)
)

// Al revelar un KPI arranca su conteo
const onReveal = (el: HTMLElement): void => {
  if (el.classList.contains('kpi')) countUp(el)
}

const reveal = (el: HTMLElement): void => {
  if (el.classList.contains('in')) return
  el.classList.add('in')
  onReveal(el)
}

// Revisión de respaldo: muestra lo que ya está en pantalla o arriba de ella
const revealVisible = (): void => {
  const limit = window.innerHeight * 0.95
  revealItems.forEach((el) => {
    if (
      !el.classList.contains('in') &&
      el.getBoundingClientRect().top < limit
    ) {
      reveal(el)
    }
  })
}

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach(reveal)
} else {
  // Escalona hermanos que aparecen juntos
  revealItems.forEach((el) => {
    const siblings = Array.from(el.parentElement?.children ?? []).filter((s) =>
      revealItems.includes(s as HTMLElement)
    )
    const index = siblings.indexOf(el)
    if (index > 0) {
      el.style.transitionDelay = `${Math.min(index, 4) * 0.08}s`
    }
    el.classList.add('rv')
  })
  root.classList.add('js-reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  )
  revealItems.forEach((el) => {
    observer.observe(el)
  })

  revealVisible()
  window.addEventListener('load', revealVisible)
  window.addEventListener('hashchange', () =>
    requestAnimationFrame(revealVisible)
  )
  window.addEventListener(
    'scroll',
    () => requestAnimationFrame(revealVisible),
    {
      passive: true
    }
  )
  new MutationObserver(revealVisible).observe(root, {
    attributes: true,
    attributeFilter: ['class']
  })
  document.addEventListener('astro:after-swap', revealVisible)
  document.addEventListener('visibilitychange', revealVisible)
}

/* ===== Conteo de KPIs ===== */
function countUp(kpi: HTMLElement): void {
  const valueEl = kpi.querySelector<HTMLElement>('.kpi__value')
  if (valueEl === null || valueEl.dataset.counted === 'true') return
  valueEl.dataset.counted = 'true'

  const original = valueEl.textContent?.trim() ?? ''
  // Solo valores con un número y, opcionalmente, prefijo y sufijo sin otros números (p. ej. +15%)
  const match = original.match(/^([^\d]*)(\d+(?:[.,]\d+)?)([^\d]*)$/)
  if (match === null || reducedMotion) return

  const [, prefix, numberText, suffix] = match
  const decimals = numberText.split(/[.,]/)[1]?.length ?? 0
  const target = Number(numberText.replace(',', '.'))
  const duration = 1400
  const start = performance.now()
  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

  valueEl.setAttribute('aria-label', original)
  const frame = (now: number): void => {
    const t = Math.min((now - start) / duration, 1)
    const current = (target * easeOutCubic(t)).toFixed(decimals)
    valueEl.textContent = `${prefix}${current}${suffix}`
    if (t < 1) {
      requestAnimationFrame(frame)
    } else {
      valueEl.textContent = original
    }
  }
  requestAnimationFrame(frame)
}

/* ===== Progreso de cada sección y destello de color ===== */
const steps = Array.from(document.querySelectorAll<HTMLElement>('.step--main'))
const sections = Array.from(
  document.querySelectorAll<HTMLElement>('[data-sec]')
)
const glow = document.querySelector<HTMLElement>('.case-glow span')
const glowColors: Record<string, string> = {
  accent: 'var(--accent-color)',
  case: 'var(--case-color)',
  anil: 'var(--glow-anil)',
  verde: 'var(--glow-verde)'
}
let glowX = 0
let glowY = 0
let ticking = false

const update = (): void => {
  ticking = false
  const vh = window.innerHeight

  steps.forEach((step) => {
    const rect = step.getBoundingClientRect()
    const p = (vh * 0.35 - rect.top) / Math.max(rect.height - vh * 0.3, 1)
    step.style.setProperty('--p', String(Math.min(Math.max(p, 0), 1)))
  })

  if (glow !== null) {
    const current = sections.find((section) => {
      const rect = section.getBoundingClientRect()
      return rect.top <= vh / 2 && rect.bottom >= vh / 2
    })
    if (current !== undefined) {
      glow.style.setProperty(
        '--glow-color',
        glowColors[current.dataset.sec ?? 'case'] ?? glowColors.case
      )
    }
  }
}

const requestUpdate = (): void => {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}

window.addEventListener('scroll', requestUpdate, { passive: true })
window.addEventListener('resize', requestUpdate)
update()

// Deriva suave del destello con el scroll (fijo si hay movimiento reducido)
if (glow !== null && !reducedMotion) {
  const drift = (): void => {
    const y = window.scrollY
    const targetX =
      window.innerWidth * (0.05 + 0.45 * ((Math.sin(y / 900) + 1) / 2)) - 450
    const targetY = window.innerHeight * 0.12 + Math.cos(y / 700) * 80 - 450
    glowX += (targetX - glowX) * 0.06
    glowY += (targetY - glowY) * 0.06
    glow.style.setProperty('--glow-x', `${glowX.toFixed(1)}px`)
    glow.style.setProperty('--glow-y', `${glowY.toFixed(1)}px`)
    requestAnimationFrame(drift)
  }
  requestAnimationFrame(drift)
}

/* ===== Cursor propio (solo con puntero fino) ===== */
if (CUSTOM_CURSOR && window.matchMedia('(pointer: fine)').matches) {
  const dot = document.createElement('div')
  const ring = document.createElement('div')
  dot.className = 'cursor-dot'
  ring.className = 'cursor-ring'
  dot.setAttribute('aria-hidden', 'true')
  ring.setAttribute('aria-hidden', 'true')

  let x = 0
  let y = 0
  let ringX = 0
  let ringY = 0
  let started = false

  const move = (): void => {
    ringX += (x - ringX) * (reducedMotion ? 1 : 0.16)
    ringY += (y - ringY) * (reducedMotion ? 1 : 0.16)
    dot.style.transform = `translate(${x}px, ${y}px)`
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`
    requestAnimationFrame(move)
  }

  // Aparece hasta el primer movimiento del mouse
  window.addEventListener('mousemove', (event) => {
    x = event.clientX
    y = event.clientY
    if (!started) {
      started = true
      ringX = x
      ringY = y
      document.body.append(dot, ring)
      root.classList.add('has-custom-cursor')
      requestAnimationFrame(move)
    }
    const interactive = (event.target as Element | null)?.closest(
      'a, button, label'
    )
    ring.classList.toggle(
      'is-hover',
      interactive !== null && interactive !== undefined
    )
  })

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0'
    ring.style.opacity = '0'
  })
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = ''
    ring.style.opacity = ''
  })
}
