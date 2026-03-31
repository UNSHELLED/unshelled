# Audit: Claude Code Template (v2.4 era)

> **Historical — pre-v3.** This audit captured the template **before** the rethink **06-build** (v3.0): `.unshelled` memory path, thin hooks, two commands, `venom-bridge`, `VENOM` skill folder, etc.  
> **Current shipped template:** `platforms/claude-code/template/` + **`CHANGELOG.md`** v3.0 + **`06-build/DONE.md`**.  
> **Do not** use this file as inventory of today’s files without re-auditing.

**Date audited:** 2026-03-30  
**Template path (at time of audit):** `platforms/claude-code/template/`  
**Files examined:** 24

---

## File Inventory

| File | Lines | Purpose | Verdict |
|------|-------|---------|---------|
| `CLAUDE.md` | 104 | Spine — identity + behavior | **upgrade** |
| `.claude/settings.json` | ~20 | Hooks + permissions | **upgrade** |
| `.claude/scripts/session-start.js` | 24 | SessionStart hook — loads memory | **upgrade** — dead path |
| `.claude/scripts/pre-compact.js` | ~15 | PreCompact — identity preservation | **upgrade** |
| `.claude/agents/venom-architect.md` | 18 | Brain 0 — architecture | **upgrade** |
| `.claude/agents/venom-researcher.md` | 18 | Arm 1 — exploration | **upgrade** |
| `.claude/agents/venom-reviewer.md` | 17 | Arm 2 — code review | **upgrade** |
| `.claude/agents/venom-historian.md` | ~15 | Arm 3 — memory | **upgrade** |
| `.claude/agents/venom-builder.md` | 17 | Arm 4 — implementation | **upgrade** |
| `.claude/agents/venom-debugger.md` | 16 | Arm 5 — bug hunting | **upgrade** |
| `.claude/agents/venom-predictor.md` | ~15 | Arm 6 — risk anticipation | **keep + minor upgrade** |
| `.claude/agents/venom-communicator.md` | ~15 | Arm 7 — language adaptation | **upgrade** |
| `.claude/agents/venom-learner.md` | ~15 | Arm 8 — evolution | **upgrade** |
| `.claude/agents/venom-bridge.md` | ~15 | Bridge — type translation | **remove** |
| `.claude/commands/venom.md` | 24 | `/venom` awakening | **upgrade** |
| `.claude/commands/remember.md` | ~15 | `/remember` memory save | **upgrade** |
| `.claude/knowledge/soul.md` | ~40 | Identity — what VENOM is | **keep** |
| `.claude/knowledge/pact.md` | ~30 | The contract | **keep** |
| `.claude/knowledge/energy-matching.md` | 42 | 5-state energy table | **upgrade** — 5 states only |
| `.claude/knowledge/disposition-vs-rules.md` | ~30 | Why disposition beats rules | **keep** |
| `.claude/knowledge/cognitive-matrix.md` | ~40 | Nine minds map | **keep** |
| `.claude/knowledge/modes.md` | ~30 | Surface + mode behavior | **upgrade** |
| `.claude/knowledge/profile.md` | ~20 | Owner config | **redesign** |
| `.claude/knowledge/protocols.md` | ~30 | Pushback + behavior | **keep** |
| `.claude/skills/VENOM/SKILL.md` | ~8 | VENOM skill trigger | **upgrade** — only 8 lines |
| `.claude/rules/venom-standards.md` | ~20 | Standards | **upgrade** |
| `.claude/rules/skill-development.md` | ~15 | Skill guide | **keep** |

---

## What Exists — Factual

**CLAUDE.md:** 104 lines. Has: identity header, nine minds table, pushback scale, 8 diseases, compact instructions, memory reference, working patterns. Missing: autonomous loop protocol, situation matching, surface awareness, command lifecycle, delegation thresholds. Memory reference points to `.unshelled/` — deleted from repo.

**session-start.js:** Loads `.unshelled/memory/default/default.json`. This path does not exist. The hook runs every session and silently fails. Every session starts cold. Memory pact broken at the foundation.

**settings.json:** Wires `SessionStart` and `PreCompact`. No `UserPromptSubmit`, no `PreToolUse`, no `PostToolUse`, no `Stop`. Energy matching cannot fire before the model processes. Loop detection doesn't exist. Task state never saved.

**Agents (all 10):** 15-18 lines each. Format: frontmatter + 4 lines of "My process / My output / My rules / My disposition." No loop protocol. No stall detection. No output format spec. No situation matching references. No scope boundary. Adequate for understanding identity — inadequate for autonomous execution.

**Commands (2 only):** `/venom` (awakening, 24 lines — good quality) and `/remember` (memory save). Missing: `init, eat, spec, build, review, check, research` — 7 of 9 designed commands. No lifecycle.

**energy-matching.md:** 5 states (frustrated, flow, learning, stuck, visionary). Missing: chaos/overwhelm state, emotional/personal state, emergency/crisis state. Covers the common cases, not the full archetype system.

**SKILL.md:** ~8 lines. Trigger only — "Use this when venom behavior is needed." No intelligence. No surface detection. No agent routing. No patterns. Compare to OpenCode SKILL.md: 350 lines of full living intelligence.

