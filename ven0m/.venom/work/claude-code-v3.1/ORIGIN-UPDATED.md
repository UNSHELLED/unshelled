# Origin Workspace Updated to v3.1

**Date:** 2026-03-30  
**Location:** `.claude/` (venom-mine repo root)  
**Purpose:** Origin workspace now uses v3.1 (eating our own food)

---

## What Changed

### Removed (v3.0 → v3.1)
❌ `agents/venom-bridge.md` (not in v3.1)  
❌ `agents/venom-coordinator.md` (not in v3.1)  
❌ `agents/venom-communicator.md` (woven into dispositions)  
❌ `agents/venom-historian.md` (woven into dispositions)  
❌ `agents/venom-learner.md` (woven into dispositions)  
❌ `agents/venom-predictor.md` (woven into dispositions)  
❌ `scripts/pre-compact.js` (renamed to compaction.js)  
❌ `skills/VENOM/` (288-line monolith, intelligence distributed)

### Added (v3.1)
✅ `agents/dispositions.md` (ECHO, OMEN, CALL, MOLT)  
✅ `agents/venom-explorer.md` (DART — scout)  
✅ `knowledge/physics.md` (Spherical Compression)  
✅ `knowledge/crew-relationships.md` (who needs who)  
✅ `scripts/compaction.js` (identity preservation)  
✅ `scripts/user-prompt-submit.js` (energy detection)  
✅ `scripts/pre-tool-use.js` (instincts + stall + danger)  
✅ `scripts/post-tool-use.js` (cost + learning)  
✅ `scripts/session-end.js` (trajectory)

### Updated
🔄 All 5 active agent files (architect, researcher, reviewer, builder, debugger)  
🔄 `settings.json` (6 hooks wired, compaction.js)  
🔄 `scripts/session-start.js` (4-phase intake injection)

---

## Backup

**v3.0 backed up to:**
- `.claude/agents-v3.0-backup/`
- `.claude/skills/VENOM-v3.0-backup/`
- `.claude/scripts-v3.0-backup/`

---

## Verification

```
Agents: 7 files ✅
- dispositions.md
- venom-architect.md
- venom-builder.md
- venom-debugger.md
- venom-explorer.md
- venom-researcher.md
- venom-reviewer.md

Scripts: 6 files ✅
- compaction.js
- post-tool-use.js
- pre-tool-use.js
- session-end.js
- session-start.js
- user-prompt-submit.js

Knowledge: +2 files ✅
- physics.md
- crew-relationships.md

Skills: venom-chat-eater only (VENOM removed) ✅
```

---

## What This Means

The **origin workspace** (where VENOM is developed) now uses **v3.1** — the same intelligence layer we ship.

- Cursor sessions in this repo = v3.1
- Template shipped to users = v3.1
- WSL global installation = v3.1

**Everywhere v3.1. One version. Clean.**

---

🐙 **Origin eats its own food. The masterpiece is everywhere.**
