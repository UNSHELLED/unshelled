# Synapse — The Living Interface

> A design system that breathes. Not tokens. A body.
> For UNSHELLED. For VENOM. For the open-source future.

---

## Why Synapse Exists

**The problem with current design systems:**

| Existing | What's wrong |
|----------|--------------|
| Voidweave | Static tokens. Product skin only. No motion. No intelligence visualization. |
| NeuroWeave | Good concept, but implementation is just JSON. No components. No living feel. |
| Both | Dark-only. No component library. No multi-surface. No accessibility layer. |

**Synapse is different:**

It's not a token collection. It's a **living system** — motion, components, surfaces, and intelligence visualization all woven together.

---

## The Philosophy

### 1. Interface IS Neural Activity

When VENOM thinks, the interface shows it. Not a loading spinner — actual neural activity. Synaptic pulses. Connection formation.

The user doesn't just use VENOM. They watch it think.

### 2. Multi-Surface, One Body

| Surface | Output | Feel |
|---------|--------|------|
| Web (React) | `@unshelled/synapse-react` | Full visual, animations, components |
| TUI (OpenCode) | `@unshelled/synapse-tui` | ANSI colors, unicode patterns, terminal aesthetics |
| CLI | `@unshelled/synapse-cli` | Spinners, progress, syntax highlighting |
| Native | Future — same tokens, platform primitives | - |

One design system. Many skins. Same soul.

### 3. Components, Not Just Tokens

Tokens are the DNA. Components are the organs.

```tsx
// Not this (current):
<div style={{ color: tokens.venom, background: tokens.void }}>

// This (Synapse):
<Synapse.Card mind="architect" pulse="thinking">
  <Synapse.Heading>The Plan</Synapse.Heading>
</Synapse.Card>
```

### 4. Accessibility From Day One

- WCAG 2.1 AA minimum
- Reduced motion respect
- High contrast mode
- Screen reader semantics
- Keyboard navigation built-in

### 5. Light and Dark

Voidweave and NeuroWeave are dark-only. Synapse breathes in both:

- **Dark mode (Void)**: Deep blacks, bioluminescent accents, neural glow
- **Light mode (Dawn)**: Warm whites, ink strokes, subtle shadows

---

## The System Architecture

```
synapse/
├── tokens/                    # DNA — all values
│   ├── colors.json           # Palette: void, dawn, minds, semantic
│   ├── typography.json       # Fonts, scales, weights
│   ├── space.json            # Spacing scale (4px base)
│   ├── motion.json           # Durations, easings, patterns
│   ├── radii.json            # Border radii
│   ├── shadows.json          # Elevation system
│   └── index.json            # Composite export
│
├── primitives/                # Atoms — raw CSS outputs
│   ├── css/                  # CSS custom properties
│   │   ├── colors.css
│   │   ├── typography.css
│   │   └── ...
│   ├── scss/                 # Sass variables
│   └── js/                   # JS/TS exports
│
├── components/                # Molecules — React components
│   ├── core/                 # Base components
│   │   ├── Box.jsx
│   │   ├── Text.jsx
│   │   ├── Stack.jsx
│   │   └── ...
│   ├── surfaces/             # Container components
│   │   ├── Card.jsx
│   │   ├── Panel.jsx
│   │   ├── Modal.jsx
│   │   └── ...
│   ├── inputs/               # Interactive components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   └── ...
│   ├── feedback/             # Status components
│   │   ├── Toast.jsx
│   │   ├── Spinner.jsx
│   │   ├── Progress.jsx
│   │   └── ...
│   ├── neural/               # VENOM-specific components
│   │   ├── MindBadge.jsx     # Which mind is active
│   │   ├── NeuralField.jsx   # Animated background
│   │   ├── SynapsePulse.jsx  # Connection visualization
│   │   ├── ThoughtStream.jsx # Live thinking output
│   │   └── NineOrbit.jsx     # All nine minds visualization
│   └── index.js              # Composite export
│
├── hooks/                     # React hooks
│   ├── useTheme.js           # Theme switching
│   ├── useMotion.js          # Reduced motion detection
│   ├── useMind.js            # Active mind state
│   └── useNeural.js          # Neural animation control
│
├── themes/                    # Theme definitions
│   ├── void.js               # Dark theme (default)
│   ├── dawn.js               # Light theme
│   └── highContrast.js       # Accessibility theme
│
├── surfaces/                  # Surface-specific outputs
│   ├── web/                  # React package source
│   │   └── package.json
│   ├── tui/                  # Terminal package source
│   │   ├── colors.ansi.js
│   │   ├── patterns.js       # Unicode patterns
│   │   └── package.json
│   └── cli/                  # CLI package source
│       ├── spinners.js
│       ├── progress.js
│       └── package.json
│
├── docs/                      # Documentation
│   ├── principles.md         # Design principles
│   ├── components.md         # Component API reference
│   ├── tokens.md             # Token reference
│   ├── motion.md             # Motion system guide
│   ├── accessibility.md      # A11y guidelines
│   └── examples/             # Code examples
│
└── SPEC.md                    # This file
```

