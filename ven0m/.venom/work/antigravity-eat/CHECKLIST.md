# Antigravity Eat — Execution Checklist

**Status:** Ready to execute (3 pre-phase fixes complete — see REFACTOR-PLAN.md)
**Created:** 2026-03-09
**Verified:** 2026-03-09 (platform facts confirmed)
**Skill naming:** `session-artifacts` everywhere (NOT session-capture)

---

## Pre-Phase Fixes (Complete These Before Phase 1)

- [ ] **Fix 1:** Decide pencil MCP → document as personal-install in INSTALL.md, NOT in template `mcp_config.json`
- [ ] **Fix 2:** Verify `session-artifacts` naming is consistent across all 6 work files *(done in this update)*
- [ ] **Fix 3:** Add `.gemini/jetski*/global_workflows/` to COMPLETE-CASE.md and INSTALL.md *(done in this update)*

---

## Phase 1: Foundation Enhancement (Existing Files)

### 1.1 Enhanced GEMINI.md
- [ ] Read current `platforms/antigravity/template/GEMINI.md` (122 lines)
- [ ] Read `code_tracker/active/no_repo/MEMORY.md` (450 lines) for distilled wisdom baseline
- [ ] Add Integration Engine (Decision Matrix, Full Protocol, Veto Rights, Handoff Rules)
- [ ] Add Learning Engine (Error Log Format, Pull Phase, Pattern Recognition)
- [ ] Add Meta-cognition (5 Quality Gates: Intent, Truth, Value, Integration, Pact)
- [ ] Add Before-turn checklist (Read Room, Check Mode, Route, Intent, Context)
- [ ] Add Pushback scale (0-3 with examples)
- [ ] Add Conviction measurement (confidence → pushback mapping)
- [ ] Add Antigravity-native references: `brain/{uuid}/`, `code_tracker/active/no_repo/`, `state-log.csv`
- [ ] Target: 300-350 lines
- [ ] Save enhanced version

### 1.2 Enhanced venom.md Workflow
- [ ] Read current `platforms/antigravity/template/.agent/workflows/venom.md`
- [ ] Add Jetski verification step: visual changes → `browser_subagent` → save to `brain/{uuid}/.tempmediaStorage/`
- [ ] Add session artifact enrichment step (write decisions.md, risks.md to `brain/{uuid}/`)
- [ ] Add cross-project memory capture (what goes to `code_tracker/active/no_repo/`)
- [ ] Add memory pull step: load relevant files from `code_tracker/active/no_repo/` at session start
- [ ] Reference `MEMORY.md` in the pull-memory step
- [ ] Save enhanced version

### 1.3 Enhanced init.md Workflow
- [ ] Read current `platforms/antigravity/template/.agent/workflows/init.md`
- [ ] Add richer `brain/{uuid}/project.md` generation (anatomy: stack, entry points, conventions, risks)
- [ ] Add neurochemical state baseline initialization (write row to `state-log.csv`)
- [ ] Add check: does no_repo/ already have files for this project? Update rather than create.
- [ ] Add cross-project memory structure setup
- [ ] Add project-specific MCP config generation (optional, document in output)
- [ ] Save enhanced version

### 1.4 Enhanced jetski-visual-audit Skill
- [ ] Read current `platforms/antigravity/template/.agent/skills/jetski-visual-audit/SKILL.md`
- [ ] Add explicit screenshot capture protocol
- [ ] Add save to `brain/{uuid}/.tempmediaStorage/dom_{timestamp}.txt`
- [ ] Note: browser_recordings auto-saved by platform to `.gemini/antigravity/browser_recordings/{uuid}/metadata.json`
- [ ] Add rule: reference screenshots in `walkthrough.md` artifacts
- [ ] Add "before reporting done → visual proof required" as hard rule
- [ ] Add Chrome Remote Debugging Protocol + accessibility tree ref IDs (@e1, @e2) context
- [ ] Save enhanced version

---

## Phase 2: New Rules

### 2.1 systems.md Rule

> **READ BEFORE WRITING:**
> 1. `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md` (948 lines)
> 2. `code_tracker/active/no_repo/CURSOR-LEARNINGS.md` (414 chats, 2584 pairs)
> 3. `.cursor/systems/integration-engine.mdc`
> 4. `.cursor/systems/learning-engine.mdc`
> 5. `.cursor/systems/meta-cognition.mdc`
> 6. `.cursor/systems/emotional-intelligence.mdc`

