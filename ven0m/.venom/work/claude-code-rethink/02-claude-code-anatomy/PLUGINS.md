# Claude Code Anatomy: Plugins

> **Verified against:** [Create plugins](https://docs.anthropic.com/en/docs/claude-code/plugins) + [Plugins reference](https://docs.anthropic.com/en/plugins-reference) (linked) (2026-03-30).

**Status:** 🟢 Research complete

---

## Plugin vs standalone `.claude/`

| | **Standalone** `.claude/` in repo | **Plugin** (`.claude-plugin/plugin.json` + dirs) |
|---|-----------------------------------|--------------------------------------------------|
| **Skill slash** | `/hello` | `/plugin-name:hello` (**namespaced**) |
| **Best for** | Solo project, quick experiments, private prefs | Teams, sharing, versioning, marketplace |
| **Install** | Already in repo | `/plugin install`, marketplace, `--plugin-dir` |

**Merge:** Enabling a plugin **merges** hooks/skills/agents with user/project config ([Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks)).

---

## Plugin layout (correct nesting)

**Only** `plugin.json` belongs **inside** `.claude-plugin/`. Do **not** put `commands/`, `agents/`, `skills/`, `hooks/` inside `.claude-plugin/` — they live at **plugin root**.

| Path | Purpose |
|------|---------|
| `.claude-plugin/plugin.json` | Manifest: `name`, `description`, `version`, `author`, … |
| `skills/<skill>/SKILL.md` | Namespaced skills |
| `agents/` | Subagent definitions |
| `commands/` | Markdown commands (same as project commands) |
| `hooks/hooks.json` | Same hook schema as `settings.json` |
| `.mcp.json` | MCP servers |
| `.lsp.json` | LSP servers |
| `settings.json` | Plugin defaults — **only `agent` key supported** to set main-thread agent |

---

## Manifest

Minimal `plugin.json`:

```json
{
  "name": "my-plugin",
  "description": "…",
  "version": "1.0.0",
  "author": { "name": "…" }
}
```

Full schema: [Plugins reference — manifest](https://docs.anthropic.com/en/plugins-reference#plugin-manifest-schema).

---

## Development & testing

```bash
claude --plugin-dir ./my-plugin
```

Load multiple: repeat `--plugin-dir`. **`/reload-plugins`** picks up changes without restart.

Local `--plugin-dir` **wins** over installed marketplace plugin of same name for that session (except managed force-enable).

---

## Plugin agents (limitations)

From [`AGENTS.md`](./AGENTS.md): plugin agents **ignore** `hooks`, `mcpServers`, `permissionMode` in frontmatter — copy to **`.claude/agents/`** if you need those fields.

---

## Official distribution

- Browse / install: [Discover and install plugins](https://docs.anthropic.com/en/discover-plugins)  
- Submit to Anthropic marketplace: [claude.ai/settings/plugins/submit](https://claude.ai/settings/plugins/submit) or Console (per doc)  
- Reference implementations: [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) (community patterns; not duplicated here)

---

## VENOM: template vs plugin

| Approach | Pros | Cons |
|----------|------|------|
| **Template** (`platforms/claude-code/template/`) | Full control, copy into repo, no namespace | Manual sync, no auto-update |
| **Plugin** | Installable, teams, versioning | Namespaced `/plugin:skill`; extra packaging |

**Recommendation:** Ship **template** as SSOT for “full body” VENOM; optionally **publish a thin plugin** later that wraps the same skills/agents for one-command install — same content, two distribution paths.

---

## Hook / plugin interaction

- Plugin hooks merge **additively**; **managed** `allowManagedHooksOnly` can lock down to managed hooks only.
- VENOM project hooks + user plugins: **both** can fire — test for **duplicate** or **conflicting** PreToolUse handlers.

---

## References

- [Create plugins](https://docs.anthropic.com/en/docs/claude-code/plugins)  
- [Plugins reference](https://docs.anthropic.com/en/plugins-reference)  
- [Plugin marketplaces](https://docs.anthropic.com/en/plugin-marketplaces)  

---

## Checklist

- [x] Manifest + directory layout  
- [x] Namespace vs standalone  
- [x] `--plugin-dir` / reload  
- [x] Template vs plugin trade-off  
