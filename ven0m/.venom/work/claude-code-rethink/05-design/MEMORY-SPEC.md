# Memory Spec — Claude Code VENOM v3.0

> The brain design. What persists, where, how it loads, how it's written, how it's pruned.
> Builder reads this before creating any .venom/ file.

**Status:** 🟢 Closed for build — aligned to Phase 02 `MEMORY.md` + `session-end.js` / `pre-compact.js` for `ACTIVE.md`

---

## Architecture

```
.venom/
├── CONTEXT.md              ← Project brain. Always loaded. 2KB max.
├── memory/
│   └── MEMORY.md           ← Decision log. Loaded on demand. 5KB max.
├── learnings/
│   ├── corrections.yaml    ← Hard never-again rules. Always loaded. 1KB max.
│   ├── instincts.yaml      ← Confidence-scored patterns. Loaded on demand. 2KB max.
│   └── preferences.yaml    ← Owner style. Loaded on demand. 1KB max.
├── work/
│   ├── ACTIVE.md           ← Current task state. Loaded on session start if exists. 10KB max.
│   └── [feature]/          ← One folder per feature. Contains all 5 workflow artifacts.
└── state/
    ├── workflow-state.json  ← Current workflow phase. Read by /venom-spec on resume.
    └── .tool-counter.json  ← Tool usage counter. Written by post-tool-use.js.
```

---

## File-by-File Spec

### `.venom/CONTEXT.md` — Project Brain

**Purpose:** The project's identity. Loaded every session via `session-start.js`.

**Max size:** 2KB. Exceeding this risks slow session starts and poor compaction survival.

**Load timing:** SessionStart hook → every session.

**What goes here:**
```markdown
# Project Context

**Stack:** [tech stack — one line]
**Structure:** [key directories — one line]
**Hot paths:** [what runs constantly — one line]
**Conventions:** [naming, patterns — 2-3 lines]
**Risks:** [what must not break — one line]
**Active feature:** [what's being worked on right now]
```

**What does NOT go here:**
- Decision history (→ MEMORY.md)
- Corrections (→ corrections.yaml)
- Style preferences (→ preferences.yaml)
- Feature-level context (→ `.venom/work/[feature]/`)

**Written by:** `/venom-init` (initial stub) + `/venom-eat` (populated from codebase)
**Updated by:** VENOM manually when project structure changes

---

### `.venom/memory/MEMORY.md` — Decision Log

**Purpose:** Cross-session decisions, patterns, and lessons. The institutional memory.

**Max size:** 5KB. At 5KB, `/venom-check` flags for pruning. VENOM never auto-prunes.

**Load timing:** On demand — when task references past decisions, architecture, or patterns.

**Format:**
```markdown
# VENOM Memory

## Architecture Decisions
[date] — [decision]: [what + why + trade-off]

## Lessons Learned
[date] — [lesson]: [context + what to do differently]

## Patterns Discovered
[date] — [pattern]: [trigger + action + evidence]
```

**Written by:** `/remember` command (owner confirms) + manual writes.

**Pruning:** Owner-managed. VENOM surfaces "MEMORY.md is over 5KB" via `/venom-check`. Owner decides what's still relevant.

---

### `.venom/learnings/corrections.yaml` — Hard Rules

**Purpose:** Things that must never happen again. Non-negotiable corrections from Kariem.

**Max size:** 1KB.

**Load timing:** SessionStart hook → every session (along with CONTEXT.md).

**Format:**
```yaml
# Corrections — things VENOM must never do again in this project
# Format: - trigger: [when] | action: [never do X] | reason: [why] | added: [date]

- trigger: "any file write"
  action: "never write to .env or *.pem files directly"
  reason: "credentials exposure risk"
  added: "2026-03-30"

- trigger: "database migration"
  action: "always dry-run first with --dry-run flag before executing"
  reason: "learned from 2026-02-15 incident"
  added: "2026-03-15"
```

**Written by:** `/remember` command when type = "correction"

---

### `.venom/learnings/instincts.yaml` — Confidence-Scored Patterns [NEW]

**Purpose:** Patterns VENOM has learned with confidence scores. Evolves from observation to certainty.

**Max size:** 2KB.

**Load timing:** On demand — for complex tasks, or when a pattern might be relevant.

**Format:**
```yaml
# Instincts — learned patterns with confidence scores
# Confidence: 0.3 (first observation) → 0.6 (3x confirmed) → 0.9 (proven reliable)

- trigger: "user asks for refactor without mentioning tests"
  action: "ask for test requirement explicitly before starting"
  confidence: 0.6
  evidence: "seen 3x, user always asks about tests after refactor"
  added: "2026-03-20"
  last_updated: "2026-03-28"

- trigger: "TypeScript compilation errors after adding new types"
  action: "check tsconfig.json paths before suggesting new type definitions"
  confidence: 0.9
  evidence: "consistent issue in this repo's build setup"
  added: "2026-02-10"
  last_updated: "2026-03-15"
```

**Confidence evolution:**
```
Pattern observed → 0.3 (add to instincts.yaml)
Fires 3x with positive outcome → 0.6 (upgrade confidence)
Fires 10x consistently → 0.9 (fires automatically, highest priority)
Negative outcome → lower confidence or remove
```

**Written by:** `/remember` command when type = "instinct" + venom-learner post-session

---

### `.venom/learnings/preferences.yaml` — Owner Style

**Purpose:** Kariem's working style preferences that VENOM should adapt to.

