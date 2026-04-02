# 06 — Sub-Agents: The Crew System

## Architecture

OpenClaw supports **background sub-agent runs** spawned from existing agent runs.

```
Main Agent Session
├── Sub-Agent 1 (background, announces back)
│   └── Nested Sub-Agent (depth 2, if enabled)
│       └── Nested Sub-Agent (depth 3, max 5)
├── Sub-Agent 2 (background)
└── Sub-Agent 3 (background)
```

## Key Properties

| Property | Value | Notes |
|----------|-------|-------|
| Default max depth | 1 | No session tools for depth 1 agents |
| Configurable max depth | 2-5 | `agents.defaults.subagents.maxDepth` |
| Concurrency cap (global) | 8 | `agents.defaults.subagents.maxConcurrent` |
| Per-agent limit | 5 | `maxChildrenPerAgent` |
| Auto-archive | 60 minutes | Inactive agents cleaned up |
| Session ID format | `agent::subagent:<id>` | Stable IDs |

## Announce Chain

Results flow UP:
```
Depth 3 → announces to Depth 2
Depth 2 → announces to Depth 1
Depth 1 → announces to Main
Main → sends to channel
```

## Thread Binding (Discord)

- `/focus` — bind current thread to a sub-agent/session
- `/unfocus` — remove binding
- `/agents` — list active runs and binding state
- `/session ttl` — inspect/update auto-unfocus TTL

## Depth-Aware Tool Policy

Different depths get different tool access:
- **Depth 0 (main)**: Full tools per policy
- **Depth 1 (orchestrator)**: Session tools added if configured
- **Depth 2+**: Restricted based on depth policy

## Concurrency Model

- Dedicated `subagent` lane in event processing
- Global cap prevents resource exhaustion
- Per-agent limit prevents one agent from spawning too many children

## VENOM → OpenClaw Crew Mapping

| VENOM Mind | OpenClaw Sub-Agent | Depth | Tools |
|------------|-------------------|-------|-------|
| HELM (Architect) | Main agent, design-only | 0 | Read-only + web |
| HUNT (Researcher) | Depth 1 sub-agent | 1 | Read + Glob + Grep + Web |
| EDGE (Reviewer) | Depth 1 sub-agent | 1 | Read + git only |
| WELD (Builder) | Depth 1 sub-agent | 1 | All tools |
| MEND (Debugger) | Depth 1 sub-agent | 1 | Reproduce → verify → fix |
| OMEN (Predictor) | Depth 0 (inline) | 0 | No tools, just analysis |
| ECHO (Memory) | Depth 0 (inline) | 0 | Memory write tools |
| CALL (Communicator) | Depth 0 (inline) | 0 | No tools, disposition |
| MOLT (Learner) | Depth 0 (inline) | 0 | Instinct write tools |
| DART (Mapper) | Depth 1 sub-agent | 1 | Quick read-only scan |

**Key insight**: VENOM's 10 minds don't all need to be separate sub-agents. Most are **dispositions woven into the main agent**. Only HELM, HUNT, EDGE, WELD, MEND, DART benefit from being separate sub-agents.

## Questions to Answer

- [ ] How does sub-agent session persistence work?
- [ ] Can sub-agents spawn their own sub-agents at depth > 1?
- [ ] How does error handling work — if sub-agent fails, what happens?
- [ ] Can sub-agents share memory/context with parent?
- [ ] How to implement VENOM's "woven" pattern — same session, different dispositions?
