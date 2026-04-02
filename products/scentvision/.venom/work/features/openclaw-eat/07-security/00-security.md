# 07 — Security

## Auth Model

### Device Pairing
- Every client connects with a device identity
- Gateway auto-generates auth tokens on startup
- **Local connections** (loopback/tailnet) → auto-approved
- **Non-local connections** → require explicit pairing approval

### Token Types
- Gateway auth token — validates WS connections
- Device tokens — per-device after pairing approval
- Auth profiles — per-agent provider credentials

### Credential Storage
- API keys: `~/.openclaw/credentials/`
- OAuth: `~/.openclaw/credentials/oauth.json`
- Auth profiles: `~/.openclaw/agents/<id>/agent/auth-profiles.json`

## Sandboxing

### Elevated Mode
- Main agent can be given elevated (less restricted) execution
- Controlled via tool policy
- `sandbox` vs `elevated` tool access

### Tool Safety
- Loop detection — guardrails for repetitive no-progress patterns
- Configurable thresholds
- Auto-pause after N identical calls
- Tool groups for risk-based access

## Safety Patterns (from VENOM)

OpenClaw has equivalents for VENOM's safety hooks:

| VENOM Safety | OpenClaw Equivalent |
|-------------|---------------------|
| `rm -rf` blocking | Exec tool security restrictions |
| `.env` protection | Sensitive file detection |
| Loop detection (3x stall) | Tool loop detection |
| Cost threshold ($1 pause) | Resource limits (200 calls, $5 cost) |
| Pushback protocol | Tool policy framework |

## VPS Security for VENOCTIS

When deploying on Hostinger VPS:
- Gateway behind firewall
- SSH key-only auth (already configured)
- HTTPS via CyberPanel
- Telegram as only exposed channel
- No public API endpoints

## Questions to Answer

- [ ] Full auth token lifecycle — generation, rotation, revocation?
- [ ] Can tools be sandboxed per-execution (not just per-agent)?
- [ ] How does secret management work in workspace?
- [ ] What prevents a sub-agent from accessing parent secrets?
