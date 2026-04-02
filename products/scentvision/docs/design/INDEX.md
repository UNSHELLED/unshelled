# docs/design/ — Design Narration

> I explain **why** ScentVision looks and behaves the way it does — **Voidweave**, **Synapse**, brand boundaries.
> I am not the token SSOT. **Canonical numbers and JSON** live in [`../../design-language/`](../../design-language/INDEX.md).

**Parent relay:** [`../INDEX.md`](../INDEX.md) → [`../../INDEX.md`](../../INDEX.md) → [`../../.venom/MAP.md`](../../.venom/MAP.md)

---

## The Cells

| Cell | Role | Pull when | If missing |
|------|------|-----------|------------|
| [`OVERVIEW.md`](OVERVIEW.md) | Braids, layers, hierarchy — readable story | Onboarding, PM, “why these colors?” | Only raw JSON; no shared vocabulary |
| `../design-language/` | **Truth** — `tokens.json`, PATTERNS, SPEC | Implementation, theme, CSS | Ad hoc styling |

---

## Signal Flow

```
Design question
      │
      ▼
docs/design/INDEX.md (this file)
      │
      ├── need story / principles ──► OVERVIEW.md
      ├── need exact value / file ──► ../../design-language/INDEX.md
      └── need product-bound design ──► ../../scentvision/PRODUCT-SPEC-v0.1.md (§G)
```

---

## What Doesn't Belong Here

| Belongs elsewhere | Go to |
|-------------------|--------|
| Hex values, radii, motion ms | `design-language/voidweave/`, `design-language/synapse/` |
| Session decisions (“we ship dark-only”) | `.venom/memory/MEMORY.md` |
| Component code | `scentvision/web/src/` |

---

## Sibling indexes

[`../INDEX.md`](../INDEX.md) · [`../../design-language/INDEX.md`](../../design-language/INDEX.md) · [`../../.venom/INDEX.md`](../../.venom/INDEX.md)