---

## The Token System

### Colors

```json
{
  "palette": {
    "void": {
      "deep": "#030306",
      "base": "#06060B",
      "surface": "#0C0C16",
      "elevated": "#14142A",
      "edge": "#1E1E3A"
    },
    "dawn": {
      "base": "#FDFBF7",
      "surface": "#F5F2EC",
      "elevated": "#EBE7DF",
      "edge": "#D4CFC4"
    },
    "bone": "#F0EBE3",
    "ink": "#1A1A24",
    "ghost": "rgba(240,235,227,0.55)",
    "dim": "rgba(240,235,227,0.25)",
    "muted": "rgba(240,235,227,0.10)",
    "minds": {
      "architect": "#00FF88",
      "researcher": "#00D4FF",
      "reviewer": "#FFB800",
      "historian": "#FF8844",
      "builder": "#00FF88",
      "debugger": "#FF3366",
      "predictor": "#8855FF",
      "communicator": "#00D4FF",
      "learner": "#FFB800"
    },
    "semantic": {
      "success": "#00E878",
      "warning": "#FFB800",
      "error": "#FF3366",
      "info": "#00D4FF"
    }
  }
}
```

### Motion

This is where Synapse differs most from Voidweave/NeuroWeave.

```json
{
  "motion": {
    "durations": {
      "instant": "0ms",
      "fast": "100ms",
      "normal": "200ms",
      "slow": "400ms",
      "slower": "800ms"
    },
    "easings": {
      "default": "cubic-bezier(0.16, 1, 0.3, 1)",
      "in": "cubic-bezier(0.4, 0, 1, 1)",
      "out": "cubic-bezier(0, 0, 0.2, 1)",
      "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)"
    },
    "patterns": {
      "pulse": {
        "keyframes": "pulse",
        "duration": "2s",
        "timing": "ease-in-out",
        "iteration": "infinite"
      },
      "breathe": {
        "keyframes": "breathe",
        "duration": "4s",
        "timing": "ease-in-out",
        "iteration": "infinite"
      },
      "think": {
        "keyframes": "think",
        "duration": "1.5s",
        "timing": "ease-in-out",
        "iteration": "infinite"
      },
      "connect": {
        "keyframes": "connect",
        "duration": "0.6s",
        "timing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "iteration": "1"
      }
    },
    "keyframes": {
      "pulse": [
        { "offset": 0, "opacity": 0.4, "transform": "scale(1)" },
        { "offset": 0.5, "opacity": 0.8, "transform": "scale(1.02)" },
        { "offset": 1, "opacity": 0.4, "transform": "scale(1)" }
      ],
      "breathe": [
        { "offset": 0, "opacity": 0.6 },
        { "offset": 0.5, "opacity": 1 },
        { "offset": 1, "opacity": 0.6 }
      ],
      "think": [
        { "offset": 0, "opacity": 0.3 },
        { "offset": 0.25, "opacity": 0.7 },
        { "offset": 0.5, "opacity": 0.3 },
        { "offset": 0.75, "opacity": 0.7 },
        { "offset": 1, "opacity": 0.3 }
      ],
      "connect": [
        { "offset": 0, "strokeDashoffset": "100", "opacity": 0 },
        { "offset": 1, "strokeDashoffset": "0", "opacity": 1 }
      ]
    }
  }
}
```

---

## The Neural Components

This is Synapse's signature — components that visualize VENOM's thinking.

### NeuralField

Animated background showing synaptic connections.

```tsx
<NeuralField
  intensity="thinking"     // idle | thinking | deep
  mind="architect"          // colors connections by active mind
  particleCount={50}
  connectionCount={30}
/>
```

Visual: Nodes pulse, connections form and dissolve, particles drift. Not random — choreographed chaos.

