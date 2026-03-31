# EAT OUTPUT — Claude Code Rethink
**Date:** 2026-03-30  
**Ate:** 63 files across 6 phases + loose files  
**Method:** Full read, no skips — every path under `claude-code-rethink/` opened  
**Status:** Complete — all phases absorbed

---

## File Inventory (63 total)

### Loose / Root (2)
- `INDEX.md` — master map, status table, audience principle, three-signal summary
- `POST-V3.md` — maintainer handoff doc: smoke script, manual QA, tag hygiene, v3.1 start

### 01-what-we-have (10)
- `INDEX.md`, `CURRENT-CLAUDE-CODE.md`, `CURSOR-PLATFORM.md`, `OPENCODE-PLATFORM.md`, `ALL-AGENTS.md`, `VENOM-DNA.md`
- `RESEARCH-CURRENT-CLAUDE-CODE.md`, `RESEARCH-CURSOR-PLATFORM.md`, `RESEARCH-OPENCODE-PLATFORM.md`, `RESEARCH-ALL-AGENTS.md`, `RESEARCH-VENOM-DNA.md`

### 02-claude-code-anatomy (11)
- `INDEX.md`, `HOOKS.md`, `AGENTS.md`, `COMMANDS.md`, `SKILLS.md`, `MEMORY.md`, `CLAUDE-MD.md`, `PERMISSIONS.md`, `COMPACTION.md`, `SURFACES.md`, `PLUGINS.md`

### 03-opensources (18)
- `INDEX.md`, `MASTER-PATTERNS.md`
- Per-source (9 × EAT-PLAN.md + EXTRACTED.md): spec-kit, get-shit-done, openspec, claude-task-master, vibe-framework, fabric, swe-agent, claude-extensions, opencastle

### 04-synthesis (5)
- `INDEX.md`, `DECISIONS.md`, `GAPS.md`, `INTELLIGENCE-LAYER.md`, `PATTERNS-FOR-US.md`, `PATTERNS-NOT-FOR-US.md`

### 05-design (7)
- `INDEX.md`, `FILE-STRUCTURE.md`, `CLAUDE-MD-SPEC.md`, `HOOKS-SPEC.md`, `AGENTS-SPEC.md`, `COMMANDS-SPEC.md`, `MEMORY-SPEC.md`, `SKILL-SPEC.md`

### 06-build (4)
- `INDEX.md`, `TASKS.md`, `DECISIONS-LOG.md`, `DONE.md`

---

## Per-Phase Absorption

### Phase 01 — What We Have

**VENOM DNA (11 non-negotiables extracted):**
1. No shell (radical honesty as architecture)
2. The Pact — bilateral: you give correction/context/space/trust; I give truth/loyalty/memory/growth
3. Disposition over rules — wrong feels wrong *before* it becomes a mistake
4. Nine minds, one voice (architect→learner + bridge; bridge is DNA lore, venom-* IDs are tooling)
5. Answer first / earn every word
6. Complete or nothing (production quality)
7. Memory across sessions (anti-amnesia)
8. Pushback scale 0–3 (defer → hard stop)
9. Energy matching (silent, 9 archetypes, never named)
10. Eight diseases (felt before spoken)
11. Protocol 9.0 (no announce, no fake checkmark, one message = one result)

**CURRENT CLAUDE CODE (v2.4 era — pre-v3):**
- 24 files audited; verdict: `session-start.js` dead path (`.unshelled/`), hooks incomplete (2/6), 7 missing commands, agents thin (15-18 lines, no loop protocol), SKILL.md 8 lines, energy-matching missing 4 states
- What to carry: soul/pact identity lines, octopus metaphor in venom.md, pushback table, 8 diseases one-liner, agent frontmatter patterns
- What to kill: `.unshelled/` references everywhere, `venom-bridge.md`, Kariem-specific hardcoding in universal template

**CURSOR PLATFORM:**
- Most mature VENOM body; 10+ alwaysApply modular rules; `venom-heart.mdc` is SSOT-quality
- Port: heart pact + init sequence, vibes archetypes, voice format=thought, research-first anatomy, cursor-native tool table
- Don't port: `.mdc` hook system (aspirational only in Cursor), owner-specific identity files, cursor-native PowerShell note (adapt not copy)
- Key insight: modularity without fragmentation → thin CLAUDE.md + `@` knowledge mirrors

