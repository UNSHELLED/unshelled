# Extracted: fabric (danielmiessler/fabric)

**Source path:** `draft/research-sdd-vendors/fabric/`  
**Eaten:** 2026-03-30 (`README.md`, `data/patterns/review_code/system.md`, `internal/plugins/template/README.md`)

---

## One-line thesis

**Prompts as portable units** — hundreds of tasks under `data/patterns/<pattern_id>/`, typically **`system.md`** (role + steps + output contract), invoked via **`fabric -p <pattern>`** and a **Go CLI** with **template/plugins** (`{{var}}`, nested resolution).

---

## Pattern format (vs SKILL.md)

| Fabric | Claude SKILL.md |
|--------|-----------------|
| Folder per pattern; **`system.md`** body is the prompt | `SKILL.md` + YAML **frontmatter** (`name`, `description`, optional `allowed-tools`) |
| Optional **`README.md`** per pattern for human docs | Description in frontmatter for discovery |
| **No** universal YAML header in `review_code` — narrative **ROLE / TASK / STEPS / OUTPUT FORMAT** | Frontmatter drives slash registration |
| **Template engine** — `{{input}}`, `-v=key:val`, plugins `{{plugin:...}}` | `!` bash injection in skills (Claude Code) |

**Reusable pattern:** Explicit **OUTPUT FORMAT** (e.g. review: Overall Assessment → Prioritized Recommendations → Detailed Feedback with code fences). **Brittle pattern:** Over-long `system.md` without scoping inputs.

---

## Example: `review_code`

- **ROLE AND GOAL** — Principal engineer, constructive review.
- **STEPS** — Understand → silent rubric (correctness, security, performance, readability, practices, errors) → **structured** markdown output.
- **OUTPUT FORMAT** — Fixed headings and issue template.

**VENOM borrow:** **Reviewer** agent / `/venom-check` can mirror **prioritized numbered list + category tags** without adopting Fabric CLI.

---

## “Top” patterns for VENOM (illustrative)

Repo has **many** categories under `data/patterns/` (summarize, write_pull-request, review_code, create_golden_rules, …). For **code + architecture**, prioritize: **`review_code`**, **`analyze_claims`**, **`create_pattern`** (meta), **`improve_writing`** (communication), **`summarize`**. Full catalog changes often — **principle**: pick by **task id** when integrating.

---

## What fabric does better than “skills only”

1. **CLI + REST** — same pattern runs outside any IDE.
2. **Template/plugins** — composable `{{}}` without full reprogramming the prompt.
3. **Community scale** — many eyes on individual patterns.

**What VENOM already matches:** **Pattern-as-file** in `.claude/skills/` — gap is **standardized OUTPUT FORMAT blocks** in skill bodies for **parseable** headless use.

**Audience:** **all three** when output schema is strict; **fabric CLI** itself is **any dev** terminal users.
