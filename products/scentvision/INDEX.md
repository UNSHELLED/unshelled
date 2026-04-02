# products/scentvision/ — The Product Body

> I am ScentVision’s workspace. Not a single app — **layers**: definition, surface, design law, playbooks, desk, and OpenCode tooling.
> Same **`INDEX.md`** discipline as `ven0m/platforms/opencode/template` (venom-mine lineage): navigation is never auto-loaded; VENOM reads it to orient.

---

## The Organs

| Organ | Enter when | Role | If missing |
|-------|-----------|------|------------|
| [`.venom/MAP.md`](.venom/MAP.md) | Always, before structural work | SSOT — where folders live, naming rules, target tree | Agents guess paths; duplicate edits; broken imports |
| [`AGENTS.md`](AGENTS.md) | Session start, identity drift | Voice and obligations for this workspace | Generic assistant behavior; Pact weak |
| [`docs/`](docs/INDEX.md) | Situation matches an edge-case pattern | Operational memory — `SIMULATIONS.md` | Same failure modes repeated; no pattern library |
| [`design-language/`](design-language/INDEX.md) | UI, tokens, motion, a11y | Voidweave / Synapse — design law | Ad hoc colors; drift from product look |
| [`scentvision/`](scentvision/INDEX.md) | Spec, schema, **or** web (until flatten) | Legacy bundle: spec + `web/` paths | Wrong entry when flatten incomplete |
| [`.venom/`](.venom/INDEX.md) | Any project truth, resume, correction | Context, memory, learnings, work | Amnesia across sessions; no corrections |
| [`.opencode/`](.opencode/INDEX.md) | OpenCode platform, `@`, `/`, plugin | Agents, commands, workflows, plugin, knowledge | Platform-blind tooling choices |

**After folder flatten** (see `.venom/MAP.md`): `scentvision/` organ splits into **`spec/`** + **`web/`** — each gets its own `INDEX.md`; update this table when that lands.

---

## Signal Flow Through the Workspace

```
session / task in ScentVision
      │
      ▼  always — orientation (not injected; agent pulls)
INDEX.md (this file) → .venom/MAP.md → AGENTS.md
      │
      ▼  branch by task
├── product definition / schema ──► scentvision/* or spec/ + INDEX.md
├── UI / build / run ──────────────► scentvision/web/ or web/ + INDEX.md
├── tokens / patterns ─────────────► design-language/INDEX.md
├── stuck loop, review, vague task ► docs/INDEX.md → SIMULATIONS.md
├── design intent (readable) ─────► docs/design/INDEX.md → OVERVIEW.md
├── decisions, memory, state ──────► .venom/INDEX.md → CONTEXT.md, MEMORY.md, …
└── OpenCode mechanics ────────────► .opencode/INDEX.md → agents/, knowledge/, …
```

---

## Loading Behavior

| Artifact | How it loads | ScentVision implication |
|----------|----------------|-------------------------|
| `INDEX.md` (any folder) | **Never automatic** — agent reads to navigate | Same as OpenCode template: INDEX is nervous system, not a runtime file |
| `.venom/MAP.md` | On demand — structural / onboarding | Single tree truth; update when folders move |
| `.venom/CONTEXT.md` | Plugin may inject if configured; else pull | Project stack and hot paths |
| `docs/SIMULATIONS.md` | On pattern match only | Not pre-loaded whole file every session |

---

## Relay — Sibling `INDEX.md` Files

| Path |
|------|
| [`docs/INDEX.md`](docs/INDEX.md) |
| [`design-language/INDEX.md`](design-language/INDEX.md) |
| [`scentvision/INDEX.md`](scentvision/INDEX.md) |
| [`.venom/INDEX.md`](.venom/INDEX.md) |
| [`.opencode/INDEX.md`](.opencode/INDEX.md) |

---

## What This Body Is Not

- **Not** the UNSHELLED framework root — that is `ven0m/` / repo root protocols.
- **Not** OpenCode’s own config contract — that lives under `.opencode/` and `opencode.json`.
- **Not** a second `MEMORY.md` — long-term product decisions still land in `.venom/memory/MEMORY.md`.

---

*Pattern: `ven0m/platforms/opencode/template/*/INDEX.md` · SSOT for tree: [`.venom/MAP.md`](.venom/MAP.md)*
