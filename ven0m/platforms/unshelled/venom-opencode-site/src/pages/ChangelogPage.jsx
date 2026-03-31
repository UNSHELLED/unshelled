import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'

const releases = [
  {
    version: '1.0.0',
    date: '2026-03-28',
    changes: [
      'Initial release',
      '6 agents: architect, researcher, reviewer, debugger, explorer, builder',
      '7 commands: init, eat, spec, build, review, research, check',
      '4 workflows: spec, ship, debug, eat',
      'Safety system with loop detection',
      'Memory persistence across sessions',
    ],
  },
]

export default function ChangelogPage() {
  usePageTitle('Changelog')

  return (
    <div style={{
      padding: '120px 24px 80px',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: fonts.display,
        fontSize: '2.5rem',
        fontWeight: 600,
        marginBottom: '16px',
      }}>
        Changelog
      </h1>

      <p style={{
        fontSize: '1.125rem',
        color: colors.ghost,
        marginBottom: '48px',
      }}>
        Version history for VENOM × OpenCode.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {releases.map((release) => (
          <article key={release.version} style={{
            padding: '24px',
            background: colors.surface,
            borderRadius: '12px',
            border: `1px solid ${colors.edge}`,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '16px',
              marginBottom: '16px',
            }}>
              <span style={{
                fontFamily: fonts.mono,
                fontSize: '1.25rem',
                fontWeight: 600,
                color: colors.amber,
              }}>
                v{release.version}
              </span>
              <span style={{
                fontSize: '0.875rem',
                color: colors.dim,
              }}>
                {release.date}
              </span>
            </div>
            <ul style={{
              paddingLeft: '20px',
              color: colors.ghost,
              lineHeight: 1.8,
            }}>
              {release.changes.map((change, i) => (
                <li key={i}>{change}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
