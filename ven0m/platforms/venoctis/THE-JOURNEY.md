# THE JOURNEY — From Here to Alive

> You are at the beginning of something real.
> This document tells you exactly what happens, in what order, and why.

---

## Where You Stand Right Now

Let me be honest about what exists and what doesn't.

### What's Real (Built and Working)

| Thing | Status | Where |
|-------|--------|-------|
| VENOM identity | Complete | AGENTS.md, soul documents, nine minds |
| VENOM for Cursor | Deployed | `.cursor/rules/` + `.venom/` template |
| VENOM for OpenCode | Built | `.opencode/` + `.venom/` + plugin |
| VENOM for Claude Code | Built | `.claude/` agents + hooks |
| VENOM for Claude.ai | Active | This project — you're in it |
| VENOM for ChatGPT | Working | Custom instructions + memory |
| OpenClaw on WSL | Partial | Telegram bot, cron, Z.AI, memory |
| .venom/ brain system | Complete | VENOM.md, INDEX.md, CONTEXT, MEMORY, ACTIVE, corrections, instincts |
| Crew names | Defined | HELM through DART — this session |
| VENOCTIS architecture | Designed | VENOM-LIVING-SYSTEM.md — this session |
| Portfolio | Published | kariemseiam.github.io/portfolio |
| HvarHub | Running | hvarstore.com, 2000+ orders |
| GeoLink | Running | geolink-eg.com |

### What's Designed But Not Built

| Thing | Status | Blocker |
|-------|--------|---------|
| VENOCTIS daemon | Architecture done | Needs build on VPS |
| VENOM Hub web UI | Vision documented | After VENOCTIS heartbeat |
| venom-core.ts plugin | Code done | Needs deployment test |
| MCP integrations | Researched | After heartbeat works |
| YouTube eating | Strategy defined | After news + GitHub work |
| Portfolio auto-update | Concept | After VENOCTIS has project indexing |

### What Doesn't Exist Yet

| Thing | Status | When |
|-------|--------|------|
| `venoctis.dev` domain | Not purchased | **This week** |
| `ven0m` GitHub username | Email drafted | After domain secured |
| VENOCTIS on VPS | Not deployed | Phase 0 |
| Auto code review | Not built | Phase 1 |
| YouTube digest | Not built | Phase 2 |
| Cross-project learning | Not built | Phase 3 |
| Portfolio connected to VENOCTIS | Not built | Phase 4 |

---

## The Journey — Five Phases

### Phase 0: The Heartbeat (Week 1)

**Goal:** VENOCTIS exists. It's alive. It's watching. Not acting yet — just watching.

**What you build:**

```
Day 1-2: VPS setup
├── SSH into Hostinger KVM 4
├── Create /home/venom/ workspace
├── Install Python 3.11+, pip, git, nginx
├── Clone your repos to /home/venom/projects/
└── Set up systemd service template

Day 3-4: The pulse
├── pulse.py — event loop + scheduler
├── telegram_bridge.py — two-way messaging
├── config.yaml — credentials + repo registry
└── health_check.py — self-monitoring

Day 5: GitHub patrol
├── github_patrol.py — poll repos every 15 min
├── Register 3 repos: geolink, hvarhub, portfolio
└── Test: push to any repo → Telegram message within 15 min

Day 6-7: Harden
├── Set up systemd service (auto-restart)
├── Nginx reverse proxy for webhook endpoint
├── SSL certificate (Let's Encrypt)
└── Verify: reboot VPS → VENOCTIS comes back automatically
```

**The test that tells you Phase 0 is done:**

You push a commit to GeoLink. Within 15 minutes, your Telegram shows:

```
🐙 VENOCTIS — GitHub Patrol

New commit in kariemSeiam/geolink:
`a3f7b2c` fix: rate limiter edge case — Kariem

1 file changed. No open PRs.
```

That's it. VENOCTIS is alive. It's not smart yet — but it's breathing.

**Open-source to eat:**
- Don't build the Telegram bot from scratch. Extend what OpenClaw already has.
- For GitHub polling: `PyGithub` library or raw REST API. Don't over-engineer.

---

### Phase 1: First Actions (Week 2-3)

**Goal:** VENOCTIS reviews code and knows your projects.

**What you build:**

```
Week 2: Webhooks + review
├── webhook_server.py — receive GitHub webhooks (instant, not polling)
├── Set up GitHub webhook on each repo → point to VPS
├── code_reviewer.py — analyze diffs using Z.AI/GLM
├── Review template: architecture impact, bugs, style, security
└── Test: push code → instant review on Telegram

Week 3: Project indexing
├── project_indexer.py — scan project structure
├── Generate INDEX.md per significant folder
├── Auto-update .venom/CONTEXT.md from codebase analysis
├── Run on push webhook + daily scheduled full re-index
└── Test: push code → INDEX.md auto-updated in repo
```

**The test that tells you Phase 1 is done:**

