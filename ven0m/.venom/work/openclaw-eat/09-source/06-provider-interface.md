# 06 — Provider interface

## Purpose

How OpenClaw chooses and calls models: catalog, auth, streaming, failover — wired through **pi-ai** (`streamSimple`, providers) with types/catalog hooks from **pi-agent-core**. See [12-pi-agent-core.md](./12-pi-agent-core.md).

## Key files (OpenClaw clone)

```
src/agents/
├── model-catalog.ts            ← Model registry (many providers)
├── model-auth.ts               ← Authentication
├── model-selection.ts          ← Selection logic
├── model-fallback.ts           ← Failover
├── provider-attribution.ts     ← Attribution
├── model-suppression.runtime.ts← Hide models
└── providers/                  ← Provider-specific config
```

## Model reference

- `provider/model` (e.g. `anthropic/claude-sonnet-4-20250514`)  
- Provider aliases and OpenRouter-style IDs supported  

## Catalog behavior

- **Dynamic discovery** — catalog/types coordinated with **`@mariozechner/pi-agent-core`**; **streaming** is **`@mariozechner/pi-ai`** (`pi-mono/packages/ai`).  
- **Opt-in** providers (e.g. deepseek, kilocode) — manual config  
- **Plugin providers** — extend catalog  
- **Caching** — e.g. `modelCatalogPromise` pattern in source  

## Streaming

- Controlled by `agents.defaults.blockStreamingDefault`  
- Chunk coalescing for streaming providers  

## Failover

- Fallback providers, cost-aware routing, provider-specific tool policies  

## Provider list (representative)

- **Major:** Anthropic, OpenAI, OpenRouter, LiteLLM  
- **Local:** Ollama, vLLM  
- **Regional / other:** Qwen, Moonshot, Kimi, MiniMax, Z.AI, GLM, Mistral  
- **Gateways:** Cloudflare AI, Vercel AI  
- **Enterprise:** Bedrock  

## VENOM mapping

| VENOM today | OpenClaw gain |
|-------------|----------------|
| Single-vendor bias | Many providers + failover |
| No cost routing | Cheaper models when appropriate |
| No local | Ollama / offline |

**Compatibility:** VENOM can standardize on one model with fallbacks.

## Questions

- [ ] Failover behavior across providers  
- [ ] Per-channel default models  
- [ ] Cost telemetry  
- [ ] `model-suppression` rules  
- [ ] Custom provider addition process  
