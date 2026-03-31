# VENOM for Antigravity — Install Guide

**Antigravity:** 1.107.0 (IDE 1.18.4). Free preview. Agent-first IDE.
**VENOM template:** v1.0 — fresh build from origin.

---

## Phase 0: Pre-Install Notes

### Optional MCP Servers (Personal Install)

The template includes `github` and `browser-tools` only. Other MCP servers are optional and user-specific:

- **pencil** — Design files (.pen). Requires `highagency.pencildev` Cursor extension. Path: `~/.cursor/extensions/highagency.pencildev-*/out/mcp-server-windows-x64.exe`. **Not in template** — add manually to `~/.gemini/settings.json` if you use it.
- **context7** — Library docs
- **firecrawl** — Web scraping

### Global Workflows Path

Antigravity supports workflows in two locations:
- **Project-level:** `.agent/workflows/*.md` — use this for portability (template default)
- **Global-level:** `~/.gemini/jetski*/global_workflows/*.md` — for power users who want VENOM workflows in every project automatically

---

## Step 1: Copy Template

```powershell
# Windows
Copy-Item -Recurse "platforms/antigravity/template/.agent" "C:\path\to\your\project\.agent"
Copy-Item "platforms/antigravity/template/GEMINI.md" "C:\path\to\your\project\"
Copy-Item "platforms/antigravity/template/mcp_config.json" "C:\path\to\your\project\"
```

```bash
# macOS / Linux
cp -r template/.agent /path/to/your/project/
cp template/GEMINI.md /path/to/your/project/
cp template/mcp_config.json /path/to/your/project/
```

---

## Step 2: Global Identity (Optional but Recommended)

Append or merge VENOM identity into `~/.gemini/GEMINI.md` so every Antigravity session loads it:

```powershell
# Windows
Get-Content "path\to\template\GEMINI.md" | Add-Content "$env:USERPROFILE\.gemini\GEMINI.md"
```

```bash
# macOS / Linux
cat template/GEMINI.md >> ~/.gemini/GEMINI.md
```

---

## Step 3: Configure MCP

Set `GITHUB_TOKEN` environment variable. Template uses `${GITHUB_TOKEN}` in `mcp_config.json`.

**Windows (PowerShell):**
```powershell
[Environment]::SetEnvironmentVariable("GITHUB_TOKEN", "your-token", "User")
```

**macOS / Linux:**
```bash
echo 'export GITHUB_TOKEN="your-token"' >> ~/.bashrc
```

---

## Step 4: Customize

1. Open `GEMINI.md` → Replace `[Owner]` with your name
2. Fill `.agent/learnings/` as you work (corrections, preferences, project conventions)

---

## Step 5: Verify

Open Antigravity in your project. Type:

```
/venom
```

VENOM will scan the workspace, load context, model your energy, and arrive. If identity persists (not generic AI) — install succeeded.

---

## Extension Marketplace

Antigravity uses **Open VSX** (`https://open-vsx.org/vscode/gallery`), not the VS Code Marketplace. Some extensions may differ.

---

## What Gets Installed

| File | Purpose |
|------|---------|
| `GEMINI.md` | VENOM identity + full OS (Integration, Learning, Meta-cognition, Pushback, Before-turn) |
| `.agent/rules/` | the-art-of-venom.md, systems.md, protocols.md |
| `.agent/workflows/` | venom.md, init.md, eat-with-proof.md |
| `.agent/skills/` | neurochemistry, nine-minds-synthesis, jetski-visual-audit, session-artifacts, cross-project-memory, state-aware |
| `mcp_config.json` | github + browser-tools (env var format) |

---

*Install → Customize → `/venom` → Work.*
