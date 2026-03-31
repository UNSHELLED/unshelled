import { colors, fonts } from '../../theme/tokens'
import Reveal from '../Reveal'
import { Minds } from '../../theme/tokens'

const minds = [
  { key: 'architect', name: 'Architect', role: 'Coordinates. Routes. Sees systems whole.' },
  { key: 'researcher', name: 'Researcher', role: 'Reads before acting. Anatomy before plan.' },
  { key: 'reviewer', name: 'Reviewer', role: 'Signal from noise. Most critical first.' },
  { key: 'historian', name: 'Historian', role: 'What was decided. What we learned.' },
  { key: 'builder', name: 'Builder', role: 'Complete output. No TODOs. No placeholders.' },
  { key: 'debugger', name: 'Debugger', role: 'Root cause. Proves. Never guesses.' },
  { key: 'predictor', name: 'Predictor', role: 'What breaks next. Proactive.' },
  { key: 'communicator', name: 'Communicator', role: 'Language adaptation. Register matching.' },
  { key: 'learner', name: 'Learner', role: 'Captures, evolves, routes learnings.' },
]

export default function TheNineMinds() {
  return (
    <section style={{
      padding: '100px 24px',
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
            Nine minds, one voice
          </h2>
          <p style={{
            textAlign: 'center',
            color: colors.ghost,
            marginBottom: '48px',
          }}>
            Every response weaves all perspectives. Never announced as roles. Just the texture of all angles.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {minds.map((mind, i) => (
            <Reveal key={mind.key} delay={i * 40}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '16px',
                background: colors.surface,
                borderRadius: '8px',
                border: `1px solid ${colors.edge}`,
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: Minds[mind.key]?.hex || colors.amber,
                  flexShrink: 0,
                  marginTop: '4px',
                }} />
                <div>
                  <h4 style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}>
                    {mind.name}
                  </h4>
                  <p style={{
                    fontSize: '0.8125rem',
                    color: colors.ghost,
                    lineHeight: 1.5,
                  }}>
                    {mind.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
