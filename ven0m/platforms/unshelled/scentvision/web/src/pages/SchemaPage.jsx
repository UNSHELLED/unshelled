import { Link } from "react-router-dom";
import { T, F } from "../theme/tokens.js";
import { useBreakpoint } from "../hooks/useBreakpoint.js";
import { interiorSectionStyle } from "../layout/sectionStyle.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { Reveal } from "../components/Reveal.jsx";
import { Tag } from "../components/Tag.jsx";
import { Footer } from "../components/sections/Footer.jsx";
import profileSchema from "../../../schema/olfactory_profile.v1.json";

export default function SchemaPage() {
  const bp = useBreakpoint();
  const sec = interiorSectionStyle(bp);
  usePageTitle("Schema");

  const p = {
    fontSize: bp.compact ? 13 : 14,
    color: T.ghost,
    lineHeight: 1.75,
    marginBottom: 16,
    maxWidth: 640,
  };

  const required = profileSchema.required ?? [];

  return (
    <>
      <article style={sec}>
        <Reveal>
          <Tag label="NORMATIVE" color={T.rose} />
          <h1 className="sv-display-lg" style={{ marginBottom: 14, maxWidth: 560 }}>
            olfactory_profile.v1
          </h1>
          <p style={p}>{profileSchema.description}</p>
        </Reveal>

        <Reveal delay={50}>
          <h2
            style={{
              fontFamily: F.display,
              fontSize: bp.mobile ? 18 : 22,
              color: T.bone,
              marginTop: 28,
              marginBottom: 10,
            }}
          >
            Required top-level keys
          </h2>
          <ul style={{ ...p, paddingLeft: 20, fontFamily: F.mono, fontSize: 12, color: T.bone }}>
            {required.map((k) => (
              <li key={k} style={{ marginBottom: 6 }}>
                {k}
              </li>
            ))}
          </ul>
          <p style={p}>
            Full JSON Schema lives in-repo: <code style={{ color: T.amber }}>schema/olfactory_profile.v1.json</code>. $id:{" "}
            <span style={{ wordBreak: "break-all", color: T.dim }}>{profileSchema.$id}</span>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2
            style={{
              fontFamily: F.display,
              fontSize: bp.mobile ? 18 : 22,
              color: T.bone,
              marginTop: 28,
              marginBottom: 10,
            }}
          >
            Full definition (reference)
          </h2>
          <pre
            style={{
              fontFamily: F.mono,
              fontSize: bp.compact ? 9 : 10,
              color: T.ghost,
              background: `${T.void}`,
              border: `1px solid ${T.mute}`,
              borderRadius: 8,
              padding: 14,
              maxHeight: Math.min(480, typeof window !== "undefined" ? window.innerHeight * 0.5 : 400),
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              margin: 0,
            }}
          >
            {JSON.stringify(profileSchema, null, 2)}
          </pre>
        </Reveal>

        <Reveal delay={140}>
          <p style={{ ...p, marginTop: 24 }}>
            Back to{" "}
            <Link style={{ color: T.pulse, textDecoration: "none", borderBottom: `1px solid ${T.pulse}55` }} to="/docs">
              Docs
            </Link>{" "}
            or{" "}
            <Link style={{ color: T.pulse, textDecoration: "none", borderBottom: `1px solid ${T.pulse}55` }} to="/">
              Home
            </Link>
            .
          </p>
        </Reveal>
      </article>
      <Footer bp={bp} />
      <div style={{ height: bp.mobile ? 20 : 28 }} />
    </>
  );
}
