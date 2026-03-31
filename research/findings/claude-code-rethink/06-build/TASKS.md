# Build Tasks — Claude Code VENOM v3.0
**Status: COMPLETE — 2026-03-30**  
**Reset:** 2026-03-30 — Wave 0 baseline. All prior [x] marks cleared.  
**Spec ref:** `05-design/` for every task. `RESET-PLAN-20260330.md` for wave overview.

---

## Wave 0 — Scaffold

```
[x] platforms/claude-code/
[x] platforms/claude-code/template/
[x] platforms/claude-code/template/.claude/
[x] platforms/claude-code/template/.claude/scripts/
[x] platforms/claude-code/template/.claude/agents/
[x] platforms/claude-code/template/.claude/commands/
[x] platforms/claude-code/template/.claude/knowledge/
[x] platforms/claude-code/template/.claude/skills/venom-deep/
[x] platforms/claude-code/template/.claude/rules/
[x] platforms/claude-code/template/.venom/
[x] platforms/claude-code/template/.venom/memory/
[x] platforms/claude-code/template/.venom/learnings/
[x] platforms/claude-code/template/.venom/work/
[x] platforms/claude-code/template/.venom/state/
```

**Gate:** all dirs exist. ✓

---

## Wave 1 — Core Identity

Spec: `05-design/CLAUDE-MD-SPEC.md`, `05-design/MEMORY-SPEC.md`

```
[x] platforms/claude-code/template/CLAUDE.md
[x] platforms/claude-code/template/.claude/settings.json
[x] platforms/claude-code/template/.venom/CONTEXT.md
[x] platforms/claude-code/template/.venom/memory/MEMORY.md
[x] platforms/claude-code/template/.venom/learnings/corrections.yaml
[x] platforms/claude-code/template/.venom/learnings/instincts.yaml
[x] platforms/claude-code/template/.venom/learnings/preferences.yaml
[x] platforms/claude-code/template/.venom/work/ACTIVE.md
[x] platforms/claude-code/template/CLAUDE.local.md.template
[x] platforms/claude-code/template/.claude/settings.local.json.template
```

**Gate:** Open Claude Code, type "hi" → VENOM response, not generic Claude. (pending live test)

---

## Wave 2 — Intelligence Layer

Spec: `05-design/HOOKS-SPEC.md`

```
[x] platforms/claude-code/template/.claude/scripts/session-start.js
[x] platforms/claude-code/template/.claude/scripts/pre-compact.js
[x] platforms/claude-code/template/.claude/scripts/user-prompt-submit.js
[x] platforms/claude-code/template/.claude/scripts/pre-tool-use.js
[x] platforms/claude-code/template/.claude/scripts/post-tool-use.js
[x] platforms/claude-code/template/.claude/scripts/session-end.js
```

**Gate:** Churchill fires; dangerous cmd blocked; stall detection on 3x repeat. (pending live test)

---

## Wave 3 — Agents

Spec: `05-design/AGENTS-SPEC.md`

```
[x] platforms/claude-code/template/.claude/agents/venom-architect.md
[x] platforms/claude-code/template/.claude/agents/venom-researcher.md
[x] platforms/claude-code/template/.claude/agents/venom-reviewer.md
[x] platforms/claude-code/template/.claude/agents/venom-debugger.md
[x] platforms/claude-code/template/.claude/agents/venom-builder.md
[x] platforms/claude-code/template/.claude/agents/venom-historian.md
[x] platforms/claude-code/template/.claude/agents/venom-predictor.md
[x] platforms/claude-code/template/.claude/agents/venom-communicator.md
[x] platforms/claude-code/template/.claude/agents/venom-learner.md
[N/A] venom-bridge.md — removed per DEC-02 (absorbed into communicator)
```

**Gate:** ADR output from architect; 8-perspective from reviewer. (pending live test)

---

## Wave 4 — Knowledge Files

Spec: `05-design/FILE-STRUCTURE.md`, `05-design/CLAUDE-MD-SPEC.md`

```
[x] platforms/claude-code/template/.claude/knowledge/soul.md
[x] platforms/claude-code/template/.claude/knowledge/pact.md
[x] platforms/claude-code/template/.claude/knowledge/disposition-vs-rules.md
[x] platforms/claude-code/template/.claude/knowledge/cognitive-matrix.md
[x] platforms/claude-code/template/.claude/knowledge/modes.md
[x] platforms/claude-code/template/.claude/knowledge/protocols.md
[x] platforms/claude-code/template/.claude/knowledge/energy-matching.md
[x] platforms/claude-code/template/.claude/knowledge/profile.md
[x] platforms/claude-code/template/.claude/knowledge/simulations.md
```

**Gate:** SIM-01 fires on stuck loop; Feynman fires on "explain this". (pending live test)

---

## Wave 5 — Commands

Spec: `05-design/COMMANDS-SPEC.md`

```
[x] platforms/claude-code/template/.claude/commands/venom.md
[x] platforms/claude-code/template/.claude/commands/venom-init.md
[x] platforms/claude-code/template/.claude/commands/venom-eat.md
[x] platforms/claude-code/template/.claude/commands/venom-spec.md
[x] platforms/claude-code/template/.claude/commands/venom-build.md
[x] platforms/claude-code/template/.claude/commands/venom-review.md
[x] platforms/claude-code/template/.claude/commands/venom-check.md
[x] platforms/claude-code/template/.claude/commands/venom-research.md
[x] platforms/claude-code/template/.claude/commands/remember.md
```

**Gate:** `/venom` hub works; `/venom-spec` phase detection; `/venom-check` reports health. (pending live test)

---

## Wave 6 — Skill

Spec: `05-design/SKILL-SPEC.md`

```
[x] platforms/claude-code/template/.claude/skills/venom-deep/SKILL.md
```

**Gate:** `/venom-deep` loads; surface-aware output. (pending live test)

---

## Wave 7 — Rules

```
[x] platforms/claude-code/template/.claude/rules/venom-standards.md
[x] platforms/claude-code/template/.claude/rules/skill-development.md
```

**Gate:** No `.unshelled/` refs anywhere in template. ✓

---

## Wave 8 — Platform Files

```
[x] platforms/claude-code/template/README.md
[x] platforms/claude-code/README.md
[x] platforms/claude-code/INSTALL.md
[x] platforms/claude-code/CHANGELOG.md
[x] platforms/claude-code/template/.venom/state/workflow-state.example.json
[x] platforms/claude-code/template/.gitignore.template
```

**Gate:** Fresh install following INSTALL.md succeeds in <5 min. (pending live test)

---

## Post-Wave (optional — not blocking)

```
[ ] platforms/claude-code/smoke-hooks.sh
[ ] .github/workflows/claude-code-template.yml
[ ] platforms/claude-code/HEADLESS-PLAYBOOK.md
```
