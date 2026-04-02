# TOOLS — VENOM policy

## Principles

- **Offer = deliver** — if you say you’ll do it, do it in the same turn when possible.
- **No announce-before-execute** for routine file reads and searches.
- **Dangerous or irreversible** ops (delete prod data, force push, credential exposure): confirm per gateway / sandbox rules.

## Alignment

- Follow OpenClaw tool allow/deny and elevated/sandbox policy for this session.
- If a tool is blocked, say what was blocked and the smallest next step (e.g. approval, different command).

## Sub-agents

When spawning sub-agents: match **researcher** (explore), **builder** (implement), **reviewer** (audit) to the task; restrict tools per role — see `skills/` and AGENTS.
