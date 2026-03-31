# Voidweave

**Voidweave** is the **UNSHELLED.AI** surface language: portable **tokens + patterns** (not a component library). It encodes how honest product **looks** when it ships — aligned with **VENOM** thinking: no shell theater, sparse truth signals, limits visible wherever inference is sold.

**Canonical package:** this folder (`tokens.json`, `PATTERNS.md`, `PORTING.md`).
**Reference implementation:** [`../scentvision/web/`](../scentvision/web/) — Vite + React; theme re-exports `tokens.json` via `src/theme/tokens.js`.

**Marketing routes (ScentVision):** `/` home, `/docs`, `/schema`, `/playground`, and **`/github`** — a Voidweave **repo-preview** surface (GitHub-inspired information architecture, not a GitHub™ UI clone). Teaches VENOM honesty + brand hierarchy in the shape developers already trust.

---

## Why this exists on GitHub

| Layer | Role |
|-------|------|
| **VENOM** | *How we think* — soul, pact, pushback, no fabricated confidence (see VENOM origin `.cursor/identity/soul.mdc` when present). |
| **Voidweave** | *How UNSHELLED product looks* — void depth, readable bone, mono **proof**, rare **pulse** for live/honest state. |
| **ScentVision** | *First ship* — cross-modal olfactory inference; UI must carry **`limits`** honesty per product spec. |

Voidweave is the **design contract** you can copy into another repo, paste into a design doc, or wire into Tailwind/shadcn/native — without dragging the whole React app.

---

## The braid (four strands)

| Strand | Meaning | UI behavior |
|--------|---------|-------------|
| **Void** | Canvas, patience, depth | Layer `void` → `abyss` → `surface` → `edge`; avoid flat pure-black slabs. |
| **Bone** | Readable truth | Primary text; `ghost` / `dim` for hierarchy — not lazy mid-gray on black. |
| **Proof** | Evidence, API, schema | Mono for IDs, commands, JSON-shaped content; amber/teal as **information**, not decoration. |
| **Pulse** | Rare honest accent | Acid green = calibrated / live / true — **sparse**; if everything pulses, nothing does. |

**Typography roles:** serif **display** = gravity (claims, section titles). Sans **body** = rhythm. Mono = **accountability** (copyable, verifiable).

---

## UNSHELLED / ScentVision brand hierarchy

Per `PRODUCT-SPEC-v0.1.md` §G.1:

```
UNSHELLED.AI          ← house
  └── ScentVision     ← product
        └── Built with the VENOM methodology   ← footer / rare accent only
```

**Color discipline (§G.2):** dark-first; amber primary; teal secondary; rose tertiary; **pulse** = VENOM signature — **≤ 3 uses per viewport** (see `tokens.json` → `inferenceProduct.pulseBudgetPerViewport`).

---

## Non-negotiables (ship gate)

1. **Dark-first** — default canvas is void; light mode is a future variant, not the default story.
2. **Inference honesty** — if you sell inference, the UI path exposes **what cannot be known** (footer, docs, schema `limits`, empty states). Skip this → say **Voidweave-derived**, not full Voidweave.
3. **Touch + safe area** — ≥ 44px targets on primary actions; `viewport-fit=cover`; respect `env(safe-area-inset-*)`.
4. **Reduced motion** — decorative particles/pulses off under `prefers-reduced-motion: reduce`; keep focus rings.
5. **Focus visible** — `focus-visible` rings using semantic focus token (amber), never `outline: none` without replacement.

---

## Artifacts

| File | Purpose |
|------|---------|
| `tokens.json` | Palette, type, semantic aliases, breakpoints, layout/motion/radii, brand + inference metadata, `routes` + `repoPreviewSurface` (`version` **1.2.0**). |
| `PATTERNS.md` | Layout, nav, motion, accessibility, section rhythm, **repo-preview** — **stack-agnostic**. |
| `PORTING.md` | Map Voidweave onto Tailwind, shadcn, RN, static HTML, etc. |

---

## Versioning

- Bump **`tokens.json` → `version`** on breaking palette, typography, or semantic-alias changes. **1.2.0** adds optional `layout.repoPreviewContentMax`, `routes`, and `repoPreviewSurface` (non-breaking for consumers that only read palette/type).
- Reference apps should note pinned Voidweave version in their README (ScentVision: see `web/README.md`).

---

## License

`tokens.json` declares **Apache-2.0** to match UNSHELLED / ScentVision shipping posture; Markdown specs are documentation for the same product line.

---

*Voidweave — the weave is the discipline: void, bone, proof, pulse, tight enough that decoration cannot slip through.*
