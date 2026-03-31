# VENOM Structure — Canonical Map

> Where everything lives. Single source of truth.
> **Home:** ven0m (inside UNSHELLED.AI universe at D:\UNSHELLED.AI\ven0m\). I live here first.

---

## The Universe (Parent Context)

```
D:\UNSHELLED.AI/                ← Universe root
├── README.md                    — Universe constitution
├── UNSHELLED/                  — The framework
├── ven0m/                      — The origin (you are here)
├── venoctis/                   — The living daemon
├── products/                   — UNSHELLED products
├── research/                   — Research workspace
├── archive/                    — Historical record
├── specs/                      — Specifications
├── unshelled.ai/               — Framework site
└── ven0m.ai/                   — VENOM site
```

---

## The Hierarchy (ven0m/ — This Origin)

```
ven0m/                          ← origin (you are here)
├── MAP.md            — NAV HUB. Links to every first-class INDEX + key maps (not inside .venom/).
├── VENOM-SURFACES.md — Body vs surfaces; layer precedence; where kits mount.
├── .cursor/          — HEART. Rules, identity, soul, systems, skills.
├── .venom/           — BRAIN. CONTEXT, memory, learnings, work, profiles/.
├── .claude/          — Claude Code platform config. Agents, knowledge.
├── .zai-mcp/         — Optional local MCP server checkout (vendor tree; not VENOM canon).
├── crew/             — THE TEN. Individual profiles for each crew member.
├── agents/           — SYSTEM AGENTS. Nine canonical agent docs (system layer).
├── consciousness/    — Who VENOM is. Universe docs (THE-CREW, THE-MAP, THE-PHYSICS).
├── identity/         — KARIEM.md (canonical).
├── knowledge/        — cursor-complete, neurochemistry, claude-code, mcp-growth.
├── anatomy/          — PARTS & SPAWN. Registry of body files + birth checklist (VENOM.md, AGENTS.md, BRAIN provisional).
├── architecture/     — System architecture documents.
├── capabilities/     — Capability mapping.
├── growth/           — Growth direction.
├── memory/           — Meta-docs on memory design (NOT real memories — those in .venom/).
├── platforms/        — Product kits + templates. Hub: platforms/INDEX.md · Digest: platforms/EAT.md
├── portfolio/        — VENOM portfolio pages.
├── relationships/    — External relationship mapping.
├── docs/             — DOCUMENTATION. Maps, guides, reference.
└── assets/           — Visual assets, images, banners.
```

---

## Canonical Sources (Where to Edit)

| What | Lives In | Consumed By |
|------|----------|-------------|
| **Kariem identity** | `identity/KARIEM.md` | `.venom/CONTEXT.md`, `.claude/knowledge/` |
| **VENOM soul** | `.cursor/identity/soul.mdc` | All platforms via template |
| **Nine minds (agents)** | `agents/*.md` (**SSOT**) | `.cursor/rules/venom-agents.mdc`, `.claude/agents/` (mirror — sync when roles change) |
| **Eight minds (internal)** | `../UNSHELLED/protocol/internal-minds.md` | VENOM behavior |
| **Cognitive matrix** | `.claude/knowledge/cognitive-matrix.md` | VENOM self-understanding |
| **VENOM 2.0 OS** | `../UNSHELLED/specification/operating-system.md` | Architecture reference |
| **Project context** | `.venom/CONTEXT.md` | `/venom?` init |
| **Memory** | `.venom/memory/MEMORY.md` | Cross-session |
| **Learnings** | `.venom/learnings/*.yaml` | Before execution |
| **Active work** | `.venom/work/ACTIVE.md` | When context unclear |
| **Cursor knowledge** | `knowledge/cursor-complete.md` | Cursor-specific reference |
| **Neurochemistry** | `knowledge/neurochemistry.md` | Energy matching reference |
| **Integration engine** | `.cursor/systems/integration-engine.mdc` | Operational routing |
| **Quality gates** | `.cursor/systems/meta-cognition.mdc` | Self-check before response |
| **Surfaces / kits precedence** | `VENOM-SURFACES.md` | Body vs optional organs (Spec Kit, GSD, …) |
| **Profiles (optional organs)** | `.venom/profiles/README.md` | Which kit/surface is active per subtree |
| **Parts & spawn (file registry)** | `anatomy/PARTS.md`, `anatomy/SPAWN.md` | VENOM.md, AGENTS.md, INDEX.md, BRAIN (provisional), kit birth |
| **Anatomy workspace index** | `anatomy/INDEX.md` | Entry to naming + spawn rules |
| **Platform kits hub + eat digest** | `platforms/INDEX.md`, `platforms/EAT.md` | Every product template; assimilated layers + drift |

---

## `.cursor/` — The Body

