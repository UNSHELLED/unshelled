# VENOM × OpenCode — Arena

> **No shell. Just pressure that teaches.**
> **Role:** Where ideas **spar** before they ship — same pact as production, faster feedback, explicit proof.

**Version:** 1.0.0 · **Owner:** Kariem Seiam · **Home:** `platforms/opencode/ARENA.md`

---

## What this is (and is not)

| | |
|--|--|
| **Is** | A maintainer-facing **drill floor**: quick checks that wiring, tone, and load paths still hold after a tool or doc change. |
| **Is not** | A second SPEC, a second README, or a user install path. Install stays in [`INSTALL.md`](INSTALL.md). Law stays in [`SPEC.md`](SPEC.md). Inventory stays in [`MANIFEST.md`](MANIFEST.md). Proof of injection stays in [`MATRIX.md`](MATRIX.md). |

If an idea survives the Arena and fails in production, the **Arena round** was wrong — fix the round, not the user.

---

## The three pressures (every change gets at least one)

1. **Load path** — Did the runtime actually ingest VENOM? (See **Verify** column in `MATRIX.md`.)
2. **Voice** — Strip the formatting. Does the thinking still read as VENOM? (`SPEC.md` §2, `template/VENOM.md`.)
3. **Parity honesty** — Are we claiming a capability OpenCode (or Cursor, or Claude) does not wire? (`MATRIX.md` — *Parity honesty*.)

No round passes on vibes alone. Each round ends with **evidence** (command output, file path, or explicit “N/A — documented gap”).

---

## Round catalog (pick by what you touched)

| You edited… | Round | Evidence |
|-------------|-------|----------|
| `template/opencode.json` or merge keys | **R1 — Config merge** | `opencode debug config` (project root with template copied or test project) — `instructions[]` includes `AGENTS.md` + `.venom/CONTEXT.md` |
| `template/.opencode/plugins/venom-core.ts` | **R2 — Autonomic** | Session start: plugin listed; tool names visible in debug or session behavior per `VENOM.md` § Autonomic Layer |
| `template/.opencode/commands/*.md` | **R3 — Slash truth** | TUI: command appears; behavior matches command doc; **not** confused with shell (`AGENTS.md` OpenCode non-negotiables) |
| `template/.opencode/agents/*.md` | **R4 — @mention** | `@venom-researcher` (or edited agent) responds within policy (read-only vs full tools) |
| `template/AGENTS.md` or `VENOM.md` | **R5 — Soul compression** | Read first 40 lines aloud (literally): answer-first + pact + no filler survives |
| Cross-platform wording | **R6 — Shim trace** | `MATRIX.md` row updated; canonical home in `SPEC.md` §5 still correct |
| New surface / CLI claim in `README.md` | **R7 — Doc debt** | Official reference link still valid; **Verify** command in `MATRIX.md` still runs |

---

## Sparring loop (mini idea loop — same spirit as SPEC §3)

| Step | Question |
|------|----------|
| **Intent** | What breaks for Kariem if this ships wrong? |
| **Round** | Which row in the catalog applies? |
| **Proof** | What command or file proves pass/fail? |
| **Gap** | If proof is impossible, where is the gap recorded (`MATRIX.md` / README caveat)? |

If **Proof** has no answer, **do not ship** — write the gap first.

---

## Scenario hooks (rhymes with `docs/SIMULATIONS.md`)

The template ships **SIMULATIONS** for the agent. The Arena uses **maintainer-shaped** echoes — same tone, different job:

| Situation | Arena move |
|-----------|------------|
| “We added a new command” | R3 + R5 — slash works + soul still compresses |
| “OpenCode upgraded” | R1 + `MATRIX.md` **After a tool upgrade** checklist |
| “Cursor rules changed” | R6 — `instructions` shim + parity row |
| “Plugin silent after deploy” | R2 — global vs project `plugin` path; `npm install` in plugins dir |

---

## Full-power triggers (unchanged)

`venom` · `eat` · `masterpiece` · `go deep` · `full power`

The Arena does not replace those — it **checks** the body still earns them after you move files.

---

## Navigation

| Need | File |
|------|------|
| System map + CLI | [`README.md`](README.md) |
| Constitution + idea loop | [`SPEC.md`](SPEC.md) |
| Load paths + verify | [`MATRIX.md`](MATRIX.md) |
| File inventory | [`MANIFEST.md`](MANIFEST.md) |
| Deploy steps | [`INSTALL.md`](INSTALL.md) |
| Soul (identity) | [`template/VENOM.md`](template/VENOM.md) |
| Main-repo body registry | [`../../anatomy/PARTS.md`](../../anatomy/PARTS.md) |

---

*One identity. Nine minds. The Arena is where the wiring bleeds so production doesn't.*
