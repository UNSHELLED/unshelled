# Drafts folder — inventory & merge order

**Path:** `.venom/work/opencode-assimilation/drafts/`  
**Purpose:** Absorb into canonical plans (`MASTER-PLAN.md`, future `ARCHITECTURE.md`, future `platforms/opencode/`) without keeping duplicate SSOTs.

---

## Merge order (read first → last)

0. **`UPSTREAM-README-DIGEST.md`** — Verified facts from `anomalyco/opencode` **dev** README (agents Tab/build/plan, install, FAQ). Read before trusting older draft wording.

0b. **`CORPUS-DIGEST.md`** — Full map of all drafts + defects + trust tiers + missing `modes-opencode.md`. Eat after A–B, before editing prose.

1. **`VENOM-OPENCODE-IMPLEMENTATION-PLAN.md`** — Deepest file/manifest; reconcile target paths with current repo (`platforms/opencode/` not `wsl-venom\...`).
2. **`systems/README.md`** — If present: systems numbering vs `venom-heart` / consciousness (resolve duplicates in `ARCHITECTURE.md`).
3. **`cognitive/brain0-cognitive.md` → `arm1`…`arm8`** + **`cognitive/opencode-*.md`** — Merge into one “OpenCode cognitive overlays” section (avoid 9+6 parallel files long-term).
4. **`identity/brain0-orchestrator.md` → `arm2`…`arm8`** — Align naming with `agents/*.md` at repo root.
5. **`knowledge/*.md`** — `opencode-reference`, `capabilities`, `cli-patterns`, `best-practices`, `first-message-opencode`, `profile-opencode`, `soul.md` (if soul duplicates `consciousness/`, **link** don’t fork).
6. **`skills/VENOM_OPENCODE/`** — `SKILL.md` + `QUICKREF.md` + `README.md` → future `platforms/opencode` skill pack.
7. **`commands/*.md`** — `venom-opencode`, `v-learn-opencode`, `vd-opencode`, `vr-opencode`, `help.md` → future command pack.

---

## File index (quick)

| Path | Role |
|------|------|
| `VENOM-OPENCODE-IMPLEMENTATION-PLAN.md` | Full phased implementation + file manifest |
| `cognitive/brain0-cognitive.md` | Brain 0 overlay for OpenCode |
| `cognitive/arm[1-8]-cognitive.md` | Per-arm cognitive overlays |
| `cognitive/opencode-context-awareness.md` | Mode detection (CLI/TUI/…) |
| `cognitive/opencode-workspace-scanner.md` | Repo/workspace scan behavior |
| `cognitive/opencode-tooling-awareness.md` | MCP, npx, agents |
| `cognitive/opencode-project-workflows.md` | /init, share, export, … |
| `cognitive/opencode-verification.md` | Test/build verification |
| `cognitive/opencode-optimization.md` | Perf/tooling |
| `cognitive/opencode-integration.md` | SDK/API integration |
| `identity/brain0-orchestrator.md` | Identity layer Brain 0 |
| `identity/arm*-*.md` | Identity per arm |
| `knowledge/opencode-reference.md` | Reference sheet |
| `knowledge/opencode-capabilities.md` | Capability list |
| `knowledge/opencode-cli-patterns.md` | CLI patterns |
| `knowledge/opencode-best-practices.md` | Practices |
| `knowledge/opencoode-ide-patterns.md` | IDE patterns (note typo: opencoode) |
| `knowledge/first-message-opencode.md` | First message template |
| `knowledge/profile-opencode.md` | Profile |
| `knowledge/soul.md` | Soul snippet — check vs `consciousness/` |
| `skills/VENOM_OPENCODE/SKILL.md` | Main skill |
| `skills/VENOM_OPENCODE/QUICKREF.md` | Quick reference |
| `skills/VENOM_OPENCODE/README.md` | Skill readme |
| `commands/venom-opencode.md` | Full venom command |
| `commands/v-learn-opencode.md` | Learn command |
| `commands/vd-opencode.md` | Debug variant |
| `commands/vr-opencode.md` | Review variant |
| `commands/help.md` | Help |

---

## Conflicts to resolve in Wave F

- **Implementation plan** says “16 cognitive systems” / “11 base + 5 OpenCode” but lists overlapping numbers — **normalize** in `ARCHITECTURE.md` with one table.
- **`opencoode-ide-patterns.md` filename typo** — rename when promoting to `platforms/opencode/`.
- **Target path** in implementation plan ≠ `MASTER-PLAN.md` — **MASTER-PLAN** wins for repo layout; draft supplies **content**.

---

**Last updated:** 2026-03-27
