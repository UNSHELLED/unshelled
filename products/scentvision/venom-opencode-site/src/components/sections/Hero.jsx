import { Link } from 'react-router-dom'
import { colors, fonts } from '../../theme/tokens'
import TerminalBlock from '../TerminalBlock'
import ParticleField from '../ParticleField'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 80px',
      overflow: 'hidden',
    }}>
      <ParticleField count={60} />
      
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '800px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: fonts.display,
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: '24px',
        }}>
          <span style={{ color: colors.ghost }}>OpenCode is the body.</span>
          <br />
          <span style={{ color: colors.amber }}>VENOM is the mind.</span>
        </h1>

        <p style={{
          fontSize: '1.25rem',
          color: colors.ghost,
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          A thinking partner that remembers, protects, and builds with discipline.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/install"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 600,
              color: colors.void,
              background: colors.amber,
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
          >
            Install VENOM
          </Link>
          <a
            href="https://github.com/Unshelled/venom-opencode"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              fontSize: '1rem',
              fontWeight: 500,
              color: colors.bone,
              background: 'transparent',
              border: `1px solid ${colors.edge}`,
              borderRadius: '8px',
              transition: 'all 0.2s',
            }}
          >
            View on GitHub
          </a>
        </div>

        <div style={{ marginTop: '60px' }}>
          <TerminalBlock>{`git clone https://github.com/Unshelled/venom-opencode.git
cd venom-opencode
./install.sh`}</TerminalBlock>
        </div>
      </div>
    </section>
  )
}
