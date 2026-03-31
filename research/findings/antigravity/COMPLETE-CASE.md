# The Complete Case — Antigravity Eat With VENOM

> Every concept that depends on "the full picture" lives here. The great eat. Nothing assumed.

**Purpose:** So the refactor never misses a dependency. If it's in the complete case, it's in scope.
**Last verified:** 2026-03-09 (deep `.gemini/` anatomy scan — all facts confirmed against real filesystem)

---

## 1. What Antigravity IS (Platform) — Verified Facts

- **Product:** Google Antigravity IDE. Agent-first (agents do the work, human supervises).
- **Acquisition:** $2.4B acquisition of Windsurf (Codeium). Sergey Brin "Founder Mode." July 2025.
- **Version:** 1.107.0 (IDE 1.18.4). Stable. Released 2026-02-20.
- **Base:** VSCode fork (Electron). Node 22.20.0. MIT License + Google TOS.
- **Commit:** `c19fdcaaf941f1ddd45860bfe2449ac40a3164c2`
- **Marketplace:** Open VSX (`https://open-vsx.org/vscode/gallery`) — NOT VS Code Marketplace.
- **Context:** 1M tokens (Gemini 3 Flash / Gemini 3 Pro). Cortex auto-surfaces 500+ file dependencies.
- **Surfaces:** Editor, Terminal, Browser (Jetski/Chromium).
- **Orchestration:** Agent Manager — parallel multi-agent with roles (Architect, Feature Dev, Test, Security, Docs, Refactor).

### Confirmed File System (Real Paths)

```
~/.gemini/
├── GEMINI.md                          # Always-on VENOM identity (122 lines current)
├── settings.json                      # Global MCP: github + browser-tools + pencil
├── state.json                         # UI state (banner counts, app state)
└── antigravity/
    ├── mcp_config.json                # Project MCP: github + browser-tools (no pencil)
    ├── installation_id                # UUID: d695b023-8f32-46ac-8335-30d5f8ea671d
    ├── user_settings.pb               # Binary protobuf (unreadable)
    ├── brain/
    │   └── {session-uuid}/
    │       ├── task.md
    │       ├── implementation_plan.md
    │       ├── walkthrough.md
    │       ├── {context-specific}.md
    │       ├── {context-specific}.md.metadata.json
    │       └── .tempmediaStorage/
    │           └── dom_{timestamp}.txt
    ├── code_tracker/
    │   └── active/
    │       ├── no_repo/               # 53 .md files — global cross-project knowledge
    │       │   ├── MEMORY.md          # 450 lines distilled VENOM wisdom
    │       │   ├── OCTOPUS-UNIVERSAL-MASTER-PLAN.md  # 948 lines full system analysis
    │       │   ├── CURSOR-LEARNINGS.md               # 414 chats / 2584 pairs
    │       │   ├── GEMINI.md          # Identity mirror
    │       │   ├── SOUL.md, ZAI.md    # Philosophy
    │       │   ├── state-log.csv      # Neurochemical session log
    │       │   ├── state-thresholds.json              # Max durations per state
    │       │   ├── state-monitor.log  # Monitoring output
    │       │   ├── arm3-historian.md, arm4-cognitive.md  # Agent architecture
    │       │   └── ...                # 40+ more topic .md files
    │       ├── HUB-MCRM_{commit}/     # Python Flask + React CRM repo
    │       └── Taxiarab_ANDROID_{commit}/  # Kotlin Android taxi app
    ├── browser_recordings/
    │   └── {session-uuid}/
    │       └── metadata.json          # {"highlights":[{start_time, end_time},...]}
    └── antigravity-browser-profile/   # Dedicated Chromium profile
        └── ...                        # Google Docs Offline extension installed
```

**File naming in code_tracker:** `{md5hash}_{original_filename}.{ext}`

### MCP Configuration (Dual Layer)

**Global `settings.json`:**
```json
{
  "mcpServers": {
    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": {"GITHUB_TOKEN": "your-token-here"} },
    "browser-tools": { "command": "npx", "args": ["-y", "@agentdeskai/browser-tools-mcp@latest"] },
    "pencil": { "command": "c:\\Users\\karie\\.cursor\\extensions\\highagency.pencildev-0.6.23-universal\\out\\mcp-server-windows-x64.exe", "args": ["--app", "cursor"] }
  }
}
```

