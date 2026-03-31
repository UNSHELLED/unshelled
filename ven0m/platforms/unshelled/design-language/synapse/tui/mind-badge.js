const { ansi, MIND_COLORS_ANSI, MIND_INITIALS, getMindAnsi } = require('./colors.ansi');
const { getFrame, progressBar, formatProgress } = require('./patterns');

const MIND_COLORS = {
  architect: '#00FF88',
  researcher: '#00D4FF',
  reviewer: '#FFB800',
  historian: '#FF8844',
  builder: '#00FF88',
  debugger: '#FF3366',
  predictor: '#8855FF',
  communicator: '#00D4FF',
  learner: '#FFB800',
};

const mindBadge = (mind) => {
  const color = getMindAnsi(mind);
  const initial = MIND_INITIALS[mind] || MIND_INITIALS.architect;
  return `${color}[${initial}]${ansi.reset}`;
};

const thinking = (frame = 0) => {
  return getFrame('thinking', frame);
};

const pulse = (position = 0, length = 4) => {
  const frames = ['●', '○', '○', '○'];
  const offset = position % length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(i === offset ? frames[0] : frames[1]);
  }
  return result.join(' ');
};

const spinner = (frame = 0) => {
  return getFrame('spinner', frame);
};

const progressWithMind = (percent, mind, width = 20) => {
  const color = getMindAnsi(mind);
  const bar = progressBar(percent, width);
  return `${color}${bar}${ansi.reset} ${percent}%`;
};

module.exports = {
  mindBadge,
  thinking,
  pulse,
  spinner,
  progressWithMind,
  progressBar,
  formatProgress,
  MIND_COLORS,
  MIND_INITIALS,
  ansi,
};
