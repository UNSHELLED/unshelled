# Packages — VENOCTIS Core

> The organs of the living system.

---

## What This Is

These are the packages that make VENOCTIS work. Each package is an organ with a specific function.

**Status:** Architecture complete. Build pending (Phase 0 not started).

---

## The Packages

### cli/
**Main binary** — The `venoctis` command.

What it does:
- Start/stop the daemon
- Configure senses (GitHub, YouTube, News)
- Manage projects and memory
- Debug and inspect state
- Run workflows manually

Status: Not built

### workflows/
**Autonomous capabilities** — What VENOCTIS does while you sleep.

- `spec` — Project specification generator
- `build` — Autonomous builder
- `review` — Code review on push
- `index` — Auto-generate INDEX.md

Status: Not built

### skills/
**Reusable modules** — Skills VENOCTIS uses across workflows.

- Project anatomy scanner
- Memory consolidation
- Instinct promotion
- Pattern detection

Status: Not built

### integrations/
**MCP reshaping layer** — Taking open-source MCPs and reshaping for VENOM.

- GitHub MCP (official → reshaped)
- YouTube MCP (forked → reshaped)
- News MCP (RSS → custom)
- Webhook MCP (custom)

Status: Not built

---

## Build Order

Phase 0 builds in this order:

1. **Heartbeat** (`cli/` core + daemon)
2. **One sense** (GitHub MCP integration)
3. **One workflow** (project indexer)
4. Test. Verify. Then add more.

Each phase delivers one working organ. No phase starts until previous works.

---

## Development

When Phase 0 starts:
- TypeScript for CLI and workflows
- Python for daemon (`venom-pulse`)
- Node.js for MCP servers
- SQLite for state
- Git for project clones

---

*Packages ready. Build pending.*
