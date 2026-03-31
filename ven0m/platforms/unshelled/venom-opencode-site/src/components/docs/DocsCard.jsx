import { colors, fonts } from '../theme/tokens'

export default function DocsCard({ title, description, icon }) {
  return (
    <div style={{
      padding: '24px',
      background: colors.surface,
      borderRadius: '12px',
      border: `1px solid ${colors.edge}`,
      transition: 'border-color 0.2s, transform 0.2s',
      cursor: 'pointer',
      height: '100%',
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{
        fontFamily: fonts.display,
        fontSize: '1.125rem',
        fontWeight: 600,
        marginBottom: '8px',
      }}>
        {title}
      </h3>
      <p style={{
        fontSize: '0.875rem',
        color: colors.ghost,
        lineHeight: 1.5,
      }}>
        {description}
      </p>
    </div>
  )
}
