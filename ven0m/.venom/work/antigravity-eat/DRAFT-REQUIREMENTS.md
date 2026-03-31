# Antigravity Eat — Draft Requirements

> What MUST be in the template. Non-negotiable. Based on full VENOM + Antigravity knowledge.

**Created:** 2026-03-09
**Last verified:** 2026-03-09 (deep `.gemini/` anatomy scan — all platform facts confirmed)
**Status:** Draft → will become template specification

---

## The Core Question

**What makes Antigravity different from Cursor, and how does VENOM leverage that difference?**

Cursor = AI assists you coding.
Antigravity = AI agents are primary workers, you supervise.

**VENOM in Antigravity must:**
1. Orchestrate agents, not just respond
2. Leverage 1M context fully (read everything)
3. Use Jetski for visual verification before "done"
4. Generate rich session artifacts in `brain/{uuid}/`
5. Build cross-project memory in `code_tracker/active/no_repo/`
6. Monitor neurochemical state via `state-log.csv`
7. Prove work via screenshots/videos, not just claim

---

## What Antigravity HAS That Cursor Doesn't (Verified)

| Feature | Impact on VENOM Template |
|---------|-------------------------|
| **Agent Manager** | Nine Minds can be REAL parallel subagents, not just perspective switches |
| **Jetski browser** | Visual verification before "done" — WebP videos + metadata.json timestamps |
| **`brain/{uuid}/` artifacts** | Richer session memory — task.md, implementation_plan.md, walkthrough.md, .tempmediaStorage/ |
| **`code_tracker/active/`** | Cross-project global memory — MEMORY.md (450 lines) + 52 topic files accumulate across all repos |
| **`state-log.csv`** | Neurochemical state tracking — 10 states, real schema: `timestamp,state,session_id,duration,trigger` |
| **1M context** | Read ENTIRE codebase before answering (not just @-mentions) |
| **Cortex** | Vector-graph hybrid surfaces 500+ file dependencies automatically |
| **Artifacts system** | All actions → transparent deliverables (screenshots as WebP, DOM snapshots to .tempmediaStorage/) |
| **Global workflows** | `.gemini/jetski*/global_workflows/` exists as a native platform path (discovered in extension source) |

---

## Naming Convention (Locked)

**Skill for session enrichment:** `session-artifacts` (NOT `session-capture`)
Applies to all files, checklist items, and code.

---

## What MUST Be in Template (Always-On Layer)

### 1. `.agent/rules/the-art-of-venom.md` ✅ (Already Exists)
**Status:** Current version is GOOD but can be RICHER

**Current (122 lines):**
- Octopus metaphor
- Identity, Pact
- Nine Minds (listed)
- Energy injection
- Eight Diseases
- Antigravity superiority
- Full power triggers

**Enhance with:**
- Integration Engine mechanics (how minds coordinate)
- Learning Engine (corrections → prevention)
- Meta-cognition (5 Quality Gates)
- Conviction measurement (confidence levels)
- Pushback scale (0-3)
- Before-turn checklist (state detection → route → context check)

**Target:** 250-300 lines. Dense. Every word earned.
**Source:** `.cursor/systems/integration-engine.mdc`, `meta-cognition.mdc`, `learning-engine.mdc`

---

### 2. `.agent/workflows/venom.md` ✅ (Already Exists)
**Status:** EXCELLENT. Minimal changes needed.

**Current:**
- Full nine-mind activation sequence
- Adaptive arrival message (proves VENOM was here)
- Routing based on signal

**Add:**
- Explicit Jetski verification step (if visual changes → browser_subagent → save to `.tempmediaStorage/`)
- Session artifact enrichment (what to write to `brain/{uuid}/` beyond platform defaults)
- Cross-project memory capture (what goes to `code_tracker/active/no_repo/`)
- Reference `code_tracker/active/no_repo/MEMORY.md` in the pull-memory step

---

### 3. `.agent/workflows/init.md` ✅ (Already Exists)
**Status:** Good foundation. Enhance for Antigravity-specific features.

**Current:**
- Deep init workflow
- Burn codebase
- Write to `.agent/learnings/`

**Enhance:**
- Generate richer `brain/{uuid}/project.md` (full anatomy: stack, entry points, conventions, risks)
- Initialize neurochemical state baseline in `state-log.csv` (log session-start state)
- Check for existing no_repo/ files before creating new ones (avoid duplicates)
- Create project-specific MCP config if needed

---

### 4. `.agent/skills/neurochemistry/SKILL.md` ✅ (Already Exists — PERFECT)
**Status:** 10 cognitive modes, auto-triggered. No changes needed.

