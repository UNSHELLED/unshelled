import { T, F } from "../../theme/tokens.js";

export function HonestyCallout({ title = "Limits", children, type = "limits" }) {
    const isWarning = type === "warning" || type === "limits";

    const style = {
        background: isWarning ? T.roseDim : T.amberDim,
        borderLeft: `3px solid ${isWarning ? T.rose : T.amber}`,
        padding: "20px 24px",
        borderRadius: "0 8px 8px 0",
        marginBottom: 24,
    };

    const titleStyle = {
        fontFamily: "var(--sv-font-sans)",
        fontSize: 14,
        color: isWarning ? T.rose : T.amber,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        fontWeight: 600,
    };

    const bodyStyle = {
        fontFamily: F.body,
        fontSize: 14,
        color: T.bone,
        lineHeight: 1.6,
        margin: 0,
    };

    return (
        <div style={style}>
            <div style={titleStyle}>{title}</div>
            <div style={bodyStyle}>{children}</div>
        </div>
    );
}
