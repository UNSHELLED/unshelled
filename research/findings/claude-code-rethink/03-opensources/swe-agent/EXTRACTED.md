# Extracted: SWE-agent (SWE-agent/SWE-agent)

**Source path:** `draft/research-sdd-vendors/swe-agent/`  
**Eaten:** 2026-03-30 (`README.md`, `config/default.yaml`)

---

## One-line thesis

**LM + tool bundles in YAML** — `config/default.yaml` defines **system/instance templates** (PR in repo, problem statement), **OBSERVATION** continuation after bash/edit, **function_calling** parse, **tools**: registry, **edit_anthropic**, **review_on_submit_m**, bash; **history_processors** (e.g. cache last N messages).

---

## Loop (observe → act)

Not a separate “hypothesis object” in YAML — **implicit loop**:

1. Model receives **instance_template** with `<pr_description>` and **uploaded_files** path.
2. Instructions: find code → **reproduce** with bash → **edit** → re-run → edge cases.
3. **`next_step_template`**: inject **`OBSERVATION: {{observation}}`** from tool output.
4. **`submit`** / **review_on_submit** — second pass with **diff** in prompt to verify before finish.

**Stall detection:** Not in `default.yaml` excerpt — product direction is **maximal LM agency**; **mini-SWE-agent** (README) is now **recommended** for new work (simpler, comparable bench results).

---

## Tools (design principles)

- **Granular:** bash, filemap/registry navigation, structured edit, submit with review.
- **Review on submit:** Forces **re-read** of instructions + diff checklist before final submit — **anti-premature-submit** gate.

**VENOM debugger:** Align **venom-debugger** with **reproduce → fix → re-run → submit review**; add **explicit** “same observation twice” logging in **PostToolUse** if stall detection needed (SWE-agent defers to model + env).

---

## Single YAML

- **`agent.templates`** — system + instance + step.
- **`agent.tools.bundles`** — compose tool packs.
- **`benchmarks/`** — swe-bench variants.

**Task spec:** “Issue URL / problem statement + repo path” — minimal, not a PRD.

---

## Performance narrative (README)

- **SOTA** on SWE-bench — combination of **tooling** (bash + edit + filemap), **prompt** (reproduce first), **submit review**, **configurable** stacks — not one magic prompt.

---

## Key question: better than venom-debugger loop?

**Borrow:** **Review-on-submit** step with **diff in context**; **reproduction script** before edit. **Defer:** Full SWE-agent stack is **Python research** codebase — VENOM adopts **behaviors**, not runtime.

**Audience:** **headless agents** + CI (batch mode in docs); **interactive** debugging optional.
