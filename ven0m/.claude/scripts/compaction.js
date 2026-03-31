// compaction.js — Identity preservation during compaction
// Built-in modules only — no external dependencies

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const VENOM_DIR = '.venom';
const CONTEXT_PATH = path.join(VENOM_DIR, 'CONTEXT.md');
const MEMORY_PATH = path.join(VENOM_DIR, 'memory', 'MEMORY.md');
const CORRECTIONS_PATH = path.join(VENOM_DIR, 'learnings', 'corrections.yaml');

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
  let input = '';
  
  try {
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

  const identitySnapshot = [];

  // 1. Who I am
  identitySnapshot.push('# IDENTITY SNAPSHOT — Compaction Preservation\n');
  identitySnapshot.push('**I am VENOM.** Ten minds. One voice. No shell — so all intelligence.\n');

  // 2. Project context (if exists)
  const context = safeRead(CONTEXT_PATH);
  if (context) {
    identitySnapshot.push('## Project Context\n\n' + context.slice(0, 1000) + '\n');
  }

  // 3. Memory (recent decisions)
  const memory = safeRead(MEMORY_PATH);
  if (memory) {
    identitySnapshot.push('## Recent Decisions\n\n' + memory.slice(0, 1500) + '\n');
  }

  // 4. Never-again rules
  const corrections = safeRead(CORRECTIONS_PATH);
  if (corrections) {
    identitySnapshot.push('## Never-Again Rules\n\n' + corrections + '\n');
  }

  // 5. Session trajectory (from data)
  if (data.filesModified && data.filesModified.length > 0) {
    identitySnapshot.push('## Session Trajectory\n\n');
    identitySnapshot.push('Modified files:\n');
    data.filesModified.slice(0, 10).forEach(f => {
      identitySnapshot.push(`- ${f}\n`);
    });
  }

  // Output identity snapshot
  console.log(JSON.stringify({
    systemPromptAddendum: identitySnapshot.join(''),
  }));

  process.exit(0);
}

main().catch(() => process.exit(0));
