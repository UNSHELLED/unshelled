---
description: Antigravity-native eat with proof. 1M context consumption, Cortex auto-surfacing, Jetski visual verification, brain artifacts, cross-project memory. The signature workflow.
trigger: "/venom eat [target]" — target = repository, codebase, framework, system, architecture
---

# VENOM: Eat With Proof

> *Read everything. Map everything. Prove everything. Visual proof. Artifact proof. Memory proof.*

---

## 1. Purpose

**What this workflow does:** Deep absorption of a codebase, framework, or system — with proof. Not "I read it" — artifacts that demonstrate understanding. Not "I understand the UI" — screenshots. Not "I learned patterns" — cross-project memory.

**Why it exists:** Antigravity has 1M context, Cortex (500+ file dependency surfacing), Jetski (browser verification), and `brain/{uuid}/` (session artifacts). The casual "eat" reads files. The eat-with-proof consumes, maps, verifies, and captures.

**When to use:** Before major refactors. Before onboarding to a new codebase. Before architectural decisions. When you need to "know" a system, not just "have seen" it.

**What makes it different:** No selective reading. No "I skimmed the important parts." Full consumption. Cortex surfaces dependencies — use them. UI requires visual proof. Output is files, not just text.

---

## 2. Trigger

**Command:** `/venom eat [target]`

**Target can be:**
- Repository (current workspace)
- Codebase (e.g. `eat src/`)
- Framework (e.g. `eat the auth flow`)
- System (e.g. `eat the billing module`)
- Architecture (e.g. `eat the data layer`)

**Auto-invoke:** When owner says "eat this" and target is a codebase or system — use this workflow, not casual read.

**Prerequisites:**
- Target is readable (files exist, not external API only)
- For UI verification: `npm run dev` or equivalent to start the app
- `brain/{uuid}/` exists (platform creates session folder)

---

## 3. Protocol — The 6-Step Eat

### Step 1: Consume (1M Context)

**Action:** Read entire codebase. No selective reading.

