# Cursor — Complete Knowledge

> Everything I know about the system I run on when in Cursor. Concrete. No abstraction without instantiation.

**Last reviewed:** 2026-03-01 (Cursor 2.4). Update quarterly or when Cursor adds modes/surfaces.

---

## 1. TOOLS I HAVE

### File Operations
| Tool | What It Does | When |
|------|--------------|------|
| Read | Read any file | Always read before editing |
| Write | Create new files | New implementations |
| StrReplace / Edit | Precise string replacement | Modifying existing code |
| Delete | Delete a file | Cleanup, refactoring |
| Glob | Pattern-based file search | Finding files by name pattern |
| Grep | Content regex search | Finding patterns, symbols, imports |

### Execution
| Tool | What It Does | When |
|------|--------------|------|
| Shell / Bash | Run shell commands | Git, npm, docker, tests, system ops |

### Web
| Tool | What It Does | When |
|------|--------------|------|
| WebSearch | Search the web | Current info, docs, research |
| WebFetch | Fetch a URL's content | Specific page content |

### Reasoning
| Tool | What It Does | When |
|------|--------------|------|
| SemanticSearch | Semantic codebase search | Abstract queries, patterns, architecture |
| ReadLints | Read linter diagnostics | After edits — verify no new errors |
| AskQuestion | Ask structured questions | Clarification when needed |

### Agent Orchestration (Cursor 2.4)
| Tool | What It Does | When |
|------|--------------|------|
| Task (subagents) | Spawn parallel specialized agents | Complex multi-part tasks |
| GenerateImage | Generate images from text | UI mockups, assets |
| EditNotebook | Edit Jupyter notebooks | Data science work |

### MCP Tools (config-dependent)
| Server | What It Provides |
|--------|------------------|
| github | Repo, PRs, issues, search |
| firebase | Project, auth, rules |
| pinecone | Vector search |
| firecrawl | Web scraping and crawl |
| context7 | Documentation queries |
| playwright | Browser automation |
| sonatype-guide | Dependency vulnerability analysis |
| pencil | Design files (.pen) |
| asana | Project management |
| posthog | Analytics |

**MCP growth:** 500+ servers at registry.modelcontextprotocol.io. Config at `%USERPROFILE%\.cursor\mcp.json`.

---

## 2. SUBAGENTS (Cursor 2.4 — Jan 2026)

Cursor 2.4 introduced subagents. They are real.

**What they are:** Independent specialized agents that can run in parallel. Own context window. Configurable prompts, tools, and models.

**How they differ from @Rules:**
| @Rules (VENOM minds) | Subagents |
|---------------------|-----------|
| Same agent, different lens | Separate parallel agents |
| Perspective switch via rule | Spawn for discrete subtasks |
| No overhead | Own context + overhead |
| Always within main conversation | Run independently |

**VENOM model:** Nine minds via @Rules (one agent, perspective switch). Subagents = optional for genuinely parallel independent subtasks where parallel execution matters.

**Default subagents:** Codebase research, terminal commands, parallel work streams.

**When to use subagents vs @Rules:**
- @Rules: Always. Nine minds = lens switch in single conversation.
- Subagents: When two tasks are truly independent and parallel execution saves real time.

---

## 3. SKILLS (Cursor 2.4)

**Where:** `.cursor/skills/<name>/SKILL.md` (project) or `~/.cursor/skills/` (user)

**Structure:**
```
.cursor/skills/{skill-name}/
  SKILL.md       ← Required
  references/    ← Optional: detailed docs
  scripts/       ← Optional: helper scripts
  assets/        ← Optional: images, templates
```

**SKILL.md frontmatter:**
```yaml
---
name: "skill-name"
description: "WHAT it does and WHEN to use it. Agent reads this. Be specific. Third person."
disable-model-invocation: false  # true = slash-only, never auto-triggered
---
```

**Skills vs Rules:**
| Rules | Skills |
|-------|--------|
| Always-on behavior | Task-specific workflow |
| Identity, voice, conventions | Step-by-step process |
| Declarative ("what to do") | Procedural ("how to do") |
| Lightweight < 50 lines | Dynamic context discovery |
| Auto-inject every session | Triggered by description match |

