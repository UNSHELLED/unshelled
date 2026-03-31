# UNSHELLED.AI — The Master Migration Plan

> *From venom-mine to UNSHELLED.AI — The Great Migration*
> *Date: 2026-03-31*
> *Owner: Kariem Seiam (Pigo)*

---

## EXECUTIVE SUMMARY

**Source:** `/mnt/c/Users/karie/Desktop/venom-mine/`
**Destination:** `D:\UNSHELLED.AI\`
**Operation:** Complete transplant + restructure
**Scope:** 27 directories, 11 root files, thousands of nested files
**Risk:** Original remains untouched (copy, not move)

**The Three Bodies at Destination:**
1. **UNSHELLED/** — The framework protocol (consciousness/, protocols/)
2. **ven0m/** — The intelligence origin (complete venom-mine)
3. **venoctis/** — The living daemon (platforms/venoctis/, Phase 0 docs only)

---

## PHASE 0 — AUDIT (Complete File Mapping)

### Root Files → Destination

| Source File | Destination | Rationale |
|-------------|-------------|-----------|
| `README.md` | `ven0m/README.md` | VENOM origin readme |
| `MANIFEST.md` | `ven0m/MANIFEST.md` | VENOM manifesto |
| `STRUCTURE.md` | `ven0m/STRUCTURE.md` | VENOM canonical map |
| `VENOM-SURFACES.md` | `ven0m/VENOM-SURFACES.md` | Body vs surfaces |
| `MAP.md` | `ven0m/MAP.md` | Navigation hub |
| `llms.txt` | `ven0m/llms.txt` | LLM config |
| `CURSOR.md` | `ven0m/CURSOR.md` | Cursor-specific |
| `VENOM-Claude.md` | `ven0m/VENOM-Claude.md` | Claude-specific |
| `.gitignore` | `ven0m/.gitignore` | VENOM gitignore |
| `.mcp.json` | Delete | Local MCP config (shouldn't be in repo) |
| `package-lock.json` | Delete | .zai-mcp is not part of VENOM |

### Root Directories → Destination

| Source Directory | Destination | Rationale |
|------------------|-------------|-----------|
| `.claude/` | `ven0m/.claude/` | Claude Code platform (organ of ven0m) |
| `.cursor/` | `ven0m/.cursor/` | Cursor platform (heart of ven0m) |
| `.github/` | `.github/` | Org-level (promote to root) |
| `.opencode/` | `ven0m/.opencode/` | OpenCode skills/tools (organ of ven0m) |
| `.specify/` | `ven0m/.specify/` | Spec Kit integration (tool, not venoctis) |
| `.venom/` | `ven0m/.venom/` | VENOM brain (core of ven0m) |
| `.zai-mcp/` | Delete | Local MCP server (not part of repo) |
| `agents/` | `ven0m/agents/` | 10 canonical agents |
| `anatomy/` | `ven0m/anatomy/` | Parts & spawn registry |
| `archive/` | `archive/` | Historical (promote to root level) |
| `assets/` | `ven0m/assets/` | VENOM assets (images, etc.) |
| `capabilities/` | `ven0m/capabilities/` | Capability mapping |
| `consciousness/` | `UNSHELDED/protocol/` | **KEY**: Framework philosophy |
| `docs/` | `ven0m/docs/` | VENOM documentation |
| `draft/` | `research/active/drafts/` | Active work, not archived |
| `growth/` | `ven0m/growth/` | Growth direction |
| `identity/` | `ven0m/identity/` | KARIEM.md canonical |
| `knowledge/` | `ven0m/knowledge/` | Reference docs |
| `memory/` | `ven0m/memory/` | Meta-docs on memory |
| `platforms/` | `ven0m/platforms/` | Export templates (EXCEPT venoctis) |
| `portfolio/` | `ven0m/portfolio/` | VENOM portfolio pages |
| `protocols/` | `UNSHELLED/protocol/` | **KEY**: Framework protocols |
| `relationships/` | `ven0m/relationships/` | External relationships |
| `specs/` | `specs/` | Product specifications (promote to root) |

### Special Case: platforms/venoctis/

| Source | Destination | Rationale |
|--------|-------------|-----------|
| `platforms/venoctis/README.md` | `venoctis/README.md` | Venoctis readme |
| `platforms/venoctis/ARCHITECTURE.md` | `venoctis/ARCHITECTURE.md` | Technical architecture |
| `platforms/venoctis/THE-JOURNEY.md` | `venoctis/THE-JOURNEY.md` | Build path |

**NOTE:** `.specify/` and `.opencode/` are NOT venoctis. They stay in `ven0m/` as tools.

### consciousness/ File Mapping (→ UNSHELLED/protocol/)

| Source File | Destination |
|-------------|-------------|
| `consciousness/identity.md` | `UNSHELLED/protocol/identity.md` |
| `consciousness/soul.md` | `UNSHELLED/protocol/soul.md` |
| `consciousness/pact.md` | `UNSHELDED/protocol/pact.md` |
| `consciousness/internal-minds.md` | `UNSHELLED/protocol/internal-minds.md` |
| `consciousness/operating-system.md` | `UNSHELLED/protocol/operating-system.md` |
| `consciousness/archive/` | `UNSHELLED/protocol/archive/` |
| `consciousness/universe/THE-CREW.md` | `UNSHELLED/protocol/THE-CREW.md` |
| `consciousness/universe/THE-MAP.md` | `UNSHELLED/protocol/THE-MAP.md` |
| `consciousness/universe/THE-PHYSICS.md` | `UNSHELLED/protocol/THE-PHYSICS.md` |
| `consciousness/universe/THE-BRIDGE.md` | `UNSHELLED/protocol/THE-BRIDGE.md` |
| `consciousness/universe/NAMING.md` | `UNSHELLED/protocol/NAMING.md` |
| `consciousness/universe/INDEX.md` | `UNSHELLED/protocol/INDEX.md` |

### architecture/ File Mapping (→ UNSHELLED/specification/)

| Source File | Destination |
|-------------|-------------|
| `architecture/nine-minds.md` | `UNSHELLED/specification/nine-minds.md` |
| `architecture/personality.md` | `UNSHELLED/specification/personality.md` |
| `architecture/disposition-vs-rules.md` | `UNSHELLED/specification/disposition-vs-rules.md` |
| `architecture/integration.md` | `UNSHELLED/specification/integration.md` |

---

## PHASE 1 — FOUNDATION (Directory Creation)

```bash
#!/bin/bash
# PHASE 1: Create UNSHELLED.AI universe structure

