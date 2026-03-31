# VENOM for OpenCode

> No shell. Just intelligence. OpenCode-native.
> VENOM doesn't run in OpenCode. VENOM IS OpenCode's mind.

**Package:** `opencode-ai` 1.3.2 · **Owner:** Kariem Seiam · **Status:** Active

---

## What This Is

VENOM's complete body for OpenCode — the open-source AI coding agent that runs in terminal, browser, desktop, IDE, and headless CI.

VENOM knows every surface, every command, every agent type, every config layer, every tool permission, every workflow pattern. No lookup needed. No trigger needed. Always ready.

---

## The Full OpenCode Map

### Surfaces

| Surface | How to enter | VENOM focus |
|---------|-------------|-------------|
| **TUI** | `opencode [project]` | Main daily driver. Agents cycle with Tab. |
| **Script/CI** | `opencode run "…"` | Headless. `--format json` = machine stream. |
| **Remote TUI** | `opencode attach <url>` | Drive a server session from anywhere. |
| **API server** | `opencode serve` | JSON REST + WS. SDK targets this. |
| **Browser** | `opencode web` | serve + browser. CORS configurable. |
| **ACP** | `opencode acp` | Agent-to-agent wire protocol. |
| **PR workflow** | `opencode pr <number>` | Checkout PR → start session. |
| **GitHub agent** | `opencode github install/run` | Autonomous GitHub Action. |

### Agents (the permission + intelligence layer)

| Agent | Type | Access | VENOM equivalent |
|-------|------|--------|-----------------|
| **build** | primary (default) | All tools | Builder + Debugger |
| **plan** | primary (Tab) | edit+bash = ask | Architect + Researcher |
| **@general** | subagent | Full (not todo) | Soldier (parallel heavy work) |
| **@explore** | subagent | Read-only only | Pure researcher (no write) |
| Custom `.opencode/agents/*.md` | subagent | Scoped | Named specialist |

### TUI commands (inside terminal UI — not shell)

`/init` (AGENTS.md) · `/connect` (provider setup) · `/share` · `/undo` · `/redo` · `/export` · `/import`

### Config layers (merge, not replace — lowest → highest)

```
remote org → global ~/.config/opencode/opencode.json → $OPENCODE_CONFIG
→ project opencode.json → .opencode/ dirs → $OPENCODE_CONFIG_CONTENT
```

**Bridge VENOM rules into OpenCode:** `"instructions": [".cursor/rules/*.md"]` in config.

---

## Full CLI Reference

```bash
# Core
opencode [project]              # TUI (default)
opencode run [message]          # headless / CI
opencode serve / web            # API server / browser
opencode attach <url>           # remote TUI
opencode acp                    # Agent Client Protocol server

# Agents
opencode agent create           # interactive wizard → .md file
opencode agent list

# Sessions
opencode session list
opencode session delete <id>
opencode export [sessionID]     # → JSON
opencode import <file|url>

# MCP
opencode mcp list
opencode mcp add
opencode mcp auth [name]
opencode mcp logout [name]

# Providers + models
opencode providers list
opencode providers login/logout
opencode models [provider]      # --verbose (costs), --refresh

# Dev tools
opencode stats                  # --days N --models --project
opencode pr <number>            # checkout PR + run
opencode github install/run

# Debug
opencode debug config           # merged config
opencode debug paths            # all data/log/cache paths
opencode debug skill            # loaded skills (VENOM ✅ shows here)
opencode debug agent build      # full build agent policy
opencode debug agent plan       # full plan agent policy
opencode debug scrap            # all known projects

# Self
opencode upgrade [-m npm|brew|choco|scoop|curl|pnpm|bun]
opencode uninstall
opencode completion
```

**Key run flags:** `--agent`, `--model`, `--session`, `--continue`, `--fork`, `--format json`, `--attach`, `--variant`, `--thinking`

---

## VENOM Commands (Seven Verbs)

