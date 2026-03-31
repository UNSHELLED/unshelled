import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";

export function Hero({ bp }) {
  const heroTop = bp.landscapeCompact ? 88 : bp.mobile ? 100 : 130;
  const heroBottom = bp.landscapeCompact ? 40 : bp.mobile ? 48 : 72;

  const sec = {
    ...sectionStyle(bp),
    paddingTop: heroTop,
    paddingBottom: heroBottom,
  };

  const bodySize = bp.compact ? 14 : bp.mobile ? 15 : 17;
  const disclaimerSize = bp.compact ? 11 : 12;

  return (
    <section style={sec}>
      <Reveal>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          <span
            style={{
              display: "inline-flex",
              padding: "6px 10px",
              borderRadius: 12,
              border: `1px solid ${T.teal}20`,
              background: T.tealDim,
              fontFamily: F.mono,
              fontSize: bp.compact ? 8 : 9,
              letterSpacing: "0.1em",
              color: T.teal,
            }}
          >
            OPEN SOURCE
          </span>
          <span
            style={{
              display: "inline-flex",
              padding: "6px 10px",
              borderRadius: 12,
              border: `1px solid ${T.mute}`,
              fontFamily: F.mono,
              fontSize: bp.compact ? 8 : 9,
              letterSpacing: "0.1em",
              color: T.dim,
            }}
          >
            APACHE-2.0
          </span>
        </div>
      </Reveal>
      <Reveal delay={50}>
        <h1 className="sv-display-xl" style={{ marginBottom: 16, maxWidth: 600 }}>
          Visual input in. <span style={{ fontStyle: "italic", color: T.amber }}>Scent data out.</span>
        </h1>
      </Reveal>
      <Reveal delay={100}>
        <p
          style={{
            fontSize: bodySize,
            lineHeight: 1.7,
            color: T.ghost,
            maxWidth: 520,
            marginBottom: 10,
            fontWeight: 300,
          }}
        >
          Open-source inference engine that translates images and video into structured olfactory profiles. No sensors. No
          hardware. A CLI, an API, and a community-maintained scent knowledge graph.
        </p>
      </Reveal>
      <Reveal delay={130}>
        <div
          style={{
            fontSize: disclaimerSize,
            lineHeight: 1.6,
            color: T.dim,
            maxWidth: 520,
            marginBottom: 28,
            padding: "10px 14px",
            borderLeft: `2px solid ${T.rose}30`,
            background: T.roseDim,
            borderRadius: "0 6px 6px 0",
          }}
        >
          Produces <strong style={{ color: T.ghost }}>plausible scent descriptions</strong> — not chemical measurements.
          Cannot detect invisible hazards. Every response includes explicit limitation disclosures.
        </div>
      </Reveal>
      <Reveal delay={160}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "stretch" }}>
          <button
            type="button"
            className="hvr hvr-touch"
            style={{
              padding: "0 22px",
              minHeight: 44,
              borderRadius: 7,
              background: T.amber,
              color: T.void,
              fontFamily: F.body,
              fontSize: 14,
              fontWeight: 600,
              boxShadow: `0 4px 20px ${T.amberGlow}`,
              transition: "transform .2s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            View on GitHub →
          </button>
          <button
            type="button"
            className="hvr hvr-touch"
            style={{
              padding: "0 22px",
              minHeight: 44,
              borderRadius: 7,
              border: `1px solid ${T.mute}`,
              color: T.ghost,
              fontFamily: F.body,
              fontSize: 14,
              transition: "transform .2s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Read the Docs
          </button>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <div
          style={{
            marginTop: 32,
            padding: bp.mobile ? "14px 14px" : "14px 18px",
            borderRadius: 8,
            background: T.abyss,
            border: `1px solid ${T.mute}`,
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            maxWidth: "100%",
          }}
        >
          <div style={{ fontFamily: F.mono, fontSize: 9, color: T.dim, letterSpacing: "0.1em", marginBottom: 6 }}>
            QUICKSTART
          </div>
          <pre
            style={{
              fontFamily: F.mono,
              fontSize: bp.compact ? 10 : bp.mobile ? 11 : 13,
              color: T.ghost,
              lineHeight: 1.8,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            <span style={{ color: T.dim }}>$</span> <span style={{ color: T.teal }}>npm</span> install -g @scentvision/cli{"\n"}
            <span style={{ color: T.dim }}>$</span> <span style={{ color: T.teal }}>scentvision</span> analyze photo.jpg{"\n"}
            <span style={{ color: T.dim }}># → olfactory_profile.v1 JSON to stdout</span>
          </pre>
        </div>
      </Reveal>
    </section>
  );
}
