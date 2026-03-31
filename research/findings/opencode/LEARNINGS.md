# OpenCode assimilation — learnings & digest

---

## EAT-2026-03-27 — Full drafts + workflow + verified CLI

**Ate:** `.venom/work/opencode-assimilation/` — `WORKFLOW-JOB.md`, `MASTER-PLAN.md`, `INDEX.md`, `DRAFTS-INVENTORY.md`, `SESSION-LEGACY-DIGEST.md`, `ANATOMY.md` (seed), `drafts/**` (representative + `VENOM-OPENCODE-IMPLEMENTATION-PLAN.md` Parts 1–5), `systems/README.md`, plus **live** `opencode --help` family.

### Internalized structure

| Layer | Content |
|-------|---------|
| **Spine** | VENOM nine minds + Pact; OpenCode = 4th platform layer |
| **Overlay** | Systems 17–23 (context, workspace, tooling, workflows, verification, optimization, integration) |
| **Shipping plan** | `MASTER-PLAN.md` eight phases → future `platforms/opencode/` |
| **Draft tree** | `identity/`, `cognitive/`, `knowledge/`, `commands/`, `skills/VENOM_OPENCODE/` — merge order in `DRAFTS-INVENTORY.md` |
| **Ops** | Lanes A–G in `WORKFLOW-JOB.md`; verified vs unverified rule |

### Verified facts (non-negotiable)

- OpenCode **1.3.2** on this machine; npm global **`opencode-ai`**.
- CLI exposes **acp**, **mcp**, **run**, **serve**, **web**, **agent**, **session**, **db**, **export**, **import**, **models**, **stats**, **providers**, **github**, **pr**, **upgrade**, **uninstall**, **debug**, **attach**, **completion**.
- **ACP** and **MCP** are first-class subcommands, not guessed flags.

### Draft conflicts to fix when building

1. **VENOM-OPENCODE-IMPLEMENTATION-PLAN.md** lists “11 base systems” then enumerates 16 numbered items — **arithmetic/duplication error** in source doc; normalize to one table in `ARCHITECTURE.md`.
2. **systems/README.md** says “11 + 5 + 5” but lists **6** OpenCode cognitive files + integration — **reconcile counts** with Implementation Plan (17–23).
3. **Target path** in implementation plan (`wsl-venom\...`) — **superseded** by `MASTER-PLAN.md` → `platforms/opencode/`.
4. **knowledge/opencode-reference.md** — some `opencode /init` style lines blur **TUI** vs **CLI**; canonical CLI is in `CAPABILITIES.md`.

### Session export (`session-ses_2cf8.md`)

- Use **`SESSION-LEGACY-DIGEST.md`**; Linux paths from old env are not this machine.

---

## Never-again (OpenCode + VENOM)

- **Never** present generic MCP tutorials as OpenCode CLI without `--help` or doc cite.
- **Never** confuse **TUI slash commands** with **shell** `opencode subcommand` syntax.
- **Never** disable `.claude/` / skills via env if VENOM depends on them in that install (drafts flag `OPENCODE_DISABLE_CLAUDE_CODE`).

---

### EAT-2026-03-27f — skills, plugins, tools, commands, SDK, rules (deep docs pass)

**Skills system (SKILL.md — `opencode debug skill` already shows VENOM ✅):**
- Discovery paths: `.opencode/skills/NAME/SKILL.md`, `~/.config/opencode/skills/NAME/SKILL.md`, `.claude/skills/NAME/SKILL.md`, `.agents/skills/NAME/SKILL.md`
- Frontmatter required: `name` (matches dir, lowercase-alphanumeric), `description` (1-1024 chars)
- On-demand loading: agent calls `skill({ name: "…" })` tool — not auto-loaded into context. Agents see name + description, load content only when needed.
- Permission control per skill: `allow`/`deny`/`ask` with glob patterns. Per-agent overrides.

**Plugin system (full docs — verified):**
- Plugin = TS/JS module exporting async function `(ctx) => hooks`
- ctx has: `project`, `directory`, `worktree`, `client` (SDK), `$` (Bun shell)
- 30+ event hooks: session.idle, file.edited, tool.execute.before/after, shell.env, tui.prompt.append, permission.asked, experimental.session.compacting
- Custom tools via `tool()` helper with Zod schema — tools override built-in if same name
- `experimental.session.compacting` hook = inject custom context OR replace full compaction prompt
- `shell.env` hook = inject env vars into all shells (AI + user terminals)

**Commands (full docs):**
- `$ARGUMENTS`, `$1`/`$2`/`$3` positional args
- `!`\`cmd\`` = inject shell output into prompt template
- `@filename.ts` = inject file content into prompt
- `subtask: true` = force subagent invocation (keeps primary context clean)
- Custom commands can override built-in `/init`, `/undo`, etc.

