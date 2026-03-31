# ScentVision by UNSHELLED.AI — Product Specification

**Version:** 0.1.0-draft  
**Date:** 2026-03-23  
**Author:** VENOM methodology  
**Status:** Pre-release specification

**Artifacts in this folder**

- Normative JSON Schema: `schema/olfactory_profile.v1.json`
- Marketing site (React + Vite): `web/src/` — `App.jsx` composes sections; `web/src/components/sections/*`
- Repo social image (optional): `../../../assets/scentvision-repo-banner.png`

---

## A. Executive Summary

ScentVision is an open-source cross-modal inference engine that translates visual input (images, video frames, live streams) into structured olfactory descriptions. It does not detect molecules. It does not replace chemical sensors. It uses vision models, a curated material-to-scent ontology, and LLM-based contextual synthesis to produce **plausible scent profiles** with explicit confidence bounds and limitation disclosures.

The core thesis: ~70% of what a scene smells like is inferable from what it *looks* like — material composition, temperature cues, spatial enclosure, state of matter, visible decay. The remaining ~30% (invisible gases, pheromones, sub-surface contamination) is structurally undetectable from pixels. ScentVision treats this boundary as a **trust feature**: every response includes a `limits` field documenting what cannot be inferred.

**License:** Apache-2.0 (patent grant protects contributors from patent trolls in a novel-method space).  
**Primary distribution:** GitHub monorepo (`unshelled-ai/scentvision`), self-hostable.  
**Optional future:** UNSHELLED Cloud hosted API (not the launch story).

---

## B. Verified Competitor & Market Notes

### Competitor Landscape

| Company | Funding | Approach | Hardware Required | Source | Date | Confidence |
|---------|---------|----------|-------------------|--------|------|------------|
| **Osmo** | $130M total ($70M Series B) | Molecule → scent prediction via GNN; physical capture via GC-MS spectrometer; fragrance design platform | Yes (spectrometer for capture; software for prediction) | BusinessWire primary press release | Feb 4, 2026 | **HIGH** — primary source |
| **Aryballe** | ~€17–19M total | Biochemical sensors + optics + ML; hardware e-nose (NeOse device) | Yes (proprietary sensor hardware) | BusinessWire (2020); Tracxn; CBInsights | Jul 2020 / Sep 2025 | **HIGH** — multiple corroborating sources |
| **OVR Technology** | *Unverified — needs primary source* | VR scent delivery via cartridge hardware | Yes (ION Scentware device + cartridges) | Secondary references only | N/A | **LOW** — no primary funding source found |
| **Scentient** | *Unverified* | Scent-release hardware synced with digital cues | Yes | Secondary references only | N/A | **LOW** |

### Market Size

| Claim | Source | Date | Confidence | Notes |
|-------|--------|------|------------|-------|
| Digital scent tech market ~$1.2B in 2024, ~$1.33B in 2025 | Precedence Research; SkyQuestt; Research and Markets | 2025 | **MEDIUM** — multiple analyst firms converge on ~$1.2B range but exact figures vary |  |
| Same market $84M in 2025 | OMR Global | 2025 | **CONFLICT** — order of magnitude lower; likely different scope definition | Do not cite |
| CAGR ~10% (2025–2033) | SkyQuestt; Precedence; MRFR | 2025 | **MEDIUM** — consensus on ~10% CAGR across multiple analysts | |
| E-nose segment held ~61% of market in 2024 | Precedence Research | May 2025 | **MEDIUM** | |
| Global fragrance market ~$62B by 2025 | Statista (cited by CosmeticsDesign) | 2025 | **MEDIUM** — secondary citation | |

**Conclusion on market data:** Analyst firms disagree by an order of magnitude on total market size ($84M vs $1.35B for 2025). The disagreement likely reflects different scope definitions (narrow digital scent tech vs broader olfactory AI/e-nose). **We do not cite any specific market size number on marketing surfaces.** Instead, we reference the *qualitative* trend: every player in this space requires hardware. ScentVision is software-only.

### Key differentiator (verified)

No identified competitor offers a **pure software API** that takes visual input and returns structured olfactory descriptions. Every commercial player requires either:

- Physical sensor hardware (Aryballe, Scentient, OVR)
- Chemical spectrometry equipment (Osmo's capture pipeline)
- Scent delivery hardware (OVR, FeelReal)

ScentVision occupies an **uncontested category**: vision-to-scent inference via software.

---

## C. Product Requirements Document

### C.1 Problem

Olfactory data is the last major sense without a digital representation standard. Vision has pixels (RGB), audio has waveforms (PCM/frequency), touch has haptic profiles. Smell has no widely-adopted digital format, no open ontology, and no software-only inference path.

Existing digital scent efforts require physical hardware, making them inaccessible to software developers, content creators, accessibility tool builders, and researchers needing structured scent annotations at scale.

### C.2 Users

**Primary:** application developers; accessibility engineers; researchers; content annotation teams.  
**Secondary:** creative professionals; perfumery students; game developers.

### C.3 Differentiation vs Hardware Digital Scent

| Dimension | Hardware E-nose | ScentVision |
|-----------|----------------|-------------|
| Input | Physical air sample | Image/video pixels |
| Output | Chemical compound identification | Plausible scent description + structured profile |
| Accuracy model | High (molecular detection) | Bounded (visual inference with explicit limits) |
| Hardware cost | $500–$50,000+ per unit | $0 (software) |
| Invisible threats | Can detect (gas, VOCs) | **Cannot** — explicitly documented |

**ScentVision does not compete with e-noses.** It complements them.

### C.4 Moat Analysis

**Defensible:** SKG quality; evaluation methodology (ScentBench); schema adoption (`olfactory_profile.v1`).  
**Not defensible:** generic vision + LLM pipeline; public-domain mappings.

### C.5 Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| Health/safety misuse | **CRITICAL** | `limits` in every response; docs; UI disclaimers |
| Cultural scent bias | HIGH | `valence` optional / null; `cultural_context`; SKG overlays |
| Hallucinated confidence | HIGH | Evidence tagging; human calibration |
| Accessibility harm | MEDIUM | Frame as inference, not measurement |
| Legal liability (listings) | MEDIUM | License disclaimer; “estimated sensory profile” wording |

### C.6 Data Strategy for OSS

JSONL in-repo; PR contributions with `material_id`, descriptors, `source`, `cultural_context`, `confidence_basis`; two reviewers per SKG entry; semver for SKG; quarterly bias audit (goal: ≥6 cultural regions).

### C.7 Governance

Contributor Covenant; BDFL v0–v1 → elected council v2; responsible disclosure; ethical review for health/safety/surveillance use cases.

### C.8 Roadmap

**v0.1 — Foundation:** CLI, ~500 SKG entries, single image, pluggable backends, schema v1.  
**v0.5 — Evaluation:** ScentBench, calibration, multi-frame video, web playground.  
**v1.0 — Production:** REST + WS, ~2k SKG entries, i18n, optional UNSHELLED Cloud.  
**v2.0 — Ecosystem:** plugins, SDKs, leaderboard, elected governance.

---

## D. Open-Source Repo Blueprint

```
unshelled-ai/scentvision/
├── LICENSE                          # Apache-2.0
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── packages/
│   ├── core/                        # pipeline, decompose, map, synthesize, validate
│   ├── skg/                         # JSONL materials + modifiers + schema.json
│   ├── server/                      # REST + WS
│   ├── cli/
│   └── eval/                        # ScentBench harness
├── schema/
│   └── olfactory_profile.v1.json
├── docs/
├── web/                             # landing + playground
├── .github/workflows/               # ci, skg-validate, release
├── turbo.json
└── package.json
```

---

## E. API Endpoint Specification

**Base URL (self-hosted):** `http://localhost:3274/v1`

- **`POST /v1/analyze`** — image/video source → `olfactory_profile.v1`
- **`GET /v1/graph/:material_id`** — SKG lookup
- **`WS /v1/stream`** (v0.5+) — frames → timeline of profiles
- **Errors:** `UNSUPPORTED_SOURCE`, `IMAGE_TOO_SMALL`, `NO_VISUAL_CONTENT`, `MODEL_UNAVAILABLE`, `RATE_LIMITED`, `INTERNAL_ERROR`

Request/response examples and rate-limit defaults match the longer canonical draft (see version control history or expand here when publishing).

---

## F. JSON Schema — `olfactory_profile.v1`

**Authoritative file:** `schema/olfactory_profile.v1.json` in this directory.

---

## G. Brand & Design Guidelines

### G.1 Brand Hierarchy

```
UNSHELLED.AI          ← Primary brand
  └── ScentVision     ← Product name
        └── Built with VENOM methodology   ← Footer / rare accent only
```

**Domain:** `scentvision.unshelled.ai` (suggested)  
**Repo:** `github.com/unshelled-ai/scentvision`

### G.2 Color Tokens

Synesthetic restraint: dark-first; amber primary; teal secondary; rose tertiary; **pulse (acid green)** = VENOM signature, max ~3 uses per viewport.

### G.3 Typography

Display: Newsreader. Body: DM Sans. Mono: JetBrains Mono.

### G.4 Radius & Motion

4 / 8 / 12px radii; `cubic-bezier(0.16, 1, 0.3, 1)` reveals; stagger ~60ms.

### G.5 Accessibility (Dark-First)

WCAG AA minimum for UI text; `dim` decorative only; visible focus rings (amber).

### G.6 Synesthetic Motifs

Molecule viz (6–8 nodes, muted); optional waveform; note pyramid via hierarchy; sparse particles (15–20).

---

## H. Landing Page Implementation

Canonical site implementation: **`web/src/App.jsx`** (sections under `web/src/components/sections/`).

*End of specification.*