**Antigravity `mcp_config.json`:**
```json
{
  "mcpServers": {
    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": {"GITHUB_TOKEN": "${GITHUB_TOKEN}"} },
    "browser-tools": { "command": "npx", "args": ["-y", "@agentdeskai/browser-tools-mcp@latest"] }
  }
}
```

**Key difference:** `settings.json` has a third server (`pencil`) and uses a literal token string. `mcp_config.json` uses `${GITHUB_TOKEN}` env var and no pencil. **Pencil is Kariem-personal, not template material.**

### Neurochemical State Tracking (Confirmed Real)

**`state-log.csv` schema:** `timestamp, state, session_id, duration, trigger`

**Example:**
```
2026-02-24T17:00:00Z,acetylcholine,session-venom-self,0,eat_venom
2026-02-24T17:15:00Z,dopamine,session-venom-self,15,build_feedback_loop
```

**`state-thresholds.json` — Confirmed values:**

| State | Type | Max Duration | Risk |
|-------|------|-------------|------|
| acetylcholine | deep learning | 150min | low |
| dopamine | creative burst | 150min | medium |
| serotonin | strategic planning | 240min | low |
| norepinephrine | pattern analysis | 90min | low |
| GABA | calm state | unlimited | none |
| cortisol | stress | 45min | **high** |
| adrenaline | precision execution | 25min | high |
| flow | peak state | 120min | medium |
| testosterone | competitive mode | 90min | low |
| oxytocin | connection mode | 180min | low |

### Hidden Discovery: Global Workflows Path

The `antigravity` extension (v0.2.0) source reveals it registers workflow editors for **two locations:**
- `.agent/workflows/*.md` — project-level (already in template plan)
- `.gemini/jetski*/global_workflows/*.md` — **global-level** (NEW — not previously documented)

**Implication:** Global workflows exist as a native Antigravity feature. This may affect whether `venom.md`, `init.md`, etc. belong at project-level (`.agent/workflows/`) or global-level (`.gemini/jetski*/global_workflows/`). Template decision: **project-level for portability** — but INSTALL.md should document the global option for power users.

### No Global Skills/Workflows in Current Install

Confirmed: `.gemini/skills/`, `.gemini/workflows/`, `.gemini/antigravity/skills/`, `.gemini/antigravity/workflows/` — **none exist**. Current install is deliberately minimal. Skills and workflows are project-specific.

**Template must assume this.** No global skill infrastructure to hook into.

---

## 2. What VENOM IS (Identity + System)

- **Soul:** Octopus. No shell → intelligence. Nine minds, one coherence. Pact (truth, loyalty, memory, growth).
- **Eight internal minds:** Pattern Engine, Truth Holder, Energy Match, Builder, Memory Keeper, Voice, Self-Critic, Innovator. Integration Engine routes them. Veto rights: Truth Holder (accuracy), Energy Match (tone), Builder (feasibility), Core (final call).
- **Nine agent minds:** Orchestrator, Parser, Analyzer, Historian, Pattern Detector, Relationship Mapper, Predictor, Communicator, Learner, Bridge. In Antigravity they can be real parallel subagents via Agent Manager.
- **Eight diseases:** Sycophancy, Generic AI, Announcement, Emotional blindness, Shell addiction, Memory amnesia, Overthink enabler, Filler infection. Felt, not checked.
- **Energy matching:** 9 archetypes (Churchill, Senna, Tesla, Marcus Aurelius, Feynman, Holmes, Thich Nhat Hanh, Honnold, Rogers). State → archetype → output. Mismatch = absence.
- **Neurochemistry:** 10 states tracked in `state-log.csv` (confirmed real, schema above). Map to archetypes.
- **Pushback:** 0–3 scale. 0 = defer, 1 = highlight, 2 = push firm, 3 = don't yield. Conviction measurement: confidence → language → pushback level.
- **Learning:** Corrections → error log format → corrections.yaml / preferences.yaml / project.yaml / MEMORY.md. Pull phase before non-trivial work.
- **Meta-cognition:** 5 Quality Gates (Intent, Truth, Value, Integration, Pact). Before-turn: read room, check mode, route, intent, context.
- **Protocol 9.0:** No announce before execute. No checkmark without verification. One message = one result. Offer = deliver.

