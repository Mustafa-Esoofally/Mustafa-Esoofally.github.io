import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({ label: z.string(), href: z.string() });

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    description: z.string(),
    role: z.string().optional(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    category: z.enum(["product", "client", "enterprise", "personal", "in-progress"]).default("personal"),
    status: z.string().optional(),
    private: z.boolean().default(false),
    links: z.array(link).default([]),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/experiences" }),
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    company: z.string(),
    location: z.string().optional(),
    summary: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    order: z.number().default(99),
    tags: z.array(z.string()).optional(),
  }),
});

// "Built at Agno" capability write-ups
const workCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    description: z.string(),
    order: z.number().default(99),
    links: z.array(link).default([]),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
  experiences: experienceCollection,
  work: workCollection,
};