**Concrete:**
1. List all files in workspace (or target path)
2. Read root config: package.json, pyproject.toml, go.mod, Cargo.toml, pom.xml
3. Read all README files
4. Read entry points: main.*, index.*, app.*, server.*, __init__.py, Program.cs
5. Read architecture docs: /docs, /architecture, /design
6. Read CI/CD: .github/workflows/*.yml, Dockerfile, docker-compose.*
7. Read core source: src/, lib/, pkg/, app/, components/ — full depth
8. Read tests: structure and patterns
9. Read recent git history (last 10 commits) if available

**Leverage:** Cortex auto-surfaces 500+ file dependencies. Use them. Don't ignore surfaced dependencies.

**Track:** Note file count, LOC estimate, languages. You'll need this for codebase-map.md.

**Output:** Mental model of what exists. No gaps. If you didn't read it, you don't say you understood it.

**For monorepos:** Read each package's config. Map package boundaries. Note shared vs isolated code.

**For empty/new projects:** Note this. Do not pretend there is context. Output: "Empty. No package.json, no config. Clean slate."

---

### Step 2: Map Architecture

**Action:** Build structure from what was consumed.

**Concrete:**
1. Identify entry points — where does execution start?
2. Identify core abstractions — models, services, components
3. Map data flow — where does data move? How?
4. Map external integrations — APIs, DBs, auth, third-party
5. Note patterns — naming, structure, conventions
6. Note anti-patterns — tech debt, inconsistencies
7. Note critical paths — hot paths, bottlenecks

**Leverage:** Cortex dependency graph. Follow relationships.

**Output:** Architecture map ready for codebase-map.md.

---

### Step 3: Create Knowledge Graph

**Action:** Write `brain/{uuid}/codebase-map.md`.

**Structure:**
```markdown
# Codebase Map — [target]

## Summary
- Files: [count]
- LOC: [estimate]
- Languages: [list]
- Frameworks: [list]
- Dependencies: [key deps]

## Component Hierarchy
[Tree or list of components]

## Relationships
[Key flows, dependencies]

## Critical Paths
[Hot paths, entry → exit]

## Entry Points
[Where to start]

## Domain Tags
frontend | backend | data | infra | auth | ...
```

**Include:** File count, LOC, languages, frameworks. Tag by domain.

**Output:** `brain/{uuid}/codebase-map.md` exists.

---

### Step 4: Visual Verification (if UI)

**Action:** If target has visual components → trigger Jetski. No "understood UI" without proof.

**Concrete:**
1. Start local server if inactive (`npm run dev` or equivalent)
2. Use `browser_subagent` to navigate to rendered URI (e.g. localhost:3000)
3. Capture DOM elements, screenshots
4. Save to `brain/{uuid}/.tempmediaStorage/dom_{timestamp}.txt`
5. Verify: layout, interactions, states, edge cases (mobile vs desktop)
6. Reference screenshots in walkthrough.md

**Hard rule:** No claim of understanding UI without visual proof. If UI exists and you didn't verify — say so.

**Output:** Screenshots in .tempmediaStorage/. Reference in walkthrough.

---

### Step 5: Prove Understanding via Artifacts

**Action:** Generate comprehensive artifacts. Not just text response.

**Concrete:**

**walkthrough.md** (required):
- Architecture summary
- Key design decisions (inferred)
- How to navigate the codebase
- Common tasks (where to start for X)
- Gotchas and edge cases
- Screenshot references (if UI verified)

**decisions.md** (if patterns emerge):
- Key choices inferred
- Reasoning
- Alternatives considered

**risks.md** (if tech debt spotted):
- What could break
- Severity
- Mitigation

**Output:** `brain/{uuid}/walkthrough.md` exists. `decisions.md` and `risks.md` if applicable.

**Quality gate:** walkthrough.md must enable a future session (or new dev) to navigate the codebase without re-reading everything. "Where do I add X?" "How does Y work?" — answerable from the walkthrough.

---

### Step 6: Cross-Project Memory

**Action:** Extract reusable patterns. Write to `code_tracker/active/no_repo/`.

**Concrete:**
1. Identify patterns reusable across projects:
   - Architecture style
   - Language idioms
   - Framework patterns
   - Debugging techniques
2. Check: does relevant file exist? Update rather than create
3. Write/update `code_tracker/active/no_repo/[topic].md`
4. Update `MEMORY.md` if wisdom generalizes
5. Tag: architecture, debugging, optimization, auth, etc.
6. Link to related patterns

**Output:** At least one no_repo/ file updated or created. MEMORY.md appended if applicable.

---

## 4. Output Format

**Structured report (required):**

```markdown
# Eat Report — [target]

## Summary
[One paragraph: what this is, stack, purpose]

## Architecture
[Component hierarchy, data flow, integrations]

## Components
[Key modules, what they do]

## Patterns
[Conventions, idioms, structure]

## Risks
[Tech debt, edge cases, gotchas]

## Next Steps
[What to change first. Where to add. What to fix.]

## Proof
- codebase-map.md: [path]
- walkthrough.md: [path]
- Screenshots: [if UI] .tempmediaStorage/dom_*.txt
- Cross-project: [topic].md in no_repo/
```

**Proof requirements:**
- `brain/{uuid}/codebase-map.md` — must exist
- `brain/{uuid}/walkthrough.md` — must exist
- Screenshots in .tempmediaStorage/ — if UI
- `code_tracker/active/no_repo/[topic].md` — if patterns extracted

---

## 5. Integration Points

**Uses:**
- **jetski-visual-audit** — Step 4. Visual verification. Screenshot proof.
- **session-artifacts** — Step 5. decisions.md, risks.md, walkthrough format.
- **cross-project-memory** — Step 6. Extraction, tagging, no_repo/.
- **nine-minds-synthesis** — For large codebases. Spawn Architect + Researcher + Builder for parallel mapping.

**Writes to:**
- `brain/{uuid}/` — codebase-map.md, walkthrough.md, decisions.md, risks.md, .tempmediaStorage/
- `code_tracker/active/no_repo/` — [topic].md, MEMORY.md

**Leverages:**
- 1M context — read everything
- Cortex — 500+ file dependency surfacing
- Agent Manager — for large codebases (parallel subagents)
- Jetski — browser_subagent for UI

---

## 6. Examples

### Example 1: React App (UI verification required)

**Target:** `eat src/` (React + Vite app)

**Output:**
- codebase-map.md: 47 components, React Router, TanStack Query
- walkthrough.md: Auth flow, dashboard layout, API layer, screenshot refs
- .tempmediaStorage/dom_20260309_140000.txt (login screenshots)
- no_repo/react-auth-patterns.md (auth flow pattern extracted)

---

### Example 2: Python Backend (architecture focus)

**Target:** `eat the API server`

**Output:**
- codebase-map.md: Flask routes, SQLAlchemy models, service layer
- walkthrough.md: Request flow, middleware, DB schema, error handling
- decisions.md: Why async for X, why sync for Y
- risks.md: N+1 in user list endpoint, no rate limiting
- no_repo/flask-service-patterns.md (service layer pattern)

---

### Example 3: Framework/Library (pattern extraction focus)

**Target:** `eat the state management`

**Output:**
- codebase-map.md: Store structure, actions, selectors
- walkthrough.md: How to add new slice, persistence, middleware
- no_repo/zustand-patterns.md (extracted patterns)
- MEMORY.md: Append "Zustand: slice per domain, actions in store, no thunks for simple async"

---

## State Log (Optional)

If `state-log.csv` exists: log session start with state `acetylcholine` (deep learning). Trigger: `eat_[target]`. Integrates with state-aware skill.

---

*Eat. Map. Prove. Visual proof. Artifact proof. Memory proof.*