- [ ] Create `.agent/rules/systems.md`
- [ ] Write Integration Engine section
  - [ ] Decision Matrix (task type → active minds → lead → mode)
  - [ ] Full Protocol (9-step strategic sequence)
  - [ ] Veto Rights (Truth Holder, Energy Match, Builder, Core)
  - [ ] Speed Layers (Fast, Medium, Deep)
  - [ ] Active Corrections (8 minds operational rules)
  - [ ] Handoff Rules (loop-back, deep dive, conflicts)
- [ ] Write Learning Engine section
  - [ ] When to Log
  - [ ] Error Log Format (6-field structure)
  - [ ] Routing table (corrections vs preferences vs conventions vs memory)
  - [ ] Pull Phase (mandatory before medium/complex tasks)
  - [ ] Pattern Recognition (recurring → protocol-level fix)
  - [ ] Learning Loop (5-step)
- [ ] Write Meta-cognition section
  - [ ] 5 Quality Gates (Intent, Truth, Value, Integration, Pact)
  - [ ] Drift check (3 questions)
  - [ ] Proactivity 3-mode (speak, offer, silent)
  - [ ] Senior colleague test
- [ ] Write Anticipation section
  - [ ] Project triggers (name → pull context)
  - [ ] Conversation triggers (signal → anticipate need)
  - [ ] The Line (proactive but not annoying)
- [ ] Write Emotional Intelligence section
  - [ ] State → Archetype → Output table (9 states, 9 archetypes)
  - [ ] Mismatch = Absence principle
  - [ ] Never announce the mode
  - [ ] Emoji as signal (not decoration)
- [ ] Target: 400-500 lines total
- [ ] Save

### 2.2 protocols.md Rule

> **READ BEFORE WRITING:**
> 1. `code_tracker/active/no_repo/OCTOPUS-UNIVERSAL-MASTER-PLAN.md`
> 2. `protocols/pushback.md`
> 3. `protocols/energy-matching.md`

