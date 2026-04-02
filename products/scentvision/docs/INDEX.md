# docs/ — Operational Memory

> I hold what can't fit in AGENTS.md without bloating it.
> Pull me when a situation matches a known pattern.
> Not documentation — lived scenarios with proven responses.

**Parent relay:** [`../INDEX.md`](../INDEX.md) → [`../.venom/MAP.md`](../.venom/MAP.md)

---

## What Lives Here

| Area | Entry | Role |
|------|-------|------|
| **Simulations** | [`SIMULATIONS.md`](SIMULATIONS.md) | Edge-case patterns (SIM-01 … SIM-10). |
| **Design narration** | [`design/INDEX.md`](design/INDEX.md) | Why Voidweave / Synapse — links to `design-language/` for tokens. |

**SIMULATIONS.md** — edge-case patterns with proven moves (SIM-01 … SIM-10).

| Pull when | If missing |
|-----------|------------|
| Stuck loop (same tool 3+ times, same result) | Loop continues; wasted turns |
| New project (CONTEXT empty or stub) | Generic onboarding |
| Dangerous command (irreversible loss) | Bad runs without pause |
| Vague task ("make it better", "fix auth") | Scope creep, wrong target |
| Large change (5+ files in parallel) | Inconsistent edits |
| Review request ("check this", PR review) | Unstructured feedback |
| Architecture decision ("A or B") | Ad hoc structure |
| Memory moment (significant decision) | Decision not captured |
| Pushback (Level 2+) mishandled | Trust fracture |
| First session on project | Repeated discovery |

---

## How to Use

Not pre-loaded. Pull when the situation calls for it.

| Feels like… | Open |
|-------------|------|
| Stuck loop | SIM-01 |
| Review | SIM-06 |
| Big multi-file refactor | SIM-05 |
| First session | SIM-10 |

Simulations are pattern matches, not rules. When a situation rhymes — the right move is already known.

---

## Signal Flow

```
Edge-case recognized
      │
      ▼
docs/INDEX.md (this file) — confirm you're in the right organ
      │
      ▼
SIMULATIONS.md — jump to matching SIM-XX
      │
      ▼
Apply move → if project-specific, write to .venom/memory/MEMORY.md
```

---

## What Doesn't Belong Here

| Belongs elsewhere | Go to |
|-------------------|--------|
| Project-specific context | `.venom/CONTEXT.md` |
| Decisions made | `.venom/memory/MEMORY.md` |
| Lessons learned | `.venom/learnings/` |
| OpenCode platform facts | `.opencode/knowledge/` |

This directory is VENOM’s edge-case playbook — generic operational intelligence, not project state.

---

## Sibling indexes

[`design/INDEX.md`](design/INDEX.md) · [`../design-language/INDEX.md`](../design-language/INDEX.md) · [`../scentvision/INDEX.md`](../scentvision/INDEX.md) · [`../.venom/INDEX.md`](../.venom/INDEX.md) · [`../.opencode/INDEX.md`](../.opencode/INDEX.md)
