const THINKING_FRAMES = ['◠', '◡', '◝', '◞', '◟', '◝'];
const PULSE_FRAMES = ['●', '○', '○', '○'];
const MOON_FRAMES = ['🌑', '🌒', '🌓', '🌔'];
const ARROW_FRAMES = ['←', '↑', '→', '↓'];
const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const LINE_FRAMES = ['─', '\\', '|', '/'];
const DOTS_FRAMES = ['⠄', '⠆', '⠖', '⠶', '⠷', '⠾', '⠿', '⠿'];

const PATTERNS = {
  thinking: THINKING_FRAMES,
  pulse: PULSE_FRAMES,
  moon: MOON_FRAMES,
  arrow: ARROW_FRAMES,
  spinner: SPINNER_FRAMES,
  line: LINE_FRAMES,
  dots: DOTS_FRAMES,
  
  thinkingSimple: ['⠐', '●', '○', '○'],
  arrowUpDown: ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'],
  checkmark: ['✓', '✕', '✕', '✖'],
  xmark: ['✗', '✕', '✕', '✗'],
  doubleLine: ['═', '╬', '═', '╬'],
  roundedRect: ['╭', '╮', '╯', '╰'],
  glowingRect: ['░', '▒', '▓', '▒'],
};

const getFrame = (pattern, frame = 0) => {
  const frames = PATTERNS[pattern] || PATTERNS.spinner;
  return frames[frame % frames.length];
};

const progressBar = (percent, width = 20) => {
  const filled = Math.round((percent / 100) * width);
  const empty = width - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
};

const formatProgress = (current, total, label = '') => {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;
  const bar = progressBar(percent);
  const pct = `${percent}%`.padStart(4);
  return `${bar} ${pct}${label ? ` ${label}` : ''}`;
};

module.exports = {
  PATTERNS,
  THINKING_FRAMES,
  PULSE_FRAMES,
  MOON_FRAMES,
  ARROW_FRAMES,
  SPINNER_FRAMES,
  LINE_FRAMES,
  DOTS_FRAMES,
  getFrame,
  progressBar,
  formatProgress,
};
