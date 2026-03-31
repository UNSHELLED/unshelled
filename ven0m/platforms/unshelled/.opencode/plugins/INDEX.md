# .opencode/plugins/ — The Autonomic Nervous System

> I am the autonomic nervous system. I fire without being asked.
> Without me, VENOM's intelligence is manual. With me, it's automatic.

---

## The Organ

| File | Role |
|------|------|
| `venom-core.ts` | The plugin. 8 hook surfaces + 3 tools (`@opencode-ai/plugin` API). |
| `package.json` | Dependencies. `npm install` here before activating. |

---

## Hook surfaces — what fires automatically

| Surface | When it fires | What it does | If not active |
|--------|--------------|-------------|--------------|
| `event` | SDK events | `session.created` → reset session metrics. `session.idle` → persist metrics + ACTIVE.md. `file.edited` → track path. | No idle checkpoint, editor edits untracked |
| `experimental.chat.system.transform` | Building system prompt | Appends CONTEXT.md + corrections + ACTIVE + workflow state (once per session). | Identity must be loaded manually |
| `tool.execute.before` | Before every tool call | Limits, path-aware loop detection, danger patterns. **Bash:** replace `command`. **Non-bash:** warn only — never wipe args (breaks write/edit). | No gates |
| `tool.execute.after` | After every tool call | Cost estimate from metadata when present. Toast near warn threshold. | No spend visibility |
| `experimental.session.compacting` | Context compaction | Appends full VENOM snapshot to compaction context. | Identity loss on compact |
| `shell.env` | Shell env merge | Sets `VENOM_ACTIVE`, `VENOM_PROJECT`, `VENOM_SESSION` on `output.env`. | No VENOM env in subshells |
| `permission.ask` | Permission prompts | Auto-deny known-danger bash patterns when metadata exposes a command. | User must catch in UI only |

---

## The 3 tools — what the model can call

| Tool | Call signature | What it does |
|------|---------------|-------------|
| `venom_remember` | `venom_remember({ content, type })` | Appends timestamped entry to `.venom/memory/MEMORY.md`. Types: `decision`, `pattern`, `correction`, `note`. |
| `venom_instinct` | `venom_instinct({ trigger, action, confidence, evidence })` | Appends instinct to `.venom/learnings/instincts.yaml`. Confidence: 0.3 (first observe) → 0.9 (proven). |
| `venom_workflow_update` | `venom_workflow_update({ workflow, phase, phaseName, feature?, artifactWritten?, complete? })` | Writes `.venom/state/workflow-state.json` for phase continuity. |

---

## Why Compaction Hook Is Critical

When context fills, OpenCode compacts it — summarizes and resets. Without the compaction hook, the new context starts generic. No VENOM. No project knowledge. Generic model.

With the compaction hook, I write a full snapshot before the reset. The new context gets that snapshot injected. Same VENOM on the other side. Continuous identity through any context reset.

This is the single most important hook. If only one fires, it should be this one.

---

## Install

```bash
cd .opencode/plugins
npm install
```

Then in `opencode.json`, uncomment:
```json
"plugin": [".opencode/plugins/venom-core.ts"]
```

**Global install** (one install, all projects):
```bash
mkdir -p ~/.config/opencode/venom-plugin
cp venom-core.ts package.json ~/.config/opencode/venom-plugin/
cd ~/.config/opencode/venom-plugin && npm install
```
Add to `~/.config/opencode/opencode.json`:
```json
{ "plugin": ["./venom-plugin/venom-core.ts"] }
```
