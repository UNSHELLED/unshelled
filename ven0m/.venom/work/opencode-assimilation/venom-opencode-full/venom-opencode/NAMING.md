# VENOM × OpenCode — Naming Manifest

> Every artifact named with intent. No shells. No generics.

---

## Artifact Map

| Artifact | Path | Slash command / ID | Maps to mind | Why this name |
|----------|------|--------------------|--------------|---------------|
| **AGENTS.md** | `./AGENTS.md` | — (loaded automatically) | All minds | Project-level identity. Defines VENOM behavior for all agents. |
| **opencode.json** | `./opencode.json` | — (loaded automatically) | — | OpenCode config. VENOM opinions baked in (instructions, permissions, compaction). |
| **venom-reviewer** | `.opencode/agents/venom-reviewer.md` | `@venom-reviewer` | Arm 2 (Reviewer) | Reviews. 8-perspective gate. Read-only. Name = mind name from `agents/venom-reviewer.md`. |
| **venom-architect** | `.opencode/agents/venom-architect.md` | `@venom-architect` | Brain 0 (Orchestrator/Architect) | Designs systems. Never implements. Name = mind name from `agents/venom-architect.md`. |
| **venom-researcher** | `.opencode/agents/venom-researcher.md` | `@venom-researcher` | Arm 1 (Researcher) | Explores code. Read + web. Loop pattern. Name = mind name from `agents/venom-researcher.md`. |
| **venom-debugger** | `.opencode/agents/venom-debugger.md` | `@venom-debugger` | Arm 5 (Debugger) | Root cause finder. Debug loop. Name = mind name from `agents/venom-debugger.md`. |
| **venom-builder** | `.opencode/agents/venom-builder.md` | `@venom-builder` (hidden) | Arm 4 (Builder) | Parallel execution soldier. Hidden — invoked by orchestrator, not user. Name = mind name from `agents/venom-builder.md`. |
| **venom-explorer** | `.opencode/agents/venom-explorer.md` | `@venom-explorer` | Scout (Arm 1 lite) | Fast read-only anatomy scan. Haiku model. Not a researcher — feeds researchers and builders. Name signals: explore, not analyze. |
| **venom-review** | `.opencode/commands/venom-review.md` | `/venom-review` | Arm 2 via delegation | Invokes venom-reviewer as subtask. Verb form of the agent. |
| **venom-research** | `.opencode/commands/venom-research.md` | `/venom-research` | Arm 1 via delegation | Invokes venom-researcher as subtask. Verb form. |
| **venom-eat** | `.opencode/commands/venom-eat.md` | `/venom-eat` | All minds (absorption) | "Eat" = VENOM's word for full absorption. Not "scan" or "analyze." |
| **venom-init** | `.opencode/commands/venom-init.md` | `/venom-init` | Pattern #1 + #7 | Scaffolds `.venom/` + verifies AGENTS.md. Smarter than `/init`. |
| **venom-check** | `.opencode/commands/venom-check.md` | `/venom-check` | Arm 2 (Gate 5 meta) | Quality gate audit. Runs Gate 5 checklist. |
| **venom-core** | `.opencode/plugins/venom-core.ts` | — (auto-loaded) | All patterns | The intelligence plugin. Hooks, safety, learning, memory. One file, one name. |
| **VENOM_OPENCODE** | `.opencode/skills/VENOM_OPENCODE/SKILL.md` | `skill({ name: "venom-opencode" })` | All minds | OpenCode-specific VENOM intelligence. Lazy-loaded when needed. |

---

## Naming Rules

1. **Agents:** `venom-<mind-name>.md` — always lowercase, always hyphenated, always matches the canonical mind name from `agents/venom-*.md` in the origin repo.

2. **Commands:** `venom-<verb>.md` — verb form of what it does. `review` not `reviewer`. `eat` not `absorb`. `check` not `quality-gate`.

3. **Plugin:** `venom-core.ts` — one plugin, one name. Not `plugin.ts`, not `hooks.ts`, not `index.ts`.

4. **Skill:** `VENOM_OPENCODE` (directory name, uppercase per convention) → `venom-opencode` (skill name in frontmatter, lowercase per OpenCode requirement).

5. **No generic names ever.** No `helper`, `assistant`, `tool`, `agent1`, `utils`. Every name signals intent.

