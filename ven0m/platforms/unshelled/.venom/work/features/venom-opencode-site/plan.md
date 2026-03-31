# VENOM × OpenCode Site — Implementation Plan

## 1. Stack Decision

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | React 18.3 | ScentVision uses it. Proven. |
| Build | Vite 5.4 | Fast HMR, simple config, static output |
| Router | React Router 6.26 | Same as ScentVision |
| Styling | Voidweave tokens + inline styles | No CSS-in-JS library |
| Markdown | react-markdown + remark-gfm | Docs without MDX complexity |
| Syntax | Prism via react-markdown | Code blocks for CLI examples |
| Deploy | GitHub Pages / GitHub Actions | Free, automatic on push |

## 2. Site Map

```
/                           Landing (hero, value prop, CTAs)
/install                    Installation guide
/docs                       Documentation hub
  /docs/getting-started     First 5 minutes
  /docs/agents              6 specialists
  /docs/commands            7 verbs
  /docs/workflows           4 choreographies
  /docs/memory              How VENOM remembers
  /docs/safety              Safety gates & limits
  /docs/configuration       opencode.json options
/philosophy                 VENOM philosophy
/why-venom                  Pain points solved
/changelog                  Version history
```

Total: 14 pages

## 3. File Structure

```
platforms/unshelled/venom-opencode-site/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── theme/tokens.js
│   ├── layout/
│   │   ├── RootLayout.jsx
│   │   └── sectionStyle.js
│   ├── hooks/
│   │   ├── useBreakpoint.js
│   │   ├── useScrollSpy.js
│   │   └── usePageTitle.js
│   ├── components/
│   │   ├── GlobalStyles.jsx
│   │   ├── Nav.jsx
│   │   ├── Reveal.jsx
│   │   ├── ParticleField.jsx
│   │   ├── TerminalBlock.jsx
│   │   ├── StatsBar.jsx
│   │   ├── PainPointCard.jsx
│   │   ├── CtaSection.jsx
│   │   ├── MindGrid.jsx
│   │   ├── GitHubStarButton.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── PainPoints.jsx
│   │   │   ├── WhatWeBuilt.jsx
│   │   │   ├── TheNineMinds.jsx
│   │   │   └── Footer.jsx
│   │   └── docs/
│   │       ├── DocsLayout.jsx
│   │       ├── DocsSidebar.jsx
│   │       ├── DocsToc.jsx
│   │       ├── DocsCard.jsx
│   │       └── CodeBlock.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── InstallPage.jsx
│   │   ├── DocsHubPage.jsx
│   │   ├── DocsPage.jsx
│   │   ├── PhilosophyPage.jsx
│   │   ├── WhyVenomPage.jsx
│   │   ├── ChangelogPage.jsx
│   │   └── NotFoundPage.jsx
│   └── data/
│       ├── navigation.js
│       ├── docs-index.js
│       └── pain-points.js
└── docs/
    ├── getting-started.md
    ├── agents.md
    ├── commands.md
    ├── workflows.md
    ├── memory.md
    ├── safety.md
    └── configuration.md
```

## 4. Component Inventory

### New Components
| Component | Purpose |
|-----------|---------|
| TerminalBlock | Code block with copy button |
| PainPointCard | Pain → solution card |
| StatsBar | Animated stats (655 lines, etc.) |
| MindGrid | 9 minds visual grid |
| GitHubStarButton | Star button with count |
| DocsLayout | Docs shell with sidebar |
| DocsSidebar | Left nav for docs |
| DocsToc | Right table of contents |
| DocsCard | Hub page doc card |

### Copied from ScentVision
Nav, RootLayout, Reveal, GlobalStyles, ParticleField, hooks

## 5. CTA Strategy

| CTA | Placement | Destination |
|-----|-----------|-------------|
| Install VENOM | Hero, Install page, CTA footer | /install |
| Star on GitHub | Nav, CTA footer | github.com/Unshelled/venom-opencode |
| Read the Docs | Hero secondary, Docs hub | /docs |

## 6. Deployment

GitHub Actions workflow for automatic deploy on push to main.

---
*Plan v1.0 — 2026-03-28*
