import { colors, fonts } from '../../theme/tokens'
import Reveal from '../Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '60px 24px',
      borderTop: `1px solid ${colors.edge}`,
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
      }}>
        <div>
          <div style={{
            fontFamily: fonts.display,
            fontSize: '1.125rem',
            fontWeight: 600,
            marginBottom: '8px',
          }}>
            VENOM × OpenCode
          </div>
          <p style={{
            fontSize: '0.8125rem',
            color: colors.ghost,
          }}>
            OpenCode is the body. VENOM is the mind.
          </p>
        </div>

        <div style={{
          display: 'flex',
          gap: '24px',
          fontSize: '0.875rem',
        }}>
          <a href="https://github.com/Unshelled/venom-opencode" target="_blank" rel="noopener noreferrer" style={{ color: colors.ghost }}>
            GitHub
          </a>
          <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer" style={{ color: colors.ghost }}>
            OpenCode
          </a>
          <a href="https://unshelled.ai" target="_blank" rel="noopener noreferrer" style={{ color: colors.ghost }}>
            UNSHELLED
          </a>
        </div>

        <div style={{
          fontSize: '0.75rem',
          color: colors.dim,
        }}>
          © {year} UNSHELLED.AI
        </div>
      </div>
    </footer>
  )
}
