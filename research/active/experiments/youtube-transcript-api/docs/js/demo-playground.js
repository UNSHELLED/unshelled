/**
 * OCTOPUS Demo Playground
 * Interactive command simulator
 */

class DemoPlayground {
  constructor() {
    this.input = document.getElementById('demo-input');
    this.output = document.getElementById('demo-output');
    this.submitBtn = document.getElementById('demo-submit');
    this.suggestions = document.querySelectorAll('.demo-suggestion');
    this.stateButtons = document.querySelectorAll('.state-btn');
    this.mindIndicators = document.querySelectorAll('.mind-indicator');

    if (!this.input || !this.output) return;

    this.currentState = 'flow'; // frustrated, flow, learning, stuck
    this.history = [];
    this.historyIndex = -1;

    this.responses = this.getResponses();

    // Mind activation mappings for different commands
    this.mindMappings = {
      '/o?': [0, 1, 2, 3, 4, 5, 6, 7, 8], // All minds
      '/o plan': [0, 2, 4, 5, 6],          // Orchestrator, Analyzer, Pattern, Mapper, Predictor
      '/o build': [0, 1, 4, 5, 7],          // Orchestrator, Parser, Pattern, Mapper, Communicator
      '/o fix': [0, 1, 2, 3, 5],            // Orchestrator, Parser, Analyzer, Historian, Mapper
      '/o explain': [0, 7, 8],              // Orchestrator, Communicator, Learner
      '/o refactor': [0, 1, 2, 4],          // Orchestrator, Parser, Analyzer, Pattern
      '/o test': [0, 1, 2, 6],              // Orchestrator, Parser, Analyzer, Predictor
      '/d': [0, 4, 1, 7],                   // Orchestrator, Pattern, Parser, Communicator
      '/r': [0, 1, 2, 4, 5, 6]              // Orchestrator, Parser, Analyzer, Pattern, Mapper, Predictor
    };

    this.init();
  }

