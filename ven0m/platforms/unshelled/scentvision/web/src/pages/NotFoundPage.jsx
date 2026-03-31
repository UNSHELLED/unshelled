import { Link } from "react-router-dom";
import { T, F } from "../theme/tokens.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { interiorSectionStyle } from "../layout/sectionStyle.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { Reveal } from "../components/Reveal.jsx";
import { Tag } from "../components/Tag.jsx";
import { Footer } from "../components/sections/Footer.jsx";

export default function NotFoundPage() {
  const bp = useBreakpoint();
  const sec = interiorSectionStyle(bp);
  usePageTitle("Not found");

  return (
    <>
      <article style={{ ...sec, minHeight: "50vh" }}>
        <Reveal>
          <Tag label="404" color={T.dim} />
          <h1 className="sv-display-lg" style={{ marginBottom: 14 }}>
            Nothing here
          </h1>
          <p style={{ fontSize: 14, color: T.ghost, lineHeight: 1.7, marginBottom: 28, maxWidth: 420 }}>
            That path isn&apos;t part of this build. Try the home surface or the manual.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link
              to="/"
              className="hvr-touch"
              style={{
                fontFamily: F.mono,
                fontSize: 12,
                color: T.void,
                background: T.bone,
                padding: "12px 20px",
                borderRadius: 8,
                textDecoration: "none",
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Home
            </Link>
            <Link
              to="/docs"
              className="hvr-touch"
              style={{
                fontFamily: F.mono,
                fontSize: 12,
                color: T.bone,
                border: `1px solid ${T.mute}`,
                padding: "12px 20px",
                borderRadius: 8,
                textDecoration: "none",
                minHeight: 44,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Docs
            </Link>
          </div>
        </Reveal>
      </article>
      <Footer bp={bp} />
      <div style={{ height: bp.mobile ? 20 : 28 }} />
    </>
  );
}
