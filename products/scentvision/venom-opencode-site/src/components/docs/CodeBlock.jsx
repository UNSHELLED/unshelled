import { colors, fonts } from '../theme/tokens'

export default function CodeBlock({ children, language }) {
  return (
    <pre style={{
      background: colors.abyss,
      padding: '16px',
      borderRadius: '8px',
      overflow: 'auto',
      marginBottom: '24px',
    }}>
      <code style={{
        fontFamily: fonts.mono,
        fontSize: '0.875rem',
        color: colors.bone,
      }}>
        {children}
      </code>
    </pre>
  )
}
