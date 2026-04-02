# 11 — WebSocket Protocol

## Purpose

Defines the WebSocket API that clients (CLI, Web, nodes) use to communicate with the Gateway.

## Key Files

```
packages/core/src/
├── protocol/
│   ├── protocol.ts         ← Protocol definition
│   ├── handlers/           ← Message handlers
│   ├── events.ts           ← Event types
│   └── validation.ts       ← JSON Schema validation
```

## How It Works

### Connection
1. Client connects to `ws://localhost:18789`
2. Sends auth token
3. Gateway validates
4. Local connections auto-approved
5. Non-local requires pairing approval
6. Connection established

### Message Format
All messages are JSON with:
- `id` — Unique message ID
- `type` — Message type
- `payload` — Message data
- `timestamp` — ISO timestamp

### Idempotency
- Side-effecting methods require idempotency keys
- Prevents duplicate operations
- Stable session identifiers

### Event Types
**Client → Gateway:**
- `message` — Send message to agent
- `tool_call` — Execute tool
- `session_create` — Create new session
- `session_spawn` — Spawn sub-agent

**Gateway → Client:**
- `message_delta` — Streaming response chunk
- `message_done` — Response complete
- `tool_result` — Tool execution result
- `event` — Gateway event (channel status, etc.)
- `error` — Error notification

### Streaming
- Chunked responses via `message_delta`
- Coalesced at client
- Controlled by `blockStreamingDefault`

## VENOM Mapping

| OpenClaw Protocol | VENOM Equivalent |
|-------------------|------------------|
| WebSocket server | — (new — VENOM runs in-process) |
| Streaming response | — (similar to Claude Code) |
| Idempotency keys | — (new safety pattern) |
| Event routing | — (new — multi-client support) |

## Implementation notes

- **Port:** 18789 (default) · **Path:** `/` · **Auth:** token (see Gateway docs)  
- **Message envelope:** `id`, `type`, `payload`, `timestamp` (see above)

## Questions

- [ ] Full schema — all message types (use [OpenAPI](https://docs.openclaw.ai/api-reference/openapi.json) + repo `protocol/`)  
- [ ] Bidirectional streaming semantics  
- [ ] Max message / frame size  
- [ ] Compression (permessage-deflate or HTTP upgrade)  
- [ ] Where JSON Schema lives in-repo  
