const ansi = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  
  void: {
    bg: '\x1b[48;5;232m',
    fg: '\x1b[38;5;232m',
  },
  
  venom: '\x1b[38;5;84m',
  synapse: '\x1b[38;5;45m',
  warning: '\x1b[38;5;220m',
  error: '\x1b[38;5;197m',
  calm: '\x1b[38;5;141m',
  
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
};

const MIND_COLORS_ANSI = {
  architect: '\x1b[38;5;84m',
  researcher: '\x1b[38;5;45m',
  reviewer: '\x1b[38;5;220m',
  historian: '\x1b[38;5;208m',
  builder: '\x1b[38;5;84m',
  debugger: '\x1b[38;5;197m',
  predictor: '\x1b[38;5;141m',
  communicator: '\x1b[38;5;45m',
  learner: '\x1b[38;5;220m',
};

const MIND_INITIALS = {
  architect: 'A',
  researcher: 'R',
  reviewer: 'V',
  historian: 'H',
  builder: 'B',
  debugger: 'D',
  predictor: 'P',
  communicator: 'C',
  learner: 'L',
};

const getMindAnsi = (mind) => {
  return MIND_COLORS_ANSI[mind] || MIND_COLORS_ANSI.architect;
};

module.exports = {
  ansi,
  MIND_COLORS_ANSI,
  MIND_INITIALS,
  getMindAnsi,
};
