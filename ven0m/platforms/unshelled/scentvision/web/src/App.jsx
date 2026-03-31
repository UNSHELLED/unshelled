import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import DocsPage from "./pages/DocsPage.jsx";
import SchemaPage from "./pages/SchemaPage.jsx";
import PlaygroundPage from "./pages/PlaygroundPage.jsx";
import GitHubPage from "./pages/GitHubPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

/**
 * ScentVision — SPA routes. Shell: RootLayout (global styles, particles, nav).
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/schema" element={<SchemaPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/github" element={<GitHubPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
