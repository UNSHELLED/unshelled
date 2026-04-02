# 03 — Web UI: Dashboard + WebChat

## What It Is

Two web surfaces:
1. **Dashboard** — admin/control panel at port 18790
2. **WebChat** — chat interface, static HTML, connects via WS
3. **Canvas Host** — agent-editable HTML on port 18793

## Dashboard Features

- Agent session management
- Channel status monitoring
- Device/node management
- Cron job configuration
- Memory/workspace browser
- Log viewer

## WebChat Architecture

```
Static HTML/JS → WebSocket → Gateway → Agent
```

- No server-side rendering — pure client
- Connects to Gateway WS API directly
- Supports streaming responses
- Canvas mode for rich agent output (HTML/A2UI)

## Canvas / A2UI

"Agent-to-UI" — the agent can render interactive HTML that the user sees and interacts with.

- Port 18793 serves canvas HTML
- Agent can `present()`, `eval()`, `snapshot()` canvas
- Enables forms, buttons, data displays the agent creates dynamically

## VENOM Angle

This is where VENOM's Control UI concept could live.
Dashboard = VENOM's nervous system visualization.
Canvas = VENOM's surface for showing work.

## Questions to Answer

- [ ] Can Dashboard be customized with different themes?
- [ ] Canvas security — can agent run arbitrary JS?
- [ ] Mobile-responsive WebChat?
- [ ] How does Canvas differ from Artifacts?