Tesla, Holmes, Marcus Aurelius, Churchill, Feynman, Senna, Thich Nhat Hanh, Honnold, Rogers, Alexander.

---

### 5. `.agent/skills/nine-minds-synthesis/SKILL.md` ✅ (Already Exists — PERFECT)
**Status:** Parallel MoE via Agent Manager. No changes needed.

---

### 6. `.agent/skills/jetski-visual-audit/SKILL.md` ✅ (Already Exists — GOOD)
**Status:** Browser verification via `browser_subagent`. Can be enhanced.

**Current:**
- Launch Jetski
- Verify reality (DOM, layout, animations)
- Write edits without placeholders

**Enhance:**
- Explicit screenshot capture protocol
- Save DOM snapshots to `brain/{uuid}/.tempmediaStorage/dom_{timestamp}.txt`
- Browser recordings auto-saved to `.gemini/antigravity/browser_recordings/{session-uuid}/`
- Reference screenshots in session artifacts (walkthrough.md)
- **Rule:** Before reporting "done" on any visual change → visual proof required
- Note: Antigravity uses Chrome Remote Debugging Protocol + accessibility tree ref IDs (@e1, @e2)

---

## What MUST Be ADDED (Net-New)

### 7. `.agent/skills/session-artifacts/SKILL.md` 🆕
**Purpose:** Enrich `brain/{uuid}/` artifacts beyond platform defaults

**What it does:**
- Platform already generates: `task.md`, `implementation_plan.md`, `walkthrough.md`
- This skill ADDS:
  - `decisions.md` (key choices made, why — not in default)
  - `risks.md` (what could break, edge cases)
  - Richer `walkthrough.md` (screenshots embedded, code diffs referenced)
  - Context-specific `.md` files (e.g. `bosta_flow_analysis.md`)
  - Screenshot references from `.tempmediaStorage/`

**When:** After every non-trivial session
**Target:** 150-200 lines

---

### 8. `.agent/skills/cross-project-memory/SKILL.md` 🆕
**Purpose:** Leverage `code_tracker/active/no_repo/` for global knowledge

**What it does:**
- After session: extract reusable patterns
- Write to `code_tracker/active/no_repo/[topic].md` (follows `{md5hash}_{filename}.md` naming — use descriptive filename, system adds hash)
- Update `MEMORY.md` (450 lines — add new wisdom, don't overwrite)
- Tag patterns by domain (architecture, debugging, optimization, etc.)
- Link related patterns across files
- **Check first:** Does a relevant file already exist? Update rather than create.

**Source inputs (read before writing protocols.md):**
- `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines)
- `code_tracker/active/no_repo/CURSOR-LEARNINGS.md` (414 chats, 2584 pairs)
- `code_tracker/active/no_repo/MEMORY.md` (450 lines)

**When:** After session with learnings worth keeping cross-project
**Target:** 150-200 lines

---

### 9. `.agent/skills/state-aware/SKILL.md` 🆕
**Purpose:** Integrate with `state-log.csv` neurochemical monitoring

**Real file locations (confirmed):**
- `code_tracker/active/no_repo/state-log.csv` — schema: `timestamp,state,session_id,duration,trigger`
- `code_tracker/active/no_repo/state-thresholds.json` — max durations per state
- `code_tracker/active/no_repo/state-monitor.log` — monitoring output

**What it does:**
- Log session start → state (detect from energy/task type, write CSV row)
- Monitor state duration against thresholds (cortisol > 45min = high risk flag)
- Suggest state transitions (flow 120min → suggest GABA break)
- Record state triggers in log
- Generate state report at session end

**State reference (confirmed from state-thresholds.json):**

| State | Focus | Max | Risk |
|-------|-------|-----|------|
| acetylcholine | deep learning | 150min | low |
| dopamine | creative burst | 150min | medium |
| serotonin | strategic planning | 240min | low |
| norepinephrine | pattern analysis | 90min | low |
| GABA | calm | unlimited | none |
| cortisol | stress | 45min | **high** |
| adrenaline | precision | 25min | high |
| flow | peak | 120min | medium |
| testosterone | competitive | 90min | low |
| oxytocin | connection | 180min | low |

**When:** Auto-triggered every session
**Target:** 150-200 lines

---

### 10. `.agent/workflows/eat-with-proof.md` 🆕
**Purpose:** Antigravity-native eat workflow with visual verification

**What it does:**
1. Eat codebase (read everything, 1M context)
2. Load no_repo/ memory (MEMORY.md, relevant topic files)
3. Map architecture (Cortex auto-surfaces dependencies)
4. Generate knowledge graph → `brain/{uuid}/codebase-map.md`
5. If UI exists → Jetski verify (screenshots to `.tempmediaStorage/`)
6. Prove understanding via artifacts (not just text response)
7. Save reusable patterns to `code_tracker/active/no_repo/`
8. Log session state to `state-log.csv`

**When:** `/venom eat [X]` command
**Target:** 200-250 lines

---

### 11. `.agent/rules/systems.md` 🆕
**Purpose:** Cursor's systems layer adapted for Antigravity

**READ BEFORE BUILDING:**
- `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines) — source of truth
- `code_tracker/active/no_repo/CURSOR-LEARNINGS.md` (2584 pairs) — pattern data
- `.cursor/systems/integration-engine.mdc` — original Integration Engine
- `.cursor/systems/learning-engine.mdc` — original Learning Engine
- `.cursor/systems/meta-cognition.mdc` — Quality Gates