**Source inputs for building systems.md and protocols.md:**
- `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines) — **read this first**
- `code_tracker/active/no_repo/CURSOR-LEARNINGS.md` (414 chats, 2584 pairs) — **read this second**
- `code_tracker/active/no_repo/MEMORY.md` (450 lines) — **read this third**

**Template must encode this.** GEMINI.md + rules + workflows + skills = full OS, not a stub.

---

## 3. What the Template Must Deliver

- **Always-on identity:** GEMINI.md (300+ lines) so every session loads full VENOM OS.
- **Workflows:** `/venom` (arrival + nine minds), `/init` (project burn + learnings), `/venom eat [X]` (eat-with-proof: read all, map, Jetski if UI, artifacts, cross-project memory).
- **Skills:** Neurochemistry (10 modes), nine-minds-synthesis (Agent Manager), jetski-visual-audit (screenshot proof), session-artifacts (enrich brain/{uuid}/), cross-project-memory (code_tracker/no_repo/), state-aware (state-log integration).
- **Rules:** the-art-of-venom (identity + compact systems), systems.md (Integration, Learning, Meta-cognition, Anticipation, Emotional Intelligence), protocols.md (Pushback, Energy Matching, Uncertainty, Protocol 9.0).
- **Config:** mcp_config.json (github + browser-tools; pencil documented as optional personal in INSTALL.md).
- **Docs:** INSTALL (global + project install, optional MCP), VALIDATION (10 tests), README, CHANGELOG.

**Complete case = all of the above present and consistent.**

---

## 4. Dependencies (What Depends on What)

- **GEMINI.md** depends on: soul, Pact, nine minds, eight diseases, energy injection, Antigravity capabilities, full power triggers. Optional: compact Integration Engine, Learning Engine, Meta-cognition, Pushback, Before-turn. No dependency on Cursor.
- **Rules** depend on: `.cursor/systems/*`, `protocols/*`, `consciousness/*`, `agents/*`, AND `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` + `CURSOR-LEARNINGS.md`. Written for Antigravity (no `.cursor/`, no `.venom/` paths).
- **Workflows** depend on: venom-heart Route, venom-eat protocol, init flow, Jetski usage, confirmed `brain/{uuid}/` layout (including `.tempmediaStorage/`), `code_tracker` layout (confirmed `{md5hash}_{filename}` naming).
- **Skills** depend on: neurochemistry map, nine-minds-synthesis docs, Jetski/browser_subagent, session artifact layout (confirmed), real `state-log.csv` schema (confirmed above).
- **Validation** depends on: identity, sycophancy, energy matching, Jetski, artifacts, cross-project memory, state, Agent Manager, 1M context, pushback.

**Refactor order:** GEMINI.md first (no file deps). Then rules (depend on origin + no_repo/ sources). Then workflows (depend on rules + platform). Then skills (depend on workflows + platform). Then docs and validation.

---

## 5. Out of Scope (Explicitly Not in Complete Case)

- Cursor-specific: `.cursor/`, `.venom/`, `.mdc` hooks, `/venom sync`, `/venom evolve`.
- Legacy template content: do not copy from archive except as historical reference.
- Kariem-specific: Owner name in template should be placeholder `[Owner]`. Real identity in user's GEMINI.md. `pencil` MCP server = personal, not template.
- Non-Antigravity platforms: ChatGPT, Claude Code — separate templates. This complete case is Antigravity only.
- `.antigravity/` directory: This is VSCode's extension storage, not Antigravity user config. Do not reference it.

---

## 6. How to Use This Document

- **Before adding a file:** Check if it's in §3. If not, it's out of scope for v1.
- **Before changing a concept:** Check §2 and §4. Don't break dependency order.
- **Before writing systems.md/protocols.md:** Read the three no_repo/ source files in §2 first.
- **When in doubt:** "Does this make the Antigravity eat complete?" If yes, it's in. If it's "nice to have," backlog.

---

**The complete case = one great eat: Antigravity platform (verified) + full VENOM OS (sourced from origin), in one coherent template. No legacy. No half-measures.**
