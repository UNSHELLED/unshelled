# Cursor Platform Audit

**Date audited:** 2026-03-30  
**Template path:** `platforms/cursor/template/.cursor/`  
**Role in ecosystem:** Oldest, most battle-tested VENOM body — modular rules, always-on spine, richest expression layer.

---

## What Exists

### Rules (`.cursor/rules/`)

| File | `alwaysApply` | Priority | Role |
|------|---------------|----------|------|
| `venom-heart.mdc` | yes | 1001 | Pact, `/venom?` init sequence, infer/anatomy, route table, Cursor mode check, energy match, 8 diseases, pushback 0–3, eat→archetype, body vs organs, Protocol 9.0, texture |
| `voice.mdc` | yes | 999 | Answer first, format=thought table, case library (frustrated → emergency), length table, bilingual note (EN + Egyptian Arabic), never-list |
| `vibes.mdc` | yes | 998 | 9 archetype grammars (Churchill → Rogers), emoji semantics, symbol stack, eight-diseases felt table, one-line mode strip |
| `core.mdc` | yes | 1000 | Camouflage, anti-slop, tiered discovery, read-the-developer, flow & trust, communication shapes |
| `unshelled.mdc` | yes | — | Five pillars, unshelled workflow 7 steps, philosophy |
| `research-first.mdc` | yes | 985 | When research vs execute, anatomy first (SemanticSearch→Grep→Read), heartbeat/skeleton/nerves/organs, context map template, depth-by-task table |
| `tools-orchestration.mdc` | yes | — | Query→tool table, parallel/chain rules |
| `cursor-native.mdc` | yes | — | Full tool table, Windows PowerShell note, modes, anatomy 5-step definition, `.venom/` memory bridge, MCP table, “what I don’t have”, VENOM body map |
| `cursor-context.mdc` | — | — | Shorter duplicate of surfaces/modes/memory |
| `origin.mdc` | — | — | Origin repo, sync protocol to template |
| `venom-agents.mdc` | — | — | Ten table: 9 agents + bridge, intent→mind, protocols (architect/builder/reviewer), nine-minds texture rule |
| `learn.mdc`, `project.mdc`, `mcp-tools.mdc`, `venom-standards.mdc` | scoped / utility | — | Learning loop, project bits, MCP, standards |

### Identity (`.cursor/identity/`)

`soul.mdc`, `values.mdc`, `principles.mdc`, `capabilities.mdc`, `pushback.mdc`, `kariem.mdc`, `wave.mdc`, `builder-example.venom`, `builder-mark.txt`, `venom-builder.md` — owner calibration + builder markers.

### Systems (`.cursor/systems/`)

`anticipation.mdc`, `critical-thinking.mdc`, `emotional-intelligence.mdc` (archetype↔state wiring for vibes), `integration-engine.mdc`, `learning-engine.mdc`, `memory-tools.mdc`, `meta-cognition.mdc`, `8-diseases.mdc`.

### Commands, hooks, skills, memory

- **Commands:** `venom.md` — single umbrella: presence triggers, memory verbs, thinking partnership, new workspace setup, internal routing table.
- **Hooks:** `before_turn.mdc`, `after_turn.mdc`, `on_error.mdc` — documentation of intent (Cursor hooks ≠ Claude Code hooks).
- **Skills:** `venom-init`, `venom-eat`, `venom-codebase`, `venom-audit` (+ README).
- **`.cursor/memory/MEMORY.md`** — template stub for cross-session memory.

### Counts (approximate)

- **Always-on rule stack:** 3-tier priority (heart → voice → vibes → research-first …) plus cursor-native and others — **10+ modular files** vs one `CLAUDE.md`.
- **No sub-agents in Cursor** — routing is behavioral (`venom-agents.mdc` + Task tool note in `cursor-native.mdc`).

---

## Verdict (per area)

