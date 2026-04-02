# 01 — Gateway Daemon

## Purpose

Entry point for the entire OpenClaw system. The Gateway daemon runs 24/7 as a background service (systemd/launchd), owns all connections, channels, and agent sessions.

## Key Files

```
src/acp/control-plane/manager.ts   ← Main Gateway manager (ACP - Agent Control Protocol)
src/acp/client.ts                  ← ACP client implementation
src/gateway/call.ts                ← Gateway RPC calls
src/gateway/auth.ts                ← Authentication, device pairing
src/gateway/android-node.capabilities.policy-*.ts  ← Node integration
```

## How It Works

### Startup Sequence
1. Load config from `~/.openclaw/openclaw.json`
2. Initialize ACP (Agent Control Protocol) manager
3. Start WebSocket server on port 18789 (or configured port)
4. Load channels from config
5. Connect to all configured channels
6. Start cron scheduler
7. Emit "gateway ready" event

### WebSocket Server
- Accepts client connections on port 18789
- Validates auth tokens via `src/gateway/auth.ts`
- Routes events bidirectional
- Handles disconnect/reconnect

### Device Pairing
- Local connections (loopback/tailnet) → auto-approved
- Non-local → requires explicit approval
- Device tokens stored after pairing

### Agent Control Protocol (ACP)
- **Critical finding**: OpenClaw uses ACP (@mariozechner/pi-agent-core) as its agent runtime
- `src/acp/` contains the entire ACP implementation
- Control plane manager handles agent lifecycle
- Persistent bindings for agent sessions

## VENOM Mapping

| OpenClaw Component | VENOM Equivalent |
|--------------------|------------------|
| Gateway daemon | VENOCTIS central nervous system |
| WebSocket server | VENOM's "reach" — all surfaces connect here |
| Device pairing | VENOM's trust system |

## Questions Answered

- [ ] Full config schema
- [ ] How does Gateway handle model failures/timeouts?
- [ ] Restart strategy — graceful degradation?
- [ ] Multi-Gateway for multi-agent isolation?

## New Questions

- (none — add as discovery continues)
