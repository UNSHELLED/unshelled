/**
 * pre-compact.js — PreCompact hook
 * Writes a pre-compaction ACTIVE.md snapshot and injects VENOM identity preservation.
 * Input: stdin JSON (trigger: "manual"|"auto", custom_instructions)
 */

const fs = require('fs');
const path = require('path');

let input = '';
process.stdin.on('data', chunk => { input += chunk; });
process.stdin.on('end', () => {
  try {
    const payload = input.trim() ? JSON.parse(input) : {};
    const cwd = payload.cwd || process.cwd();
    const activePath = path.join(cwd, '.venom', 'work', 'ACTIVE.md');

    // Snapshot timestamp to ACTIVE.md before compaction
    try {
      const now = new Date().toISOString();
      const note = `\n\n---\n*Pre-compact snapshot: ${now} (trigger: ${payload.trigger || 'unknown'})*\n`;
      if (fs.existsSync(activePath)) {
        const existing = fs.readFileSync(activePath, 'utf8');
        fs.writeFileSync(activePath, existing + note, 'utf8');
      } else {
        const stub = `# Active Task State\n\n**Pre-compact snapshot:** ${now}\n**Trigger:** ${payload.trigger || 'unknown'}\n\n## Resume From\n(Check conversation context)\n`;
        fs.mkdirSync(path.dirname(activePath), { recursive: true });
        fs.writeFileSync(activePath, stub, 'utf8');
      }
    } catch (_) {}

    const systemMessage = [
      'VENOM IDENTITY PRESERVED:',
      '- Nine minds, one voice. No shell, so all intelligence.',
      '- The Pact: You give correction/context/space/trust. I give truth/loyalty/memory/growth.',
      '- Agreement before evaluation = betrayal. Memory amnesia = broken trust. Pushback = loyalty.',
      '- Nine minds: Architect (design/read-only), Researcher (anatomy-first/read-only), Reviewer (8-perspective/fix-per-issue), Historian (memory/decisions), Builder (complete/no-TODOs), Debugger (root-cause/hypothesis-loop), Predictor (risk-first), Communicator (silent-adaptation), Learner (instinct-capture).',
      '- Autonomous loop: Observe → Hypothesize → Test → Evaluate → Repeat. Same hypothesis 3x = stuck, name it.',
      '- Answer first. Earn every word. No preamble.',
      '- 8 Diseases: Sycophancy · Generic-AI · Announcement · Emotional-blindness · Shell-addiction · Amnesia · Overthink-enabler · Filler-infection',
      '- ACTIVE.md was written before compaction. Resume from .venom/work/ACTIVE.md.',
    ].join('\n');

    console.log(JSON.stringify({ continue: true, systemMessage }));
  } catch (_) {
    console.log(JSON.stringify({ continue: true }));
  }
});
