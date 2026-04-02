# 03 — Tools: The Tool System

## Architecture

OpenClaw tools are first-class agent capabilities — not plugins, not extensions, but **built-in typed interfaces** that the agent can invoke.

## Tool Policy Framework

### Global Rules
```json
{
  "tools": {
    "allow": ["exec", "web_search", "browser"],
    "deny": ["exec:rm -rf"]
  }
}
```

### Tool Profiles (Presets)

| Profile | Includes |
|---------|----------|
| `minimal` | Basic messaging only |
| `coding` | exec, apply_patch, web_search, web_fetch |
| `messaging` | message, channels |
| `full` | Everything |

### Tool Groups (Shorthand)

| Group | Tools |
|-------|-------|
| `group:runtime` | Gateway, session management |
| `group:fs` | File operations, exec |
| `group:memory` | Memory read/write/search |
| `group:web` | web_search, web_fetch, browser |
| `group:ui` | canvas, nodes |
| `group:automation` | cron, hooks, polls |
| `group:messaging` | message, channels |
| `group:nodes` | node discovery, camera, screen |

### Provider-Specific Restrictions

Different models can have different tool access:
```json
{
  "tools": {
    "byProvider": {
      "ollama/*": { "deny": ["browser", "canvas"] }
    }
  }
}
```

## Core Tools List

| Tool | Purpose | Key Feature |
|------|---------|-------------|
| `exec` | Shell commands | Timeout, background, security |
| `process` | Background exec management | List, kill, read output |
| `apply_patch` | File patches | Structured before/after |
| `web_search` | Brave Search | API integration |
| `web_fetch` | URL content extraction | Reader mode |
| `browser` | Chrome/Brave/Edge control | Multi-profile, remote CDP |
| `canvas` | HTML/A2UI rendering | Present, eval, snapshot |
| `nodes` | Remote machine control | Camera, screen capture |
| `image` | Image analysis | Vision model integration |
| `message` | Cross-channel messaging | Any channel, any format |
| `cron` | Scheduled tasks | Cron expressions |
| `gateway` | Gateway management | Restart, update |
| `sessions_*` | Session management | List, history, send, spawn |

## Tool Loop Detection

Guardrails for preventing repetitive no-progress patterns:
- Configurable thresholds
- Auto-pause after N identical calls
- Agent gets notified of stall

## VENOM Mapping

| OpenClaw Tool | VENOM Equivalent |
|---------------|------------------|
| `exec` | Bash tool |
| `apply_patch` | Edit tool |
| `web_search` | WebSearch tool |
| `web_fetch` | WebReader MCP |
| `browser` | — (new capability) |
| `canvas` | — (new capability) |
| `image` | Vision/image tools |
| `message` | — (multi-channel) |
| `cron` | CronCreate tool |
| Tool policy | Pushback levels |
| Loop detection | VENOM's tool counter protocol |

**Key gains**: Browser automation, canvas, multi-channel messaging, remote nodes

## Questions to Answer

- [ ] How does `exec` sandbox work exactly?
- [ ] Browser tool — full CDP access or limited actions?
- [ ] Can tools be added by plugins?
- [ ] How does tool-result rendering affect context window?
