# 02 — CLI: The Nervous System

## What It Is

`openclaw` is the command-line tool — the primary interface for setup, config, messaging, and agent interaction.

## Key Commands

| Command | Purpose |
|---------|---------|
| `openclaw onboard` | First-time setup wizard |
| `openclaw agent` | Start agent session |
| `openclaw message` | Send message to any channel |
| `openclaw config` | View/edit configuration |
| `openclaw channels` | List/manage channels |
| `openclaw models` | List/switch model providers |
| `openclaw cron` | Manage scheduled tasks |
| `openclaw hooks` | Manage automation hooks |
| `openclaw browser` | Control browser profiles |
| `openclaw nodes` | Discover/manage remote nodes |
| `openclaw dashboard` | Open web UI |
| `openclaw status` | System health check |
| `openclaw doctor` | Diagnose issues |
| `openclaw skills` | List/manage skills |
| `openclaw plugins` | List/manage plugins |
| `openclaw logs` | View gateway logs |
| `openclaw memory` | Manage agent memory |
| `openclaw sessions` | List agent sessions |
| `openclaw tui` | Terminal UI mode |
| `openclaw voicecall` | Voice interaction |

## Architecture

CLI is a **WebSocket client** to the Gateway. Not a direct executor.

```
openclaw CLI → WS → Gateway → Agent → Model → Response → Gateway → WS → CLI
```

## Questions to Answer

- [ ] Full CLI reference — every flag, every subcommand
- [ ] How does streaming work in terminal?
- [ ] Can CLI work without Gateway running?
- [ ] TUI vs CLI — when to use which?
