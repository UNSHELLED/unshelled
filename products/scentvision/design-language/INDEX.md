# design-language/ — The Visual Cortex

> I am the visual system. Static tokens, patterns, and specs — **not** React components.
> The **`web/`** app imports me; I do not import the app.

**Parent relay:** [`../INDEX.md`](../INDEX.md) → [`../.venom/MAP.md`](../.venom/MAP.md)

**Readable story (not tokens):** [`../docs/design/OVERVIEW.md`](../docs/design/OVERVIEW.md)

---

## The Cells

| Cell | Contains | Pull when | If missing |
|------|----------|-----------|------------|
| `voidweave/` | `tokens.json`, PATTERNS, README — ScentVision UI law | Any UI work, theme, marketing pages | Ad hoc colors; broken brand |
| `synapse/` | Typography, motion, SPEC — extended system | Deep design-system work, motion, a11y | Inconsistent scale and rhythm |

---

## Hot Paths

| Need | Path |
|------|------|
| Canonical palette / radii / type scale | `voidweave/tokens.json` |
| Implementation notes (non-framework) | `voidweave/PATTERNS.md` |
| Full system spec | `synapse/SPEC.md` |

---

## Signal Flow

```
UI or theme change
      │
      ▼
design-language/INDEX.md (this file)
      │
      ├── token change ──► voidweave/tokens.json → sync web re-exports
      ├── pattern doc ──► voidweave/PATTERNS.md
      └── deep system ──► synapse/SPEC.md
```

---

## What Doesn't Belong Here

| Type | Route to |
|------|----------|
| Product requirements | `scentvision/*PRODUCT-SPEC*` or future `spec/` |
| Session decisions | `.venom/memory/MEMORY.md` |
| Behavioral edge cases | `docs/SIMULATIONS.md` |
| React components | `scentvision/web/src/` |

---

## Consumer

Reference app: [`../scentvision/web/INDEX.md`](../scentvision/web/INDEX.md) until `web/` moves to repo root per [`../.venom/MAP.md`](../.venom/MAP.md).
