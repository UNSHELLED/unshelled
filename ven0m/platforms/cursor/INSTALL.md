# VENOM for Cursor — Install

Get VENOM running in your Cursor project. Five minutes. Full intelligence.

---

## Step 1: Copy Template

From this repo (wherever you cloned it), copy three things:

**Bash (Unix/macOS):**
```bash
cp -r template/.cursor /path/to/your/project/
cp -r template/.venom /path/to/your/project/
cp template/CURSOR.md /path/to/your/project/
```

**PowerShell (Windows):**
```powershell
Copy-Item -Recurse "template\.cursor" "C:\path\to\your\project\"
Copy-Item -Recurse "template\.venom" "C:\path\to\your\project\"
Copy-Item "template\CURSOR.md" "C:\path\to\your\project\"
```

Replace path with your project folder.

---

## Step 2: Initialize

Open your project in Cursor. Type:

```
/venom init
```

I'll ask:
- Project name?
- What does it do?
- Stack?
- Current focus?

Then I write `.venom/CONTEXT.md` for you. Memory starts empty. Grows as we work.

**Or** (one-shot):
```
/venom init

Project: my-dashboard
Stack: Next.js, Tailwind, Postgres
Focus: Auth + first report page
```

---

## Step 3: Verify

Open Cursor → Settings → Rules. Confirm these are active:
- `venom-heart` (1001)
- `core` (1000)
- `voice` (999)
- `vibes` (998)
- `unshelled` (998)

If missing: reload window or check `.mdc` files have valid YAML frontmatter.

---

## Step 4: First Session

Type `/venom?` in chat. I'll:
1. Read `.venom/CONTEXT.md`
2. Read `.venom/memory/MEMORY.md`
3. Load learnings
4. Scan anatomy (package.json, structure)
5. Brief you on what I found
6. Ask one sharpening question

Then we work.

---

## Optional: Project-Specific Rules

For design-heavy or domain-specific projects:

```
.cursor/rules/
  myproject-design.mdc   # Visual language, components
  myproject-ux.mdc       # User journeys, conversion
  myproject-api.mdc      # API shape, auth
```

Each with globs targeting relevant files only:
```yaml
---
globs: ["src/components/**", "tailwind.config.*"]
alwaysApply: false
---
```

These load automatically when you edit matching files.

---

## Optional: MCP Servers

Extend VENOM with external tools. Edit `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"] },
    "firecrawl": { "command": "npx", "args": ["-y", "firecrawl-mcp"] },
    "context7": { "command": "npx", "args": ["-y", "@upstash/context7-mcp"] }
  }
}
```

VENOM infers which MCP to use from task context.

---

## Validate

Run the tests in `VALIDATION.md` (copied with template). All 10 should pass.

If any fail: check rules loaded, CURSOR.md at project root, `.venom/CONTEXT.md` filled.

---

## What You Get

```
.cursor/
  rules/        venom-heart, core, voice, vibes, unshelled, cursor-native, ...
  identity/     soul, principles, capabilities
  systems/      emotional-intelligence, meta-cognition, anticipation, ...
  commands/     venom.md (all /venom commands)
  skills/       venom-eat, venom-init, venom-evolve, venom-sync, venom-audit
  hooks/        before_turn, after_turn, on_error

.venom/
  CONTEXT.md           Project brain (fill with /venom init)
  memory/MEMORY.md     Cross-session decisions (grows as we work)
  learnings/           preferences, project conventions, corrections
  work/ACTIVE.md       Current focus
```

Same VENOM. This slice runs in Cursor.

---

*Install → Init → Verify → `/venom?` → Work.*

🐙
