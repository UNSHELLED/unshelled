---
paths:
  - ".claude/skills/**"
  - ".claude/agents/**"
  - ".claude/commands/**"
  - ".claude/rules/**"
---

# VENOM Skill & Agent Development Rules

## SKILL.md Files
- Always include YAML frontmatter with: name, description, allowed-tools
- Use `user-invocable: true` for slash-command skills
- Use `user-invocable: false` for auto-detected skills
- Include `ultrathink` in body for complex reasoning skills
- Use `!command` syntax for dynamic context injection
- Keep descriptions concise but specific — Claude uses them for auto-invocation

## Agent Files (.claude/agents/)
- Always include frontmatter: name, description, tools, model, memory
- Use `disallowedTools` to enforce read-only agents
- Set `memory: project` for shared learnings, `memory: user` for personal
- Write clear system prompts — agents don't inherit main conversation context
- Define specific output formats for consistent reporting

## Rules Files (.claude/rules/)
- Use `paths` frontmatter for path-specific rules (glob patterns)
- Omit `paths` for universal rules (loaded always)
- Keep rules actionable — "do X" not "consider X"
- One topic per file for modularity

## Commands (.claude/commands/)
- Include `description` in frontmatter for the slash-command menu
- Keep command prompts focused — they load into conversation context
- Use `$ARGUMENTS` for parameterized commands
