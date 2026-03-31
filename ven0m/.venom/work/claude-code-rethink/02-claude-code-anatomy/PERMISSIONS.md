# Claude Code Anatomy: Permissions

> **Verified against:** [Configure permissions](https://docs.anthropic.com/en/docs/claude-code/permissions) + [Settings](https://docs.anthropic.com/en/docs/claude-code/settings) (scope table) (2026-03-30).

**Status:** 🟢 Research complete

---

## Rule evaluation order

1. **Deny** → **Ask** → **Allow** — **first match wins**; **deny always wins** over allow.

Managed policy can enforce **allowManagedPermissionRulesOnly** (only managed allow/ask/deny rules).

---

## Permission modes (`defaultMode` in settings)

| Mode | Behavior |
|------|----------|
| `default` | Prompt on first use of sensitive tools |
| `acceptEdits` | Auto-accept file edits for session |
| `plan` | Read-only planning |
| `auto` | Classifier auto-approves (research preview) |
| `dontAsk` | Auto-deny unless pre-approved in rules |
| `bypassPermissions` | Skip prompts except protected dirs (`.git`, `.claude`, `.vscode`, `.idea` — with exceptions for `.claude/commands`, `agents`, `skills`) |

**Hooks:** PreToolUse can deny before prompts; **exit 2** blocks before rule evaluation. Deny rules still apply after hook `"allow"` ([Hooks reference](https://docs.anthropic.com/en/docs/claude-code/hooks)).

---

## Rule syntax

- **Tool-wide:** `Read`, `Bash`, `WebFetch`, `Agent`, `Skill`, …
- **Specified:** `Tool(specifier)` — examples:
  - `Bash(npm run *)`, `Bash(git commit *)`, `Read(/src/**)`
  - `WebFetch(domain:example.com)`
  - `Agent(Explore)`, `Agent(my-custom-agent)`
  - `Skill(commit)`, `Skill(review-pr *)` — [skills restriction](https://docs.anthropic.com/en/skills#restrict-claudes-skill-access)
- **Bash wildcards:** `*` with **word boundary** when space before `*` (e.g. `Bash(ls *)` not `lsof`). Legacy `:*` = ` *` (deprecated).
- **Read/Edit:** Gitignore-style patterns; `/path` = project-relative; `//path` = absolute; `~/` = home.

**Tool list** for exact strings: [Tools reference](https://docs.anthropic.com/en/docs/claude-code/tools-reference) — use **`Agent`**, not deprecated `Task`, in new rules.

---

## Settings precedence (permissions)

1. Managed (cannot override)  
2. CLI args (session)  
3. `.claude/settings.local.json`  
4. `.claude/settings.json`  
5. `~/.claude/settings.json`  

**If denied at any layer, no lower layer can allow** (doc: managed deny cannot be overridden by `--allowedTools`).

**Project vs user:** Stricter project **deny** overrides user **allow**.

---

## `settings.json` shape (permissions slice)

```json
{
  "permissions": {
    "allow": ["Bash(npm run *)", "Read"],
    "deny": ["Agent(Explore)", "Bash(git push *)"],
    "ask": []
  },
  "defaultMode": "default"
}
```

Full settings reference: [Settings](https://docs.anthropic.com/en/settings) — includes `env`, `hooks`, `sandbox`, `autoMode`, `autoMemoryEnabled`, etc.

**`.claude/settings.local.json`:** Gitignored when created by tool; **overrides** shared project settings for local machine.

---

## Agent frontmatter vs `settings.json`

- **Subagent `tools` / `disallowedTools`:** Restrict tools **inside** that agent ([`AGENTS.md`](./AGENTS.md)).
- **Session permissions:** Global allow/deny in settings + mode.
- **Interaction:** Both layers apply; hooks add a third check.

---

## VENOM template guidance

1. **Ship** a conservative `permissions.allow` in **template** only if you document it; many teams start **default** mode + prompts.
2. **CI / headless:** Use **`claude -p --allowedTools "..."`** or `--bare` + explicit flags ([`SURFACES.md`](./SURFACES.md)).
3. **Bash for hooks:** Hook scripts run as configured commands — ensure **Bash** patterns or **bypass** don’t block hook helpers if needed.
4. **Deny Explore:** `"deny": ["Agent(Explore)"]` when you want to force custom researchers only.

---

## References

- [Configure permissions](https://docs.anthropic.com/en/docs/claude-code/permissions)  
- [Settings](https://docs.anthropic.com/en/settings)  
- [Sandboxing](https://docs.anthropic.com/en/sandboxing) — OS-level complement to permissions  

---

## Checklist

- [x] deny → ask → allow  
- [x] Bash / Read / Agent / Skill patterns  
- [x] Precedence + managed  
- [x] Hooks vs permissions  