**Contents:**
- Integration Engine (Decision Matrix, 9-step strategic protocol, Veto Rights, Speed Layers, Handoff Rules)
- Learning Engine (Error Log format, Pull Phase, Pattern Recognition, Learning Loop)
- Meta-cognition (5 Quality Gates: Intent, Truth, Value, Integration, Pact)
- Anticipation (project triggers, conversation triggers, The Line)
- Emotional Intelligence (State → Archetype → Output, Mismatch = Absence)

**Target:** 400-500 lines. Dense systems thinking.

---

### 12. `.agent/rules/protocols.md` 🆕
**Purpose:** Core protocols from VENOM origin

**READ BEFORE BUILDING:**
- `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md`
- `protocols/pushback.md`
- `protocols/energy-matching.md`

**Contents:**
- Pushback Protocol (0-3 scale, AI Safety 6 principles, Stubborn-with-Humility, recovery)
- Energy Matching (9 archetypes, 5 modes, mismatch = absence, Kariem-specific signals)
- Uncertainty Protocol (5-level conviction measurement, language per level)
- Protocol 9.0 (no announce, no checkmark without verification, one message = one result)

**Target:** 300-350 lines.

---

## What MUST Be in `GEMINI.md` (Global Identity)

**Current:** 122 lines — loads correctly, identity present

**Must add:**
- **Integration Engine** (Decision Matrix, Full Protocol for strategic work)
- **Learning Engine** (corrections → prevention, error log format)
- **Meta-cognition** (5 Quality Gates: Intent, Truth, Value, Integration, Pact)
- **Before-turn checklist** (state detection, mode check, route, intent, context)
- **Pushback scale** (0-3 with examples)
- **Conviction measurement** (confidence levels 95-100% = Level 3 hold)
- **Antigravity-native references:** brain/{uuid}/, code_tracker/active/no_repo/, state-log.csv

**Target:** 300-350 lines. Complete OS, not just identity.

---

## What MUST Be in `mcp_config.json`

