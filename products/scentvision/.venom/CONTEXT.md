# UNSHELLED Platform (OpenCode) — Context

**Stack:** TypeScript 5.x (plugin), React 18.x + Vite 5.x (web), `@opencode-ai/plugin` 1.3.3, Zod v4, Voidweave tokens

**Structure:** `.opencode/` = VENOM brain (agents, commands, workflows, plugins, skills). `scentvision/` = first product (marketing web + schema). `design-language/voidweave/` = design tokens. All state lives in `.venom/` as flat files (YAML/JSON/MD). No database.

**Hot paths:** Plugin: `session.created` → inject VENOM context; `tool.execute.before` → safety + limits + loop detection (every call); `experimental.session.compacting` → survive context reset. Web: `main.jsx` → `App.jsx` → `RootLayout.jsx` → pages.

**Conventions:** Kebab-case files. Zod for all tool input validation. No TODOs in shipped code. Flat-file state in `.venom/`. React functional components. Hooks over classes.

**Risks:**
1. `venom-core.ts` (581 lines) has zero test coverage — safety-critical code untested
2. Plugin disabled by default in `opencode.json` — VENOM features off unless manually activated
3. ScentVision backend not built — only marketing site exists, no inference pipeline

**Last eaten:** 2026-03-28
