## Shape — UNSHELLED Platform (OpenCode) — 2026-03-28

**Language:** TypeScript 5.x (plugin), JavaScript/JSX (web)
**Framework:** OpenCode plugin system + Vite 5.x + React 18.x
**Key dependencies:**
- `@opencode-ai/plugin` 1.3.3 — plugin SDK for VENOM hooks
- `zod` v4 — schema validation for tool inputs
- `react` 18.3 + `react-router-dom` 6.28 — SPA routing
- `vite` 5.4 + `@vitejs/plugin-react` — build tooling
- Voidweave tokens — design system (JSON)

**Scripts:**
- OpenCode: no build (plugin loaded raw)
- Web: `npm run dev` (Vite dev), `npm run build` (production), `npm run preview`

**Entry points:**
- `.opencode/plugins/venom-core.ts` — VENOM intelligence layer (581 lines)
- `scentvision/web/src/main.jsx` → `App.jsx` — SPA shell

**Scale:** ~90 source files (excluding node_modules). Key dirs: `.opencode/` (agents, commands, workflows, plugins, skills), `scentvision/` (product), `design-language/voidweave/` (tokens)
