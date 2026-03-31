import { T, F } from "../../theme/tokens.js";
import { sectionStyle } from "../../layout/sectionStyle.js";
import { Reveal } from "../Reveal.jsx";
import { Tag } from "../Tag.jsx";

const ENDPOINTS = [
  { method: "POST", path: "/v1/analyze", desc: "Image → olfactory_profile.v1", ver: "v0.1" },
  { method: "GET", path: "/v1/graph/:id", desc: "Direct SKG lookup", ver: "v0.1" },
  { method: "WS", path: "/v1/stream", desc: "Real-time frame analysis", ver: "v0.5" },
  { method: "POST", path: "/v1/batch", desc: "Up to 50 images parallel", ver: "v1.0" },
];

export function ApiSection({ bp }) {
  const sec = sectionStyle(bp);

  return (
    <section style={sec}>
      <Reveal>
        <Tag label="API" color={T.teal} />
        <h2 className="sv-display-lg" style={{ marginBottom: 20 }}>
          Self-host or use the CLI.
        </h2>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {ENDPOINTS.map((ep, i) => (
          <Reveal key={ep.path} delay={i * 30}>
            <div
              style={{
                display: "flex",
                alignItems: bp.mobile ? "flex-start" : "center",
                flexDirection: bp.mobile ? "column" : "row",
                gap: bp.mobile ? 3 : 10,
                padding: bp.mobile ? "10px 12px" : "10px 14px",
                borderRadius: 6,
                border: `1px solid ${T.mute}`,
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center", width: bp.mobile ? "100%" : "auto" }}>
                <span
                  style={{
                    fontFamily: F.mono,
                    fontSize: 9,
                    fontWeight: 500,
                    minWidth: 28,
                    color: ep.method === "WS" ? T.pulse : ep.method === "GET" ? T.teal : T.amber,
                  }}
                >
                  {ep.method}
                </span>
                <span style={{ fontFamily: F.mono, fontSize: bp.mobile ? 11 : 12, color: T.bone }}>{ep.path}</span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: F.mono,
                    fontSize: 8,
                    padding: "2px 6px",
                    borderRadius: 3,
                    background: T.mute,
                    color: T.dim,
                  }}
                >
                  {ep.ver}
                </span>
              </div>
              <span style={{ fontSize: 11, color: T.dim, fontStyle: "italic" }}>{ep.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
