# Skill Development

Standards for creating new VENOM skills and extending existing ones.

---

## When to Create a Skill

A skill earns its place when:
- A workflow is used 3+ times in the same project
- The full procedure is too long for a command (> ~100 lines of procedure)
- The workflow is project-specific (not universal enough for a command)
- The procedure benefits from lazy loading (expensive to keep in context always)

A skill does NOT earn its place when:
- A command already covers the use case
- It duplicates an agent's behavior
- It's project-specific business logic (that belongs in CONTEXT.md)

---

## Skill Structure

```
.claude/skills/[name]/SKILL.md
```

Single file. No subdirectories unless explicitly referencing sibling files via `@`.

**Frontmatter (required):**
```yaml
---
name: [name — matches directory]
description: "[≤250 chars — what this skill does and when to invoke it. No VENOM jargon for universal skills.]"
---
```

**Body (lazy-loaded on invocation):**
- Identity: what this skill is for
- Procedure: numbered steps, exact
- Output format: what the skill produces
- Verification: how to know it worked
- Edge cases: what to do when things go wrong

---

## Size Constraint

**≤ 500 lines.** If the skill body exceeds 500 lines:
1. Extract supporting reference material to sibling files
2. Reference them via `@.claude/skills/[name]/[sibling].md`
3. Keep the SKILL.md as the procedure; siblings as reference

---

## Quality Bar

Every skill must be:
- **Invocable headlessly**: the procedure works without user interaction if passed explicit arguments
- **Idempotent**: running it twice doesn't corrupt state
- **Verifiable**: it tells you when it's done and what it produced
- **Resumable**: if interrupted, it can pick up from the last completed phase

---

## Description Writing

The description is the only thing that loads during normal sessions. It must:
- Tell a developer who has never seen VENOM when to invoke this skill
- Use plain English — no "Arm X" or internal jargon
- Fit in ≤ 250 characters
- Answer: "what does this do and when do I use it?"

---

## Testing a New Skill

After writing:
1. Invoke it — does it load and produce the right procedure?
2. Test it headlessly — pass `$ARGUMENTS` from command line, does it complete?
3. Test interruption — stop mid-way, re-invoke, does it resume correctly?
4. Check size: `wc -l .claude/skills/[name]/SKILL.md` — must be < 500

---

## Existing Skills

- `venom-deep` — full VENOM intelligence surface. Never modify the 10 non-negotiables.
