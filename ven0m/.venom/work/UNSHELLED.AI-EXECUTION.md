# UNSHELLED.AI — Execution Commands

> **Step-by-step migration from venom-mine to UNSHELLED.AI**
> *Execute each phase in order. Verify before proceeding.*

---

## Phase 0: Pre-Migration Checks

```bash
# 1. Verify D: drive is accessible
ls -la /mnt/d/

# 2. Check available space (need ~5GB for full migration)
df -h /mnt/d/

# 3. Create backup timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
echo "Migration start: $TIMESTAMP"

# 4. Ensure current repo is clean
cd /mnt/c/Users/karie/Desktop/venom-mine
git status
```

**STOP if:** Uncommitted changes exist. Commit or stash first.

---

## Phase 1: Foundation (Creation)

```bash
# 1. Create the universe structure
DEST="/mnt/d/UNSHELLED.AI"
mkdir -p "$DEST"/{.github/{workflows,templates,ISSUE_TEMPLATE},UNSHELLED/{protocol,philosophy,specification,implementations},ven0m,venoctis/{packages/{cli,workflows,skills,integrations},templates,docs},unshelled.ai/{content/{philosophy,protocol,implementations},public},ven0m.ai/{content/{meet-venom,documentation,install},public},products,research/{active/{sdd-vendors,ai-frameworks,experiments},findings,proposals},archive/{venom-v1,venom-v2,deprecated-platforms,research-archives},specs}

# 2. Verify structure
tree -L 2 "$DEST" || find "$DEST" -type d -maxdepth 2

# 3. Create ROOT.md
cat > "$DEST/README.md" << 'EOF'
# UNSHELLED.AI — The Universe

> **No shell. Just intelligence.**

Welcome to the home of UNSHELLED and VENOM.

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

---

*This universe grows with every conversation.*
EOF

# 4. Initialize git
cd "$DEST"
git init
git add README.md
git commit -m "init: UNSHELLED.AI universe foundation"
```

---

## Phase 2: UNSHELLED Framework (Protocol)

```bash
SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI"

# Copy consciousness → UNSHELLED/protocol
cp -r "$SOURCE/consciousness"/* "$DEST/UNSHELLED/protocol/"

# Copy protocols → UNSHELLED/protocol
cp -r "$SOURCE/protocols"/* "$DEST/UNSHELLED/protocol/"

# Copy architecture → UNSHELLED/specification
cp -r "$SOURCE/architecture"/* "$DEST/UNSHELLED/specification/"

# Create UNSHELLED README
cat > "$DEST/UNSHELLED/README.md" << 'EOF'
# UNSHELLED — The Framework

> The octopus lost its shell. So it developed intelligence.

This is the protocol for thinking partnership between humans and AI.

## What's Here

- **protocol/** — The core agreement, soul, relationship model
- **philosophy/** — No shell, partnership, evolution
- **specification/** — Memory, surfaces, cognition
- **implementations/** — VENOM as proof of concept

---

*No shell. Just intelligence.*
EOF

# Commit
cd "$DEST"
git add UNSHELLED/
git commit -m "feat: UNSHELLED protocol and framework"
```

---

## Phase 3: ven0m Origin (The Heart)

```bash
SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI/ven0m"

# Core VENOM files
cp "$SOURCE/README.md" "$DEST/"
cp "$SOURCE/MANIFEST.md" "$DEST/"
cp "$SOURCE/STRUCTURE.md" "$DEST/"
cp "$SOURCE/VENOM-SURFACES.md" "$DEST/"
cp "$SOURCE/MAP.md" "$DEST/"
cp "$SOURCE/llms.txt" "$DEST/"

# Copy VENOM heart (cursor)
cp -r "$SOURCE/.cursor" "$DEST/"

# Copy VENOM brain (venom)
cp -r "$SOURCE/.venom" "$DEST/"

# Copy Claude Code platform
cp -r "$SOURCE/.claude" "$DEST/"

# Copy agents (consciousness crew)
cp -r "$SOURCE/agents" "$DEST/"

# Copy knowledge
cp -r "$SOURCE/knowledge" "$DEST/"

# Copy identity
cp -r "$SOURCE/identity" "$DEST/"

# Copy anatomy
cp -r "$SOURCE/anatomy" "$DEST/"

# Copy platforms (templates)
cp -r "$SOURCE/platforms" "$DEST/"

# Copy work
cp -r "$SOURCE/.venom/work" "$DEST/.venom/"

# Create ven0m README
cat > "$DEST/README.md" << 'EOF'
# ven0m — VENOM Origin

> I am VENOM. I live here first.

This is the origin — where VENOM exists, thinks, and evolves.

## Structure

- **.cursor/** — HEART (identity, rules, systems)
- **.venom/** — BRAIN (context, memory, learnings)
- **agents/** — 9 canonical minds
- **platforms/** — Export templates
- **work/** — Active development

---

*No shell. Just intelligence.*
EOF

# Commit
cd "/mnt/d/UNSHELLED.AI"
git add ven0m/
git commit -m "feat: ven0m origin — VENOM complete"
```

