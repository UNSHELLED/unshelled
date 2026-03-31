# Session export digest — `session-ses_2cf8.md` → OpenCode

**Purpose:** Use the old session as **signal**, not as **ground truth** for paths or CLI. It mixes verified fetches with model-invented detail.

---

## Keep (re-verify once)

- **Product:** OpenCode = open-source AI coding agent; terminal / IDE / desktop; site `https://opencode.ai`.
- **Upstream:** GitHub `https://github.com/anomalyco/opencode` (session quoted star counts — treat as **marketing**; refresh on GitHub if needed).
- **Install:** One-liner `curl -fsSL https://opencode.ai/install | bash` (Unix); Windows often npm/global — **your machine uses npm** (`opencode.ps1` → `opencode-ai`).
- **Privacy stance (marketing):** Claims about not storing code — **re-read** current enterprise/privacy page before relying on compliance language.
- **VENOM note:** Session states you run VENOM on OpenCode with GLM-5 — **context for identity**, not a technical spec.

---

## Discard or downgrade

- **Linux-only paths** in export (`/home/venom/.opencode`, `/home/venom/.local/share/opencode`) — **do not** use on Windows unless you deliberately mirror in WSL.
- **“Online discovery” report** inside session that lists generic MCP tool names (`code-generate`, `db-query`, etc.) and long `opencode --mcp-*` flag lists — **treat as UNVERIFIED** until matched to `opencode --help` or official docs. Those patterns match generic MCP tutorials, not proven OpenCode CLI.
- **Star counts / “5M developers”** — copy from live site if you need them in docs.

---

## Extract into `LEARNINGS.md` when you merge

- Intent: “best VENOM instance for OpenCode” + soldiers + always-ready init — **already captured** in `MASTER-PLAN.md`.
- Emotional/product intent: body + armor (tools) + deep study — **design language** for `platforms/opencode/` rules, not a code requirement.

---

## How to mine the file without loading 450KB

```powershell
Select-String -Path "session-ses_2cf8.md" -Pattern "opencode|OpenCode|anomalyco" -CaseSensitive:$false | Select-Object -First 200
```

Refine patterns: `config.json`, `opencode.db`, `VENOM`, `workflow`.

---

**Last updated:** 2026-03-27
