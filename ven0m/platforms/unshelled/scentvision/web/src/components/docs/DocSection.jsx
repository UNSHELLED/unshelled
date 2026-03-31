import { Reveal } from "../Reveal.jsx";

export function DocSection({ title, children, delay = 0, id }) {
    const h2Style = {
        fontFamily: "var(--sv-display)", // Fallback if F.display is not strictly mapped to var, but we typically use inline or clss
        fontSize: "var(--sv-text-xl, 24px)",
        color: "var(--sv-bone)",
        marginTop: 48,
        marginBottom: 16,
        scrollMarginTop: 100, // For anchor links under sticky nav
    };

    return (
        <Reveal delay={delay}>
            <section id={id} style={{ marginBottom: 40 }}>
                {title && (
                    <h2 className="sv-display-lg" style={h2Style}>
                        {title}
                    </h2>
                )}
                {children}
            </section>
        </Reveal>
    );
}