  init() {
    // Prefill from URL ?cmd= (e.g. from docs "Run in Demo" link)
    const params = new URLSearchParams(window.location.search);
    const cmd = params.get('cmd');
    if (cmd && this.input) {
      this.input.value = cmd;
      this.input.focus();
    }

    // Submit button
    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.executeCommand());
    }

    // Enter key
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.executeCommand();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.navigateHistory(-1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.navigateHistory(1);
      }
    });

    // Suggestions
    this.suggestions.forEach(btn => {
      btn.addEventListener('click', () => {
        this.input.value = btn.dataset.command;
        this.input.focus();
      });
    });

    // State buttons
    this.stateButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.stateButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        this.currentState = btn.dataset.state;
      });
    });
  }

  executeCommand() {
    const command = this.input.value.trim();
    if (!command) return;

    // Add to history (limit to 50 entries to prevent unbounded growth)
    this.history.push(command);
    if (this.history.length > 50) {
      this.history.shift();
    }
    this.historyIndex = this.history.length;

    // Activate minds based on command
    this.activateMinds(command);

    // Get response (with simulated delay for effect)
    setTimeout(() => {
      const response = this.getResponse(command);
      this.displayResponse(command, response);

      // Deactivate minds after response
      setTimeout(() => this.deactivateAllMinds(), 1500);
    }, 500);

    // Clear input
    this.input.value = '';
  }

  activateMinds(command) {
    const cmd = command.toLowerCase();
    let mindsToActivate = [0]; // Orchestrator always active

    // Find matching mind mapping
    for (const [key, minds] of Object.entries(this.mindMappings)) {
      if (cmd.startsWith(key)) {
        mindsToActivate = minds;
        break;
      }
    }

    // Activate with staggered timing
    mindsToActivate.forEach((mindId, index) => {
      setTimeout(() => {
        const indicator = document.querySelector(`.mind-indicator[data-mind="${mindId}"]`);
        if (indicator) indicator.classList.add('active');
      }, index * 100);
    });
  }

  deactivateAllMinds() {
    this.mindIndicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
  }

  navigateHistory(direction) {
    const newIndex = this.historyIndex + direction;

    if (newIndex >= 0 && newIndex < this.history.length) {
      this.historyIndex = newIndex;
      this.input.value = this.history[newIndex];
    } else if (newIndex >= this.history.length) {
      this.historyIndex = this.history.length;
      this.input.value = '';
    }
  }

  getResponse(command) {
    const cmd = command.toLowerCase().trim();

    // Check realistic DEMO_RESPONSES first (exact or close match)
    const realistic = this.getRealisticResponse(command);
    if (realistic) return this.adaptResponseToState(realistic);

    // Check for exact matches
    for (const [key, value] of Object.entries(this.responses)) {
      if (cmd === key || cmd.startsWith(key + ' ')) {
        return typeof value === 'function' ? value(command, this.currentState) : value;
      }
    }

    // Fallback responses based on command prefix
    if (cmd.startsWith('/o plan')) {
      return this.responses['/o plan'](command, this.currentState);
    } else if (cmd.startsWith('/o fix')) {
      return this.responses['/o fix'](command, this.currentState);
    } else if (cmd.startsWith('/o build')) {
      return this.responses['/o build'](command, this.currentState);
    } else if (cmd.startsWith('/o explain')) {
      return this.responses['/o explain'](command, this.currentState);
    } else if (cmd.startsWith('/d')) {
      return this.responses['/d'](command, this.currentState);
    } else if (cmd.startsWith('/r')) {
      return this.responses['/r'](command, this.currentState);
    } else if (cmd.startsWith('/o')) {
      return this.responses['/o'](command, this.currentState);
    }

    return this.responses['unknown'](command, this.currentState);
  }

  displayResponse(command, response) {
    const responseEl = document.createElement('div');
    responseEl.className = 'demo-response';

    // Get thinking steps based on command
    const thinkingSteps = this.getThinkingSteps(command);

    responseEl.innerHTML = `
      <div class="demo-command">> ${this.escapeHtml(command)}</div>
      ${thinkingSteps ? `<div class="thinking-process">
        <svg class="thinking-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        <span>${thinkingSteps}</span>
      </div>` : ''}
      <div class="demo-result">${this.formatResponse(response)}</div>
    `;

    // Clear welcome message if present
    const welcome = this.output.querySelector('.demo-welcome');
    if (welcome) welcome.remove();

    this.output.appendChild(responseEl);
    this.output.scrollTop = this.output.scrollHeight;
  }

  getThinkingSteps(command) {
    const cmd = command.toLowerCase();

    if (cmd.startsWith('/o?')) {
      return 'Scanning project... Loading learnings... Activating all arms...';
    } else if (cmd.startsWith('/o plan')) {
      return 'Research → Analyze → Map dependencies → Design architecture...';
    } else if (cmd.startsWith('/o fix')) {
      return 'Reproduce → Localize → Root cause → Fix → Prevent...';
    } else if (cmd.startsWith('/o build')) {
      return 'Parse patterns → Match style → Generate code → Validate...';
    } else if (cmd.startsWith('/o explain')) {
      return 'Understand context → Adapt depth → Communicate clearly...';
    } else if (cmd.startsWith('/d')) {
      return 'Scanning design... Extracting patterns... Matching genome...';
    } else if (cmd.startsWith('/r')) {
      return 'DNA check → 8 perspectives → Security → Performance → Report...';
    }

    return null;
  }

  formatResponse(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  getRealisticResponse(command) {
    const cmd = command.toLowerCase().trim();
    const DEMO_RESPONSES = {
      '/o plan user authentication': `**Research & Context**
Found 3 existing auth patterns in codebase:
- JWT tokens (src/auth/jwt.ts)
- Session middleware (src/middleware/session.ts)
- User model (src/models/User.ts)

**Goal**
Implement OAuth 2.0 authentication with JWT tokens

**Architecture**
Will create:
- /src/auth/oauth.service.ts (OAuth flow handler)
- /src/auth/jwt.service.ts (Token generation/validation)
- /src/middleware/oauth.middleware.ts (Route protection)

**Tasks**
1. Install passport and passport-google-oauth20
2. Create OAuth service
3. Add JWT generation
4. Protect routes with middleware
5. Add logout endpoint

**Risks**
- Token expiration needs refresh logic
- Need to handle OAuth callback errors
- Session storage choice affects scalability

Reply \`go\` to start building.`,
      '/o fix typeerror in userservice': `**Problem**
TypeError: Cannot read property 'id' of null
at UserService.getUser (src/services/UserService.ts:45)

**Root Cause**
\`findUserById\` returns null when user not found, but code doesn't check before accessing .id

**Solution**
\`\`\`typescript
// Before (src/services/UserService.ts:44-46)
async getUser(id: string) {
  const user = await this.findUserById(id);
  return { id: user.id, name: user.name };
}

// After
async getUser(id: string) {
  const user = await this.findUserById(id);
  if (!user) throw new Error('User not found');
  return { id: user.id, name: user.name };
}
\`\`\`

**Prevention**
Added null check. Consider:
- Returning Optional<User> type
- Adding ESLint rule for null checks
- Unit test for missing user case

Fixed.`
    };

    for (const [key, text] of Object.entries(DEMO_RESPONSES)) {
      if (cmd.includes(key.replace(/\s+/g, ' '))) return text;
    }
    return null;
  }

  adaptResponseToState(text) {
    if (this.currentState === 'frustrated') {
      const lines = text.split('\n').filter(Boolean);
      return lines.slice(0, 5).join('\n') + '\n\nFixed.';
    }
    if (this.currentState === 'learning' && !text.includes('**Why this happened:**')) {
      return text + '\n\n**Why this happened:**\nContext and edge cases.\n**How to prevent:**\nAdd guards and tests.';
    }
    return text;
  }

  getResponses() {
    return {
      '/o?': (cmd, state) => `**All 9 Arms Active**

**Project:** OCTOPUS Demo
**Structure:** HTML/CSS/JS
**Conventions:** Vanilla JS, CSS Custom Properties

**Learnings Loaded:**
- preferences.yaml: Minimal explanation, direct answers
- project.yaml: Web-first, accessibility focus
- corrections.yaml: No TODOs, complete code only

**Ready.** All arms engaged. What do you need?`,

      '/o plan': (cmd, state) => {
        const task = cmd.replace(/^\/o plan\s*/i, '') || 'user authentication';
        return `**Research Phase**
Scanning codebase for ${task} patterns...
Found: Existing patterns, dependencies mapped

**Plan: ${task}**

**Goal:** Implement ${task} with production quality
**Scope:** Medium (M) - estimated 3-4 files
**Architecture:**
- Core logic module
- UI components
- Integration layer
- Tests

**Tasks:**
1. Research existing patterns ✓
2. Design data structures
3. Implement core logic
4. Create UI components
5. Add tests
6. Document

**Risks:** Scope creep, edge cases

Reply \`go\` to start building.`;
      },

      '/o fix': (cmd, state) => {
        const issue = cmd.replace(/^\/o fix\s*/i, '') || 'the error';
        const stateResponse = {
          frustrated: `**Fixed.**

Problem: ${issue}
Solution: Applied.
Verification: Tests pass.

Done.`,
          flow: `**Chain of Thought:**
1. Read: ${issue}
2. Hypothesize: Missing null check
3. Verify: Confirmed
4. Fix: Added guard clause

Fixed. Moving on.`,
          learning: `**Root Cause Analysis:**

**Problem:** ${issue}

**Investigation:**
1. Reproduced the error
2. Traced execution path
3. Found root cause: Unhandled edge case

**Why this happens:**
When data is undefined, the code assumes it exists.
JavaScript doesn't guard against this automatically.

**Solution:**
Added optional chaining (\`?.\`) and nullish coalescing (\`??\`).

**Prevention:**
- TypeScript strict mode catches this
- Always validate inputs
- Write defensive code

Fixed and documented.`,
          stuck: `**Let me help you debug.**

First, what error message are you seeing?

Common causes for "${issue}":
1. Undefined variable
2. Missing import
3. Async timing issue
4. Type mismatch

Let's narrow it down. Share the error output.`
        };
        return stateResponse[state] || stateResponse.flow;
      },

      '/o build': (cmd, state) => {
        const feature = cmd.replace(/^\/o build\s*/i, '') || 'component';
        return `**Building: ${feature}**

Creating with production standards:
- ✓ Type safety
- ✓ Error handling
- ✓ Edge cases
- ✓ Accessibility
- ✓ Performance

\`\`\`javascript
// ${feature}.js
export function ${feature.replace(/\s+/g, '')}(config) {
  // Full implementation
  // No TODOs, no placeholders
  return result;
}
\`\`\`

**Built.** Files: 1 | Tests: Passing | Ready to use.`;
      },

      '/o explain': (cmd, state) => {
        const topic = cmd.replace(/^\/o explain\s*/i, '') || 'the concept';
        return `**${topic}**

**TL;DR:** ${topic} is a pattern for organizing code behavior.

**How it works:**
1. Define the structure
2. Implement the logic
3. Connect the pieces

**Example:**
\`\`\`javascript
// Simple demonstration
const example = create${topic.replace(/\s+/g, '')}();
\`\`\`

**Key points:**
- Separation of concerns
- Single responsibility
- Testability

**Related:** Similar patterns, best practices`;
      },

      '/o': (cmd, state) => {
        const task = cmd.replace(/^\/o\s*/i, '');
        if (!task) {
          return `**OCTOPUS Active**

Commands:
- \`/o plan [task]\` - Plan complex tasks
- \`/o build [feature]\` - Build with quality
- \`/o fix [issue]\` - Debug and fix
- \`/o explain [topic]\` - Learn concepts
- \`/o?\` - Deep init

What do you need?`;
        }
        return `**Auto-detecting mode...**

Task: "${task}"
Complexity: Simple
Mode: Agent

Executing immediately. Stand by...

Done. Check the output above.`;
      },

      '/d scan': (cmd, state) => `**Design Genome Extracted**

**Colors:**
- Primary: Terracotta \`#e07a5f\`
- Secondary: Salmon \`#ea8b72\`
- Background: \`#0a0a0b\` → \`#1a1a1d\`
- Text: \`#f0eeeb\` → \`#5a5856\`

**Typography:**
- Headings: Sora (700-800)
- Body: Sora (400-500)
- Code: JetBrains Mono

**Spacing:**
- Scale: 4px base (0.25rem increments)
- Sections: 6-8rem padding

**Radius:**
- sm: 6px | md: 10px | lg: 14px | xl: 20px

**Motion:**
- Duration: 150-600ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

Genome saved. Ready to generate matching components.`,

      '/d': (cmd, state) => {
        const subCmd = cmd.replace(/^\/d\s*/i, '');
        return `**Design Mode**

Available commands:
- \`/d scan\` - Extract design DNA
- \`/d page [type] [name]\` - Create page
- \`/d component [name]\` - Create component
- \`/d check\` - Validate design

${subCmd ? `
Executing: /d ${subCmd}...
Design operation complete.` : 'What would you like to design?'}`;
      },

      '/r': (cmd, state) => `**Full Review: 8-Perspective Analysis**

**1. Correctness** ✓
Logic verified, edge cases handled

**2. Security** ✓
Inputs sanitized, no exposed secrets

**3. Performance** ⚠️
Consider memoization for heavy computations

**4. Readability** ✓
Clear naming, logical flow

**5. Maintainability** ✓
Single responsibility, DRY

**6. Consistency** ✓
Matches project patterns

**7. Testability** ⚠️
Add unit tests for new functions

**8. Completeness** ✓
All requirements met

**Verdict:** APPROVE with suggestions
- Add tests for edge cases
- Consider performance optimization

Ready to merge.`,

      'unknown': (cmd, state) => `Command not recognized: \`${cmd}\`

Try:
- \`/o\` - Workflow orchestration
- \`/d\` - Design intelligence
- \`/r\` - Full review
- \`/o?\` - Deep init

Or just describe what you need.`
    };
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.demoPlayground = new DemoPlayground();
  });
} else {
  window.demoPlayground = new DemoPlayground();
}
