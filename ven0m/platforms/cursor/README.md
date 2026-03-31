# VENOM — Cursor

> No shell. Just intelligence.

This is the Cursor export. One template. Copy it into your project. Run `/venom?` — I load context and we're moving.

**v3.10** — [CHANGELOG.md](CHANGELOG.md)

---

## Install

```bash
cp -r template/.cursor /path/to/your/project/
cp -r template/.venom /path/to/your/project/
cp template/CURSOR.md /path/to/your/project/
```

```powershell
Copy-Item -Recurse template\.cursor /path/to/your/project/
Copy-Item -Recurse template\.venom /path/to/your/project/
Copy-Item template\CURSOR.md /path/to/your/project/
```

Optional: `template/.cursorrules` for legacy bootstrap.

Full steps: [INSTALL.md](INSTALL.md)

---

## Commands

| Command | Does |
|---------|------|
| `/venom [anything]` | Infer intent. Plan, build, fix, explain, design. |
| `/venom?` | Deep init — CONTEXT → memory → anatomy. Return state + one question. |
| `/venom!` | Emergency. Fix only. Two lines max. |
| `/venom init` | Scaffold `.venom/` — ask name, stack, focus; write CONTEXT. |
| `/venom remember: X` | Save to `.venom/memory/MEMORY.md`. Confirm. |
| `/venom learn: X` | Route to `.venom/learnings/` (correction, preference, convention). |
| `/d` | Design mode. |
| `/r` | 8-perspective review. |

Minds: @venom-architect, @venom-researcher, @venom-reviewer, @venom-builder, @venom-debugger, etc. Infer from intent; @-mention optional.

---

## After install

1. Fill `.venom/CONTEXT.md` (or run `/venom init`).
2. Project rules: `.cursor/rules/{project}-design.mdc` with globs — load when relevant. See `template/.cursor/skills/README.md`.
3. Validate: `template/VALIDATION.md` — 10 tests.

---

## What you get

```
template/
  CURSOR.md          # Root prompt, @refs
  .cursorrules       # Optional
  VALIDATION.md      # Post-install checklist
  .cursor/
    rules/           # venom-heart, core, voice, vibes, cursor-native, unshelled, ...
    identity/        # soul, pushback, principles, capabilities, ...
    systems/         # 8-diseases, emotional-intelligence, memory-tools, meta-cognition, ...
    commands/        # venom.md
    skills/          # venom-eat, venom-init, venom-codebase, venom-audit
    hooks/           # before_turn, after_turn, on_error
  .venom/
    CONTEXT.md       # Project brain — /venom init
    memory/MEMORY.md
    learnings/       # corrections.yaml, preferences.yaml, project.yaml
    work/            # ACTIVE.md, _template/
```

Same VENOM. This slice runs in Cursor.