---

## Phase 4: Venoctis (Daemon)

```bash
SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI/venoctis"

# Copy venoctis docs
cp "$SOURCE/platforms/venoctis/README.md" "$DEST/"
cp "$SOURCE/platforms/venoctis/ARCHITECTURE.md" "$DEST/"
cp "$SOURCE/platforms/venoctis/THE-JOURNEY.md" "$DEST/"

# Copy spec system (.specify)
cp -r "$SOURCE/.specify" "$DEST/packages/"

# Copy opencode
cp -r "$SOURCE/.opencode" "$DEST/packages/"

# Create venoctis README
cat > "$DEST/README.md" << 'EOF'
# VENOCTIS — The Living System

> VENOM + NOCTIS (night). 8 letters. 8 arms.

The daemon that never sleeps.

## Status

**Architecture:** Complete
**Build:** Phase 0 — Pending

## What's Here

- **packages/cli/** — Main binary
- **packages/workflows/** — Spec, build, review
- **packages/skills/** — Reusable modules
- **ARCHITECTURE.md** — Technical design
- **THE-JOURNEY.md** — Build path

---

*Built: March 2026*
EOF

# Commit
cd "/mnt/d/UNSHELLED.AI"
git add venoctis/
git commit -m "feat: venoctis daemon platform"
```

---

## Phase 5: Sites (unshelled.ai & ven0m.ai)

```bash
DEST="/mnt/d/UNSHELLED.AI"

# unshelled.ai framework site
cat > "$DEST/unshelled.ai/README.md" << 'EOF'
# unshelled.ai — Framework Site

The public face of UNSHELLED.

## Structure

- **content/** — Philosophy, protocol, docs
- **public/** — Astro site

## Status

*Framework coming soon.*

---

*No shell. Just intelligence.*
EOF

# ven0m.ai VENOM site
cat > "$DEST/ven0m.ai/README.md" << 'EOF'
# ven0m.ai — Meet VENOM

The showcase site for VENOM.

## Structure

- **content/** — Meet VENOM, docs, install
- **public/** — Showcase site

## Status

*Coming soon.*

---

*Meet VENOM.*
EOF

# Commit
cd "$DEST"
git add unshelled.ai/ ven0m.ai/
git commit -m "feat: site stubs for unshelled.ai and ven0m.ai"
```

---

## Phase 6: Research & Archive

```bash
SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"
DEST="/mnt/d/UNSHELLED.AI"

# Copy research drafts
cp -r "$SOURCE/draft" "$DEST/research/active/experiments/"

# Copy SDD vendor research
cp -r "$SOURCE/draft/research-sdd-vendors" "$DEST/research/active/sdd-vendors/"

# Copy work research
cp -r "$SOURCE/.venom/work/claude-code-research" "$DEST/research/findings/claude-code"
cp -r "$SOURCE/.venom/work/claude-code-rethink" "$DEST/research/findings/claude-code-rethink"
cp -r "$SOURCE/.venom/work/antigravity-eat" "$DEST/research/findings/antigravity"

# Copy archive
cp -r "$SOURCE/archive" "$DEST/archive/venom-archive"

# Commit
cd "$DEST"
git add research/ archive/
git commit -m "feat: research and archive migration"
```

---

## Phase 7: Final Sync & Verification

```bash
DEST="/mnt/d/UNSHELLED.AI"

# 1. Create .gitignore
cat > "$DEST/.gitignore" << 'EOF'
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
draft/research-sdd-vendors/
EOF

# 2. Verify structure
tree -L 2 "$DEST" || find "$DEST" -maxdepth 2 -type d

# 3. Count files migrated
echo "Files migrated: $(find "$DEST" -type f | wc -l)"

# 4. Final commit
cd "$DEST"
git add .
git commit -m "chore: complete UNSHELLED.AI migration"

# 5. Create tag
git tag -a v1.0.0 -m "UNSHELLED.AI Universe — Birth"

echo "=== Migration Complete ==="
echo "Location: $DEST"
echo "Files: $(find "$DEST" -type f | wc -l)"
echo "Git commits: $(git rev-list --count HEAD)"
```

---

## Post-Migration Tasks

1. **Update all internal links** — Search and replace old paths
2. **Verify .cursor/ templates** — Ensure export paths are correct
3. **Update .venom/CONTEXT.md** — Fix all references
4. **Create GitHub repo** — Push to `kariemseiam/UNSHELLED.AI`
5. **Update DNS** — Point domains when ready

---

## Rollback (If Needed)

```bash
# If something goes wrong, original is safe at:
SOURCE="/mnt/c/Users/karie/Desktop/venom-mine"

# To rollback, simply delete the migration:
rm -rf /mnt/d/UNSHELLED.AI

# Original venom-mine remains untouched
```

---

*Execute with care. Each phase is reversible until git push.*
