# 05 — Channel base

## Purpose

How channels plug into the Gateway: shared interface, normalized messages, lifecycle, Discord thread binding, plugin channels.

## Key files (OpenClaw clone)

```
src/channels/
├── session.ts                  ← Channel session lifecycle
├── channel-config.ts           ← Configuration
├── targets.ts                  ← Message targeting
├── thread-bindings-*.ts        ← Thread binding (e.g. Discord)
├── allowlist-*.ts              ← Allowlist enforcement
├── command-gating.ts           ← Command gating
├── transport/                  ← Transport implementations
└── plugins/
    ├── types.plugin.ts         ← Plugin channel interface
    └── types.core.ts           ← Core channel types
```

*(Illustrative channel implementations live under repo-specific paths — use `openclaw-main/` search: `WhatsAppChannel`, `TelegramChannel`, etc.)*

## Channel contract

Every channel implements connection, send, receive, and health:

- `connect()` / `disconnect()`
- `sendMessage()` / inbound handler
- `isAvailable()` (health)

## Unified message shape

Inbound/outbound normalized roughly to: channel id, optional thread id, user id, username, text, optional attachments, timestamp. (Exact types in `src/channels/` + channel packages.)

## Lifecycle

1. Gateway loads channel from config  
2. `connect()` with credentials  
3. Channel ready → Gateway routes traffic  
4. Shutdown → `disconnect()`

## Discord / threads

- `/focus` — bind thread to session or sub-agent  
- `/unfocus` — remove binding  
- `/agents` — list active runs  
- Sub-agents can bind to threads for parallel work  

## Plugin channels

- `src/channels/plugins/types.plugin.ts` — plugin interface  
- Plugin SDK under `src/plugin-sdk/` (channel-related)  
- Do not import core internals from plugins (boundary in repo `AGENTS.md` / docs)

## VENOM mapping

| OpenClaw | VENOM surface |
|----------|----------------|
| WhatsApp, 20+ channels | New reach — pick Telegram/Discord for VENOCTIS |
| Thread binding | New — orchestration per thread |

**Compatibility:** Channels need no change for VENOM personality; routing is Gateway + templates.

## Questions

- [ ] Per-channel message formatting and media limits  
- [ ] Rate limits and backoff  
- [ ] Cross-channel continuity for one user  
- [ ] Channel plugin authoring workflow  
