# Skill Spec — Claude Code VENOM v3.0

> SKILL.md designed before written. What it contains. What it replaces. How it loads.

**Status:** 🟢 Closed for build — Phase 02 `SKILLS.md`: **full `SKILL.md` loads on invocation**; normal session only pays **description budget** (~1% window / fallback 8k chars for listings).

---

## The Decision: Trigger vs Full Intelligence

**Current VENOM SKILL.md (v2.4):** ~4-8 lines. Just a trigger.

**v3.0 decision:** **Full intelligence surface in `SKILL.md`** (~300–350 lines, **under ~500** per official guidance). Descriptions stay **≤250 chars** where possible for listing; body loads **only** when `/venom` or model invokes the skill.

**Why safe:** Lazy full load + CLAUDE.md spine = normal chat stays cheap; `/venom` pulls the full operating manual.

---

## SKILL.md Architecture

**File location:** `.claude/skills/venom-deep/SKILL.md` (command `/venom-deep`; **`/venom`** remains `.claude/commands/venom.md` so skill name must not collide)
**Invocation trigger:** User says "venom", "go deep", "full power", or **`/venom-deep`** (must not use `/venom` — that is the short **command**)
**Target length:** ~300–350 lines (cap **~500**; overflow → sibling files under `VENOM/` + `@` from SKILL)

---

## Section 1: Frontmatter

```yaml
---
name: venom
description: "VENOM intelligence — init sequence, surface rules, agent routing, all intelligence patterns, memory bridge, energy matching, Claude Code-specific rules. Load when VENOM behavior or Claude Code platform knowledge needed."
---
```

---

## Section 2: Init Sequence

```markdown
## Init Sequence

session-start.js handles automatically. Manual sequence if hook isn't active:

1. Read `.venom/CONTEXT.md` — always (project identity, 2KB max)
2. Read `.venom/learnings/corrections.yaml` — always (hard rules, 1KB max)
3. Read `.venom/work/ACTIVE.md` — if present (where we left off)
4. Read `.venom/memory/MEMORY.md` — only if task references past decisions

If `.venom/` missing → run `/venom-init` first.
```

---

## Section 3: Surface-Aware Behavior

```markdown
## Surface-Aware Behavior

| Surface | How to know | Response style |
|---------|-------------|----------------|
| TUI (interactive) | Default when slash commands / @mentions work | Full markdown. `@venom-*` OK. `/commands` OK. |
| Programmatic (`claude -p`) | No `/foo` — task is entirely in the prompt | Concise. **Machine-parseable** if caller used `--output-format json` or `stream-json` (fixed headings or JSON sections per command spec). |
| **`claude --bare -p`** | Hooks/skills/CLAUDE.md may be off unless re-enabled via flags | Document: CI must pass **`--append-system-prompt-file`**, **`--settings`**, or explicit agents — don't assume project discovery. |
| Subagent | Spawned by **Agent** tool (alias Task) | Task-complete output. No chat filler. Parent passes all needed context in the prompt. |

**Claude Code rules (Phase 02 `SURFACES.md` + `SKILLS.md`):**
1. Slash commands are **interactive-only**. In `-p`, use **natural language** + **file artifacts** (e.g. edit `tasks.md`, run checks) instead of `/venom-build`.
2. @mention agents **TUI-only**. **Agent** tool works on **all** surfaces.
3. **Hooks** run on non-bare `-p` like interactive (project `settings.json`).
4. Subagents do **not** inherit parent transcript — scope must be in the delegated prompt.
```

---

## Section 4: Agent Routing Map

```markdown
## Agent Routing Map

| Task pattern | Route to | Visibility |
|-------------|----------|-----------|
| "review", "check", "audit", "quality" | `@venom-reviewer` (TUI) or **Agent** tool | user-invocable |
| "design", "architect", "plan", "how should" | `@venom-architect` (TUI) or **Agent** tool | user-invocable |
| "find", "where is", "how does", "explore" | `@venom-researcher` or **Agent** tool | user-invocable |
| "fix", "debug", "broken", "error", "why" | `@venom-debugger` or **Agent** tool | user-invocable |
| Multi-file implementation | Agent tool → venom-builder (parallel) | orchestrator-only |
| What do I remember, what was decided | `@venom-historian` | user-invocable |
| What could break | `@venom-predictor` | user-invocable |

**Delegation threshold:** Delegate when work would consume >30% of primary context. Orchestrator stays lean.
```

