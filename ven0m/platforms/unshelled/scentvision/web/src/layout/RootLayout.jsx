import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { T, F } from "../theme/tokens.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { GlobalStyles } from "../components/GlobalStyles.jsx";
import { ParticleField } from "../components/ParticleField.jsx";
import { Nav } from "../components/Nav.jsx";

export function RootLayout() {
  const bp = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!bp.mobile && menuOpen) setMenuOpen(false);
  }, [bp.mobile, menuOpen]);

  return (
    <div
      style={{
        minHeight: "100%",
        background: T.void,
        color: T.bone,
        fontFamily: F.body,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <GlobalStyles />
      <ParticleField mobile={bp.mobile} />
      <Nav bp={bp} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
    </div>
  );
}
