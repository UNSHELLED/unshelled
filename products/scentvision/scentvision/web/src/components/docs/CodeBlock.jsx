import { useState } from "react";
import { T, F } from "../../theme/tokens.js";

function CopyIcon({ copied }) {
    if (copied) {
        return <span style={{ color: T.pulse, fontSize: 12 }}>✓ Copied</span>;
    }
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    );
}

export function CodeBlock({ children, content, tabs = false }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const textToCopy = tabs && content ? content[activeIdx].code : children;
        if (typeof textToCopy === "string" || typeof textToCopy === "number") {
            try {
                await navigator.clipboard.writeText(textToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error("Failed to copy:", err);
            }
        }
    };

    const containerStyle = {
        background: T.abyss,
        borderRadius: 8,
        border: `1px solid ${T.edge}`,
        marginBottom: 24,
        overflow: "hidden",
    };

    const codeStyle = {
        fontFamily: F.mono,
        fontSize: 13,
        color: T.amber,
        padding: "16px 20px",
        display: "block",
        overflowX: "auto",
        lineHeight: 1.5,
        margin: 0,
    };

    if (!tabs || !content) {
        return (
            <div style={containerStyle}>
                <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px 12px 0", height: 28 }}>
                    <button
                        onClick={handleCopy}
                        title="Copy to clipboard"
                        style={{
                            background: "transparent", border: "none", cursor: "pointer",
                            color: T.ghost, display: "flex", alignItems: "center", gap: 6,
                        }}
                    >
                        <CopyIcon copied={copied} />
                    </button>
                </div>
                <pre style={{ margin: 0 }}>
                    <code style={codeStyle}>{children}</code>
                </pre>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: T.void, // Slightly darker header
                borderBottom: `1px solid ${T.edge}`,
                padding: "0 12px",
                height: 40,
            }}>
                <div style={{ display: "flex", gap: 16, height: "100%" }}>
                    {content.map((tab, idx) => (
                        <button
                            key={tab.label}
                            onClick={() => { setActiveIdx(idx); setCopied(false); }}
                            style={{
                                fontFamily: F.mono,
                                fontSize: 12,
                                color: activeIdx === idx ? T.bone : T.dim,
                                background: "transparent",
                                border: "none",
                                borderBottom: `2px solid ${activeIdx === idx ? T.pulse : "transparent"}`,
                                cursor: "pointer",
                                padding: "0 4px",
                                height: "100%",
                                transition: "all 0.2s",
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleCopy}
                    title="Copy to clipboard"
                    style={{
                        background: "transparent", border: "none", cursor: "pointer",
                        color: T.ghost, display: "flex", alignItems: "center", gap: 6,
                    }}
                >
                    <CopyIcon copied={copied} />
                </button>
            </div>
            <pre style={{ margin: 0 }}>
                <code style={codeStyle}>{content[activeIdx].code}</code>
            </pre>
        </div>
    );
}
