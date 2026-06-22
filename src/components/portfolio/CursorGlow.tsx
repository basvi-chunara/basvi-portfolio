import { useEffect, useRef, useState } from "react";

/**
 * A small glowing firefly that follows the cursor.
 * Uses rAF + lerp so motion feels gentle, not snappy.
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -500, y: -500 });
  const pos = useRef({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-firefly hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    />
  );
};

export default CursorGlow;
