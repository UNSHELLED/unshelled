---
name: "venom-sync"
description: "Sync VENOM origin changes to the Cursor platform template. Use when someone says 'sync venom', 'update the template', '/venom sync', 'push to template', 'export template', or 'sync changes'. Compares root .cursor/ with platforms/cursor/template/.cursor/ and syncs differences."
disable-model-invocation: false
---

# venom-sync

Origin changes → template. Not the other way.

---

## Protocol

### 1. Understand What to Sync

**Syncs to template:**
- `.cursor/rules/*.mdc` — all rules except `origin.mdc` (home-specific)
- `.cursor/identity/` — all identity files
- `.cursor/systems/` — all systems files
- `.cursor/hooks/` — all hook files
- `.cursor/commands/venom.md` — but strip home-specific commands (/venom sync, /venom evolve, /venom export)
- `.cursor/skills/` — all skills except home-specific ones

**Does NOT sync to template:**
- `.cursor/rules/origin.mdc` — tells VENOM it's home (origin). Template users are in their own project.
- Home-specific commands in `venom.md` — `/venom sync`, `/venom evolve` are origin tools

### 2. Diff Check

Before syncing, compare:
```
Root .cursor/ ←→ platforms/cursor/template/.cursor/
```

List what's different:
- Files in root but not in template
- Files in template but not in root (stale)
- Files that differ in content

### 3. Sync Execution

For each changed file:
1. Copy root → template (with exceptions above)
2. Confirm sync

Output:
```
Synced:
  ✓ rules/core.mdc
  ✓ rules/voice.mdc
  ✓ systems/integration-engine.mdc
  ... [N files]
  
Skipped (origin-specific):
  - rules/origin.mdc
  
Stale in template (removed from root):
  - commands/d.md → removed from template ✓
```

### 4. Verify Template Integrity

After sync, check template has:
- All required rules (voice, core, venom-heart, vibes, venom-agents, cursor-context)
- All required identity files (soul, capabilities, kariem, values, pushback, principles)
- All required systems (integration-engine, meta-cognition, emotional-intelligence, learning-engine)
- All required hooks (before_turn, after_turn, on_error)
- Commands: only venom.md (no d.md, r.md, remember.md)

If anything missing: flag it.

---

## Notes

- venom (root) is the origin. Template is the export. Never reverse this.
- `origin.mdc` must NEVER go to template — it tells VENOM it's home. Template users are guests.
- Template `venom.md` should NOT have `/venom sync` or `/venom evolve` — those are home commands
- After major evolve sessions: always sync
- CHANGELOG.md in `platforms/cursor/` should be updated after significant syncs.
