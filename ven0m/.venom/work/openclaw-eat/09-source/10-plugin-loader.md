# 10 — Plugin loader

## Purpose

Discover, validate, and load plugins: channels, providers, skills, tools — without executing untrusted code before manifest validation.

## Key files (OpenClaw clone)

```
packages/core/src/plugins/   ← illustrative; confirm in openclaw-main
├── PluginLoader.ts          ← Discovery + load
├── validator.ts             ← Manifest validation
└── registry.ts            ← Registry
```

Use **`openclaw-main/`** search for `PluginLoader`, `openclaw.plugin.json`, `bundle-manifest`.

## Discovery flow

1. Scan plugin directories  
2. Load manifest (`openclaw.plugin.json` or bundle manifests)  
3. Validate schema **before** executing plugin code  
4. Register capabilities  
5. Load implementation  

## Manifest (conceptual)

- **Required:** `id`, `configSchema`  
- **Optional:** `name`, `description`, `version`, `kind`, `channels`, `providers`, `skills`, `uiHints`  

## Bundle manifests (from source notes)

`BundlePluginManifest`-style bundles may reference:

- Codex: `.codex-plugin/plugin.json`  
- Claude: `.claude-plugin/plugin.json`  
- Cursor: `.cursor-plugin/plugin.json`  

Discovery should stay boundary-safe (paths confined to workspace root).

## Plugin kinds

1. Channel  
2. Provider  
3. Skill  
4. Tool  

## VENOM mapping

| OpenClaw | VENOM |
|----------|--------|
| Skill plugins | `.claude/skills`-like workflows |
| Tool plugins | MCP-style extension |
| Manifest validation | Explicit safety vs ad-hoc |

## Questions

- [ ] Community plugin discovery / registry  
- [ ] Hooks into agent lifecycle (compare to VENOM hooks)  
- [ ] Hot-reload vs restart  
- [ ] Writing a channel plugin from scratch  
- [ ] Dependencies and versioning  
