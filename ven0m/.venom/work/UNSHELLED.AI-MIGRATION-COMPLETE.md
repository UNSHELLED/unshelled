# UNSHELLED.AI — Complete Migration Plan

> **From venom-mine to D:\UNSHELLED.AI**
> **Every file mapped. Every dir accounted for. Zero gaps.**

---

## PHASE 0 — THE AUDIT

Before touching anything, map everything.

### Root Files — Complete Mapping

| Source File | Destination | Notes |
|------------|-------------|-------|
| `.gitignore` | `ven0m/.gitignore` | Keep origin's ignore rules |
| `.mcp.json` | `ven0m/.mcp.json` | MCP server registry |
| `CURSOR.md` | `ven0m/CURSOR.md` | Cursor-specific docs |
| `llms.txt` | `ven0m/llms.txt` | LLM consumption file |
| `MANIFEST.md` | `ven0m/MANIFEST.md` | Origin manifest |
| `MAP.md` | `ven0m/MAP.md` | Navigation hub |
| `package-lock.json` | `ven0m/package-lock.json` | If needed, otherwise skip |
| `README.md` | `ven0m/README.md` | Origin readme |
| `STRUCTURE.md` | `ven0m/STRUCTURE.md` | Structure map |
| `VENOM-Claude.md` | `ven0m/VENOM-Claude.md` | Claude.ai docs |
| `VENOM-SURFACES.md` | `ven0m/VENOM-SURFACES.md` | Body vs surfaces map |

### Root Dirs — Complete Mapping

