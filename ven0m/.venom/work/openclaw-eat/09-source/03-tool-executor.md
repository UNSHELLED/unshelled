# 03 — Tool Executor

## Purpose

Dispatches tool calls from the agent, executes them safely, and returns results back to the model.

## Key Files

```
src/agents/
├── pi-tools.ts                  ← Tool creation main entry
├── pi-tools.policy.ts           ← Policy enforcement
├── pi-tools.read.ts             ← Read/write tools
├── pi-tools.schema.ts           ← Schema normalization
├── pi-tools.before-tool-call.ts ← Pre-execution hooks
├── pi-tools.abort.ts            ← Abort signal wrapping
├── tool-policy.ts               ← Policy definitions
├── tool-policy-pipeline.ts      ← Multi-stage policy
├── tool-loop-detection.ts       ← Stall detection
├── bash-tools.ts                ← exec/process tools
├── apply-patch.ts               ← Patch tool
├── openclaw-tools.ts            ← OpenClaw-specific tools
└── channel-tools.ts             ← Channel messaging
```

**Upstream:** Generic tool-call orchestration (validate args, `beforeToolCall` / `afterToolCall`, parallel vs sequential) lives in **pi-agent-core** `agent-loop.ts` — see [12-pi-agent-core.md](./12-pi-agent-core.md). OpenClaw files above define **which** tools exist and **policies**.

## How It Works

### Tool Dispatch Flow
1. Model returns tool call via ACP
2. `pi-tools.ts` creates tool inventory
3. Policy pipeline applied (`tool-policy-pipeline.ts`)
4. Before-tool-call hooks fire
5. Tool executed with timeout
6. Result captured and formatted
7. Loop detection counter updated
8. Result fed back to model

### Tool Policy Enforcement
- **Multi-stage pipeline**: owner → profile → group → allow/deny → fs-policy
- `tool-policy.ts`: Core policy definitions
- `tool-policy-pipeline.ts`: Sequential enforcement
- Provider-specific restrictions supported
- Message-provider filtering (e.g., voice provider)

### Loop Detection (`tool-loop-detection.ts`)
- Tracks: tool name + file path + result pattern
- Configurable thresholds (default: 3 identical calls)
- Auto-pause with notification
- Per-session counters

### Tool Categories
- **File operations**: read, write, edit (via `pi-tools.read.ts`)
- **Execution**: exec, process (via `bash-tools.ts`)
- **Patching**: apply_patch (via `apply-patch.ts`)
- **OpenClaw**: sessions, channels, etc. (via `openclaw-tools.ts`)
- **Channel**: message, channels (via `channel-tools.ts`)

### Before-Tool-Call Hooks
- Plugin extension point
- Pre-execution validation
- Logging/telemetry
- Custom behavior injection

## VENOM Mapping

| OpenClaw Tool | VENOM Equivalent |
|---------------|------------------|
| `exec` | Bash tool |
| `apply_patch` | Edit tool |
| `web_search` | WebSearch tool |
| `web_fetch` | WebReader MCP |
| `browser` | — (new capability) |
| `canvas` | — (new capability) |
| Tool policy | Pushback levels |
| Loop detection | VENOM's tool counter protocol |

## Questions Answered

- [ ] How does `exec` sandbox work exactly?
- [ ] Browser tool — full CDP access or limited actions?
- [ ] Can tools be added by plugins?
- [ ] How does tool-result rendering affect context window?

## New Questions

- (none — add as discovery continues)
