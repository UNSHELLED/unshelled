import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { SCENES } from "../../data/scenes.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";
import { Pill } from "../Pill.jsx";
import { MetricBar } from "../MetricBar.jsx";
import { Molecule } from "../Molecule.jsx";

export function Demo({ bp, scene, analyzing, switchScene, s }) {
  const sec = sectionStyle(bp);

  return (
    <section style={sec}>
      <Reveal>
        <Tag label="DEMO" color={T.teal} />
        <h2 className="sv-display-lg" style={{ marginBottom: 20 }}>
          Mocked scenes. <span style={{ fontStyle: "italic", color: T.teal }}>Real schema output.</span>
        </h2>
      </Reveal>
      <div className="sv-chip-scroll" style={{ marginBottom: 16 }}>
        {SCENES.map((sc, i) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => switchScene(i)}
            className="hvr-touch"
            style={{
              padding: "0 16px",
              minHeight: 44,
              borderRadius: 6,
              border: `1px solid ${i === scene ? `${sc.color}40` : T.mute}`,
              background: i === scene ? `${sc.color}0a` : "transparent",
              color: i === scene ? sc.color : T.dim,
              fontFamily: F.mono,
              fontSize: bp.compact ? 10 : 11,
              transition: "border-color .2s, background .2s, color .2s",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {sc.label}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: bp.mobile ? "1fr" : "1fr 1fr", gap: bp.mobile ? 10 : 14 }}>
        <div
          style={{
            padding: bp.mobile ? 16 : 22,
            borderRadius: 10,
            border: `1px solid ${s.color}12`,
            background: T.abyss,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {analyzing && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${T.void}88`,
                borderRadius: 10,
              }}
            >
              <span
                className="scent-pulse-anim"
                style={{ fontFamily: F.mono, fontSize: 10, color: s.color, animation: "pulse 1s ease infinite" }}
              >
                analyzing...
              </span>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: F.display, fontSize: bp.mobile ? 18 : 20, fontWeight: 500, marginBottom: 3 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 11, color: T.dim, fontStyle: "italic" }}>{s.summary}</div>
            </div>
            <Molecule color={s.color} size={bp.mobile ? 48 : 72} />
          </div>
          <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
            {Object.entries(s.env).map(([k, v]) => (
              <span
                key={k}
                style={{
                  padding: "3px 7px",
                  borderRadius: 4,
                  background: T.mute,
                  fontFamily: F.mono,
                  fontSize: 8,
                  color: T.ghost,
                }}
              >
                <span style={{ color: T.dim }}>{k}:</span> {v}
              </span>
            ))}
          </div>
          {["top", "heart", "base"].map((tier) => (
            <div key={tier} style={{ marginBottom: 8 }}>
              <div style={{ fontFamily: F.mono, fontSize: 8, color: T.dim, letterSpacing: "0.1em", marginBottom: 3 }}>
                {tier === "top" ? "▲ TOP" : tier === "heart" ? "■ HEART" : "▼ BASE"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {s.notes[tier].map((n) => (
                  <Pill key={n} text={n} tier={tier} color={s.color} />
                ))}
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: 10,
              padding: "7px 10px",
              borderRadius: 6,
              border: `1px solid ${s.color}12`,
              background: `${s.color}04`,
            }}
          >
            <span style={{ fontFamily: F.mono, fontSize: 8, color: T.dim }}>EMOTIONAL </span>
            <span style={{ fontFamily: F.display, fontSize: 13, color: s.color, fontStyle: "italic" }}>{s.emotional}</span>
          </div>
        </div>

        <div
          style={{
            padding: bp.mobile ? 16 : 22,
            borderRadius: 10,
            border: `1px solid ${T.mute}`,
            background: T.abyss,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontFamily: F.mono, fontSize: 9, color: s.color, letterSpacing: "0.1em", marginBottom: 12 }}>METRICS</div>
          <MetricBar value={s.metrics.intensity} color={s.color} label="INTENSITY" />
          <MetricBar
            value={s.metrics.valence}
            color={s.metrics.valence >= 0 ? T.teal : T.rose}
            label="VALENCE"
            delay={80}
          />
          <MetricBar value={s.metrics.familiarity} color={T.amber} label="FAMILIARITY" delay={160} />
          <MetricBar value={s.metrics.confidence} color={T.teal} label="CONFIDENCE" delay={240} />
          <div style={{ fontFamily: F.mono, fontSize: 9, color: T.dim, letterSpacing: "0.1em", marginTop: 14, marginBottom: 6 }}>
            LIMITS (required)
          </div>
          <div
            style={{
              padding: "8px 10px",
              borderRadius: 6,
              background: T.roseDim,
              border: `1px solid ${T.rose}10`,
              fontSize: 11,
              color: T.ghost,
              lineHeight: 1.5,
            }}
          >
            <strong style={{ color: T.rose, fontFamily: F.mono, fontSize: 9 }}>undetectable: </strong>
            invisible gases · pathogens · sub-surface mold · pheromones · radiation
          </div>
          <div style={{ fontFamily: F.mono, fontSize: 9, color: T.dim, letterSpacing: "0.1em", marginTop: 14, marginBottom: 6 }}>
            JSON
          </div>
          <pre
            style={{
              fontFamily: F.mono,
              fontSize: bp.compact ? 8 : bp.mobile ? 9 : 10,
              lineHeight: 1.5,
              color: T.ghost,
              background: T.void,
              border: `1px solid ${T.mute}`,
              borderRadius: 6,
              padding: bp.mobile ? 8 : 10,
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              flex: 1,
              maxHeight: bp.mobile ? 140 : 170,
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {`{
  "schema_version": "olfactory_profile.v1",
  "metrics": { "confidence": ${s.metrics.confidence} },
  "limits": {
    "undetectable_classes": ["gases","pathogens"],
    "note": "Inference from visual cues only."
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}
