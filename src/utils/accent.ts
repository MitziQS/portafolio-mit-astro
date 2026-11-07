const escapeHtml = (text: string): string =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

// Devuelve el texto como HTML con la frase de acento (o la última palabra) en <em>
export function accentHtml(text: string, accent?: string): string {
  const phrase =
    accent !== undefined && text.includes(accent)
      ? accent
      : (text.split(' ').at(-1) ?? '')
  const index = text.lastIndexOf(phrase)
  return (
    escapeHtml(text.slice(0, index)) +
    `<em>${escapeHtml(phrase)}</em>` +
    escapeHtml(text.slice(index + phrase.length))
  )
}

// Quita etiquetas HTML para usar el texto en atributos o ids
export const stripTags = (html: string): string => html.replace(/<[^>]*>/g, '')
