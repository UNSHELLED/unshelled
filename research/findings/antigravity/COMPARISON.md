# Cursor vs Antigravity — Template Architecture Comparison

**Purpose:** Understand what to port, what to transform, what's Antigravity-native only
**Last verified:** 2026-03-09 (deep `.gemini/` anatomy + Antigravity extension source scan)

---

## Platform Identity

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Origin** | Independent (Anysphere) | Google ($2.4B Windsurf acquisition, July 2025) |
| **Version** | ~0.48+ | 1.107.0 (IDE 1.18.4), stable 2026-02-20 |
| **Base** | VSCode fork | VSCode fork (Electron, Node 22.20.0) |
| **Extension store** | VS Code Marketplace | Open VSX (`open-vsx.org`) |
| **Core model** | AI assists human coder | AI agents are primary workers; human supervises |
| **Security posture** | Stable, enterprise-used | Prompt injection known (Google: "intended behavior"). Not production-ready Q1 2026 |
| **SWE-bench score** | Competitive | 76.2% |

---

## Memory Architecture

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Location** | `.venom/` (per-project) | `.gemini/antigravity/code_tracker/active/no_repo/` (global) |
| **Scope** | Project-isolated | Cross-project accumulation |
| **Knowledge base** | CONTEXT.md, MEMORY.md, learnings/ | MEMORY.md (450 lines), OCTOPUS plan (948 lines), CURSOR-LEARNINGS (414 chats) + 50 topic files |
| **Load mechanism** | Manual (`/venom?` or @-file) | Automatic via Cortex / always-on GEMINI.md |
| **Per-session memory** | Chat SQLite (opaque, not API-accessible) | `brain/{uuid}/` (visible files, readable) |
| **File tracking format** | N/A | `{md5hash}_{original_filename}.{ext}` in `code_tracker/active/` |
| **Session artifacts** | Lost after chat | Preserved per UUID (task.md, implementation_plan.md, walkthrough.md, .tempmediaStorage/) |

**Implication:** Antigravity template must leverage global memory (`code_tracker/active/no_repo/`), not recreate per-project silos.

---

## Agent Architecture

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Nine Minds** | Lens switches via @Rules | Can be REAL parallel subagents via Agent Manager |
| **Execution** | Sequential in single conversation | Parallel via Agent Manager |
| **Roles** | N/A | Architect, Feature Developer, Test, Security, Docs, Refactor |
| **Coordination** | Integration Engine (internal) | Agent Manager (platform-native Manager Surface) |
| **Tool access** | All tools in one context | Subagents with isolated tool access |

**Implication:** Antigravity can spawn actual parallel agents for complex work. Template should enable this via `nine-minds-synthesis` skill.

---

## Visual Verification

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Browser** | Not built-in | Jetski `browser_subagent` native |
| **Protocol** | N/A | Chrome Remote Debugging Protocol + Accessibility tree (ref IDs: @e1, @e2) |
| **Screenshots** | Manual tool | Auto-recorded as WebP videos |
| **Storage** | N/A | `.gemini/antigravity/browser_recordings/{uuid}/metadata.json` |
| **Browser profile** | N/A | `.gemini/antigravity-browser-profile/` (dedicated Chromium) |
| **Proof** | Text only | Screenshots + videos + metadata.json timestamps |

**Implication:** Antigravity template MUST use Jetski for visual changes. "Done" = screenshot proof.

---

## Context System

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Manual targeting** | `@Files`, `@Folders`, `@Codebase` | Cortex auto-surfaces 500+ files |
| **Context window** | ~200K tokens (Claude Sonnet 4.5) | 1M tokens (Gemini 3 Flash/Pro) |
| **Discovery** | Semantic search + grep | Vector-graph hybrid (Cortex) |
| **Load strategy** | User specifies what to load | Agent reads everything, filters internally |
| **Media in context** | DOM snapshots manually | `brain/{uuid}/.tempmediaStorage/dom_{timestamp}.txt` auto-saved |

**Implication:** Antigravity template should leverage full 1M context. "Read everything" is viable and expected.

---

## Session Artifacts

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Working memory** | Chat SQLite (opaque) | `brain/{uuid}/` (visible files) |
| **Standard artifacts** | Not generated | task.md, implementation_plan.md, walkthrough.md (platform-generated) |
| **Context-specific** | N/A | `{topic}.md` + `{topic}.md.metadata.json` |
| **DOM snapshots** | N/A | `.tempmediaStorage/dom_{timestamp}.txt` |
| **Persistence** | Lost after chat | Preserved per session UUID |
| **Access** | Not API-accessible | File system, fully readable |

**Implication:** The `session-artifacts` skill augments Antigravity's native artifact system (decisions.md, risks.md, richer walkthrough) — it does NOT replace it. Platform already generates the core three files.

