# Spec — Premium UX

> "Make the UX feel more premium and faster without breaking anything."

## Problem

Users perceive slowness when:

1. No visual feedback during tool execution
2. Unclear session state (what's running, what's done)
3. Context compaction feels abrupt

## Solution (Constrained)

1. **Progressive status** — Show active tool name + count during execution
2. **State clarity** — Session metrics visible in TUI header
3. **Smooth compaction** — Pre-compact notification + summary

## Acceptance Criteria (Measurable)


| #   | Check                                                      | How to Verify                                                     |
| --- | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| 1   | Tool execution shows live progress indicator               | Run `/venom-init`, observe "Running: [tool-name] (N/M)" in output |
| 2   | Session metrics visible within 3 seconds of session start  | Start OpenCode, check header shows "Calls: X | Cost: $Y"          |
| 3   | Compaction shows warning 5s before + 50-word summary after | Trigger compaction, verify warning + summary appear               |


## Out of Scope

- ScentVision web app
- New dependencies
- Theme/styling changes
- Animation library integration

## Risk Assessment


| Risk                        | Likelihood | Impact | Mitigation                               |
| --------------------------- | ---------- | ------ | ---------------------------------------- |
| Progress indicator flickers | Medium     | Low    | Debounce at 100ms                        |
| Metrics inaccurate          | Low        | Medium | Source from plugin state, not estimation |
| Compaction timing wrong     | Low        | High   | Use OpenCode hook timing, don't guess    |


## Files Affected

- `.opencode/plugins/venom-core.ts` — add progress emitter
- `.opencode/commands/*.md` — update command output format
- `venom-opencode-site/` — potentially show metrics (if TUI allows)

