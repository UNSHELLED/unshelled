# ScentVision web (UNSHELLED.AI)

Vite + React. Visual system: **Voidweave** — canonical tokens in `../../design-language/voidweave/` (this app re-exports via `src/theme/tokens.js`). Breakpoints: `compact` &lt;390, mobile &lt;640, tablet 640–1023, desktop ≥1024; `landscapeCompact` for short phone landscape. Safe areas (`viewport-fit=cover`), measured nav height (`--sv-nav-h`), 44px+ touch targets, fluid `clamp()` headings (`.sv-display-xl` / `.sv-display-lg`).

## Layout

| Path | Role |
|------|------|
| `src/App.jsx` | `BrowserRouter` + routes |
| `src/layout/RootLayout.jsx` | Global styles, particles, nav, `<Outlet />` |
| `src/pages/` | `/` home, `/docs`, `/schema`, `/playground`, `/github` (Voidweave repo-preview), `*` 404 |
| `src/theme/tokens.js` | Color + font tokens |
| `src/hooks/` | `useBreakpoint`, `useInView`, `usePageTitle` |
| `src/data/scenes.js` | Mock demo scenes |
| `src/components/sections/` | Hero, Gap, Pipeline, Demo, API, Contribute, Roadmap, Guardrails, Footer |
| `src/components/` | Nav, Reveal, Molecule, shared UI |

## Commands

```bash
npm install
npm run dev
npm run build
```

VENOM appears only as the footer micro-line per product spec.
