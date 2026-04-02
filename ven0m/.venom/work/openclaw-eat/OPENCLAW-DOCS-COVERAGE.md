# OpenClaw — full doc coverage map

> **Canonical machine index:** [https://docs.openclaw.ai/llms.txt](https://docs.openclaw.ai/llms.txt) — every page OpenClaw publishes.  
> This file **mirrors that index** by topic, adds **workspace mapping**, and **priority** for VENOM-on-OpenClaw work.  
> **OpenAPI:** [https://docs.openclaw.ai/api-reference/openapi.json](https://docs.openclaw.ai/api-reference/openapi.json)

**How to use:** Check boxes as you read (`[x]`). For reshape work, finish **Tier 1** before deep-diving Tier 3.

---

## Workspace quick map (our notes)

| OpenClaw domain | Where we track it |
|-----------------|-------------------|
| Gateway, WS, auth | `09-source/01-gateway-daemon.md`, `11-protocol.md` |
| Agent loop, Pi stack | `02-agent-loop.md`, `12-pi-agent-core.md` |
| Tools, policy, loop detection | `03-tool-executor.md` |
| Memory, vector, flush | `04-memory-manager.md` |
| Channels | `05-channel-base.md`, `04-channels/` |
| Providers / models | `06-provider-interface.md` |
| Sessions | `07-session-manager.md` |
| Compaction, bootstrap size | `08-compaction-handler.md` |
| Sub-agents | `09-subagent-spawner.md` |
| Plugins / skills | `10-plugin-loader.md`, `05-skills-plugins/` |
| Security, sandbox | `07-security/`, gateway security docs below |
| Big picture | `EAT-SYNTHESIS.md`, `01-anatomy/` |

---

## Tier 1 — reshape-critical (read first)

*Verified 2026-04-01:* English pages below exist under local mirror `openclaw-eat/openclaw-main/docs/` (same paths as `docs.openclaw.ai`). Bootstrap keys cross-checked with [BOOTSTRAP-SPIKE.md](./BOOTSTRAP-SPIKE.md).

**Gateway “API” contract:** OpenClaw’s control plane is **WebSocket + JSON** (handshake, `req`/`res`, events) — **[Gateway Protocol](https://docs.openclaw.ai/gateway/protocol.md)** above ✓, local `openclaw-main/docs/gateway/protocol.md`, eat map `09-source/11-protocol.md`. That is **not** an OpenAPI/REST document. The **`openapi.json`** row below is only for a **separate** docs-site artifact (currently Mintlify sample); leaving it unchecked does **not** block gateway integration work.

- [x] [Pi Integration Architecture](https://docs.openclaw.ai/pi.md) — stack next to `12-pi-agent-core.md`
- [x] [Pi Development Workflow](https://docs.openclaw.ai/pi-dev.md)
- [x] [Agent Bootstrapping](https://docs.openclaw.ai/start/bootstrapping.md)
- [x] [Agent Runtime](https://docs.openclaw.ai/concepts/agent.md)
- [x] [Agent Loop](https://docs.openclaw.ai/concepts/agent-loop.md)
- [x] [Compaction](https://docs.openclaw.ai/concepts/compaction.md)
- [x] [System Prompt](https://docs.openclaw.ai/concepts/system-prompt.md)
- [x] [Session Management Deep Dive](https://docs.openclaw.ai/reference/session-management-compaction.md)
- [x] [Transcript Hygiene](https://docs.openclaw.ai/reference/transcript-hygiene.md)
- [x] [AGENTS.md Template](https://docs.openclaw.ai/reference/templates/AGENTS.md)
- [x] [SOUL.md Template](https://docs.openclaw.ai/reference/templates/SOUL.md)
- [x] [USER Template](https://docs.openclaw.ai/reference/templates/USER.md)
- [x] [TOOLS.md Template](https://docs.openclaw.ai/reference/templates/TOOLS.md)
- [x] [BOOTSTRAP.md Template](https://docs.openclaw.ai/reference/templates/BOOTSTRAP.md)
- [x] [Gateway Runbook](https://docs.openclaw.ai/gateway/index.md)
- [x] [Gateway Protocol](https://docs.openclaw.ai/gateway/protocol.md)
- [x] [Authentication](https://docs.openclaw.ai/gateway/authentication.md)
- [x] [Sandbox vs Tool Policy vs Elevated](https://docs.openclaw.ai/gateway/sandbox-vs-tool-policy-vs-elevated.md)
- [ ] [openapi](https://docs.openclaw.ai/api-reference/openapi.json) (download / skim) — *not in `openclaw-main` repo (search **2026-04-01**). Live fetch **HTTP 200** but JSON is Mintlify **sample** (`OpenAPI Plant Store` / `sandbox.mintlify.com`) — **not** OpenClaw. **Optional** if upstream publishes REST/OpenAPI later; **not** the WS gateway spec (see Gateway Protocol ✓).*

---

## Tier 2 — operations & channels (VENOCTIS / prod)

*Verified 2026-04-01:* English pages below exist under local mirror `openclaw-main/docs/` (paths align with `docs.openclaw.ai`). Skimmed for VENOCTIS prep.

- [x] [Gateway Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference.md)
- [x] [Remote Access](https://docs.openclaw.ai/gateway/remote.md)
- [x] [Tailscale](https://docs.openclaw.ai/gateway/tailscale.md)
- [x] [Secrets Management](https://docs.openclaw.ai/gateway/secrets.md)
- [x] [Health Checks](https://docs.openclaw.ai/gateway/health.md)
- [x] [Chat Channels](https://docs.openclaw.ai/channels/index.md)
- [x] [Telegram](https://docs.openclaw.ai/channels/telegram.md)
- [x] [Discord](https://docs.openclaw.ai/channels/discord.md)
- [x] [WhatsApp](https://docs.openclaw.ai/channels/whatsapp.md)
- [x] [Automation Overview](https://docs.openclaw.ai/automation/index.md)
- [x] [Cron Jobs](https://docs.openclaw.ai/automation/cron-jobs.md)
- [x] [Hooks](https://docs.openclaw.ai/automation/hooks.md)

---

## Tier 3 — complete official index (by section)

*Source: `llms.txt`. Check off as you read; no need to finish before shipping a prototype.*

### Root / misc

*Local paths verified in `openclaw-main/docs/`, 2026-04-01.*

- [x] [OpenClaw](https://docs.openclaw.ai/index.md)
- [x] [Auth Credential Semantics](https://docs.openclaw.ai/auth-credential-semantics.md)
- [x] [CI Pipeline](https://docs.openclaw.ai/ci.md)
- [x] [Date and Time](https://docs.openclaw.ai/date-time.md)
- [x] [Node + tsx Crash](https://docs.openclaw.ai/debug/node-issue.md)
- [x] [Diagnostics Flags](https://docs.openclaw.ai/diagnostics/flags.md)
- [x] [Logging Overview](https://docs.openclaw.ai/logging.md)
- [x] [Network](https://docs.openclaw.ai/network.md)
- [x] [Linux Server](https://docs.openclaw.ai/vps.md)
- [x] [OpenProse](https://docs.openclaw.ai/prose.md)

### Automation

*Local paths verified in `openclaw-main/docs/automation/`, 2026-04-01.*

- [x] [Auth Monitoring](https://docs.openclaw.ai/automation/auth-monitoring.md)
- [x] [ClawFlow](https://docs.openclaw.ai/automation/clawflow.md)
- [x] [Cron Jobs](https://docs.openclaw.ai/automation/cron-jobs.md)
- [x] [Cron vs Heartbeat](https://docs.openclaw.ai/automation/cron-vs-heartbeat.md)
- [x] [Gmail PubSub](https://docs.openclaw.ai/automation/gmail-pubsub.md)
- [x] [Hooks](https://docs.openclaw.ai/automation/hooks.md)
- [x] [Automation Overview](https://docs.openclaw.ai/automation/index.md)
- [x] [Polls](https://docs.openclaw.ai/automation/poll.md)
- [x] [Standing Orders](https://docs.openclaw.ai/automation/standing-orders.md)
- [x] [Background Tasks](https://docs.openclaw.ai/automation/tasks.md)
- [x] [Automation Troubleshooting](https://docs.openclaw.ai/automation/troubleshooting.md)
- [x] [Webhooks](https://docs.openclaw.ai/automation/webhook.md)

### Channels

*Local paths verified: 30 files in `openclaw-main/docs/channels/`, 2026-04-01.*

- [x] [BlueBubbles](https://docs.openclaw.ai/channels/bluebubbles.md)
- [x] [Broadcast Groups](https://docs.openclaw.ai/channels/broadcast-groups.md)
- [x] [Channel Routing](https://docs.openclaw.ai/channels/channel-routing.md)
- [x] [Discord](https://docs.openclaw.ai/channels/discord.md)
- [x] [Feishu](https://docs.openclaw.ai/channels/feishu.md)
- [x] [Google Chat](https://docs.openclaw.ai/channels/googlechat.md)
- [x] [Group Messages](https://docs.openclaw.ai/channels/group-messages.md)
- [x] [Groups](https://docs.openclaw.ai/channels/groups.md)
- [x] [iMessage](https://docs.openclaw.ai/channels/imessage.md)
- [x] [Chat Channels](https://docs.openclaw.ai/channels/index.md)
- [x] [IRC](https://docs.openclaw.ai/channels/irc.md)
- [x] [LINE](https://docs.openclaw.ai/channels/line.md)
- [x] [Channel Location Parsing](https://docs.openclaw.ai/channels/location.md)
- [x] [Matrix](https://docs.openclaw.ai/channels/matrix.md)
- [x] [Mattermost](https://docs.openclaw.ai/channels/mattermost.md)
- [x] [Microsoft Teams](https://docs.openclaw.ai/channels/msteams.md)
- [x] [Nextcloud Talk](https://docs.openclaw.ai/channels/nextcloud-talk.md)
- [x] [Nostr](https://docs.openclaw.ai/channels/nostr.md)
- [x] [Pairing](https://docs.openclaw.ai/channels/pairing.md)
- [x] [QQ Bot](https://docs.openclaw.ai/channels/qqbot.md)
- [x] [Signal](https://docs.openclaw.ai/channels/signal.md)
- [x] [Slack](https://docs.openclaw.ai/channels/slack.md)
- [x] [Synology Chat](https://docs.openclaw.ai/channels/synology-chat.md)
- [x] [Telegram](https://docs.openclaw.ai/channels/telegram.md)
- [x] [Tlon](https://docs.openclaw.ai/channels/tlon.md)
- [x] [Channel Troubleshooting](https://docs.openclaw.ai/channels/troubleshooting.md)
- [x] [Twitch](https://docs.openclaw.ai/channels/twitch.md)
- [x] [WhatsApp](https://docs.openclaw.ai/channels/whatsapp.md)
- [x] [Zalo](https://docs.openclaw.ai/channels/zalo.md)
- [x] [Zalo Personal](https://docs.openclaw.ai/channels/zalouser.md)

### CLI

*Local paths verified: 49 files in `openclaw-main/docs/cli/`, 2026-04-01.*

- [x] [acp](https://docs.openclaw.ai/cli/acp.md)
- [x] [agent](https://docs.openclaw.ai/cli/agent.md)
- [x] [agents](https://docs.openclaw.ai/cli/agents.md)
- [x] [approvals](https://docs.openclaw.ai/cli/approvals.md)
- [x] [backup](https://docs.openclaw.ai/cli/backup.md)
- [x] [browser](https://docs.openclaw.ai/cli/browser.md)
- [x] [channels](https://docs.openclaw.ai/cli/channels.md)
- [x] [clawbot](https://docs.openclaw.ai/cli/clawbot.md)
- [x] [completion](https://docs.openclaw.ai/cli/completion.md)
- [x] [config](https://docs.openclaw.ai/cli/config.md)
- [x] [configure](https://docs.openclaw.ai/cli/configure.md)
- [x] [cron](https://docs.openclaw.ai/cli/cron.md)
- [x] [daemon](https://docs.openclaw.ai/cli/daemon.md)
- [x] [dashboard](https://docs.openclaw.ai/cli/dashboard.md)
- [x] [devices](https://docs.openclaw.ai/cli/devices.md)
- [x] [directory](https://docs.openclaw.ai/cli/directory.md)
- [x] [dns](https://docs.openclaw.ai/cli/dns.md)
- [x] [docs](https://docs.openclaw.ai/cli/docs.md)
- [x] [doctor](https://docs.openclaw.ai/cli/doctor.md)
- [x] [flows](https://docs.openclaw.ai/cli/flows.md)
- [x] [gateway](https://docs.openclaw.ai/cli/gateway.md)
- [x] [health](https://docs.openclaw.ai/cli/health.md)
- [x] [hooks](https://docs.openclaw.ai/cli/hooks.md)
- [x] [CLI Reference](https://docs.openclaw.ai/cli/index.md)
- [x] [logs](https://docs.openclaw.ai/cli/logs.md)
- [x] [mcp](https://docs.openclaw.ai/cli/mcp.md)
- [x] [memory](https://docs.openclaw.ai/cli/memory.md)
- [x] [message](https://docs.openclaw.ai/cli/message.md)
- [x] [models](https://docs.openclaw.ai/cli/models.md)
- [x] [node](https://docs.openclaw.ai/cli/node.md)
- [x] [nodes](https://docs.openclaw.ai/cli/nodes.md)
- [x] [onboard](https://docs.openclaw.ai/cli/onboard.md)
- [x] [pairing](https://docs.openclaw.ai/cli/pairing.md)
- [x] [plugins](https://docs.openclaw.ai/cli/plugins.md)
- [x] [qr](https://docs.openclaw.ai/cli/qr.md)
- [x] [reset](https://docs.openclaw.ai/cli/reset.md)
- [x] [Sandbox CLI](https://docs.openclaw.ai/cli/sandbox.md)
- [x] [secrets](https://docs.openclaw.ai/cli/secrets.md)
- [x] [security](https://docs.openclaw.ai/cli/security.md)
- [x] [sessions](https://docs.openclaw.ai/cli/sessions.md)
- [x] [setup](https://docs.openclaw.ai/cli/setup.md)
- [x] [skills](https://docs.openclaw.ai/cli/skills.md)
- [x] [status](https://docs.openclaw.ai/cli/status.md)
- [x] [system](https://docs.openclaw.ai/cli/system.md)
- [x] [tui](https://docs.openclaw.ai/cli/tui.md)
- [x] [uninstall](https://docs.openclaw.ai/cli/uninstall.md)
- [x] [update](https://docs.openclaw.ai/cli/update.md)
- [x] [voicecall](https://docs.openclaw.ai/cli/voicecall.md)
- [x] [webhooks](https://docs.openclaw.ai/cli/webhooks.md)

### Concepts

*Local paths verified: 33 files in `openclaw-main/docs/concepts/`, 2026-04-01.*

- [x] [Agent Runtime](https://docs.openclaw.ai/concepts/agent.md)
- [x] [Agent Loop](https://docs.openclaw.ai/concepts/agent-loop.md)
- [x] [Agent Workspace](https://docs.openclaw.ai/concepts/agent-workspace.md)
- [x] [Gateway Architecture](https://docs.openclaw.ai/concepts/architecture.md)
- [x] [Compaction](https://docs.openclaw.ai/concepts/compaction.md)
- [x] [Context](https://docs.openclaw.ai/concepts/context.md)
- [x] [Context Engine](https://docs.openclaw.ai/concepts/context-engine.md)
- [x] [Delegate Architecture](https://docs.openclaw.ai/concepts/delegate-architecture.md)
- [x] [Features](https://docs.openclaw.ai/concepts/features.md)
- [x] [Markdown Formatting](https://docs.openclaw.ai/concepts/markdown-formatting.md)
- [x] [Memory Overview](https://docs.openclaw.ai/concepts/memory.md)
- [x] [Builtin Memory Engine](https://docs.openclaw.ai/concepts/memory-builtin.md)
- [x] [Honcho Memory](https://docs.openclaw.ai/concepts/memory-honcho.md)
- [x] [QMD Memory Engine](https://docs.openclaw.ai/concepts/memory-qmd.md)
- [x] [Memory Search](https://docs.openclaw.ai/concepts/memory-search.md)
- [x] [Messages](https://docs.openclaw.ai/concepts/messages.md)
- [x] [Model Failover](https://docs.openclaw.ai/concepts/model-failover.md)
- [x] [Model Providers](https://docs.openclaw.ai/concepts/model-providers.md)
- [x] [Models CLI](https://docs.openclaw.ai/concepts/models.md)
- [x] [Multi-Agent Routing](https://docs.openclaw.ai/concepts/multi-agent.md)
- [x] [OAuth](https://docs.openclaw.ai/concepts/oauth.md)
- [x] [Presence](https://docs.openclaw.ai/concepts/presence.md)
- [x] [Command Queue](https://docs.openclaw.ai/concepts/queue.md)
- [x] [Retry Policy](https://docs.openclaw.ai/concepts/retry.md)
- [x] [Session Management](https://docs.openclaw.ai/concepts/session.md)
- [x] [Session Pruning](https://docs.openclaw.ai/concepts/session-pruning.md)
- [x] [Session Tools](https://docs.openclaw.ai/concepts/session-tool.md)
- [x] [Streaming and Chunking](https://docs.openclaw.ai/concepts/streaming.md)
- [x] [System Prompt](https://docs.openclaw.ai/concepts/system-prompt.md)
- [x] [Timezones](https://docs.openclaw.ai/concepts/timezone.md)
- [x] [TypeBox](https://docs.openclaw.ai/concepts/typebox.md)
- [x] [Typing Indicators](https://docs.openclaw.ai/concepts/typing-indicators.md)
- [x] [Usage Tracking](https://docs.openclaw.ai/concepts/usage-tracking.md)

### Gateway

*Local paths verified: 34 files under `openclaw-main/docs/gateway/` (incl. `security/index.md`), 2026-04-01.*

- [x] [Authentication](https://docs.openclaw.ai/gateway/authentication.md)
- [x] [Background Exec and Process Tool](https://docs.openclaw.ai/gateway/background-process.md)
- [x] [Bonjour Discovery](https://docs.openclaw.ai/gateway/bonjour.md)
- [x] [Bridge Protocol](https://docs.openclaw.ai/gateway/bridge-protocol.md)
- [x] [CLI Backends](https://docs.openclaw.ai/gateway/cli-backends.md)
- [x] [Configuration](https://docs.openclaw.ai/gateway/configuration.md)
- [x] [Configuration Examples](https://docs.openclaw.ai/gateway/configuration-examples.md)
- [x] [Configuration Reference](https://docs.openclaw.ai/gateway/configuration-reference.md)
- [x] [Discovery and Transports](https://docs.openclaw.ai/gateway/discovery.md)
- [x] [Doctor](https://docs.openclaw.ai/gateway/doctor.md)
- [x] [Gateway Lock](https://docs.openclaw.ai/gateway/gateway-lock.md)
- [x] [Health Checks](https://docs.openclaw.ai/gateway/health.md)
- [x] [Heartbeat](https://docs.openclaw.ai/gateway/heartbeat.md)
- [x] [Gateway Runbook](https://docs.openclaw.ai/gateway/index.md)
- [x] [Local Models](https://docs.openclaw.ai/gateway/local-models.md)
- [x] [Gateway Logging](https://docs.openclaw.ai/gateway/logging.md)
- [x] [Multiple Gateways](https://docs.openclaw.ai/gateway/multiple-gateways.md)
- [x] [Network model](https://docs.openclaw.ai/gateway/network-model.md)
- [x] [OpenAI Chat Completions](https://docs.openclaw.ai/gateway/openai-http-api.md)
- [x] [OpenResponses API](https://docs.openclaw.ai/gateway/openresponses-http-api.md)
- [x] [OpenShell](https://docs.openclaw.ai/gateway/openshell.md)
- [x] [Gateway-Owned Pairing](https://docs.openclaw.ai/gateway/pairing.md)
- [x] [Gateway Protocol](https://docs.openclaw.ai/gateway/protocol.md)
- [x] [Remote Access](https://docs.openclaw.ai/gateway/remote.md)
- [x] [Remote Gateway Setup](https://docs.openclaw.ai/gateway/remote-gateway-readme.md)
- [x] [Sandbox vs Tool Policy vs Elevated](https://docs.openclaw.ai/gateway/sandbox-vs-tool-policy-vs-elevated.md)
- [x] [Sandboxing](https://docs.openclaw.ai/gateway/sandboxing.md)
- [x] [Secrets Management](https://docs.openclaw.ai/gateway/secrets.md)
- [x] [Secrets Apply Plan Contract](https://docs.openclaw.ai/gateway/secrets-plan-contract.md)
- [x] [Security](https://docs.openclaw.ai/gateway/security/index.md)
- [x] [Tailscale](https://docs.openclaw.ai/gateway/tailscale.md)
- [x] [Tools Invoke API](https://docs.openclaw.ai/gateway/tools-invoke-http-api.md)
- [x] [Troubleshooting](https://docs.openclaw.ai/gateway/troubleshooting.md)
- [x] [Trusted Proxy Auth](https://docs.openclaw.ai/gateway/trusted-proxy-auth.md)

### Help

*Local paths verified: 7 files under `openclaw-main/docs/help/` (2026-04-01).*

- [x] [Debugging](https://docs.openclaw.ai/help/debugging.md)
- [x] [Environment Variables](https://docs.openclaw.ai/help/environment.md)
- [x] [FAQ](https://docs.openclaw.ai/help/faq.md)
- [x] [Help](https://docs.openclaw.ai/help/index.md)
- [x] [Scripts](https://docs.openclaw.ai/help/scripts.md)
- [x] [Testing](https://docs.openclaw.ai/help/testing.md)
- [x] [General Troubleshooting](https://docs.openclaw.ai/help/troubleshooting.md)

### Install

*Local paths verified: **25** `.md` files under `openclaw-main/docs/install/` (2026-04-01). **Not in this repo snapshot:** `northflank.md`, `railway.md`, `render.md` (listed on docs site / `llms.txt`).*

- [x] [Ansible](https://docs.openclaw.ai/install/ansible.md)
- [x] [Azure](https://docs.openclaw.ai/install/azure.md)
- [x] [Bun (Experimental)](https://docs.openclaw.ai/install/bun.md)
- [x] [ClawDock](https://docs.openclaw.ai/install/clawdock.md)
- [x] [Release Channels](https://docs.openclaw.ai/install/development-channels.md)
- [x] [DigitalOcean](https://docs.openclaw.ai/install/digitalocean.md)
- [x] [Docker](https://docs.openclaw.ai/install/docker.md)
- [x] [Docker VM Runtime](https://docs.openclaw.ai/install/docker-vm-runtime.md)
- [x] [exe.dev](https://docs.openclaw.ai/install/exe-dev.md)
- [x] [Fly.io](https://docs.openclaw.ai/install/fly.md)
- [x] [GCP](https://docs.openclaw.ai/install/gcp.md)
- [x] [Hetzner](https://docs.openclaw.ai/install/hetzner.md)
- [x] [Install](https://docs.openclaw.ai/install/index.md)
- [x] [Installer Internals](https://docs.openclaw.ai/install/installer.md)
- [x] [Kubernetes](https://docs.openclaw.ai/install/kubernetes.md)
- [x] [macOS VMs](https://docs.openclaw.ai/install/macos-vm.md)
- [x] [Migration Guide](https://docs.openclaw.ai/install/migrating.md)
- [x] [Matrix migration](https://docs.openclaw.ai/install/migrating-matrix.md)
- [x] [Nix](https://docs.openclaw.ai/install/nix.md)
- [x] [Node.js](https://docs.openclaw.ai/install/node.md)
- [ ] [Northflank](https://docs.openclaw.ai/install/northflank.md)
- [x] [Oracle Cloud](https://docs.openclaw.ai/install/oracle.md)
- [x] [Podman](https://docs.openclaw.ai/install/podman.md)
- [ ] [Railway](https://docs.openclaw.ai/install/railway.md)
- [x] [Raspberry Pi](https://docs.openclaw.ai/install/raspberry-pi.md)
- [ ] [Render](https://docs.openclaw.ai/install/render.md)
- [x] [Uninstall](https://docs.openclaw.ai/install/uninstall.md)
- [x] [Updating](https://docs.openclaw.ai/install/updating.md)

### Nodes

*Local paths verified: **9** files under `openclaw-main/docs/nodes/` (2026-04-01).*

- [x] [Audio and Voice Notes](https://docs.openclaw.ai/nodes/audio.md)
- [x] [Camera Capture](https://docs.openclaw.ai/nodes/camera.md)
- [x] [Image and Media Support](https://docs.openclaw.ai/nodes/images.md)
- [x] [Nodes](https://docs.openclaw.ai/nodes/index.md)
- [x] [Location Command](https://docs.openclaw.ai/nodes/location-command.md)
- [x] [Media Understanding](https://docs.openclaw.ai/nodes/media-understanding.md)
- [x] [Talk Mode](https://docs.openclaw.ai/nodes/talk.md)
- [x] [Node Troubleshooting](https://docs.openclaw.ai/nodes/troubleshooting.md)
- [x] [Voice Wake](https://docs.openclaw.ai/nodes/voicewake.md)

### Pi

*Local paths verified: `openclaw-main/docs/pi.md`, `openclaw-main/docs/pi-dev.md` (2026-04-01).*

- [x] [Pi Integration Architecture](https://docs.openclaw.ai/pi.md)
- [x] [Pi Development Workflow](https://docs.openclaw.ai/pi-dev.md)

### Platforms

*Local paths verified: **23** checklist paths under `openclaw-main/docs/platforms/` match `llms.txt` (2026-04-01). **Also on disk (not in this checklist):** `digitalocean.md`, `oracle.md`, `raspberry-pi.md` at `platforms/` root.*

- [x] [Platforms](https://docs.openclaw.ai/platforms/index.md)
- [x] [Android App](https://docs.openclaw.ai/platforms/android.md)
- [x] [iOS App](https://docs.openclaw.ai/platforms/ios.md)
- [x] [Linux App](https://docs.openclaw.ai/platforms/linux.md)
- [x] [macOS App](https://docs.openclaw.ai/platforms/macos.md)
- [x] [Windows](https://docs.openclaw.ai/platforms/windows.md)
- [x] [Gateway on macOS](https://docs.openclaw.ai/platforms/mac/bundled-gateway.md)
- [x] [Canvas](https://docs.openclaw.ai/platforms/mac/canvas.md)
- [x] [Gateway Lifecycle](https://docs.openclaw.ai/platforms/mac/child-process.md)
- [x] [macOS Dev Setup](https://docs.openclaw.ai/platforms/mac/dev-setup.md)
- [x] [Health Checks (macOS)](https://docs.openclaw.ai/platforms/mac/health.md)
- [x] [Menu Bar Icon](https://docs.openclaw.ai/platforms/mac/icon.md)
- [x] [macOS Logging](https://docs.openclaw.ai/platforms/mac/logging.md)
- [x] [Menu Bar](https://docs.openclaw.ai/platforms/mac/menu-bar.md)
- [x] [Peekaboo Bridge](https://docs.openclaw.ai/platforms/mac/peekaboo.md)
- [x] [macOS Permissions](https://docs.openclaw.ai/platforms/mac/permissions.md)
- [x] [Remote Control](https://docs.openclaw.ai/platforms/mac/remote.md)
- [x] [macOS Signing](https://docs.openclaw.ai/platforms/mac/signing.md)
- [x] [Skills (macOS)](https://docs.openclaw.ai/platforms/mac/skills.md)
- [x] [Voice Overlay](https://docs.openclaw.ai/platforms/mac/voice-overlay.md)
- [x] [Voice Wake (macOS)](https://docs.openclaw.ai/platforms/mac/voicewake.md)
- [x] [WebChat (macOS)](https://docs.openclaw.ai/platforms/mac/webchat.md)
- [x] [macOS IPC](https://docs.openclaw.ai/platforms/mac/xpc.md)

### Plugins

*Local paths verified: **14** checklist paths under `openclaw-main/docs/plugins/` (2026-04-01). **Also on disk (not in this checklist):** `agent-tools.md`, `building-extensions.md`, `zalouser.md`.*

- [x] [Plugin Internals](https://docs.openclaw.ai/plugins/architecture.md)
- [x] [Building Plugins](https://docs.openclaw.ai/plugins/building-plugins.md)
- [x] [Plugin Bundles](https://docs.openclaw.ai/plugins/bundles.md)
- [x] [Community Plugins](https://docs.openclaw.ai/plugins/community.md)
- [x] [Plugin Manifest](https://docs.openclaw.ai/plugins/manifest.md)
- [x] [Building Channel Plugins](https://docs.openclaw.ai/plugins/sdk-channel-plugins.md)
- [x] [Plugin Entry Points](https://docs.openclaw.ai/plugins/sdk-entrypoints.md)
- [x] [Plugin SDK Migration](https://docs.openclaw.ai/plugins/sdk-migration.md)
- [x] [Plugin SDK Overview](https://docs.openclaw.ai/plugins/sdk-overview.md)
- [x] [Building Provider Plugins](https://docs.openclaw.ai/plugins/sdk-provider-plugins.md)
- [x] [Plugin Runtime Helpers](https://docs.openclaw.ai/plugins/sdk-runtime.md)
- [x] [Plugin Setup and Config](https://docs.openclaw.ai/plugins/sdk-setup.md)
- [x] [Plugin Testing](https://docs.openclaw.ai/plugins/sdk-testing.md)
- [x] [Voice Call Plugin](https://docs.openclaw.ai/plugins/voice-call.md)

### Providers

*Local paths verified: **38** files under `openclaw-main/docs/providers/` (2026-04-01).*

- [x] [Provider Directory](https://docs.openclaw.ai/providers/index.md)
- [x] [Model Provider Quickstart](https://docs.openclaw.ai/providers/models.md)
- [x] [Anthropic](https://docs.openclaw.ai/providers/anthropic.md)
- [x] [Amazon Bedrock](https://docs.openclaw.ai/providers/bedrock.md)
- [x] [Claude Max API Proxy](https://docs.openclaw.ai/providers/claude-max-api-proxy.md)
- [x] [Cloudflare AI Gateway](https://docs.openclaw.ai/providers/cloudflare-ai-gateway.md)
- [x] [Deepgram](https://docs.openclaw.ai/providers/deepgram.md)
- [x] [Deepseek](https://docs.openclaw.ai/providers/deepseek.md)
- [x] [GitHub Copilot](https://docs.openclaw.ai/providers/github-copilot.md)
- [x] [GLM Models](https://docs.openclaw.ai/providers/glm.md)
- [x] [Google (Gemini)](https://docs.openclaw.ai/providers/google.md)
- [x] [Groq](https://docs.openclaw.ai/providers/groq.md)
- [x] [Hugging Face (Inference)](https://docs.openclaw.ai/providers/huggingface.md)
- [x] [Kilo Gateway](https://docs.openclaw.ai/providers/kilocode.md)
- [x] [LiteLLM](https://docs.openclaw.ai/providers/litellm.md)
- [x] [MiniMax](https://docs.openclaw.ai/providers/minimax.md)
- [x] [Mistral](https://docs.openclaw.ai/providers/mistral.md)
- [x] [Moonshot AI](https://docs.openclaw.ai/providers/moonshot.md)
- [x] [NVIDIA](https://docs.openclaw.ai/providers/nvidia.md)
- [x] [Ollama](https://docs.openclaw.ai/providers/ollama.md)
- [x] [OpenAI](https://docs.openclaw.ai/providers/openai.md)
- [x] [OpenCode](https://docs.openclaw.ai/providers/opencode.md)
- [x] [OpenCode Go](https://docs.openclaw.ai/providers/opencode-go.md)
- [x] [OpenRouter](https://docs.openclaw.ai/providers/openrouter.md)
- [x] [Perplexity (Provider)](https://docs.openclaw.ai/providers/perplexity-provider.md)
- [x] [Qianfan](https://docs.openclaw.ai/providers/qianfan.md)
- [x] [Qwen](https://docs.openclaw.ai/providers/qwen.md)
- [x] [Qwen / Model Studio](https://docs.openclaw.ai/providers/qwen_modelstudio.md)
- [x] [SGLang](https://docs.openclaw.ai/providers/sglang.md)
- [x] [Synthetic](https://docs.openclaw.ai/providers/synthetic.md)
- [x] [Together AI](https://docs.openclaw.ai/providers/together.md)
- [x] [Venice AI](https://docs.openclaw.ai/providers/venice.md)
- [x] [Vercel AI Gateway](https://docs.openclaw.ai/providers/vercel-ai-gateway.md)
- [x] [vLLM](https://docs.openclaw.ai/providers/vllm.md)
- [x] [Volcengine (Doubao)](https://docs.openclaw.ai/providers/volcengine.md)
- [x] [xAI](https://docs.openclaw.ai/providers/xai.md)
- [x] [Xiaomi MiMo](https://docs.openclaw.ai/providers/xiaomi.md)
- [x] [Z.AI](https://docs.openclaw.ai/providers/zai.md)

### Reference

*Local paths verified: **22** checklist paths under `openclaw-main/docs/reference/**` (2026-04-01). **Also on disk (not in this checklist):** `templates/AGENTS.dev.md`, `CLAUDE.md`, `IDENTITY.dev.md`, `SOUL.dev.md`, `TOOLS.dev.md`, `USER.dev.md`.*

- [x] [Default AGENTS.md](https://docs.openclaw.ai/reference/AGENTS.default.md)
- [x] [Release Policy](https://docs.openclaw.ai/reference/RELEASING.md)
- [x] [API Usage and Costs](https://docs.openclaw.ai/reference/api-usage-costs.md)
- [x] [Credits](https://docs.openclaw.ai/reference/credits.md)
- [x] [Device Model Database](https://docs.openclaw.ai/reference/device-models.md)
- [x] [Memory configuration reference](https://docs.openclaw.ai/reference/memory-config.md)
- [x] [Prompt Caching](https://docs.openclaw.ai/reference/prompt-caching.md)
- [x] [RPC Adapters](https://docs.openclaw.ai/reference/rpc.md)
- [x] [SecretRef Credential Surface](https://docs.openclaw.ai/reference/secretref-credential-surface.md)
- [x] [Session Management Deep Dive](https://docs.openclaw.ai/reference/session-management-compaction.md)
- [x] [AGENTS.md Template](https://docs.openclaw.ai/reference/templates/AGENTS.md)
- [x] [BOOT.md Template](https://docs.openclaw.ai/reference/templates/BOOT.md)
- [x] [BOOTSTRAP.md Template](https://docs.openclaw.ai/reference/templates/BOOTSTRAP.md)
- [x] [HEARTBEAT.md Template](https://docs.openclaw.ai/reference/templates/HEARTBEAT.md)
- [x] [IDENTITY Template](https://docs.openclaw.ai/reference/templates/IDENTITY.md)
- [x] [SOUL.md Template](https://docs.openclaw.ai/reference/templates/SOUL.md)
- [x] [TOOLS.md Template](https://docs.openclaw.ai/reference/templates/TOOLS.md)
- [x] [USER Template](https://docs.openclaw.ai/reference/templates/USER.md)
- [x] [Tests](https://docs.openclaw.ai/reference/test.md)
- [x] [Token Use and Costs](https://docs.openclaw.ai/reference/token-use.md)
- [x] [Transcript Hygiene](https://docs.openclaw.ai/reference/transcript-hygiene.md)
- [x] [Onboarding Reference](https://docs.openclaw.ai/reference/wizard.md)

### Security

*Local paths verified: **3** files under `openclaw-main/docs/security/` (2026-04-01).*

- [x] [Contributing to the Threat Model](https://docs.openclaw.ai/security/CONTRIBUTING-THREAT-MODEL.md)
- [x] [Threat Model (MITRE ATLAS)](https://docs.openclaw.ai/security/THREAT-MODEL-ATLAS.md)
- [x] [Formal Verification (Security Models)](https://docs.openclaw.ai/security/formal-verification.md)

### Start

- [ ] [Agent Bootstrapping](https://docs.openclaw.ai/start/bootstrapping.md)
- [ ] [Docs directory](https://docs.openclaw.ai/start/docs-directory.md)
- [ ] [Getting Started](https://docs.openclaw.ai/start/getting-started.md)
- [ ] [Docs Hubs](https://docs.openclaw.ai/start/hubs.md)
- [ ] [OpenClaw Lore](https://docs.openclaw.ai/start/lore.md)
- [ ] [Onboarding (macOS App)](https://docs.openclaw.ai/start/onboarding.md)
- [ ] [Onboarding Overview](https://docs.openclaw.ai/start/onboarding-overview.md)
- [ ] [Personal Assistant Setup](https://docs.openclaw.ai/start/openclaw.md)
- [ ] [Setup](https://docs.openclaw.ai/start/setup.md)
- [ ] [Showcase](https://docs.openclaw.ai/start/showcase.md)
- [ ] [Onboarding (CLI)](https://docs.openclaw.ai/start/wizard.md)
- [ ] [CLI Automation](https://docs.openclaw.ai/start/wizard-cli-automation.md)
- [ ] [CLI Setup Reference](https://docs.openclaw.ai/start/wizard-cli-reference.md)

### Tools

- [ ] [Tools and Plugins](https://docs.openclaw.ai/tools/index.md)
- [ ] [ACP Agents](https://docs.openclaw.ai/tools/acp-agents.md)
- [ ] [Agent Send](https://docs.openclaw.ai/tools/agent-send.md)
- [ ] [apply_patch Tool](https://docs.openclaw.ai/tools/apply-patch.md)
- [ ] [Brave Search](https://docs.openclaw.ai/tools/brave-search.md)
- [ ] [Browser (OpenClaw-managed)](https://docs.openclaw.ai/tools/browser.md)
- [ ] [Browser Troubleshooting](https://docs.openclaw.ai/tools/browser-linux-troubleshooting.md)
- [ ] [Browser Login](https://docs.openclaw.ai/tools/browser-login.md)
- [ ] [WSL2 + Windows + remote Chrome CDP troubleshooting](https://docs.openclaw.ai/tools/browser-wsl2-windows-remote-cdp-troubleshooting.md)
- [ ] [BTW Side Questions](https://docs.openclaw.ai/tools/btw.md)
- [ ] [ClawHub](https://docs.openclaw.ai/tools/clawhub.md)
- [ ] [Code Execution](https://docs.openclaw.ai/tools/code-execution.md)
- [ ] [Creating Skills](https://docs.openclaw.ai/tools/creating-skills.md)
- [ ] [Diffs](https://docs.openclaw.ai/tools/diffs.md)
- [ ] [DuckDuckGo Search](https://docs.openclaw.ai/tools/duckduckgo-search.md)
- [ ] [Elevated Mode](https://docs.openclaw.ai/tools/elevated.md)
- [ ] [Exa Search](https://docs.openclaw.ai/tools/exa-search.md)
- [ ] [Exec Tool](https://docs.openclaw.ai/tools/exec.md)
- [ ] [Exec Approvals](https://docs.openclaw.ai/tools/exec-approvals.md)
- [ ] [Firecrawl](https://docs.openclaw.ai/tools/firecrawl.md)
- [ ] [Gemini Search](https://docs.openclaw.ai/tools/gemini-search.md)
- [ ] [Grok Search](https://docs.openclaw.ai/tools/grok-search.md)
- [ ] [Image Generation](https://docs.openclaw.ai/tools/image-generation.md)
- [ ] [Kimi Search](https://docs.openclaw.ai/tools/kimi-search.md)
- [ ] [LLM Task](https://docs.openclaw.ai/tools/llm-task.md)
- [ ] [Lobster](https://docs.openclaw.ai/tools/lobster.md)
- [ ] [Tool-loop detection](https://docs.openclaw.ai/tools/loop-detection.md)
- [ ] [Multi-Agent Sandbox & Tools](https://docs.openclaw.ai/tools/multi-agent-sandbox-tools.md)
- [ ] [PDF Tool](https://docs.openclaw.ai/tools/pdf.md)
- [ ] [Perplexity Search](https://docs.openclaw.ai/tools/perplexity-search.md)
- [ ] [Plugins](https://docs.openclaw.ai/tools/plugin.md)
- [ ] [Reactions](https://docs.openclaw.ai/tools/reactions.md)
- [ ] [Skills](https://docs.openclaw.ai/tools/skills.md)
- [ ] [Skills Config](https://docs.openclaw.ai/tools/skills-config.md)
- [ ] [Slash Commands](https://docs.openclaw.ai/tools/slash-commands.md)
- [ ] [Sub-Agents](https://docs.openclaw.ai/tools/subagents.md)
- [ ] [Tavily](https://docs.openclaw.ai/tools/tavily.md)
- [ ] [Thinking Levels](https://docs.openclaw.ai/tools/thinking.md)
- [ ] [Text-to-Speech](https://docs.openclaw.ai/tools/tts.md)
- [ ] [Web Search](https://docs.openclaw.ai/tools/web.md)
- [ ] [Web Fetch](https://docs.openclaw.ai/tools/web-fetch.md)

### Web UI

- [ ] [Web](https://docs.openclaw.ai/web/index.md)
- [ ] [Control UI](https://docs.openclaw.ai/web/control-ui.md)
- [ ] [Dashboard](https://docs.openclaw.ai/web/dashboard.md)
- [ ] [TUI](https://docs.openclaw.ai/web/tui.md)
- [ ] [WebChat](https://docs.openclaw.ai/web/webchat.md)

### OpenAPI

- [ ] [openapi](https://docs.openclaw.ai/api-reference/openapi.json)

---

## GitHub (code + issues, not in llms.txt)

- [ ] [openclaw/openclaw](https://github.com/openclaw/openclaw) — read `README`, scan `packages/`, watch Releases

---

*Generated from `llms.txt` snapshot 2026-03-31. When docs add pages, re-fetch [llms.txt](https://docs.openclaw.ai/llms.txt) and merge new lines.*
