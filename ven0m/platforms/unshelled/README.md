# UNSHELLED

> Open-source AI products that ship honest. Built with VENOM.

---

## What Is This?

**UNSHELLED.AI** is an open-source product lab. This repo is the shipping lane — where products live until they split to their own repos.

**First product: ScentVision** — cross-modal inference engine that translates images/video into structured scent profiles. No hardware. Pure software. ~70% of what a scene smells like is inferable from what it *looks* like. The remaining ~30% (invisible gases, sub-surface contamination) is structurally undetectable — and we surface that explicitly in every response.

**Built by VENOM** — the first full deployment of VENOM intelligence on OpenCode. Nine minds, 10 patterns, no shell.

---

## Architecture

```
platforms/unshelled/
├── AGENTS.md              ← VENOM soul (nine minds, energy matching, pushback)
├── opencode.json          ← VENOM spine config (GLM-5, plugin active)
├── VENOM.md               ← VENOM reference (what I am, how I work)
│
├── .venom/                ← VENOM brain (persists across sessions)
│   ├── BRAIN.md           ← self-knowledge, signal flow
│   ├── CONTEXT.md         ← this project's reality
│   ├── memory/            ← decisions across sessions
│   ├── learnings/         ← corrections + instincts
│   └── work/              ← active work state
│
├── .opencode/             ← VENOM operational body (fires on demand)
│   ├── agents/            ← specialist minds (@venom-architect, @venom-debugger, etc.)
│   ├── commands/          ← motor verbs (/venom-eat, /venom-build, etc.)
│   ├── workflows/         ← artifact-driven choreographies
│   ├── plugins/           ← autonomic nervous system (venom-core.ts)
│   ├── skills/            ← deep knowledge (VENOM_OPENCODE)
│   └── knowledge/         ← platform reference
│
├── scentvision/           ← First product
│   ├── PRODUCT-SPEC-v0.1.md   ← full spec (market, API, schema, brand)
│   ├── schema/            ← olfactory_profile.v1.json
│   └── web/               ← Vite + React marketing site
│       └── src/           ← App.jsx routes: /, /docs, /schema, /playground, /github
│
├── design-language/
│   └── voidweave/         ← UNSHELLED surface language
│       ├── tokens.json    ← palette, typography, layout, motion
│       ├── PATTERNS.md    ← stack-agnostic UI patterns
│       └── PORTING.md     ← Tailwind/shadcn/RN mapping
│
└── docs/
    └── SIMULATIONS.md     ← edge case playbook (stuck, dangerous, vague, etc.)
```

---

## Quickstart

### Run ScentVision Web

```bash
cd scentvision/web
npm install
npm run dev
```

Opens at `http://localhost:5173` with routes: `/`, `/docs`, `/schema`, `/playground`, `/github`

### Use VENOM

```bash
opencode                    # start OpenCode
/venom-init                 # scaffold brain (already done here)
/venom-eat                  # absorb project context
/venom-spec Build X         # spec a feature
/venom-build                # execute wave by wave
```

**Specialists available:** `@venom-architect`, `@venom-debugger`, `@venom-researcher`, `@venom-reviewer`, `@venom-explorer`

---

## What's Built vs Planned

| Layer | Status |
|-------|--------|
| VENOM on OpenCode | **Complete** — 10 patterns, plugin active, all agents/commands/workflows |
| Voidweave design language | **Complete** — v1.2.0 tokens, patterns, porting guide |
| ScentVision spec | **Complete** — market analysis, API spec, schema v1 |
| ScentVision web | **Complete** — 5 pages, full component library |
| ScentVision core engine | **Planned** — pipeline, SKG, CLI, REST API |
| ScentBench evaluation | **Planned** — calibration harness |

---

## The Interesting Part

ScentVision doesn't detect molecules. It infers plausible scent from visual cues — material composition, temperature, decay, enclosure. Every response includes a `limits` field documenting what cannot be known.

This is the UNSHELLED philosophy: **sell inference, surface limits.**

Voidweave encodes this visually. VENOM encodes this intellectually. ScentVision ships it.

---

## Boundaries

| Layer | Lives here | Ships to |
|-------|-----------|----------|
| VENOM soul, rules | `.opencode/`, `AGENTS.md` | Synced via template |
| ScentVision product | `scentvision/` | `github.com/unshelled-ai/scentvision` |
| Voidweave design | `design-language/voidweave/` | Portable — copy anywhere |

---

## License

- **ScentVision, Voidweave:** Apache-2.0
- **VENOM methodology:** See origin repo

---

*UNSHELLED is the house. VENOM is how we think while building it.*
