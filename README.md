# Portfolio

Premium portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Typography:** Geist Sans & Geist Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Home page composing all sections
│   └── globals.css       # Global styles & design tokens
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/         # Hero, Projects, Services, etc.
│   └── ui/               # Reusable UI primitives
├── lib/
│   ├── data/             # Content data (projects, services, etc.)
│   └── utils.ts          # Utility functions
└── types/                # Shared TypeScript types
```

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint             |

## Customization

Edit content in `src/lib/data/` — projects, services, navigation, tech stack, and social links are all data-driven.

Update personal details in `src/lib/data/navigation.ts` (`siteConfig`).
