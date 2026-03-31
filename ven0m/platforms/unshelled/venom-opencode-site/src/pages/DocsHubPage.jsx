import { Link } from 'react-router-dom'
import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'
import DocsCard from '../components/docs/DocsCard'

const docCategories = [
  {
    title: 'Getting Started',
    description: 'Your first 5 minutes with VENOM',
    slug: 'getting-started',
    icon: '🚀',
  },
  {
    title: 'Agents',
    description: 'Six specialists and when to use them',
    slug: 'agents',
    icon: '🧠',
  },
  {
    title: 'Commands',
    description: 'Seven verbs to control VENOM',
    slug: 'commands',
    icon: '⚡',
  },
  {
    title: 'Workflows',
    description: 'Four choreographies for complex tasks',
    slug: 'workflows',
    icon: '🔄',
  },
  {
    title: 'Memory',
    description: 'How VENOM remembers across sessions',
    slug: 'memory',
    icon: '💾',
  },
  {
    title: 'Safety',
    description: 'Limits, gates, and protection systems',
    slug: 'safety',
    icon: '🛡️',
  },
  {
    title: 'Configuration',
    description: 'Customize VENOM for your workflow',
    slug: 'configuration',
    icon: '⚙️',
  },
]

export default function DocsHubPage() {
  usePageTitle('Documentation')

  return (
    <div style={{
      padding: '120px 24px 80px',
      maxWidth: '1000px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: fonts.display,
        fontSize: '2.5rem',
        fontWeight: 600,
        marginBottom: '16px',
      }}>
        Documentation
      </h1>
      
      <p style={{
        fontSize: '1.125rem',
        color: colors.ghost,
        marginBottom: '48px',
      }}>
        Everything you need to know about VENOM × OpenCode.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
      }}>
        {docCategories.map((cat) => (
          <Link key={cat.slug} to={`/docs/${cat.slug}`} style={{ textDecoration: 'none' }}>
            <DocsCard title={cat.title} description={cat.description} icon={cat.icon} />
          </Link>
        ))}
      </div>
    </div>
  )
}
