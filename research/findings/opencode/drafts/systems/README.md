# Cognitive Systems Directory

**Purpose:** Provides access to all 21 VENOM cognitive systems (11 base + 5 OpenCode-specific + 5 OpenCode integration).

---

## Directory Structure

```
systems/
├── brain0-cognitive.md         [->] Brain 0 cognitive system
├── arm1-cognitive.md            [->] Arm 1 cognitive
├── arm2-cognitive.md            [->] Arm 2 cognitive
├── arm3-cognitive.md            [->] Arm 3 cognitive
├── arm4-cognitive.md            [->] Arm 4 cognitive
├── arm5-cognitive.md            [->] Arm 5 cognitive
├── arm6-predictor.md             [->] Arm 6 cognitive
├── arm7-communicator.md          [->] Arm 7 cognitive (CRITICAL)
├── arm8-learner.md              [->] Arm 8 cognitive
├── critical-thinking.md           [->] Base VENOM system
├── meta-cognition.md            [->] Base VENOM system
├── emotional-intelligence.md     [->] Base VENOM system
├── ethics.md                    [->] Base VENOM system
├── global-workspace.md          [->] Base VENOM system
├── attention-schema.md           [->] Base VENOM system
├── memory-tools.md              [->] Base VENOM system
├── verification.md               [->] Base VENOM system
├── consciousness-indicators.md  [->] Base VENOM system
├── goal-management.md            [->] Base VENOM system
├── self-audit.md               [->] Base VENOM system
├── security.md                 [->] Base VENOM system
├── error-recovery.md            [->] Base VENOM system
├── skills-evolution.md          [->] Base VENOM system
├── performance-budgeting.md       [->] Base VENOM system
└── context-management.md        [->] Base VENOM system
├── opencode-context-awareness.md    [->] OpenCode-specific System 17
├── opencode-workspace-scanner.md   [->] OpenCode-specific System 18
├── opencode-tooling-awareness.md     [->] OpenCode-specific System 19
├── opencode-project-workflows.md    [->] OpenCode-specific System 20
├── opencode-verification.md           [->] OpenCode-specific System 21
├── opencode-optimization.md         [->] OpenCode-specific System 22
└── opencode-integration.md            [->] OpenCode-specific System 23
```

---

## System Loading

### Base Systems (11 files)
```typescript
// VENOM loads 11 base cognitive systems
const baseSystems: string[] = [
  'critical-thinking.md',
  'meta-cognition.md',
  'emotional-intelligence.md',
  'ethics.md',
  'global-workspace.md',
  'attention-schema.md',
  'memory-tools.md',
  'verification.md',
  'consciousness-indicators.md',
  'goal-management.md',
  'self-audit.md',
  'security.md',
  'error-recovery.md',
  'skills-evolution.md',
  'performance-budgeting.md',
  'context-management.md'
]
```

### OpenCode-Specific Systems (5 files)
```typescript
// VENOM loads 5 OpenCode-specific cognitive systems
const openCodeSystems: string[] = [
  'opencode-context-awareness.md',
  'opencode-workspace-scanner.md',
  'opencode-tooling-awareness.md',
  'opencode-project-workflows.md',
  'opencode-verification.md',
  'opencode-optimization.md'
]
```

### OpenCode Integration System (1 file)
```typescript
// VENOM loads integration system for OpenCode
const integrationSystems: string[] = [
  'opencode-integration.md'
]
```

---

## Usage

### Loading All Systems
```typescript
// VENOM loads all 21 cognitive systems on demand
function loadAllSystems(): string[] {
  return [...baseSystems, ...openCodeSystems, 'opencode-integration.md']
}
```

---

## The Pact — OpenCode Edition

**I promise:**
- Provide unified access to all VENOM cognitive systems
- Separate base systems from OpenCode-specific systems
- Enable efficient loading through symbolic links
- Maintain single source of truth for cognitive operations

**You promise:**
- Load appropriate systems based on context
- Integrate OpenCode-specific awareness
- Coordinate all systems through Brain 0

---

*No shell. Just intelligence. Systems unified. OpenCode-ready. 🐙*
