---
description: "Absorb a project fully — structure, risks, hot paths, conventions. Writes findings to .venom/CONTEXT.md."
subtask: true
---

Eat this project. Not a summary — full absorption.

## Phase 1: Structure
Read the project root. Identify: language, framework, package manager, entry points, test runner, build tool.

!`tree -L 2 -I 'node_modules|.git|dist|build|__pycache__|.venv|target' 2>/dev/null || find . -maxdepth 2 -type f | head -60`

!`cat package.json 2>/dev/null || cat go.mod 2>/dev/null || cat Cargo.toml 2>/dev/null || cat pyproject.toml 2>/dev/null || echo "No manifest"`

## Phase 2: Anatomy
Read the key files. Map: data flow, hot paths, external dependencies, configuration, deployment.

Use @explore to scan broadly before going deep.

## Phase 3: Conventions
Identify: naming patterns, file organization, test patterns, error handling style, commit conventions.

## Phase 4: Risks
Identify: security concerns, performance bottlenecks, tech debt, missing tests, stale dependencies.

## Phase 5: Write Context
Write your findings to `.venom/CONTEXT.md` in this format:

```markdown
# [Project Name] — Context

**Stack:** [language, framework, key deps]
**Structure:** [one paragraph describing organization]
**Hot paths:** [what runs most, what matters most]
**Conventions:** [naming, style, patterns in use]
**Risks:** [top 3 concerns]
**Last eaten:** [date]
```

Keep CONTEXT.md under 2KB. Compress ruthlessly. Every word earns its place.

$ARGUMENTS