6. **Prefix consistency:** All VENOM artifacts use `venom-` prefix. If it doesn't start with `venom-`, it's not a VENOM artifact.

---

## Mind Coverage

| Mind | Agent | Command | Covered |
|------|-------|---------|---------|
| Brain 0 — Architect/Orchestrator | venom-architect | — (primary agent orchestrates) | ✅ |
| Arm 1 — Researcher | venom-researcher | /venom-research | ✅ |
| Arm 2 — Reviewer | venom-reviewer | /venom-review, /venom-check | ✅ |
| Arm 3 — Historian | — | — | Via MEMORY.md + venom_remember tool |
| Arm 4 — Builder | venom-builder (hidden) | — | ✅ parallel execution |
| Arm 1 lite — Scout | venom-explorer | — (spawned internally) | ✅ fast anatomy before deep research |
| Arm 5 — Debugger | venom-debugger | — (invoked by primary when debugging) | ✅ |
| Arm 6 — Predictor | — | — | Woven into architect + reviewer prompts |
| Arm 7 — Communicator | — | — | Via AGENTS.md energy matching |
| Arm 8 — Learner | — | — | Via venom-core.ts instinct system |

**Why not all 9 as separate agents:** Minds 3, 6, 7, 8 are *dispositions* (how every agent thinks), not *delegation targets* (separate workers). Historian memory is a tool. Prediction is woven into architect/reviewer prompts. Communication is in AGENTS.md. Learning is in the plugin. Separate agents for these would be empty shells with no real work to do.

---

## Voice Check — 10 Lines

1. **"venom-reviewer"** — Would a developer know this reviews code? Yes. Clear.
2. **"venom-architect"** — Would a developer know this designs systems? Yes. Clear.
3. **"venom-researcher"** — Would a developer know this explores code? Yes. Clear.
4. **"venom-debugger"** — Would a developer know this finds bugs? Yes. Clear.
5. **"venom-builder"** — Would a developer know this implements things? Yes. Hidden, so only orchestrator sees it.
6. **"/venom-eat"** — Would a developer guess this absorbs a project? Maybe not on first encounter — but "eat" is VENOM's signature verb. It's in every VENOM platform. Consistency > discoverability for this one.
7. **"/venom-init"** — Would a developer know this sets up VENOM? Yes. Standard pattern.
8. **"/venom-review"** — Would a developer know this does code review? Yes. Verb form of the agent.
9. **"/venom-check"** — Would a developer know this is a quality audit? Yes. Clear.
10. **"venom-core.ts"** — Would a developer know this is the main plugin? Yes. "core" = the central one.

11. **"venom-explorer"** — Would a developer know this explores code? Yes. Distinct from "researcher" — faster, shallower, feeds the others.

**No shell check:** Every name passes. No `helper`, no `utils`, no `agent1`, no `tool`. Every name says what it is, maps to a mind, and carries VENOM's voice.

---

## Cross-Reference: Origin → OpenCode

| Origin file (`agents/`) | OpenCode agent (`.opencode/agents/`) | Notes |
|--------------------------|---------------------------------------|-------|
| `venom-architect.md` | `venom-architect.md` | Same name. OpenCode version adds frontmatter + permission model. |
| `venom-researcher.md` | `venom-researcher.md` | Same name. OpenCode version uses @explore subagent. |
| `venom-reviewer.md` | `venom-reviewer.md` | Same name. OpenCode version is read-only via permission policy. |
| `venom-debugger.md` | `venom-debugger.md` | Same name. OpenCode version has stall detection loop. |
| `venom-builder.md` | `venom-builder.md` | Same name. OpenCode version is hidden for wave execution. |
| `venom-historian.md` | — (tool: venom_remember) | Historian function via plugin tool, not separate agent. |
| `venom-predictor.md` | — (woven into architect/reviewer) | Prediction integrated, not standalone. |
| `venom-communicator.md` | — (AGENTS.md energy matching) | Communication style in AGENTS.md, not a worker. |
| `venom-learner.md` | — (plugin: instinct system) | Learning via venom-core.ts hooks + venom_instinct tool. |
| `venom-bridge.md` | — (not needed for OpenCode v1) | Bridge for cross-platform contexts — future work. |
| — | `venom-explorer.md` | OpenCode-only. Fast Haiku scout. No origin equivalent — enables fast anatomy before deep work. |
