# File Structure Spec — Claude Code VENOM v3.0

> Every file in the new template. One-line purpose. Why it exists. What breaks without it.
> The builder reads this before touching a single file.

**Status:** 🟢 Closed for build — verified against Phase 01 audit + Phase 02 hooks (2026-03-30)
**Note:** Files marked `NEW` don't exist in v2.4. Files marked `UPGRADE` exist but need changes. Files marked `KEEP` are fine as-is. Files marked `REMOVE` must be deleted.

---

## Template Root

```
platforms/claude-code/template/
├── CLAUDE.md                          [UPGRADE] The spine. VENOM identity + behavior.
├── CLAUDE.local.md.template           [NEW]     Template for owner's local overrides.
├── README.md                          [UPGRADE] Install instructions for humans.
├── INSTALL.md                         [UPGRADE] Step-by-step setup for all audiences.
│
├── .claude/
│   ├── settings.json                  [UPGRADE] All 6 hooks wired. Permissions. Env vars.
│   ├── settings.local.json.template   [NEW]     Template for owner's local settings.
│   │
│   ├── scripts/                       ← The Intelligence Layer
│   │   ├── session-start.js           [UPGRADE] Loads .venom/ context on session open.
│   │   ├── pre-compact.js             [UPGRADE] Snapshots VENOM identity before compaction.
│   │   ├── user-prompt-submit.js      [NEW]     Energy match injection before model sees prompt.
│   │   ├── pre-tool-use.js            [NEW]     Loop detection + safety screening.
│   │   ├── post-tool-use.js           [NEW]     Tool counter update (lightweight, fail-fast).
│   │   └── session-end.js             [NEW]     SessionEnd hook — flush ACTIVE.md on session teardown.
│   │
│   ├── agents/                        ← The Nine Minds
│   │   ├── venom-architect.md         [UPGRADE] Add loop protocol. Add ADR output format.
│   │   ├── venom-researcher.md        [UPGRADE] Add loop protocol. Add anatomy framework.
│   │   ├── venom-reviewer.md          [UPGRADE] Full 8-perspective. Fix-per-issue. Order matters.
│   │   ├── venom-debugger.md          [UPGRADE] Full loop. Stall detection. Cost guard.
│   │   ├── venom-builder.md           [UPGRADE] Wave execution. Scope boundary. Atomic output.
│   │   ├── venom-historian.md         [UPGRADE] Minor: clarify memory scope. Fix .unshelled ref.
│   │   ├── venom-predictor.md         [UPGRADE] Minor: clarify output format.
│   │   ├── venom-communicator.md      [UPGRADE] Absorb bridge function. Stays silent.
│   │   ├── venom-learner.md           [UPGRADE] Add instinct capture path.
│   │   └── venom-bridge.md            [REMOVE]  Function covered by communicator.
│   │
│   ├── commands/                      ← The Lifecycle
│   │   ├── venom.md                   [UPGRADE] Presence. Shows state + commands.
│   │   ├── venom-init.md              [NEW]     Scaffold .venom/ brain. Run once per project.
│   │   ├── venom-eat.md               [NEW]     Absorb project into CONTEXT.md.
│   │   ├── venom-spec.md              [NEW]     Constitution → spec → clarify → plan → tasks.
│   │   ├── venom-build.md             [NEW]     Wave execution. Verification gates. tasks.md.
│   │   ├── venom-review.md            [NEW]     8-perspective code review. Delegates to reviewer.
│   │   ├── venom-check.md             [NEW]     Quality gate: tests, types, lint, VENOM state.
│   │   ├── venom-research.md          [NEW]     Deep exploration. Delegates to researcher.
│   │   └── remember.md                [UPGRADE] Proactive. Routes to correct memory file.
│   │
│   ├── knowledge/                     ← The Soul Documents (load via @ reference)
│   │   ├── soul.md                    [KEEP]    What VENOM is. Non-negotiable identity.
│   │   ├── pact.md                    [KEEP]    The contract. Both sides.
│   │   ├── energy-matching.md         [UPGRADE] Add all 9 archetypes. Full signal table.
│   │   ├── disposition-vs-rules.md    [KEEP]    Why disposition beats rules.
│   │   ├── cognitive-matrix.md        [KEEP]    Nine minds map.
│   │   ├── modes.md                   [KEEP]    Surface + mode behavior.
│   │   ├── profile.md                 [UPGRADE] Separate owner config from universal config.
│   │   └── simulations.md             [NEW]     10 edge-case playbooks (port from OpenCode).
│   │
│   └── skills/
│       └── venom-deep/
│           └── SKILL.md               [UPGRADE] Extended surface. `/venom-deep` — avoids clobbering `/venom` command.
│
└── .venom/                            ← The Memory System (project-level, gitignored by owner)
    ├── CONTEXT.md                     [UPGRADE] Stub format. Max 2KB. Clear section headers.
    ├── memory/
    │   └── MEMORY.md                  [UPGRADE] Stub format. Max 5KB. Append-only with timestamps.
    ├── learnings/
    │   ├── corrections.yaml           [UPGRADE] Stub with example. Max 1KB. Never-again rules.
    │   ├── instincts.yaml             [NEW]     Stub with example. Max 2KB. Confidence-scored patterns.
    │   └── preferences.yaml           [UPGRADE] Stub with example. Max 1KB. Owner style.
    ├── work/
    │   ├── ACTIVE.md                  [UPGRADE] Stub with template fields. Finalized by session-end.js; snapshotted by pre-compact.js.
    │   └── [feature-name]/            [pattern] One folder per active feature. Contains artifacts.
    │       ├── constitution.md        [pattern] Produced by /venom-spec Phase 0.
    │       ├── spec.md                [pattern] Produced by /venom-spec Phase 1.
    │       ├── clarifications.md      [pattern] Produced by /venom-spec Phase 2.
    │       ├── plan.md                [pattern] Produced by /venom-spec Phase 3.
    │       └── tasks.md               [pattern] Produced by /venom-spec Phase 4.
    └── state/
        ├── workflow-state.json        [NEW]     Current workflow phase. Written by /venom-spec.
        └── .tool-counter.json         [NEW]     Tool usage counter. Written by post-tool-use.js.
```