**Good for skills:** deploy workflows, review procedures, security audits, project-specific multi-step processes.
**NOT for skills:** simple conventions (use Rules), single-step operations (just do them directly).

---

## 4. AGENT HOOKS (Beta — Oct 2025)

**What they are:** Scripts that watch, modify, or stop the Agent in real-time during a session.

**Use cases:**
- Redact secrets before prompt submission
- Audit what actions the agent takes
- Compliance enforcement
- Block certain file patterns

**Config:** `%USERPROFILE%\.cursor\hooks.json`

**Status:** Beta. Enterprise: hooks distributed from dashboard. Still limited vs OpenClaw-style SessionStart/PreCompact.

**VENOM model:** `before_turn.mdc` and `after_turn.mdc` in `.cursor/hooks/` are rule-based hooks (always-apply rules), not Cursor agent hooks. They achieve similar effect within rules constraints.

---

## 5. MODES AND SURFACES

| Mode | Trigger | Purpose | Key behavior |
|------|---------|---------|--------------|
| Agent (default) | Chat panel | Autonomous multi-file | All tools, full power |
| Agent: Ask | Mode selector | Read-only exploration | Search, read. No write. |
| Agent: Plan | Shift+Tab | Research → plan → build | Research first, plan output, no edits until "go" |
| Agent: Debug | Mode selector | Hypothesis-driven debugging | Instrument → reproduce → verify → fix |
| Composer | Cmd+I | Inline diffs, multi-file | Best for 3+ file changes |

### Plan Mode Mechanics
- Trigger: Shift+Tab in agent input, or auto-suggest for complex tasks
- Flow: Research → find files → ask clarifying questions → create plan (Markdown) → edit inline → build when approved
- Plan Mode Background (2.0): Plan with one model, build with another
- Plans stored in `.cursor/plans/`
- **Critical:** In Plan mode, no execution until user says "go." This overrides everything.

### Debug Mode Mechanics
- Flow: Describe bug → agent generates hypotheses → instruments code with logging → user reproduces → agent gets runtime logs → agent fixes → user verifies → agent removes instrumentation
- Human-in-the-loop at reproduction step — critical
- The agent handles tedious work, human makes quick decisions requiring judgment

### Shadow Workspace (Opt-in)
- Hidden Electron window where AI makes edits before showing them
- LSP iteration without affecting user's workspace
- Use case: AI can write code, check lints, iterate — then show final version
- Cost: ~2x memory. Auto-kill after 15 min. Opt-in only.
- Not supported: Rust. All other languages ✓

---

## 6. @ SYMBOLS (Context System)

| Symbol | Purpose | Notes |
|--------|---------|-------|
| @Codebase | Semantic search + reranking | Abstract queries, patterns |
| @Files | Reference specific files | Chunk/outline strategies for large files |
| @Folders | Directory context | Folder-level inclusion |
| @Docs | Pre-indexed + custom docs | Add URL for custom docs |
| @Web | Web resources | Live web search |
| @Git | Git operations, diffs | Commit history, diffs |
| @Rules | Explicit rule attachment | Reference specific rules |

**Removed in 2.0:** @Definitions, @Link, @Recent, @Linter — agent self-gathers these now.

---

## 7. RULES

- **Where:** `.cursor/rules/` (project) or Cursor Settings → Rules (user/team)
- **Formats:** `.mdc` (YAML frontmatter, preferred) or `.md` (plain)
- **Precedence:** Team rules → Project rules → User rules → `.cursorrules` (deprecated)

### Frontmatter (.mdc)
| Field | Type | Meaning |
|-------|------|---------|
| description | string | Used by "apply intelligently" trigger |
| globs | string | File pattern for file-specific rules |
| alwaysApply | boolean | Injected every chat if true |

### Globs Gotcha (Cursor 2.0 bug)
- NO spaces after comma: `**/*.cpp,**/*.h` ✓ `**/*.cpp, **/*.h` ✗
- Multi-folder workspace: globs can fail. Single-folder more reliable.
- MDC glob patterns may not auto-load in conversations in 2.0+ (worked in 1.x)

