# Drafts corpus — full digest (eat pass)

**Purpose:** Single map of everything under `drafts/` + how it relates to verified OpenCode + VENOM spine. **Not** a replacement for `CAPABILITIES.md` / `UPSTREAM-README-DIGEST.md`.

**EAT:** 2026-03-27d

---

## 1. Tier — what to trust first

| Tier | Source |
|------|--------|
| **A** | `opencode --help`, `ANATOMY.md`, `CAPABILITIES.md` |
| **B** | `UPSTREAM-README-DIGEST.md` (README `dev`) |
| **C** | `VENOM-OPENCODE-IMPLEMENTATION-PLAN.md` (architecture intent, file manifest) |
| **D** | Other `drafts/*.md` (behavior spec; may contain typos / outdated CLI forms) |

---

## 2. Command surface (draft triggers)

| Trigger | Role | In draft |
|---------|------|----------|
| `venom for opencode` | Main activation | `venom-opencode.md`, QUICKREF |
| `vd opencode` | Review / quality / security | `vd-opencode.md` — SDK find/read |
| `vr opencode` | Research / structure | `vr-opencode.md` — scanner |
| `v-learn opencode` | Learn / document | `v-learn-opencode.md` — **note:** text says "Arm 4 Parser" and "Arm 4 Pattern" (duplicate label — should be Arm 1 vs Arm 4) |
| `help` | Reference | `help.md` |
| `masterpiece opencode` … | Depth modes | scattered |

**Invocation pattern in drafts:** `opencode run "…"` — valid for **headless**; TUI users type naturally without `run`.

---

## 3. Skill bundle (`skills/VENOM_OPENCODE/`)

| File | Content |
|------|---------|
| `SKILL.md` | Nine minds + systems 17–23 list, activation `venom for opencode` |
| `QUICKREF.md` | Commands table; env vars; **defect:** row `/opencode` — not a real shell subcommand (use `opencode` or `opencode run`) |
| `README.md` | Install copy path — **defect:** `dev-repos/clapude-code-venom/v2/` typo + stale path; should target `platforms/opencode/` or published package |

---

## 4. Implementation plan — manifest reality check

**Part 9** claims **48** unique files; table also shows **69** rows and contradictory **identity/** “5 files” while listing **9** files (brain0 + arm1–8). **Cognitive/** “16 files” vs list ~24 lines — includes base + OpenCode files.

**Resolution for builders:** treat manifest as **wishlist**; count unique paths; **identity = 9** (not 5). **systems/** duplicates **cognitive/** in plan (“symlinks”) — in Git you usually **don’t** duplicate; use one folder + docs.

**Phases 1–6** (timelines 30–60 min) are estimates — fine for planning.

**Target path** `wsl-venom\...` — **superseded** by `venom-mine` + `MASTER-PLAN.md` → `platforms/opencode/`.

---

## 5. Upstream alignment gaps (fix when promoting)

| Draft claim | Verified truth |
|-------------|----------------|
| `<TAB>` = “Plan mode” / toggle plan-build | **Tab = `plan` ↔ `build` agents** (README). Plan agent = read-only + bash permission. |
| `opencode /init`, `opencode /share` as shell | **TUI slash** commands; not top-level CLI (see `CAPABILITIES.md` §5). |
| `help.md` same as above | Add “inside TUI” label. |

---

## 6. Cognitive overlay files (systems 17–23)

Present as separate markdowns:

- `opencode-context-awareness.md` — mode matrix  
- `opencode-workspace-scanner.md` — package.json / tree (pseudocode quality varies)  
- `opencode-tooling-awareness.md` — npx, agents, MCP, SDK  
- `opencode-project-workflows.md` — init, share, export  
- `opencode-verification.md` — tests / CI  
- `opencode-optimization.md` — build tooling bias  
- `opencode-integration.md` — SDK glue  

**Identity/** `brain0` + `arm1`–`arm8` — role docs; **arm7** is CRITICAL for verbosity.

---

## 7. Missing from `drafts/` vs plan Part 4

- **`modes-opencode.md`** — listed in implementation plan **not found** in glob (create or drop from manifest).  
- Full **`knowledge/`** set exists but `opencoode-ide-patterns.md` filename typo preserved for search.

---

## 8. Mental model — “new body”

**VENOM spine** = Pact + nine minds + memory + voice (from origin repo).  
**OpenCode body** = CLI + TUI agents + MCP + ACP + SQLite session store + optional SDK.  
**This corpus** = wiring diagram + training labels — **always reconcile Tier A before shipping text to users.**

---

*Next eat: clone `Unshelled/venom-opencode` or `anomalyco/opencode` locally and map `packages/` to this digest.*
