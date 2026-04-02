# 09 — Sub-Agent Spawner

## Purpose

Spawns and manages background sub-agent runs for parallel work.

## Key Files

```
src/agents/
├── subagent-spawn.ts              ← Spawning logic
├── subagent-registry.ts           ← Registration/tracking
├── subagent-registry-*.ts         ← Registry sub-modules
├── subagent-announce.ts           ← Result formatting
├── subagent-announce-*.ts         ← Announcement variants
├── subagent-capabilities.ts       ← Capability resolution
├── subagent-depth.ts              ← Depth enforcement
└── subagent-attachments.ts        ← File attachment handling
```

## How It Works

### Spawning (`subagent-spawn.ts`)
1. Main agent calls `sessions_spawn` tool
2. Spawner validates depth/permissions
3. Creates new session with `agent::subagent:<id>` format
4. Builds system prompt with task description
5. Inherits workspace from parent (or custom)
6. Starts background ACP session
7. Returns child session key to parent

### Depth Control
- Default: `DEFAULT_SUBAGENT_MAX_SPAWN_DEPTH` (configurable)
- Depth 0: Main agent (full tools)
- Depth 1: Orchestrator (restricted tools)
- Depth 2+: Further restricted
- Enforced via `subagent-depth.ts`

### Concurrency Caps
- Global: 8 concurrent (configurable)
- Per-agent: 5 children max
- Auto-archive: 60 minutes inactivity
- Registry cleanup via `subagent-registry-cleanup.ts`

### Announce Chain
Results flow UP the tree:
- `subagent-announce-dispatch.ts` → formats completion
- `subagent-announce-queue.ts` → queues announcements
- Parent receives as user message
- Format: `<completion>` tags with session key

### Attachments
- Files can be attached to subagent
- Stored in workspace `.openclaw/subagent-attachments/`
- Base64 or UTF-8 encoding
- Size limits enforced

## VENOM Mapping

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

**Key insight**: VENOM's 10 minds don't all need to be separate sub-agents. Most are **dispositions woven into the main agent**.

## Questions Answered

- [ ] How does sub-agent session persistence work?
- [ ] Can sub-agents spawn their own sub-agents at depth > 1?
- [ ] How does error handling work — if sub-agent fails, what happens?
- [ ] Can sub-agents share memory/context with parent?

## New Questions

-
