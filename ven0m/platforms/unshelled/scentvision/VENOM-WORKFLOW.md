# ScentVision × VENOM — workflow pilot

> *This product subtree is the default place to mount SDD organs without polluting venom origin root.*

---

## Canonical refs for this folder

| Kind | Path |
|------|------|
| Product spec | `PRODUCT-SPEC-v0.1.md` |
| Schema | `schema/olfactory_profile.v1.json` |
| Web app | `web/` |
| Design language | `../design-language/voidweave/` |
| VENOM brain (repo) | `.venom/` at repo root |
| Surface map | `VENOM-SURFACES.md` at repo root |

---

## Recommended stance

1. **VENOM leads:** load `.venom/CONTEXT.md` / `ACTIVE.md` when work touches UNSHELLED + ScentVision; promote durable decisions to `MEMORY.md`.
2. **Pick one SDD organ per milestone** (not both at once unless you own the merge cost):
   - **Spec Kit** — strong **spec → plan → tasks** traceability; good for schema + API-shaped work. Mount with `specify init --here --ai cursor-agent` **inside `scentvision/` or `web/`** only after you accept `.specify/` + `specs/` in git.
   - **GSD** — strong **phase execution + context hygiene**; good for large multi-phase UI. Mount via installer; keep `.planning/` **under this subtree** if possible.
3. **Voidweave** is **design law** for UI here — any kit “constitution” for the web must **include** alignment with `voidweave` tokens/patterns.

---

## When to escalate to full `go venom`

- Ambiguous product scope, cross-cutting refactors, or anything that affects **origin** `.cursor/` / template export → treat as **origin work**, not only ScentVision.

---

*Profile id: `scentvision-sdd` (see `.venom/profiles/README.md`).*
