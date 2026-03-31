# VENOM — Claude Code Install Guide

Time to working: ~5 minutes.

---

## Prerequisites

- Claude Code installed (`npm install -g @anthropic-ai/claude-code`)
- Node.js ≥ 14 (`node --version`)
- An existing project (or a new directory)

---

## Step 1 — Copy the Template

From this repo, copy the template to your project:

```bash
cp -r platforms/claude-code/template/. /path/to/your/project/
```

Or clone the template structure directly into an existing project:

```bash
# From inside your project directory
rsync -av /path/to/venom-mine/platforms/claude-code/template/ .
```

**What gets copied:**
- `CLAUDE.md` → core identity
- `.claude/` → settings, scripts, agents, commands, knowledge, rules, skills
- `.venom/` → memory stubs (CONTEXT, MEMORY, learnings, ACTIVE)
- `CLAUDE.local.md.template` → personal override template

---

## Step 2 — Personal Overrides (Optional)

Copy the personal overrides template:

```bash
cp CLAUDE.local.md.template CLAUDE.local.md
cp .claude/settings.local.json.template .claude/settings.local.json
```

Edit `CLAUDE.local.md` with your name, language preference, and any personal corrections.

Add `CLAUDE.local.md` and `.claude/settings.local.json` to your `.gitignore` — these are personal, not shared.

---

## Step 3 — Verify Node.js Hooks

Test that the hook scripts run:

```bash
echo '{"cwd": "."}' | node .claude/scripts/session-start.js
```

Expected output: `{"continue":true}` or `{"continue":true,"systemMessage":"..."}` — both are correct.

If you see a Node.js error: ensure Node.js ≥ 14 is installed and in your PATH.

---

## Step 4 — Open Claude Code

```bash
cd /path/to/your/project
claude
```

---

## Step 5 — Initialize VENOM

In Claude Code, type:

```
/venom-init
```

VENOM will verify the `.venom/` directory structure and report what was created.

---

## Step 6 — Absorb Your Project

```
/venom-eat
```

VENOM runs 6 phases:
1. Shape (language, framework, dependencies)
2. Skeleton (data model, core entities)
3. Heartbeat (hot path, entry points)
4. Nervous system (APIs, events, integrations)
5. Risks (TODOs in critical paths, fragile areas)
6. Synthesize → writes `.venom/CONTEXT.md`

This takes 1-3 minutes depending on project size.

---

## Step 7 — Verify

Type `/venom` — you should see:

```
VENOM online. [Your project name].
[Status from CONTEXT.md]

Commands: init · eat · spec · build · review · check · research · remember

What are we working on?
```

VENOM is active.

---

## Gitignore

Add to your `.gitignore`:

```gitignore
# VENOM personal overrides
CLAUDE.local.md
.claude/settings.local.json

# VENOM ephemeral state
.venom/state/.tool-counter.json
.venom/work/eat-*.md
```

The `.venom/CONTEXT.md`, `MEMORY.md`, `learnings/`, and `ACTIVE.md` should be committed — they're the project's persistent memory.

---

## Updating VENOM

When a new version is released:

1. Check `CHANGELOG.md` for breaking changes
2. Copy updated files from `platforms/claude-code/template/` to your project
3. Preserve your `.venom/` contents — never overwrite these
4. Re-run `/venom-eat` if stack or architecture changed

---

## Troubleshooting

**Hook scripts not running:**
- Verify Node.js is in PATH: `which node`
- Check `settings.json` hook configuration
- Test manually: `echo '{}' | node .claude/scripts/session-start.js`

**CLAUDE.md not loading:**
- Ensure file is in project root (same directory as you opened Claude Code in)
- Check file isn't empty

**`.venom/` not found at session start:**
- Run `/venom-init` — creates the full directory structure
- Verify you're opening Claude Code from the project root

**Hooks blocked by permissions:**
- Review `.claude/settings.json` permissions section
- Add needed patterns to the `allow` list in `.claude/settings.local.json`
