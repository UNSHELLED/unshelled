# Extracted: claude-extensions (claude-contrib)

**Source path:** `draft/research-sdd-vendors/claude-extensions/`  
**Eaten:** 2026-03-30 (`README.md`, `plugins/agent-rules/README.md`)

---

## One-line thesis

**Passive plugins** — **hooks** (SessionStart, Stop, Notification, …) + **context rules** (path globs) run **without** user invocation; install via **marketplace** + `/plugin install`.

---

## Extension types (official table)

| Type | Trigger | Examples |
|------|---------|----------|
| **Hooks** | Claude Code events | Sync on startup, notify on completion |
| **Context rules** | Path patterns | Inject conventions for `src/api/**` |

**Audience:** **all three** for rules; **hooks** on **`claude -p`** depend on **bare** vs full — see **SURFACES.md** (`--bare` skips discovery).

---

## agent-rules (flagship pattern)

- **SessionStart-class behavior:** Find all **`AGENTS.md`**, copy to **`.claude/rules/agents/`** with YAML frontmatter **`paths:`** derived from directory (e.g. `src/api/AGENTS.md` → scope `src/api/**/*`).
- **Idempotent:** Skip unchanged; remove stale generated rules when source deleted.
- **Gitignore:** Recommend ignoring **`.claude/rules/agents/`** (generated).

**VENOM implication:** Same bridge as **AGENTS.md → path rules** — if template uses **AGENTS.md**, this plugin **automates** sync; or VENOM documents **manual** parity in template.

**No novel hook names** in README — focus is **automation** of **rules** + **notifications** (tmux, macos).

---

## Marketplace registration

```json
"extraKnownMarketplaces": {
  "claude-extensions": {
    "source": { "source": "github", "repo": "claude-contrib/claude-extensions" }
  }
}
```

---

## Power-user patterns

- **Path-scoped rules** as first-class — matches Anthropic **path-specific rules** doc.
- **Passive** = zero prompt cost to “remember” conventions each session.

**Audience:** **any dev** onboarding; **headless** may omit plugin — use **committed** `.claude/rules` or **CLAUDE.md** instead.
