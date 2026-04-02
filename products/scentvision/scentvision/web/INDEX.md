# web/ — The Surface Organ

> I am the shipped UI — Vite + React. I **consume** `design-language/`; I do not redefine tokens.

**Parent relay:** [`../INDEX.md`](../INDEX.md) → [`../../INDEX.md`](../../INDEX.md) → [`../../.venom/MAP.md`](../../.venom/MAP.md)

---

## Hot Paths

| Layer | Path |
|-------|------|
| Entry | `src/main.jsx` → `App.jsx` |
| Shell / layout | `src/components/` … `RootLayout.jsx` |
| Theme bridge | `src/theme/tokens.js` — re-exports `design-language/voidweave/tokens.json` |
| Pages | `src/pages/` |

---

## Routing — Which Path to Open

| Signal | Open |
|--------|------|
| Routing, page structure | `src/App.jsx`, `src/pages/` |
| Global layout, nav | `RootLayout.jsx` and related |
| Styling / tokens | `src/theme/` then [`../../design-language/INDEX.md`](../../design-language/INDEX.md) |
| Marketing copy | `src/pages/` + product spec at `../PRODUCT-SPEC-v0.1.md` |

---

## Commands

```bash
npm install
npm run dev
```

Run from **`web/`** root.

---

## Signal Flow

```
UI change
      │
      ▼
web/INDEX.md (this file)
      │
      ├── needs token ──► design-language/voidweave/tokens.json (via theme re-export)
      ├── needs product truth ──► ../PRODUCT-SPEC-v0.1.md
      └── needs behavior pattern ──► docs/SIMULATIONS.md (via ../../docs/)
```

---

## What Doesn't Belong Here

| Type | Route to |
|------|----------|
| Token definitions | `design-language/voidweave/` |
| Product decisions | `.venom/memory/MEMORY.md` |
| OpenCode agents | `.opencode/agents/` |

---

## After refactor

When `web/` sits at `products/scentvision/web/`, shorten parent links: `../design-language/INDEX.md`, `../INDEX.md`.