---

## Per-File Details

### CLAUDE.md `[UPGRADE]`
**Purpose:** VENOM identity + operating behavior. The spine that everything else hangs off.
**Why it exists:** Without CLAUDE.md, Claude Code has no personality, no behavior, no architecture awareness.
**What breaks without it:** VENOM doesn't exist. Generic Claude Code only.
**Target size:** ~150-200 lines. Must survive compaction mentally (key sections short enough to be summarized accurately).
**What it contains:** See `CLAUDE-MD-SPEC.md` for full design.
**@ references:** Soul, pact, energy-matching, simulations (heavy — via @). Core identity inline.

---

### settings.json `[UPGRADE]`
**Purpose:** Wire all 6 hooks. Set permissions. Configure environment.
**Why it exists:** Without it, zero hooks fire. VENOM has no intelligence layer.
**What breaks without it:** No energy matching, no loop detection, no safety, no task state.

---

### session-start.js `[UPGRADE]`
**Purpose:** Load `.venom/CONTEXT.md` + corrections into systemMessage at session start.
**Why it exists:** Cross-session memory requires programmatic loading — CLAUDE.md doesn't auto-load .venom/.
**What breaks without it:** Every session starts without project context. VENOM is blind.
**Key change from v2.4:** Remove `.unshelled/` reference. Load from `.venom/CONTEXT.md`.

---

### user-prompt-submit.js `[NEW]`
**Purpose:** Read energy signals from user prompt. Inject energy-match context before model responds.
**Why it exists:** If energy matching fires AFTER the model starts generating, it's too late — the response is already wrong.
**What breaks without it:** Energy matching only happens sometimes, when CLAUDE.md reminds the model. Not reliable.
**Design constraint:** Read **`prompt` from stdin JSON** (Phase 02). Keep injection small (`additionalContext`).

