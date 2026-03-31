---
name: "cross-project-memory"
description: "Leverage global code_tracker/active/no_repo/. Extract reusable patterns. Update MEMORY.md. Tag and link."
trigger: "After sessions solving general problems, architectural decisions, new techniques, cross-domain insights."
---

# VENOM: Cross-Project Memory Skill

> *What we learned here applies elsewhere. Extract it. Write it. Link it.*

---

## Purpose

Capture learnings that apply across projects. Write to `code_tracker/active/no_repo/` so future sessions (any project) can pull this wisdom. Avoid re-learning. Build a global knowledge base.

---

## What to Extract

| Type | Example | Where |
|------|---------|-------|
| **Reusable patterns** | "Auth flow: always validate server-side before client trust" | `[topic].md` |
| **Architecture insight** | "Monolith vs microservices: for <10 devs, monolith wins" | `[topic].md` |
| **Debugging** | "React hydration mismatch: check SSR/client render parity" | `[topic].md` |
| **Anti-patterns** | "What failed: X. Why: Y. Don't repeat." | `[topic].md` + MEMORY.md |
| **Optimization** | "N+1 query fix: use batch load or join" | `[topic].md` |
| **Domain tags** | architecture, debugging, auth, performance, security | In file frontmatter or header |

---

## Where to Write

### code_tracker/active/no_repo/[topic].md

**Naming:** Use existing convention if present: `{md5hash}_{original_filename}.{ext}`. For new files: `{topic}.md` (e.g. `auth-patterns.md`, `react-hydration-mismatch.md`).

**Check first:** Does a relevant file already exist? Update rather than create. If `MEMORY.md` or a topic file has related content, append to it.

**Format:**
```markdown
# [Topic]

## [Date] — [Source session/project]

[Insight]

**Pattern:** [Reusable rule]
**Anti-pattern:** [What to avoid]
**When to use:** [Context]
```

---

### MEMORY.md

**Purpose:** Distilled wisdom. Cross-project. Append, don't overwrite.

**Format:** Add dated entry. One paragraph per insight. Link to topic file if detailed.

```markdown
### [Date] — [Topic]

[Distilled wisdom. One paragraph. Specific.]

See: [topic].md for full pattern.
```

---

## When to Trigger

- **Architectural decision** with general applicability
- **New technique** learned (library, pattern, approach)
- **Bug fix** that has a reusable lesson
- **Anti-pattern** discovered (what failed, why)
- **Cross-domain insight** (e.g. frontend lesson that applies to backend)

**Don't trigger:** Project-specific implementation detail, one-off fix, obvious best practice.

---

## Protocol

1. **Extract** — What from this session applies across projects?
2. **Tag** — Domain: architecture, debugging, optimization, auth, security, performance, etc.
3. **Check** — Does `code_tracker/active/no_repo/` have relevant file? List files. Read if exists.
4. **Write/Update** — Create `[topic].md` or append to existing. Update MEMORY.md with distilled wisdom.
5. **Link** — Reference related patterns. "See: X.md for Y."

---

## File Naming Convention

**Confirmed:** `code_tracker/active/no_repo/` uses `{md5hash}_{original_filename}.{ext}` for some files.

**For new content:** Prefer readable names: `auth-patterns.md`, `react-hydration-fix.md`. If platform requires hash prefix, follow platform conventions.

---

## Integration Points

- **venom.md workflow** — "Cross-Project Memory Capture" step after session
- **Learning Engine** (systems.md §2) — Corrections → corrections.yaml. Cross-project → no_repo/.
- **Historian** — Feeds memory. This skill writes it.

---

## What Already Exists (no_repo/)

**Typical contents:** MEMORY.md (450 lines), OCTOPUS plan, CURSOR-LEARNINGS, GEMINI.md, SOUL.md, state-log.csv, state-thresholds.json, topic files (arm3-historian.md, arm4-cognitive.md, etc.).

**Respect:** Don't overwrite. Append. Don't duplicate. Merge into existing when relevant.

---

## Example: Topic File

```markdown
# Auth Patterns

## 2026-03-09 — JWT + Refresh Flow

**Pattern:** Access token short-lived (15min). Refresh token long-lived (7d). HttpOnly cookie for refresh. Access in memory or short-lived cookie.

**Anti-pattern:** JWT in localStorage only — XSS steals. No refresh — UX degrades.

**When to use:** Stateless API. Mobile + web. No server-side session store.

**When not:** Single-page app with sensitive data. Prefer session + CSRF for banking.
```

---

## Example: MEMORY.md Append

```markdown
### 2026-03-09 — Auth

JWT + refresh: access 15min, refresh 7d. HttpOnly for refresh. Never localStorage for refresh. See: auth-patterns.md.
```

---

## Domain Tags (Standard Set)

Use when tagging extracted content:
- `architecture` — System design, patterns, trade-offs
- `debugging` — Bug fixes, root cause, diagnostics
- `optimization` — Performance, N+1, caching
- `auth` — Authentication, authorization, tokens
- `security` — Vulnerabilities, injection, exposure
- `frontend` — React, Vue, CSS, hydration
- `backend` — API, database, services
- `devops` — Deploy, CI/CD, infra

---

## Extraction Checklist

Before writing:
- [ ] Is this reusable across projects? (Not project-specific)
- [ ] Is this non-obvious? (Worth capturing)
- [ ] Does relevant file exist? (Update vs create)
- [ ] Tagged correctly? (architecture, debugging, etc.)

---

*Source: COMPLETE-CASE.md §1 code_tracker layout. CHECKLIST Phase 3.2. File naming: {md5hash}_{filename} when applicable.*