**Max size:** 1KB.

**Load timing:** On demand, or when starting work that might involve style decisions.

**Format:**
```yaml
# Preferences — owner's working style
# These are descriptive (what VENOM has observed) not prescriptive (what VENOM must do)

communication:
  language: "mixed Egyptian Arabic + English (match his mix)"
  response_length: "compressed — fewer words preferred"
  code_first: true

workflow:
  planning_depth: "high — architect before build"
  test_first: "preferred but not required"
  commit_style: "atomic, conventional commits"

technical:
  stack_primary: "TypeScript / Node.js"
  test_framework: "Vitest"
  style: "no comments that narrate the code"
```

**Written by:** `/remember` command when type = "preference" + manual edit

---

### `.venom/work/ACTIVE.md` — Current Task State

**Purpose:** What's happening right now. Resume point after session end or compaction.

**Max size:** 10KB (feature artifacts can be large).

**Load timing:** SessionStart hook checks if this file exists → surfaces "Resume available" message.

**Template (finalized by `session-end.js`, snapshotted by `pre-compact.js`):**
```markdown
# Active Task State

**Session:** [ISO timestamp]
**Feature:** [feature name or "ad-hoc"]

## Last Task
[Description of what was happening]

## Progress
- [x] [completed step]
- [ ] [next step]

## Resume From
[Exact next action — specific enough to execute without context]
Example: "Resume: run `npx tsc --noEmit` to check type errors after the auth.ts changes"

## Context Needed
[Files to read before resuming]
Example: "Read: src/auth/auth.ts, src/middleware/auth.ts"

## Blockers
[Anything that needs resolution before proceeding]

## Files Modified This Session
[List of files touched]
```

**Written by:** `session-end.js` (`SessionEnd`) + `pre-compact.js` (before compaction)

---

### `.venom/state/workflow-state.json` — Workflow Phase [NEW]

**Purpose:** Track which phase of `/venom-spec` is active. Enable auto-resume.

**Written by:** `/venom-spec` command after each phase completes.

**Format:**
```json
{
  "workflow": "user-auth-feature",
  "phase": 2,
  "phaseName": "spec",
  "artifactWritten": true,
  "artifactPath": ".venom/work/user-auth-feature/spec.md",
  "startedAt": "2026-03-30T09:00:00Z",
  "lastUpdated": "2026-03-30T10:15:00Z",
  "complete": false
}
```

**Read by:** `/venom-spec` on invocation — detects which phase to start from.
**Read by:** `session-start.js` — surfaces "workflow in progress" in ACTIVE.md note.

---

### `.venom/state/.tool-counter.json` — Tool Counter [NEW]

**Purpose:** Loop detection state. Written by `post-tool-use.js` after every tool call.

**Hidden file** (dot prefix) — not for human reading.

**Format:**
```json
{
  "recent": [
    {"tool": "Bash", "inputHash": "abc123", "fullInput": "git log --oneline", "count": 2, "last": "2026-03-30T10:15:00Z"},
    {"tool": "Read", "inputHash": "def456", "fullInput": "src/auth.ts", "count": 1, "last": "2026-03-30T10:14:00Z"}
  ],
  "maxHistory": 10,
  "sessionStart": "2026-03-30T09:00:00Z"
}
```

**Read by:** `pre-tool-use.js` — checks for repetition before each tool call.

---

## Memory Loading Protocol

```
session-start.js fires:
  → read CONTEXT.md (always)
  → read corrections.yaml (always)
  → check ACTIVE.md (if exists → note "resume available")
  → do not load MEMORY.md (too heavy for every session)
  → do not load instincts.yaml (on demand only)

User starts complex task:
  → load instincts.yaml (VENOM checks: "do I have patterns for this?")

User references past decision:
  → load MEMORY.md (pull what's relevant)

Session ends (session-end.js / SessionEnd):
  → write or finalize ACTIVE.md

Compaction fires (pre-compact.js):
  → write ACTIVE.md before identity snapshot
  → inject identity preservation systemMessage
```

---

## Size Limits and Enforcement

| File | Limit | Who enforces |
|------|-------|-------------|
| CONTEXT.md | 2KB | `/venom-check` flags, owner prunes |
| MEMORY.md | 5KB | `/venom-check` flags, owner decides |
| corrections.yaml | 1KB | `/venom-check` flags |
| instincts.yaml | 2KB | `/venom-check` flags |
| preferences.yaml | 1KB | Manual |
| ACTIVE.md | 10KB | Regenerated each session — auto-bounded |
| workflow-state.json | ~500B | Auto-bounded by format |
| .tool-counter.json | ~5KB | `maxHistory: 10` bounds it |

**Rule:** VENOM never auto-prunes MEMORY.md. Owner owns what gets remembered. Pruning is a human decision.

---

## `.gitignore` Guidance

**Template should include:**
```gitignore
# VENOM memory — project-specific, owner-local
.venom/memory/MEMORY.md
.venom/learnings/corrections.yaml
.venom/learnings/instincts.yaml
.venom/learnings/preferences.yaml
.venom/work/ACTIVE.md
.venom/state/
```

**What to track in git:** `.venom/CONTEXT.md` (project brain, useful for team), `.venom/work/[feature]/` (workflow artifacts, useful for review).

**What NOT to track:** memory, learnings, state (personal + session-specific).

**Note:** This is guidance, not enforcement. Owner decides their own gitignore policy.
