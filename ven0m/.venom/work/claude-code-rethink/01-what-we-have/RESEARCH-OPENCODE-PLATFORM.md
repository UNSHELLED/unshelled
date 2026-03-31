# Research Guide: OPENCODE-PLATFORM.md

> OpenCode is the most modern VENOM body. This is the reference implementation.
> Port everything possible. Adapt what's platform-specific.

**Output file:** `01-what-we-have/OPENCODE-PLATFORM.md`
**Read every file in:** `platforms/opencode/template/`

---

## Read In This Order

```
1.  platforms/opencode/template/AGENTS.md         ← the CLAUDE.md equivalent — most important
2.  platforms/opencode/template/VENOM.md           ← soul document
3.  platforms/opencode/template/.opencode/commands/ (all 8 commands)
4.  platforms/opencode/template/.opencode/agents/ (all 6 agents)
5.  platforms/opencode/template/.opencode/skills/VENOM_OPENCODE/SKILL.md
6.  platforms/opencode/template/docs/SIMULATIONS.md
7.  platforms/opencode/template/.venom/BRAIN.md
8.  platforms/opencode/template/.venom/CONTEXT.md   ← stub format
9.  platforms/opencode/template/.venom/memory/MEMORY.md ← stub format
10. platforms/opencode/template/.opencode/knowledge/ (all files)
11. platforms/opencode/SPEC.md
12. platforms/opencode/MATRIX.md
```

---

## Questions To Answer

### AGENTS.md (the spine)
- How long is it? (estimate tokens)
- What sections does it contain that CLAUDE.md v2.4 doesn't?
- Does it have the autonomous loop protocol? Exactly how is it written?
- Does it have situation matching? How many simulations are referenced?
- Does it have surface awareness? How is it handled?
- Does it have the commands list? How are commands described?
- Does it have the memory loading sequence? How is it written?
- Does it have specialist delegation thresholds? ("delegate when >30% context")
- What's the pushback scale format here vs v2.4?

### Commands (the highest value to port)
- What are all 8 commands?
- `/venom-spec` — how many phases? What's the phase detection logic?
- `/venom-build` — how does wave execution work exactly? What's the verification gate?
- `/venom-review` — does it delegate to an agent? How?
- `/venom-check` — what exactly does it check? 6 checks?
- `/venom-research` — how does it delegate?
- `/venom-init` — what does it scaffold?
- `/venom-eat` — how does it absorb? What does it write to CONTEXT.md?
- How are workflow states written and read?
- What's the `$ARGUMENTS` pattern?

### Agents (compare quality to Claude Code v2.4)
- `venom-architect` — what does the OpenCode version have that Claude Code v2.4 doesn't?
- `venom-builder` — does it have scope boundary? Mode: subagent? Steps: 50?
- `venom-debugger` — full loop protocol? Stall detection? Cost guard?
- `venom-researcher` — anatomy framework? Output format?
- `venom-reviewer` — full 8-perspective? Order matters?
- `venom-explorer` — does this exist? What does it do? Claude Code equivalent?

### SKILL.md (the intelligence surface)
- What does the OpenCode SKILL.md contain?
- How long is it? (is it the full intelligence or just a trigger?)
- Does it have surface-aware behavior?
- Does it have agent routing?
- Does it have all 10 intelligence patterns?
- How does it differ from Claude Code's current SKILL.md?

### Memory architecture
- What files does `.venom/` contain in OpenCode?
- What format is CONTEXT.md stub?
- What format is MEMORY.md stub?
- What's BRAIN.md?
- What's `workflow-state.json`? Where is it? What format?
- What's `instincts.yaml` format? What fields?

### SIMULATIONS.md
- How many simulations? (10 in the file)
- What's the format of each? (Signal / Wrong move / Right move / Why)
- Which simulations are Claude Code-applicable vs OpenCode-specific?
- Should this port 1:1 to Claude Code? What needs changing?

---

## The Critical Question

**What does OpenCode AGENTS.md do that Claude Code CLAUDE.md should also do?**

This is the most important question. AGENTS.md is the reference implementation of VENOM's brain. CLAUDE.md is its Claude Code equivalent. The gap between them = the upgrade needed.

List every section in AGENTS.md that CLAUDE.md v2.4 is missing or has a worse version of.

---

## What To Port (working list — verify during research)

| Component | Port decision | Notes |
|-----------|--------------|-------|
| Autonomous loop protocol | ✅ Port | Core pattern — platform-agnostic |
| Situation matching (SIM-01 to SIM-10) | ✅ Port | Remove OpenCode-specific refs |
| Surface awareness | ✅ Port | Adapt to Claude Code surfaces |
| Memory loading sequence | ✅ Port | Replace plugin refs with script refs |
| Specialist delegation threshold (>30%) | ✅ Port | Platform-agnostic |
| `/venom-spec` command | ✅ Port | Replace `venom_workflow_update()` with file writes |
| `/venom-build` command | ✅ Port | Replace plugin tools with Bash |
| venom-architect agent | ✅ Port | Use OpenCode version — much better |
| venom-builder agent | ✅ Port | Scope boundary, atomic output |
| venom-debugger agent | ✅ Port | Full loop, stall detection, cost guard |
| venom-explorer agent | ❓ Evaluate | No equivalent in Claude Code — does Task tool replace it? |
| `venom_workflow_update()` calls | ❌ Cannot port | Plugin-specific — replace with file writes |
| `venom_remember()` calls | ❌ Cannot port | Plugin-specific — replace with `/remember` command or Bash |
| `venom_instinct()` calls | ❌ Cannot port | Plugin-specific — replace with file write in `post-tool-use.js` |
| OpenCode non-negotiables section | ❌ Replace | Write Claude Code non-negotiables instead |

---

## Output Structure

```markdown
# OpenCode Platform Audit

**Date audited:** [date]
**Most modern VENOM body — reference implementation**

## What OpenCode Has That Claude Code v2.4 Doesn't
[numbered list — specific, evidenced by file + section]

## Port Decisions
[table: component | port decision | adaptation needed]

## Platform Translation Map
[what OpenCode calls X → Claude Code equivalent]
| venom_workflow_update() | → direct .venom/state/ file writes |
| venom_remember() | → /remember command or SessionEnd / tool-written state |
| @explore agent | → Task tool with venom-researcher |
| session.created hook | → SessionStart hook |
| tool.execute.before | → PreToolUse hook |
| session.idle | → SessionEnd hook (Claude Code) |

## AGENTS.md vs CLAUDE.md: Gap Table
[every section in AGENTS.md, present/absent in CLAUDE.md v2.4]

## Rethink Lens
[if building from OpenCode quality for Claude Code today — what changes?]
```