**Rules / AGENTS.md (clarified):**
- `AGENTS.md` at project root (created by `/init`) + `~/.config/opencode/AGENTS.md` (global personal)
- Claude Code compat: `CLAUDE.md` + `~/.claude/CLAUDE.md` as fallbacks
- `instructions` config key accepts paths, globs, AND remote URLs (5s timeout)
- Both project + global AGENTS.md combined (not replaced) per issue #9282
- `AGENTS.md` in subdirs also respected (walks up from cwd to git root)

**SDK — full API (verified from docs):**
- `createOpencode()` — starts server + client. `createOpencodeClient()` — client only.
- Session: create, list, get, children, delete, update, init, abort, share, unshare, summarize, messages, message, prompt (with `noReply: true` for context-only injection), command, shell, revert, unrevert, permission reply
- `session.prompt({ body: { noReply: true, parts: [...] } })` = inject context WITHOUT triggering AI response — key for plugins
- Structured output: `format: { type: "json_schema", schema: {...}, retryCount: N }`
- Find: text (regex), files (glob), symbols; File: read (line ranges), status
- TUI control: appendPrompt, submitPrompt, clearPrompt, executeCommand, showToast, openHelp, openSessions, openThemes, openModels
- Events: SSE stream via `client.event.subscribe()`
- Auth: `client.auth.set()` to set provider API keys programmatically

**Tools — complete list (verified):**
bash · edit · write · read · grep · glob · list · lsp (experimental, OPENCODE_EXPERIMENTAL_LSP_TOOL=1) · patch · skill · todowrite · webfetch · websearch (OPENCODE_ENABLE_EXA=1 or Zen) · question

`websearch` via Exa AI — no API key needed if using Zen or env var.
All file ops (edit/write/patch/multiedit) controlled by single `edit` permission.
`todowrite` disabled for subagents by default.

**GitHub repo `Unshelled/venom-opencode`:**
Fresh fork. 0 stars, 0 forks. No commits beyond the fork base. Empty slate — ready to build.

### EAT-2026-03-27e — full CLI + config + agents (masterpiece pass)

- **All remaining subcommands captured:** debug (10 subcommands), providers, models (--verbose/--refresh), stats, github (install/run), pr, upgrade (-m method), export, import, attach. CAPABILITIES.md rebuilt completely — 20 sections.
- **Config system fully documented:** 6-level precedence, `~/.config/opencode/` as npm plugin project, `@opencode-ai/plugin` 1.3.2 → SDK + zod, `{env:}` / `{file:}` variable substitution, `tui.json` separation.
- **Agent system fully documented from docs:** 2 built-in primaries (build/plan) + 2 built-in subagents (general/**explore** — explore was NOT in old drafts), 3 hidden system agents (compaction/title/summary), JSON + markdown definition, full permission model (task, bash glob, last-wins rule).
- **NEW fact:** `/connect` TUI command (not just /share) — sets up Zen/provider.
- **NEW fact:** `explore` subagent (read-only, fast codebase search) — drafts missed this.
- **NEW fact:** Drag/drop image → attaches to prompt (docs verified).
- **NEW fact:** `default_agent` config key — set plan as default for org.
- **NEW fact:** `opencode debug skill` shows VENOM already loaded ✅.
- **Config paths verified:** `opencode debug paths` dump in ANATOMY.md.
- ANATOMY.md: config paths + active config + skill state all added.

### EAT-2026-03-27d — full drafts corpus digest

- **`drafts/CORPUS-DIGEST.md`** — Tier A–D trust map; command triggers (`venom` / `vd` / `vr` / `v-learn` / `help`); skill bundle defects (QUICKREF `/opencode`, README typo path); implementation-plan manifest math bugs (identity 5 vs 9 files, 48 vs 69); Tab/slash **upstream gaps**; **modes-opencode.md** missing from folder; arm labels wrong in `v-learn` draft.
- Deep read: `QUICKREF`, skill README, `vd`/`vr`/`v-learn`/`help` commands, implementation plan Part 8–9, `arm7-cognitive` opener.

### EAT-2026-03-27c — OSS README + drafts merge

- **GitHub default branch is `dev`** — raw `main` README 404s; use **`UPSTREAM-README-DIGEST.md`** in `drafts/`.
- **Upstream agents model:** `Tab` = **`build` ↔ `plan`** agents (not generic “plan mode”); **`@general`** subagent — aligns VENOM routing better than old Tab-only copy.
- **PATTERNS.md** created — merged behaviors + cognitive 17–23 map + persistence split.
- **Draft pseudocode** (e.g. workspace-scanner package manager loop) = **intent only** until rewritten from real repo or tests.

### EAT-2026-03-27b — `goooooooo` pass

- Dumped **`opencode agent|mcp|session|db|acp --help`** into `CAPABILITIES.md` §7–11.
- **`opencode db path`** → `C:\Users\karie\.local\share\opencode\opencode.db` (matches ANATOMY).
- **SQLite schema** captured in `ANATOMY.md` (Drizzle migrations + project/session/message/part/share/todo/account tables).
- **`opencode-ai` `package.json`:** name/version/bin/optional platform packages — noted in ANATOMY.
- **`ARCHITECTURE.md`** created — fusion SSOT stub.

*Append new EAT-* sections when a wave completes.*
