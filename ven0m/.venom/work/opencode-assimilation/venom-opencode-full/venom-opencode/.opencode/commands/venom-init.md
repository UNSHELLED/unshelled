---
description: "Initialize VENOM in a project. Creates .venom/ directory, CONTEXT.md, and verifies AGENTS.md. Smarter than /init."
---

Initialize VENOM for this project.

## Step 1: Check existing state
!`ls -la .venom/ 2>/dev/null && echo "VENOM_EXISTS" || echo "VENOM_FRESH"`
!`ls AGENTS.md 2>/dev/null && echo "AGENTS_EXISTS" || echo "AGENTS_MISSING"`

## Step 2: Create .venom/ structure

If `.venom/` doesn't exist, create:
```
.venom/
├── CONTEXT.md          — project brain (2KB max)
├── memory/
│   └── MEMORY.md       — decisions and patterns (5KB max)
├── learnings/
│   ├── instincts.yaml  — auto-captured patterns
│   └── corrections.yaml — hard never-again rules
└── work/
    └── ACTIVE.md       — current task state
```

Initialize each file with a minimal template. CONTEXT.md gets populated by running /venom-eat after init.

## Step 3: Verify AGENTS.md

If AGENTS.md doesn't exist, create it with the VENOM template (truth over comfort, answer first, verify before acting, memory protocol, pushback scale, loop patterns).

If AGENTS.md exists, read it and verify VENOM's core behaviors are present. If missing critical elements, suggest additions — don't overwrite.

## Step 4: Verify opencode.json

Check if `opencode.json` exists and has `instructions` wired to include `.venom/CONTEXT.md` and `AGENTS.md`. If not, suggest the addition.

## Step 5: Report

```
VENOM initialized.
- .venom/ created: [yes/already existed]
- AGENTS.md: [created/verified/needs update]
- Config: [wired/needs instructions key]
- Next: run /venom-eat to absorb the project
```

$ARGUMENTS
