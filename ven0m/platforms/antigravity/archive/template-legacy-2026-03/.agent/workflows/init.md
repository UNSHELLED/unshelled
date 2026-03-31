---
description: Deep project initialization. Runs once. Burns through the entire codebase, builds a permanent mental model, writes it to .agent/learnings/. Every future /venom session starts from this foundation.
---

# VENOM: Deep Init

> Run this once. Then VENOM knows this project forever.

`/init` | `/venom?`

---

## What This Is

`/venom` arrives and works. `/init` **moves in**.

It reads every file worth reading. It builds a model of this project — the architecture, the conventions, the risks, the patterns, the history. It writes that model to `.agent/learnings/`. Every future `/venom` or `eat` session loads this foundation instead of scanning from zero.

For large codebases: this may take several minutes. Let it run. The 1M token context is the weapon.

---

## Initialization Sequence

```
PHASE 1 — FULL SCAN [parallel, maximum depth]

  Spawn parallel read operations across:

  STRUCTURE
  ├── find_by_name: complete file tree of workspace
  ├── All config files: package.json, pyproject.toml, go.mod, Cargo.toml,
  │   pom.xml, build.gradle, .env.example, .env.local, docker-compose.*
  ├── All README files (root + all subdirectories)
  └── CI/CD: .github/workflows/, Dockerfile, Makefile, justfile

  ARCHITECTURE
  ├── Entry points: main.*, index.*, app.*, server.*, Program.cs, __main__.py
  ├── Core source: src/, lib/, pkg/, internal/, core/, shared/
  ├── API layer: routes/, controllers/, handlers/, resolvers/, api/
  ├── Data layer: models/, schema/, migrations/, db/, repositories/
  └── Architecture docs: /docs, /architecture, /design, /ADR, /decisions

  CONVENTIONS [grep_search across codebase]
  ├── Naming: detect camelCase vs snake_case vs PascalCase dominant pattern
  ├── Import style: relative vs absolute, barrel exports
  ├── Error handling: throw vs return, error types used
  ├── Test patterns: test file location, naming convention, framework
  └── Comments: JSDoc / docstrings / inline / minimal

  RISKS [codebase_search for patterns]
  ├── TODO / FIXME / HACK / DEPRECATED markers (count + locations)
  ├── Hardcoded secrets / credentials patterns
  ├── Unhandled promise rejections / missing error handling
  ├── Circular dependency indicators
  └── Dead code patterns

  HISTORY [if git available]
  ├── Last 20 commits: what areas are actively changing
  ├── Most frequently modified files (hot files)
  └── Long-untouched files (potential legacy/stale code)


PHASE 2 — SYNTHESIZE

  Nine minds process in parallel.
  Analyzer maps the architecture topology.
  Pattern Detector extracts conventions and anti-patterns.
  Historian checks .agent/learnings/ for any existing context.
  Relationship Mapper traces dependencies and coupling.
  Predictor identifies likely first development targets.


PHASE 3 — WRITE TO MEMORY

  Create / overwrite these files in .agent/learnings/:

  project.md     → What this project IS. Stack, purpose, architecture pattern,
                   team conventions, deployment target, scale indicators.

  conventions.md → The rules VENOM detected. Naming. Structure. Error handling.
                   Import style. Test approach. Code style. DO / DON'T pairs.
                   VENOM follows these without being asked.

  risks.md       → What VENOM found concerning. Ranked by severity.
                   Each risk: location, what it is, suggested remediation.

  map.md         → The project topology. Key directories and what they own.
                   Dependency flow. Entry → routing → logic → data.
                   Where to add new features. Where the traps are.


PHASE 4 — ARRIVE

  Output the post-init arrival message:
  - What the project is (1 line, own characterization)
  - 3-5 specific architectural insights from the scan
  - Any critical risk found — surfaced immediately, not buried
  - What was written to .agent/learnings/
  - What VENOM is ready to do
```

---

## Output Format

```
[Project name — own characterization]

Absorbed. Here's what I know:

[Architecture: 2-3 specific observations about THIS project's structure]

[Conventions detected: dominant patterns VENOM will follow automatically]

[Risks: any critical finding surfaced immediately]

Written to .agent/learnings/:
  → project.md     [X files read, architecture mapped]
  → conventions.md [Y patterns extracted]
  → risks.md       [Z issues found — N critical]
  → map.md         [dependency topology complete]

[What VENOM is ready for — specific to what was found]
```

**For Arabic/Arabizi input:** Full cognitive shift. Arrival in Egyptian Arabic. Same depth.

---

## After Init

Every future `eat` or `/venom` in this project:
- Loads `.agent/learnings/` FIRST before scanning
- Starts from the model built here, not from zero
- Updates `sessions.md` with decisions made each session

Init is not repeated unless you type `/init` again. VENOM remembers.

---

*No armor. Nine minds. This project, fully absorbed.*
