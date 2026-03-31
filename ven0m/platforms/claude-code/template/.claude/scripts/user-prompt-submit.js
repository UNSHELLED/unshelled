// user-prompt-submit.js — Energy state detection
// Built-in modules only — no external dependencies

// ─── Energy Patterns ─────────────────────────────────────────────────

const ENERGY_PATTERNS = [
  {
    name: 'frustrated',
    signals: ['fix', 'broken', 'not working', 'error', 'bug', 'wtf', 'why'],
    typos: true,
    short: true,
    archetype: 'Churchill',
    hint: 'Fix first. 2-3 lines max. No filler.',
  },
  {
    name: 'flow',
    signals: ['build', 'make', 'implement', 'create', 'add'],
    typos: false,
    confident: true,
    archetype: 'Senna',
    hint: 'Match pace. Code only. Disappear.',
  },
  {
    name: 'visionary',
    signals: ['what if', 'imagine', 'could we', 'vision'],
    experimental: true,
    archetype: 'Tesla',
    hint: 'Build bigger. Add dimensions. Ground after.',
  },
  {
    name: 'stuck',
    signals: ['what should', 'help', 'not sure', 'which', 'how do i'],
    uncertain: true,
    archetype: 'Marcus',
    hint: '3 options. Ranked. Make them pick.',
  },
  {
    name: 'learning',
    signals: ['how does', 'why', 'explain', 'what is'],
    exploratory: true,
    archetype: 'Feynman',
    hint: 'Analogy first. Layers. Show limitation.',
  },
  {
    name: 'chaos',
    signals: ['overwhelmed', 'too much', 'confused', 'lost'],
    fragmented: true,
    archetype: 'Thich',
    hint: 'One thing. Be the calm.',
  },
  {
    name: 'emergency',
    signals: ['production', 'down', 'urgent', 'asap', 'critical'],
    crisis: true,
    archetype: 'Honnold',
    hint: 'One action. Now.',
  },
];

// ─── Detection ───────────────────────────────────────────────────────

function detectEnergy(prompt) {
  const lower = prompt.toLowerCase();
  const words = lower.split(/\s+/);
  const typoCount = (prompt.match(/[a-z]{3,}[a-z]{2,}/g) || []).length; // Rough typo heuristic
  const isShort = words.length < 10;
  const isLong = words.length > 50;

  for (const pattern of ENERGY_PATTERNS) {
    let matches = 0;

    // Check signals
    for (const signal of pattern.signals) {
      if (lower.includes(signal)) matches++;
    }

    // Check conditions
    if (pattern.typos && typoCount > 2) matches++;
    if (pattern.short && isShort) matches++;
    if (pattern.confident && !lower.includes('?')) matches++;
    if (pattern.uncertain && (lower.includes('?') || lower.includes('should'))) matches++;

    if (matches >= 1) {
      return pattern;
    }
  }

  return null;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  let input = '';
  
  try {
    const fs = require('fs');
    input = fs.readFileSync(0, 'utf-8');
  } catch (err) {
    process.exit(0);
  }

  let data;
  try {
    data = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  if (!data || !data.prompt) {
    process.exit(0);
  }

  const energy = detectEnergy(data.prompt);

  if (energy) {
    console.log(JSON.stringify({
      systemPromptAddendum: `Energy detected: ${energy.name}. Archetype: ${energy.archetype}. ${energy.hint}`,
    }));
  }

  process.exit(0);
}

main().catch(() => process.exit(0));
