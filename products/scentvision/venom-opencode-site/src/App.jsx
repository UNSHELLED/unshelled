import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/HomePage'
import InstallPage from './pages/InstallPage'
import DocsHubPage from './pages/DocsHubPage'
import DocsPage from './pages/DocsPage'
import PhilosophyPage from './pages/PhilosophyPage'
import WhyVenomPage from './pages/WhyVenomPage'
import ChangelogPage from './pages/ChangelogPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="install" element={<InstallPage />} />
          <Route path="docs" element={<DocsHubPage />} />
          <Route path="docs/:slug" element={<DocsPage />} />
          <Route path="philosophy" element={<PhilosophyPage />} />
          <Route path="why-venom" element={<WhyVenomPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
