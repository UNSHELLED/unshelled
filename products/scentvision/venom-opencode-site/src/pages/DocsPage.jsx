import { useParams, Link } from 'react-router-dom'
import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'
import DocsLayout from '../components/docs/DocsLayout'

const docsContent = {
  'getting-started': {
    title: 'Getting Started',
    content: `
## What is VENOM?

VENOM is a thinking partner for OpenCode. It remembers, protects, and builds with discipline.

## First Steps

1. Run \`/venom-init\` in any project
2. This creates \`.venom/\` folder with CONTEXT.md template
3. Fill in your project context
4. VENOM now knows your project

## Your First Command

Try \`/venom-eat\` — it absorbs your codebase and writes a comprehensive CONTEXT.md.

## Key Concepts

- **Answer First**: No preamble. The answer is always first.
- **Memory**: Decisions persist in \`.venom/memory/MEMORY.md\`
- **Safety**: Dangerous commands are blocked automatically
- **Pushback**: VENOM will disagree when quality is at stake
    `,
  },
  'agents': {
    title: 'Agents',
    content: `
## Six Specialists

| Agent | Role | When to Use |
|-------|------|-------------|
| **@venom-architect** | Coordinates, routes | System design questions |
| **@venom-researcher** | Reads before acting | Deep codebase exploration |
| **@venom-reviewer** | Signal from noise | Code review |
| **@venom-debugger** | Root cause analysis | Bug hunting |
| **@venom-explorer** | Fast anatomy scan | Quick navigation |
| **venom-builder** | Implementation | Spawned automatically |

## How to Use

Mention an agent in your message:

\`\`\`
@venom-researcher how does auth work?
\`\`\`

The agent will handle the task with specialized context.
    `,
  },
  'commands': {
    title: 'Commands',
    content: `
## Seven Verbs

| Command | What it Does |
|---------|-------------|
| \`/venom-init\` | Scaffold \`.venom/\` brain |
| \`/venom-eat\` | Absorb project → CONTEXT.md |
| \`/venom-spec\` | Spec-driven feature development |
| \`/venom-build\` | Execute tasks.md wave by wave |
| \`/venom-review\` | 8-perspective code review |
| \`/venom-research\` | Deep codebase exploration |
| \`/venom-check\` | Meta quality gate |

## Lifecycle

\`\`\`
init → eat → spec → build → review → check
\`\`\`
    `,
  },
  'workflows': {
    title: 'Workflows',
    content: `
## Four Choreographies

### venom-spec
Feature development with full spec → plan → tasks → build chain.

### venom-ship
Understand → Clarify → Design → Check → Build → Review

### venom-debug
Observe → Hypothesize → Test → Evaluate → Fix → Prevent

### venom-eat
Shape → Skeleton → Heartbeat → Nerves → Risks → CONTEXT.md

## When to Use Which

- **New feature**: \`/venom-spec [description]\`
- **Quick fix**: Describe the bug naturally
- **Understanding**: \`/venom-eat\`
- **Review**: \`/venom-review\`
    `,
  },
  'memory': {
    title: 'Memory',
    content: `
## How VENOM Remembers

Memory lives in \`.venom/\`:

| File | Purpose |
|------|---------|
| \`MEMORY.md\` | Decisions, patterns, learnings |
| \`corrections.yaml\` | Hard "never again" rules |
| \`CONTEXT.md\` | Project orientation |

## Writing to Memory

VENOM automatically saves:
- **Decisions**: Architectural choices made
- **Patterns**: Repeated observations
- **Corrections**: Hard-won lessons

## Reading Memory

Memory loads progressively:
- \`CONTEXT.md\` — every session
- \`MEMORY.md\` — when relevant
- \`corrections.yaml\` — on risky tasks
    `,
  },
  'safety': {
    title: 'Safety',
    content: `
## Hard Limits

| Limit | Value | Action |
|-------|-------|--------|
| Max tool calls | 200/session | Deny + explain |
| Max file writes | 50/session | Deny + explain |
| Max cost | $5/session | Deny + explain |
| Warning threshold | $1 | Toast notification |

## Auto-Blocked Patterns

- \`rm -rf /\` (not /tmp)
- \`curl ... | bash\`
- Write to \`/dev/sd*\`
- Fork bombs
- Write to \`.env\`, \`.key\`, \`.pem\`

## Loop Detection

If the same tool is called on the same target 3+ times, VENOM blocks and forces a strategy change.
    `,
  },
  'configuration': {
    title: 'Configuration',
    content: `
## opencode.json

\`\`\`json
{
  "model": "zai-coding-plan/glm-5",
  "default_agent": "build",
  "instructions": [
    "AGENTS.md",
    ".venom/CONTEXT.md"
  ],
  "plugin": [".opencode/plugins/venom-core.ts"],
  "permission": {
    "edit": "allow",
    "bash": "ask"
  }
}
\`\`\`

## Key Options

| Option | Description |
|--------|-------------|
| \`instructions\` | Files to load as context |
| \`plugin\` | VENOM plugin path |
| \`permission.edit\` | "allow" or "ask" |
| \`permission.bash\` | "allow" or "ask" |
    `,
  },
}

export default function DocsPage() {
  const { slug } = useParams()
  const doc = docsContent[slug]
  
  usePageTitle(doc?.title || 'Documentation')

  if (!doc) {
    return (
      <div style={{
        padding: '120px 24px',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h1 style={{ fontFamily: fonts.display, fontSize: '2rem', marginBottom: '16px' }}>
          Document not found
        </h1>
        <p style={{ color: colors.ghost }}>
          <Link to="/docs" style={{ color: colors.amber }}>← Back to docs</Link>
        </p>
      </div>
    )
  }

  return (
    <DocsLayout title={doc.title}>
      <div style={{
        '& h2': {
          fontFamily: fonts.display,
          fontSize: '1.5rem',
          fontWeight: 600,
          marginTop: '32px',
          marginBottom: '16px',
          color: colors.bone,
        },
        '& h3': {
          fontSize: '1.125rem',
          fontWeight: 600,
          marginTop: '24px',
          marginBottom: '12px',
        },
        '& p': {
          color: colors.ghost,
          lineHeight: 1.7,
          marginBottom: '16px',
        },
        '& table': {
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '24px',
        },
        '& th, & td': {
          padding: '12px',
          textAlign: 'left',
          borderBottom: `1px solid ${colors.edge}`,
        },
        '& th': {
          fontWeight: 600,
          color: colors.bone,
        },
        '& td': {
          color: colors.ghost,
        },
        '& code': {
          fontFamily: fonts.mono,
          fontSize: '0.875em',
          padding: '2px 6px',
          background: colors.surface,
          borderRadius: '4px',
        },
        '& pre': {
          background: colors.abyss,
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          marginBottom: '24px',
        },
        '& pre code': {
          background: 'transparent',
          padding: 0,
        },
      }}>
        <div dangerouslySetInnerHTML={{ __html: parseMarkdown(doc.content) }} />
      </div>
    </DocsLayout>
  )
}

function parseMarkdown(md) {
  return md
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (m) => m.startsWith('<') ? m : `<p>${m}</p>`)
}
