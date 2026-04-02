# 04 — Workspace: The Agent's Home

## What It Is

Every OpenClaw agent lives in a **workspace directory** — `~/.openclaw/workspace` by default. This is All bootstrap files, memory, skills, and project context live here.

## Bootstrap Files (Injected Every Turn)

| File | Purpose | VENOM Equivalent |
|------|---------|------------------|
| `AGENTS.md` | Operating instructions + memory | `.venom/CONTEXT.md` + `MEMORY.md` |
| `SOUL.md` | Persona, boundaries, tone | `.claude/knowledge/soul.md` |
| `TOOLS.md` | User-maintained tool notes | `.claude/knowledge/protocols.md` |
| `BOOTSTRAP.md` | One-time first-run ritual (deleted after) | — |
| `IDENTITY.md` | Agent name/vibe/emoji | VENOM identity section |
| `USER.md` | User profile, preferences | `.claude/knowledge/profile.md` |

## Session Management

- Sessions stored as JSONL at: `~/.openclaw/agents/<id>/sessions<id>.jsonl`
- Per-session sandboxes available
- Compaction triggers memory flush

