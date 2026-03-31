# Claude Code Anatomy: Compaction

> **Verified against:** [Memory](https://docs.anthropic.com/en/docs/claude-code/memory) (CLAUDE.md after compact) + [Hooks — PreCompact](https://docs.anthropic.com/en/docs/claude-code/hooks) + [Subagents](https://docs.anthropic.com/en/sub-agents) (auto-compact %) (2026-03-30).

**Status:** 🟢 Research complete

---

## Triggers

| Trigger | Meaning |
|---------|---------|
| **Manual** | `/compact [instructions]` |
| **Auto** | Context window fills — subagents default **~95%** capacity; override with **`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE`** (e.g. `50`) |

**PreCompact `matcher`:** `manual` \| `auto` (see **`HOOKS.md`**).

---

## What survives (instructions on disk)

- **CLAUDE.md / rules:** **Fully survive.** After compaction, Claude **re-reads** instruction files from disk and **re-injects** them. If something “disappeared,” it lived only in **chat**, not in files ([Memory](https://docs.anthropic.com/en/docs/claude-code/memory#instructions-seem-lost-after-compact)).
- **`@` imports:** Part of CLAUDE.md bundle — reloaded with parent file on re-inject.
- **Conversation:** **Summarized / compressed** — not preserved verbatim in full detail.

---

## Subagent transcripts

- **Separate files** from main conversation — **not** cleared when **main** thread compacts.
- Auto-compaction events logged in subagent transcript (`compact_boundary` metadata).

---

## `PreCompact` hook

- **Input:** `trigger` (`manual` \| `auto`), `custom_instructions` (user text for manual `/compact`).
- **Decision control:** **None** for blocking compaction — side effects / logging only ([`HOOKS.md`](./HOOKS.md)).
- **Universal JSON:** `systemMessage`, `continue`, etc. still valid for **user-visible** messages — template `pre-compact.js` uses **`continue` + `systemMessage`** to remind what to preserve in the **summary**.

**Important:** The compaction **model** generates a summary; PreCompact runs **before** that process — use it to **steer** preservation intent, not to guarantee verbatim retention of chat.

---

## `PostCompact`

- **Input:** `trigger`, `compact_summary` (generated summary text).
- **Use:** Logging, external state — **no** decision control on summary content.

---

## VENOM survival strategy (validated)

1. **Identity in `CLAUDE.md` + `@` knowledge** — survives because files reload ([**CLAUDE-MD.md**](./CLAUDE-MD.md)).
2. **PreCompact `systemMessage`** — short “preserve: nine minds, pact, task, …” — aligns with template `platforms/claude-code/template/.claude/scripts/pre-compact.js`.
3. **`.venom/work/ACTIVE.md`** — **file** on disk; not auto-loaded unless you read it in CLAUDE.md or hooks — **document** orchestrator responsibility to re-read after compact if needed.
4. **Do not** rely on compaction to keep **unwritten** conversational turns.

---

## References

- [Memory — troubleshoot / compact](https://docs.anthropic.com/en/docs/claude-code/memory#instructions-seem-lost-after-compact)  
- [Hooks — PreCompact / PostCompact](https://docs.anthropic.com/en/docs/claude-code/hooks)  
- [Context window](https://docs.anthropic.com/en/context-window) — visualization  

---

## Checklist

- [x] CLAUDE.md survives + re-inject  
- [x] Chat-only instructions don’t  
- [x] PreCompact timing + inputs  
- [x] Subagent vs main compaction  
