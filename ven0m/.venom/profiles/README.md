# VENOM profiles — optional organs

> *A profile says which workflows are mounted. It does not replace `.venom/` or the Pact.*

---

## What a profile is

- **Named bundle** of external SDD / agent workflows (Spec Kit, GSD, OpenSpec, …) **scoped to a folder or milestone**.
- **VENOM stays lead:** memory, routing, pushback, and promotion of decisions → `.venom/memory/MEMORY.md` or `learnings/` when it matters cross-session.

---

## Rules

1. **No second constitution** in the repo root that overrides `consciousness/` + `.venom/` without an explicit amendment.
2. **Product engineering law** (e.g. Spec Kit `constitution.md` for an app) lives **next to that product** and must **defer** to spine + brain if conflict.
3. **Installers** (GSD global `~/.claude/get-shit-done`, etc.) are **versioned dependencies** — pin or re-run install when behavior changes.
4. **Eat before adopt:** use `venom-eat` on a kit folder; extract constraints, capabilities, hot paths; then enable a profile.

---

## Active examples

| Profile | Scope | Doc |
|---------|--------|-----|
| `scentvision-sdd` (pilot) | `platforms/unshelled/scentvision/` | `platforms/unshelled/scentvision/VENOM-WORKFLOW.md` |

Add rows here when you formalize more products.

---

## Suggested profile IDs (future)

| ID | Organ set | Best for |
|----|-----------|----------|
| `none` | Default VENOM only | Origin work, docs, relationship |
| `spec-kit` | `.specify/` + `specs/` + `/speckit.*` | Traceable spec → plan → tasks |
| `gsd` | `.planning/` + GSD commands | Heavy phases, waves, verify loops |
| `hybrid` | Spec Kit for trace + GSD for execute | Only if you accept two artifact roots — prefer one per milestone |

Hybrid is **high ceremony**; use only when payoff is clear.