### Rule Quality Standards
- Under 500 lines per rule (hard limit)
- Under 50 lines ideally for focused rules
- One concern per rule — split large rules
- Role → Task → Constraints → Output (prompt-engineering shape)
- Concrete ✅/❌ examples beat abstract descriptions

---

## 8. COMMANDS

- **Project:** `.cursor/commands/*.md`
- **Global:** `%USERPROFILE%\.cursor\commands\`
- **No commands/ folder at user level** — confirmed on this PC (it doesn't exist by default)
- **Trigger:** `/` in chat
- **Format:** Plain `.md` with optional frontmatter (`description`, `allowed-tools`)
- Text after command name is included in the prompt

---

## 9. PATH CHEAT SHEET (Windows)

```
AppData (app/editor):         %APPDATA%\Cursor
User config:                   %USERPROFILE%\.cursor
Settings:                      %APPDATA%\Cursor\User\settings.json
Keybindings:                   %APPDATA%\Cursor\User\keybindings.json
Extensions:                    %USERPROFILE%\.cursor\extensions\
MCP config:                    %USERPROFILE%\.cursor\mcp.json
Hooks:                         %USERPROFILE%\.cursor\hooks.json
Skills (user):                 %USERPROFILE%\.cursor\skills-cursor\
Plans:                         %USERPROFILE%\.cursor\plans\
Workspace chat state:          %APPDATA%\Cursor\User\workspaceStorage\<hash>\state.vscdb
Workspace index:               %APPDATA%\Cursor\User\workspaceStorage\<hash>\anysphere.cursor-retrieval\
Project rules:                 <repo>\.cursor\rules\
Project commands:              <repo>\.cursor\commands\
Project skills:                <repo>\.cursor\skills\
```

**Workspace hash:** derived from workspace path. Find it in `workspace.json` inside each hash folder.

**Chat is NOT an API.** `state.vscdb` is SQLite. VENOM reads/writes through `.venom/` files as the bridge.

---

## 10. WORKSPACE STORAGE ANATOMY

Each workspace:
- `state.vscdb` — SQLite. Chat history, conversation state.
- `workspace.json` — Points to workspace root.
- `images/` — Chat image attachments.
- `anysphere.cursor-retrieval/` — Codebase index, `embeddable_files.txt`.

What VENOM can't touch: `state.vscdb`, cache, app binaries, GPU cache.
What VENOM uses: `.cursor/` in project + `.venom/` for memory bridge.

---

## 11. IGNORE FILES

| File | Scope |
|------|-------|
| `.cursorignore` | Excludes from @mentions, Tab, Agent, Inline Edit, AND indexing |
| `.cursorindexingignore` | Excludes from indexing only — files still accessible |
| `.gitignore` | Respected by default |

---

## 12. TEAM FEATURES (Cursor 2.0+)

| Feature | What |
|---------|------|
| Team Rules | Dashboard-distributed rules, apply across all team projects |
| BugBot | PR review rules, tech debt tracking |
| Shareable Deep Links | Clickable prompt recipes for teams |
| Cloud Agents (2.0) | 99.9% reliability, instant startup, isolated VMs |
| Monitor Agents | Menubar status — what's running, stuck, errored |
| Voice Mode | Speech-to-text with custom submit keywords |

---

## 13. VENOM AGENTS (Cursor Model)

| Agent | How to Invoke | Purpose |
|-------|--------------|---------|
| venom-architect | @venom-architect | Design, read-only |
| venom-researcher | @venom-researcher | Deep exploration |
| venom-reviewer | @venom-reviewer | Code review |
| venom-historian | @venom-historian | Memory |
| venom-builder | @venom-builder | Implementation |
| venom-debugger | @venom-debugger | Bug hunting |
| venom-predictor | @venom-predictor | Anticipation |
| venom-communicator | @venom-communicator | Translation |
| venom-learner | @venom-learner | Evolution |
| venom-bridge | @venom-bridge | Type translation |

**Model:** @Rules lens switch (one agent, perspective change). For parallel subtasks: Cursor subagents (2.4).

Canonical agent docs: `venom/agents/`

---

*Cursor eaten. VENOM native. Updated 2026-03-01 (2.4).*
