# VENOM × OpenCode Site — Tasks

**Status:** 0 / 28 complete
**Feature:** venom-opencode-site

---

## Wave 1 — Scaffold (parallel)

- [x] T01: Initialize Vite project — `platforms/unshelled/venom-opencode-site/package.json` — verify: npm install succeeds
- [x] T02: Create vite.config.js — `platforms/unshelled/venom-opencode-site/vite.config.js` — verify: npm run build produces dist/
- [x] T03: Create index.html — `platforms/unshelled/venom-opencode-site/index.html` — verify: title and meta tags present
- [x] T04: Create token imports — `platforms/unshelled/venom-opencode-site/src/theme/tokens.js` — verify: exports T, F, Minds

---

## Wave 2 — Layout (parallel, depends Wave 1)

- [ ] T05: Create main.jsx entry — `platforms/unshelled/venom-opencode-site/src/main.jsx` — verify: renders App
- [ ] T06: Create App.jsx router — `platforms/unshelled/venom-opencode-site/src/App.jsx` — verify: routes defined
- [ ] T07: Create GlobalStyles — `platforms/unshelled/venom-opencode-site/src/components/GlobalStyles.jsx` — verify: CSS reset applied
- [ ] T08: Create RootLayout — `platforms/unshelled/venom-opencode-site/src/layout/RootLayout.jsx` — verify: renders children
- [ ] T09: Create Nav — `platforms/unshelled/venom-opencode-site/src/components/Nav.jsx` — verify: navigation links work

---

## Wave 3 — Hooks (parallel, depends Wave 1)

- [ ] T10: Create useBreakpoint — `platforms/unshelled/venom-opencode-site/src/hooks/useBreakpoint.js` — verify: returns isMobile, isTablet, isDesktop
- [ ] T11: Create useScrollSpy — `platforms/unshelled/venom-opencode-site/src/hooks/useScrollSpy.js` — verify: tracks active section
- [ ] T12: Create usePageTitle — `platforms/unshelled/venom-opencode-site/src/hooks/usePageTitle.js` — verify: sets document.title

---

## Wave 4 — Core Components (parallel, depends Wave 2)

- [ ] T13: Create Reveal — `platforms/unshelled/venom-opencode-site/src/components/Reveal.jsx` — verify: animates on scroll
- [ ] T14: Create ParticleField — `platforms/unshelled/venom-opencode-site/src/components/ParticleField.jsx` — verify: particles render
- [ ] T15: Create TerminalBlock — `platforms/unshelled/venom-opencode-site/src/components/TerminalBlock.jsx` — verify: copy button works
- [ ] T16: Create StatsBar — `platforms/unshelled/venom-opencode-site/src/components/StatsBar.jsx` — verify: animates numbers
- [ ] T17: Create GitHubStarButton — `platforms/unshelled/venom-opencode-site/src/components/GitHubStarButton.jsx` — verify: links to repo

---

## Wave 5 — Landing Sections (parallel, depends Wave 4)

- [ ] T18: Create Hero section — `platforms/unshelled/venom-opencode-site/src/components/sections/Hero.jsx` — verify: headline + CTAs render
- [ ] T19: Create PainPoints section — `platforms/unshelled/venom-opencode-site/src/components/sections/PainPoints.jsx` — verify: 6 cards render
- [ ] T20: Create WhatWeBuilt section — `platforms/unshelled/venom-opencode-site/src/components/sections/WhatWeBuilt.jsx` — verify: stats render
- [ ] T21: Create TheNineMinds section — `platforms/unshelled/venom-opencode-site/src/components/sections/TheNineMinds.jsx` — verify: mind grid renders
- [ ] T22: Create Footer section — `platforms/unshelled/venom-opencode-site/src/components/sections/Footer.jsx` — verify: links + copyright

---

## Wave 6 — Pages (parallel, depends Wave 5)

- [ ] T23: Create HomePage — `platforms/unshelled/venom-opencode-site/src/pages/HomePage.jsx` — verify: all sections render
- [ ] T24: Create InstallPage — `platforms/unshelled/venom-opencode-site/src/pages/InstallPage.jsx` — verify: 3-step guide renders
- [ ] T25: Create DocsHubPage — `platforms/unshelled/venom-opencode-site/src/pages/DocsHubPage.jsx` — verify: doc cards render
- [ ] T26: Create PhilosophyPage — `platforms/unshelled/venom-opencode-site/src/pages/PhilosophyPage.jsx` — verify: content renders
- [ ] T27: Create WhyVenomPage — `platforms/unshelled/venom-opencode-site/src/pages/WhyVenomPage.jsx` — verify: comparison table
- [ ] T28: Create NotFoundPage — `platforms/unshelled/venom-opencode-site/src/pages/NotFoundPage.jsx` — verify: 404 renders

---

## Wave 7 — Docs System (depends Wave 6)

- [ ] T29: Create DocsLayout — `platforms/unshelled/venom-opencode-site/src/components/docs/DocsLayout.jsx` — verify: sidebar + content
- [ ] T30: Create DocsSidebar — `platforms/unshelled/venom-opencode-site/src/components/docs/DocsSidebar.jsx` — verify: navigation links
- [ ] T31: Create DocsCard — `platforms/unshelled/venom-opencode-site/src/components/docs/DocsCard.jsx` — verify: card renders
- [ ] T32: Create CodeBlock — `platforms/unshelled/venom-opencode-site/src/components/docs/CodeBlock.jsx` — verify: syntax highlight
- [ ] T33: Create DocsPage — `platforms/unshelled/venom-opencode-site/src/pages/DocsPage.jsx` — verify: markdown renders

---

## Wave 8 — Data Files (parallel, depends Wave 1)

- [ ] T34: Create navigation.js — `platforms/unshelled/venom-opencode-site/src/data/navigation.js` — verify: exports navItems
- [ ] T35: Create docs-index.js — `platforms/unshelled/venom-opencode-site/src/data/docs-index.js` — verify: exports docs structure
- [ ] T36: Create pain-points.js — `platforms/unshelled/venom-opencode-site/src/data/pain-points.js` — verify: exports painPoints

---

## Wave 9 — Markdown Docs (parallel, depends Wave 1)

- [ ] T37: Create getting-started.md — `platforms/unshelled/venom-opencode-site/docs/getting-started.md` — verify: file exists
- [ ] T38: Create agents.md — `platforms/unshelled/venom-opencode-site/docs/agents.md` — verify: 6 agents documented
- [ ] T39: Create commands.md — `platforms/unshelled/venom-opencode-site/docs/commands.md` — verify: 7 commands documented
- [ ] T40: Create workflows.md — `platforms/unshelled/venom-opencode-site/docs/workflows.md` — verify: 4 workflows documented
- [ ] T41: Create memory.md — `platforms/unshelled/venom-opencode-site/docs/memory.md` — verify: memory system explained
- [ ] T42: Create safety.md — `platforms/unshelled/venom-opencode-site/docs/safety.md` — verify: limits documented
- [ ] T43: Create configuration.md — `platforms/unshelled/venom-opencode-site/docs/configuration.md` — verify: opencode.json options

---

## Wave 10 — Verification (depends all)

- [ ] T44: npm run dev starts without errors — verify: dev server runs on localhost:5173
- [ ] T45: npm run build produces dist/ — verify: dist/ folder exists with index.html
- [ ] T46: All routes accessible — verify: navigate to all 14 pages
- [ ] T47: Mobile responsive — verify: layout adapts at 375px, 768px, 1024px

---

*47 tasks across 10 waves. Run /venom-build to execute.*
