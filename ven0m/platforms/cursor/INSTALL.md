# VENOM Cursor — Install Guide

---

## Step 1: Copy Template

Run from the repo directory that contains `template/` (e.g. `venom/platforms/cursor` or your clone root).

**bash (Unix/macOS):**
```bash
cp -r template/.cursor /path/to/your/project/
cp -r template/.venom /path/to/your/project/
cp template/CURSOR.md /path/to/your/project/
cp template/VALIDATION.md /path/to/your/project/
```

**PowerShell (Windows):**
```powershell
Copy-Item -Recurse "template\.cursor" "C:\path\to\your\project\"
Copy-Item -Recurse "template\.venom" "C:\path\to\your\project\"
Copy-Item "template\CURSOR.md" "C:\path\to\your\project\"
Copy-Item "template\VALIDATION.md" "C:\path\to\your\project\"
```
Replace `C:\path\to\your\project\` with your project folder (forward slashes also work in PowerShell).

Optional — copy `.cursorrules` for legacy bootstrap:
```bash
cp template/.cursorrules /your/project/
```

**Next:** Go to Step 2. Then paste the **Best init prompt** (Option A or B) in Cursor chat to run `/venom init`.

---

## Step 2: Customize

**Required:**
1. Open `CURSOR.md` → Fill `Owner:` line with your name and timezone
2. Run init (see **Best init prompt** below).

**Or manually:**
2. Open `.venom/CONTEXT.md` → Fill project identity, stack, current focus, navigation
3. Open `.cursor/rules/project.mdc` → Fill project name, stack, key directories (on-demand reference)

**Optional:**
4. `.venom/learnings/preferences.yaml` — Add communication preferences
5. `.venom/learnings/project.yaml` — Add known conventions immediately
6. `.venom/learnings/instincts.yaml` — Learned patterns (confidence-scored); see file header
7. Spec/build workflows aligned with **Claude Code v3**: example shape at `.venom/state/workflow-state.example.json`. If you track phase in a file, runtime path is `.venom/state/workflow-state.json` (add to `.gitignore` if it churns)
8. Add project-specific rules (see step 4)

### Best init prompt (paste after copying template)

**Option A — One line (VENOM will ask 3 questions):**
```
/venom init
```

**Option B — All-in-one (fill and paste; one round-trip):**
```
/venom init

Project name: [e.g. my-dashboard]
What it does: [e.g. Internal analytics for the sales team]
Stack: [e.g. Next.js, Tailwind, Postgres]
Current focus: [e.g. Auth + first report page]
```
VENOM will read anatomy, generate `.venom/CONTEXT.md`, confirm or create `memory/MEMORY.md` and `learnings/` stubs, set `work/ACTIVE.md`, and reply with orientation + "Ready. What are we building?"

---

## Step 3: Verify Rules Load

1. Open Cursor → Settings → Rules
2. Confirm these rules show as active:
   - `venom-heart` (1001)
   - `core` (1000)
   - `voice` (999)
   - `vibes` (998)
   - `unshelled` (998)
   - `cursor-context` (988)
   - `venom-agents` (987) — minds always in context

**Triggers:** `venom`, `eat`, or complex work (multi-file, creative, architectural, ambiguous).

If rules don't load: check `.mdc` files have valid YAML frontmatter. Reload window.

---

## Step 4: Add Project-Specific Rules (Optional)

For design-heavy or domain-specific projects, add targeted rules:

```
.cursor/rules/
  {project}-design.mdc   # Visual language, tokens, components
  {project}-ux.mdc       # Journeys, page jobs, conversion
  {project}-api.mdc      # API shape, auth, pagination
```

Each with globs matching only relevant files:
```yaml
globs: ["src/components/**", "tailwind.config.*"]
alwaysApply: false
```

---

## Step 5: Configure MCP (Optional)

MCP servers extend VENOM with external tools. Edit `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"] },
    "firecrawl": { "command": "npx", "args": ["-y", "firecrawl-mcp"] },
    "context7": { "command": "npx", "args": ["-y", "@upstash/context7-mcp"] }
  }
}
```

VENOM infers which MCP to use from task context. See `.cursor/rules/mcp-tools.mdc`.

---

## Step 6: Validate

Run the validation tests in your project's `VALIDATION.md`. All 10 tests should pass.

If any fail: check rules loading, priority order, and that `CURSOR.md` is at project root.

---

## Step 7: First Session

Type `/venom?` in chat. VENOM will:
1. Read `.venom/CONTEXT.md` — project brain
2. Read `.venom/memory/MEMORY.md` — past decisions
3. Load learnings (preferences, corrections, project conventions)
4. Read project anatomy (package.json, structure, etc.)
5. Brief you on what it found
6. Be ready to work

If `.venom/CONTEXT.md` is still a stub: type `/venom init` to fill it together.

---

## .venom/ Workspace

The `.venom/` folder is VENOM's desk for this project:

```
.venom/
├── README.md              # Orientation
├── CONTEXT.md             # Project brain — fill this
├── memory/
│   └── MEMORY.md          # Cross-session decisions, patterns
├── learnings/
│   ├── preferences.yaml   # How you work
│   ├── project.yaml       # Conventions observed
│   └── corrections.yaml   # Never do X again
└── work/
    ├── ACTIVE.md          # Current focus
    └── _template/         # Copy per feature: thinking, planning, discussion, notes
```

**Work lifecycle:** Create `work/[feature]/` when planning a feature. When done: key decisions → `memory/MEMORY.md`, useful docs → `docs/` (if applicable), rest → delete.

---

## Gitignore Recommendations

```gitignore
# VENOM workspace — keep most of it (it's your institutional memory)
# Only exclude if working on a team where these are personal:
# .venom/learnings/preferences.yaml

# Exclude raw brainstorm (optional — personal preference)
# .venom/work/*/thinking.md
```

Everything in `.venom/` is worth tracking by default — it's your project memory.

---

*Install → Customize → Validate → `/venom?` → Work.*
