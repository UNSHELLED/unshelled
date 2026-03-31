import { useState, useEffect } from "react";

/**
 * Tracks which heading (h2, h3) is currently visible in the viewport.
 * @param {string[]} ids Array of element IDs to watch.
 */
export function useScrollSpy(ids, offset = 100) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        if (!ids || ids.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: `-${offset}px 0px -40% 0px`, threshold: 0.1 }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, [ids, offset]);

    return activeId;
}
