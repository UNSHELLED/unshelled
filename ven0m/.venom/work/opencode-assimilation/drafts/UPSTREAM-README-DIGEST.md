# OpenCode upstream — README digest (verified)

**Source:** `https://raw.githubusercontent.com/anomalyco/opencode/dev/README.md`  
**Repo API:** `anomalyco/opencode` — **default branch `dev`** (not `main`; raw links must use `dev`).  
**License:** MIT · **Language:** TypeScript · **Homepage:** https://opencode.ai

---

## Product (one sentence)

> The open source AI coding agent.

---

## Install (official)

- Script: `curl -fsSL https://opencode.ai/install | bash`
- **npm:** `npm i -g opencode-ai@latest` (also bun/pnpm/yarn)
- **Windows:** `scoop install opencode`, `choco install opencode`
- **macOS/Linux:** Homebrew variants listed in README
- **Tip:** Remove versions older than **0.1.x** before installing.

**Install path priority (bash installer):**

1. `$OPENCODE_INSTALL_DIR`
2. `$XDG_BIN_DIR`
3. `$HOME/bin`
4. `$HOME/.opencode/bin` (default fallback)

---

## Desktop (BETA)

Downloads: GitHub releases, opencode.ai/download; brew cask / scoop extras for desktop.

---

## Agents (critical — overrides loose “Tab = plan mode” wording)

OpenCode ships **two built-in agents**, switchable with **`Tab`**:

| Agent | Behavior |
|-------|----------|
| **build** | Default — full access for development |
| **plan** | Read-only — **denies file edits by default**, asks permission before bash — for exploration / planning |

Also: **`general`** subagent for complex searches / multistep — invoke with **`@general`** in messages.

Docs: https://opencode.ai/docs/agents

---

## Differentiators (vs Claude Code — per upstream FAQ)

- 100% open source
- Not tied to one provider (Zen recommended but Claude/OpenAI/Google/local possible)
- LSP support out of the box
- TUI-first culture (neovim / terminal.shop lineage)
- **Client/server architecture** — e.g. engine local, UI remote (mobile, etc.)

---

## Community

Discord + X linked from README; contributing via `./CONTRIBUTING.md`.

---

## Naming

Third-party projects using “opencode” in the name should **disclaim** non-affiliation in README.

---

*Refresh when bumping OpenCode major/minor or changing agents behavior.*