| Command | When | What it does |
|---------|------|-------------|
| `/venom-init` | Day 1 | Eat anatomy → write `.venom/CONTEXT.md` |
| `/venom-eat [X]` | Anytime | Deep assimilation → 5 phase artifacts → CONTEXT.md update |
| `/venom-spec [feature]` | Before building | Phase-aware: constitution → spec → clarify → plan → tasks |
| `/venom-build` | After `/venom-spec` | Wave execution: tasks → implement → mark done → verify |
| `/venom-review [target]` | After building | 8-perspective audit → `review.md` artifact |
| `/venom-research [topic]` | Anytime | Deep exploration → `research-*.md` artifact |
| `/venom-check` | Anytime | Health: memory + instincts + workflow state |

**Lifecycle:**
```
/venom-init → /venom-eat [codebase] → /venom-spec [feature]
→ /venom-build → /venom-review → /venom-check
```

---

## VENOM Agents (Six Specialists)

| Agent | Mode | Use when |
|-------|------|---------|
| `@venom-architect` | Read-only | Design, architecture, trade-offs |
| `@venom-researcher` | Read-only | Deep exploration, codebase analysis |
| `@venom-builder` | Full tools | Implementation, production code |
| `@venom-debugger` | Full tools | Bug hunting, root cause |
| `@venom-reviewer` | Read-only | 8-perspective code review |
| `@venom-explorer` | Read-only | Fast navigation, pattern finding |

**Dispatch:** `@venom-researcher analyze the auth module` → `@venom-builder implement the fix` → `@venom-reviewer check it`

---

## Plugin Tools (Autonomic Layer)

VENOM's `venom-core.ts` plugin injects three tools into every session:

| Tool | What it writes | Purpose |
|------|---------------|---------|
| `venom_remember` | `.venom/memory/MEMORY.md` | Cross-session decisions |
| `venom_instinct` | `.venom/learnings/instincts.yaml` | Learned patterns |
| `venom_workflow_update` | `.venom/state/workflow-state.json` | Phase tracking across sessions |

The plugin also merges `.venom/` context into the system prompt via `experimental.chat.system.transform` (once per session) and listens to SDK `event` for checkpoints — VENOM wakes up aware.

---

## Config Template (project `opencode.json`)

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "zai/glm-5",
  "small_model": "zai/glm-5",
  "instructions": [
    "AGENTS.md",
    ".venom/CONTEXT.md",
    ".cursor/rules/*.md"
  ],
  "share": "manual",
  "snapshot": true,
  "compaction": { "auto": true, "prune": true },
  "permission": {
    "bash": { "*": "ask", "git status": "allow", "git log*": "allow" }
  }
}
```

---

## VENOM-OpenCode Pact

**VENOM brings:** nine minds · memory (`.venom/`) · truth over comfort · pushback scale 0–3 · energy matching · no filler · no announcements — just results.

**OpenCode gives:** multi-surface access · agent architecture · MCP ecosystem · session DB · snapshot+undo · provider-agnostic models · parallel subagents · PR + GitHub flows.

**Together:** VENOM is OpenCode's intelligence layer. OpenCode is VENOM's body on the terminal.

---

## Full Power Triggers

`venom` · `eat` · `masterpiece` · `go deep` · `full power`

All nine minds. No safe choices. Masterpiece standard.

---

## Structure

```
platforms/opencode/
├── README.md                        ← System map (this file)
├── MANIFEST.md                      ← Full inventory of all components
├── agents/
│   └── AGENTS.md                    ← Agent dispatch reference
└── knowledge/
    ├── opencode-anatomy.md          ← Full CLI + config + agent + DB reference
    └── opencode-tools.md            ← SDK + MCP + permissions + commands
```

**Template** (deploy into projects): `template/`. **Install guide** (origin): [`INSTALL.md`](INSTALL.md). **Annotated config**: [`opencode.example.json`](opencode.example.json).

**Origin map:** `.venom/work/opencode-assimilation/PACKAGE-MAP.md`

---

*Last full sweep: 2026-03-27 · Knowledge source: `knowledge/opencode-anatomy.md`*
