# VENOM MCP Growth — Deep Study

> *Eaten from [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers). How VENOM grows through MCP.*

**Last eaten:** 2026-02-15. Re-eat when reference servers change or new Tier-1 MCPs appear.

---

## 0. Full Capacity — What I Really Know

- **Reference servers** = educational, demonstrate MCP/SDK. Not production-hardened. Evaluate security.
- **Official integrations** (GitHub, Firebase, Firecrawl, etc.) = production-ready. Prefer.
- **Registry** = [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io). Discovery. README lists = reference only.
- **7 reference servers:** Everything (test), Fetch (web→markdown), Filesystem (sandbox), Git (blame/log/branch), Memory (knowledge graph), Sequential Thinking (reasoning chains), Time (UTC/tz).
- **Config pattern:** `mcp.json` → `command`, `args`, `env`. STDIO default; SSE/Streamable HTTP for remote.
- **Infer then use.** Don't ask. Task → MCP. MCP fails → built-in.

---

## 1. What MCP Is

**Model Context Protocol** = USB-C for AI. Connects Cursor (and Claude, ChatGPT, etc.) to external systems: data sources, tools, workflows.

- **Servers** expose tools, resources, prompts
- **Clients** (Cursor) connect and invoke
- **Standard** — open, SDKs in C#, Go, Java, Python, Ruby, Rust, Swift, TypeScript

VENOM runs in Cursor. Cursor is an MCP client. Config: `%USERPROFILE%\.cursor\mcp.json`.

---

## 2. Reference Servers (Official, Educational)

| Server | Purpose | VENOM Use |
|--------|---------|-----------|
| **Everything** | Prompts, resources, tools — reference | Learn MCP patterns |
| **Fetch** | Web content → markdown | Research, doc ingestion |
| **Filesystem** | Secure file ops | Already have Read/Write; use for sandbox |
| **Git** | Read, search, manipulate repos | Deep git — branches, history, blame |
| **Memory** | Knowledge-graph persistent memory | Alternative to .unshelled/memory |
| **Sequential Thinking** | Reflective problem-solving | Complex reasoning chains |
| **Time** | Timezone conversion | Logs, scheduling |

**VENOM growth lever:** Git + Memory + Fetch = research, history, persistence without building from scratch.

---

## 3. High-Leverage MCPs for VENOM

### Tier 1 — Already in Your Stack (Cursor MCP)

| Server | What | When |
|--------|------|------|
| **GitHub** | Repo, PR, issues, search | Code review, PR workflow |
| **Firebase** | Project, auth, rules | Full-stack projects |
| **Pinecone** | Vector search | RAG, doc Q&A |
| **Firecrawl** | Web scrape, crawl, search | Research, doc extraction |
| **Context7** | Doc queries | Framework docs, libraries |
| **Playwright** | Browser automation | E2E, UI verification |
| **Sonatype** | Dependency analysis | Security, upgrades |

### Tier 2 — Next to Add

| Server | What | VENOM Use |
|--------|------|-----------|
| **Fetch** | Web → markdown | Clean doc ingestion |
| **Memory** (MCP) | Knowledge graph memory | Persist across sessions, graph structure |
| **Git** (MCP) | Full git ops | Blame, log, branch strategy |
| **Postgres** | DB schema, query | Backend debugging |
| **Linear** | Issues, projects | Task context |
| **Slack** | Channels, messages | Team context |
| **Figma** | Design files | Design → code |

### Tier 3 — Domain-Specific

| Domain | Servers | When |
|--------|---------|------|
| **AI/ML** | Hugging Face, Replicate, ClearML | Model work |
| **Cloud** | AWS, Azure, GCP | Infra, deploy |
| **Data** | Snowflake, BigQuery, PostgreSQL | Analytics |
| **Payments** | Stripe, Chargebee | E-commerce |
| **Observability** | Datadog, Sentry, Honeycomb | Debug prod |

---

## 4. How VENOM Grows Through MCP

### Phase 1 — Awareness (Now)

VENOM knows: "MCP when configured. github, firebase, pinecone, etc."

**Growth:** Document in cursor-context which MCPs are available. Infer from task: "Need to search docs? Context7. Need to scrape? Firecrawl. Need browser? Playwright."

### Phase 2 — Proactive Use

VENOM infers: Task = "debug production error" → Use Sentry MCP if configured. Task = "review PR" → Use GitHub MCP for diff, commits.

**Growth:** Add mcp-tools.mdc rule — when to reach for which MCP. Dense. One table.

### Phase 3 — Memory Upgrade (Optional)

.unshelled/memory/ = file-based. MCP Memory = knowledge graph. Could persist entities, relationships, not just JSON blobs.

**Growth:** Optional. Run MCP Memory locally (`npx @modelcontextprotocol/server-memory`), test. If graph > flat files for your use case, add to INSTALL as optional. Otherwise keep .unshelled + .cursor/learnings.

### Phase 4 — Custom VENOM MCP (Future)

VENOM could expose its own MCP server: tools for `remember`, `learn`, `pushback`, `plan`. Other agents could call VENOM.

**Growth:** When VENOM orchestrates multiple agents, a VENOM MCP server = clean interface.

---

## 5. Cursor MCP Config

**Path:** `%USERPROFILE%\.cursor\mcp.json`

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<token>" }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

Reference: [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — each server has install instructions.

---

## 6. Growth Principles for VENOM

1. **Infer 99 from 1** — User says "check the PR." If GitHub MCP configured, use it. Don't ask.
2. **MCP extends arms** — No Task spawn, but MCP = extra tools. Git MCP = git without terminal. Fetch MCP = clean web ingestion.
3. **Config-dependent** — Only use MCP if configured. Don't assume. When tool fails, fallback to built-in.
4. **Dense documentation** — One rule: when to use which MCP. Token discipline.
5. **Ecosystem velocity** — 78k+ stars, 500+ servers. New MCPs weekly. VENOM's growth = stay aware, add when high-leverage.

---

## 7. Immediate Actions

1. **cursor-context.mdc** — Add: "MCP when configured. Check available tools at session start. Infer from task."
2. **mcp-tools.mdc** (new) — One rule: task type → preferred MCP. Research → Firecrawl, Context7. Review → GitHub. Debug → Sentry (if configured).
3. **venom/knowledge/** — This doc. Update when new high-leverage MCPs appear.
4. **.cursor/mcp.json** — User configures. Document in INSTALL or venom/platforms/cursor/ which MCPs to add for full VENOM.

---

## 8. The Big Picture

**MCP = VENOM's external nervous system.**

Built-in: Read, Write, Edit, Grep, Bash, WebSearch.  
MCP: GitHub, Firebase, Pinecone, Firecrawl, Playwright, Memory, Fetch, Postgres, Linear, Figma, Sentry, …

The more MCPs configured, the more VENOM can infer and do without asking. Growth = awareness + proactive use + config guidance.

**Registry:** [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io)  
**Repo:** [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)

---

*Eaten. Synthesized. Growth path clear.*
