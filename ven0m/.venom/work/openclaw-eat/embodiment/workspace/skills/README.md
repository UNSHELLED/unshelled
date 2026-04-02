# Workspace skills (OpenClaw)

These folders follow **AgentSkills-compatible** layout: each skill is `skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`). OpenClaw merges `<workspace>/skills` into the agent prompt per [Skills](https://docs.openclaw.ai/tools/skills).

**VENOM skills** (`venom-spec`, `venom-build`, `venom-review`) are **workflow-only** — they do not declare `requires.bins` or installers. They tell the embedded agent how to behave when a task matches; they are not ClawHub packages.

**Validate on your machine**

```bash
openclaw skills list
openclaw skills check
```

Run from a directory whose workspace matches this repo’s `embodiment/workspace` (see `agents.defaults.workspace` in your OpenClaw config).