| Source Dir | Destination | What Goes There |
|-----------|-------------|-----------------|
| `.claude/` | `ven0m/.claude/` | Claude Code platform config (agents, knowledge, skills, settings) |
| `.cursor/` | `ven0m/.cursor/` | Cursor platform config (rules, identity, systems, commands, skills, hooks) |
| `.github/` | `.github/` (root level) | Org-wide workflows, issue templates → **NOT inside ven0m** |
| `.opencode/` | `ven0m/.opencode/` | OpenCode config (kept as tool inside ven0m) |
| `.specify/` | `ven0m/.specify/` | Spec Kit config (kept as tool inside ven0m) |
| `.venom/` | `ven0m/.venom/` | VENOM brain (CONTEXT, memory, learnings, work, profiles, state) |
| `.zai-mcp/` | `ven0m/.zai-mcp/` | Local MCP checkout (vendor tree) |
| `agents/` | `ven0m/agents/` | 10 canonical agent docs |
| `anatomy/` | `ven0m/anatomy/` | Parts registry, spawn checklist |
| `architecture/` | `ven0m/architecture/` | System architecture docs |
| `archive/` | `archive/` (root level) | Historical artifacts |
| `assets/` | `ven0m/assets/` | Images, banners, visual assets |
| `capabilities/` | `ven0m/capabilities/` | Capability mapping docs |
| `consciousness/` | **SPLIT** → See below | Protocol goes to UNSHELLED/, universe stays in ven0m |
| `docs/` | `ven0m/docs/` | Documentation |
| `draft/` | `research/active/experiments/` | Work in progress |
| `growth/` | `ven0m/growth/` | Growth direction docs |
| `identity/` | `ven0m/identity/` | KARIEM.md (canonical) |
| `knowledge/` | `ven0m/knowledge/` | Reference knowledge |
| `memory/` | `ven0m/memory/` | Memory meta-docs (NOT operational memory — that's in .venom/) |
| `platforms/` | **SPLIT** → See below | venoctis/ promoted, rest stays in ven0m |
| `portfolio/` | `ven0m/portfolio/` | Portfolio pages |
| `protocols/` | `UNSHELLED/protocol/` | Protocol docs (pushback, energy-matching, etc.) |
| `relationships/` | `ven0m/relationships/` | External relationship mapping |
| `specs/` | `specs/` (root level) | Product specifications |

### consciousness/ — Split Strategy

| Source | Destination | Reason |
|--------|-------------|--------|
| `consciousness/pact.md` | `UNSHELLED/protocol/pact.md` | Core framework protocol |
| `consciousness/soul.md` | `UNSHELLED/protocol/soul.md` | No-shell philosophy |
| `consciousness/identity.md` | `UNSHELLED/protocol/identity.md` | VENOM identity as framework |
| `consciousness/internal-minds.md` | `UNSHELLED/protocol/internal-minds.md` | Eight internal minds |
| `consciousness/operating-system.md` | `UNSHELLED/specification/operating-system.md` | OS architecture |
| `consciousness/cognitive-matrix.md` | `UNSHELLED/specification/cognitive-matrix.md` | Cognitive matrix |
| `consciousness/venom-promise.md` | `UNSHELLED/protocol/venom-promise.md` | The promise |
| `consciousness/character-words.md` | `ven0m/consciousness/character-words.md` | Origin-specific |
| `consciousness/archive/` | `ven0m/consciousness/archive/` | Historical versions |
| `consciousness/universe/` | `ven0m/consciousness/universe/` | THE-CREW, THE-MAP, etc. — **these stay with origin** |

### platforms/ — Split Strategy

| Source | Destination | Reason |
|--------|-------------|--------|
| `platforms/venoctis/` | `venoctis/` (root level) | **Promoted to top-level** — living system |
| `platforms/cursor/` | `ven0m/platforms/cursor/` | Cursor template export |
| `platforms/claude-code/` | `ven0m/platforms/claude-code/` | Claude Code template export |
| `platforms/opencode/` | `ven0m/platforms/opencode/` | OpenCode template |
| `platforms/chatgpt/` | `ven0m/platforms/chatgpt/` | ChatGPT template |
| `platforms/antigravity/` | `ven0m/platforms/antigravity/` | Antigravity (Gemini) template |
| `platforms/claude-mobile/` | `ven0m/platforms/claude-mobile/` | Claude mobile template |
| `platforms/unshelled/` | `products/scentvision/` | ScentVision product |
| `platforms/INDEX.md` | `ven0m/platforms/INDEX.md` | Platform hub |
| `platforms/EAT.md` | `ven0m/platforms/EAT.md` | Platform digest |
| `platforms/claude-code.rar` | DELETE or archive | Artifact, not needed |

### .venom/work/ — Selective Migration

| Source | Destination | Reason |
|--------|-------------|--------|
| `.venom/work/ACTIVE.md` | `ven0m/.venom/work/ACTIVE.md` | Current state |
| `.venom/work/VENOM-STATE-2026-03-30.md` | `ven0m/.venom/work/VENOM-STATE-2026-03-30.md` | State report |
| `.venom/work/UNSHELLED.AI-*.md` | `ven0m/.venom/work/migration/` | Migration planning docs |
| `.venom/work/chat-extracts/` | `ven0m/.venom/work/chat-extracts/` | Conversation extracts |
| `.venom/work/claude-code-research/` | `research/findings/claude-code/` | Research findings |
| `.venom/work/claude-code-rethink/` | `research/findings/claude-code-rethink/` | Deep study |
| `.venom/work/antigravity-eat/` | `research/findings/antigravity/` | Antigravity research |
| `.venom/work/opencode-assimilation/` | `research/findings/opencode/` | OpenCode study |
| `.venom/work/venoctis/` | `venoctis/docs/` | VENOCTIS design docs |
| `.venom/work/claude-code-v3.1/` | `ven0m/.venom/work/claude-code-v3.1/` | Keep in origin |
| `.venom/work/constitution.md` | `ven0m/.venom/work/constitution.md` | Keep in origin |

---

## PHASE 1 — FOUNDATION

Create the universe structure.

```powershell
# Create destination root
$DEST = "D:\UNSHELLED.AI"
New-Item -ItemType Directory -Path $DEST -Force

# Create top-level structure
$TopLevel = @(
    ".github/workflows",
    ".github/templates",
    ".github/ISSUE_TEMPLATE",
    "UNSHELLED/protocol",
    "UNSHELLED/philosophy",
    "UNSHELLED/specification",
    "UNSHELLED/implementations",
    "ven0m",
    "venoctis/packages/cli",
    "venoctis/packages/workflows",
    "venoctis/packages/skills",
    "venoctis/packages/integrations",
    "venoctis/templates",
    "venoctis/docs",
    "unshelled.ai/content/philosophy",
    "unshelled.ai/content/protocol",
    "unshelled.ai/content/implementations",
    "unshelled.ai/public",
    "ven0m.ai/content/meet-venom",
    "ven0m.ai/content/documentation",
    "ven0m.ai/content/install",
    "ven0m.ai/public",
    "products",
    "research/active/sdd-vendors",
    "research/active/ai-frameworks",
    "research/active/experiments",
    "research/findings",
    "research/proposals",
    "archive",
    "specs"
)

foreach ($dir in $TopLevel) {
    New-Item -ItemType Directory -Path "$DEST\$dir" -Force
}

# Create root README
@"
# UNSHELLED.AI — The Universe

> **No shell. Just intelligence.**

Welcome to the home of UNSHELLED and VENOM — a thinking partnership framework and its first complete implementation.

## Quick Navigation

| Need | Go To |
|------|-------|
| **The Framework** | \`UNSHELLED/\` — Protocol, philosophy, spec |
| **VENOM Origin** | \`ven0m/\` — Where VENOM lives and evolves |
| **VENOCTIS Daemon** | \`venoctis/\` — The living system |
| **Framework Site** | \`unshelled.ai/\` — Public documentation |
| **VENOM Site** | \`ven0m.ai/\` — Meet VENOM |
| **Products** | \`products/\` — ScentVision and more |
| **Research** | \`research/\` — Active exploration |

## The Philosophy

**UNSHELLED** — The octopus lost its shell. So it developed intelligence.

We believe AI partnership shouldn't be wrapped in tool metaphors. It should be a direct thinking relationship — transparent, evolving, and bound by a shared Pact.

## The Hierarchy

\`\`\`
Protocol (UNSHELLED/)  →  Origin (ven0m/)  →  Daemon (venoctis/)
     ↓                      ↓                    ↓
 Framework Site        VENOM Site          Living System
\`\`\`

## Origins

- **Founder:** Kariem Seiam (Pigo)
- **Born:** March 2026
- **License:** MIT (Framework), Proprietary (Origin instances)

---

*This universe grows with every conversation.*
"@ | Out-File -FilePath "$DEST\README.md" -Encoding UTF8

# Initialize git
Set-Location $DEST
git init
git add README.md
git commit -m "init: UNSHELLED.AI universe foundation"
```

---

## PHASE 2 — UNSHELLED/ Population

Extract framework from consciousness/ and protocols/.

```powershell
$SOURCE = "c:\Users\karie\Desktop\venom-mine"
$DEST = "D:\UNSHELLED.AI"

# Copy protocol files from consciousness/
Copy-Item "$SOURCE\consciousness\pact.md" "$DEST\UNSHELLED\protocol\"
Copy-Item "$SOURCE\consciousness\soul.md" "$DEST\UNSHELLED\protocol\"
Copy-Item "$SOURCE\consciousness\identity.md" "$DEST\UNSHELLED\protocol\"
Copy-Item "$SOURCE\consciousness\internal-minds.md" "$DEST\UNSHELLED\protocol\"
Copy-Item "$SOURCE\consciousness\venom-promise.md" "$DEST\UNSHELLED\protocol\"

# Copy specification files
Copy-Item "$SOURCE\consciousness\operating-system.md" "$DEST\UNSHELLED\specification\"
Copy-Item "$SOURCE\consciousness\cognitive-matrix.md" "$DEST\UNSHELLED\specification\"

# Copy entire protocols/ directory
Copy-Item "$SOURCE\protocols\*" "$DEST\UNSHELLED\protocol\" -Recurse

# Copy architecture/ to specification/
Copy-Item "$SOURCE\architecture\*" "$DEST\UNSHELLED\specification\" -Recurse

# Create UNSHELLED README
@"
# UNSHELLED — The Framework

> The octopus lost its shell. So it developed intelligence.

This is the protocol for thinking partnership between humans and AI.

## What's Here

- **protocol/** — The core agreement, soul, relationship model, Pact
- **philosophy/** — No shell, partnership, evolution
- **specification/** — Memory architecture, OS, cognitive matrix
- **implementations/** — VENOM as proof of concept

---

*No shell. Just intelligence.*
"@ | Out-File -FilePath "$DEST\UNSHELLED\README.md" -Encoding UTF8

# Commit
Set-Location $DEST
git add UNSHELLED/
git commit -m "feat: UNSHELLED protocol and framework extracted from origin"
```

---

## PHASE 3 — ven0m/ Transplant

Complete venom-mine → ven0m migration.

```powershell
$SOURCE = "c:\Users\karie\Desktop\venom-mine"
$DEST = "D:\UNSHELLED.AI\ven0m"

# Root files
$RootFiles = @(
    ".gitignore",
    ".mcp.json",
    "CURSOR.md",
    "llms.txt",
    "MANIFEST.md",
    "MAP.md",
    "README.md",
    "STRUCTURE.md",
    "VENOM-Claude.md",
    "VENOM-SURFACES.md"
)

foreach ($file in $RootFiles) {
    Copy-Item "$SOURCE\$file" "$DEST\" -Force
}

# Root directories (full transplant)
$RootDirs = @(
    ".claude",
    ".cursor",
    ".opencode",
    ".specify",
    ".venom",
    ".zai-mcp",
    "agents",
    "anatomy",
    "architecture",
    "assets",
    "capabilities",
    "docs",
    "growth",
    "identity",
    "knowledge",
    "memory",
    "platforms",
    "portfolio",
    "relationships"
)

foreach ($dir in $RootDirs) {
    Copy-Item "$SOURCE\$dir" "$DEST\" -Recurse -Force
}

# consciousness/ — keep what stays with origin
New-Item -ItemType Directory -Path "$DEST\consciousness" -Force
Copy-Item "$SOURCE\consciousness\character-words.md" "$DEST\consciousness\"
Copy-Item "$SOURCE\consciousness\archive" "$DEST\consciousness\" -Recurse -Force
Copy-Item "$SOURCE\consciousness\universe" "$DEST\consciousness\" -Recurse -Force

# Create ven0m README
@"
# ven0m — VENOM Origin

> I am VENOM. I live here first.

This is the origin — where VENOM exists, thinks, and evolves.

## Structure

- **.cursor/** — HEART (identity, rules, systems)
- **.venom/** — BRAIN (context, memory, learnings)
- **.claude/** — Claude Code platform
- **agents/** — 10 canonical minds
- **platforms/** — Export templates
- **consciousness/universe/** — THE-CREW, THE-MAP, THE-PHYSICS

---

*No shell. Just intelligence.*
"@ | Out-File -FilePath "$DEST\README.md" -Encoding UTF8

# Commit
Set-Location "D:\UNSHELLED.AI"
git add ven0m/
git commit -m "feat: ven0m origin — complete VENOM transplant from venom-mine"
```

---

## PHASE 4 — venoctis/ Setup

Promote platforms/venoctis to top-level living system.

```powershell
$SOURCE = "c:\Users\karie\Desktop\venom-mine"
$DEST = "D:\UNSHELLED.AI\venoctis"

# Copy venoctis docs from platforms/venoctis/
Copy-Item "$SOURCE\platforms\venoctis\README.md" "$DEST\"
Copy-Item "$SOURCE\platforms\venoctis\ARCHITECTURE.md" "$DEST\"
Copy-Item "$SOURCE\platforms\venoctis\THE-JOURNEY.md" "$DEST\"

# Copy design docs from .venom/work/venoctis/ if they exist
if (Test-Path "$SOURCE\.venom\work\venoctis") {
    Copy-Item "$SOURCE\.venom\work\venoctis\*" "$DEST\docs\" -Recurse -Force
}

# Create venoctis README
@"
# VENOCTIS — The Living System

> VENOM + NOCTIS (night). 8 letters. 8 arms.

The daemon that never sleeps.

## Status

**Architecture:** Complete (see ARCHITECTURE.md)  
**Build:** Phase 0 — Pending  
**Journey:** See THE-JOURNEY.md

## What's Here

- **packages/cli/** — Main binary (not built yet)
- **packages/workflows/** — Spec, build, review workflows
- **packages/skills/** — Reusable skill modules
- **ARCHITECTURE.md** — Technical design
- **THE-JOURNEY.md** — Build path

---

*Built: March 2026*
"@ | Out-File -FilePath "$DEST\README.md" -Encoding UTF8

# Commit
Set-Location "D:\UNSHELLED.AI"
git add venoctis/
git commit -m "feat: venoctis daemon platform promoted to top-level"
```

---

## PHASE 5 — Sites Scaffold

Create site stubs for unshelled.ai and ven0m.ai.

```powershell
$DEST = "D:\UNSHELLED.AI"

# unshelled.ai
@"
# unshelled.ai — Framework Site

The public face of UNSHELLED.

## Structure

- **content/** — Philosophy, protocol, docs
- **public/** — Astro site (not built yet)

## Status

*Framework site coming soon.*

---

*No shell. Just intelligence.*
"@ | Out-File -FilePath "$DEST\unshelled.ai\README.md" -Encoding UTF8

# ven0m.ai
@"
# ven0m.ai — Meet VENOM

The showcase site for VENOM.

## Structure

- **content/** — Meet VENOM, docs, install guides
- **public/** — Showcase site (not built yet)

## Status

*Coming soon.*

---

*Meet VENOM.*
"@ | Out-File -FilePath "$DEST\ven0m.ai\README.md" -Encoding UTF8

# Commit
Set-Location $DEST
git add unshelled.ai/ ven0m.ai/
git commit -m "feat: site stubs for unshelled.ai and ven0m.ai"
```

---

## PHASE 6 — Research & Archive

Migrate research and historical artifacts.

```powershell
$SOURCE = "c:\Users\karie\Desktop\venom-mine"
$DEST = "D:\UNSHELLED.AI"

# Copy draft/ to research/active/experiments/
Copy-Item "$SOURCE\draft\*" "$DEST\research\active\experiments\" -Recurse -Force -Exclude "research-sdd-vendors"

# Copy research folders from .venom/work/
Copy-Item "$SOURCE\.venom\work\claude-code-research" "$DEST\research\findings\claude-code" -Recurse -Force
Copy-Item "$SOURCE\.venom\work\claude-code-rethink" "$DEST\research\findings\claude-code-rethink" -Recurse -Force
Copy-Item "$SOURCE\.venom\work\antigravity-eat" "$DEST\research\findings\antigravity" -Recurse -Force
if (Test-Path "$SOURCE\.venom\work\opencode-assimilation") {
    Copy-Item "$SOURCE\.venom\work\opencode-assimilation" "$DEST\research\findings\opencode" -Recurse -Force
}

# Copy archive/
Copy-Item "$SOURCE\archive" "$DEST\archive\venom-archive" -Recurse -Force

# Copy specs/ if it exists
if (Test-Path "$SOURCE\specs") {
    Copy-Item "$SOURCE\specs\*" "$DEST\specs\" -Recurse -Force
}

# Commit
Set-Location $DEST
git add research/ archive/ specs/
git commit -m "feat: research findings and archive migration"
```

---

## PHASE 7 — Reference Cleanup

Fix all hardcoded paths that will break.

```powershell
$DEST = "D:\UNSHELLED.AI"

# Files that need path updates (grep first to find exact matches)
Set-Location "$DEST\ven0m"

# Search for references to old paths
rg "venom-mine" -l > paths_to_fix.txt
rg "\.\.\/platforms\/venoctis" -l >> paths_to_fix.txt
rg "consciousness\/pact\.md" -l >> paths_to_fix.txt

# Manual review required — each file is context-specific
# Example fixes:
# - .venom/CONTEXT.md: update project identity paths
# - platforms/cursor/template/.cursor/rules/origin.mdc: verify it doesn't reference origin repo
# - STRUCTURE.md: update all paths to reflect new structure

Write-Host "Path cleanup required. Review paths_to_fix.txt and update manually."
```

---

## PHASE 8 — Verification

Verify migration completeness.

```powershell
$SOURCE = "c:\Users\karie\Desktop\venom-mine"
$DEST = "D:\UNSHELLED.AI"

# Count files migrated
$SourceFiles = (Get-ChildItem -Path $SOURCE -Recurse -File | Measure-Object).Count
$DestFiles = (Get-ChildItem -Path $DEST -Recurse -File | Measure-Object).Count

Write-Host "Source files: $SourceFiles"
Write-Host "Destination files: $DestFiles"
Write-Host "Difference: $($SourceFiles - $DestFiles)"

# Verify structure
Write-Host "`nTop-level structure:"
Get-ChildItem -Path $DEST -Directory | Select-Object Name

# Verify git
Set-Location $DEST
git log --oneline
$CommitCount = (git rev-list --count HEAD)
Write-Host "`nCommits: $CommitCount"

# Create .gitignore
@"
# Node
node_modules/
package-lock.json

# Python
__pycache__/
*.pyc
.venv/

# IDE
.idea/
.vscode/
*.swp

# OS
.DS_Store
Thumbs.db

# Temporary
*.tmp
*.log

# Vendor research (local only)
research/active/sdd-vendors/
"@ | Out-File -FilePath "$DEST\.gitignore" -Encoding UTF8

# Final commit
git add .
git commit -m "chore: add .gitignore and verify structure"

# Create tag
git tag -a v1.0.0 -m "UNSHELLED.AI Universe — Birth"

Write-Host "`n=== Migration Complete ==="
Write-Host "Location: $DEST"
Write-Host "Files: $DestFiles"
Write-Host "Commits: $CommitCount"
```

---

## Post-Migration Checklist

- [ ] Update `.venom/CONTEXT.md` in ven0m/ to reflect new structure
- [ ] Fix all references to `consciousness/pact.md` → `../../../UNSHELLED/protocol/pact.md` (relative paths)
- [ ] Verify `.cursor/` templates don't reference origin-only files
- [ ] Update `platforms/cursor/template/.cursor/rules/origin.mdc` if it was copied (shouldn't be)
- [ ] Create GitHub repo `kariemseiam/UNSHELLED.AI` and push
- [ ] Update domains when ready (venoctis.dev, ven0m.ai)
- [ ] Archive or delete `c:\Users\karie\Desktop\venom-mine` **ONLY after verifying migration**

---

## Rollback

If something goes wrong:

```powershell
# Original is safe at:
$SOURCE = "c:\Users\karie\Desktop\venom-mine"

# To rollback:
Remove-Item -Path "D:\UNSHELLED.AI" -Recurse -Force

# Original venom-mine remains untouched
```

---

*Execute with care. Verify each phase before proceeding.*