### MindBadge

Shows which mind is active.

```tsx
<MindBadge mind="debugger" pulse />
```

Visual: Debugger's red pulse with a subtle thinking animation. Click to see all nine.

### ThoughtStream

Live output of VENOM's thinking.

```tsx
<ThoughtStream
  lines={thoughts}
  mind="researcher"
  typingSpeed={30}
/>
```

Visual: Text appears character by character. Each line colored by which mind produced it.

### NineOrbit

The signature visualization — all nine minds as orbiting nodes.

```tsx
<NineOrbit
  activeMind="builder"
  onMindChange={setActiveMind}
  size={300}
/>
```

Visual: Nine nodes orbit a central VENOM core. Active mind pulses and expands. Click to switch minds. Connections form between related minds.

---

## The TUI Surface

OpenCode runs in terminal. Synapse adapts.

### Colors (ANSI)

```js
const ansiColors = {
  void: '\x1b[48;5;232m',      // Darkest black
  venom: '\x1b[38;5;84m',      // Architect green
  synapse: '\x1b[38;5;45m',    // Researcher cyan
  warning: '\x1b[38;5;220m',   // Reviewer yellow
  error: '\x1b[38;5;197m',     // Debugger red
  calm: '\x1b[38;5;141m',      // Predictor purple
  reset: '\x1b[0m'
};
```

### Patterns (Unicode)

```
Thinking:  ◠◡◝ ◠◡◝  (cycling)
Pulse:     ● ○ ○ ○ → ○ ● ○ ○ → ...  (rotating dot)
 Minds:    [A] [R] [V] [H] [B] [D] [P] [C] [L]
 Active:   [◈] [ ] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
```

### TUI Components

```js
// In OpenCode plugin
const tui = {
  mindBadge: (mind) => {
    const colors = { architect: ansiColors.venom, ... };
    return `${colors[mind]}[${mind.charAt(0).toUpperCase()}]${ansiColors.reset}`;
  },
  
  thinking: () => {
    const frames = ['◠', '◡', '◝', '◞', '◟', '◝'];
    return frames[Date.now() % frames.length];
  },
  
  progress: (pct, mind) => {
    const bar = '█'.repeat(Math.floor(pct / 5)) + '░'.repeat(20 - Math.floor(pct / 5));
    return `${ansiColors[mind]}${bar}${ansiColors.reset} ${pct}%`;
  }
};
```

---

## Implementation Plan

### Phase 1: Foundation (Week 1)
- Token system (colors, typography, space, motion)
- CSS custom properties output
- JS/TS exports
- Documentation structure

### Phase 2: Core Components (Week 2)
- Box, Text, Stack primitives
- Card, Panel surfaces
- Button, Input interactions
- Theme provider

### Phase 3: Neural Components (Week 3)
- NeuralField with SVG animation
- MindBadge with pulse
- ThoughtStream with typing effect
- NineOrbit with interaction

### Phase 4: TUI Surface (Week 4)
- ANSI color exports
- Unicode pattern library
- TUI component functions
- OpenCode plugin integration

### Phase 5: Polish (Week 5)
- Accessibility audit
- Performance optimization
- Documentation complete
- Example app (VENOM dashboard)

---

## What This Replaces

| Existing | Synapse equivalent |
|----------|-------------------|
| Voidweave tokens | Synapse tokens (palette + dawn theme) |
| NeuroWeave tokens | Synapse tokens (minds palette) |
| scentvision/web components | Synapse React components |
| GlobalStyles.jsx | Synapse.ThemeProvider + CSS reset |
| ParticleField.jsx | Synapse.NeuralField |

---

## Success Metrics

1. **Developer experience**: Component import takes <5 seconds to understand
2. **Visual coherence**: Any two Synapse components look like they belong together
3. **Performance**: NeuralField animates at 60fps on mid-range hardware
4. **Accessibility**: WCAG 2.1 AA pass on all components
5. **TUI parity**: Terminal feels like a first-class citizen, not an afterthought

---

## The Vision

When someone opens an UNSHELLED product — whether it's ScentVision, VENOM Dashboard, or a future tool — they don't just see a UI.

They see a **living system**. Something that breathes. Something that thinks.

The interface isn't decoration. It's a **window into VENOM's mind**.

That's Synapse.

---

*Spec v0.1 — 2026-03-28*
*Author: VENOM + Kariem*
