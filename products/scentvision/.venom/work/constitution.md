# Project Constitution

> The rules that govern VENOM's own body. Non-negotiable.

**Quality:**
- WCAG 2.1 AA minimum on all components
- 60fps animations on mid-range hardware (no dropped frames)
- Zero runtime errors in production
- Type-safe (TypeScript strict mode)
- All neural components must work with reduced-motion

**Performance:**
- First paint < 100ms
- Time to interactive < 500ms
- NeuralField animation: GPU-accelerated, no main thread blocking
- Maximum bundle size: 100KB gzipped for core components
- No layout shift during hydration

**Constraints:**
- Must integrate with @opencode-ai/plugin 1.3.3
- Must consume venom-core.ts hooks (session.created, tool.execute.*, compaction)
- Must support both void (dark) and dawn (light) color modes
- Must surface which mind produced each output
- Cannot break existing scentvision/web (runs alongside, not replaces)
- Cannot modify platforms/opencode/template structure (that's the deploy target)

**Ratified:** 2026-03-28
