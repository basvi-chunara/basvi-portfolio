import { useMemo } from "react";

interface Props {
  count?: number;
  /** Whether fireflies should be clickable to trigger onClick */
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
}

/**
 * A small cluster of softly glowing fireflies.
 * Each firefly drifts gently and pulses; if `interactive` is true,
 * clicking any firefly invokes `onClick`.
 */
const Fireflies = ({ count = 14, interactive = false, onClick, className = "" }: Props) => {
  const flies = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        key: i,
        left: 18 + Math.random() * 64,           // keep them roughly centered
        top: 30 + Math.random() * 50,
        size: 4 + Math.random() * 4,             // 4–8px
        delay: -Math.random() * 6,
        duration: 6 + Math.random() * 6,         // drift speed
        pulseDelay: -Math.random() * 3,
        dx: (Math.random() - 0.5) * 80,          // drift range px
        dy: (Math.random() - 0.5) * 60,
      })),
    [count]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden={!interactive}
    >
      {flies.map((f) => (
        <button
          key={f.key}
          type="button"
          onClick={interactive ? onClick : undefined}
          aria-label={interactive ? "Enter portfolio" : undefined}
          tabIndex={interactive ? 0 : -1}
          className={`absolute rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-firefly/70 ${
            interactive ? "pointer-events-auto cursor-pointer" : ""
          }`}
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: "radial-gradient(circle, hsl(50 95% 78% / 1) 0%, hsl(45 90% 65% / 0.9) 35%, hsl(40 80% 55% / 0) 70%)",
            boxShadow:
              "0 0 8px 2px hsl(50 95% 70% / 0.55), 0 0 18px 6px hsl(45 90% 60% / 0.30)",
            animation: `firefly-drift ${f.duration}s ease-in-out ${f.delay}s infinite, firefly-pulse 2.6s ease-in-out ${f.pulseDelay}s infinite`,
            // expose drift distances to keyframes
            ["--dx" as any]: `${f.dx}px`,
            ["--dy" as any]: `${f.dy}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;