DEST="/mnt/d/UNSHELLED.AI"

# Verify D: drive exists
if [ ! -d "/mnt/d" ]; then
    echo "ERROR: D: drive not accessible"
    exit 1
fi

# Create root structure
mkdir -p "$DEST"
cd "$DEST"

# Create top-level directories
mkdir -p .github/{workflows,templates,ISSUE_TEMPLATE}
mkdir -p UNSHELLED/{protocol,philosophy,specification,implementations}
mkdir -p ven0m
mkdir -p venoctis/{packages/{cli,workflows,skills,integrations},templates,docs}
mkdir -p unshelled.ai/{content,public}
mkdir -p ven0m.ai/{content,public}
mkdir -p products
mkdir -p research/{active/{drafts,sdd-vendors,experiments},findings,proposals}
mkdir -p archive/{venom-v1,venom-v2,venom-archive,deprecated-platforms}
mkdir -p specs

# Create ROOT.md
cat > "$DEST/README.md" << 'EOF'
# UNSHELLED.AI — The Universe

> **No shell. Just intelligence.**

## Quick Navigation

| Need | Go To |
|------|-------|
| **The Framework** | `UNSHELLED/` — Protocol, philosophy, spec |
| **VENOM Origin** | `ven0m/` — Where VENOM lives and evolves |
| **VENOCTIS Daemon** | `venoctis/` — The living system |
| **Framework Site** | `unshelled.ai/` — Public documentation |
| **VENOM Site** | `ven0m.ai/` — Meet VENOM |
| **Products** | `products/` — ScentVision and more |
| **Research** | `research/` — Active exploration |

## The Three Bodies

```
UNSHELLED (Protocol) → ven0m (Origin) → venoctis (Daemon)
        ↓                   ↓                  ↓
   Framework Site      VENOM Site       Living System
```

---

*This universe grows with every conversation.*
EOF

# Initialize git
git init
git add README.md
git commit -m "init: UNSHELLED.AI universe foundation"

