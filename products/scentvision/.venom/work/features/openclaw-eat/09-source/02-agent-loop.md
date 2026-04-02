# 02 — Agent Loop

## Purpose

The core intelligence cycle — how OpenClaw processes a user message, decides what to do, and responds.

## Key Files

```
src/agents/
├── pi-embedded.ts              ← Main entry point, re-exports
├── pi-embedded-runner/         ← Agent runtime implementation
│   ├── run.ts                  ← Core agent execution
│   ├── compact.ts              ← Compaction logic
│   ├── system-prompt.ts        ← System prompt building
│   ├── extra-params.ts         ← Model parameters
│   └── history.ts              ← History management
├── pi-embedded-subscribe.ts    ← Stream subscription/handling
└── pi-tools.ts                 ← Tool creation/policy
```

## Upstream: `@mariozechner/pi-agent-core`

OpenClaw’s runner **calls into** the pi stack; the **loop semantics** (stream assistant → tool calls → tool results → repeat, `beforeToolCall` / `afterToolCall`, parallel vs sequential tools) are implemented in **`pi-mono/packages/agent`** (`runAgentLoop`, `Agent` class), not in OpenClaw.

- **Full eat:** [12-pi-agent-core.md](./12-pi-agent-core.md)
- **Local source:** `.venom/work/openclaw-eat/09-source/pi-mono/packages/agent/src/`
- **LLM streaming / providers:** `@mariozechner/pi-ai` (`packages/ai` in the same monorepo)

## How It Works

### Loop Steps
1. **RECEIVE** message from channel
2. **RESOLVE** workspace context (`workspace.ts`)
3. **INJECT** bootstrap files (AGENTS.md, SOUL.md, etc.) via `bootstrap-files.ts`
4. **BUILD** prompt (system + user + history + tools) via `pi-embedded-helpers.ts`
5. **CALL** model provider via ACP (@mariozechner/pi-agent-core)
6. **PARSE** model output via `pi-embedded-subscribe.ts`
   - Text → stream to channel
   - Tool call → execute tool → feed result back → step 5
   - Done → finalize
7. **FLUSH** memory if compaction threshold near
8. **RETURN** response to channel

### Streaming vs Blocking
- Controlled by `agents.defaults.blockStreamingDefault`
- Blocking: Wait for full response
- Streaming: Chunk and coalesce as model generates
- **Finding**: Stream handling via `pi-embedded-subscribe.ts` with soft chunking

### Compaction Trigger
- When token count approaches context limit
- Memory flush (agentic turn)
- Context compressed (older turns summarized) via `compaction.ts`
- Bootstrap files re-injected
- **Critical**: Identifier preservation policy (UUIDs, hashes, IDs preserved)

## VENOM Mapping

| OpenClaw Loop Step | VENOM Equivalent |
|--------------------|------------------|
| Bootstrap injection | 4-phase intake (Void → Pressure → Collapse → Singularity) |
| Tool execution | WELD leads |
| Memory flush | ECHO writes to MEMORY.md |
| Compaction | pre-compact.js fires, ACTIVE.md snapshot |

## Questions Answered

- [x] Where does the core loop run? → **pi-agent-core** (`agent-loop.ts`) + OpenClaw `pi-embedded-runner` glue
- [ ] Exact prompt template structure
- [ ] How does tool-result rendering work?
- [ ] Can the loop be customized per agent?
- [ ] What triggers compaction exactly?

## New Questions

- (none — add as discovery continues)