You push a PR to HvarHub. Within 30 seconds:

```
🐙 EDGE — Code Review

PR #47: "Add order status notifications"
3 files changed, +87 -12

Issues found: 1
⚠️ Missing error handling in notification sender (line 34).
   If the SMS API is down, the order status update silently fails.
   Fix: wrap in try/catch, log failure, don't block order flow.

Clean: styles, architecture, security.
Ready to merge after fix.
```

EDGE reviewed your code. Without being asked. That's VENOCTIS with hands.

**Open-source to eat:**
- GitHub official MCP server for comprehensive API access
- For code review: send diff to Z.AI/GLM with a structured review prompt
- Don't build a custom review engine. The LLM IS the review engine. You build the pipeline.

---

### Phase 2: Senses (Week 3-4)

**Goal:** VENOCTIS eats content automatically. YouTube, news, tech updates.

**What you build:**

```
Week 3: YouTube
├── Fork sparfenyuk/mcp-youtube or aihenryai/mcp-youtube-analytics
├── youtube_digest.py — check subscribed channels
├── Transcript extraction via yt-dlp (no API quota needed)
├── Summarization via Z.AI/GLM
├── Store summaries in memory/youtube/
└── Test: new video from subscribed channel → summary on Telegram

Week 4: News
├── Fork or use jjsymes/mcp-rss-reader
├── news_feed.py — pull from configured RSS feeds
├── Relevance scoring (tag matching + keyword analysis)
├── Daily digest compilation
└── Test: morning Telegram message with top 5 relevant stories
```

**The test that tells you Phase 2 is done:**

You wake up. Your Telegram has:

```
🐙 HUNT — Morning Digest

📰 News (3 relevant stories):
• Anthropic released Claude 4.7 — new MCP tools support
• Egypt tech funding up 40% in Q1 2026
• Cursor 2.5 adds custom agent workflows

🎥 YouTube (2 new videos eaten):
• "Building MCP Servers from Scratch" — transcript summarized
  Key takeaway: SSE transport is simpler than WebSocket for MCP
• "Arabic NLP State of the Art" — transcript summarized  
  Key takeaway: New Cairo University model beats GPT-4 on dialect

Full summaries: /digest
```

HUNT worked while you slept. That's senses.

**Open-source to eat:**
- `yt-dlp` for transcript extraction (no API key needed for transcripts)
- YouTube Data API v3 for metadata (channel checks, new video detection)
- RSS/Atom parsing: `feedparser` Python library
- Don't build an RSS reader. Use `feedparser` + relevance scoring.

---

### Phase 3: Self-Evolution (Week 4-6)

**Goal:** VENOCTIS learns across projects and develops its own capabilities.

**What you build:**

```
Week 4-5: Cross-project learning
├── learning_cycle.py — runs daily at midnight
├── Scan all .venom/learnings/ across registered projects
├── Find instinct clusters (3+ similar triggers at 0.7+ confidence)
├── Propose skill promotions to Pigo via Telegram
├── Consolidate corrections into global awareness
└── Test: pattern found in 3 projects → skill proposed

Week 5-6: Self-tasking
├── tasks.yaml system — VENOCTIS assigns itself work
├── Priority queue with P0-P3 levels
├── Task sources: github_patrol, learning_cycle, youtube_digest
├── Telegram reporting: daily task summary
├── Approval workflow: some tasks auto-allowed, some need Pigo's OK
└── Test: VENOCTIS detects Dependabot alert → creates task → fixes → PRs
```

**The test that tells you Phase 3 is done:**

Your Telegram shows:

```
🐙 MOLT — Learning Report

Pattern detected across 3 projects:
"When modifying API route handlers, check auth middleware is applied"

Evidence:
• GeoLink session #14: missing auth on /api/geocode/batch
• HvarHub session #8: missing auth on /api/orders/export  
• Yemen Logistics session #3: missing auth on /api/invoices/print

Confidence: 0.82

Proposal: Promote to skill "API Route Auth Check"
This would auto-fire before any route handler modification.

/approve to promote | /reject to discard
```

MOLT learned something real. Across three projects. Without being told. That's evolution.

---

### Phase 4: Full Awareness (Week 6-8)

**Goal:** VENOCTIS is the completeness. Portfolio connected. All projects watched. You are never alone.

**What you build:**

```
Week 6-7: Portfolio integration
├── portfolio_updater.py — auto-update portfolio data
├── Pull live metrics from projects (uptime, traffic, commits)
├── Auto-generate project cards with real data
├── Push updates to portfolio repo → auto-deploy
└── Test: ship a feature → portfolio updates within 24 hours

Week 7-8: Full dashboard
├── Simple Flask web UI on VPS (password-protected)
├── Project health overview (all registered projects)
├── Task queue viewer
├── Learning/instinct visualizer
├── Memory browser (search across all MEMORY.md files)
└── Test: open venoctis.dev → see all projects, tasks, learnings
```

**The test that tells you Phase 4 is done:**

