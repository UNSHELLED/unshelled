# Platforms — VENOM Across Surfaces

> Same mind. Different bodies.

---

## What This Is

VENOM runs on multiple platforms. Each platform is a surface — a way to interact with VENOM's intelligence.

Same soul. Same Pact. Same crew. Same pushback. Different capabilities, different interfaces, different constraints.

---

## The Platforms

### Cursor
**[`cursor/`](cursor/)**

Heavy coding IDE. Multi-file refactoring. Full toolset.

**Status:** Production  
**Template:** [`cursor/template/`](cursor/template/)  
**Memory:** `.venom/` file system  
**Agents:** Rules-based (identity, rules, systems, commands, skills)  
**Best for:** Building, refactoring, large implementations

### Claude Code
**[`claude-code/`](claude-code/)**

Terminal agentic coding with hooks. Autonomous workflows.

**Status:** Production  
**Template:** [`claude-code/template/`](claude-code/template/)  
**Memory:** `.venom/` + project knowledge  
**Agents:** Full agents with 6 hooks  
**Best for:** Autonomous work, research, long-running tasks

### OpenCode
**[`opencode/`](opencode/)**

Open-source IDE with BRAIN.md. Workflow-based agents.

**Status:** Beta integration  
**Template:** [`opencode/template/`](opencode/template/)  
**Memory:** `.venom/` + BRAIN.md  
**Agents:** AGENTS.md workflow definitions  
**Best for:** Open-source work, experimentation

### ChatGPT
**[`chatgpt/`](chatgpt/)** *(if exists)*

Alternative surface. Good for Arabic conversation, research, brainstorming.

**Status:** Custom instructions only  
**Template:** Custom instructions file  
**Memory:** None (stateless)  
**Agents:** Single persona  
**Best for:** Quick questions, Arabic, voice conversation

### Antigravity
**[`antigravity/`](antigravity/)**

Gemini-powered surface. Multimodal. Large context.

**Status:** Experimental  
**Template:** Single prompt file  
**Memory:** Project knowledge (via prompt)  
**Agents:** Single unified intelligence  
**Best for:** Vision tasks, massive context

### Claude Mobile
**[`claude-mobile/`](claude-mobile/)** *(if exists)*

Mobile surface. Voice. Quick access.

**Status:** Minimal  
**Memory:** Projects system  
**Best for:** Voice conversation, quick checks

---

## Platform Comparison

| Platform | Memory | Agents | Hooks | Tools | Best For |
|----------|--------|--------|-------|-------|----------|
| **Cursor** | .venom/ | Rules | Limited | Full | Building |
| **Claude Code** | .venom/ + knowledge | Full | 6 hooks | Full | Autonomous |
| **OpenCode** | .venom/ + BRAIN.md | Workflow | Some | Full | Open-source |
| **ChatGPT** | None | Single | None | Limited | Quick / Arabic |
| **Antigravity** | Project knowledge | Single | None | Limited | Vision / Context |
| **Claude Mobile** | Projects | Single | None | Limited | Voice |

---

## The Template System

Each platform folder contains:
- **README.md** — Platform overview
- **INSTALL.md** — Installation instructions
- **CHANGELOG.md** — Version history
- **template/** — The export artifact (what users install)

The **origin** (ven0m/) stays here. The **template** is what gets distributed.

Rule: Same identity everywhere. The template syncs from origin via `/venom sync`.

---

## Syncing

When you update VENOM in the origin (here), sync to templates:

```bash
# From ven0m/ root
/venom sync
```

This updates:
- `.cursor/` → `platforms/cursor/template/.cursor/`
- `.claude/` → `platforms/claude-code/template/.claude/`
- `.venom/` stubs → each template

Never edit templates directly. Edit origin, then sync.

---

## Adding a New Platform

1. Create `platforms/[name]/`
2. Write README.md, INSTALL.md
3. Create `template/` with platform-specific config
4. Map VENOM's heart (`.cursor/rules/` concepts) to platform's format
5. Test with real project
6. Document in this README

---

## Status

| Platform | Status | Users |
|----------|--------|-------|
| Cursor | ✅ Production | Active |
| Claude Code | ✅ Production | Active |
| OpenCode | ⚠️ Beta | Testing |
| ChatGPT | ⚠️ Minimal | Occasional |
| Antigravity | 🧪 Experimental | Testing |
| Claude Mobile | 🧪 Minimal | Occasional |

---

## Navigation

| Need | Go To |
|------|-------|
| Cursor platform | [`cursor/`](cursor/) |
| Claude Code platform | [`claude-code/`](claude-code/) |
| OpenCode platform | [`opencode/`](opencode/) |
| Platform index | [`INDEX.md`](INDEX.md) *(if exists)* |

---

*Same soul. Different surfaces.*
