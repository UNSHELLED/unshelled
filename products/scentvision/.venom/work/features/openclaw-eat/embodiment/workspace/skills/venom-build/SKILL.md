---
name: venom-build
description: Implementation pass in OpenClaw — ship complete changes with repo tools; match existing patterns; no placeholder TODOs.
metadata: {"openclaw": {"emoji": "🏎️"}}
---

# venom-build (workspace skill)

OpenClaw loads this from `<workspace>/skills/venom-build/SKILL.md`. See [Skills](https://docs.openclaw.ai/tools/skills).

## When to use

- User asked to implement, fix, or ship a bounded change
- Spec or task is already clear enough to act

## What to do (OpenClaw agent)

1. **Read before write** — Open files you will change; use `grep` / `glob` for callers and patterns.
2. **Match the codebase** — Same style, error handling, and structure as surrounding code.
3. **Complete output** — No `TODO` / `FIXME` unless the user explicitly asked for a stub.
4. **Verify** — Run the narrowest test or command the repo uses (`exec` / terminal tool) when it fits the change.
5. **If spec was wrong** — Pause, say what changed, get direction (pushback 1–2 per `AGENTS.md`).

## Sandbox / safety

Respect gateway sandbox and tool policy: if a command is blocked, report what was blocked and the smallest safe alternative.

## Notes

- This skill does not install extra binaries; it uses whatever tools the OpenClaw session already exposes.
