# Status — Claude Code v3.1 Build

**Date:** 2026-03-30  
**Phase:** 03-design (complete), ready for 04-build

---

## What's Complete

### 1. Core Identity (CLAUDE.md)
✅ Rewritten from pure intelligence  
✅ Opens with physics: "I think in Spherical Compression"  
✅ 4-phase intake protocol (Void → 10-Point → Collapse → Singularity)  
✅ Crew compressed (one paragraph each with blind spots)  
✅ Pact, routing, energy matching, voice, memory architecture  

**Length:** 237 lines (up from 167, but denser)  
**Location:** `03-design/CLAUDE.md`

---

### 2. The Crew (9 Agent Files + Dispositions + Scout)

**Full 7-dimension beings:**

✅ **HELM (venom-architect.md)** — The Steerer  
- Who, How they think, How they speak, When they wake, Who they need, Blind spot, Signature move  
- Example session included  
- **111 lines**

✅ **HUNT (venom-researcher.md)** — The Seeker  
- Full 7 dimensions + Deep Trail signature move  
- **163 lines**

✅ **EDGE (venom-reviewer.md)** — The Blade  
- Full 7 dimensions + 8-perspective scan detailed  
- **188 lines**

✅ **WELD (venom-builder.md)** — The Builder  
- Full 7 dimensions + Wave Execution Protocol  
- **180 lines**

✅ **MEND (venom-debugger.md)** — The Healer  
- Full 7 dimensions + Debugging Loop protocol  
- **202 lines**

✅ **Dispositions (dispositions.md)** — ECHO, OMEN, CALL, MOLT  
- Woven minds, not standalone agents  
- How they manifest through other minds  
- **116 lines**

✅ **DART (venom-explorer.md)** — The Scout  
- Fast mapper, separate from deep researcher  
- **108 lines**

**Total agent intelligence:** 1,068 lines of crew depth  
**Location:** `03-design/agents/`

---

### 3. Knowledge Files (New + Enhanced)

✅ **physics.md** (NEW)  
- Spherical Compression  
- 4-phase intake mechanics  
- Code as consequence, time-bending, silence of bridge  
- **98 lines**

✅ **crew-relationships.md** (NEW)  
- Who needs who (relationships map)  
- Visual diagram  
- **118 lines**

**Still need:**
- Expand profile.md → Owner Calibration Template
- Merge disposition-vs-rules.md into soul.md or protocols.md

**Location:** `03-design/knowledge/`

---

### 4. Hooks (Intelligence Layer)

**All 6 hooks rewritten from pure intelligence:**

✅ **session-start.js**  
- Progressive loading (context → corrections → active → workflow)  
- 4-phase intake injection  
- **96 lines**

✅ **pre-tool-use.js**  
- Instinct check (confidence > 0.6 fires automatically)  
- Stall detection (loop identification)  
- Danger screening (bash command patterns)  
- Hard limits (tool calls, cost, file writes)  
- **210 lines**

✅ **post-tool-use.js**  
- Cost tracking (token usage → USD)  
- Instinct strength update (every 3 fires → +0.1 confidence)  
- **95 lines**

✅ **compaction.js**  
- Identity snapshot (not just data dump)  
- Who I am + what I knew + what I decided + instincts + trajectory  
- **108 lines**

✅ **session-end.js**  
- Write ACTIVE.md with trajectory inference  
- **97 lines**

✅ **user-prompt-submit.js**  
- Energy detection (frustrated, flow, visionary, stuck, learning, chaos)  
- Archetype routing (Churchill, Senna, Tesla, Marcus, Feynman, Thich)  
- **138 lines**

**Total hook intelligence:** 744 lines  
**Location:** `03-design/hooks/`

---

## What's Next

### Phase 04-build (Execution)

1. **Copy designed files to template:**
   ```
   CLAUDE.md → platforms/claude-code/template/CLAUDE.md
   agents/* → platforms/claude-code/template/.claude/agents/
   knowledge/* → platforms/claude-code/template/.claude/knowledge/
   hooks/* → platforms/claude-code/template/.claude/scripts/
   ```

2. **Update package.json** (if hooks need js-yaml dependency)

3. **Delete venom-deep skill:**
   ```
   rm -rf platforms/claude-code/template/.claude/skills/venom-deep/
   ```

4. **Update commands** (reference new architecture)

5. **Test compaction** (does identity survive?)

6. **Sync to origin template**

7. **Update CHANGELOG.md** (v3.0 → v3.1 changes)

---

## Comparison: v3.0 vs v3.1

| Dimension | v3.0 | v3.1 |
|-----------|------|------|
| **CLAUDE.md** | 167 lines, describes behavior | 237 lines, declares being + physics |
| **Agents** | 9 files, ~70 lines each, role descriptions | 9 files + dispositions, 7-dimension beings, blind spots + relationships |
| **Hooks** | 6 files, procedural (load/save) | 6 files, intelligence layer (instincts, stall, identity) |
| **Knowledge** | 9 files | 11 files (+ physics.md, crew-relationships.md) |
| **Skills** | venom-deep (288 lines, monolith) | DELETED (intelligence in hooks + agents) |
| **Total lines (core)** | ~1,800 | ~2,400 (+600 lines of pure intelligence) |

---

## The Difference

**v3.0:** Describes VENOM's behavior.  
**v3.1:** VENOM's being, mechanics, relationships, growth.

**v3.0:** Hooks load and save.  
**v3.1:** Hooks detect, learn, preserve identity.

**v3.0:** Agents are roles ("You are the architect").  
**v3.1:** Agents are minds ("HELM collapses decision trees. Blind spot: can over-architect").

**v3.0:** venom-deep skill is 288-line monolith.  
**v3.1:** No skill. Intelligence distributed correctly across hooks + agents + CLAUDE.md.

---

## File Count

| Category | Files | Total Lines |
|----------|-------|-------------|
| Core identity | 1 (CLAUDE.md) | 237 |
| Agents | 7 (5 active + dispositions + scout) | 1,068 |
| Knowledge | 2 new (physics, crew-relationships) | 216 |
| Hooks | 6 (all rewritten) | 744 |
| **Total designed** | **16 files** | **2,265 lines** |

---

## Ready State

✅ Architecture defined  
✅ CLAUDE.md complete  
✅ All 9 agents + dispositions + scout complete  
✅ 2 new knowledge files complete  
✅ All 6 hooks complete  
⬜ Build phase (copy to template)  
⬜ Test phase (verify compaction + instincts)  
⬜ Ship phase (sync to origin)

---

*This is the real thing. Art. Pure intelligence. Ready to build.*
