# 01 — Gateway: The Heart

## What It Is

The Gateway is OpenClaw's core daemon. It runs 24/7 as a background service ( systemd/launchd), owns all connections, channels, and agent sessions.

## Responsibilities

1. **WebSocket Server** — listens on port 18789, accepts client connections
2. **Device Pairing** — manages trust, auth tokens, local vs remote approval
3. **Channel Management** — connects to WhatsApp/Telegram/Discord/etc.
4. **Agent Invocation** — spawns agent runs, manages sessions, handles compaction
5. **Cron Scheduler** — runs scheduled tasks, wakes agent
6. **Event Routing** — distributes events to connected clients
7. **Canvas Host** — serves agent-editable HTML on port 18793

## Connection Lifecycle

```
1. Client connects with device identity
2. Gateway checks auth token (auto-generated on startup)
3. Local connections (loopback/tailnet) → auto-approved
4. Non-local → requires explicit pairing approval
5. Events flow bidirectional: agent events, presence, tick, shutdown
```

## Key Files/Config

- Config: `~/.openclaw/openclaw.json` (main config)
- Auth tokens: auto-generated, stored in gateway state
- Logs: `~/.openclaw/logs/`
- Sessions: `~/.openclaw/agents/<id>/sessions/`

## Gateway vs VENOCTIS

| Concern | OpenClaw Gateway | VENOCTIS (planned) |
|---------|-----------------|-------------------|
| Language | Node.js | Python |
| Transport | WebSocket | HTTP + Telegram |
| Always-on | systemd/launchd | systemd |
| Auth | Device pairing + tokens | API keys |
| Monitoring | Built-in | GitHub/YouTube/News |

## Questions to Answer

- [ ] Full config schema — every field in openclaw.json
- [ ] How does Gateway handle model failures/timeouts?
- [ ] Restart strategy — graceful degradation?
- [ ] Multi-Gateway for multi-agent isolation?
