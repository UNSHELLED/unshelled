import { useEffect, useRef } from "react";

/** Retina-aware canvas; size = CSS px */
export function Molecule({ color, size = 80 }) {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    c.width = size * dpr;
    c.height = size * dpr;
    ctx.scale(dpr, dpr);

    const ns = Array.from({ length: 5 }, (_, i) => ({
      x: size / 2 + Math.cos(i * 1.26) * (10 + i * 7),
      y: size / 2 + Math.sin(i * 1.26) * (10 + i * 7),
      r: 2 + Math.random() * 2.5,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    let run = true;
    let f = 0;

    const draw = () => {
      if (!run) return;
      ctx.clearRect(0, 0, size, size);
      const t = f * 0.008;
      ns.forEach((n) => {
        n.x += n.vx + Math.sin(t + n.r) * 0.1;
        n.y += n.vy + Math.cos(t + n.r) * 0.1;
        if (n.x < 10 || n.x > size - 10) n.vx *= -1;
        if (n.y < 10 || n.y > size - 10) n.vy *= -1;
        n.x = Math.max(10, Math.min(size - 10, n.x));
        n.y = Math.max(10, Math.min(size - 10, n.y));
      });
      ctx.strokeStyle = `${color}20`;
      ctx.lineWidth = 0.6;
      ns.forEach((a, i) =>
        ns.forEach((b, j) => {
          if (j > i && Math.hypot(a.x - b.x, a.y - b.y) < 40) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        })
      );
      ns.forEach((n, i) => {
        const p = 1 + Math.sin(t * 2 + i) * 0.08;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * p * 2);
        g.addColorStop(0, `${color}40`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * p * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `${color}88`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * p * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });
      f++;
      requestAnimationFrame(draw);
    };
    draw();
    return () => {
      run = false;
    };
  }, [color, size]);

  return <canvas ref={ref} style={{ width: size, height: size, flexShrink: 0 }} />;
}
