import { T, F } from "../../theme/tokens.js";

export function Footer({ bp }) {
  const side = bp.compact ? 14 : bp.mobile ? 16 : 32;
  const bottomPad = "max(24px, env(safe-area-inset-bottom, 0px))";

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        paddingTop: bp.mobile ? 32 : 36,
        paddingRight: `max(${side}px, env(safe-area-inset-right, 0px))`,
        paddingBottom: bottomPad,
        paddingLeft: `max(${side}px, env(safe-area-inset-left, 0px))`,
        borderTop: `1px solid ${T.mute}`,
        maxWidth: "min(960px, 100%)",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: bp.mobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: bp.mobile ? "flex-start" : "flex-end",
          gap: bp.mobile ? 16 : 0,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13 }} aria-hidden>
              🐙
            </span>
            <span style={{ fontFamily: F.mono, fontSize: 10, color: T.bone }}>
              UNSHELLED<span style={{ color: T.dim }}>.AI</span>
            </span>
            <span style={{ fontFamily: F.mono, fontSize: 8, color: T.dim }}>/ ScentVision</span>
          </div>
          <div style={{ fontSize: 11, color: T.dim, marginBottom: 4 }}>Cross-modal olfactory inference. Open source. Apache-2.0.</div>
          <div style={{ fontFamily: F.mono, fontSize: 8, color: T.pulse, opacity: 0.4 }}>Built with the VENOM methodology</div>
        </div>
        <div style={{ textAlign: bp.mobile ? "left" : "right", overflowWrap: "anywhere" }}>
          <div style={{ fontFamily: F.mono, fontSize: 9, color: T.dim }}>github.com/unshelled-ai/scentvision</div>
          <div style={{ fontFamily: F.mono, fontSize: 9, color: T.dim, marginTop: 2 }}>schema: olfactory_profile.v1</div>
        </div>
      </div>
    </footer>
  );
}
