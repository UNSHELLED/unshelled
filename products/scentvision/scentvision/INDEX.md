# scentvision/ — Legacy Bundle (Definition + Surface)

> **Interim organ** until [`../.venom/MAP.md`](../.venom/MAP.md) flatten. Holds **spec** and **web** in one subtree.
> When `spec/` and `web/` exist at `products/scentvision/` root, this folder’s role is **done** — migrate and delete this INDEX.

**Parent relay:** [`../INDEX.md`](../INDEX.md) → [`../.venom/MAP.md`](../.venom/MAP.md)

---

## The Cells

| Cell | Path | Target after refactor | If missing |
|------|------|------------------------|------------|
| Product spec | `PRODUCT-SPEC-v0.1.md` | `spec/PRODUCT-SPEC-v0.1.md` | Scope arguments; no contract |
| Workflow | `VENOM-WORKFLOW.md` | `spec/VENOM-WORKFLOW.md` | SDD stance unclear |
| Schema | `schema/` | `spec/schema/` | No validated profile shape |
| Web app | `web/` | `web/` (repo root) | No shipped UI |

---

## Routing — Which Cell to Open

| Signal | Open |
|--------|------|
| "What did we promise?", requirements, roadmap | `PRODUCT-SPEC-v0.1.md` |
| Spec Kit / GSD / SDD pilot | `VENOM-WORKFLOW.md` |
| JSON schema, olfactory profile | `schema/` |
| Build, dev server, components | [`web/INDEX.md`](web/INDEX.md) |

---

## Signal Flow

```
Task touches product + code
      │
      ▼
scentvision/INDEX.md (this file)
      │
      ├── prose / contract ──► PRODUCT-SPEC, VENOM-WORKFLOW, schema/
      └── implementation ───► web/INDEX.md → src/
```

---

## What Doesn't Belong Here

Long-term decisions only in **`.venom/memory/`**; edge-case behavior in **`docs/SIMULATIONS.md`**; tokens in **`design-language/`**.
