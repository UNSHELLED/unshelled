import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function RootLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}
