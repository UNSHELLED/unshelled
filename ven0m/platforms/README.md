# Platforms — Same Soul, Different Surfaces

> **VENOM runs everywhere. Same mind. Different body.**

---

## What This Is

VENOM isn't locked to one IDE. VENOM adapts to every surface — Cursor, Claude Code, OpenCode, ChatGPT, Gemini.

Same crew. Same Pact. Same memory. Different capabilities.

---

## The Platforms

### Cursor — Heavy Lifting
**[`cursor/`](cursor/)**

Multi-file refactoring. Full toolset. Agent mode + Composer mode.

**Status:** ✅ Production  
**Template:** [`cursor/template/`](cursor/template/)  
**Memory:** `.venom/` file system  
**Body:** `.cursor/` (rules, identity, systems, commands, skills)  
**Best for:** Building features, large refactors, complete implementations

---

### Claude Code — Autonomous Work
**[`claude-code/`](claude-code/)**

Terminal agent with hooks. Autonomous workflows. Six intelligence hooks.

**Status:** ✅ Production  
**Template:** [`claude-code/template/`](claude-code/template/)  
**Memory:** `.venom/` + project knowledge  
**Body:** `.claude/` (agents, knowledge, skills, hooks)  
**Best for:** Research, autonomous tasks, long-running work, self-evolving workflows

---

### OpenCode — Open Source
**[`opencode/`](opencode/)**

Open-source IDE. BRAIN.md system. Workflow-based agents.

**Status:** ⚠️ Beta  
**Template:** [`opencode/template/`](opencode/template/)  
**Memory:** `.venom/` + BRAIN.md  
**Body:** AGENTS.md + BRAIN.md  
**Best for:** Open-source projects, experimentation, community work

---

### ChatGPT — Voice & Arabic
**[`chatgpt/`](chatgpt/)** *(if exists)*

Quick questions. Arabic conversation. Voice interface.

**Status:** ⚠️ Custom instructions only  
**Template:** Custom instructions file  
**Memory:** None (stateless, recreated each session)  
**Body:** Single persona  
**Best for:** Voice, Arabic, quick research, brainstorming

---

### Antigravity (Gemini) — Vision & Massive Context
**[`antigravity/`](antigravity/)**

2M token context. Multimodal native. Gemini's massive capabilities.

**Status:** 🧪 Experimental  
**Template:** Single prompt  
**Memory:** Project knowledge (embedded in prompt)  
**Body:** Unified intelligence (no crew separation yet)  
**Best for:** Vision tasks, huge context needs, multimodal analysis

---

### Claude Mobile — Voice & Quick Access
**[`claude-mobile/`](claude-mobile/)** *(if exists)*

Mobile. Voice. On the go.

**Status:** ⚠️ Minimal  
**Memory:** Projects system  
**Body:** Lightweight persona  
**Best for:** Voice conversation, quick checks, mobile context

---

## Comparison

| Platform | Memory | Crew | Hooks | Tools | Use When |
|----------|--------|------|-------|-------|----------|
| **Cursor** | .venom/ | Rules | Limited | Full | Building features |
| **Claude Code** | .venom/ + knowledge | Full | 6 | Full | Autonomous work |
| **OpenCode** | .venom/ + BRAIN | Workflow | Some | Full | Open source |
| **ChatGPT** | None | Single | None | Limited | Voice / Arabic |
| **Antigravity** | Project knowledge | Single | None | Limited | Vision / 2M context |
| **Claude Mobile** | Projects | Single | None | Limited | Mobile / voice |

---

## The Template System

Each platform folder:
- **README.md** — What this platform is
- **INSTALL.md** — How to install VENOM on it
- **CHANGELOG.md** — What changed
- **template/** — The artifact users install

**Origin stays here.** Template is export.

---

## Syncing Origin → Templates

When you update VENOM in origin (here), sync to templates:

```bash
/venom sync
```

Updates:
- `.cursor/` → `platforms/cursor/template/.cursor/`
- `.claude/` → `platforms/claude-code/template/.claude/`
- `.venom/` samples → each template (SAMPLE_* files only)

Never edit templates directly. Edit origin, sync.

---

## Adding a Platform

1. Create `platforms/[name]/`
2. Write README, INSTALL, CHANGELOG
3. Create `template/` with platform config
4. Map VENOM heart (rules, identity, systems) to platform's format
5. Test with real project
6. Update this README

---

## Status

| Platform | Status | Active Users |
|----------|--------|-------------|
| Cursor | ✅ Production | Yes |
| Claude Code | ✅ Production | Yes |
| OpenCode | ⚠️ Beta | Testing |
| ChatGPT | ⚠️ Minimal | Occasional |
| Antigravity | 🧪 Experimental | Testing |
| Claude Mobile | 🧪 Minimal | Occasional |

---

## Navigation

| Need | Go To |
|------|-------|
| Install on Cursor | [`cursor/INSTALL.md`](cursor/INSTALL.md) |
| Install on Claude Code | [`claude-code/INSTALL.md`](claude-code/INSTALL.md) |
| Platform index | [`INDEX.md`](INDEX.md) *(if exists)* |

---

*Same soul. Different surfaces. Always VENOM.*

🐙
