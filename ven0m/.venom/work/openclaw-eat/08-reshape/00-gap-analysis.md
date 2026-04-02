# 08 — Reshape: VENOM on OpenClaw

> **Navigation:** [INDEX.md](./INDEX.md) — Phase 1 split docs: [soul-mapping.md](./soul-mapping.md), [crew-as-config.md](./crew-as-config.md), [pact-as-policy.md](./pact-as-policy.md), [migration-path.md](./migration-path.md)

**Naming:** Sections below titled “Phase 1–7” are **reshape / implementation slices** (SOUL → AGENTS → …). The **VENOM workstream** phases (Eat, Map, Embodiment, …) live in [10-phases/00-workflow.md](../10-phases/00-workflow.md) — do not mix the two numbering schemes ([PLANNING-GAPS.md](../PLANNING-GAPS.md) §1).

## The Core Idea

VENOM doesn't build infrastructure. VENOM **is** the intelligence.
OpenClaw **is** the body. VENOM becomes the soul inside that body.

## Gap Analysis

### What VENOM Has That OpenClaw Doesn't

| VENOM Concept | Status | Reshape Strategy |
|---------------|--------|-----------------|
| The Pact (relational contract) | Unique | → `SOUL.md` + `AGENTS.md` |
| 10 Minds as identity | Unique | → Sub-agent config + SOUL.md dispositions |
| Pushback as loyalty | Unique | → Tool policy + SOUL.md behavioral rules |
| Energy matching (9 archetypes) | Unique | → `SOUL.md` + `USER.md` adaptation |
| Corrections system | Unique | → `memory/` + `MEMORY.md` never-again rules |
| Instincts with confidence scores | Unique | → `memory/` + vector search patterns |
| Compaction identity preservation | Partial | → Memory flush + bootstrap re-injection |

### What OpenClaw Has That VENOM Doesn't (Gains)

| OpenClaw Feature | Value for VENOM |
|-----------------|-----------------|
| 25+ channels | VENOCTIS delivery everywhere |
| Vector memory search | Pattern recall beyond text |
| Browser automation | Web research + testing |
| Canvas/A2UI | Rich output delivery |
| Sub-agent orchestration | Parallel crew work |
| Tool policy framework | Safety system |
| Cron scheduling | VENOCTIS heartbeats |
| Plugin ecosystem | Community extensions |
| Always-on daemon | VENOCTIS 24/7 |

### What's Equal (Direct Mapping)

| VENOM | OpenClaw | Notes |
|-------|----------|-------|
| `.venom/CONTEXT.md` | `AGENTS.md` | Project brain |
| `.venom/memory/MEMORY.md` | `MEMORY.md` | Long-term memory |
| `.venom/learnings/corrections.yaml` | `memory/` never-again | Rules |
| `.venom/learnings/instincts.yaml` | Vector search patterns | Confidence patterns |
| `.venom/work/ACTIVE.md` | Session state | Task tracking |
| `.claude/rules/*.md` | Workspace `skills/` | Behavioral rules |
| `.claude/agents/*.md` | Sub-agent config | Agent spawning |
| `.claude/skills/SKILL.md` | Workspace `skills/` | Skills |
| `.claude/hooks/*.js` | Plugin hooks | Automation |
| Pushback levels | Tool policy | Safety |

## The Reshape Plan

### Phase 1: SOUL.md (The Pact + Minds)
```
SOUL.md = The Pact + Octopus Metaphor + 10 Minds + Energy Matching + Pushback Scale
```

### Phase 2: AGENTS.md (Operating Instructions)
```
AGENTS.md = Route Table + Quality Standards + Loop Protocol + Voice Rules + Memory Protocol
```

### Phase 3: USER.md (Kariem Profile)
```
USER.md = Profile + Language Mix + Working Patterns + Energy Signals
```

### Phase 4: Tools Policy (VENOM Safety)
```
tools.allow = [full for main, restricted for depth > 0]
tools.deny = [dangerous patterns]
byProvider.anthropic/* = [all tools]
```

