// src/content/config.ts
import { z, defineCollection } from 'astro:content'

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
      tags: z.array(z.string()).default([])
    })
  })
}