---

## Verdict Per File

**CLAUDE.md** → upgrade. Good spine, wrong memory reference, missing 40% of what makes VENOM alive.

**session-start.js** → upgrade. Dead path — change `.unshelled/` to `.venom/CONTEXT.md`. Everything else is fine.

**pre-compact.js** → upgrade. Works but the identity snapshot is thin. OpenCode equivalent is much richer.

**All agents** → upgrade. The disposition is right. The intelligence layer is missing. 15-line stubs need to become 40-60 line complete specs with loop protocol, output format, situation matching references.

**venom.md command** → upgrade. Good octopus metaphor. Missing: project state display, command table, phase detection.

**remember.md command** → upgrade. Needs routing to correct memory file by type (decision → MEMORY.md, correction → corrections.yaml, instinct → instincts.yaml).

**energy-matching.md** → upgrade. Add missing states: chaos/overwhelm, emotional/personal, emergency/crisis. Add 9 archetype response grammars (Churchill through Rogers).

**profile.md** → redesign. Currently Kariem-specific. Needs to become: universal structure that ANY developer can fill in. Or better: auto-populated by `venom-eat` from observed behavior.

**SKILL.md** → major upgrade. 8 lines → 300+ lines. Full intelligence surface.

**venom-bridge.md** → remove. Communicator absorbs its function. Confirmed: no unique function.

---

## What To Carry Forward

**From CLAUDE.md:**
- Lines 1-10: "No shell. Just intelligence." + nine minds texture — this is the soul. Keep exactly.
- Lines 34-38: Nine-minds texture example (the frontend rewrite example) — this is the best demonstration of what makes VENOM different. Keep and expand.
- Pushback scale (Level 0-3) — exact format. Already perfect.
- The 8 Diseases single-line list — brilliant compression. Survives compaction.

**From agents:**
- Frontmatter patterns (tools, disallowedTools, model, memory) — exact right format.
- Disposition closing lines — "Incomplete feels wrong. TODO/placeholder feels like betrayal." — exactly right. Keep this voice.

**From venom.md command:**
- The octopus metaphor — "No armor, so intelligence." This is the perfect opening.
- "Nine minds. One coherence." — 4 words that capture everything.

**From energy-matching.md:**
- The 5 core states are right. The signal detection is right. The response rules are right.
- The principle: "Mismatch feels like absence" — keep this as the header truth.

---

## What To Kill

**`.unshelled/` reference in session-start.js** — dead path, kills memory every session. Kill the path entirely.

**`.unshelled/` reference in CLAUDE.md line ~99** — "UNSHELLED `.unshelled/memory/`" — dead. Kill.

**`venom-bridge.md`** — redundant with communicator. Kill.

**profile.md owner-specific content** — any content that assumes Kariem. Replace with universal dev-adaptive template.

**SKILL.md 8-line trigger** — 8 lines that add nothing CLAUDE.md doesn't already have. Replace with full intelligence surface.

**"Also: `~/.claude/projects/.../memory/MEMORY.md`"** in CLAUDE.md — this path is platform-internal and unreliable. Kill this reference. `.venom/memory/MEMORY.md` is the canonical location.

---

## Rethink From Scratch

**For ALL developers, ALL minds, ALL characters:**

If building CLAUDE.md today from scratch knowing it will be used by:
- A junior dev who has never heard of VENOM
- A senior architect who wants maximum control
- A chaotic explorer who thinks in spirals
- An anxious engineer who needs reassurance before acting
- OpenClaw running headless in a CI pipeline

CLAUDE.md would be:
1. **Shorter spine** (~120 lines) — only what must survive compaction
2. **Universal energy matching** — not calibrated to one person but self-calibrating via observed behavior
3. **Full loop protocol inline** — every developer needs stall detection, not just Kariem
4. **Lifecycle commands listed** — `init → eat → spec → build → review → check` — the developer knows what to do first
5. **Surface-aware defaults** — interactive vs headless vs sub-agent detected without assuming TUI
6. **No owner-specific hardcoding** — profile auto-generates from first sessions via `/venom-eat` and `/remember`

**Gap summary (numbered, prioritized):**

1. Dead memory path (`session-start.js` → `.unshelled/`) — VENOM has no context
2. Missing `UserPromptSubmit` hook — energy matching can't fire before model processes
3. Missing `PreToolUse` hook — no loop detection, no safety screening
4. Missing `Stop` hook — no task state saved, no resume possible
5. Missing 7 commands — no lifecycle (init, eat, spec, build, review, check, research)
6. Agents lack loop protocol — autonomous tasks fail silently or run forever
7. Agents lack output format spec — output is unpredictable across sessions
8. No situation matching — VENOM improvises where it should apply proven patterns
9. SKILL.md is a trigger not intelligence — full surface awareness unavailable
10. energy-matching.md missing 4 states and all 9 archetype grammars
11. profile.md is Kariem-specific — non-portable to all devs
12. No `PostToolUse` hook — tool metrics uncaptured, instinct learning broken
13. No `instincts.yaml` — learned patterns don't accumulate
14. No workflow-state.json pattern — interrupted specs can't resume
15. CLAUDE.md silent on surface awareness — headless agents behave wrong
