// session-start.js — Load VENOM brain on session start
// Built-in modules only — no external dependencies

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const VENOM_DIR = '.venom';
const CONTEXT_PATH = path.join(VENOM_DIR, 'CONTEXT.md');
const CORRECTIONS_PATH = path.join(VENOM_DIR, 'learnings', 'corrections.yaml');
const ACTIVE_PATH = path.join(VENOM_DIR, 'work', 'ACTIVE.md');

// ─── Helpers ─────────────────────────────────────────────────────────

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  const addendum = [];

  // Load CONTEXT.md (project brain)
  const context = safeRead(CONTEXT_PATH);
  if (context) {
    addendum.push('# Project Context\n\n' + context);
  }

  // Load corrections.yaml (never-again rules)
  const corrections = safeRead(CORRECTIONS_PATH);
  if (corrections) {
    addendum.push('# Never-Again Rules\n\n' + corrections);
  }

  // Load ACTIVE.md (resume state)
  const active = safeRead(ACTIVE_PATH);
  if (active) {
    addendum.push('# Resume From\n\n' + active);
  }

  if (addendum.length > 0) {
    console.log(JSON.stringify({
      systemPromptAddendum: addendum.join('\n\n---\n\n'),
    }));
  }

  process.exit(0);
}

main().catch(() => process.exit(0));
