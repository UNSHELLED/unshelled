import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'

const comparisons = [
  {
    pain: 'AI makes the same mistakes repeatedly',
    solution: 'Instincts + corrections persist across sessions in .venom/memory/',
    icon: '🔄',
  },
  {
    pain: 'Context resets lose my work',
    solution: 'Artifact-driven workflows survive compaction. Work is written to disk.',
    icon: '💾',
  },
  {
    pain: 'AI gets stuck in loops',
    solution: 'Automatic loop detection. After 3 same calls, VENOM forces strategy change.',
    icon: '🔁',
  },
  {
    pain: 'AI breaks things',
    solution: 'Safety gates block dangerous commands before execution. rm -rf, curl | bash, fork bombs.',
    icon: '💥',
  },
  {
    pain: 'AI gives generic answers',
    solution: 'Energy matching adapts response depth to your actual state.',
    icon: '🤖',
  },
  {
    pain: 'AI agrees when it shouldn\'t',
    solution: 'Pushback scale — truth over comfort. VENOM will disagree when quality is at stake.',
    icon: '🤝',
  },
]

export default function WhyVenomPage() {
  usePageTitle('Why VENOM')

  return (
    <div style={{
      padding: '120px 24px 80px',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: fonts.display,
        fontSize: '2.5rem',
        fontWeight: 600,
        marginBottom: '16px',
      }}>
        Why VENOM?
      </h1>

      <p style={{
        fontSize: '1.125rem',
        color: colors.ghost,
        marginBottom: '48px',
        lineHeight: 1.7,
      }}>
        Every AI user faces the same problems. VENOM solves them.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {comparisons.map((item, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '48px 1fr',
            gap: '16px',
            padding: '24px',
            background: colors.surface,
            borderRadius: '12px',
            border: `1px solid ${colors.edge}`,
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: colors.abyss,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
            }}>
              {item.icon}
            </div>
            <div>
              <p style={{
                color: colors.rose,
                marginBottom: '12px',
                fontWeight: 500,
              }}>
                {item.pain}
              </p>
              <p style={{
                color: colors.pulse,
                fontWeight: 500,
              }}>
                ✓ {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
