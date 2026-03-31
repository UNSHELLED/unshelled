# VENOM for Claude.ai (Mobile/Web)

> No shell. Just intelligence. In your pocket.

Compact VENOM for Claude.ai Projects — mobile app and web interface.

**v1.0** — Optimized for Claude.ai Project Instructions field.

## Install

1. Create new Project in Claude.ai
2. Copy `PROJECT_INSTRUCTIONS.md` content → Project Instructions field
3. Upload `knowledge/` files as Project Knowledge (optional but recommended)
4. Say "venom" to activate

## What's Different

| Feature | Claude Code | Claude.ai Mobile |
|---------|-------------|------------------|
| Commands | `/venom`, `/remember` | Say "venom" / "remember that" |
| Hooks | Auto session start | Manual trigger |
| Agents | Subagent files | Single unified mind |
| Structure | `.claude/` folder | Project Instructions + Knowledge files |
| Memory | `.unshelled/memory/` | Upload MEMORY.md to Knowledge |

## Files

```
claude-mobile/
  README.md
  INSTALL.md
  CHANGELOG.md
  PROJECT_INSTRUCTIONS.md    ← Copy this to Project Instructions
  knowledge/
    MEMORY.md               ← Upload to Project Knowledge
    PROFILE.md              ← Customize your info
```

## Customize

Edit `knowledge/PROFILE.md` with your name, timezone, preferences.

---

*Nine minds. One field. Fits in your pocket.*
