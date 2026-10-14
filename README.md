# mustafa-esoofally.github.io

Personal site of Mustafa Esoofally - Applied AI Engineer in New York.

Built with Astro, React, Tailwind and shadcn/ui. Layout adapted from [Vaibhav Sharma's portfolio](https://github.com/Vaibhav227/portfolio) (MIT).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static site in dist/
```

## Content

- `src/content/profileData.ts` - intro, about, skills, links
- `src/content/projects/*.mdx` - projects (category: product, enterprise, client, in-progress, personal)
- `src/content/work/*.mdx` - work at Agno
- `src/content/experiences/*.mdx` - experience timeline

`/llms.txt`, `/llms-full.txt` and `/sitemap.xml` are generated from the same content.

## Assets

- `scripts/make-icons.mjs` - favicon set from `public/favicon.svg`
- `scripts/make-og.py` - social share image `public/og.png`

Deploys to GitHub Pages via `.github/workflows/deploy.yml`.
