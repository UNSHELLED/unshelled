# 01 — Anatomy Overview: OpenClaw's Body Plan

> **Canon:** [OPENCLAW-EAT-CANON.md](../OPENCLAW-EAT-CANON.md) — this section is **OpenClaw-specific**; VENOM reshape lives in [08-reshape](../08-reshape/).

## The Big Picture

OpenClaw is a **long-lived Gateway daemon** that connects AI models to 25+ messaging channels through a typed WebSocket protocol.

```
                    ┌─────────────────────┐
                    │    Gateway Daemon    │
                    │    (port 18789)      │
                    │                     │
                    │  ┌─── Agent Loop ──┐ │
                    │  │  Bootstrap Files │ │
                    │  │  Tool Policy     │ │
                    │  │  Session Mgmt    │ │
                    │  │  Memory Flush    │ │
                    │  └─────────────────┘ │
                    │                     │
                    │  ┌─── Channel Hub ─┐ │
                    │  │  WhatsApp        │ │
                    │  │  Telegram        │ │
                    │  │  Discord         │ │
                    │  │  Slack           │ │
                    │  │  20+ more        │ │
                    │  └─────────────────┘ │
                    │                     │
                    │  ┌─── Provider Hub ┐│ │
                    │  │  Anthropic       │ │
                    │  │  OpenAI          │ │
                    │  │  Ollama          │ │
                    │  │  20+ more        │ │
                    │  └─────────────────┘ │
                    └─────────┬───────────┘
                              │ WebSocket
                    ┌─────────┴───────────┐
                    │     Clients         │
                    │  CLI / Web / macOS  │
                    │  Nodes / Canvas     │
                    └─────────────────────┘
```

## Core Components

| Component | What It Is | Port / Path |
|-----------|-----------|-------------|
| Gateway | Node.js daemon, owns everything | 18789 (WS) |
| CLI | `openclaw` command line tool | terminal |
| Web UI | Dashboard + WebChat | 18790 |
| Canvas Host | Agent-editable HTML/A2UI | 18793 |
| macOS App | Native menu bar app | system |
| Nodes | Remote machines (browser, camera) | WS |

## Key Design Decisions

1. **Single Gateway owns all surfaces** — not per-channel processes, one daemon
2. **WebSocket everywhere** — CLI, nodes, web — all WS clients
3. **Typed protocol** — JSON Schema validated, not freeform
4. **Workspace as source of truth** — agent lives in a directory, not a database
5. **Bootstrap injection** — AGENTS.md/SOUL.md/USER.md injected on every turn

## Questions to Answer

- [ ] What happens when Gateway crashes? Session recovery?
- [ ] How does idempotency work for message sends?
- [ ] What's the memory overhead for the daemon?
- [ ] Can multiple Gateways run for different agents?