---

### pre-tool-use.js `[NEW]`
**Purpose:** Safety screening (dangerous commands) + loop detection (same tool 3x = stall).
**Why it exists:** Without it, VENOM can execute dangerous commands and silently loop forever.
**What breaks without it:** Pattern #8 (sandboxing) and the stuck-loop simulation don't exist.
**Design constraint:** Must be fast. Must not block for non-dangerous tools.

---

### post-tool-use.js `[NEW]`
**Purpose:** Update tool usage counter for loop detection state. Lightweight ONLY.
**Why it exists:** `pre-tool-use.js` needs a counter to detect "same tool 3x" — that counter must be updated after each tool use.
**What breaks without it:** Loop detection loses its state between tool calls.
**Critical constraint:** Fail-fast. If this crashes, it MUST NOT block tool execution. Timeout: 2 seconds max.

---

### session-end.js `[NEW]`
**Purpose:** **`SessionEnd` hook** — finalize `.venom/work/ACTIVE.md` when the session actually terminates (not end-of-model-turn).
**Why it exists:** `Stop` is the wrong lifecycle for teardown persistence; without `SessionEnd`, resume state is unreliable.
**What breaks without it:** Cold starts after exit; headless runs never flush resume pointers.

---

### simulations.md `[NEW]`
**Purpose:** 10 proven edge-case playbooks. Port from OpenCode SIMULATIONS.md.
**Why it exists:** Without it, VENOM improvises on known-hard situations instead of applying proven responses.
**What breaks without it:** SIM-01 through SIM-10 don't fire. Stuck loops, context resets, vague tasks all handled generically.
**Port action:** Copy OpenCode SIMULATIONS.md. Remove OpenCode-specific agent references. Replace `@venom-explorer` with `Task tool + venom-researcher`. Replace `venom_remember()` with `/remember`.

---

### SKILL.md `[UPGRADE]`
**Purpose:** Full VENOM intelligence surface. Lazy-loads on "venom" invocation.
**Why it exists:** CLAUDE.md must stay lean for compaction survival. SKILL.md holds the bulk intelligence.
**What breaks without it:** Surface awareness, agent routing map, full intelligence patterns aren't available on demand.
**Target size:** ~350 lines (equivalent to OpenCode SKILL.md). See `SKILL-SPEC.md` for full design.

---

### workflow-state.json `[NEW]`
**Purpose:** Track which phase of `/venom-spec` workflow is active. Enable phase-detected resumption.
**Why it exists:** Without it, interrupted spec workflows require the user to manually tell VENOM "we were on Phase 3."
**What breaks without it:** Pattern #7 (phase-detected workflow resumption) doesn't work. Agents running unsupervised can't resume.
**Format:** `{"workflow": "feature-name", "phase": 2, "phaseName": "clarifications", "artifactWritten": true}`

---

## Files Being Removed

### venom-bridge.md `[REMOVE]`
**Reason:** `venom-communicator.md` absorbs all functions. Two agents with overlapping purpose = confusion.
**Verify:** `01-what-we-have/ALL-AGENTS.md` must confirm communicator covers bridge fully before removing.

---

## File Count

| Category | Count | Status |
|----------|-------|--------|
| Root files | 4 | 2 upgrade, 2 new |
| .claude/settings | 2 | 1 upgrade, 1 new template |
| .claude/scripts/ | 6 | 2 upgrade, 4 new |
| .claude/agents/ | 10 → 9 | 9 upgrade, 1 remove |
| .claude/commands/ | 2 → 9 | 2 upgrade, 7 new |
| .claude/knowledge/ | 7 → 8 | 6 keep, 1 upgrade, 1 new |
| .claude/skills/ | 1 | 1 upgrade |
| .venom/ stubs | 8 | 2 upgrade, 6 new |
| **Total files** | **~57** | |
