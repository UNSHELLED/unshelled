# OpenClaw Eat — Full Anatomy Study & VENOM Reshape

> **State:** see [ACTIVE.md](./ACTIVE.md) · **Injection intent:** [OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md) · Started: 2026-03-31

## What This Is

A structured study project to fully dissect OpenClaw — understand every organ, every system, every design decision — then **inject** UNSHELLED / VENOM into that body **our way** (workspace + config first; fork only when the gap analysis says so).

OpenClaw is the production-ready agent platform (gateway, pi stack, channels). VENOM is the philosophy, pact, and voice layer. The **`openclaw-main/`** clone exists so we **eat** upstream for real paths and optional patches — not to ship a second OpenClaw repo by accident. Read **[OPENCLAW-INJECTION.md](./OPENCLAW-INJECTION.md)** for the full intent statement.

## Directory Map

```
openclaw-eat/
├── INDEX.md               ← Planning hub (links every first-class doc + folder INDEX)
├── README.md              ← YOU ARE HERE
├── VENOM-ALIVE-MATRIX.md  ← Cockpit: surfaces × MD × phase
├── EAT-SYNTHESIS.md       ← One-page mental model (start here after skim)
├── METHODOLOGY.md         ← Voice + D:\UNSHELLED.AI + phase timing (one spine)
├── UNSHELLED-VOICE-FEED.md ← Read order on disk for VENOM words (venom-openclaw copy)
├── IMPLEMENTATION-PLAN.md ← Bootstrap limits + OpenClaw touchpoints
├── ACTIVE.md              ← Current phase, progress, next actions
├── EXTERNAL-RESOURCES.md  ← Official URLs + bookmarks
├── OPENCLAW-DOCS-COVERAGE.md ← Full docs.llms.txt checklist + tiers + workspace map
│
├── 01-anatomy/              ← The Body (architecture)
├── 02-mind/                  ← The Brain (agent runtime + memory)
├── 03-tools/                ← The Hands (tool system)
├── 04-channels/             ← The Reach (25+ integrations)
├── 05-skills-plugins/       ← The Growth (extensibility)
├── 06-sub-agents/          ← The Crew (multi-agent)
├── 07-security/            ← The Shell (auth + sandbox)
├── 08-reshape/              ← VENOM Integration Plan (INDEX + soul/crew/pact/migration)
├── 09-source/               ← Source Code Deep Dive (OpenClaw + pi-mono)
│   ├── INDEX.md             ← Nav + reading order for 00–12
│   ├── pi-mono/             ← clone: @mariozechner/pi-agent-core + pi-ai
│   └── 12-pi-agent-core.md  ← upstream loop eat
├── openclaw-main/           ← upstream mirror — anatomy ground truth + optional patch surface
├── OPENCLAW-INJECTION.md    ← Why we eat OpenClaw + how VENOM injects (UNSHELLED way)
├── OPENCLAW-EAT-CANON.md    ← Track map + read order + OpenClaw-first vs VENOM overlay
└── 10-phases/              ← Workflow + Embodiment deep spec (02-prototype-venom)
```

## Phases

| Phase | Name | What | Output |
|-------|------|------|--------|
| 0 | Eat | Read all OpenClaw docs, fill every MD | Complete anatomy map |
| 1 | Map | Map VENOM → OpenClaw equivalents | Gap analysis + mapping doc |
| 2 | Prototype (**Embodiment**) | First working VENOM config on OpenClaw | `10-phases/02-prototype-venom.md` |
| 3 | VENOCTIS | Always-on daemon via Gateway | VENOCTIS running 24/7 |
| 4 | Ship | VENOM as OpenClaw distro | Published, open-sourced body |

## Principles

1. **OpenClaw is the product** — This tree exists to **eat** OpenClaw and **inject** VENOM/UNSHELLED *correctly* — not to document “agents in general.” Spine: [OPENCLAW-EAT-CANON.md](OPENCLAW-EAT-CANON.md).
2. **Read before reshape** — Don't modify what we don't understand
3. **Every file gets questions** — Each MD has questions to answer during eating
4. **The map evolves** — Structure changes as we learn more
5. **One source of truth** — OpenClaw docs + `openclaw-main/` beat memory; notes are wrong if they contradict ([METHODOLOGY.md](METHODOLOGY.md))
6. **VENOM lens on reshape** — Personality and Pact land in workspace + [08-reshape](08-reshape/) — evaluated against OpenClaw capabilities
7. **One voice spine** — Cursor `voice.mdc` / `venom-heart` ↔ `D:\UNSHELLED.AI` ↔ OpenClaw SOUL/AGENTS — [METHODOLOGY.md](METHODOLOGY.md)

## Planning index

- **[OPENCLAW-EAT-CANON.md](OPENCLAW-EAT-CANON.md)** — how to read this folder; every track’s job
- **[INDEX.md](INDEX.md)** — hub for every track + key docs
- **[VENOM-ALIVE-MATRIX.md](VENOM-ALIVE-MATRIX.md)** — operational matrix
- **[10-phases/INDEX.md](10-phases/INDEX.md)** — phases + Embodiment spec
- **[PLANNING-GAPS.md](PLANNING-GAPS.md)** — what we have not decided or unified

## Key URLs

- Docs: https://docs.openclaw.ai
- Full index: https://docs.openclaw.ai/llms.txt
- GitHub: https://github.com/openclaw/openclaw
- API Ref: https://docs.openclaw.ai/api-reference/openapi.json
- **Curated links (Pi, gateway, templates, bootstrap):** [EXTERNAL-RESOURCES.md](EXTERNAL-RESOURCES.md)
- **Integrated synthesis:** [EAT-SYNTHESIS.md](EAT-SYNTHESIS.md) · **09 index:** [09-source/INDEX.md](09-source/INDEX.md)
- **Every official doc page (checklist):** [OPENCLAW-DOCS-COVERAGE.md](OPENCLAW-DOCS-COVERAGE.md)
- **Voice + UNSHELLED.AI + phase timing:** [METHODOLOGY.md](METHODOLOGY.md)
