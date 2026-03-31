# VENOM — Cross-platform specification (constitution)

> **Role:** Human-owned contract. Not OpenCode config — the *rules for how we shape* OpenCode, Cursor, Claude Code, and anything we add.
> **Soul detail:** `template/VENOM.md` (identity, nine minds, pact, verbs). This file is the *governance layer* on top.

**Version:** 1.0.0 · **Owner:** Kariem Seiam · **Home:** `platforms/opencode/` (this folder)

---

## 1. What “body” means here

| Layer | File(s) | Purpose |
|--------|---------|---------|
| **SPEC** | `SPEC.md` (this file) | Constitution: methodology, non-negotiables, how ideas get validated |
| **MATRIX** | `MATRIX.md` | Runtime × injection point × path — provable load paths |
| **Soul** | `template/VENOM.md` | Full identity, pact, pushback scale, workflows in prose |
| **Machine skill** | `template/.opencode/skills/VENOM_OPENCODE/SKILL.md` | Invoked skill body for OpenCode (and pattern for other tools) |
| **Project brain** | `.venom/CONTEXT.md` (after deploy) | Assimilated truth for *this* repo — not duplicated in SPEC |

SPEC does not replace VENOM.md; it tells you *when to edit which* and *how to keep platforms aligned*.

---

## 2. Non-negotiables (all runtimes)

1. **Answer first** — first sentence is the substance; no performative agreement.
2. **Disposition over rule-chasing** — tools differ; the pact does not.
3. **One canonical narrative** — identity and deep protocol live in **one** place per concern (`VENOM.md` for soul, `SKILL.md` for invocable ops); other surfaces **link, symlink, or thin-shim** — no silent drift.
4. **Contract before convention** — if a tool’s schema or docs forbid something, we do not pretend it works; we document the gap in `MATRIX.md`.
5. **Verify load paths** — after config or tool upgrades: session actually sees instructions (e.g. OpenCode: `opencode debug config` / `debug skill`).

---

## 3. Methodology: loop every idea through this

For **each** new idea (feature, rule, agent, command):

| Step | Question |
|------|-----------|
| **Intent** | What changes for the user in one sentence? |
| **Primitive** | System instructions, rule file, skill, subagent `.md`, plugin, or JSON config key? |
| **Runtimes** | Which of OpenCode / Cursor / Claude Code must behave the same? |
| **Canonical home** | Which single file is edited first? |
| **Shims** | What copies, symlinks, or one-line `instructions` entries propagate it? |
| **Drift risk** | Where will tools diverge if we forget to update? |
| **Verification** | How do we prove it loaded? (command, UI check, debug subcommand) |

If a step has no answer, **do not ship the idea** until `MATRIX.md` has a row for it.

---

## 4. Standards hierarchy (what we “follow”)

1. **Contractual** — Official schemas and paths (e.g. [OpenCode config schema](https://opencode.ai/config.json), Cursor `.mdc` frontmatter, Claude skills/agents layout).
2. **Conventional** — Patterns from reference repos (OpenCode itself, Superpowers, Anthropic-style skills): file shape and wiring only.
3. **Dispositional** — VENOM pact and energy matching: must still read correctly after stripping formatting.

---

## 5. Where to edit what (quick map)

| You want to change… | Start here |
|---------------------|------------|
| Identity, nine minds, pact wording | `template/VENOM.md` |
| OpenCode-only commands / agents | `template/.opencode/commands/`, `template/.opencode/agents/` |
| Invocable skill detail | `template/.opencode/skills/VENOM_OPENCODE/SKILL.md` |
| Default instruction stack | `template/opencode.json` + `opencode.example.json` |
| Cross-tool truth + load paths | `MATRIX.md` |
| Maintainer drills (proof after changes) | `ARENA.md` |
| Main-repo body files (registry) | `../../anatomy/PARTS.md` |
| This constitution | `SPEC.md` |

---

## 6. Relationship to existing docs

- **`README.md`** — OpenCode system map, CLI, surfaces (operational truth for this platform).
- **`MANIFEST.md`** — Full file inventory (what exists where).
- **`SPEC.md`** — *How we decide and align* (this file).
- **`MATRIX.md`** — *Where each tool injects VENOM* (compatibility truth).

---

*Amend SPEC when you change governance or the idea loop — not when you tweak a single agent prompt (unless that prompt becomes a new cross-platform primitive).*