---

## State Tracking

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Neurochemical** | Not tracked | `state-log.csv` with real entries |
| **Schema** | N/A | `timestamp, state, session_id, duration, trigger` |
| **Thresholds** | N/A | `state-thresholds.json` (cortisol high risk at 45min, adrenaline at 25min, flow max 120min) |
| **Monitoring** | Not built-in | `state-monitor.log` |
| **10 states** | Not tracked | acetylcholine, dopamine, serotonin, norepinephrine, GABA, cortisol, adrenaline, flow, testosterone, oxytocin |

**Implication:** Antigravity template should integrate state awareness. Suggest transitions, log states. `state-aware` skill reads/writes to these confirmed real files.

---

## Rules System

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Format** | `.mdc` with YAML frontmatter | `.md` plain (trigger: always_on in frontmatter optional) |
| **Triggers** | `alwaysApply: true` or globs | Always-on via GEMINI.md loading |
| **Location** | `.cursor/rules/` | `.agent/rules/` |
| **Precedence** | Team → Project → User | Global `~/.gemini/GEMINI.md` → project `.agent/` |
| **Hooks** | `before_turn.mdc`, `after_turn.mdc` (rule-based) | No hooks — use workflows instead |
| **Count** | 21+ rules + 8 systems + 6 identity = 35+ files | 3 consolidated files (the-art-of-venom, systems, protocols) |

**Implication:** No hooks in Antigravity. Cursor's hook-based checks → workflows. 35+ files → 3 comprehensive files.

---

## Skills System

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Format** | `SKILL.md` with YAML frontmatter | `SKILL.md` with YAML frontmatter (same) |
| **Location** | `.cursor/skills/` or `~/.cursor/skills/` | `.agent/skills/` (project only) |
| **Global skills** | Supported (`~/.cursor/`) | NOT supported (no `~/.gemini/skills/` — confirmed does not exist) |
| **Trigger** | Description match or slash command | Description match (auto-triggered by Cortex) |
| **User-level** | Supported | Not supported — project-level only |

**Implication:** No user-level skills in Antigravity. All skills project-specific in `.agent/skills/`.

---

## Commands vs Workflows

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Format** | `.cursor/commands/*.md` | `.agent/workflows/*.md` |
| **Global scope** | User-level commands supported | `.gemini/jetski*/global_workflows/*.md` — **confirmed global path exists** (antigravity extension v0.2.0 source) |
| **Trigger** | `/command-name` | `/workflow-name` or auto |
| **Allowed tools** | Specified in frontmatter | All tools available |
| **Location** | User-level + project-level | Project-level `.agent/workflows/` OR global `.gemini/jetski*/global_workflows/` |

**Implication:** Template uses project-level `.agent/workflows/` for portability. INSTALL.md should document global option for power users.

---

## MCP Configuration

| Aspect | Cursor | Antigravity |
|--------|--------|-------------|
| **Location** | `~/.cursor/mcp.json` | `~/.gemini/settings.json` (global) + `~/.gemini/antigravity/mcp_config.json` (Antigravity-specific) |
| **Token format** | Varies | settings.json uses literal string; mcp_config.json uses `${GITHUB_TOKEN}` env var |
| **Servers (Kariem)** | N/A | github, browser-tools, **pencil** (personal Cursor extension — NOT in template) |
| **Template servers** | N/A | github + browser-tools (env var format) |

**Pencil MCP decision:** `pencil` server is sourced from a Cursor extension path (`~/.cursor/extensions/highagency.pencildev-0.6.23-universal/`). It is personal-install only. Template `mcp_config.json` will NOT include it. INSTALL.md will document it as optional personal server.

---

## File Structure Comparison

### Cursor Template
```
.cursor/
├── rules/          # 21+ files, always-on + on-demand
├── identity/       # 6 files (soul, capabilities, etc.)
├── systems/        # 8 files (integration-engine, learning-engine, etc.)
├── hooks/          # 3 files (before_turn, after_turn, on_error)
├── commands/       # 1 file (venom.md)
└── skills/         # 4 dirs (venom-eat, venom-init, venom-codebase, venom-audit)

.venom/
├── CONTEXT.md
├── memory/MEMORY.md
├── learnings/      # corrections.yaml, preferences.yaml, project.yaml
└── work/ACTIVE.md
```

