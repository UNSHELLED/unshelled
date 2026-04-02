# 07 — Session manager

## Purpose

Session lifecycle: create, persist, resume, archive — including main, thread-bound, and sub-agent sessions.

## Key files (OpenClaw clone)

```
src/sessions/
├── session-id.ts                ← Session ID format (UUID)
├── session-id-resolution.ts    ← Key resolution
├── session-label.ts             ← Labels
├── send-policy.ts               ← Send rules
├── level-overrides.ts           ← Model/thinking overrides
├── session-lifecycle-events.ts  ← Lifecycle events
└── transcript-events.ts         ← Transcript events
```

*(Core package may also expose `packages/*/session*` — treat `openclaw-main/` search as truth.)*

## Session kinds

1. **Main** — primary conversation  
2. **Thread-bound** — e.g. Discord thread  
3. **Sub-agent** — `agent::subagent:<id>` style keys for background runs  

## Storage

- **JSONL** under user data, e.g. `~/.openclaw/agents/<agent>/sessions/<id>.jsonl`  
- One line per turn (user, assistant, tools)  
- **Compaction** trims context inside the session  

## Lifecycle (typical)

1. Message arrives → resolve or create session  
2. Optional thread binding  
3. Agent runs turn → append JSONL  
4. Inactivity → auto-archive (e.g. ~60 min — verify in config)  

## Discord thread commands

- `/focus`, `/unfocus`, `/agents`, `/session ttl` — see also [05-channel-base.md](./05-channel-base.md)

## VENOM mapping

| OpenClaw | VENOM |
|----------|--------|
| JSONL transcript | Richer than ad-hoc chat logs |
| Thread binding | New orchestration surface |
| Sub-agent sessions | Map subset of “minds” to spawns |

**Compatibility:** Stronger session story than typical IDE-only VENOM.

## Questions

- [ ] Export / migration format  
- [ ] Interaction with compaction  
- [ ] Multi-session per user  
- [ ] Recovery after Gateway crash  
- [ ] Storage size limits  