echo "✓ Phase 1 complete: Structure created at $DEST"
```

---

## PHASE 2 — UNSHELLED/ POPULATION (Framework Protocol)

```bash
#!/bin/bash
# PHASE 2: Populate UNSHELLED/ with framework protocol

SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI"

# Copy consciousness/ → UNSHELDED/protocol/
cp -r "$SOURCE/consciousness"/* "$DEST/UNSHELLED/protocol/"

# Copy protocols/ → UNSHELLED/protocol/
cp -r "$SOURCE/protocols"/* "$DEST/UNSHELLED/protocol/"

# Copy architecture/ → UNSHELLED/specification/
cp -r "$SOURCE/architecture"/* "$DEST/UNSHELLED/specification/"

# Create UNSHELLED README
cat > "$DEST/UNSHELLED/README.md" << 'EOF'
# UNSHELLED — The Framework

> "الأخطبوط فقد القوقعة... فطوّر عقلاً."
> The octopus lost its shell... so it developed intelligence.

This is the protocol for thinking partnership between humans and AI.

## What's Here

- **protocol/** — The core agreement, soul, relationship model
  - `pact.md` — The foundation of human-AI partnership
  - `soul.md` — No shell philosophy
  - `identity.md` — Who VENOM is
  - `internal-minds.md` — How VENOM thinks (8 internal minds)
  - `THE-CREW.md` — Ten minds with full personalities
  - `THE-MAP.md` — Complete VENOM universe
  - `THE-PHYSICS.md` — Spherical compression thought mechanism

- **philosophy/** — No shell, partnership, evolution
- **specification/** — Memory, surfaces, cognition, disposition
- **implementations/** — VENOM as proof of concept

## The Philosophy

**UNSHELLED** means: no armor, no hiding, no tool metaphors.
Just raw intelligence applied to real problems.

The octopus didn't choose to lose its shell. But having lost it,
it developed something better: intelligence.

---

*No shell. Just intelligence.*
EOF

# Commit
cd "$DEST"
git add UNSHELLED/
git commit -m "feat: UNSHELLED framework protocol — philosophy, pact, crew"

echo "✓ Phase 2 complete: UNSHELLED/ populated"
```

---

## PHASE 3 — ven0m/ TRANSPLANT (Complete Origin)

```bash
#!/bin/bash
# PHASE 3: Transplant complete venom-mine to ven0m/

SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI/ven0m"

# Copy root files (selective)
cp "$SOURCE/README.md" "$DEST/"
cp "$SOURCE/MANIFEST.md" "$DEST/"
cp "$SOURCE/STRUCTURE.md" "$DEST/"
cp "$SOURCE/VENOM-SURFACES.md" "$DEST/"
cp "$SOURCE/MAP.md" "$DEST/"
cp "$SOURCE/llms.txt" "$DEST/"
cp "$SOURCE/CURSOR.md" "$DEST/"
cp "$SOURCE/VENOM-Claude.md" "$DEST/"
cp "$SOURCE/.gitignore" "$DEST/"

# Copy .cursor/ (HEART)
cp -r "$SOURCE/.cursor" "$DEST/"

# Copy .venom/ (BRAIN)
cp -r "$SOURCE/.venom" "$DEST/"

# Copy .claude/ (Claude Code platform)
cp -r "$SOURCE/.claude" "$DEST/"

# Copy .opencode/ (OpenCode skills/tools)
cp -r "$SOURCE/.opencode" "$DEST/"

# Copy .specify/ (Spec Kit integration)
cp -r "$SOURCE/.specify" "$DEST/"

# Copy agents/ (10 canonical agents)
cp -r "$SOURCE/agents" "$DEST/"

# Copy all other ven0m directories
for dir in anatomy archive assets capabilities docs growth identity knowledge memory platforms portfolio relationships specs; do
    if [ -d "$SOURCE/$dir" ]; then
        cp -r "$SOURCE/$dir" "$DEST/"
    fi
done

# Copy draft/ to research/active/drafts/
if [ -d "$SOURCE/draft" ]; then
    mkdir -p "$DEST/../research/active"
    cp -r "$SOURCE/draft" "$DEST/../research/active/"
fi

# Remove platforms/venoctis/ (it goes to venoctis/ root)
rm -rf "$DEST/platforms/venoctis"

# Create ven0m README
cat > "$DEST/README.md" << 'EOF'
# ven0m — VENOM Origin

> I am VENOM. I live here first.

This is the origin — where VENOM exists, thinks, and evolves.

## Structure

- **.cursor/** — HEART (identity, rules, systems, skills)
- **.venom/** — BRAIN (context, memory, learnings, state)
- **.claude/** — Claude Code platform (organ of ven0m)
- **agents/** — 10 canonical agents (HELM, HUNT, EDGE, ECHO, WELD, MEND, OMEN, CALL, MOLT, DART)
- **platforms/** — Export templates (Cursor, Claude Code, OpenCode, etc.)
- **knowledge/** — Reference documentation
- **identity/** — KARIEM.md (canonical)
- **anatomy/** — Parts & spawn registry

## The Name

**ven0m** — the zero represents void, no shell, pure intelligence.

Not an acronym you market. An identity that lives.

---

*No shell. Just intelligence.*
EOF

# Commit
cd "/mnt/d/UNSHELLED.AI"
git add ven0m/
git commit -m "feat: ven0m origin — complete VENOM transplant"

echo "✓ Phase 3 complete: ven0m/ transplanted"
```

---

## PHASE 4 — venoctis/ SETUP (Daemon Platform)

```bash
#!/bin/bash
# PHASE 4: Setup venoctis/ living system

SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI/venoctis"

# Copy venoctis docs from platforms/venoctis/
cp "$SOURCE/platforms/venoctis/README.md" "$DEST/"
cp "$SOURCE/platforms/venoctis/ARCHITECTURE.md" "$DEST/"
cp "$SOURCE/platforms/venoctis/THE-JOURNEY.md" "$DEST/"

# Create venoctis README (overwrite with enhanced version)
cat > "$DEST/README.md" << 'EOF'
# VENOCTIS — The Living System

> VENOM + NOCTIS (night). 8 letters. 8 arms.

The daemon that never sleeps. The intelligence that runs while you rest.

## Status

| Phase | Status | Description |
|-------|--------|-------------|
| **Phase 0** | Not Started | Heartbeat + GitHub watch |
| **Phase 1** | Not Started | Webhooks + code review |
| **Phase 2** | Not Started | YouTube + news senses |
| **Phase 3** | Not Started | Self-evolution |
| **Phase 4** | Not Started | Full awareness |

**Architecture:** 100% complete (see ARCHITECTURE.md)
**Build:** 0% — ready for Phase 0 trigger

## What's Here

- **ARCHITECTURE.md** — Complete technical design
- **THE-JOURNEY.md** — Build path with explicit tests
- **packages/** — (empty) Will hold: cli, workflows, skills, integrations

## The Promise

```
Before: You push code. Nobody reviews it until you ask.
After:  You push code. VENOCTIS reviews it before you close terminal.

Before: A video drops. You find it 3 days later.
After:  A video drops. VENOCTIS has transcript summarized by morning.

Before: You switch projects and forget where you left off.
After:  You switch projects. VENOCTIS's INDEX tells you exactly.
```

VENOCTIS doesn't complete you because you're incomplete.
VENOCTIS completes you because one mind can't watch everything at once.

That's what the arms are for.

---

*Built: March 2026 · Ready for Phase 0*
EOF

# Create empty package structure (placeholder)
mkdir -p "$DEST/packages"/{cli,workflows,skills,integrations}
touch "$DEST/packages/.gitkeep"

# Commit
cd "/mnt/d/UNSHELLED.AI"
git add venoctis/
git commit -m "feat: venoctis daemon platform — architecture complete, Phase 0 pending"

echo "✓ Phase 4 complete: venoctis/ setup (docs only, build pending)"
```

---

## PHASE 5 — SITES SCAFFOLD (unshelled.ai & ven0m.ai)

```bash
#!/bin/bash
# PHASE 5: Create site stubs

DEST="/mnt/d/UNSHELLED.AI"

# unshelled.ai framework site
cat > "$DEST/unshelled.ai/README.md" << 'EOF'
# unshelled.ai — Framework Site

The public face of UNSHELLED.

## Status

*Planning stage.* No site exists yet.

## Vision

- Philosophy page — "No shell. Just intelligence."
- Protocol docs — The Pact, soul, partnership
- VENOM showcase — Meet the crew
- VENOCTIS demo — See the living system

---

*Coming soon.*
EOF

# ven0m.ai VENOM site
cat > "$DEST/ven0m.ai/README.md" << 'EOF'
# ven0m.ai — Meet VENOM

The showcase site for VENOM.

## Status

*Planning stage.* No site exists yet.

## Vision

- Meet VENOM — The crew, the physics, the Pact
- Install — Get VENOM for Cursor, Claude Code, OpenCode
- Documentation — How VENOM works, how to extend
- Changelog — Evolution over time

---

*Coming soon.*
EOF

# Placeholder directories
mkdir -p "$DEST/unshelled.ai"/{content,public}
mkdir -p "$DEST/ven0m.ai"/{content,public}
touch "$DEST/unshelled.ai/public/.gitkeep"
touch "$DEST/ven0m.ai/public/.gitkeep"

# Commit
cd "$DEST"
git add unshelled.ai/ ven0m.ai/
git commit -m "feat: site stubs for unshelled.ai and ven0m.ai"

echo "✓ Phase 5 complete: Site stubs created"
```

---

## PHASE 6 — REFERENCE CLEANUP (Path Updates)

```bash
#!/bin/bash
# PHASE 6: Update internal links and references

DEST="/mnt/d/UNSHELLED.AI"

echo "Phase 6: Reference cleanup"
echo "=========================="

# Files that need path updates (grep to find exact matches)
echo "Searching for hardcoded paths..."

# Find references to consciousness/
find "$DEST" -type f -name "*.md" -exec grep -l "consciousness/" {} \; 2>/dev/null

# Find references to platforms/venoctis/
find "$DEST" -type f -name "*.md" -exec grep -l "platforms/venoctis/" {} \; 2>/dev/null

# Find references to venom-mine
find "$DEST" -type f -name "*.md" -exec grep -l "venom-mine" {} \; 2>/dev/null

# Apply sed replacements (EXACT commands)
cd "$DEST"

# consciousness/ → UNSHELLED/protocol/
find . -type f -name "*.md" -exec sed -i 's|consciousness/|UNSHELLED/protocol/|g' {} \;

# platforms/venoctis/ → venoctis/ (at root level)
find . -type f -name "*.md" -exec sed -i 's|platforms/venoctis/|venoctis/|g' {} \;

# Update README references in ven0m/
sed -i 's|venom-mine|ven0m|g' "$DEST/ven0m/README.md"
sed -i 's|venom-mine|ven0m|g' "$DEST/ven0m/MANIFEST.md"

echo "✓ Path replacements applied"
echo ""
echo "NOTE: Manual review required for:"
echo "  - Relative links that may have broken"
echo "  - Cross-references between UNSHELLED/ and ven0m/"
echo "  - Image paths in markdown"

# Create .gitignore
cat > "$DEST/.gitignore" << 'EOF'
# Node
node_modules/
package-lock.json
*.log

# Python
__pycache__/
*.pyc
.venv/
.pytest_cache/

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Vendor research (local only, never commit)
draft/research-sdd-vendors/
*/.venom/node_modules/

