# 09-source — Navigation index

> **Canon:** [OPENCLAW-EAT-CANON.md](../OPENCLAW-EAT-CANON.md) · **Role:** **Source eat** — ground-truth paths in `openclaw-main/` + `pi-mono/`; authoritative over narrative notes if they conflict.  
> **Paths:** `openclaw-main/...` = OpenClaw clone · `pi-mono/...` = upstream in `09-source/pi-mono/`.  
> **Hub:** [00-source-map.md](./00-source-map.md) · **Synthesis:** [../EAT-SYNTHESIS.md](../EAT-SYNTHESIS.md) · **Planning:** [../INDEX.md](../INDEX.md)

## Reading order (pipeline)

```
00 map → 01 gateway → 11 protocol ─┐
       → 02 loop → 12 pi-core      │  one vertical slice: reach → session → model → loop → tools
       → 03 tools                   │
       → 07 session                 │
       → 06 providers               │
       → 04 memory → 08 compaction ┘
       → 05 channels
       → 09 subagents → 10 plugins
```

| # | File | Owns | Pairs with |
|---|------|------|------------|
| 00 | [00-source-map.md](./00-source-map.md) | Two repos, clone paths | EXTERNAL-RESOURCES |
| 01 | [01-gateway-daemon.md](./01-gateway-daemon.md) | Gateway, ACP manager, WS port | 11 |
| 02 | [02-agent-loop.md](./02-agent-loop.md) | pi-embedded-runner, bootstrap, turn | 03, 08, 12 |
| 03 | [03-tool-executor.md](./03-tool-executor.md) | pi-tools, policy, loop detection | 02, 12 |
| 04 | [04-memory-manager.md](./04-memory-manager.md) | Vector search, flush, MEMORY.md | 08 |
| 05 | [05-channel-base.md](./05-channel-base.md) | Channel interface, Discord threads | 01, 07 |
| 06 | [06-provider-interface.md](./06-provider-interface.md) | Model catalog, failover, pi-ai | 02, 12 |
| 07 | [07-session-manager.md](./07-session-manager.md) | JSONL sessions, IDs, TTL | 05, 08 |
| 08 | [08-compaction-handler.md](./08-compaction-handler.md) | Tokens, summary, identifier policy | 02, 04 |
| 09 | [09-subagent-spawner.md](./09-subagent-spawner.md) | Depth, announce chain | 07, 02 |
| 10 | [10-plugin-loader.md](./10-plugin-loader.md) | Bundles, manifests | — |
| 11 | [11-protocol.md](./11-protocol.md) | WS messages, idempotency | 01 |
| 12 | [12-pi-agent-core.md](./12-pi-agent-core.md) | `@mariozechner/pi-agent-core` source | 02, 03, 06 |
| 13 | [13-hooks-parity.md](./13-hooks-parity.md) | Claude/VENOM hook expectations ↔ OpenClaw events | automation doc, PLANNING-GAPS §5 |

## Related folders (outside 09-source)

| Folder | Role |
|--------|------|
| [../01-anatomy/](../01-anatomy/) | Doc-aligned overview (gateway, CLI, web, workspace, install) |
| [../02-mind/](../02-mind/) | Agent + memory concepts |
| [../03-tools/](../03-tools/) | Tooling notes |
| [../04-channels/](../04-channels/) | Channel architecture |
| [../05-skills-plugins/](../05-skills-plugins/) | Skills + plugins |
| [../06-sub-agents/](../06-sub-agents/) | Multi-agent |
| [../07-security/](../07-security/) | Auth + sandbox |
| [../08-reshape/](../08-reshape/) | VENOM gap analysis |
| [../10-phases/](../10-phases/) | Phase workflow |

## Upstream clone

- `pi-mono/` — `packages/agent` = npm `@mariozechner/pi-agent-core`, `packages/ai` = `@mariozechner/pi-ai`
