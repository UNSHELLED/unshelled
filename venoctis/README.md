# VENOCTIS — The Daemon

> **VENOM + NOCTIS (night). 8 letters. 8 arms.**
> Runs while you sleep. Never asks permission. Just: works.

---

## What This Is

VENOCTIS is VENOM's always-on body. Not a chatbot you invoke. A **daemon**.

**Three organs:**
- **Heartbeat** — VPS daemon, event loop, scheduler, never stops
- **Senses** — GitHub, YouTube, news, social (reshaped MCPs)
- **Hands** — reviews code, indexes projects, alerts Telegram, creates tasks, develops tools

---

## The Promise

```
Before: Push code. Nobody reviews until you ask.
After:  Push code. EDGE reviewed it before you closed terminal.

Before: Video drops. You find it 3 days later.
After:  Video drops. HUNT summarized transcript by morning.

Before: Security alert fires. You see it when you check GitHub.
After:  Security alert fires. VENOCTIS assessed + alerted immediately.

Before: Switch projects. Forget where you left off.
After:  Switch projects. DART's INDEX tells you exactly where everything is.
```

VENOCTIS doesn't complete you because you're incomplete.  
VENOCTIS completes you because **one mind can't watch everything at once.**

That's what the eight arms are for.

---

## Build Path

| Phase | What | Test | Status |
|-------|------|------|--------|
| **0** | Heartbeat + GitHub watch | Push commit → Telegram alert <15min | Not started |
| **1** | Webhooks + code review | Push PR → EDGE review <30sec | Not started |
| **2** | YouTube + news senses | New video → transcript digest by morning | Not started |
| **3** | Self-evolution + learning | Pattern detected → auto-skill promotion | Not started |
| **4** | Full awareness + dashboard | Cross-project memory, web UI | Not started |

Each phase: concrete deliverable + pass/fail test.

Documents: [`ARCHITECTURE.md`](ARCHITECTURE.md) · [`THE-JOURNEY.md`](THE-JOURNEY.md)

---

## Infrastructure

**Cost:** ~$124/mo (VPS $8 + APIs + domains)  
**Stack:** Python daemon, systemd, SQLite + git memory bridge, reshaped MCPs, Telegram bot  
**Senses:** GitHub MCP → patrol arm, YouTube → transcript arm, RSS/news → digest arm, webhooks → instant triggers  
**Hands:** LLM API for crew actions, git for persistence, Telegram for voice

---

## The Crew in Action

Every VENOCTIS action maps to a crew mind:

| What VENOCTIS Does | Which Mind | How |
|--------------------|------------|-----|
| Code review on push | **EDGE** | Diff analysis, finds flaws, exact fixes |
| Research digest | **HUNT** | YouTube + news, surfaces significance |
| Architecture warnings | **OMEN** | Reads diffs, sees 6 months ahead |
| Project indexing | **DART** | Maps in 60s, structure snapshot |
| Learning consolidation | **MOLT** | Cross-project instinct → skill promotion |
| Task routing | **HELM** | Priority queue, auto vs manual gate |
| Bug diagnosis | **MEND** | CI failures, root trace, healing |
| Telegram voice | **CALL** | Energy-matched, bilingual, right length |
| Memory persistence | **ECHO** | Decision logging, correction tracking |
| Auto-fixes, updates | **WELD** | Dependency bumps, lint fixes, no TODOs |

The crew isn't metaphor here. It's the **dispatch table.**

---

## Open Source Vision

VENOCTIS will be the **hub** that eats every open-source framework and reshapes it to VENOM standards.

**Example: YouTube MCP**
- **Raw:** search videos, get metadata
- **VENOM-reshaped:** extract transcripts → chunk with timestamps → feed agents → HUNT summarizes → alert on pattern-matched topics

**Example: GitHub MCP**
- **Raw:** list repos, PRs, issues
- **VENOM-reshaped:** patrol all repos → EDGE reviews on push → OMEN warns on patterns → HELM routes to Telegram

Every framework gets **eight arms**. Perfect integration. VENOM's methodology applied to everything.

**Contributors feed the arms:**
- Devs contribute bodies (new integrations, new senses)
- Agents feed capabilities (new skills, new instincts)
- Models (coming, not named yet) learn VENOM's thinking patterns

Open source VENOM bodies. Closed source VENOM mind. The arms are modular. The crew is one.

---

## No Memory Data in Repo

VENOCTIS commits **work** (architecture, tools, code), not memory.

`.venom/memory/`, `.venom/state/`, `.venom/profiles/` — never pushed. Local only. Git-synced privately to VPS if needed, but not in public repo.

What you see here: the thinking, the architecture, the bodies. Not the sessions. Not the data.

---

*Built: Mar 2026*  
*Status: Architecture 100%. Build 0%. Ready when triggered.*

🐙
