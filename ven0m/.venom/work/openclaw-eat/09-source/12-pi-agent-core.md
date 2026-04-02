# 12 — pi-agent-core (`@mariozechner/pi-agent-core`)

## Purpose

Document the **upstream agent runtime library** that OpenClaw uses under `src/agents/pi-embedded-runner/`. This is **not** OpenClaw code — it lives in the **pi-mono** monorepo and is published as npm `@mariozechner/pi-agent-core`.

## Local clone (this workspace)

| Item | Path |
|------|------|
| Monorepo root | `.venom/work/openclaw-eat/09-source/pi-mono/` |
| This package | `pi-mono/packages/agent/` |
| npm name | `@mariozechner/pi-agent-core` |
| Upstream | https://github.com/badlogic/pi-mono (`packages/agent`) |

**Sibling dependency (same monorepo):** `packages/ai` → `@mariozechner/pi-ai` (streaming, `streamSimple`, `Message`, `Model`, `validateToolArguments`, provider registry).

---

## Layering vs OpenClaw

```
OpenClaw (openclaw-main/)
  src/agents/pi-embedded-runner/     ← integration: bootstrap, history, compaction, OpenClaw tools
  src/agents/pi-embedded-runner.ts   ← entry / re-exports
           │
           │ imports types + StreamFn
           ▼
@mariozechner/pi-agent-core          ← packages/agent: Agent, runAgentLoop, AgentMessage, events
           │
           │ imports streamSimple, Message, Model, …
           ▼
@mariozechner/pi-ai                  ← packages/ai: provider streams, LLM boundary
```

**VENOM reshape:** Personality and bootstrap (AGENTS.md, SOUL.md, etc.) live in **OpenClaw**. The **loop contract** (tool rounds, streaming events, tool hooks) is defined here — change only if you fork or patch pi-mono.

---

## Source files (`packages/agent/src/`)

| File | Role |
|------|------|
| `index.ts` | Re-exports `agent`, `agent-loop`, `proxy`, `types` |
| `agent.ts` | **`Agent` class** — stateful wrapper: transcript, `prompt()` / `continue()`, `steer()` / `followUp()` queues, `subscribe()` for `AgentEvent`, wires `runAgentLoop` / `runAgentLoopContinue` |
| `agent-loop.ts` | **`runAgentLoop`**, **`runAgentLoopContinue`**, **`agentLoop`** / **`agentLoopContinue`** (stream helpers) — inner loop: stream assistant → tool calls → tool results → repeat; `beforeToolCall` / `afterToolCall`; parallel vs sequential tool execution |
| `types.ts` | `AgentMessage`, `AgentTool`, `AgentContext`, `AgentLoopConfig`, `StreamFn` (same shape as `streamSimple`), `ToolExecutionMode`, event types |
| `proxy.ts` | **Proxy stream** — JSON streaming for server-mediated LLM calls (`ProxyMessageEventStream`) |

Published artifact is **`dist/`** (build from package root). Eating reads **`src/`**.

---

## Loop mechanics (authoritative)

1. **AgentMessage** end-to-end; **`convertToLlm`** only at the LLM call (`AgentMessage[]` → pi-ai `Message[]`).
2. **`transformContext`** optional — can rewrite transcript before conversion (compaction, trimming).
3. **`streamAssistantResponse`** builds `Context` (`systemPrompt`, `llmMessages`, `tools`) and calls **`streamFn`** (default **`streamSimple`** from pi-ai).
4. **Streaming events** map to `message_start` / `message_update` / `message_end` and tool execution events.
5. **Tool calls:** `prepareToolCall` → validate args → optional **`beforeToolCall`** (block → error tool result) → **`execute`** → optional **`afterToolCall`** → emit `toolResult` messages.
6. **`toolExecution`:** `"parallel"` (default) vs `"sequential"` — see `agent-loop.ts` `executeToolCalls*`.
7. **Steering / follow-up:** `getSteeringMessages` / `getFollowUpMessages` in `AgentLoopConfig` — injected between turns (used by `Agent` class queues).

---

## Exports most relevant to OpenClaw

- **`StreamFn`** — type used by OpenClaw extensions (e.g. `extensions/xai/stream.ts`).
- **`AgentToolResult`**, **`AgentMessage`** — tool and transcript types.
- **`runAgentLoop`** — low-level; OpenClaw typically uses **`Agent`** or embeds the runner.

---

## VENOM mapping

| pi-agent-core concept | VENOM lens |
|----------------------|------------|
| `systemPrompt` + messages | Bootstrap + history (OpenClaw injects AGENTS/SOUL/USER/TOOLS before this) |
| `beforeToolCall` / `afterToolCall` | Policy / safety hooks (align with Pact, pushback) |
| `transformContext` | Compaction / identifier preservation (OpenClaw-specific logic can live here) |
| `AgentEvent` stream | Same “turn” story as VENOM loop — single voice, many phases |

---

## Questions answered

- [x] Where is the canonical agent loop? → `agent-loop.ts` (`runLoop` → `streamAssistantResponse` → `executeToolCalls`).
- [x] Where do tools execute? → `executePreparedToolCall` → `tool.execute(id, args, signal, onPartial)`.
- [x] What package owns the LLM wire? → **`@mariozechner/pi-ai`**, not this package alone.

## New questions

- [ ] Exact `runEmbeddedPiAgent` mapping from OpenClaw `pi-embedded-runner/run.ts` to `Agent` / `runAgentLoop` (line-by-line).
- [ ] Which OpenClaw `streamFn` is injected when (default vs extension providers)?
