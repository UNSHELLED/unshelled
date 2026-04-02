# 02 — Mind: Model Providers

## Supported Providers (20+)

| Provider | Type | Auth | Notes |
|----------|------|------|-------|
| Anthropic | API + OAuth | API key or Claude Code CLI | Primary for VENOM |
| OpenAI | API + Codex OAuth | API key | GPT-4o, o3, etc. |
| OpenRouter | Unified gateway | API key | Access to all models |
| LiteLLM | Unified gateway | API key | 100+ models |
| Ollama | Local | None | Self-hosted |
| vLLM | Local | None | Self-hosted |
| Venice AI | Privacy-first | API key | Opus available |
| Together AI | Cloud | API key | Open models |
| Cloudflare AI GW | Gateway | API key | Caching + routing |
| Vercel AI GW | Gateway | API key | Edge routing |
| Bedrock | Cloud | AWS creds | Enterprise |
| Mistral | Cloud | API key | European |
| Qwen | Cloud | OAuth | Chinese |
| Moonshot / Kimi | Cloud | API key | Chinese |
| HuggingFace | Cloud | API key | Open models |
| NVIDIA | Cloud | API key | GPU-optimized |
| Deepgram | Audio | API key | Transcription only |
| GLM | Cloud | API key | Chinese |
| MiniMax | Cloud | API key | Chinese |
| Z.AI | Cloud | API key | — |

## Provider Configuration

Model references: `provider/model` format
- Example: `anthropic/claude-sonnet-4-20250514`
- Provider-less aliases work with default provider
- OpenRouter-style IDs with provider prefix

## Custom Endpoints

- OpenAI-compatible endpoints supported
- Custom headers and authentication
- Custom embedding endpoints for memory search

## Transcription

- **Deepgram** for audio → text
- Used for voice messages, voice wake, audio notes

## VENOM Angle

Current VENOM uses Claude (Anthropic) exclusively via Claude Code. OpenClaw would give VENOM:
- **Model failover**: If Claude is down, route to OpenRouter fallback
- **Cost optimization**: Route simpler tasks to cheaper models
- **Local option**: Ollama for offline/sensitive work
- **Provider-specific tool policies**: Some models get more tools than others

## Questions to Answer

- [ ] How does failover work between providers?
- [ ] Can different channels use different default models?
- [ ] Cost tracking per provider?
- [ ] Streaming behavior differences per provider?