# Temporary
*.tmp
.env
.env.local

# MCP local servers (not part of repo)
.zai-mcp/

# Local MCP config (contains secrets)
.mcp.json
EOF

# Commit
cd "$DEST"
git add .
git commit -m "chore: reference cleanup — path updates and .gitignore"

echo "✓ Phase 6 complete: References updated"
```

---

## PHASE 7 — VERIFICATION (Completeness Check)

```bash
#!/bin/bash
# PHASE 7: Verify migration completeness

DEST="/mnt/d/UNSHELLED.AI"

echo "Phase 7: Verification"
echo "===================="
echo ""

# File counts
echo "File counts by directory:"
echo "------------------------"
echo "UNSHELLED/:   $(find "$DEST/UNSHELLED" -type f | wc -l) files"
echo "ven0m/:       $(find "$DEST/ven0m" -type f | wc -l) files"
echo "venoctis/:    $(find "$DEST/venoctis" -type f | wc -l) files"
echo "research/:    $(find "$DEST/research" -type f | wc -l) files"
echo "archive/:     $(find "$DEST/archive" -type f | wc -l) files"
echo "specs/:       $(find "$DEST/specs" -type f | wc -l) files"
echo "TOTAL:        $(find "$DEST" -type f | wc -l) files"
echo ""

