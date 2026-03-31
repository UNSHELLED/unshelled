# VENOM × OpenCode — Build Order

> Prioritized by immediate utility. First task usable today in under 5 minutes.

---

## The 13 Tasks

| # | File path | What it does | Pattern | Who benefits most | Time |
|---|-----------|-------------|---------|-------------------|------|
| **1** | `AGENTS.md` | VENOM identity for all agents — nine minds, energy matching, pushback scale, loop protocol | All (foundation) | Every developer type | 2 min (copy) |
| **2** | `opencode.json` | VENOM-opinionated config — instructions wiring, permissions, compaction (10K reserved) | #1 Context, #8 Safety | Power user, team lead | 3 min (copy + customize model) |
| **3** | `.opencode/agents/venom-reviewer.md` | 8-perspective code reviewer, read-only | #6 Verification Gates | OSS maintainer, team lead | 2 min (copy) |
| **4** | `.opencode/agents/venom-debugger.md` | Autonomous debug loop with stall detection | #2 Loop Pattern | Indie hacker, backend engineer | 2 min (copy) |
| **5** | `.opencode/agents/venom-researcher.md` | Deep codebase exploration — hypothesis-test loop, @explore, web | #2 Loop Pattern | Junior dev, data scientist | 2 min (copy) |
| **6** | `.opencode/agents/venom-architect.md` | System design — decision + trade-offs + implementation contract, never implements | #1 Context Engineering | Senior backend, team lead | 2 min (copy) |
| **7** | `.opencode/agents/venom-builder.md` | Hidden parallel execution soldier for wave builds | #5 Wave Execution | Backend engineer, power user | 2 min (copy) |
| **8** | `.opencode/agents/venom-explorer.md` | Fast read-only anatomy scan (Haiku model) — feeds researchers and builders | #1 + #2 | All types (pre-flight scan) | 2 min (copy) |
| **9** | `.opencode/commands/venom-eat.md` | Full project absorption → writes .venom/CONTEXT.md | #1 Context Engineering | Every developer type | 2 min (copy) |
| **10** | `.opencode/commands/venom-init.md` | Scaffolds .venom/ directory + verifies AGENTS.md + config | #1 + #7 | New project setup | 2 min (copy) |
| **11** | `.opencode/commands/venom-review.md` + `venom-research.md` + `venom-check.md` | Command wrappers that delegate to specialist agents via subtask | #6 + #2 | All types | 5 min (copy all 3) |
| **12** | `.opencode/plugins/venom-core.ts` | Intelligence plugin — 6 hooks, 2 tools, loop detection, safety, memory, compaction survival | #3, #4, #7, #8 | Power user, security lead | 15 min (install deps, test) |
| **13** | `.opencode/skills/VENOM_OPENCODE/SKILL.md` | Lazy-loaded deep VENOM knowledge — all 10 patterns, routing map, OpenCode non-negotiables | All patterns | Power user, VENOM users | 2 min (copy) |

---

## Execution Notes

**Tasks 1-11** are copy-paste ready. Drop files into any project. No dependencies. No build step. Works immediately with OpenCode 1.3.x.

**Task 12** requires:
```bash
cd ~/.config/opencode
npm install @opencode-ai/plugin  # if not already present
npm install zod
```
Then copy `venom-core.ts` to `~/.config/opencode/` (global) or `.opencode/plugins/` (project). Add `"plugin": ["./venom-core.ts"]` to your config.

**Task 13** is a skill — agents load it via `skill({ name: "venom-opencode" })` when they need deep VENOM/OpenCode knowledge. No install step.

---

## Quick Start (5 minutes)

```bash
# 1. Copy AGENTS.md to project root
cp AGENTS.md /your/project/

# 2. Copy opencode.json (customize model if needed)
cp opencode.json /your/project/

# 3. Copy agents
mkdir -p /your/project/.opencode/agents
cp .opencode/agents/*.md /your/project/.opencode/agents/

# 4. Copy commands
mkdir -p /your/project/.opencode/commands
cp .opencode/commands/*.md /your/project/.opencode/commands/

# 5. Copy skill
mkdir -p /your/project/.opencode/skills/VENOM_OPENCODE
cp .opencode/skills/VENOM_OPENCODE/SKILL.md /your/project/.opencode/skills/VENOM_OPENCODE/

# 6. Start OpenCode
cd /your/project
opencode

# 7. In TUI: /venom-init → then /venom-eat
```

Done. VENOM is alive.

---

## What Unlocks at Each Task

| After task | You get |
|------------|---------|
| 1-2 | VENOM personality + project config. Nine minds active. Energy matching. Pushback scale. Loop protocol. |
| 3-8 | Specialists: `@venom-reviewer`, `@venom-debugger`, `@venom-researcher`, `@venom-architect`, `@venom-explorer`. Parallel builds via hidden `@venom-builder`. |
| 9-11 | Commands: `/venom-eat`, `/venom-init`, `/venom-review`, `/venom-research`, `/venom-check`. Full workflow. |
| 12 | Automatic: VENOM identity injection on session start. Loop detection. Safety limits. Instinct learning. Memory persistence through compaction. |
| 13 | Deep knowledge: all 10 intelligence patterns lazy-loaded when needed. Surface-aware rules. OpenCode non-negotiables. |

**Task 1 alone changes everything.** The AGENTS.md is the highest-leverage file — it shapes how every agent thinks and responds. Start there.