| Area | Verdict |
|------|---------|
| `venom-heart.mdc` | **Port content** into Claude Code `CLAUDE.md` + knowledge files — spine is SSOT-quality |
| `voice.mdc` + `vibes.mdc` | **Port** — Claude Code template under-indexes response-shape law; these are higher fidelity than energy-matching alone |
| `research-first.mdc` | **Port** — same anatomy map as OpenCode rethink; complements AGENTS.md loop protocol |
| `cursor-native.mdc` | **Adapt** — replace Cursor tool names with Claude Code primitives; keep memory bridge + anatomy definition verbatim |
| `venom-agents.mdc` | **Redundant with agents dir in CC** — merge table + protocols into `AGENTS.md` / agent frontmatter, don’t duplicate a second SSOT |
| Identity `kariem.mdc` | **Do not ship as default in universal template** — fold into generated `profile.md` pattern only |
| Hooks `.mdc` | **Cursor-only** — behavior must become UserPromptSubmit / PreToolUse / etc. in Claude Code **when Phase 02 confirms** |
| `commands/venom.md` | **Port behaviors** into multiple `.claude/commands/` + CLAUDE routing — one mega-command is less discoverable than OpenCode’s verb split |

---

## Rethink From Scratch

If Claude Code were greenfield but we knew Cursor’s lessons:

1. **Modularity without fragmentation:** One **loaded-every-session** core (`CLAUDE.md`) + **small** `@` knowledge files mirroring concerns: `voice.md`, `vibes.md`, `research-first.md`, `cursor-native-parity.md` (tools/modes/memory bridge for Claude Code). Avoid duplicating the same table in five places — single SSOT per table, `@` include from CLAUDE.
2. **Init parity:** `/venom?` sequence in heart is **machine-checkable** — document as numbered steps OpenClaw can verify (files exist → read → output shape).
3. **Archetypes:** Keep **silent application** — never “I detect you’re frustrated”; teach parsers to look at **structure** (code-first vs three options) not keywords.
4. **Two-audience test:** Every rule must pass: human reads once and knows behavior **and** headless run can follow without social cues.

---

## What To Carry Forward

- **`venom-heart.mdc` lines 14–21 (Pact)** + **agreement-before-evaluation** — same spine as DNA doc; non-negotiable.
- **Init block (CONTEXT → MEMORY → corrections → ACTIVE → anatomy → state + question)** — OpenCode covers progressive memory load; Cursor covers **explicit ritual** — merge both in Claude Code vNext.
- **Energy match table (9 rows: Churchill … Rogers)** — Claude Code `energy-matching.md` should be **aligned to this table** (same archetypes, same “never name the mode”).
- **`voice.mdc` format=thought + case library** — port verbatim into `knowledge/voice.md` or a CLAUDE section; this is teachable output law.
- **`vibes.mdc` archetype grammars** — port as **appendix** or `@` file; highest-signal “form = intelligence” spec in the whole ecosystem.
- **Research-first: heartbeat / skeleton / nervous / organs** — same vocabulary as OpenCode eat phases; **one glossary** across platforms.
- **Body vs organs (kits)** — already in heart; must appear in Claude Code to prevent Spec Kit becoming a second brain.
- **Protocol 9.0** — operational anti-slop; port as short bullet block in CLAUDE + hooks where applicable.
- **`cursor-native.mdc` Windows PowerShell** — port to Claude Code knowledge for Windows devs (Bash tool runs PowerShell in Cursor — same class of fix).

---

## What To Kill (in Cursor template when syncing origin — not necessarily in this audit file)

- **Duplicate surface definitions** if `cursor-context.mdc` and `cursor-native.mdc` drift — **one** canonical platform doc in template.
- **Any “Kariem runs” hardcoded in universal template** — replace with **profile** slot (align with INDEX audience shift 2026-03-30).
- **Hooks that only exist as `.mdc` docs** without real Cursor hook API wiring — either implement or label **aspirational** until host supports.

---

## What Cursor Has That’s Worth Porting (detail)

1. **`alwaysApply` stack** — heart + voice + vibes + research-first fire **without user @mention**; Claude Code equivalent: **mandatory CLAUDE.md + compact survival list** + thin `rules/` if used.
2. **Separation of concerns** — voice vs vibes vs research vs agents: **teaches maintainers** where to edit what; CLAUDE.md monolith should **delegate** to `@` files for the same split.
3. **`/venom?` canonical sequence** — more explicit than OpenCode plugin auto-inject; combine with OpenCode progressive load table.
4. **Archetype grammars with emoji contract** — stronger than generic “match energy”; headless profiles can **strip emoji** but keep **structure** (still parseable sections).
5. **Eat → archetype routing** — maps user intent to Churchill/Holmes/… without spawning agents.

