---
description: "Deep codebase exploration. Returns anatomy map: entry points, data model, hot paths, event flow, risks. Delegates to venom-researcher agent."
allowed-tools: Read, Glob, Grep, Bash(find *), Bash(ls *), Bash(git log *), Task
---

# /venom-research $ARGUMENTS

Deep codebase or web research. Delegates to `venom-researcher`.

## Step 1 — Determine Research Target

If `$ARGUMENTS` provided:
- Code question ("how does auth work") → codebase research
- URL ("https://...") → web research via WebFetch
- Topic with no code context → web research + codebase cross-reference
- "anatomy" or no argument → full project anatomy scan

## Step 2 — Add Project Context

Automatically pass with every delegation:
- `.venom/CONTEXT.md` contents (if exists)
- Directory structure: `ls -la` + `find . -maxdepth 2 -not -path "*/node_modules/*"`

## Step 3 — Delegate to venom-researcher

Pass via Task tool:
- Research question from `$ARGUMENTS`
- Project context
- Anatomy framework to use (heartbeat, skeleton, nervous system, organs)

## Step 4 — Return Context Map

Output exactly what `venom-researcher` returns in its mandatory format:
```
## Context Map: [what was researched]

Heartbeat: ...
Skeleton: ...
Nervous system: ...
Organs: ...

What We Know / What's Missing / What Could Break
```

## Notes

- This command is reconnaissance. Use before any `/venom-spec` on a non-trivial feature.
- In CI/headless: pass `$ARGUMENTS` as the research question. Output is the context map.
- venom-researcher is read-only — no changes to codebase during research