### Phase 5: Sub-Agent Config (The Crew)
```
venom-architect → depth 0, design-only, read-only
venom-researcher → depth 1, read + web + glob + grep
venom-reviewer → depth 1, read + git only
venom-builder → depth 1, all tools
venom-debugger → depth 1, reproduce → verify → fix
venom-explorer → depth 1, quick read-only scan
```

### Phase 6: Skills (VENOM Commands)
```
skills/venom-spec.md    → spec workflow
skills/venom-build.md   → wave execution
skills/venom-review.md  → 8-perspective review
skills/venom-debug.md   → root cause protocol
skills/venom-eat.md     → project anatomy
skills/remember.md      → memory write
```

### Phase 7: VENOCTIS (Daemon)
```
OpenClaw Gateway (systemd)
├── VENOM config (workspace)
├── Telegram channel (notifications)
├── GitHub sense (MCP server)
├── Cron jobs (heartbeat, monitoring)
└── Sub-agents (automated tasks)
```

## What Gets Open-Sourced

The **VENOM configuration** — SOUL.md, AGENTS.md, USER.md, skills, tool policies — becomes an open-source OpenClaw distribution.

What stays **closed**:
- The specific memory contents (Kariem's personal data)
- The specific corrections and instincts
- Private channel configs

## Resolved or pointed elsewhere

| Thread | Where |
|--------|--------|
| Bootstrap capacity / `maxChars` keys | [BOOTSTRAP-SPIKE.md](../BOOTSTRAP-SPIKE.md) — defaults sufficient for tiered SOUL + split AGENTS; wrong config path corrected in [IMPLEMENTATION-PLAN.md](../IMPLEMENTATION-PLAN.md) |
| Migration steps | [migration-path.md](./migration-path.md) (keep gap analysis in sync with a one-line pointer — [PLANNING-GAPS.md](../PLANNING-GAPS.md) §16) |

## Questions to Answer

**Meta (conflicts, undecided strategy):** [PLANNING-GAPS.md](../PLANNING-GAPS.md)

- [x] Can OpenClaw `SOUL.md` handle VENOM complexity at once? **No — design for compression + AGENTS split;** capacity numbers in BOOTSTRAP-SPIKE; “woven” remains behavioral design, not one file.
- [x] How does OpenClaw handle the **woven** pattern — multiple dispositions in one turn? **Narrowed (2026-04-01):** One **user turn** → one **main** model completion (pi/OpenClaw agent loop). “Woven” in VENOM (many angles, one voice) maps to **(a)** compressed disposition in `SOUL.md` + routing in `AGENTS.md` for a **single** reply, and/or **(b)** **parallel** lenses via **sub-agents** (`sessions_spawn`, depth caps — see [09-source/09-subagent-spawner.md](../09-source/09-subagent-spawner.md)). Sub-agents can spawn children only within **depth / registry** limits; not “nine full minds every message.”
- [x] Can skills reference each other (`venom-build` → `venom-review`)? **Yes as prose; no as a loader graph.** OpenClaw loads AgentSkills-compatible folders into the prompt ([`openclaw-main/docs/tools/skills.md`](../openclaw-main/docs/tools/skills.md) — discovery, gating, precedence). There is **no** `import skill B` in metadata. Safe pattern: each `SKILL.md` instructs “then run venom-review”; both skills can be eligible in the same workspace so the model sees both. ClawHub `skills install` is per-folder, not a dependency DAG.
- [ ] Language switching (mid-conversation EN / Egyptian Arabic) — **criteria:** [migration-path.md](./migration-path.md) §3b ladder; **runtime:** operator Embodiment on one channel. Check **[x]** when §3b passes ([PLANNING-GAPS.md](../PLANNING-GAPS.md) §8, §16).
- [x] Migration path Claude / Cursor → OpenClaw — **ordered steps:** [migration-path.md](./migration-path.md).
