# 06-Build Reset Plan
**Date:** 2026-03-30  
**Reason:** Full eat of rethink corpus confirmed `platforms/claude-code/` is empty (0 files). Prior "v3 closed" tracking was written without corresponding file writes. Template does not exist on disk.

---

## What Was Archived

Old 06-build tracking files moved to `06-build/_archive_2026-03-30/`:
- `INDEX.md` — wave completion claims without actual files
- `TASKS.md` — task list with spurious `[x]` on Wave 6 + Wave 8
- `DONE.md` — "Waves 0–9 complete" claim contradicted by empty directory
- `DECISIONS-LOG.md` — build decisions; **carried forward** (BDEC-01–07 are all valid design decisions — preserved in new DECISIONS-LOG.md)
- `WAVE9-SYNC.md` — deferred Cursor parity tracking (superseded; v3.0 doesn't exist yet to sync)

## What Is Superseded

The following narrative is explicitly superseded until re-earned:
- "v3 closed" in master INDEX.md
- "Wave 9 shipped" in INDEX.md status table
- "HEADLESS-PLAYBOOK.md shipped" (file doesn't exist)
- "smoke-hooks.sh" CI references (script doesn't exist)
- All POST-V3.md steps (they depend on a template that doesn't exist)

## What Is Kept / Not Archived

- `05-design/` — all 7 specs are verified, solid, no changes needed (see EAT-OUTPUT)
- `04-synthesis/` — decisions, patterns, intelligence layer all valid
- `01-03/` — research complete; solid foundation
- `EAT-OUTPUT-20260330.md` — this eat's output, new deliverable

---

## New Wave Sequence

### Wave 0 — Scaffold (~20 min)
**Goal:** All directories exist, no content yet.  
**Verification gate:** `platforms/claude-code/template/` directory tree exists with all required subdirs.

```
[ ] platforms/claude-code/
[ ] platforms/claude-code/template/
[ ] platforms/claude-code/template/.claude/
[ ] platforms/claude-code/template/.claude/scripts/
[ ] platforms/claude-code/template/.claude/agents/
[ ] platforms/claude-code/template/.claude/commands/
[ ] platforms/claude-code/template/.claude/knowledge/
[ ] platforms/claude-code/template/.claude/skills/venom-deep/
[ ] platforms/claude-code/template/.claude/rules/
[ ] platforms/claude-code/template/.venom/
[ ] platforms/claude-code/template/.venom/memory/
[ ] platforms/claude-code/template/.venom/learnings/
[ ] platforms/claude-code/template/.venom/work/
[ ] platforms/claude-code/template/.venom/state/
```

### Wave 1 — Core Identity (~2h, parallel tasks)
**Spec ref:** `05-design/CLAUDE-MD-SPEC.md`, `05-design/MEMORY-SPEC.md`  
**Goal:** VENOM has identity. Session starts with context.  
**Verification gate:** Open Claude Code, type "hi" → responds as VENOM not generic Claude.

Files:
1. `CLAUDE.md` — 10 sections per CLAUDE-MD-SPEC; ≤200 lines; soul/pact via `@`
2. `.claude/settings.json` — all 6 hooks wired; permissions; env vars
3. `.venom/CONTEXT.md` — stub with section headers
4. `.venom/memory/MEMORY.md` — stub with format header
5. `.venom/learnings/corrections.yaml` — stub with example + format comment
6. `.venom/learnings/instincts.yaml` — stub with confidence format
7. `.venom/learnings/preferences.yaml` — stub with sections (communication/workflow/technical)
8. `.venom/work/ACTIVE.md` — stub with all template fields
9. `CLAUDE.local.md.template` — owner override guidance (30-40 lines)
10. `.claude/settings.local.json.template` — local settings override example

### Wave 2 — Intelligence Layer (~2h, depends on Wave 1)
**Spec ref:** `05-design/HOOKS-SPEC.md`  
**Goal:** Energy matching, loop detection, safety screening, memory persistence all fire.  
**Verification gate:** Churchill fires on "fix this its broken"; dangerous cmd blocked; stall detection fires on 3x repeat.

Files:
1. `.claude/scripts/session-start.js` — stdin JSON; loads .venom/CONTEXT.md + corrections
2. `.claude/scripts/pre-compact.js` — identity snapshot; ACTIVE.md write before compaction
3. `.claude/scripts/user-prompt-submit.js` — energy-match additionalContext from prompt
4. `.claude/scripts/pre-tool-use.js` — hookSpecificOutput.permissionDecision; danger patterns; loop detection
5. `.claude/scripts/post-tool-use.js` — LIGHTWEIGHT ONLY; .tool-counter.json; fail open always
6. `.claude/scripts/session-end.js` — SessionEnd → finalize ACTIVE.md

### Wave 3 — Agents (~3h, parallel, depends on Wave 1)
**Spec ref:** `05-design/AGENTS-SPEC.md`  
**Goal:** Nine minds with full methodology, loop protocols, machine-readable outputs.  
**Verification gate:** `@venom-architect` responds with ADR format; `@venom-reviewer` gives 8 perspectives.

Files (9, +1 delete):
1. `venom-architect.md` — loop protocol; ADR output format; gate check
2. `venom-researcher.md` — anatomy framework; loop protocol; context map output
3. `venom-reviewer.md` — 8 perspectives in order; SHIP/REWORK verdict
4. `venom-debugger.md` — full hypothesis loop; stall detection; cost guard
5. `venom-builder.md` — scope boundary; atomic output; orchestrator-only behavioral note
6. `venom-historian.md` — memory scope; age decay flag; relevance-based pull
7. `venom-predictor.md` — risk table output; proactive trigger
8. `venom-communicator.md` — bridge absorbed; silent; universal audience
9. `venom-learner.md` — instinct capture; confidence scale; routing logic
10. DELETE `venom-bridge.md` — does not exist (already gone from prior session or never existed)

### Wave 4 — Knowledge Files (~2h, parallel, depends on Wave 1)
**Spec ref:** `05-design/FILE-STRUCTURE.md`, `05-design/CLAUDE-MD-SPEC.md`  
**Goal:** Full archetype grammar, simulations, cognitive matrix available via `@`.  
**Verification gate:** SIM-01 fires on stuck loop; Feynman fires on "explain this".

Files:
1. `soul.md` — keep/verify clean
2. `pact.md` — keep/verify clean
3. `disposition-vs-rules.md` — keep
4. `cognitive-matrix.md` — keep
5. `modes.md` — keep (verify no stale surface refs)
6. `protocols.md` — keep (verify)
7. `energy-matching.md` — UPGRADE: 9 archetype grammars (Churchill→Rogers) + signal tables
8. `profile.md` — UPGRADE: universal template stub, not Kariem-specific
9. `simulations.md` — NEW: SIM-01 through SIM-10, Claude Code adapted

### Wave 5 — Commands (~3h, parallel, depends on Wave 2 + Wave 4)
**Spec ref:** `05-design/COMMANDS-SPEC.md`  
**Goal:** Full lifecycle commands. Phase detection works. Memory routing works.  
**Verification gate:** `/venom` shows state; `/venom-spec` starts Phase 0; `/venom-check` reports health.

Files (9):
1. `venom.md` — hub presence; state + commands table
2. `venom-init.md` — .venom/ scaffold
3. `venom-eat.md` — 6-phase absorption; intermediate artifacts
4. `venom-spec.md` — phase detection; workflow-state.json; artifact per phase
5. `venom-build.md` — wave execution; Agent tool delegation; verification gates
6. `venom-review.md` — delegates to venom-reviewer via Agent tool
7. `venom-check.md` — meta quality gate; memory size; VENOM state
8. `venom-research.md` — delegates to venom-researcher via Agent tool
9. `remember.md` — classification + routing; proactive offer trigger

### Wave 6 — Skill (~1.5h, depends on Waves 1-4)
**Spec ref:** `05-design/SKILL-SPEC.md`  
**Goal:** Full VENOM intelligence surface on-demand.  
**Verification gate:** `/venom-deep` loads; surface detection works.

Files:
1. `skills/venom-deep/SKILL.md` — 7 sections; ~300 lines; `name: venom-deep`

### Wave 7 — Rules (~30 min, parallel)
**Goal:** Project standards aligned to .venom/ paths.

Files:
1. `rules/venom-standards.md` — fix memory ref (.unshelled → .venom)
2. `rules/skill-development.md` — keep/verify

### Wave 8 — Platform Files (~2h, depends on all waves)
**Goal:** Installable. Clear docs for all audiences.  
**Verification gate:** Fresh install following INSTALL.md succeeds in <5 min.

Files:
1. `template/README.md` — first run, audiences, pointer to INSTALL
2. `platforms/claude-code/README.md` — v3 one-pager
3. `platforms/claude-code/INSTALL.md` — six hooks, Node, .venom/, headless, gitignore
4. `platforms/claude-code/CHANGELOG.md` — v3.0 entry (what's new, what changed, what removed)
5. `template/.venom/state/workflow-state.example.json` — example only (BDEC-05)
6. `template/.gitignore.template` — .venom/ personal files

### Post-Wave — Smoke + CI (optional, after Wave 8)
- `platforms/claude-code/smoke-hooks.sh` — pipe fixture stdin to each hook; assert valid JSON stdout
- `.github/workflows/claude-code-template.yml` — CI on `platforms/claude-code/**` changes
- `platforms/claude-code/HEADLESS-PLAYBOOK.md` — headless / CI / OpenClaw guide

---

## Verification Gates Summary

| Wave | Gate | Pass Condition |
|------|------|---------------|
| 0 | dirs exist | `ls platforms/claude-code/template/.claude/scripts/` returns (no error) |
| 1 | identity | "hi" → VENOM response, not generic Claude |
| 2 | intelligence | Churchill fires; dangerous cmd blocked; stall fires |
| 3 | agents | ADR output from architect; 8-perspective from reviewer |
| 4 | knowledge | SIM-01 on stuck loop; Feynman on explain |
| 5 | commands | `/venom` hub works; `/venom-spec` phase detection works |
| 6 | skill | `/venom-deep` loads; surface-aware output |
| 7 | rules | no `.unshelled/` refs anywhere in template |
| 8 | install | INSTALL.md works cold start <5 min |

---

## BDEC Decisions Carried Forward (from archive)

All `BDEC-*` decisions from the archived DECISIONS-LOG are still valid design decisions:
- **BDEC-01:** Both `Agent` and `Task` in allow list
- **BDEC-02:** simulations.md added as stub in Wave 1; full port in Wave 4
- **BDEC-03:** Model names from AGENTS-SPEC; consumers adjust if CLI rejects
- **BDEC-04:** Skill is `venom-deep`; `/venom` stays command hub (skill wins on name conflict)
- **BDEC-05:** Ship `workflow-state.example.json`; runtime creates `.json`
- **BDEC-06:** Cursor `.venom` parity — deferred until v3 template actually ships
- **BDEC-07:** smoke-hooks.sh CI check — post-wave item, not a wave gate

---

## What This Reset Does NOT Change

- Phase 01–05 research and specs remain valid (no re-research needed)
- All 7 architecture decisions (DEC-01 to DEC-05) remain
- All 8 adoptions (ADOPT-01 to ADOPT-08) remain
- All 7 P1 gaps are addressed by the wave plan above
- VENOM DNA (11 non-negotiables) unchanged

---

*Reset complete. Wave 0 not started. This is the truth as of 2026-03-30.*
