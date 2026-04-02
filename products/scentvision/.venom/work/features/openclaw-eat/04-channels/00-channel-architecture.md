# 04 — Channels: 25+ Integrations

## Channel Architecture

All channels plug into the Gateway via a unified interface. The Gateway routes messages to/from channels and the agent.

```
Channel (WhatsApp/Telegram/...)
    ↓ message
Gateway (routes + transforms)
    ↓ unified format
Agent (processes)
    ↓ response
Gateway (routes back)
    ↓ channel-specific format
Channel
```

## Primary Channels

| Channel | Library | Auth | Setup Difficulty |
|---------|---------|------|-----------------|
| WhatsApp | Baileys | QR pairing | Medium |
| Telegram | grammY | Bot token | Easy |
| Discord | Bot API | Bot token | Easy |
| Slack | Bolt SDK | Bot token | Medium |
| Signal | signal-cli | Phone number | Hard |
| IRC | Built-in | None | Easy |
| Matrix | Protocol plugin | Access token | Medium |
| iMessage | BlueBubbles | Mac required | Hard |
| Google Chat | HTTP webhook | Service account | Medium |
| Microsoft Teams | Bot Framework | App registration | Hard |
| Mattermost | Bot API + WS | Bot token | Medium |
| LINE | Messaging API | Channel token | Medium |
| Nostr | NIP-04 DM | Key pair | Easy |
| Twitch | IRC | OAuth | Easy |
| Feishu/Lark | WebSocket | App credentials | Medium |
| Synology Chat | Webhook | Token | Easy |
| Nextcloud Talk | Plugin | Token | Easy |
| Tlon | Urbit | Ship + key | Hard |
| Zalo | Bot API | App ID + secret | Medium |
| Zalo Personal | QR login | QR scan | Easy |

## DM Pairing

- Users must pair with the agent before it responds
- Allowlists enforced
- Local connections (loopback/tailnet) auto-approved
- Non-local requires explicit approval

## Group Behavior

- Agent can be invited to groups
- Channel-specific behavior (polls, reactions, threads)
- Thread binding for sub-agents (Discord)

## VENOCTIS Channel Plan

Primary notification channel: **Telegram**
- Overnight reports
- Code review alerts
- GitHub activity
- Task summaries
- Research digests

Secondary: **Discord** (if needed for team)
Future: **WhatsApp** (personal notifications)

## Questions to Answer

- [ ] How does message formatting differ per channel?
- [ ] Image/file support per channel?
- [ ] Rate limiting per channel?
- [ ] Can one conversation span multiple channels?
- [ ] How does pairing work for Telegram specifically?
