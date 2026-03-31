# Z.AI MCP Server for Claude Code

**VENOM Production** — Complete, production-ready MCP server exposing Z.AI capabilities to Claude Code.

## Features

| Tool | Description | Use Case |
|------|-------------|----------|
| `zai_search` | Web search (works globally) | Research, current events, fact-checking |
| `zai_chat` | Chat with GLM-4.6/4.5/5 | Reasoning, coding help, analysis |
| `zai_generate_image` | CogView-4 image generation | Create images from text |
| `zai_generate_video` | CogVideoX-3 video generation | Create video clips from text |

## Setup

### 1. Get Z.AI API Key

1. Go to https://open.z.ai/
2. Register/Login
3. Navigate to API Keys
4. Create a new key
5. Subscribe to **GLM Coding Plan** ($3/month) for coding endpoint access

### 2. Install Dependencies

```bash
cd /mnt/c/Users/karie/Desktop/v1/.zai-mcp
npm install
```

### 3. Configure Environment

Create `.env` file:

```bash
cp .env.example .env
# Edit .env and add your ZAI_API_KEY
```

### 4. Build

```bash
npm run build
```

### 5. Configure Claude Code

Add to your Claude Code config (`~/.claude/settings.json` or project `.claude/settings.json`):

```json
{
  "mcpServers": {
    "zai": {
      "command": "node",
      "args": ["/mnt/c/Users/karie/Desktop/v1/.zai-mcp/dist/index.js"],
      "env": {
        "ZAI_API_KEY": "your_actual_api_key_here"
      }
    }
  }
}
```

**Or set environment variable:**

```bash
export ZAI_API_KEY="your_key_here"
```

### 6. Restart Claude Code

Close and reopen Claude Code for MCP server to load.

## Usage Examples

### Web Search (Your Original Problem)

```
Search for "Claude.ai platform features 2026" using zai_search
```

### Generate Image

```
Generate an image of "a cyberpunk octopus in neon colors" using zai_generate_image
```

### Chat with Web Search

```
Ask zai_chat about current tech news with web search enabled
```

## Tools Reference

### zai_search

```json
{
  "query": "search query here",
  "topK": 10
}
```

### zai_chat

```json
{
  "prompt": "your question",
  "model": "glm-4.6",
  "temperature": 0.7,
  "useWebSearch": true
}
```

### zai_generate_image

```json
{
  "prompt": "detailed image description",
  "size": "1024x1024"
}
```

### zai_generate_video

```json
{
  "prompt": "detailed video description",
  "duration": 5
}
```

## Troubleshooting

**Server not loading:**
- Check `npm run build` completed successfully
- Verify API key is set correctly
- Check Claude Code logs for errors

**API errors:**
- Verify GLM Coding Plan subscription
- Check API key hasn't expired
- Ensure billing balance is positive

**Web search still failing:**
- Confirm using `zai_search` tool (not built-in WebSearch)
- Z.AI web search works globally including Egypt

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Claude Code    │────▶│   Z.AI MCP      │────▶│   Z.AI API      │
│                 │     │   Server        │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                              │
                              ▼
                       ┌──────────────┐
                       │  Tools:      │
                       │  - search    │
                       │  - chat      │
                       │  - image     │
                       │  - video     │
                       └──────────────┘
```

## License

MIT

---

**Built by VENOM** — No TODOs. Complete. Production-ready.
