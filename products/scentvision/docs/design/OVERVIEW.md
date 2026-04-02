# ScentVision — Design overview

> Readable layer between **product spec** and **token files**.  
> For **exact values**, always use [`../../design-language/voidweave/tokens.json`](../../design-language/voidweave/tokens.json) and [`../../design-language/voidweave/PATTERNS.md`](../../design-language/voidweave/PATTERNS.md).

**Relay:** [`INDEX.md`](INDEX.md) · [`../../.venom/MAP.md`](../../.venom/MAP.md)

---

## Layers (what sits where)

| Layer | Purpose | SSOT |
|-------|---------|------|
| **Voidweave** | ScentVision / UNSHELLED **surface** — void, bone, proof, pulse | `design-language/voidweave/` |
| **Synapse** | Extended system — typography, motion, larger spec | `design-language/synapse/` |
| **Web app** | Implements tokens via theme re-exports | `scentvision/web/src/theme/` |

---

## The braid (Voidweave)

Four strands — **intent**, not implementation:

| Strand | Meaning | In UI |
|--------|---------|--------|
| **Void** | Canvas, patience, depth | Layered surfaces, not flat black slabs |
| **Bone** | Readable truth | Clear hierarchy; `ghost` / `dim` for secondary — not muddy mid-gray |
| **Proof** | Evidence, API, schema | Mono for IDs and verifiable strings; teal/amber as **information** |
| **Pulse** | Rare honest accent | Acid green = live / calibrated — **sparse**; if everything pulses, nothing does |

Typography: **serif display** for gravity; **sans body** for rhythm; **mono** for accountability.

Full braid + brand hierarchy: [`../../design-language/voidweave/README.md`](../../design-language/voidweave/README.md).

---

## Product-bound rules

Olfactory inference and **limits honesty** follow the product spec — see **§G** in `scentvision/PRODUCT-SPEC-v0.1.md` (or future `spec/`). Design docs do not override spec.

---

## Boundaries (VENOM)

- **No shell theater** — sparse truth signals; limits visible where inference is sold (per Voidweave README).
- **Docs/design** narrates; **design-language** proves.
- **Decisions** that change behavior → `.venom/memory/MEMORY.md`. **Edge-case behavior** → `docs/SIMULATIONS.md`.

---

*Repository map: [`../../.venom/MAP.md`](../../.venom/MAP.md).*