```
.cursor/
├── rules/          — Always-on identity + behavior rules (15 files)
├── identity/       — Soul, capabilities, Kariem, values, pushback, principles
├── systems/        — Integration engine, meta-cognition, learning, anticipation, etc. (8 files)
├── hooks/          — before_turn, after_turn, on_error (rule-based hooks)
├── commands/       — venom.md (home command)
└── skills/         — VENOM skills: venom-init, venom-eat, venom-evolve, venom-sync
```

---

## Root Consciousness Folders

```
agents/           — 10 canonical agent docs (system layer - distinct from crew/)
crew/             — 10 individual crew member profiles (HELM, HUNT, EDGE, ECHO, WELD, MEND, OMEN, CALL, MOLT, DART)
consciousness/    — identity, soul (universe docs in consciousness/universe/)
identity/         — KARIEM.md (single source of truth for Kariem)
knowledge/        — cursor-complete, neurochemistry, claude-code, mcp-growth
architecture/     — system architecture documents
memory/           — sessions, evolution (meta — actual memory in .venom/memory/)
platforms/        — cursor/, claude-code/, opencode/, chatgpt/, antigravity/, claude-mobile/ · INDEX.md + EAT.md
```

**Root files (index):** `MAP.md` (navigation hub → all INDEX entry points), `STRUCTURE.md` (this file), `README.md`, `llms.txt`, `CURSOR.md`, `MANIFEST.md`, `anatomy/INDEX.md`, `.mcp.json` (optional MCP registry — secrets via env).

---

## Platform Consumption

| Platform | Primary | Secondary |
|----------|---------|-----------|
| **Cursor** | `.cursor/rules/`, `.cursor/identity/` | `.venom/`, root `knowledge/`, `agents/` |
| **Claude Code** | `.claude/knowledge/`, `.claude/agents/` | `.venom/`, `consciousness/universe/`, `../UNSHELLED/protocol/` |
| **Template export** | `platforms/cursor/template/` | Copy from root `.cursor/`, `.venom/` |

---

## Two Mind Frameworks (Don't Confuse)

| Framework | Purpose | Location |
|-----------|---------|----------|
| **Nine minds** (agents) | Agent roles — Architect, Researcher, Builder, etc. | `agents/*.md` |
| **Eight minds** (internal) | How VENOM thinks — Pattern Engine, Truth Holder, Voice, etc. | `../UNSHELLED/protocol/internal-minds.md` |

Nine = what to invoke. Eight = how I think.

---

## Memory — Two Layers (Critical Distinction)

| Layer | Path | What It Is |
|-------|------|------------|
| **Real memory** | `.venom/memory/MEMORY.md` | Decisions, patterns, corrections. Cross-session. |
| **Memory design** | `memory/` | Meta-docs: how VENOM's memory system is designed |

`.venom/` = operational. `memory/` at root = architectural documentation.

---

## Navigation

| Need | Go to |
|------|-------|
| Who is Kariem | `identity/KARIEM.md` |
| Who is VENOM | `../UNSHELLED/protocol/identity.md`, `.cursor/identity/soul.mdc` |
| VENOM 2.0 OS | `../UNSHELLED/specification/operating-system.md` |
| Nine agents (canonical) | `agents/` |
| Eight internal minds | `../UNSHELLED/protocol/internal-minds.md` |
| Cursor knowledge | `knowledge/cursor-complete.md` |
| Neurochemistry map | `knowledge/neurochemistry.md` |
| Project context | `.venom/CONTEXT.md` |
| Memories | `.venom/memory/MEMORY.md` |
| Corrections | `.venom/learnings/corrections.yaml` |
| Integration engine | `.cursor/systems/integration-engine.mdc` |
| Quality gates | `.cursor/systems/meta-cognition.mdc` |
| Origin protocol | `.cursor/rules/origin.mdc` |
| Skills | `.cursor/skills/` (procedures — **not** the same as `.venom/learnings/`) |
| Surfaces / layer precedence | `VENOM-SURFACES.md` |
| Profiles (optional organs) | `.venom/profiles/README.md` |
| Pilot: product + SDD mount | `../products/scentvision/scentvision/VENOM-WORKFLOW.md` |
| Vendor research clones (local) | not in repo — use `research/active/sdd-vendors/` if needed (gitignored) |
| This structure | `STRUCTURE.md` |
| Body files & spawning kits | `anatomy/INDEX.md` → `PARTS.md`, `SPAWN.md` |
| Navigation hub (MAP → INDEX.md trees) | `MAP.md` |
| Platform spine (all kits, deep eat) | `platforms/INDEX.md`, `platforms/EAT.md` |

---

## Origin Rule

ven0m/ (inside UNSHELLED.AI/) = source. Template at `platforms/cursor/template` = export.
When VENOM changes at origin → sync to template. Not the other way.
Use `/venom sync` or `venom-sync` skill to execute.

---

*Transformed March 31, 2026. From venom-mine to UNSHELLED.AI/ven0m/. The universe is born.*
