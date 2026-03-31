# Claude Code Anatomy: Memory

> **Verified against:** [How Claude remembers your project](https://docs.anthropic.com/en/docs/claude-code/memory) (2026-03-30).

**Status:** 🟢 Research complete

---

## Two mechanisms (complementary)

| | **CLAUDE.md** (and rules) | **Auto memory** |
|---|---------------------------|-----------------|
| **Who writes** | You (team) | Claude |
| **What** | Instructions, standards, architecture | Learnings, commands, prefs discovered in use |
| **Scope** | Project, user, org (managed path) | Per working tree (git-derived project key) |
| **Loaded** | Every session (see **`CLAUDE-MD.md`** for lazy vs eager) | Every session: **first 200 lines or 25KB** of `MEMORY.md` (whichever first) |
| **Use for** | Coding standards, workflows, structure | Build commands, debug notes, habits |

**Session model:** Each session starts with a **fresh** context window. Neither mechanism is “enforced configuration” — both are **context** Claude tries to follow; specificity matters.

**Subagents:** Can have separate [persistent agent memory](https://docs.anthropic.com/en/sub-agents#enable-persistent-memory) (`memory: user` \| `project` \| `local` in agent frontmatter) — see **`AGENTS.md`**.

---

## Reliable cross-session persistence

- **Conversation** in the UI is **not** a durable knowledge base for the next session in the same way files are.
- **Durable by design:** Files you control — **`CLAUDE.md`**, **`.claude/rules/`**, **project `.venom/`**, git-tracked docs, plus **auto memory** under `~/.claude/projects/.../memory/` (machine-local).
- **VENOM:** Treat **`.venom/CONTEXT.md`**, **`.venom/memory/MEMORY.md`**, **`.venom/learnings/`** as the **intentional** project brain; do not confuse with Claude Code **auto memory** (different paths and purpose).

---

## Auto memory (Claude-written)

- **Default:** On (toggle via `/memory` or `autoMemoryEnabled` in settings). Disable: `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1`.
- **Version:** Requires Claude Code **v2.1.59+**.
- **Storage:** `~/.claude/projects/<derived-from-git>/memory/` — shared across worktrees of the same repo. Non-git: project root key.
- **Redirect:** `autoMemoryDirectory` in **user or local** settings only (not project — security).
- **Layout:** `MEMORY.md` index + optional topic files (`debugging.md`, …). Topic files **not** loaded at startup; Claude **Read**s when needed.
- **Startup load cap:** First **200 lines** or **25KB** of **`MEMORY.md`** only — rest not loaded at session start.
- **Audit:** `/memory` opens editor / folder links.

---

## CLAUDE.md vs `.venom/` (VENOM mapping)

| Claude Code concept | VENOM parallel |
|---------------------|----------------|
| Project `CLAUDE.md` | Identity + pointers to `@.claude/knowledge/*` — **ship in template** |
| Auto memory | Machine-local habits — **optional**; not a substitute for `.venom/memory/MEMORY.md` in the Pact |
| `.claude/rules/` | Modular rules — mirror Cursor-style splits if useful |

---

## `CLAUDE.local.md` (clarification)

The official **memory** doc lists project instructions as `./CLAUDE.md` or `./.claude/CLAUDE.md` and user as `~/.claude/CLAUDE.md`. The **[settings](https://docs.anthropic.com/en/docs/claude-code/settings)** scope table has **no** separate “local CLAUDE.md” path.

**Practical local-only instructions without committing:**

- Put them in **`~/.claude/CLAUDE.md`** (user scope), or  
- **`@~/.claude/my-instructions.md`** imported from team `CLAUDE.md` (first-time **approval dialog** for external imports).

If templates referenced `CLAUDE.local.md`, align with **`~/.claude/CLAUDE.md`** + imports unless a newer doc adds a first-class local file.

---

## Troubleshooting (from docs)

- **Not following CLAUDE.md:** Content is **not** system prompt — it’s **user-side context**. For automation-grade injection, see **`--append-system-prompt`** (CLI). Use **`InstructionsLoaded`** hook to audit loads.
- **Too large:** \> **200 lines** per file hurts adherence — split with `@` imports or `.claude/rules/`.
- **Lost after `/compact`:** Instructions only in **chat** vanish; **CLAUDE.md** is re-read after compact (**survives**). Persist important facts in files.

---

## References

- [Memory](https://docs.anthropic.com/en/docs/claude-code/memory)  
- [CLAUDE-MD.md](./CLAUDE-MD.md) — `@` imports, rules, load order  
- [Settings](https://docs.anthropic.com/en/docs/claude-code/settings) — `claudeMdExcludes`, `autoMemoryEnabled`

---

## Checklist

- [x] CLAUDE.md vs auto memory  
- [x] Auto memory paths + 200/25KB cap  
- [x] No guaranteed “strict” compliance from CLAUDE.md alone  
- [x] `.venom/` positioned vs auto memory  
