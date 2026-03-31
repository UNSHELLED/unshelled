import { useState } from 'react'
import { colors, fonts } from '../theme/tokens'

export default function TerminalBlock({ children, language = 'bash' }) {
  const [copied, setCopied] = useState(false)
  const code = typeof children === 'string' ? children : children?.toString() || ''

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{
      position: 'relative',
      background: colors.abyss,
      borderRadius: '8px',
      border: `1px solid ${colors.edge}`,
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderBottom: `1px solid ${colors.edge}`,
        background: colors.surface,
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27CA40' }} />
        </div>
        <button
          onClick={handleCopy}
          style={{
            fontSize: '0.75rem',
            color: copied ? colors.pulse : colors.ghost,
            transition: 'color 0.2s',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre style={{
        padding: '16px',
        margin: 0,
        overflow: 'auto',
        fontFamily: fonts.mono,
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: colors.bone,
      }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
