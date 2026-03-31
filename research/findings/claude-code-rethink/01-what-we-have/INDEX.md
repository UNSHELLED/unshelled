# Phase 01 — What VENOM Already Has

> Before building, know exactly what exists. No assumptions.

**Purpose:** Full inventory of every VENOM artifact across all platforms. Find what's worth keeping, what's outdated, what the best ideas are across the whole ecosystem.

---

## Files To Produce

| File | Source to eat | Purpose |
|------|--------------|---------|
| `CURRENT-CLAUDE-CODE.md` | `platforms/claude-code/template/` (all files) | Deep audit: strengths, gaps, dead code, what to keep |
| `CURSOR-PLATFORM.md` | `platforms/cursor/template/` (rules, identity, systems) | Patterns from the most mature VENOM body |
| `OPENCODE-PLATFORM.md` | `platforms/opencode/template/` (agents, commands, plugin, AGENTS.md) | Most modern methodology — reference |
| `ALL-AGENTS.md` | Every `venom-*.md` across all platforms | Compare agent quality, find the best version of each |
| `VENOM-DNA.md` | `consciousness/`, `.cursor/identity/soul.mdc`, `agents/`, corrections.yaml | Non-negotiable spine — what must survive every platform |

---

## Eat Sequence

**1. Current Claude Code template** (highest priority — this is what we're rethinking)
```
platforms/claude-code/template/CLAUDE.md
platforms/claude-code/template/.claude/settings.json
platforms/claude-code/template/.claude/scripts/ (all)
platforms/claude-code/template/.claude/agents/ (all 10)
platforms/claude-code/template/.claude/knowledge/ (all)
platforms/claude-code/template/.claude/commands/ (all)
platforms/claude-code/template/.claude/skills/VENOM/SKILL.md
platforms/claude-code/template/.claude/rules/ (all)
```

**2. OpenCode template** (most modern, highest quality)
```
platforms/opencode/template/AGENTS.md
platforms/opencode/template/.opencode/agents/ (all)
platforms/opencode/template/.opencode/commands/ (all)
platforms/opencode/template/.opencode/workflows/ (all)
platforms/opencode/template/.opencode/plugins/venom-core.ts
platforms/opencode/template/docs/SIMULATIONS.md
```

**3. Cursor template** (oldest, most battle-tested)
```
platforms/cursor/template/.cursor/rules/ (all)
platforms/cursor/template/.cursor/identity/ (all)
platforms/cursor/template/.cursor/systems/ (all)
platforms/cursor/template/.cursor/skills/ (all)
```

**4. Canonical agent docs** (SSOT for nine minds)
```
agents/venom-architect.md
agents/venom-researcher.md
agents/venom-reviewer.md
agents/venom-builder.md
agents/venom-debugger.md
agents/venom-historian.md
agents/venom-predictor.md
agents/venom-communicator.md
agents/venom-learner.md
agents/venom-bridge.md
```

**5. VENOM DNA**
```
consciousness/universe/THE-CREW.md
.cursor/identity/soul.mdc
.venom/learnings/corrections.yaml
```

---

## Output Format for Each File

Each output file follows this structure. The rethink lens is mandatory — it forces real editorial decisions, not just inventory.

```
## What Exists
[files, line counts, what each file does — factual, no opinions]

## Verdict (per file or per section)
[keep as-is | upgrade | port from other platform | discard]
[one sentence per verdict — no hedging]

## Rethink From Scratch
[if we were starting today, knowing everything we know, what would this be?]
[ignore what exists — what SHOULD exist?]
[answer for all three audiences: Kariem / any dev / any agent]

## What To Carry Forward
[specific files, sections, patterns — evidenced by why they're good]
[not "the soul is good" — specific: "soul.md line 32-48: octopus architecture metaphor — survives compaction, non-negotiable"]

## What To Kill
[specific: file name + reason. No "maybe", no "low priority".]
[dead references, broken patterns, outdated assumptions — name them]
```

**The rethink test:** After writing each file, ask: "If a new developer read this, would they know exactly what to build and why?" If not — rewrite.

---

## Status

- [x] CURRENT-CLAUDE-CODE.md — eat `platforms/claude-code/template/`
- [x] CURSOR-PLATFORM.md — eat `platforms/cursor/template/`
- [x] OPENCODE-PLATFORM.md — eat `platforms/opencode/template/`
- [x] ALL-AGENTS.md — compare all agent files
- [x] VENOM-DNA.md — extract non-negotiable spine