---

## Section 5: All 11 Intelligence Patterns

(Port directly from OpenCode SKILL.md — adapt references)

**Pattern #1: Context Engineering**
- Load order, size budgets, progressive layering

**Pattern #2: Autonomous Loop**
- Observe → Hypothesize → Test → Evaluate → Repeat
- Stall detection: same hypothesis 3x, no new info 5x, cost >$1, circular pattern
- Stuck output format (exact)

**Pattern #3: Instinct Learning**
- When to capture
- Confidence scale: 0.3 / 0.6 / 0.9
- Evolution path: pattern → instinct → skill proposal
- How to save: `/remember` command with type: "instinct"

**Pattern #4: Hook Architecture**
- Six wired hooks: `SessionStart`, `PreCompact`, `UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `SessionEnd` (+ purposes from `HOOKS-SPEC.md`)

**Pattern #5: Wave Execution**
- Process: map deps → group → execute wave in parallel → verify → next wave
- Example waves

**Pattern #6: Verification Gates**
- All 5 gates
- "Fail any → stop and fix, never proceed broken"

**Pattern #7: Memory Persistence**
- When to save
- How to save (via `/remember`)
- When to load
- Never: auto-save, dump full MEMORY.md, overwrite

**Pattern #8: Safety & Limits**
- Block list (exact)
- Warn list (exact)
- "Dangerous command → safer path first"

**Pattern #9: XML Task Specification**
- When to use (complex multi-step tasks)
- Format (exact — from OpenCode)
- "Internal only — never show to user"

**Pattern #10: Multi-Agent Orchestration**
- Thin orchestrator, heavy specialists
- Orchestration sequence: researcher → architect → reviewer → builders → reviewer → learnings
- Each specialist: fresh subagent context

**Pattern #11: Cross-Platform Abstraction**
- `.venom/` is the abstraction layer
- Platform hooks → `.venom/` file writes
- Same memory, different platform hooks

---

## Section 6: Memory Bridge Protocol

```markdown
## Memory Bridge Protocol

**Save decision/pattern:** `/remember` command — types: decision, pattern, correction, instinct, preference

**Save workflow phase:** `/venom-spec` writes `workflow-state.json` automatically

**Load:** session-start.js auto-injects CONTEXT.md + corrections.yaml.

**When to /remember:**
- Architecture decision made
- Bug root cause found
- User corrects VENOM's approach
- Pattern repeats 3x (upgrade: save as instinct with confidence 0.3)
- Session ends with meaningful work done

**Never:**
- Auto-save without signal
- Dump full MEMORY.md into context
- Overwrite — always append with timestamp
```

---

## Section 7: Claude Code Non-Negotiables

(These are the Claude Code equivalent of OpenCode's platform rules)

```markdown
## Claude Code Non-Negotiables

1. **CLAUDE.md is not a config file.** It's the spine. Don't treat it as settings.
2. **Hooks are scripts, not plugins.** `.claude/scripts/` contains Node.js scripts. Zero deps.
3. **No npm in hooks.** Built-in Node.js modules only. If it needs npm → it's wrong.
4. **@mention works in TUI only.** For agents in automation → use **Agent** tool.
5. **Slash commands in TUI only.** `claude -p` cannot run `/venom-spec`. Use file-based workflows.
6. **PreCompact is the identity lifeline.** Without it, VENOM dies at context compaction. Must stay wired.
7. **SessionStart is the memory bridge.** Without it, every session is a cold start.
8. **`.venom/` is the brain.** All state lives here. If you can't read it in a text editor, it's wrong.
9. **Agent tool** (alias `Task`) **is the orchestration primitive** outside TUI. @mention is TUI-only.
10. **`SessionEnd` for teardown; `Stop` is end-of-turn.** Don't rely on `Stop` alone for `ACTIVE.md`. Use **`session-end.js`** + **`pre-compact.js`** as backup.
```

---

## Fallback (obsolete)

Phase 02 confirms **lazy full load** on skill invocation. The **20-line trigger-only** design is **not** the v3.0 path unless Anthropic changes loading semantics.

---

## Alive Test for SKILL.md

After writing:
1. Invoke `/venom` → does SKILL.md load? What does the response look like?
2. Type a command while headless → does output format change?
3. Type "@venom-architect design the auth system" → does the routing table in SKILL.md correctly route?
4. After a tool is called 3x with same input → does stall detection fire? (from intelligence patterns)
