import { useRef } from "react";
import { T, F } from "../../theme/tokens.js";

export function BentoCard({ title, description, icon, href, glowing = false }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const Component = href ? "a" : "div";
  const props = href ? { href, className: "bento-card sv-hvr-glow", onMouseMove: handleMouseMove } : { className: "bento-card sv-hvr-glow", onMouseMove: handleMouseMove };

  return (
    <>
      <style>{`
        .bento-card {
          position: relative;
          background: ${T.void};
          border: 1px solid ${T.mute};
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
          transition: border-color 0.3s ease, transform 0.2s ease;
        }
        .bento-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),
            ${glowing ? T.pulse : T.edge}1A,
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 1;
        }
        .bento-card:hover {
          border-color: ${glowing ? T.pulse : T.edge};
          transform: translateY(-2px);
        }
        .bento-card:hover::before {
          opacity: 1;
        }
      `}</style>
      <Component ref={cardRef} {...props}>
        <div style={{ position: "relative", zIndex: 2 }}>
          {icon && <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>}
          <h3 style={{ fontFamily: "var(--sv-font-sans)", fontSize: 16, color: T.bone, margin: "0 0 6px 0" }}>
            {title}
          </h3>
          <p style={{ fontFamily: F.body, fontSize: 13, color: T.ghost, margin: 0, lineHeight: 1.5 }}>
            {description}
          </p>
        </div>
      </Component>
    </>
  );
}
