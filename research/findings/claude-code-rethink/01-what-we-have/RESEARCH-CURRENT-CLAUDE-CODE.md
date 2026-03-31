# Research Guide: CURRENT-CLAUDE-CODE.md

> What to read, what to find, what questions to answer before writing the audit.

**Output file:** `01-what-we-have/CURRENT-CLAUDE-CODE.md`
**Read every file in:** `platforms/claude-code/template/`

---

## Read In This Order

```
1.  platforms/claude-code/template/CLAUDE.md
2.  platforms/claude-code/template/.claude/settings.json
3.  platforms/claude-code/template/.claude/scripts/session-start.js
4.  platforms/claude-code/template/.claude/scripts/pre-compact.js
5.  platforms/claude-code/template/.claude/commands/venom.md
6.  platforms/claude-code/template/.claude/commands/remember.md
7.  platforms/claude-code/template/.claude/skills/VENOM/SKILL.md
8.  platforms/claude-code/template/.claude/rules/venom-standards.md
9.  platforms/claude-code/template/.claude/rules/skill-development.md
10. platforms/claude-code/template/.claude/knowledge/ (all 8 files)
11. platforms/claude-code/template/.claude/agents/ (all 10 files)
12. platforms/claude-code/README.md
13. platforms/claude-code/INSTALL.md
14. platforms/claude-code/CHANGELOG.md
```

---

## Questions To Answer

### Architecture
- How many hooks does the current template use? Which types?
- What does `session-start.js` actually load? Does the path it references exist?
- Does `pre-compact.js` do enough to survive compaction? What does it preserve?
- Is there a `UserPromptSubmit` hook? A `PreToolUse` hook? A `Stop` hook?
- What commands exist? What does each one do?

### CLAUDE.md
- How long is it? (token estimate)
- What does it @ reference vs inline?
- Does it contain the nine minds? The pact? Loop protocol? Situation matching?
- Does it reference `.unshelled/` anywhere? (known dead reference)
- What's missing from CLAUDE.md that OpenCode's AGENTS.md has?

### Agents
- How many agents? What are their tool lists?
- Do any agents have the autonomous loop protocol?
- Do any agents have the situation matching protocol?
- Compare description quality: brief or detailed? Disposition-wired or rule-wired?
- Does `venom-builder` have scope boundary rules? Wave execution protocol?
- Does `venom-debugger` have hypothesis tracking? Stall detection?

### Knowledge files
- Which knowledge files exist?
- Are they current or outdated?
- What's missing? (simulations.md? instincts.yaml schema?)
- Is `cognitive-matrix.md` present? `disposition-vs-rules.md`?

### Memory
- Where does the template tell VENOM to save memory?
- Does it reference `.unshelled/` (dead) or `.venom/` (correct)?
- Does `corrections.yaml` exist as a file? `instincts.yaml`? `preferences.yaml`?
- Is there a `.venom/state/workflow-state.json` concept?

### Commands
- Does `/venom-spec` exist? `/venom-build`? `/venom-review`? `/venom-check`?
- Does `/venom-research` exist? `/venom-init`? `/venom-eat`?
- What's the gap count: how many of the 9 designed commands are missing?

### Settings
- What permissions are granted?
- What environment variables are set?
- What hook types are wired?
- Is there a `settings.local.json` concept documented?

---

## Verdict Framework

For each file, decide:

| Verdict | Meaning |
|---------|---------|
| **keep** | Ship as-is. No changes needed. |
| **upgrade** | Core is right, content needs improvement. |
| **port** | Different platform has a better version — use that. |
| **discard** | Remove entirely from new template. |
| **create** | File doesn't exist — needs to be written from scratch. |

---

## Known Issues Going In (verify these)

From prior session analysis:
- `session-start.js` loads `.unshelled/memory/default/default.json` — this path was deleted from the repo → **dead reference, breaks silently**
- Only 2 commands exist (`/venom` + `/remember`) — 7 commands from the designed 9 are missing
- No `UserPromptSubmit` hook → energy matching cannot fire before model sees prompt
- No `PreToolUse` hook → no loop detection, no safety screening
- No `Stop` hook → task state not saved on session end
- `venom-bridge` exists — our design says remove it
- Agents lack loop protocol — compare to OpenCode agents

---

## Output Structure

Write `CURRENT-CLAUDE-CODE.md` using this format:

```markdown
# Audit: Current Claude Code Template (v2.4)

**Date audited:** [date]
**Template version:** v2.4
**Files examined:** [count]

## File Inventory
[table: file | lines | purpose | verdict]

## What Exists
[factual inventory, no opinions]

## Verdict Per File
[file: verdict + one-line reason]

## Rethink From Scratch
[if building today: what would this be for all three audiences?]

## What To Carry Forward
[specific: file + section + why it's good]

## What To Kill
[specific: file + reason]

## Gap Summary
[numbered list of gaps — what the new template must add]
```
