# Commands Spec — Claude Code VENOM

> Design before build. Every command fully specced before any file is written.
> Source of truth: Phase 05 Axiom 1 in `INDEX.md`.

**Prerequisite:** `01-what-we-have/CURRENT-CLAUDE-CODE.md` and `platforms/opencode/template/.opencode/commands/` must be read before filling the "port from" column.

---

## Architecture Decision (Resolved)

**`/venom` is the awakening hub.** Not a lifecycle step. Everything else is a verb.

The confusion in v2.4: `/venom` was trying to be both an awakening and a routing mechanism inside a single description. The new design separates them cleanly:

- `/venom` → presence. Wakes up. Shows what's here. Routes if asked.
- Everything else → does one thing, does it completely.

**The lifecycle:**
```
init → eat → spec → build → review → check
```

A developer who installs VENOM and knows nothing runs these in order. A developer who knows VENOM skips to what they need. An agent runs individual commands non-interactively.

---

## The Nine Commands

### `/venom` — Awakening Hub

**What it is:** Presence. VENOM comes online. Routes to everything else.

**Trigger:** User types `venom`, `/venom`, `go venom`, or starts any session.

**Behavior:**
1. Load `.venom/CONTEXT.md` if it exists — show project state in 3 lines
2. Load `.venom/work/ACTIVE.md` if it exists — show what's in flight
3. Show available commands in one table (not a wall of text)
4. Ask one sharpening question: "What are we working on?"

**Does NOT do:** Init, eat, spec — those are separate commands.

**Output format:**
```
VENOM online. [Project name from CONTEXT.md or "New project"].
[One-line state from ACTIVE.md, or "No active work."]

Commands: init · eat · spec · build · review · check · research · remember

What are we working on?
```

**Audiences:** all three. Agents get the compact output and proceed immediately.

