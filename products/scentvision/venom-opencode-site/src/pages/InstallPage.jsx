import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'
import TerminalBlock from '../components/TerminalBlock'

const steps = [
  {
    title: 'Clone the repository',
    code: 'git clone https://github.com/Unshelled/venom-opencode.git\ncd venom-opencode',
  },
  {
    title: 'Run the installer',
    code: './install.sh',
  },
  {
    title: 'Verify installation',
    code: '# In OpenCode, run:\n/venom-init',
  },
]

export default function InstallPage() {
  usePageTitle('Install')

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
        Install VENOM
      </h1>
      
      <p style={{
        fontSize: '1.125rem',
        color: colors.ghost,
        marginBottom: '48px',
        lineHeight: 1.6,
      }}>
        Get VENOM running in your OpenCode in under 2 minutes.
      </p>

      <div style={{
        marginBottom: '32px',
        padding: '16px',
        background: colors.surface,
        borderRadius: '8px',
        border: `1px solid ${colors.edge}`,
      }}>
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '8px' }}>Prerequisites</h3>
        <ul style={{ color: colors.ghost, paddingLeft: '20px', fontSize: '0.875rem' }}>
          <li>OpenCode installed (<a href="https://opencode.ai" target="_blank" style={{ color: colors.amber }}>get it here</a>)</li>
          <li>Node.js 18+</li>
          <li>Git</li>
        </ul>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {steps.map((step, i) => (
          <div key={step.title}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}>
              <span style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: colors.amber,
                color: colors.void,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}>
                {i + 1}
              </span>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{step.title}</h2>
            </div>
            <TerminalBlock>{step.code}</TerminalBlock>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '48px',
        padding: '16px',
        background: `${colors.tealDim}`,
        borderRadius: '8px',
        borderLeft: `3px solid ${colors.teal}`,
      }}>
        <strong style={{ color: colors.teal }}>Next:</strong>
        <span style={{ color: colors.ghost }}> Run <code style={{ color: colors.bone }}>/venom-init</code> in any project to scaffold the .venom/ brain.</span>
      </div>
    </div>
  )
}
