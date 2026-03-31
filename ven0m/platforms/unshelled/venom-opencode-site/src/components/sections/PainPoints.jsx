import { colors, fonts } from '../../theme/tokens'
import Reveal from '../Reveal'

const painPoints = [
  {
    pain: 'AI makes the same mistakes',
    solution: 'Instincts + corrections persist across sessions',
    icon: '🔄',
  },
  {
    pain: 'Context resets lose work',
    solution: 'Artifact-driven workflows survive compaction',
    icon: '💾',
  },
  {
    pain: 'AI gets stuck in loops',
    solution: 'Automatic loop detection forces strategy change',
    icon: '🔁',
  },
  {
    pain: 'AI breaks things',
    solution: 'Safety gates block dangerous commands',
    icon: '🛡️',
  },
  {
    pain: 'AI gives generic answers',
    solution: 'Energy matching adapts to your state',
    icon: '⚡',
  },
  {
    pain: 'AI agrees when it shouldn\'t',
    solution: 'Pushback scale — truth over comfort',
    icon: '🎯',
  },
]

export default function PainPoints() {
  return (
    <section style={{
      padding: '80px 24px',
      background: colors.abyss,
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <Reveal>
          <h2 style={{
            fontFamily: fonts.display,
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            Sound familiar?
          </h2>
          <p style={{
            textAlign: 'center',
            color: colors.ghost,
            marginBottom: '48px',
          }}>
            VENOM solves the problems every AI user faces.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {painPoints.map((item, i) => (
            <Reveal key={item.pain} delay={i * 60}>
              <div style={{
                padding: '24px',
                background: colors.surface,
                borderRadius: '12px',
                border: `1px solid ${colors.edge}`,
                height: '100%',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: colors.rose,
                }}>
                  {item.pain}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: colors.ghost,
                  lineHeight: 1.6,
                }}>
                  {item.solution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
