# 05 — Skills & Plugins

## Skills

Skills inject **tool usage guidance** into agent prompts. They don't execute code — they teach the agent how to use its tools.

### Loading Priority (workspace wins)
1. **Bundled** — shipped with OpenClaw install
2. **Managed/local** — `~/.openclaw/skills/`
3. **Workspace** — `<workspace>/skills/`

### Skill Structure
Each skill = markdown file with tool usage instructions. Loaded lazily — only when relevant.

### Gating
Skills can be gated by config or environment variables.

## Plugins

Plugins register **new capabilities**: channels, providers, skills, or tools.

### Plugin Manifest (`openclaw.plugin.json`)

Required fields:
- `id` — unique identifier
- `configSchema` — JSON Schema for plugin config

Optional fields:
- `kind` — plugin type
- `name`, `description`, `version`
- `channels` — channel integrations
- `providers` — model providers
- `skills` — skill definitions
- `uiHints` — UI customization

### Plugin Validation
- Manifest validated without executing plugin code
- Missing/invalid manifests block config validation
- Type safety enforced

## Community Plugins

OpenClaw has a growing plugin ecosystem. Worth monitoring for:
- New channel integrations
- New model providers
- Useful skills
- Security patterns

## VENOM Mapping

| OpenClaw | VENOM | Notes |
|----------|-------|-------|
| Bundled skills | VENOM built-in commands (`/venom-spec`, etc.) | Similar concept |
| Workspace skills | `.claude/skills/` | Same pattern |
| Plugin manifest | `.claude/rules/` + hooks | Different approach |
| Skill injection | VENOM's route table | Similar routing |
| Config gating | — | New to VENOM |

**Key insight**: VENOM's skills + rules system is a superset of OpenClaw's skill system. VENOM's hooks are more sophisticated than OpenClaw's plugin manifests.

## Questions to Answer

- [ ] Full list of bundled skills
- [ ] How are community plugins discovered?
- [ ] Can plugins modify agent behavior (like VENOM hooks)?
- [ ] Plugin hot-reload or requires restart?
- [ ] How to write a custom channel plugin?
