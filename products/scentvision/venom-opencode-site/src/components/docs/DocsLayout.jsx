import { colors, fonts } from '../theme/tokens'

export default function DocsLayout({ children, title }) {
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
        marginBottom: '32px',
      }}>
        {title}
      </h1>
      <div style={{
        color: colors.bone,
        lineHeight: 1.7,
        '& h2': {
          fontFamily: fonts.display,
          fontSize: '1.5rem',
          fontWeight: 600,
          marginTop: '32px',
          marginBottom: '16px',
        },
        '& h3': {
          fontSize: '1.125rem',
          fontWeight: 600,
          marginTop: '24px',
          marginBottom: '12px',
        },
        '& p': {
          color: colors.ghost,
          marginBottom: '16px',
        },
        '& code': {
          fontFamily: fonts.mono,
          fontSize: '0.875em',
          padding: '2px 6px',
          background: colors.surface,
          borderRadius: '4px',
        },
        '& pre': {
          background: colors.abyss,
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          marginBottom: '24px',
        },
        '& table': {
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '24px',
        },
        '& th, & td': {
          padding: '12px',
          textAlign: 'left',
          borderBottom: `1px solid ${colors.edge}`,
        },
        '& th': {
          fontWeight: 600,
        },
        '& td': {
          color: colors.ghost,
        },
      }}>
        {children}
      </div>
    </div>
  )
}
