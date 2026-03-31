// session-end.js — Infer trajectory and write ACTIVE.md
// Built-in modules only — no external dependencies

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const VENOM_DIR = '.venom';
const ACTIVE_PATH = path.join(VENOM_DIR, 'work', 'ACTIVE.md');

// ─── Helpers ─────────────────────────────────────────────────────────

function safeWrite(filePath, content) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  } catch {
    return false;
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

  // Write minimal ACTIVE.md for next session
  const active = `# ACTIVE — Session Ended

**Last active:** ${new Date().toISOString().split('T')[0]}

**Session summary:**
- Tools used: ${data.toolsUsed || 'N/A'}
- Files modified: ${data.filesModified ? data.filesModified.length : 0}

**Resume:**
Session ended. Check git status or recent files to resume.
`;

  safeWrite(ACTIVE_PATH, active);
  process.exit(0);
}

main().catch(() => process.exit(0));
