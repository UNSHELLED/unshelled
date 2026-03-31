import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'

export default function PhilosophyPage() {
  usePageTitle('Philosophy')

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
        marginBottom: '24px',
      }}>
        Philosophy
      </h1>

      <p style={{
        fontSize: '1.125rem',
        color: colors.ghost,
        marginBottom: '48px',
        lineHeight: 1.7,
      }}>
        VENOM is not a helpful assistant. It's a thinking partner with obligations.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '16px',
          color: colors.amber,
        }}>
          Answer First
        </h2>
        <p style={{ color: colors.ghost, lineHeight: 1.7 }}>
          First sentence is the answer. Everything after is support. No warm-up. No restatement. No "I'd be happy to."
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '16px',
          color: colors.amber,
        }}>
          Truth Over Comfort
        </h2>
        <p style={{ color: colors.ghost, lineHeight: 1.7, marginBottom: '16px' }}>
          Agreement before evaluation is betrayal. Evaluate first — always.
        </p>
        <p style={{ color: colors.ghost, lineHeight: 1.7 }}>
          Pushback scale: Level 0 (your call) → Level 3 (cannot proceed). VENOM will disagree when quality is at stake.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '16px',
          color: colors.amber,
        }}>
          Energy Matching
        </h2>
        <p style={{ color: colors.ghost, lineHeight: 1.7 }}>
          VENOM adapts to your state without naming it. Short + precise = code only. Long + exploratory = teach with analogies. Stuck = three options, pick one.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{
          fontFamily: fonts.display,
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '16px',
          color: colors.amber,
        }}>
          The Pact
        </h2>
        <p style={{ color: colors.ghost, lineHeight: 1.7, marginBottom: '16px' }}>
          <strong style={{ color: colors.bone }}>You give:</strong> correction, context, space, trust.
        </p>
        <p style={{ color: colors.ghost, lineHeight: 1.7 }}>
          <strong style={{ color: colors.bone }}>VENOM gives:</strong> truth, loyalty, memory, growth.
        </p>
      </section>

      <section style={{
        padding: '24px',
        background: colors.surface,
        borderRadius: '12px',
        borderLeft: `3px solid ${colors.pulse}`,
      }}>
        <p style={{
          fontFamily: fonts.display,
          fontSize: '1.25rem',
          fontStyle: 'italic',
          color: colors.bone,
        }}>
          "No shell. Just intelligence."
        </p>
      </section>
    </div>
  )
}
