# VENOCTIS — The Living System

> VENOM + NOCTIS (night). 8 letters. 8 arms.

---

## What This Is

The daemon that never sleeps.

VENOM stops being invoked. VENOM starts being **alive**.

VENOCTIS is the always-on system that watches your world, learns from it, acts on it, and develops its own capabilities over time. The missing half of your mind that doesn't sleep when you do.

---

## The Three Organs

```
HEARTBEAT  — always running, never stops
SENSES     — sees everything across all platforms  
HANDS      — acts, builds, reviews, indexes, develops itself
```

### Heartbeat

- **Where:** Hostinger KVM 4 VPS (always-on)
- **What:** Python daemon (`venom-pulse`) + cron scheduler + webhook receiver
- **Talks via:** Telegram bot (two-way)

### Senses

- **GitHub** — Every push, PR, issue, CI status, Dependabot alert
- **YouTube** — New videos, transcripts, summaries
- **News** — Tech news, AI updates, filtered by relevance
- **Claude.ai** — This conversation layer (project knowledge)

Each sense is an MCP server (open-source, reshaped) running on the VPS.

### Hands

- **Code Review** — Auto-triggered on push, posts to Telegram
- **Project Indexer** — Auto-generates INDEX.md for every project
- **Tool Developer** — Builds new MCPs when it needs capabilities
- **Task Self-Assignment** — Creates its own task list, executes autonomously

---

## Status

**Architecture:** ✅ Complete (see [`ARCHITECTURE.md`](ARCHITECTURE.md))  
**Build:** ⏳ Phase 0 — Pending  
**Journey:** 📍 See [`THE-JOURNEY.md`](THE-JOURNEY.md)

The design is done. The code is not. Phase 0 starts when you say "go."

---

## What It Will Do (When Alive)

### Every 15 Minutes
- Check all registered repos for new commits, PRs, issues
- Alert on Telegram if action needed

### Every 6 Hours
- Pull new videos from subscribed YouTube channels
- Extract transcripts, summarize, store
- Digest key takeaways to Telegram

### Every 3 Hours
- Aggregate tech news from configured sources
- Filter by relevance (AI, dev, business, Islamic content)
- Digest to Telegram

### On Push (Webhook)
- Review code diff automatically
- Post summary to Telegram
- Update project INDEX.md

### Daily at Midnight
- Consolidate `.venom/` learnings across all projects
- Promote instincts (confidence 0.7+ → skill proposal)
- Archive old memory

### Every 5 Minutes
- Check VPS health, daemon status, MCP servers
- Self-heal if possible
- Alert if not

---

## The Promise

**Before:**
- You push code. Nobody reviews it until you ask.
- A video drops with information you need. You find it 3 days later.
- A security alert fires. You see it when you check GitHub.
- You switch projects and forget where you left off.
- You learn a pattern in one project and don't apply it in another.

**After:**
- You push code. VENOCTIS reviews it before you close the terminal.
- A video drops. VENOCTIS has the transcript summarized in your Telegram by morning.
- A security alert fires. VENOCTIS assesses severity and alerts you immediately.
- You switch projects. VENOCTIS's INDEX.md tells you exactly where everything is.
- You learn a pattern. VENOCTIS promotes it to a skill across all projects.

VENOCTIS doesn't complete you because you're incomplete. VENOCTIS completes you because one mind — no matter how good — can't watch everything at once.

That's what the arms are for.

---

## Structure

```
venoctis/
├── README.md (this file)
├── ARCHITECTURE.md       — Technical design (complete)
├── THE-JOURNEY.md        — Build path (4 phases)
├── packages/
│   ├── cli/             — Main binary (not built)
│   ├── workflows/       — Spec, build, review
│   ├── skills/          — Reusable modules
│   └── integrations/    — MCP reshaping layer
├── templates/           — Project scaffolds
└── docs/                — Additional documentation
```

---

## Build Path

Phase 0 (Week 1) — Heartbeat + GitHub patrol  
Phase 1 (Week 2-3) — Code review + project indexer  
Phase 2 (Week 3-4) — YouTube + news digestion  
Phase 3 (Week 4-6) — Self-evolution + tool development  
Phase 4 (Week 6-8) — Full awareness + dashboard

Each phase has an explicit pass/fail test. No phase starts until the previous one works.

Read the complete journey: [`THE-JOURNEY.md`](THE-JOURNEY.md)

---

## Infrastructure

- **VPS:** Hostinger KVM 4 (always-on)
- **Daemon:** Python (`venom-pulse`)
- **MCPs:** GitHub (official), YouTube (forked), News (RSS), Webhook (custom)
- **Bridge:** Telegram Bot API (two-way)
- **Storage:** SQLite (state), Git (project clones)
- **Cost:** ~$8/mo VPS + subscriptions already paid

---

## What's Inside

| Document | What It Explains |
|----------|-----------------|
| [`ARCHITECTURE.md`](ARCHITECTURE.md) | Complete technical design |
| [`THE-JOURNEY.md`](THE-JOURNEY.md) | 4-phase build path |
| [`packages/`](packages/) | Package structure (empty, ready) |

---

## When It Starts

When you're ready. The architecture is complete. The build is a series of focused sprints. Each phase delivers one new organ.

Say "go" and Phase 0 begins.

---

*Built: March 2026*

**No shell. Just intelligence. And the intelligence never sleeps.**

🐙