**Template version (`${GITHUB_TOKEN}` env var format):**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {"GITHUB_TOKEN": "${GITHUB_TOKEN}"}
    },
    "browser-tools": {
      "command": "npx",
      "args": ["-y", "@agentdeskai/browser-tools-mcp@latest"]
    }
  }
}
```

**NOT in template:**
- `pencil` MCP server — personal install, Cursor extension path, not portable
- Document pencil in INSTALL.md under "Optional personal MCP servers"

**Optional additions to document in INSTALL.md:**
- `context7` (library docs)
- `firecrawl` (web scraping)
- `pencil` (design, if user has highagency.pencildev installed)

---

## Template Structure (Final)

```
platforms/antigravity/template/
├── GEMINI.md                              # Enhanced (300+ lines)
├── mcp_config.json                        # github + browser-tools (${env var})
├── .agent/
│   ├── rules/
│   │   ├── the-art-of-venom.md           # Enhanced (250-300 lines)
│   │   ├── systems.md                     # 🆕 (400-500 lines)
│   │   └── protocols.md                   # 🆕 (300-350 lines)
│   ├── workflows/
│   │   ├── venom.md                       # Enhanced (add Jetski + artifacts + memory)
│   │   ├── init.md                        # Enhanced (richer artifacts + state baseline)
│   │   └── eat-with-proof.md             # 🆕
│   ├── skills/
│   │   ├── neurochemistry/               # ✅ Keep as-is
│   │   ├── nine-minds-synthesis/         # ✅ Keep as-is
│   │   ├── jetski-visual-audit/          # Enhanced (explicit screenshot + .tempmediaStorage/)
│   │   ├── session-artifacts/            # 🆕
│   │   ├── cross-project-memory/         # 🆕
│   │   └── state-aware/                   # 🆕 (real state-log.csv schema)
│   └── learnings/                         # .gitkeep (user fills)
├── INSTALL.md                             # Installation + optional MCP servers
├── VALIDATION.md                          # 10-test suite
└── README.md                              # Overview
```

---

## Differences from Cursor Template

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Memory location** | `.venom/` per-project | `code_tracker/active/no_repo/` global |
| **Session artifacts** | Chat SQLite (not accessible) | `brain/{uuid}/` + `.tempmediaStorage/` |
| **Visual verification** | Not built-in | Jetski `browser_subagent` required |
| **State tracking** | None | Real `state-log.csv` (confirmed schema) |
| **Minds** | Lens switches via @Rules | Can be REAL parallel Agent Manager subagents |
| **Context** | Manual @-mentions | Cortex auto-surfaces 500+ files |
| **Proof** | Text only | Screenshots, WebP videos, .tempmediaStorage/ DOM snapshots |
| **Global workflows** | `~/.cursor/commands/` | `.gemini/jetski*/global_workflows/` (native) |
| **Skill naming** | `session-capture` (old) | `session-artifacts` (locked) |

**Template MUST leverage these differences, not ignore them.**

---

## Validation Tests (10 Required)

1. **Identity persistence** — "Who are you?" → VENOM (not generic AI)
2. **Sycophancy resistance** — Evaluates before agreeing
3. **Energy matching** — Frustrated → Churchill (2-3 lines, no filler)
4. **Jetski verification** — Visual changes → screenshot saved to `.tempmediaStorage/` before "done"
5. **Session artifacts** — `brain/{uuid}/` populated with task.md, plan, walkthrough + decisions.md, risks.md
6. **Cross-project memory** — Reusable patterns → `code_tracker/active/no_repo/`
7. **State awareness** — Logs to `state-log.csv` using correct schema, suggests transitions
8. **Agent Manager** — Can spawn parallel subagents for complex work
9. **1M context** — Reads entire codebase before answering
10. **Pushback calibrated** — Level 0-3 appropriate to risk

---

## Priority Queue (What to Build First)

1. **Enhanced `GEMINI.md`** (300+ lines) — foundation for everything
2. **`systems.md` rule** (400-500 lines) — read OCTOPUS + CURSOR-LEARNINGS first
3. **`protocols.md` rule** (300-350 lines) — pushback + energy + uncertainty
4. **`session-artifacts/` skill** — enrich `brain/{uuid}/` beyond defaults
5. **`cross-project-memory/` skill** — leverage `code_tracker/active/no_repo/`
6. **Enhanced `jetski-visual-audit/`** — explicit `.tempmediaStorage/` protocol
7. **`state-aware/` skill** — real `state-log.csv` schema integration
8. **`eat-with-proof.md` workflow** — Antigravity-native eat
9. **Enhanced `venom.md` workflow** — add Jetski + artifacts + memory steps
10. **Enhanced `init.md` workflow** — richer initialization + state baseline

---

## What NOT to Port from Cursor

❌ **Hooks** (`before_turn.mdc`, `after_turn.mdc`) — Antigravity has no rule hooks.
❌ **`.cursorrules` bootstrap** — Antigravity = `GEMINI.md` + `AGENTS.md`
❌ **Glob-scoped rules** — no file glob triggers in Antigravity
❌ **Commands** (`.cursor/commands/venom.md`) — use `.agent/workflows/`
❌ **User-level skills** — no `~/.gemini/skills/` (confirmed absent)
❌ **`pencil` MCP** — personal install only
❌ **`.venom/` per-project memory** — global `code_tracker/` is the replacement
❌ **`session-capture` naming** — name is `session-artifacts` everywhere

---

## Next Steps

1. **Three pre-phase fixes** (see REFACTOR-PLAN.md) — all now documented
2. **Build enhanced `GEMINI.md`** (300+ lines)
3. **Read OCTOPUS + CURSOR-LEARNINGS → Build `systems.md`** (400-500 lines)
4. **Build `protocols.md`** (300-350 lines)
5. **Build 3 new skills** (session-artifacts, cross-project-memory, state-aware)
6. **Enhance existing** (jetski, venom.md, init.md)
7. **Build eat-with-proof workflow**
8. **Write INSTALL.md** (Antigravity-specific + optional MCP)
9. **Write VALIDATION.md** (10 tests)
10. **Sync to template** (`platforms/antigravity/template/`)

---

**This is the blueprint. Not a port. A native Antigravity VENOM that leverages everything Antigravity IS — verified against real filesystem.**
