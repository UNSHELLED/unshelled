---
description: "Absorb this project fully — structure, hot paths, data model, risks. Each phase writes to disk. Synthesizes .venom/CONTEXT.md. Re-run any time the project changes significantly."
allowed-tools: Read, Write, Glob, Grep, Bash(ls *), Bash(find *), Bash(grep *), Bash(wc *)
---

# /venom-eat

Six-phase project absorption. Each phase writes an artifact. Interruptible — resume from any phase.

## Phase 0 — Orient (check for resume)

```
Check .venom/work/eat-*.md — which phases already completed?
If resuming: read existing eat files, skip completed phases
Report: "Starting fresh absorption" or "Resuming from Phase [N]"
```

## Phase 1 — Shape

```
Bash: ls -la
Bash: find . -maxdepth 2 -not -path "*/node_modules/*" -not -path "*/.git/*" -type f | head -40
Read: package.json | go.mod | Cargo.toml | pyproject.toml | requirements.txt (whichever exists)

Write .venom/work/eat-shape.md:
  Language + version
  Framework + version
  Key dependencies (top 5 + purpose)
  Scripts: build, test, start, lint
  Entry points
  Scale estimate (monolith/microservice/library/CLI)
```

## Phase 2 — Skeleton

```
Bash: find . -name "*.prisma" -o -name "schema.sql" -o -name "models.py" -o -name "*.model.ts" | grep -v node_modules | head -10
Read: schema files found

Write .venom/work/eat-skeleton.md:
  Core entities (list)
  Key relationships (one paragraph)
  Schema location (file paths)
  Business rules embedded in schema
```

## Phase 3 — Heartbeat

```
Grep: "export default|module\.exports|def main|func main|fn main|app\.listen|createServer" in entry point files
Read: entry point file(s)

Write .venom/work/eat-heartbeat.md:
  Entry point: [file:function]
  Hot path: A → B → C (trace to output)
  Performance-critical code
  Background jobs / crons
```

## Phase 4 — Nervous System

```
Read: route files, event emitters, API clients, webhooks, queue consumers

Write .venom/work/eat-nerves.md:
  API surface: [routes — one line each]
  Internal events
  External integrations + how called
  Async patterns (queues, crons, streams)
```

## Phase 5 — Risks

```
Bash: grep -rn "TODO\|FIXME\|HACK\|XXX" --include="*.ts" --include="*.js" --include="*.py" --include="*.go" | grep -v node_modules | head -20

Write .venom/work/eat-risks.md:
  Risk 1: [specific — file, consequence]
  Risk 2
  Risk 3
  TODOs in critical paths (flag as P0)
```

## Phase 6 — Synthesize

```
Read: all five eat-*.md files
Write .venom/CONTEXT.md (2KB max — every word earns its place):
```

**CONTEXT.md format:**
```markdown
# [Project Name] — Context

**Stack:** [exact versions from eat-shape]
**Structure:** [one paragraph from eat files — how it's organized]
**Hot paths:** [from eat-heartbeat — specific files and functions]
**Conventions:** [naming, error handling, test approach — inferred from codebase]
**Risks:** [top 3 from eat-risks — specific, not generic]
**Last eaten:** [today's date]
```

## Final Report

```
Project absorbed.

Shape:     [language + framework]
Skeleton:  [N core entities]
Heartbeat: [entry point file]
Risks:     [top risk one-liner]

CONTEXT.md written. VENOM now knows this project.
Intermediate artifacts in .venom/work/eat-*.md (re-run /venom-eat to refresh).
```

## Notes

- Each phase writes a file → resumable if interrupted
- Re-run any time the project changes significantly (stack upgrade, major refactor, new integrations)
- 2KB target for CONTEXT.md — every word that doesn't earn its place gets cut
