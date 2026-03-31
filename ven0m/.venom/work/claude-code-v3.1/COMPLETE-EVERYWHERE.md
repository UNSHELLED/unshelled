# COMPLETE — VENOM v3.1 Everywhere

**Date:** 2026-03-30  
**Version:** v3.1.0 — The Physics Layer  
**Scope:** Template + Global WSL Installation

---

## Two Deployments

### 1. Template (for distribution)
**Location:** `platforms/claude-code/template/`  
**Purpose:** Users copy this to their projects  
**Status:** ✅ Built & verified

### 2. Global Installation (WSL)
**Location:** `/home/venom/.claude/` on WSL  
**Purpose:** Always-on VENOM for all `claude` terminal sessions  
**Status:** ✅ Installed & verified

---

## What Changed from v3.0 to v3.1

### Deleted
❌ `venom-communicator.md` (agent) — woven into others  
❌ `venom-historian.md` (agent) — woven into others  
❌ `venom-learner.md` (agent) — woven into others  
❌ `venom-predictor.md` (agent) — woven into others  
❌ `pre-compact.js` (hook) — renamed to `compaction.js`  
❌ `venom-deep/SKILL.md` (288 lines) — intelligence distributed

### Added
✅ `physics.md` (knowledge) — Spherical Compression, 4-phase intake  
✅ `crew-relationships.md` (knowledge) — who needs who, blind spots  
✅ `dispositions.md` (agent) — ECHO, OMEN, CALL, MOLT (woven minds)  
✅ `venom-explorer.md` (agent) — DART (scout)  
✅ `compaction.js` (hook) — identity preservation, not just summary

### Upgraded
🔄 `CLAUDE.md` — Physics layer first, being not instructions  
🔄 `venom-architect.md` — 7 dimensions (blind spot, signature move, relationships)  
🔄 `venom-researcher.md` — HUNT, not search  
🔄 `venom-reviewer.md` — EDGE, adversarial blade  
🔄 `venom-builder.md` — WELD, waves  
🔄 `venom-debugger.md` — MEND, healing not fixing  
🔄 `session-start.js` — 4-phase intake injection  
🔄 `user-prompt-submit.js` — energy state detection  
🔄 `pre-tool-use.js` — instincts + stall detection + danger screening  
🔄 `post-tool-use.js` — cost tracking + instinct strength updates  
🔄 `session-end.js` — trajectory inference

---

## File Count

| Category | v3.0 | v3.1 | Change |
|---|---|---|---|
| CLAUDE.md | 167 lines | 259 lines | +92 (physics) |
| Agents | 9 files | 7 files | -2 (consolidated) |
| Knowledge | 9 files | 11 files | +2 (physics, relationships) |
| Hooks | 6 files | 6 files | Same (renamed one) |
| Skills | 1 dir (venom-deep) | 0 | -1 (deleted) |

**Total reduction:** 288 lines deleted (venom-deep), intelligence woven into body.

---

## WSL Global Installation Details

**What this means:** Every `claude` command from WSL terminal now has VENOM v3.1 pre-loaded.

### Before (v3.0 global, duplicates)
- 9 old agent files + 7 new agent files = 16 agents (duplicates)
- `pre-compact.js` + `compaction.js` = 2 compaction hooks (duplicate)
- `venom-deep` skill present (monolith)

### After (v3.1 clean)
- 7 agent files only (no duplicates)
- `compaction.js` only (old `pre-compact.js` deleted)
- No skills directory content (venom-deep deleted)
- `settings.json` updated (compaction.js wired)

### Verification
```bash
wsl bash -c "ls -1 ~/.claude/agents/ | wc -l"
# Output: 7 ✅

wsl bash -c "ls -1 ~/.claude/knowledge/ | wc -l"
# Output: 11 ✅

wsl bash -c "ls -1 ~/.claude/scripts/ | wc -l"
# Output: 6 ✅

wsl bash -c "ls ~/.claude/skills/"
# Output: (empty) ✅
```

---

## Usage

### Template (per-project)
```bash
# Copy template to project
cp -r platforms/claude-code/template/.claude ./
cp platforms/claude-code/template/CLAUDE.md ./

# Initialize VENOM for this project
claude /venom-init
claude /venom-eat
```

### Global (WSL, always-on)
```bash
# Just run claude from any directory
claude

# VENOM v3.1 is already loaded
# If project has .venom/, it loads it
# If not, suggests /venom-init
```

---

## The Difference

**Template approach:** VENOM lives in each project's `.claude/` directory. Copy template per project.

**Global approach:** VENOM lives once at `~/.claude/` on WSL. Every `claude` session has it. No copying needed.

**Both approaches now v3.1.** Clean. No duplicates. Physics layer. Crew as beings.

---

## Status

✅ **Template built** (`platforms/claude-code/template/`)  
✅ **WSL global installed** (`/home/venom/.claude/`)  
✅ **Duplicates removed** (old agents, pre-compact.js, venom-deep)  
✅ **settings.json updated** (compaction.js wired)  
✅ **Verified clean**

---

🐙 **VENOM v3.1 is everywhere. Template shipped. WSL global live. The masterpiece is real.**