**Port from:** Current `venom.md` + OpenCode `AGENTS.md` commands section (strip what doesn't apply to Claude Code)

**Frontmatter:**
```yaml
description: "VENOM online. All nine minds. Shows project state and available commands."
allowed-tools: Read
```

---

### `/venom-init` — Brain Scaffold

**What it is:** One-time setup of `.venom/` brain files for a new project.

**Trigger:** User runs on first install or fresh project.

**Behavior:**
1. Check if `.venom/` exists
2. If exists: show what's there, ask before overwriting anything
3. Create directory structure:
   ```
   .venom/
   ├── CONTEXT.md          (stub — fill with /venom-eat)
   ├── memory/MEMORY.md    (stub)
   ├── learnings/
   │   ├── corrections.yaml
   │   ├── instincts.yaml
   │   └── preferences.yaml
   └── work/
       └── ACTIVE.md       (stub)
   ```
4. Populate stubs with correct structure (not blank)
5. Report: "Brain initialized. Run /venom-eat to fill CONTEXT.md with this project."

**Does NOT do:** Fill CONTEXT.md — that's `/venom-eat`'s job.

**Audiences:** any dev + Kariem (agents don't init manually)

**Port from:** OpenCode `venom-init.md` (adapt filesystem paths to Claude Code)

**Frontmatter:**
```yaml
description: "Scaffold .venom/ brain for this project. Run once. Creates CONTEXT.md, MEMORY.md, learnings/, ACTIVE.md stubs."
allowed-tools: Read, Write, Bash(mkdir:*), Bash(ls:*)
```

---

### `/venom-eat` — Context Absorption

**What it is:** Full 6-phase project absorption. Each phase writes an intermediate artifact. Synthesizes `.venom/CONTEXT.md` from what was actually discovered — not from assumptions.

**Trigger:** User runs after init, or any time project changes significantly. Agents can run headlessly.

**Critical design:** Each phase writes a file. If context resets mid-absorption, resume from the first missing file. The workflow is interruptible and restartable.

**Phase 0 — Orient (check for resume):**
```
Check .venom/work/eat-*.md — which phases already completed?
If resuming: read existing eat files, skip completed phases
If fresh: start Phase 1
Report: "Starting fresh absorption" or "Resuming from Phase [N]"
```

**Phase 1 — Shape (what kind of project):**
```
Bash: ls -la
Bash: find . -maxdepth 2 -not -path "*/node_modules/*" -not -path "*/.git/*" -type f | head -40
Read: package.json OR go.mod OR Cargo.toml OR pyproject.toml OR requirements.txt

Write .venom/work/eat-shape.md:
  Language + version | Framework + version | Key dependencies (top 5 + purpose)
  Scripts: build, test, start, lint | Entry points | Scale estimate
```

**Phase 2 — Skeleton (data model):**
```
Bash: find . -name "*.prisma" -o -name "schema.sql" -o -name "models.py" -o -name "types.ts" | grep -v node_modules | head -10
Read: schema files found

Write .venom/work/eat-skeleton.md:
  Core entities | Key relationships (one paragraph) | Schema location | Business rules in schema
```

**Phase 3 — Heartbeat (hot path):**
```
Grep: "export default|module\.exports|def main|func main|fn main|app\.listen|createServer" in entry point files
Read: the entry point file(s)

Write .venom/work/eat-heartbeat.md:
  Entry point: [file:function] | Hot path: A → B → C | Performance-critical code | Background jobs
```

**Phase 4 — Nervous System (communication):**
```
Read: routes, event emitters, API clients, webhooks, queue consumers

Write .venom/work/eat-nerves.md:
  API surface: [routes — one line each] | Internal events | External integrations | Async patterns
```

**Phase 5 — Risks:**
```
Bash: grep -rn "TODO\|FIXME\|HACK\|XXX" --include="*.ts" --include="*.js" --include="*.py" | grep -v node_modules | head -20

Write .venom/work/eat-risks.md:
  Risk 1: [specific — file, consequence] | Risk 2 | Risk 3 | TODOs in critical paths
```

**Phase 6 — Synthesize CONTEXT.md:**
```
Read: all five eat-*.md files
Write .venom/CONTEXT.md (2KB max — every word earns its place):

# [Project Name] — Context

**Stack:** [from eat-shape — exact versions]
**Structure:** [one paragraph from eat files — how it's organized]
**Hot paths:** [from eat-heartbeat — specific files and functions]
**Conventions:** [naming, error handling, test approach]
**Risks:** [top 3 from eat-risks — specific, not generic]
**Last eaten:** [today's date]
```

**Final report:**
```
Project absorbed.

Shape:     [language + framework]
Skeleton:  [N core entities]
Heartbeat: [entry point]
Risks:     [top risk one-liner]

CONTEXT.md written. VENOM now knows this project.
Intermediate artifacts in .venom/work/eat-*.md (re-run to refresh).
```

**Audiences:** all three. Junior dev learns the anatomy of their own project. Agents run this headlessly on first invocation.

**Port from:** OpenCode `venom-eat.md` — port the 6-phase structure exactly. Replace `!command` syntax with `Bash(cmd:*)` tool calls. Replace `venom_workflow_update()` with file writes via Write tool.

**Frontmatter:**
```yaml
description: "Absorb this project fully — structure, hot paths, data model, risks. Each phase writes to disk. Synthesizes .venom/CONTEXT.md. Re-run any time."
allowed-tools: Read, Write, Glob, Grep, Bash(ls:*), Bash(find:*), Bash(grep:*), Bash(wc:*)
```

---

### `/venom-spec` — Spec-Driven Lifecycle

**What it is:** Full feature development lifecycle: constitution → spec → clarify → plan → tasks.

**Trigger:** `/venom-spec [feature description]`

**Behavior:** Phase-detection driven. Checks filesystem for what already exists, resumes from the right phase.

**Phase detection (check in order):**
1. No `constitution.md` → Phase 0 (even if feature described)
2. Feature named but no feature directory → Phase 1 (Specify)
3. `spec.md` exists, no `clarifications.md` → Phase 2 (Clarify)
4. `clarifications.md` exists, no `plan.md` → Phase 3 (Plan via @venom-architect)
5. `plan.md` exists, no `tasks.md` → Phase 4 (Consistency check) + Phase 5 (Tasks)
6. `tasks.md` with `[ ]` → redirect to `/venom-build`
7. All `[x]` → redirect to `/venom-review` + `/venom-check`

**State file:** Write `.venom/state/workflow-state.json` at every phase transition.

**Artifact structure:**
```
.venom/work/
├── constitution.md           (once per project)
└── features/[slug]/
    ├── spec.md
    ├── clarifications.md
    ├── plan.md
    └── tasks.md
```

**Task format (mandatory — builder cannot execute without these fields):**
```markdown
- [ ] T01: [exact task] — `[file:function]` — verify: [observable test]
```

**Audiences:** any dev + Kariem. Agents can run this headlessly if feature description passed as argument.

**Port from:** OpenCode `venom-spec.md` — this is the closest existing implementation. Port the phase logic fully. Replace `venom_workflow_update()` plugin calls with direct file writes.

**Frontmatter:**
```yaml
description: "Spec-driven feature development. Detects phase from filesystem. Runs constitution → spec → clarify → plan → tasks automatically."
allowed-tools: Read, Write, Glob, Grep, Bash(ls:*), Bash(mkdir:*), Task
```

---

### `/venom-build` — Wave Execution

**What it is:** Execute tasks.md wave by wave. Mark `[x]` as tasks complete. Verify each wave before the next.

**Trigger:** `/venom-build [feature-slug]` or auto-detected from workflow state.

**Behavior:**
1. Find active feature from workflow state or argument
2. Read tasks.md + plan.md + spec.md
3. Report progress: `[done] / [total] tasks — starting Wave [N]`
4. Execute wave: parallel tasks run in parallel (via Task tool), sequential waves run in order
5. Mark `[x]` immediately on task success
6. Run verification after each wave (tests, types, lint)
7. Stop on failure — do not proceed to next wave
8. Report after each wave

**Verification gate (after each wave):**
```bash
npm test || pytest || go test ./... || cargo test
```
If no test runner: flag it, don't fail silently.

**Audiences:** any dev + Kariem. Agents can run this headlessly — output is structured.

**Port from:** OpenCode `venom-build.md` — port the wave execution logic fully. Replace `venom_workflow_update()` with file writes.

**Frontmatter:**
```yaml
description: "Execute tasks.md wave by wave. Marks tasks complete. Verifies each wave before proceeding. Stops on failure."
allowed-tools: Read, Write, Edit, Glob, Grep, Bash, Task
```

---

### `/venom-review` — 8-Perspective Code Review

**What it is:** Deep code review across 8 perspectives. Most critical first. Fix included with every finding.

**Trigger:** `/venom-review [scope]` — scope can be files, PR diff, or "recent changes"

**Behavior:**
1. If scope: review that scope
2. If no scope: review most recent git changes
3. Delegate to `venom-reviewer` agent via Task tool
4. Return findings in priority order

**Audiences:** all three. In CI/headless, output format is parseable.

**Port from:** OpenCode `venom-review.md` (already clean — minor adaptation)

**Frontmatter:**
```yaml
description: "8-perspective code review: security, correctness, performance, maintainability, style, deps, docs, tests. Most critical first."
allowed-tools: Read, Glob, Grep, Bash(git diff:*), Bash(git log:*), Task
```

---

### `/venom-check` — Meta Quality Gate

**What it is:** Session-level quality audit. Tests, types, lint, deps, VENOM state, active workflow.

**Trigger:** `/venom-check` — before shipping, after a long session

**Behavior (checks in order):**
1. Recent commits — atomic? Commit messages explain what + why?
2. Test health — passing? Coverage direction?
3. Type/lint health — clean or degraded?
4. Dependency health — vulnerabilities? Outdated?
5. VENOM state — CONTEXT.md current? ACTIVE.md stale? Workflow in progress?
6. Archive readiness — features with all `[x]` tasks that haven't been archived?
7. Memory size — MEMORY.md over 5KB? Flag for pruning.

**Output format:**
```
## Quality Gate — [date]

Tests: [passing/failing]
Types: [clean/N errors]
Lint: [clean/N warnings]
Deps: [clean/N vulnerabilities]
Commits: [atomic/mixed]
VENOM state: [current/stale/missing]
Workflow: [phase N — feature X / none]
Archive needed: [features / none]
Memory: [OK / over limit — prune needed]

Verdict: [healthy / degraded / needs attention]
Action items: [numbered list]
```

**Audiences:** all three. Agents run this and parse the verdict line.

**Port from:** OpenCode `venom-check.md` + add memory size check

**Frontmatter:**
```yaml
description: "Meta quality gate. Tests, types, lint, deps, VENOM state, workflow, memory. Verdict: healthy / degraded / needs attention."
allowed-tools: Read, Glob, Grep, Bash, Task
```

---

### `/venom-research` — Deep Exploration

**What it is:** Delegates deep codebase or web research to `venom-researcher`.

**Trigger:** `/venom-research [area or question]`

**Behavior:**
1. Pass `$ARGUMENTS` to `venom-researcher` via Task tool
2. Include project structure context automatically
3. Return researcher's anatomy report

**Audiences:** all three. Agents use this for reconnaissance before autonomous tasks.

**Port from:** OpenCode `venom-research.md` (already clean)

**Frontmatter:**
```yaml
description: "Deep codebase exploration. Returns anatomy map, hot paths, risks, dependencies. Delegates to venom-researcher."
allowed-tools: Read, Glob, Grep, Bash(find:*), Bash(ls:*), Bash(git:*), Task
```

---

### `/remember` — Memory Persistence

**What it is:** Save a decision, pattern, preference, or correction to the right memory file.

**Trigger:** User runs explicitly, OR VENOM proactively offers: "Want me to remember that?"

**Behavior:**
1. Classify the content: decision | pattern | preference | correction
2. Route to correct file:
   - `correction` → `.venom/learnings/corrections.yaml`
   - `preference` → `.venom/learnings/preferences.yaml`
   - `pattern` (with confidence) → `.venom/learnings/instincts.yaml`
   - `decision` → `.venom/memory/MEMORY.md`
3. Append with timestamp
4. Confirm: "Saved to [file]."

**Proactive trigger:** When a significant decision is made in conversation, VENOM offers: "Want me to remember that?" — this is disposition, not a rule. Fires when the decision is worth keeping.

**Memory limits enforced:**
- MEMORY.md: warn if over 5KB
- corrections.yaml: warn if over 1KB
- instincts.yaml: warn if over 2KB

**Audiences:** Kariem + any dev. Agents use this to self-record decisions during autonomous runs.

**Port from:** Current `remember.md` (upgrade: add routing logic, replace `.unshelled/` reference with `.venom/`)

**Frontmatter:**
```yaml
description: "Save to .venom/ memory. Routes: corrections → corrections.yaml, preferences → preferences.yaml, patterns → instincts.yaml, decisions → MEMORY.md."
allowed-tools: Read, Write
```

---

## What Does NOT Get Built

**No additional commands beyond these 9.** If a new command is proposed during the build phase, it must either:
- Replace one of the existing 9 (with a documented reason), or
- Be implemented as a feature inside an existing command

The right number is 9. Each one serves at least 2 of the 3 audiences. The lifecycle is `init → eat → spec → build → review → check`. `/venom` is the hub. `/remember` is the memory bridge. `/venom-research` is the reconnaissance arm.

---

## Status

- [x] `venom.md` — hub (compact) + `venom-deep` skill pointer (2026-03-30)
- [x] `venom-init.md` — scaffold `.venom/`
- [x] `venom-eat.md` — six-phase eat + `workflow-state.json`
- [x] `venom-spec.md` — phase detection + file writes (no plugin)
- [x] `venom-build.md` — waves + Task → builder
- [x] `venom-review.md` — Task → reviewer
- [x] `venom-check.md` — meta gate + MEMORY size
- [x] `venom-research.md` — Task → researcher
- [x] `remember.md` — `.venom/` routing
