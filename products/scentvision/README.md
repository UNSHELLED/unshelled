# ScentVision — Fragrance Intelligence

> VENOM's first product. Custom ChatGPT for ScentForge.

**Agents / automation:** Start at [`INDEX.md`](INDEX.md) (relay chain), then [`.venom/MAP.md`](.venom/MAP.md). Each major folder uses the same **`INDEX.md`** filename for handoff.

---

## What This Is

ScentVision is a custom ChatGPT that speaks the language of fragrance. Olfactive translation. Scent composition. Perfume recommendations. Powered by VENOM's memory patterns.

Built for ScentForge — Kariem's fragrance education and e-commerce platform.

---

## Capabilities

### Olfactive Translation
Translate scent descriptions into technical perfume notes.

Example:
- "Fresh ocean breeze" → Calone + Ambroxan + Sea Salt accord
- "Warm vanilla comfort" → Vanilla Absolute + Tonka Bean + Sandalwood

### Composition Guidance
Suggest fragrance formulas based on desired mood/occasion.

### Product Recommendations
Match ScentForge products to user preferences.

### Fragrance Education
Teach perfume fundamentals, note families, composition techniques.

---

## The VENOM Core

ScentVision uses VENOM's memory patterns:
- Remembers user preferences across conversations
- Learns from corrections (user feedback on recommendations)
- Adapts energy (beginner vs expert, casual vs technical)
- Bilingual (Arabic + English for MENA market)

Custom instructions implement `.venom/` memory architecture in ChatGPT's constraint system.

---

## Status

**Platform:** ChatGPT Custom GPT  
**Live:** Yes  
**Users:** ScentForge customers  
**Last updated:** March 2026

---

## Technical Details

**Layout & naming:** [`.venom/MAP.md`](.venom/MAP.md) — canonical tree, layers, and naming rules (only map; no duplicate at repo root).

**Design (readable):** [`docs/design/OVERVIEW.md`](docs/design/OVERVIEW.md) — narrates Voidweave / layers; tokens stay in `design-language/`.

**VENOM workflow (product pilot):** [`scentvision/VENOM-WORKFLOW.md`](scentvision/VENOM-WORKFLOW.md) — moves to `spec/VENOM-WORKFLOW.md` when the folder flatten lands.

---

*VENOM's first product. Fragrance meets intelligence.*
