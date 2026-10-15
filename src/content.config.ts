import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { areas } from './site';

const metric = z.object({ value: z.string().min(1), label: z.string().min(1) });
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string().min(1),
    title: z.string().min(1),
    summary: z.string().min(1),
    intro: z.string().min(1),
    attribution: z.string().min(1),
    role: z.string().min(1),
    areaLabel: z.string().min(1),
    areas: z.array(z.enum(areas.map((area) => area.id))).min(1),
    scope: z.string().min(1),
    period: z.string().optional(),
    order: z.number().int().positive(),
    featured: z.boolean().default(false),
    highlight: metric,
    results: z.object({ paragraphs: z.array(z.string().min(1)).min(1), metric: metric.optional() }).optional(),
    tools: z.array(z.object({ name: z.string().min(1), use: z.string().min(1) })).default([]),
    links: z.array(z.object({ url: z.url({ protocol: /^https?$/ }), label: z.string().min(1) })).default([]),
  }),
});

export const collections = { projects };
