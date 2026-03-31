import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { T, F } from "../theme/tokens.js";

const GH = "https://github.com/unshelled-ai/scentvision";

const NAV_ITEMS = [
  { label: "Docs", to: "/docs" },
  { label: "Schema", to: "/schema" },
  { label: "Playground", to: "/playground" },
  { label: "GitHub", to: GH, external: true },
];

export function Nav({ bp, menuOpen, setMenuOpen }) {
  const location = useLocation();
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, setMenuOpen]);

  // Sync --sv-nav-h CSS var to actual nav height
  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const apply = () => {
      document.documentElement.style.setProperty("--sv-nav-h", `${el.offsetHeight}px`);
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [bp.mobile, menuOpen]);

  // Shrink glass on scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // ─── Pill dimensions ───────────────────────────────────────────────
  const pillPad = bp.mobile ? "0 14px" : "0 10px";
  const pillH = bp.mobile ? 52 : 56;
  const pillRadius = 999;

  const pillStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: bp.mobile ? 8 : 4,
    height: pillH,
    padding: pillPad,
    borderRadius: pillRadius,
    background: `rgba(17,17,20,${scrolled ? 0.92 : 0.72})`,
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: `1px solid rgba(255,255,255,${scrolled ? 0.10 : 0.07})`,
    boxShadow: scrolled
      ? `0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)`
      : `0 4px 20px rgba(0,0,0,0.40)`,
    transition: "background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
  };

  // Brand pill (octopus icon)
  const brandPillStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 999,
    background: `linear-gradient(135deg, ${T.pulse} 0%, ${T.amber} 100%)`,
    flexShrink: 0,
    textDecoration: "none",
    marginRight: 4,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: `0 2px 10px ${T.pulse}55`,
    cursor: "pointer",
  };

  const dividerStyle = {
    width: 1,
    height: 20,
    background: `rgba(255,255,255,0.10)`,
    margin: "0 8px",
    flexShrink: 0,
  };

  const navItemStyle = {
    fontFamily: "var(--sv-font-sans)",
    fontSize: 13,
    fontWeight: 500,
    padding: "0 14px",
    height: pillH,
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    position: "relative",
    transition: "color 0.2s ease",
    whiteSpace: "nowrap",
    borderRadius: 8,
  };

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        /* Center the floating pill */
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: bp.mobile ? 10 : 14,
        paddingBottom: 0,
        pointerEvents: "none", // let clicks pass through the empty space
      }}
    >
      {/* ── FLOATING PILL ── */}
      <div style={{ ...pillStyle, pointerEvents: "auto" }}>

        {/* Brand anchor */}
        <Link
          to="/"
          style={brandPillStyle}
          className="hvr"
          aria-label="UNSHELLED.AI home"
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>🐙</span>
        </Link>

        {/* Brand wordmark */}
        {!bp.compact && (
          <Link
            to="/"
            style={{
              fontFamily: F.mono,
              fontSize: 12,
              letterSpacing: "0.08em",
              color: T.bone,
              fontWeight: 600,
              textDecoration: "none",
              marginRight: 8,
              whiteSpace: "nowrap",
            }}
          >
            UNSHELLED<span style={{ color: T.dim }}>.AI</span>
          </Link>
        )}

        {/* Divider */}
        {!bp.mobile && <div style={dividerStyle} />}

        {/* Nav links (desktop) */}
        {!bp.mobile && NAV_ITEMS.map(item => (
          item.external
            ? (
              <a
                key={item.label}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...navItemStyle, color: T.ghost }}
                onMouseEnter={e => e.currentTarget.style.color = T.bone}
                onMouseLeave={e => e.currentTarget.style.color = T.ghost}
              >
                {item.label}
                <span style={{ fontSize: 9, marginLeft: 3, opacity: 0.5, verticalAlign: "super" }}>↗</span>
              </a>
            )
            : (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === "/docs"}
                style={({ isActive }) => ({
                  ...navItemStyle,
                  color: isActive ? T.bone : T.ghost,
                  background: isActive ? `rgba(255,255,255,0.06)` : "transparent",
                })}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span style={{
                        position: "absolute",
                        bottom: 8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 16,
                        height: 2,
                        borderRadius: 2,
                        background: T.pulse,
                      }} />
                    )}
                  </>
                )}
              </NavLink>
            )
        ))}

        {/* Divider + Search on desktop */}
        {!bp.mobile && (
          <>
            <div style={dividerStyle} />
            <div
              role="searchbox"
              tabIndex={0}
              aria-label="Search documentation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: `rgba(255,255,255,0.05)`,
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: 8,
                padding: "0 10px",
                height: 32,
                cursor: "text",
                color: T.dim,
                fontFamily: "var(--sv-font-sans)",
                fontSize: 12,
                marginLeft: 4,
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(255,255,255,0.18)`}
              onMouseLeave={e => e.currentTarget.style.borderColor = `rgba(255,255,255,0.08)`}
            >
              <span>Search</span>
              <span style={{
                fontFamily: F.mono,
                fontSize: 9,
                background: `rgba(255,255,255,0.08)`,
                color: T.ghost,
                padding: "2px 5px",
                borderRadius: 4,
                letterSpacing: "0.04em",
              }}>
                ⌘K
              </span>
            </div>
          </>
        )}

        {/* Hamburger (mobile) */}
        {bp.mobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: T.bone,
              fontSize: 20,
              padding: "4px 8px",
              marginLeft: "auto",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* ── MOBILE DRAWER ── */}
      {bp.mobile && menuOpen && (
        <div
          style={{
            pointerEvents: "auto",
            marginTop: 8,
            borderRadius: 20,
            background: `rgba(17,17,20,0.95)`,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid rgba(255,255,255,0.09)`,
            boxShadow: `0 12px 40px rgba(0,0,0,0.6)`,
            width: "calc(100vw - 32px)",
            overflow: "hidden",
          }}
        >
          {NAV_ITEMS.map((item, i) => (
            item.external
              ? (
                <a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "16px 24px",
                    fontFamily: "var(--sv-font-sans)",
                    fontSize: 16,
                    color: T.ghost,
                    textDecoration: "none",
                    borderBottom: i < NAV_ITEMS.length - 1 ? `1px solid rgba(255,255,255,0.06)` : "none",
                  }}
                >
                  {item.label} ↗
                </a>
              )
              : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === "/docs"}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    display: "block",
                    padding: "16px 24px",
                    fontFamily: "var(--sv-font-sans)",
                    fontSize: 16,
                    color: isActive ? T.pulse : T.bone,
                    textDecoration: "none",
                    fontWeight: isActive ? 600 : 400,
                    borderBottom: i < NAV_ITEMS.length - 1 ? `1px solid rgba(255,255,255,0.06)` : "none",
                  })}
                >
                  {item.label}
                </NavLink>
              )
          ))}
        </div>
      )}
    </header>
  );
}
