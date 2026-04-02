# 09 — Source Code Deep Dive

> **Navigation:** [INDEX.md](./INDEX.md) (reading order + pairings) · **Synthesis:** [../EAT-SYNTHESIS.md](../EAT-SYNTHESIS.md)

## Repositories (two bodies)

### 1. OpenClaw (this product)

- **GitHub**: https://github.com/openclaw/openclaw
- **Language**: TypeScript (Node.js)
- **Build**: pnpm
- **Package Manager**: npm (published as `openclaw`)
- **Local clone**: `.venom/work/openclaw-eat/openclaw-main/` (see tree below)

### 2. pi-mono — agent runtime + LLM layer (upstream)

- **GitHub**: https://github.com/badlogic/pi-mono
- **Relevant packages**:
  | Path | npm package | Role |
  |------|-------------|------|
  | `packages/agent` | `@mariozechner/pi-agent-core` | `Agent`, `runAgentLoop`, tool events, `StreamFn` |
  | `packages/ai` | `@mariozechner/pi-ai` | `streamSimple`, `Message`, `Model`, providers |
- **Local clone**: `.venom/work/openclaw-eat/09-source/pi-mono/`
- **Eat doc**: [12-pi-agent-core.md](./12-pi-agent-core.md)

OpenClaw’s **`src/agents/pi-embedded-runner/`** is the **glue**; pi-agent-core is the **loop engine**.

---

## OpenClaw source structure (reference)

```
openclaw-main/
├── packages/
│   ├── core/            ← Gateway, agent loop, session management
│   ├── cli/             ← CLI tool
│   ├── web/             ← Dashboard + WebChat
│   ├── channels/        ← Channel integrations
│   ├── providers/       ← Model providers
│   ├── tools/           ← Tool implementations
│   ├── memory/          ← Memory + vector search
│   ├── skills/          ← Bundled skills
│   └── plugins/         ← Plugin system
├── docs/                ← Documentation source
├── scripts/             ← Build + install scripts
└── tests/               ← Test suites
```

*(Exact layout follows the cloned repo; use `openclaw-main/` as the ground truth.)*

---

## Key files to study (OpenClaw)

| File | Why |
|------|-----|
| Gateway daemon entry | How the server starts |
| Agent loop | The core intelligence cycle |
| Tool executor | How tools are dispatched |
| Memory manager | Memory flush + vector search |
| Channel base class | How channels plug in |
| Provider interface | How models are called |
| Session manager | Session lifecycle |
| Compaction handler | Context management |
| Sub-agent spawner | Multi-agent orchestration |
| Plugin loader | Plugin discovery + validation |

## Key files to study (upstream)

| Doc | Why |
|-----|-----|
| [12-pi-agent-core.md](./12-pi-agent-core.md) | pi-agent-core `Agent` + `agent-loop` + types |
| `pi-mono/packages/ai/README.md` | Provider streaming, `streamSimple` (after clone) |

## Protocol Spec

- WebSocket API on port 18789
- JSON Schema validated
- Idempotency keys for side-effecting methods
- Stable session identifiers

## Contributing

- Open source — can fork, study, contribute
- Plugin system for extensions without forking
- TypeBox codegen for Swift/macOS models

## Questions to Answer

- [x] Clone OpenClaw repo — `openclaw-main/`
- [x] Clone pi-mono — `09-source/pi-mono/` (agent + ai packages)
- [x] How is the agent loop implemented — streaming, tool calls? → **pi-agent-core** `agent-loop.ts` + **pi-ai** `streamSimple`; see [12-pi-agent-core.md](./12-pi-agent-core.md)
- [ ] How does Gateway handle multiple concurrent sessions?
- [ ] What's the state management approach (in-memory, file, DB)?
- [ ] How are channel implementations structured (base class, interface)?
