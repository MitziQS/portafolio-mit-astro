// Plantilla de los casos: el orden de esta lista es el orden en la página y en el menú.
export const CASE_SECTIONS = [
  { key: 'problema', title: 'Problema', label: 'Problema' },
  { key: 'objetivos', title: 'Objetivos', label: 'Objetivos' },
  { key: 'hallazgos', title: 'Hallazgos', label: 'Hallazgos' },
  { key: 'proceso', title: 'Proceso', label: 'Proceso' },
  { key: 'liderazgo', title: 'Liderazgo e influencia', label: 'Liderazgo' },
  { key: 'solucion', title: 'Solución', label: 'Solución' },
  { key: 'resultado', title: 'Resultado', label: 'Resultado' },
  { key: 'reflexion', title: 'Reflexión', label: 'Reflexión' }
] as const

interface SectionConfig {
  show: boolean
  title?: string
  label?: string
}

interface CaseSection {
  id: string
  title: string
  label: string
  inside: string
  outside: string
}

const SECTION_MARK = /<!--\s*seccion:\s*([\w-]+)\s*-->/
const OUTSIDE_MARK = /<!--\s*fuera-de-seccion\s*-->/

const toId = (label: string): string =>
  label
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

// Corta el HTML del .md por sus marcas y devuelve solo las secciones prendidas, en el orden de la plantilla.
export function buildCaseSections(
  html: string,
  config: Record<string, SectionConfig | undefined>,
  caseName: string
): { intro: string, sections: CaseSection[] } {
  const [intro, ...parts] = html.split(SECTION_MARK)
  const bodies = new Map<string, string>()

  for (let i = 0; i < parts.length; i += 2) {
    const key = parts[i]
    if (!CASE_SECTIONS.some((section) => section.key === key)) {
      throw new Error(
        `${caseName}: la sección "${key}" no existe en la plantilla.`
      )
    }
    if (bodies.has(key)) {
      throw new Error(
        `${caseName}: la sección "${key}" está marcada dos veces.`
      )
    }
    bodies.set(key, parts[i + 1])
  }

  const sections = CASE_SECTIONS.flatMap(({ key, title, label }) => {
    const section = config[key]
    if (section?.show !== true) return []

    const body = bodies.get(key)
    if (body === undefined) {
      throw new Error(
        `${caseName}: la sección "${key}" está prendida, pero falta "<!-- seccion: ${key} -->" en el texto.`
      )
    }

    const [inside, outside = ''] = body.split(OUTSIDE_MARK)
    const menuLabel = section.label ?? label
    return [
      {
        id: toId(menuLabel),
        title: section.title ?? title,
        label: menuLabel,
        inside,
        outside
      }
    ]
  })

  return { intro, sections }
}
