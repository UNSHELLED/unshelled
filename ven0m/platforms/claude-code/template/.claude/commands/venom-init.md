---
description: "Scaffold .venom/ brain for this project. Run once on first install. Creates CONTEXT.md, MEMORY.md, learnings stubs, and ACTIVE.md."
allowed-tools: Read, Write, Bash(mkdir *), Bash(ls *)
---

# /venom-init

Set up the `.venom/` project brain. Run once per project.

## Steps

**Step 1 — Check existing**

Read `.venom/` if it exists. If it does:
- List what's there
- Ask: "This project already has .venom/. Overwrite stubs? (existing files will be backed up with .bak extension)"
- If no → show what exists and exit
- If yes → proceed with backup

**Step 2 — Create directory structure**

```
.venom/
├── CONTEXT.md
├── memory/
│   └── MEMORY.md
├── learnings/
│   ├── corrections.yaml
│   ├── instincts.yaml
│   └── preferences.yaml
├── work/
│   └── ACTIVE.md
└── state/
    (empty — workflow-state.json created by /venom-spec)
```

**Step 3 — Write stubs**

Write each file with the correct structure (not blank). Use the template content from the installed `.venom/` stubs.

**Step 4 — Report**

```
Brain initialized.

Created:
  .venom/CONTEXT.md          → fill with /venom-eat or manually
  .venom/memory/MEMORY.md    → decisions accumulate here
  .venom/learnings/           → corrections, instincts, preferences
  .venom/work/ACTIVE.md      → task state across sessions

Next: run /venom-eat to absorb this project's codebase into CONTEXT.md.
```

## Notes

- Does NOT fill CONTEXT.md — that's `/venom-eat`'s job
- Safe to re-run (backs up existing files, never silently overwrites)
- `.venom/state/` is created empty — workflow state is written by `/venom-spec`
