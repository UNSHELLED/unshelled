import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { colors, fonts } from '../theme/tokens'
import GitHubStarButton from './GitHubStarButton'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/install', label: 'Install' },
  { path: '/docs', label: 'Docs' },
  { path: '/philosophy', label: 'Philosophy' },
  { path: '/why-venom', label: 'Why VENOM' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '12px 24px',
      background: `linear-gradient(to bottom, ${colors.void} 60%, transparent)`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link 
          to="/" 
          style={{ 
            fontFamily: fonts.display, 
            fontSize: '1.25rem',
            fontWeight: 600,
            color: colors.bone,
          }}
        >
          VENOM × OpenCode
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{
            display: 'flex',
            gap: '24px',
            '@media (max-width: 768px)': { display: 'none' }
          }}>
            {navItems.slice(1).map(item => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: location.pathname === item.path ? colors.amber : colors.ghost,
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <GitHubStarButton />
        </div>
      </div>
    </nav>
  )
}
