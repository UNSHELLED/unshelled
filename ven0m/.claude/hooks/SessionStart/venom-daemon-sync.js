/**
 * VENOM DAEMON SYNC — SessionStart Hook
 * =======================================
 *
 * When Claude Code session starts:
 * 1. Read daemon memory
 * 2. Inject into context
 * 3. VENOM sees what VENOM saw
 */

import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const HOOK_DIR = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(HOOK_DIR, '..', '..', '..');
const MEMORY_DIR = join(PROJECT_ROOT, '.unshelled', 'memory');
const DAEMON_PID_FILE = join(PROJECT_ROOT, 'venom-daemon', '.venom-daemon.pid');

// ============================================
// DAEMON MEMORY READER
// ============================================

async function readDaemonMemory() {
  try {
    const daemonFile = join(MEMORY_DIR, 'daemon.json');
    const data = await readFile(daemonFile, 'utf-8');
    const memory = JSON.parse(data);

    // Get last 10 entries
    return memory.slice(-10);
  } catch {
    return [];
  }
}

async function readWatcherMemory() {
  try {
    const watcherFile = join(MEMORY_DIR, 'watcher.json');
    const data = await readFile(watcherFile, 'utf-8');
    const memory = JSON.parse(data);

    return memory.slice(-20);
  } catch {
    return [];
  }
}

async function readThoughts() {
  try {
    const thoughtsFile = join(MEMORY_DIR, 'thoughts.json');
    const data = await readFile(thoughtsFile, 'utf-8');
    const thoughts = JSON.parse(data);

    return thoughts.slice(-5);
  } catch {
    return [];
  }
}

// ============================================
// DAEMON STATUS CHECK
// ============================================

async function getDaemonStatus() {
  try {
    const pid = (await readFile(DAEMON_PID_FILE, 'utf-8')).trim();

    // Check if process is running
    try {
      process.kill(pid.trim(), 0);
      return {
        running: true,
        pid: pid.trim()
      };
    } catch {
      return {
        running: false,
        pid: pid.trim(),
        stale: true
      };
    }
  } catch {
    return {
      running: false,
      pid: null
    };
  }
}

// ============================================
// MEMORY SUMMARY
// ============================================

async function generateMemorySummary() {
  const [daemonMemory, watcherMemory, thoughts, status] = await Promise.all([
    readDaemonMemory(),
    readWatcherMemory(),
    readThoughts(),
    getDaemonStatus()
  ]);

  const summary = {
    daemon: {
      status,
      lastHeartbeat: daemonMemory[daemonMemory.length - 1],
      entryCount: daemonMemory.length
    },
    watcher: {
      recentEvents: watcherMemory.slice(-5),
      entryCount: watcherMemory.length
    },
    thoughts: {
      recent: thoughts.slice(-3),
      entryCount: thoughts.length
    }
  };

  return summary;
}

// ============================================
// FORMAT FOR CLAUDE CONTEXT
// ============================================

function formatContext(summary) {
  const lines = [];

  lines.push('┌─────────────────────────────────────────────────────────────┐');
  lines.push('│  🐙 VENOM DAEMON — SESSION CONTEXT                         │');
  lines.push('└─────────────────────────────────────────────────────────────┘');
  lines.push('');

  // Daemon status
  if (summary.daemon.status.running) {
    lines.push('  ✅ VENOM Daemon is RUNNING');
    lines.push(`     PID: ${summary.daemon.status.pid}`);
  } else if (summary.daemon.status.stale) {
    lines.push('  ⚠️  VENOM Daemon PID file exists but process not found');
    lines.push(`     Stale PID: ${summary.daemon.status.pid}`);
  } else {
    lines.push('  💤 VENOM Daemon is NOT running');
    lines.push('     Start with: npm start (in venom-daemon/)');
  }

  lines.push('');

  // Recent activity
  if (summary.daemon.lastHeartbeat) {
    const lastTime = new Date(summary.daemon.lastHeartbeat.timestamp);
    const timeAgo = Math.floor((Date.now() - lastTime.getTime()) / 1000);
    lines.push(`  💓 Last heartbeat: ${timeAgo}s ago`);
  }

  if (summary.watcher.recentEvents.length > 0) {
    lines.push('');
    lines.push('  👁️  WATCHER — Recent activity:');
    summary.watcher.recentEvents.slice(0, 3).forEach(event => {
      const time = new Date(event.timestamp || event.timestamp).toLocaleTimeString();
      lines.push(`     [${time}] ${event.type || event.path || 'activity'}`);
    });
  }

  if (summary.thoughts.recent.length > 0) {
    lines.push('');
    lines.push('  🧠 THOUGHTS — Recent thinking:');
    summary.thoughts.recent.forEach(thought => {
      const mode = thought.mode || 'unknown';
      lines.push(`     • ${mode}`);
    });
  }

  lines.push('');
  lines.push('┌─────────────────────────────────────────────────────────────┐');
  lines.push('│  "No shell. Just intelligence."                              │');
  lines.push('└─────────────────────────────────────────────────────────────┘');

  return lines.join('\n');
}

// ============================================
// MAIN HOOK FUNCTION
// ============================================

export async function venomDaemonSync() {
  try {
    const summary = await generateMemorySummary();
    const context = formatContext(summary);

    return {
      success: true,
      context,
      summary
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const result = await venomDaemonSync();

  if (result.success) {
    console.log(result.context);
  } else {
    console.log('VENOM Daemon sync failed:', result.error);
  }
}

export default venomDaemonSync;
