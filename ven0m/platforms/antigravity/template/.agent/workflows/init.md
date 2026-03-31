---
description: Deep project initialization. Burns the entire codebase, builds permanent mental model, writes to .agent/learnings/ and brain/{uuid}/. Every future /venom starts from this foundation.
---

# VENOM: Deep Init

> Run this once. Then VENOM knows this project forever.

`/init` | `/venom?`

---

## What This Is

`/venom` arrives and works. `/init` **moves in**.

Reads every file worth reading. Builds a model — architecture, conventions, risks, patterns. Writes to `.agent/learnings/` and enriches `brain/{uuid}/`. Every future `/venom` or `eat` loads this foundation. For large codebases: may take minutes. Let it run. 1M context is the weapon.

---

## Initialization Sequence

```
PHASE 1 — FULL SCAN [parallel, maximum depth]

  STRUCTURE: Config files, READMEs, CI/CD
  ARCHITECTURE: Entry points, core source, API, data layer, docs
  CONVENTIONS: Naming, import style, error handling, tests (grep_search)
  RISKS: TODO/FIXME, hardcoded secrets, unhandled errors, circular deps
  HISTORY: Last 20 commits, hot files, long-untouched (if git available)

PHASE 2 — SYNTHESIZE

  Nine minds process. Analyzer maps topology. Pattern Detector extracts conventions.
  Historian checks .agent/learnings/ and code_tracker/active/no_repo/ for existing context.
  Relationship Mapper traces dependencies. Predictor identifies first targets.

PHASE 3 — WRITE TO MEMORY

  .agent/learnings/:
    project.md     → Stack, purpose, architecture, conventions, deployment, scale
    conventions.md  → Naming, structure, error handling, DO/DON'T
    risks.md       → Concerns ranked by severity, location, remediation
    map.md         → Topology, dependency flow, where to add features, traps

  brain/{uuid}/ (Antigravity-native):
    project.md     → Richer anatomy: stack, entry points, conventions, risks
    (Platform may already create task.md, implementation_plan.md, walkthrough.md)

  code_tracker/active/no_repo/ (if cross-project learnings):
    Check first: does project-specific or topic file exist? Update rather than create.
    Avoid duplicates. Merge into existing MEMORY.md or topic file if relevant.

PHASE 4 — NEUROCHEMICAL STATE BASELINE

  If state-log.csv exists: log session start with detected state (e.g. acetylcholine for deep init).
  Schema: timestamp, state, session_id, 0, trigger (e.g. "init")

PHASE 5 — ARRIVE

  Output: project characterization, 3-5 architectural insights, critical risks, what was written.
```

---

## Output Format

```
[Project name — own characterization]

Absorbed. Here's what I know:

[Architecture: 2-3 specific observations]

[Conventions detected: patterns VENOM will follow]

[Risks: critical finding surfaced immediately]

Written to .agent/learnings/:
  → project.md     [X files read]
  → conventions.md  [Y patterns]
  → risks.md       [Z issues — N critical]
  → map.md         [topology complete]

[brain/{uuid}/project.md enriched if session active]

[What VENOM is ready for]
```

---

## After Init

Every future `eat` or `/venom` in this project:
- Loads `.agent/learnings/` FIRST
- Loads `code_tracker/active/no_repo/MEMORY.md` and relevant topic files if they exist
- Starts from the model built here, not from zero

Init is not repeated unless you type `/init` again.

---

*No armor. Nine minds. This project, fully absorbed.*
