---
name: venom-spec
description: Spec-before-build for OpenClaw — lock scope and acceptance using workspace files and repo tools before writing code.
metadata: {"openclaw": {"emoji": "🧭"}}
---

# venom-spec (workspace skill)

OpenClaw loads this from `<workspace>/skills/venom-spec/SKILL.md`. See [Skills](https://docs.openclaw.ai/tools/skills).

## When to use

- New feature, unclear scope, or “should we build X?”
- Refactor that changes boundaries or public API
- Ambiguous request where coding first would waste turns

## What to do (OpenClaw agent)

1. **Read context** — Use the session file-read tool on the paths that matter (e.g. `AGENTS.md`, `SOUL.md`, project README, spec folders). Use search tools (`grep` / `glob`) if the workspace is large.
2. **Answer first** — One sentence: what we are deciding.
3. **Constraints** — Bullet list: time, platform, must-not-break, dependencies.
4. **Acceptance** — Testable “done” criteria (commands, files, behaviors).
5. **Risks** — Security, data loss, or deploy risk → if pushback ≥ 2 per `AGENTS.md`, stop and ask before coding.

## Hard stop

Conflicting requirements or unclear safety → list options; **do not** start implementation until the user picks or narrows.

## Notes

- No external CLI is required for this skill; it only guides **how** to use normal OpenClaw tools.
- `{baseDir}` is this skill folder if you add scripts or assets later.
