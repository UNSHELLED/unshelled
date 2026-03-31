import { colors, fonts } from '../../theme/tokens'
import Reveal from '../Reveal'
import StatsBar from '../StatsBar'

const stats = [
  { value: '655', label: 'Lines of plugin code' },
  { value: '7', label: 'Autonomic hooks' },
  { value: '4', label: 'Custom tools' },
  { value: '6', label: 'Specialist agents' },
  { value: '7', label: 'Slash commands' },
  { value: '4', label: 'Workflows' },
]

export default function WhatWeBuilt() {
  return (
    <section style={{
      padding: '100px 24px',
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
            What VENOM brings to OpenCode
          </h2>
          <p style={{
            textAlign: 'center',
            color: colors.ghost,
            marginBottom: '60px',
          }}>
            Not a wrapper. Not a prompt. A complete intelligence layer.
          </p>
        </Reveal>

        <StatsBar stats={stats} />
      </div>
    </section>
  )
}