### Antigravity Template (New Build)
```
GEMINI.md                              # Enhanced (300+ lines) — global identity OS

.agent/
├── rules/
│   ├── the-art-of-venom.md            # Enhanced (250-300 lines)
│   ├── systems.md                     # NEW (400-500 lines)
│   └── protocols.md                   # NEW (300-350 lines)
├── workflows/
│   ├── venom.md                       # Enhanced (add Jetski + artifacts)
│   ├── init.md                        # Enhanced (richer initialization)
│   └── eat-with-proof.md             # NEW
├── skills/
│   ├── neurochemistry/                # Keep as-is (10 archetypes)
│   ├── nine-minds-synthesis/          # Keep as-is (Agent Manager)
│   ├── jetski-visual-audit/           # Enhanced (explicit screenshots, .tempmediaStorage/)
│   ├── session-artifacts/             # NEW (augments brain/{uuid}/)
│   ├── cross-project-memory/          # NEW (leverages code_tracker/active/no_repo/)
│   └── state-aware/                   # NEW (real state-log.csv integration)
└── learnings/                         # .gitkeep (user fills)

mcp_config.json                        # github + browser-tools (${GITHUB_TOKEN})

# NOT IN TEMPLATE (personal / Kariem-specific):
# pencil MCP server
# state-log.csv / state-thresholds.json (these live in no_repo/, user-generated)
```

**Key improvements over Cursor:**
- 35+ files → ~12 files (more maintainable)
- No `.venom/` per-project silo → global `code_tracker/active/no_repo/`
- No hooks → workflows
- Real parallel agents → nine-minds-synthesis via Agent Manager
- Visual proof → Jetski + `.tempmediaStorage/`
- State monitoring → real `state-log.csv` integration

---

## What to Port Directly

✅ **Core philosophy** — Octopus, Pact, Nine Minds, Eight Diseases, Energy Matching
✅ **Integration Engine** — Decision Matrix, Full Protocol, Veto Rights
✅ **Learning Engine** — Error Log Format, Pull Phase, Pattern Recognition
✅ **Meta-cognition** — 5 Quality Gates
✅ **Pushback Protocol** — 0-3 scale, AI Safety 6 principles
✅ **Emotional Intelligence** — State → Archetype mapping
✅ **Neurochemistry** — 10 cognitive modes (already in template)
✅ **Nine Minds synthesis** — MoE (already in template)

---

## What to Transform

🔄 **Hooks → Workflows** — Cursor's `before_turn.mdc` → Antigravity workflow step
🔄 **Commands → Workflows** — `/venom` command → `venom.md` workflow
🔄 **Per-project memory → Global** — `.venom/MEMORY.md` → `code_tracker/active/no_repo/MEMORY.md`
🔄 **Skills location** — `.cursor/skills/` → `.agent/skills/`
🔄 **Rules consolidation** — 35+ files → 3 comprehensive files

---

## What's Antigravity-Native Only

🆕 **Jetski verification** — `browser_subagent` for visual proof (screenshots to `.tempmediaStorage/`)
🆕 **Session artifacts** — `brain/{uuid}/` enrichment (AUGMENTS platform-native files)
🆕 **Cross-project memory** — Leverage `code_tracker/active/no_repo/` (53 files confirmed)
🆕 **State tracking** — Real `state-log.csv` integration (schema confirmed)
🆕 **Agent Manager** — Real parallel subagent orchestration
🆕 **1M context** — Read entire codebase strategies
🆕 **Global workflows** — `.gemini/jetski*/global_workflows/` (documented for INSTALL.md)

---

## What NOT to Port from Cursor

❌ **Hooks** (`before_turn.mdc`, `after_turn.mdc`) — Antigravity doesn't have Cursor-style rule hooks.
❌ **`.cursorrules` bootstrap** — Antigravity = `GEMINI.md` + `AGENTS.md`, not `.cursorrules`
❌ **Glob-scoped rules** — Antigravity rules: always-on or via workflow, not file globs
❌ **Commands** (`.cursor/commands/venom.md`) — Antigravity = workflows in `.agent/workflows/`
❌ **User-level skills** — Antigravity has no `~/.gemini/skills/` (confirmed absent)
❌ **`.venom/` per-project memory** — Global `code_tracker/` replaces this
❌ **`pencil` MCP in template** — Personal install, Cursor extension path, not portable

---

## Implementation Strategy

### Phase 1: Foundation (Port + Enhance)
Read `OCTOPUS-UNIVERSAL-MASTER-PLAN.md` + `CURSOR-LEARNINGS.md` + `MEMORY.md` first.
Port core philosophy, systems, protocols from Cursor. Enhance for Antigravity context.

### Phase 2: Native Features (Build New)
Build Antigravity-native skills and workflows that have no Cursor equivalent.

### Phase 3: Integration (Connect Layers)
Connect global `GEMINI.md` with project `.agent/`, MCP servers, and platform features.

### Phase 4: Validation (Test)
Run 10 validation tests. Ensure everything fires correctly.

---

**Next:** Execute Phase 1 — Enhanced GEMINI.md (after 3 pre-phase fixes in REFACTOR-PLAN.md)
