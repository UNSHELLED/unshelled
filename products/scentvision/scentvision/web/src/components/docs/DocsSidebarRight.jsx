import { T, F } from "../../theme/tokens.js";
import { useScrollSpy } from "../../hooks/useScrollSpy.js";

export function DocsSidebarRight({ bp, headings = [] }) {
    const ids = headings.map((h) => h.id);
    const activeId = useScrollSpy(ids, 140);

    if (bp.mobile || bp.tablet || headings.length === 0) return null;

    const sidebarStyle = {
        position: "sticky",
        top: "calc(var(--sv-nav-h) + 48px)",
        width: "var(--sv-spine-w)",
        flexShrink: 0,
        maxHeight: "calc(100vh - var(--sv-nav-h) - 64px)",
        overflowY: "auto",
        paddingLeft: 24,
        borderLeft: `1px solid ${T.faint}`,
        scrollbarWidth: "none",
    };

    const titleStyle = {
        fontFamily: "var(--sv-font-sans)",
        fontSize: 13,
        color: T.bone,
        fontWeight: 600,
        marginBottom: 16,
        letterSpacing: "0.02em",
    };

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <aside style={sidebarStyle} className="sv-docs-right-sidebar">
            <div style={titleStyle}>On this page</div>
            {headings.map((h) => {
                const isActive = activeId === h.id || (!activeId && headings[0].id === h.id);
                return (
                    <button
                        key={h.id}
                        onClick={() => scrollTo(h.id)}
                        style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            background: "none",
                            border: "none",
                            fontFamily: F.body,
                            fontSize: 12,
                            padding: "4px 0",
                            color: isActive ? T.amber : T.ghost,
                            fontWeight: isActive ? 500 : 400,
                            cursor: "pointer",
                            transition: "color 0.2s ease",
                        }}
                    >
                        {h.label}
                    </button>
                );
            })}
        </aside>
    );
}