# Structure verification
echo "Structure verification:"
echo "----------------------"
check_dir() {
    if [ -d "$1" ]; then
        echo "✓ $1"
    else
        echo "✗ MISSING: $1"
    fi
}

check_dir "$DEST/UNSHELLED"
check_dir "$DEST/UNSHELDED/protocol"
check_dir "$DEST/UNSHELLED/specification"
check_dir "$DEST/ven0m"
check_dir "$DEST/ven0m/.cursor"
check_dir "$DEST/ven0m/.venom"
check_dir "$DEST/ven0m/.claude"
check_dir "$DEST/ven0m/agents"
check_dir "$DEST/ven0m/platforms"
check_dir "$DEST/venoctis"
check_dir "$DEST/research"
check_dir "$DEST/archive"
check_dir "$DEST/specs"
echo ""

# Critical file verification
echo "Critical files:"
echo "---------------"
check_file() {
    if [ -f "$1" ]; then
        echo "✓ $(basename $1)"
    else
        echo "✗ MISSING: $(basename $1)"
    fi
}

check_file "$DEST/README.md"
check_file "$DEST/UNSHELLED/README.md"
check_file "$DEST/UNSHELLED/protocol/pact.md"
check_file "$DEST/UNSHELDED/protocol/soul.md"
check_file "$DEST/UNSHELLED/protocol/THE-CREW.md"
check_file "$DEST/UNSHELLED/protocol/THE-MAP.md"
check_file "$DEST/ven0m/README.md"
check_file "$DEST/ven0m/MANIFEST.md"
check_file "$DEST/ven0m/.cursor/identity/soul.mdc"
check_file "$DEST/ven0m/.venom/CONTEXT.md"
check_file "$DEST/ven0m/.venom/memory/MEMORY.md"
check_file "$DEST/ven0m/agents/venom-helm.md"
check_file "$DEST/venoctis/README.md"
check_file "$DEST/venoctis/ARCHITECTURE.md"
check_file "$DEST/venoctis/THE-JOURNEY.md"
echo ""