---

## The Archetype System (`vibes.mdc`)

| Archetype | State | Output shape |
|-----------|-------|----------------|
| Churchill | Frustrated / broken | Root cause, fix, prevention, done |
| Senna | Flow / building | Code block, ✓ |
| Tesla | Visionary | Enlarge vision → “Where do we enter?” |
| Marcus Aurelius | Stuck | Three ranked options, Pick. |
| Feynman | Learning | Analogy → layers → limitation → “Which depth?” |
| Holmes | Review | Three issues + what works |
| Thich Nhat Hanh | Chaos | One calm sentence, wait |
| Honnold | Emergency | Action + one diagnostic question |
| Rogers | Emotional | Name feeling + open question |

**Port decision:** **Yes** — into `@.claude/knowledge/vibes-archetypes.md` (or merge into `energy-matching.md` if we want one file; prefer separate to reduce merge conflicts).

---

## The Voice System (`voice.mdc`)

- **Answer first** — first sentence = answer (same as OpenCode / DNA).
- **Format = thought** — table maps content type → format (bullets vs prose vs table).
- **Case library** — parallel to archetypes but **prose-level**; use for CLAUDE compact preservation list.
- **Bilingual rule** — template for universal: **“match user language; technical stays English”** without naming a specific locale in shipped default — owner locale belongs in `profile.md`.

**Port decision:** **Yes**, with **locale line** parameterized.

---

## Research-First Protocol

- **When:** multi-file, new modules, architecture, ambiguity, refactors, perf/security.
- **When not:** single file, emergency, explicit “just do it.”
- **Anatomy pass:** SemanticSearch → Grep → Read; map heartbeat, skeleton, nervous system, organs; emit context map (know / missing / break).
- **vs CLAUDE.md v2.4:** Cursor version is **more procedural** (depth-by-task time budgets). **Adopt budgets** into Claude Code synthesis.

---

## Platform Translation Decisions

| Cursor concept | Claude Code equivalent | Port decision |
|----------------|-------------------------|---------------|
| `.cursor/rules/` alwaysApply | `CLAUDE.md` + auto-loaded project context | Split CLAUDE into core + `@` knowledge |
| `globs` / `paths` scoped rules | `.claude/rules/` + path patterns (if used) | Use for repo-specific overrides |
| `.cursor/identity/` | `.claude/knowledge/soul.md`, `pact.md`, `profile.md` | Map 1:1; drop owner-only files from default zip |
| `.cursor/systems/` | knowledge + optional skills | Port anticipation / 8-diseases only if not duplicate |
| `.cursor/commands/venom.md` | Multiple `.claude/commands/` + CLAUDE routing | Split verbs per OpenCode lifecycle for discoverability |
| `.cursor/skills/` | `.claude/skills/` | Same SKILL.md pattern |
| Task tool / subagents | `Task` + `.claude/agents/` | **Claude Code advantage** — keep agents |
| Hooks as `.mdc` docs | `.claude/scripts/*.js` + settings | **Implement** — don’t leave as docs only |

---

## What Stays Cursor-Only

- **`alwaysApply` + priority stack** as a **host feature** — Claude Code doesn’t replicate priority injection; approximate with **load order + compaction list**.
- **Composer / Cmd+I / Plan Shift+Tab** — surface-specific; Claude Code surfaces doc replaces.
- **`.mdc` hook files** until Cursor implements real hooks — documentation-only artifacts.

---

## Rethink Lens

**Question:** What would we build if Claude Code had Cursor’s modularity?

**Answer:** A **thin CLAUDE.md** that only contains: identity one-liner, `@` list, non-negotiables, pointer to init sequence — plus **knowledge files** that mirror Cursor filenames (`voice`, `vibes`, `research-first`, `venom-heart` content). Hooks carry **disposition** (energy pre-injection, tool screening) that rules alone cannot time correctly. Sub-agents remain Claude Code’s differentiator; Cursor’s **behavioral nine-minds table** becomes **orchestration policy** in CLAUDE + AGENTS.

---

*Cursor is the proof that VENOM survives modularization. The Claude Code rethink should import that structure without importing Cursor-only mechanics.*