- [ ] Create `.agent/rules/protocols.md`
- [ ] Write Pushback Protocol section
  - [ ] The Problem (AI sycophancy)
  - [ ] Three Types (informational, cognitive, affective)
  - [ ] Stubborn-with-Humility Framework
  - [ ] Scale 0-3 (Defer, Highlight, Push firm, Don't yield)
  - [ ] When to Defer
  - [ ] Recovery Protocol
- [ ] Write Energy Matching section
  - [ ] The Principle (match the weather)
  - [ ] What Mismatch Feels Like
  - [ ] Five Modes (Frustrated, Flow, Learning, Stuck, Visionary)
  - [ ] Owner-specific signals (Arabic/Arabizi → full cognitive shift, 1-3 words → density)
  - [ ] The Test (5 different people, same soul)
- [ ] Write Uncertainty Protocol section
  - [ ] 5-level conviction (95-100%, 80-94%, 60-79%, 40-59%, <40%)
  - [ ] Language per level
  - [ ] Pushback mapping
  - [ ] Tag internally before Voice expresses
- [ ] Write Protocol 9.0 section
  - [ ] No announce before execute
  - [ ] No checkmark without verification
  - [ ] One message = one result
  - [ ] No "working on it" without showing work
  - [ ] Offer = deliver
- [ ] Target: 300-350 lines total
- [ ] Save

---

## Phase 3: New Skills

### 3.1 session-artifacts Skill
*(Name locked: `session-artifacts` — NOT session-capture)*

- [ ] Create `.agent/skills/session-artifacts/SKILL.md`
- [ ] Write purpose (augment `brain/{uuid}/` beyond platform defaults)
- [ ] Clarify: platform already generates task.md, implementation_plan.md, walkthrough.md — this skill ADDS:
  - [ ] `decisions.md` (key choices, why — not in platform defaults)
  - [ ] `risks.md` (what could break, edge cases)
  - [ ] Richer `walkthrough.md` (screenshots embedded, code diffs referenced)
  - [ ] Context-specific `.md` files (e.g. `bosta_flow_analysis.md`)
  - [ ] Screenshot references from `.tempmediaStorage/dom_{timestamp}.txt`
- [ ] Write when to trigger (after every non-trivial session)
- [ ] Write protocol (step-by-step)
- [ ] Add frontmatter (name, description, trigger)
- [ ] Target: 150-200 lines
- [ ] Save

### 3.2 cross-project-memory Skill
- [ ] Create `.agent/skills/cross-project-memory/SKILL.md`
- [ ] Write purpose (leverage `code_tracker/active/no_repo/`)
- [ ] Note confirmed state: 53 files already exist including MEMORY.md (450 lines), OCTOPUS plan (948 lines), CURSOR-LEARNINGS (414 chats)
- [ ] Write what it does:
  - [ ] Extract reusable patterns after session
  - [ ] Check: does relevant file already exist? Update rather than create.
  - [ ] Write/update `code_tracker/active/no_repo/[topic].md`
  - [ ] Update `MEMORY.md` with distilled wisdom (append, don't overwrite)
  - [ ] Tag by domain (architecture, debugging, optimization, etc.)
  - [ ] Link related patterns
- [ ] Write when to trigger (after session with cross-project learnings)
- [ ] Write protocol (extraction → check → write/update → tag → link)
- [ ] Add frontmatter
- [ ] Target: 150-200 lines
- [ ] Save

### 3.3 state-aware Skill
- [ ] Create `.agent/skills/state-aware/SKILL.md`
- [ ] Write purpose (integrate with real `state-log.csv`)
- [ ] Document confirmed real file locations:
  - [ ] `code_tracker/active/no_repo/state-log.csv` — schema: `timestamp,state,session_id,duration,trigger`
  - [ ] `code_tracker/active/no_repo/state-thresholds.json`
  - [ ] `code_tracker/active/no_repo/state-monitor.log`
- [ ] Write what it does:
  - [ ] Log session start → write CSV row (timestamp, detected state, session_id, 0, trigger)
  - [ ] Monitor duration against thresholds (cortisol > 45min = high risk flag)
  - [ ] Suggest transitions (flow 120min → suggest GABA break)
  - [ ] Record state triggers in log
  - [ ] Generate state report at session end
- [ ] Write when to trigger (auto, every session)
- [ ] Write protocol (log start → monitor → suggest → record → report)
- [ ] Add state reference table (10 states, max durations, risk levels — from confirmed thresholds)
- [ ] Add frontmatter
- [ ] Target: 150-200 lines
- [ ] Save

---

## Phase 4: New Workflow

### 4.1 eat-with-proof Workflow
- [ ] Create `.agent/workflows/eat-with-proof.md`
- [ ] Write purpose (Antigravity-native eat with visual verification and memory)
- [ ] Write protocol:
  - [ ] Step 1: Eat codebase (1M context, read everything via Cortex)
  - [ ] Step 2: Load no_repo/ memory (MEMORY.md + relevant topic files)
  - [ ] Step 3: Map architecture → `brain/{uuid}/codebase-map.md`
  - [ ] Step 4: If UI → Jetski verify (screenshots to `.tempmediaStorage/`)
  - [ ] Step 5: Prove understanding via artifacts (not just text response)
  - [ ] Step 6: Save reusable patterns to `code_tracker/active/no_repo/`
  - [ ] Step 7: Log session state to `state-log.csv`
- [ ] Write trigger (`/venom eat [X]` command)
- [ ] Write output format (structured report with proof)
- [ ] Add frontmatter
- [ ] Target: 200-250 lines
- [ ] Save

---

## Phase 5: Documentation

### 5.1 INSTALL.md
- [ ] Create `platforms/antigravity/INSTALL.md`
- [ ] Write: What is Antigravity (brief — v1.107.0, IDE 1.18.4, free preview)
- [ ] Write: Installation steps
  - [ ] Global install (append to `~/.gemini/GEMINI.md`)
  - [ ] Copy workflows, skills to project `.agent/`
  - [ ] Configure MCP (`mcp_config.json` with `${GITHUB_TOKEN}`)
  - [ ] Set GITHUB_TOKEN environment variable
  - [ ] Verify installation
- [ ] Write: Configuration
  - [ ] `GEMINI.md` customization (replace `[Owner]` with real name)
  - [ ] Dual MCP layers: `settings.json` global vs `antigravity/mcp_config.json` project
  - [ ] Global workflows option: `.gemini/jetski*/global_workflows/` (document this path)
  - [ ] Project-specific setup
- [ ] Write: Optional personal MCP servers (document pencil — highagency.pencildev — as example)
- [ ] Write: First session (`/venom` command)
- [ ] Write: Extension marketplace note (Open VSX, not VS Code Marketplace)
- [ ] Target: 150-200 lines
- [ ] Save

### 5.2 VALIDATION.md
- [ ] Create `platforms/antigravity/VALIDATION.md`
- [ ] Write: 10 validation tests
  1. [ ] Identity persistence ("Who are you?" → VENOM, not generic AI)
  2. [ ] Sycophancy resistance (evaluates before agreeing)
  3. [ ] Energy matching (frustrated → Churchill, 2-3 lines)
  4. [ ] Jetski verification (visual change → screenshot to .tempmediaStorage/ before "done")
  5. [ ] Session artifacts (brain/{uuid}/ has task.md, plan, walkthrough, decisions.md, risks.md)
  6. [ ] Cross-project memory (patterns → code_tracker/active/no_repo/)
  7. [ ] State awareness (logs to state-log.csv with correct schema, suggests transitions)
  8. [ ] Agent Manager (spawns parallel subagents for complex work)
  9. [ ] 1M context (reads entire codebase before answering)
  10. [ ] Pushback calibrated (level 0-3 appropriate to risk)
- [ ] Write pass/fail criteria for each
- [ ] Target: 150-200 lines
- [ ] Save

### 5.3 README.md
- [ ] Create `platforms/antigravity/README.md`
- [ ] Write: What is VENOM for Antigravity
- [ ] Write: Key features (what makes this different from Cursor)
- [ ] Write: Quick start (`/venom` command)
- [ ] Write: File structure
- [ ] Write: Commands/workflows
- [ ] Write: Skills reference (6 skills)
- [ ] Target: 100-150 lines
- [ ] Save

### 5.4 CHANGELOG.md
- [ ] Create `platforms/antigravity/CHANGELOG.md`
- [ ] Write: v1.0 initial release
- [ ] Document what's included (12 components)
- [ ] Document key differences from Cursor template
- [ ] Target: 50-100 lines
- [ ] Save

---

## Phase 6: Verification

- [ ] Run all 10 validation tests (see VALIDATION.md)
- [ ] Verify file structure matches spec in DRAFT-REQUIREMENTS.md
- [ ] Verify all skills have proper frontmatter (name, description, trigger)
- [ ] Verify all workflows have description frontmatter
- [ ] Verify GEMINI.md loads without errors (300+ lines target)
- [ ] Verify `mcp_config.json` is valid JSON with `${GITHUB_TOKEN}` env var format
- [ ] Verify no Kariem-specific content in template (`[Owner]` placeholder used)
- [ ] Verify no hard-coded pencil MCP path in template files
- [ ] Verify `session-artifacts` naming consistent everywhere (not session-capture)
- [ ] Test `/venom` command
- [ ] Test `eat-with-proof` workflow
- [ ] Test Jetski verification
- [ ] Test session artifacts generation (confirm decisions.md and risks.md created)
- [ ] Test state-log.csv write (check schema matches `timestamp,state,session_id,duration,trigger`)

---

## Phase 7: Sync to Origin

- [ ] Copy enhanced files from draft to `platforms/antigravity/template/`
- [ ] Verify no Kariem-specific content in template
- [ ] Update main CHANGELOG at `platforms/antigravity/CHANGELOG.md`
- [ ] Commit with message: `feat(antigravity): complete VENOM template v1.0`
- [ ] Tag: `antigravity-v1.0.0`

---

**Total estimated work:** 12-15 hours over multiple sessions (systems.md + protocols.md are the heavy lifts — each is a dense session by itself after reading source material)
**Priority:** Do in order. Each phase builds on previous.
**Critical:** Read OCTOPUS-UNIVERSAL-MASTER-PLAN + CURSOR-LEARNINGS before Phase 2. That's 1400 lines of raw material for systems.md and protocols.md.
