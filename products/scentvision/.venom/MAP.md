# ScentVision — Repository map

> **One page to answer: “Where does this live?”**  
> Lives only here — **`.venom/MAP.md`**. No second map at `products/scentvision/` root.

No `opencode-site` in this product — marketing for OpenCode/VENOM lives in its own repo if you ship it.

**Agents:** Start at [`../INDEX.md`](../INDEX.md) (relay), then this file.

**INDEX discipline** (same bloodline as `venom-mine/platforms/opencode` → `ven0m/platforms/opencode/template`): each `INDEX.md` uses **identity line + organ table + “If missing” + signal flow + boundaries**. OpenCode never auto-loads INDEX files; VENOM pulls them to navigate — see [`../.opencode/INDEX.md`](../.opencode/INDEX.md) for the reference “operational body” pattern.

---

## Layers (mental model)

| Layer | Folder | Holds |
|-------|--------|--------|
| **Story** | `../README.md` | What ScentVision is for humans (Custom GPT, ScentForge). |
| **Definition** | `spec/` *(target)* / `../scentvision/` *(legacy)* | Product spec, JSON schema, VENOM workflow notes. |
| **Surface** | `web/` *(target)* / `../scentvision/web/` *(legacy)* | Vite + React app. |
| **Design law** | `../design-language/` | Tokens, patterns — not app logic. |
| **Playbooks** | `../docs/` | Simulations, **design narration** (`docs/design/`) — not project state. |
| **Desk** | `.venom/` *(here)* | Context, memory, learnings, work, **this MAP**. |
| **Tooling** | `../.opencode/` | OpenCode agents, commands, plugins — dev-time. |

**Rule:** If it’s “what we decided this week,” it belongs in `.venom/`. If it’s “how VENOM behaves in edge cases,” it belongs in `../docs/`. If it’s **token JSON or PATTERNS.md truth**, it belongs in `../design-language/` — `docs/design/` only **narrates** and links.

---

## Canonical tree (target shape)

Everything below is under `products/scentvision/`.

```text
products/scentvision/
├── INDEX.md                  # Agent relay — read first
├── README.md                 # Product story
├── AGENTS.md                 # Agent identity
│
├── spec/                     # Product definition (target; may be scentvision/ today)
│   ├── INDEX.md
│   ├── PRODUCT-SPEC-v0.1.md
│   ├── VENOM-WORKFLOW.md
│   └── schema/
│       └── olfactory_profile.v1.json
│
├── web/                      # Single web app (target)
│   ├── INDEX.md
│   ├── package.json
│   └── src/
│
├── design-language/          # SSOT: tokens + patterns (Voidweave, Synapse)
│   ├── INDEX.md
│   ├── voidweave/
│   └── synapse/
│
├── docs/
│   ├── INDEX.md
│   ├── SIMULATIONS.md
│   └── design/               # Design *documentation* — narrates; does not replace tokens
│       ├── INDEX.md
│       └── OVERVIEW.md
│
├── .venom/
│   ├── MAP.md                # This file — repository map
│   ├── CONTEXT.md
│   ├── INDEX.md
│   ├── memory/
│   ├── learnings/
│   └── work/
│
└── .opencode/
```

**Not here:** separate landing sites for OpenCode — another repository (e.g. `venom-opencode`).

---

## Naming rules

| Name | Use |
|------|-----|
| **`spec/`** | Contracts and prose that define the product; schemas under `spec/schema/`. |
| **`web/`** | One deployable frontend. No `scentvision/scentvision/web` nesting *(legacy)*. |
| **`design-language/`** | Visual system source of truth — apps import tokens from here. |
| **`docs/design/`** | Readable design story + boundaries — **links** to `design-language/`, does not duplicate JSON. |
| **`docs/`** | Cross-cutting *behavior* and *narration* — not specs (`spec/`), not desk (`.venom/`). |
| **`.venom/`** | Mutable project brain — MAP lives here with CONTEXT. |

---

## Migration from current layout (when you refactor)

| Today (legacy) | Target |
|----------------|--------|
| `scentvision/PRODUCT-SPEC-*.md`, `VENOM-WORKFLOW.md`, `schema/` | `spec/` |
| `scentvision/web/` | `web/` |
| `VENOM.md` at root | Fold into `AGENTS.md` or remove |
| Duplicate `platforms/.../template/` trees | Remove from product; sync from `ven0m` if needed |
| `session-*.md` at root | `.gitignore` or `.venom/work/sessions/` |

After moves, update: `web` imports, `tokens.json` paths, `design-language/voidweave/README.md`, and `.venom/CONTEXT.md` “Structure” section.

---

## Quick lookup

| I need… | Go to… |
|---------|--------|
| **Repository map (this tree)** | `.venom/MAP.md` |
| Stack & conventions | `.venom/CONTEXT.md` |
| Product requirements | `spec/` or `spec/PRODUCT-SPEC-v0.1.md` |
| Olfactory JSON schema | `spec/schema/` |
| Run or build the UI | `web/` or `scentvision/web/` |
| Colors / typography **tokens** | `design-language/voidweave/`, `design-language/synapse/` |
| **Design intent** (readable, VENOM) | `docs/design/OVERVIEW.md` |
| Edge-case behavior | `docs/SIMULATIONS.md` |
| What we decided last | `.venom/memory/MEMORY.md` |
| Active feature work | `.venom/work/` |

---

*Keep this file accurate when folders move. If MAP and reality disagree, MAP is wrong.*
