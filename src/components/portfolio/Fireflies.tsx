import { useMemo } from "react";

interface Props {
  count?: number;
  className?: string;
  /**
   * "center" → drift loosely around the middle (landing scene).
   * "edges"  → stay close to the left/right viewport edges so they
   *            never sit behind body content.
   */
  layout?: "center" | "edges";
}

/**
 * A small cluster of softly glowing fireflies — purely decorative.
 * They drift and pulse gently. In "edges" layout each firefly is
 * pinned near the left or right margin so they guide the eye along
 * the page without sitting behind readable content.
 */
const Fireflies = ({ count = 14, className = "", layout = "center" }: Props) => {
  const flies = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const onRight = i % 2 === 1;
        // Edge band: 0–10% on the left, 90–100% on the right.
        const edgeLeft = onRight
          ? 90 + Math.random() * 9
          : 1 + Math.random() * 9;
        return {
          key: i,
          left: layout === "edges" ? edgeLeft : 18 + Math.random() * 64,
          top: layout === "edges" ? 5 + Math.random() * 90 : 30 + Math.random() * 50,
          size: 3 + Math.random() * 3,             // 3–6px — smaller, subtler
          delay: -Math.random() * 6,
          duration: 8 + Math.random() * 8,         // slower drift
          pulseDelay: -Math.random() * 3,
          // Smaller drift range on edges so they don't wander far inward
          dx: (Math.random() - 0.5) * (layout === "edges" ? 40 : 80),
          dy: (Math.random() - 0.5) * (layout === "edges" ? 80 : 60),
        };
      }),
    [count, layout]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    >
      {flies.map((f) => (
        <span
          key={f.key}
          className="absolute grid place-items-center"
          style={{
            left: `calc(${f.left}% - 12px)`,
            top: `calc(${f.top}% - 12px)`,
            width: 24,
            height: 24,
            animation: `firefly-drift ${f.duration}s ease-in-out ${f.delay}s infinite`,
            ["--dx" as any]: `${f.dx}px`,
            ["--dy" as any]: `${f.dy}px`,
          }}
        >
          <span
            aria-hidden="true"
            className="block rounded-full"
            style={{
              width: f.size,
              height: f.size,
              background:
                "radial-gradient(circle, hsl(50 95% 80% / 0.85) 0%, hsl(45 85% 65% / 0.55) 40%, hsl(40 80% 55% / 0) 75%)",
              boxShadow:
                "0 0 6px 1px hsl(50 95% 70% / 0.35), 0 0 14px 4px hsl(45 90% 60% / 0.18)",
              animation: `firefly-pulse 3.4s ease-in-out ${f.pulseDelay}s infinite`,
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default Fireflies;