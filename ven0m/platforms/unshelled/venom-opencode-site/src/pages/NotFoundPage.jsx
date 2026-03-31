import { Link } from 'react-router-dom'
import { colors, fonts } from '../theme/tokens'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFoundPage() {
  usePageTitle('404')

  return (
    <div style={{
      padding: '120px 24px',
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{
        fontFamily: fonts.display,
        fontSize: '6rem',
        fontWeight: 600,
        color: colors.amber,
        marginBottom: '16px',
      }}>
        404
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: colors.ghost,
        marginBottom: '32px',
      }}>
        This page doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          padding: '12px 24px',
          background: colors.amber,
          color: colors.void,
          borderRadius: '8px',
          fontWeight: 600,
        }}
      >
        Go Home
      </Link>
    </div>
  )
}
