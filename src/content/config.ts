// src/content/config.ts
import { z, defineCollection } from 'astro:content'
import { CASE_SECTIONS } from '../data/case-sections'

const section = z.object({
  show: z.boolean().default(true),
  title: z.string().optional(),
  label: z.string().optional()
})

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      cover: z.string(),
      coverAlt: z.string().optional(),
      company: z.string().optional(),
      role: z.string().optional(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      card: z.object({
        order: z.number(),
        image: z.string(),
        summary: z.string(),
        techs: z.array(z.string()).default([]),
        // Palabra o frase del título en serif itálica (por defecto, la última palabra)
        accent: z.string().optional()
      }),
      cards: z
        .array(
          z.object({
            show: z.boolean().default(true),
            label: z.string(),
            title: z.string().optional(),
            text: z.string(),
            place: z.enum(['side', 'full']).optional()
          })
        )
        .default([]),
      sections: z
        .object(
          Object.fromEntries(
            CASE_SECTIONS.map(({ key }) => [key, section.optional()])
          )
        )
        .strict()
    })
  })
}
