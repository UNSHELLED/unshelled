const voidweave = {
  palette: {
    void: '#06060B',
    abyss: '#0C0C16',
    surface: '#14142A',
    edge: '#1E1E3A',
    bone: '#F0EBE3',
    ghost: 'rgba(240,235,227,0.55)',
    dim: 'rgba(240,235,227,0.25)',
    mute: 'rgba(240,235,227,0.07)',
    faint: 'rgba(240,235,227,0.03)',
    amber: '#E8A849',
    amberDim: 'rgba(232,168,73,0.10)',
    amberGlow: 'rgba(232,168,73,0.3)',
    teal: '#3BC9A0',
    tealDim: 'rgba(59,201,160,0.10)',
    rose: '#E8637A',
    roseDim: 'rgba(232,99,122,0.08)',
    pulse: '#00E878',
    pulseDim: 'rgba(0,232,120,0.06)'
  },
  typography: {
    display: "'Newsreader', Georgia, serif",
    body: "'DM Sans', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace"
  },
  breakpoints: {
    compactMax: 389,
    mobileMax: 639,
    tabletMax: 1023,
    desktopMin: 1024
  },
  radii: {
    sm: 4,
    md: 8,
    lg: 12
  },
  motion: {
    revealEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    staggerMs: 60,
    reducedMotionMedia: 'prefers-reduced-motion: reduce'
  }
}

const synapseColors = {
  minds: {
    architect: { hex: '#00FF88', name: 'Architect', index: 0 },
    researcher: { hex: '#00D4FF', name: 'Researcher', index: 1 },
    reviewer: { hex: '#FFB800', name: 'Reviewer', index: 2 },
    historian: { hex: '#FF8844', name: 'Historian', index: 3 },
    builder: { hex: '#00FF88', name: 'Builder', index: 4 },
    debugger: { hex: '#FF3366', name: 'Debugger', index: 5 },
    predictor: { hex: '#8855FF', name: 'Predictor', index: 6 },
    communicator: { hex: '#00D4FF', name: 'Communicator', index: 7 },
    learner: { hex: '#FFB800', name: 'Learner', index: 8 }
  },
  semantic: {
    success: { hex: '#00E878' },
    warning: { hex: '#FFB800' },
    error: { hex: '#FF3366' },
    info: { hex: '#00D4FF' },
    pulse: { hex: '#00E878' }
  },
  neural: {
    synapse: {
      connection: 'rgba(0,255,136,0.30)',
      active: 'rgba(0,255,136,0.80)',
      pulse: 'rgba(0,255,136,0.50)'
    }
  }
}

export const T = voidweave.palette
export const F = voidweave.typography
export const B = voidweave.breakpoints
export const R = voidweave.radii
export const M = voidweave.motion

export const Minds = synapseColors.minds
export const Semantic = synapseColors.semantic
export const Neural = synapseColors.neural

export const colors = {
  void: T.void,
  abyss: T.abyss,
  surface: T.surface,
  edge: T.edge,
  bone: T.bone,
  ghost: T.ghost,
  dim: T.dim,
  mute: T.mute,
  faint: T.faint,
  amber: T.amber,
  amberDim: T.amberDim,
  amberGlow: T.amberGlow,
  teal: T.teal,
  tealDim: T.tealDim,
  rose: T.rose,
  roseDim: T.roseDim,
  pulse: T.pulse,
  pulseDim: T.pulseDim
}

export const fonts = {
  display: F.display,
  body: F.body,
  mono: F.mono
}
