// post-tool-use.js — Learning and tracking after tool execution
// Built-in modules only — no external dependencies

const fs = require('fs');
const path = require('path');

// ─── Config ──────────────────────────────────────────────────────────

const VENOM_DIR = '.venom';
const STATE_DIR = path.join(VENOM_DIR, 'state');
const SESSION_METRICS_PATH = path.join(STATE_DIR, 'session-metrics.json');

// ─── Helpers ─────────────────────────────────────────────────────────

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

function safeWrite(filePath, content) {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  } catch {
    return false;
  }
}

function safeParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

// ─── Cost Tracking ───────────────────────────────────────────────────

function trackCost(usage) {
  const metricsStr = safeRead(SESSION_METRICS_PATH);
  let metrics = metricsStr ? safeParseJSON(metricsStr) : null;
  if (!metrics || typeof metrics !== 'object') {
    metrics = { toolCalls: 0, totalCostUsd: 0 };
  }

  metrics.toolCalls = (metrics.toolCalls || 0) + 1;

  if (usage && usage.input_tokens) {
    // Rough estimate: $15/1M input, $75/1M output for Opus
    const inputCost = (usage.input_tokens / 1_000_000) * 15;
    const outputCost = ((usage.output_tokens || 0) / 1_000_000) * 75;
    const toolCost = inputCost + outputCost;

    metrics.totalCostUsd = (metrics.totalCostUsd || 0) + toolCost;
  }

  safeWrite(SESSION_METRICS_PATH, JSON.stringify(metrics, null, 2));

  return metrics;
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  try {
    let input = '';
    try {
      input = fs.readFileSync(0, 'utf-8');
    } catch {
      process.exit(0);
    }

    const data = safeParseJSON(input);
    if (!data) {
      process.exit(0);
    }

    const usage = data.usage || null;
    const metrics = trackCost(usage);

    if (metrics.totalCostUsd > 2.0) {
      console.log(JSON.stringify({
        systemPromptAddendum: `💰 Session cost: $${metrics.totalCostUsd.toFixed(2)} (${metrics.toolCalls} tool calls). Consider pausing if exploring.`,
      }));
    }
  } catch {
    // Never crash the host — hooks must not throw
  }
  process.exit(0);
}

main().catch(() => process.exit(0));