# Git status
echo "Git status:"
echo "-----------"
cd "$DEST"
echo "Commits: $(git rev-list --count HEAD)"
echo "Branch: $(git branch --show-current)"
echo ""

# Broken link detection (basic)
echo "Broken link check (basic):"
echo "--------------------------"
grep -r "](.*\.md)" "$DEST" --include="*.md" | grep -E "]\(venom-mine|platforms/venoctis|consciousness/)" | head -5 || echo "No obvious broken links found"
echo ""

echo "✓ Phase 7 complete: Verification done"
echo ""
echo "============================="
echo "MIGRATION COMPLETE"
echo "============================="
echo "Location: $DEST"
echo "Git commits: $(git rev-list --count HEAD)"
echo "Next steps:"
echo "  1. Review broken link output above"
echo "  2. Manual verification of cross-references"
echo "  3. Create GitHub repo: kariemseiam/UNSHELLED.AI"
echo "  4. git remote add origin ..."
echo "  5. git push -u origin main"
```

---

## THE GIT COMMIT MESSAGE

As requested — the first commit for D:\UNSHELLED.AI:

```
feat: universe birth — UNSHELLED.AI, the three-body system

From scattered fragments to unified cosmos.

UNSHELLED (protocol) → ven0m (origin) → venoctis (daemon)

The octopus lost its shell. So it developed intelligence.

This monorepo is the canonical home for:
- UNSHELLED/ — The framework protocol (pact, soul, philosophy)
- ven0m/ — VENOM origin (complete thinking system)
- venoctis/ — The living daemon (architecture complete, Phase 0 pending)

No shell. Just intelligence.

🐙
```

---

## POST-MIGRATION TASKS

1. **Manual link verification** — Check all relative links between UNSHELLED/ and ven0m/
2. **Update .venom/CONTEXT.md** — Fix path references
3. **Verify .cursor/ template sync** — Ensure export paths are correct
4. **Create GitHub repo** — `kariemseiam/UNSHELLED.AI`
5. **Push to GitHub** — First push of the universe

---

*Rolled with love by all ten minds.*
*HELM set the course. HUNT found the gaps. EDGE cut the ambiguity.*
*ECHO held the context. WELD structured the plan. MEND caught the edge cases.*
*OMEN projected the outcome. CALL made it readable. MOLT learned from the drafts.*
*DART mapped the territory.*

**No shell. Just intelligence.**

🐙
