# Notes Template (Nextra 4 + App Router)

This repository is now a **Nextra 4** documentation/notes template built on **Next.js App Router**.

## Runtime

- Node.js `22.x`
- pnpm `10+` (recommended)

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Add Notes Fast

Drop Markdown/MDX files into `content/` and they are auto-routed by Nextra.

Example:

```bash
mkdir -p content/my-notes
cat > content/my-notes/first-note.mdx <<'EOF'
---
title: First Note
---

# First Note

Hello from Nextra.
EOF
```

Then open:

- `http://localhost:3000/my-notes/first-note`

## Math and Plotly

This template supports:

- LaTeX math syntax in MDX (`$...$` and `$$...$$`)
- fenced code blocks (including `python`)
- Plotly charts via the `PlotlyChart` MDX component

See `content/math-plotly-demo.mdx` for a working example.

## Build

```bash
pnpm build
pnpm start
```

## Deploy To Vercel

This repo is a standard Next.js app at the repository root, so Vercel setup is simple:

1. Import the repository in Vercel.
2. Keep `Root Directory` as `.` (repo root).
3. Framework should auto-detect as `Next.js`.
4. Do not set an Output Directory manually.
5. In Project Settings -> Node.js Version, set `22.x`.

Vercel build command can stay default (`next build`) or use:

```bash
pnpm build
```

## Project Structure

- `app/layout.tsx`: Nextra docs layout wiring (`Layout` + `pageMap`)
- `app/[[...mdxPath]]/page.tsx`: catch-all MDX route for Nextra pages
- `content/`: notes/docs content
- `theme.config.tsx`: Nextra theme configuration
- `mdx-components.tsx`: MDX component bridge for Nextra
- `next.config.mjs`: Nextra plugin + Next config (ESM)
