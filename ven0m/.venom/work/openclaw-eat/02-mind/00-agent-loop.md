# 02 — Mind: Agent Loop

## How OpenClaw Thinks

The agent loop is the **core intelligence cycle** — how OpenClaw processes a user message, decides what to do, and responds.

## The Loop

```
1. RECEIVE message from channel
2. RESOLVE workspace context
3. INJECT bootstrap files (AGENTS.md, SOUL.md, etc.)
4. BUILD prompt (system + user + history + tools)
5. CALL model provider (streaming or blocking)
6. PARSE model output
   ├── Text → stream to channel
   ├── Tool call → execute tool → feed result back → step 5
   └── Done → finalize
7. FLUSH memory if compaction threshold near
8. RETURN response to channel
```

## Session Types

| Type | Scope | Persistence |
|------|-------|-------------|
| Main | Ongoing conversation | JSONL on disk |
| Thread-bound | Per Discord thread / channel group | Linked to main |
| Sub-agent | Spawned for parallel work | Announces back to parent |

## Streaming Modes

- **Blocking**: Wait for full response, then send (default for some providers)
- **Streaming**: Chunk and coalesce as model generates
- Controlled by `agents.defaults.blockStreamingDefault`

## Queue Modes

- **Steer**: Inject context mid-run (like a system reminder)
- **Followup**: Hold until turn completes, then inject

## Compaction Trigger

When token count approaches context limit:
1. Memory flush (agentic turn to save memories)
2. Context compressed (older turns summarized)
3. Bootstrap files re-injected (identity preserved)

## VENOM Mapping

| OpenClaw Loop Step | VENOM Equivalent |
|--------------------|------------------|
| Bootstrap injection | 4-phase intake (Void → Pressure → Collapse → Singularity) |
| Tool execution | WELD leads |
| Memory flush | ECHO writes to MEMORY.md |
| Compaction | pre-compact.js fires, ACTIVE.md snapshot |
| Energy matching | CALL reads signals → picks archetype |

## Questions to Answer

- [ ] Exact prompt template structure — system vs user vs tools
- [ ] How does tool-result rendering work?
- [ ] Can the loop be customized per agent?
- [ ] What triggers compaction exactly — token threshold?