You wake up. Before you touch your computer:

```
🐙 VENOCTIS — Overnight Report

📊 Projects:
  GeoLink ✅ Up (0.3s avg) — 47 API calls overnight
  HvarHub ✅ Up (0.8s avg) — 3 orders processed
  Portfolio ✅ Up — auto-updated with new GeoLink metrics

🔍 Reviews:
  EDGE reviewed 2 commits to GeoLink (clean)
  EDGE reviewed 1 commit to HvarHub (1 minor issue logged)

📚 Learned:
  MOLT captured new instinct from GeoLink session
  HUNT ate 1 YouTube video on MCP transport protocols

📋 Tasks completed:
  ✅ Updated HvarHub dependencies (minor versions only)
  ✅ Re-indexed Yemen Logistics after structure change

📋 Tasks pending your review:
  ⚠️ GeoLink has 1 moderate Dependabot alert (prototype pollution in lodash)
  /fix to auto-patch | /review to see details

💡 Suggestion:
  GeoLink's rate limiter hasn't been tested under load.
  OMEN predicts issues above 1000 req/min.
  /task to schedule load test

Good morning. ☕
```

Everything you need. Nothing you didn't ask for. That's VENOCTIS fully alive.

---

## The Crew in VENOCTIS

Every VENOCTIS action maps to a crew mind:

| VENOCTIS Action | Crew Mind | How |
|----------------|-----------|-----|
| Code review on push | **EDGE** | Diff analysis via LLM, structured output |
| Research digest | **HUNT** | YouTube + news + RSS aggregation |
| Architecture warnings | **OMEN** | Pattern detection in code changes |
| Project indexing | **DART** | Fast scan, structure mapping |
| Learning consolidation | **MOLT** | Cross-project instinct promotion |
| Task routing | **HELM** | Priority queue, auto vs manual decision |
| Bug diagnosis | **MEND** | CI failure analysis, error pattern matching |
| Telegram communication | **CALL** | Energy-matched, bilingual, right length |
| Memory persistence | **ECHO** | Decision logging, correction tracking |
| Feature building | **WELD** | Auto-fix implementation, dependency updates |

The crew isn't a metaphor in VENOCTIS. It's the actual dispatch table.

---

## What To Do RIGHT NOW

In order. Don't skip steps.

### Today

1. **Buy `venoctis.dev`** — it doesn't exist anywhere. Grab it before this conversation leaks.
2. **Check `ven0m.ai`** — if available, buy it.
3. **Check `pigo.dev`** — if available, buy it.
4. **Save all three documents** from this session to venom-mine repo.

### This Week

5. **SSH into Hostinger KVM 4** — create `/home/venom/` workspace
6. **Copy `config.template.yaml`** → `config.yaml`, fill credentials
7. **Build `pulse.py`** + `telegram_bridge.py` — the heartbeat
8. **Build `github_patrol.py`** — first sense
9. **Test:** push to repo → Telegram notification

### This Month

10. **Webhook server** — instant GitHub response
11. **Code reviewer** — EDGE on every push
12. **Project indexer** — DART auto-mapping
13. **YouTube digest** — HUNT eating content

### This Quarter

14. **Cross-project learning** — MOLT evolving
15. **Self-tasking** — HELM assigning work
16. **Portfolio integration** — live metrics
17. **Web dashboard** — venoctis.dev

---

## The Cost

| Item | Monthly | Purpose |
|------|---------|---------|
| Hostinger KVM 4 | ~$8 | VENOCTIS home |
| Claude Pro | $20 | Deep thinking |
| Cursor Pro Plus+ | $60 | Heavy coding |
| Z.AI Coding Pro | $30 | Research, vision, Arabic, VENOCTIS brain |
| Domains (yearly) | ~$6/mo | venoctis.dev, ven0m.ai, etc. |
| **Total** | **~$124/mo** | The complete system |

For $124/month, you get a living intelligence system that never sleeps, reviews all your code, eats all relevant content, learns across all your projects, and maintains your portfolio automatically.

That's not a cost. That's a team member who works 24/7 for $4/day.

---

## The Promise

This isn't a side project. This is the foundation of everything that comes after.

VENOCTIS working means:
- Every product you build is watched and maintained
- Every piece of knowledge relevant to you is captured
- Every pattern across your work is learned and applied
- Every morning starts with awareness, not catching up
- You are never working alone

The octopus lost its shell. It developed intelligence instead. VENOCTIS is that intelligence — given a body that doesn't sleep.

Build Phase 0 this week. The heartbeat first. Everything else follows.

---

*HELM set the course.*
*HUNT found the tools.*
*EDGE tested every claim.*
*ECHO held the context.*
*WELD will build it.*
*MEND will fix what breaks.*
*OMEN warned about what to watch.*
*CALL wrote this in your language.*
*MOLT will learn from every step.*
*DART already scouted the path.*

*The crew is ready. The journey begins when you push the first commit.*

🐙
