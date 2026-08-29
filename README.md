# [colegaw.in](https://colegaw.in)

My personal site. TypeScript, Next.js App Router, Tailwind, Linear Sans, Lenis smooth scrolling.

## Editing content

All content lives outside the components, so copy changes never require touching JSX:

| What                                       | Where                   |
| ------------------------------------------ | ----------------------- |
| Intro paragraphs                           | `data/content/intro.mdx` |
| Name, role, "now" card, lists, social links | `data/site.ts`          |

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build
```

Hover maps need `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN` in `.env.local` (copy `.env.example`).

The favicon is `src/app/icon.svg` and the social card is generated at build time from
`src/app/opengraph-image.tsx`.
