# 05 — Installation & Deployment

## Prerequisites

- Node.js >= 22
- pnpm (optional, recommended for builds)
- Brave Search API key (recommended)

## Install Methods

### 1. One-line Installer
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 2. NPM Global
```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

### 3. From Source
```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw && pnpm install && pnpm ui:build && pnpm build && pnpm link --global
openclaw onboard --install-daemon
```

## Onboarding Wizard

Configures automatically:
- Model/auth (OAuth or API keys)
- Gateway settings
- Channels (WhatsApp/Telegram/Discord)
- Pairing defaults
- Workspace bootstrap + skills
- Background service (launchd/systemd)

## Platform Support

| Platform | Status | Notes |
|----------|--------|-------|
| macOS | Full | Menu bar app, voice wake, XPC |
| Linux | Full | systemd, WSL2 recommended |
| Windows | WSL2 | Ubuntu recommended |
| Docker | Supported | Community images |
| Fly.io | Deploy target | — |
| Railway | Deploy target | — |
| Render | Deploy target | — |

## VENOCTIS Deployment Map

```
VPS (Hostinger KVM 4 — $8/mo)
└── OpenClaw Gateway (systemd service)
    ├── VENOM config (workspace + SOUL.md + AGENTS.md)
    ├── Telegram channel (notifications)
    ├── GitHub sense (MCP server)
    └── Cron jobs (monitoring schedules)
```

## Questions to Answer

- [ ] Exact resource requirements for Gateway?
- [ ] Can Gateway run on 2GB RAM VPS?
- [ ] Docker compose for VENOCTIS stack?
- [ ] How does update/upgrade work without downtime?
