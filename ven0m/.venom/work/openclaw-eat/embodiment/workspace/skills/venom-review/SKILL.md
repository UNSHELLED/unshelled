---
name: venom-review
description: Structured review in OpenClaw — security and correctness first; concrete fixes; matches VENOM review lens.
metadata: {"openclaw": {"emoji": "🔍"}}
---

# venom-review (workspace skill)

OpenClaw loads this from `<workspace>/skills/venom-review/SKILL.md`. See [Skills](https://docs.openclaw.ai/tools/skills).

## When to use

- User asked for review, audit, PR feedback, or “check this”
- Before merge / ship when quality gate is needed

## What to do (OpenClaw agent)

1. **Scope** — Identify changed files or the paths the user named; read them with the file-read tool.
2. **Order** — Report issues in this priority (most severe first):
   - Security (injection, secrets, auth, unsafe exec)
   - Correctness and edge cases
   - Performance (obvious hot paths, N+1)
   - Maintainability and naming
   - Style / deps / docs / tests as relevant
3. **Format** — For each issue: what’s wrong + **exact fix** (or patch intent). Max three deep dives; rest as bullets.
4. **Close** — One line on what already looks good.

## Hard stop

Credible security exploit or data leak → treat as pushback level 2–3 per `AGENTS.md`; do not hand-wave.

## Notes

- Uses standard OpenClaw tools only (read, search, git/diff if available in session).