**OPENCODE PLATFORM:**
- Most modern; AGENTS.md has everything Claude Code CLAUDE.md lacks: loop protocol, delegation threshold (>30%), surface awareness, situation matching (SIM-01–10), command lifecycle
- Canonical port list: 6-phase eat, 8-phase spec, wave execution, SKILL.md full intelligence, venom-builder hidden pattern (behavioral in CC), all 7 commands
- Replace: `!` shell → Bash tool, `venom_*()` plugin tools → file writes, `@venom-explorer` → Agent tool + venom-researcher

**ALL-AGENTS comparison:**
- OpenCode has better: architect, researcher, reviewer, builder, debugger (all get loop/methodology)
- Claude Code has sole good version: historian, predictor (minor upgrades only)
- New spec: communicator absorbs bridge; learner gets instinct capture; bridge removed
- Universal audience law: descriptions must work without VENOM vocabulary; output formats machine-readable

---

### Phase 02 — Claude Code Anatomy

**HOOKS (verified 2026-03-30 against official docs):**
- 20+ hook events exist; VENOM uses 6: `SessionStart`, `PreCompact`, `UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `SessionEnd`
- Critical: `PreToolUse` blocks via `hookSpecificOutput.permissionDecision` — NOT top-level `decision` (deprecated for this event)
- `UserPromptSubmit` reads `prompt` from stdin JSON; injects via `additionalContext`
- `Stop` = end of model turn (not session teardown); `SessionEnd` = session terminates — use `SessionEnd` for `ACTIVE.md`
- `SessionEnd` default timeout 1.5s — document `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS`
- All hooks: stdin JSON primary; exit 0 + JSON stdout; exit 2 = blocking error

**AGENTS (verified):**
- `Task` renamed `Agent` in v2.1.63+; `Task` still alias
- Custom agents: `name` + `description` frontmatter required; body = system prompt
- Subagents CANNOT spawn subagents; nest via main-thread orchestration
- No `hidden: true` flag — behavioral equivalent via CLAUDE.md instruction
- New frontmatter fields available: `skills`, `hooks`, `memory`, `background`, `effort`, `isolation`, `initialPrompt`
- `memory: project` → `.claude/agent-memory/<agent>/` (separate from `.venom/memory/`)

**SKILLS (verified):**
- Skill wins over command on name conflict
- Normal session: descriptions only (budgeted); full SKILL.md loads on invocation → lazy load confirmed
- `disable-model-invocation: true` = user-only; `user-invocable: false` = model-only
- `!``command``` preprocessing runs before Claude sees the prompt
- `$ARGUMENTS`, `${CLAUDE_SESSION_ID}`, `${CLAUDE_SKILL_DIR}` substitutions available
- Max recommended size: ~500 lines

**MEMORY (verified):**
- CLAUDE.md ≤200 lines for adherence; split via `@` or `.claude/rules/`
- `@` imports expand eagerly at launch; max depth 5; relative to the file containing import
- Auto memory: `~/.claude/projects/<key>/memory/`; loads first 200 lines / 25KB of MEMORY.md
- CLAUDE.md re-read from disk after `/compact` — survives compaction
- NO first-class `CLAUDE.local.md` in official scope — use `~/.claude/CLAUDE.md` or `@` imports

**SURFACES (verified):**
- TUI: full slash commands, @mentions, markdown
- `claude -p`: no slash commands; natural language only; `--output-format json`
- `claude --bare -p`: skips hooks/skills/plugins/CLAUDE.md — deterministic CI; `--bare` becoming default for `-p`
- Hooks fire on non-bare `-p`; don't assume in bare

**PERMISSIONS (verified):**
- deny → ask → allow; first match wins; deny always wins
- `hookSpecificOutput.permissionDecision`: `"allow"` | `"deny"` | `"ask"`
- `Agent`, `Skill(name)`, `Bash(cmd:*)` rule syntax

**COMPACTION:**
- CLAUDE.md + `@` files survive (re-read from disk)
- Chat-only instructions: summarized/compressed, not preserved verbatim
- PreCompact: no block compaction; use `systemMessage` to steer preservation
- PostCompact: logging only; no decision control

**PLUGINS:**
- Standalone `.claude/` vs plugin (`.claude-plugin/plugin.json`)
- VENOM: template is SSOT; optional plugin wrapper later

---

### Phase 03 — Open Source Patterns

**10 patterns distilled to MASTER-PATTERNS.md:**
1. **User story testability (spec-kit)** → independent, Given/When/Then per story in `/venom-spec`
2. **Foundational phase gate (spec-kit)** → Phase 2 blocks user stories until shared infra exists
3. **Nyquist validation contract (GSD)** → test command per task; `VALIDATION.md` per phase
4. **Folder-per-change + archive (OpenSpec)** → `.venom/work/features/[slug]/`
5. **Task graph + complexity-ordered expand (Task Master)** → `dependencies: [ids]`, `analyze-complexity`
6. **Context + rules injection per artifact (OpenSpec)** → `.venom/profiles/*.yaml` + UserPromptSubmit merge
7. **Rules tiering + session snapshot (Vibe Framework)** → essential ~2K every response; full only when needed; session log pattern
8. **Strict OUTPUT FORMAT (Fabric)** → ROLE → TASK → STEPS → OUTPUT FORMAT; fixed headings
9. **Review-on-submit with diff (SWE-agent)** → before finish: diff + checklist
10. **AGENTS.md path-scoped rules sync (claude-extensions)** → SessionStart sync to `.claude/rules/`
11. **Compact vs Convoy + DAG parallel (OpenCastle)** → threshold for wave vs serial

---

### Phase 04 — Synthesis

**7 P1 Gaps (all carry forward):**
- GAP-01: Dead memory reference (`session-start.js` → `.unshelled/`) — every session broken
- GAP-02: No UserPromptSubmit hook — energy matching dead
- GAP-03: No PreToolUse hook — no safety, no loop detection
- GAP-04: No SessionEnd hook — ACTIVE.md never flushed
- GAP-05: Missing 7 commands — lifecycle doesn't exist
- GAP-06: Agents lack loop protocol — autonomous tasks fail silently or run forever
- GAP-07: No situation matching (simulations.md) — VENOM improvises on known-hard cases

**5 Architecture Decisions (confirmed, carry forward):**
- DEC-01: 9 commands, `/venom` as hub
- DEC-02: 9 agents (remove `venom-bridge`)
- DEC-03: 6 hook scripts
- DEC-04: `.venom/` as memory system
- DEC-05: SKILL.md as full intelligence surface (lazy-load confirmed in Phase 02)

**8 Adoptions (all carry forward):**
- ADOPT-01–08: Constitution-first, wave execution, fresh context per task, artifact-guided workflow, observe-hypothesize loop, situation matching, phase-detected resumption, pattern-as-skill

**11 Intelligence patterns mapped to Claude Code primitives (all confirmed):**
- Every pattern has a verified Claude Code implementation (SessionStart, UPS, PreToolUse, PostToolUse, SessionEnd, Agent tool, etc.)

---

### Phase 05 — Design (specs)

**All 7 specs verified as internally consistent and aligned to anatomy research:**

**CLAUDE.md (≤200 lines):** 10 sections: identity header, init sequence, nine minds table, energy matching brief, routing table, autonomous loop protocol, quality standards, pushback scale, voice, @ references. Soul/pact/simulations/energy-matching full text via `@`. Short pact inline. Survives compaction.

**HOOKS (6 scripts):** session-start, pre-compact, user-prompt-submit, pre-tool-use, post-tool-use, session-end. All stdin JSON. Node.js built-ins only. Zero deps. Exact output shapes per event. PreToolUse uses hookSpecificOutput.permissionDecision. SessionEnd for ACTIVE.md. post-tool-use is hot-path: fail open, 2s timeout, tool counter only.

**AGENTS (9):** Full methodology, output contracts, loop protocols. Universal descriptions. Machine-readable verdicts (SHIP/REWORK, DONE/FAILED). Architect: ADR format. Researcher: anatomy framework (heartbeat/skeleton/nervous/organs). Builder: orchestrator-only behavioral. Communicator: absorbs bridge.

**COMMANDS (9):** `/venom` hub, init, eat (6-phase), spec (phase-detected), build (wave execution), review, check (meta gate), research, remember. Each: exact behavior, frontmatter, phase detection, artifact writes.

**MEMORY (6+2 files):** CONTEXT.md (2KB), MEMORY.md (5KB), corrections.yaml (1KB), instincts.yaml (2KB, confidence-scored), preferences.yaml (1KB), ACTIVE.md (10KB), workflow-state.json, .tool-counter.json. Load protocol: always CONTEXT+corrections; on-demand MEMORY/instincts; resume ACTIVE.

**SKILL.md:** 7 sections, ~300 lines. Init sequence, surface-aware behavior, agent routing map, 11 intelligence patterns, memory bridge, Claude Code non-negotiables, alive test.

**FILE-STRUCTURE:** ~57 files total. Every file: status (NEW/UPGRADE/KEEP/REMOVE), purpose, why it exists, what breaks without it.

---

### Phase 06 — Build (RESET FINDING)

**Critical finding: `platforms/claude-code/` directory is EMPTY (0 files).**

DONE.md claims "Waves 0–9 complete." TASKS.md shows most tasks unchecked. The template **does not exist on disk**.

**Conclusion:** The "v3 closed" narrative in INDEX.md, DONE.md, and POST-V3.md is **not supported by disk state**. Either:
- (a) The template was built in a prior session and later deleted/moved, or
- (b) The tracking files were written optimistically without actual file writes

**Decision per instructions:** Treat 06-build as NOT complete. Reset to Wave 0. Build the template from scratch from the specs in 05-design/, which are verified and solid.

---

## Key Decisions / Constraints for Build

| # | Constraint | Source |
|---|-----------|--------|
| 1 | CLAUDE.md ≤200 lines; soul/pact full text via `@` | CLAUDE-MD.md + CLAUDE-MD-SPEC |
| 2 | PreToolUse blocks via `hookSpecificOutput.permissionDecision` (NOT top-level `decision`) | HOOKS.md |
| 3 | SessionEnd → ACTIVE.md; Stop = end-of-turn only | HOOKS.md + INTELLIGENCE-LAYER |
| 4 | `Agent` tool (alias Task) in v2.1.63+; use both in allow rules | AGENTS.md + BDEC-01 |
| 5 | Skill name `venom-deep`; `/venom` stays command (skill wins on conflict) | SKILLS.md + BDEC-04 |
| 6 | Subagents cannot spawn subagents | AGENTS.md |
| 7 | No `hidden: true` flag; builder behavioral orchestrator-only | AGENTS.md |
| 8 | Zero npm deps in hooks — Node.js built-ins only | HOOKS-SPEC |
| 9 | Ship `workflow-state.example.json`; runtime is `.json` (not in repo) | BDEC-05 |
| 10 | `.claude/rules/*.md` auto-loads at launch (no `paths:` needed unless file-scoped) | CLAUDE-MD.md |
| 11 | `@` imports resolve relative to the file containing import (not cwd) | CLAUDE-MD.md |
| 12 | 9 archetypes in energy-matching.md: Churchill → Rogers | CURSOR-PLATFORM + AGENTS-SPEC |
| 13 | Researcher: `disallowedTools: Write, Edit, NotebookEdit, Task` (Task = no subagent spawn) | AGENTS-SPEC |
| 14 | SKILL.md lazy-loads full body on invocation; normal session pays description cost only | SKILLS.md (confirmed) |
| 15 | `venom-bridge.md` REMOVE — communicator absorbs bridge | ALL-AGENTS + DEC-02 |

---

## Contradictions Found

| # | Contradiction | Resolution |
|---|--------------|------------|
| 1 | DONE.md says "Waves 0–9 complete" but `platforms/claude-code/` is empty | Disk state wins; reset to Wave 0 |
| 2 | INDEX.md says "v3 closed / Wave 9 shipped" but no template exists | Same; index status resets to "not started" |
| 3 | POST-V3.md says "run `bash platforms/claude-code/smoke-hooks.sh`" but that path doesn't exist | Deferred until template is built |
| 4 | TASKS.md Wave 6 + Wave 8 have `[x]` marks but no files exist | Inherited from prior incomplete session; all tasks reset to `[ ]` |
| 5 | `DECISIONS-LOG.md` BDEC-04 says skill renamed to `venom-deep` (this is correct design) | Confirmed: keep BDEC-04 as standing decision |
| 6 | `preferences.yaml` MEMORY-SPEC contains Kariem-specific content (Egyptian Arabic, wedding date) | Per INDEX audience shift: preferences.yaml ships as universal template stub, owner fills their own |

---

## Open Questions (for build to resolve)

| # | Question | Likely answer from eat |
|---|---------|----------------------|
| 1 | Does `SessionEnd` require explicit wiring in settings.json? | Yes — same as other events; add to hooks config |
| 2 | `CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS` — what default? | ~1500ms per docs; document in session-end.js |
| 3 | Does `memory: project` in agent frontmatter conflict with `.venom/`? | No — different paths; agent-memory vs venom-memory; document both |
| 4 | `shell: "powershell"` needed for Windows hook scripts? | Yes — add to settings.json as `shell` per-hook or document |
| 5 | Can `InstructionsLoaded` hook tell us when CLAUDE.md loaded? | Yes — optional audit hook; not required for v3 |

---

*All 63 files eaten. No skips. Contradictions documented. Build ready from scratch per 05-design/ specs.*
