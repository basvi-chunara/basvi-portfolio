import { useMemo } from "react";

interface Props {
  count?: number;
  intensity?: number; // 0..1 opacity multiplier
  className?: string;
}

const Rain = ({ count = 90, intensity = 1, className = "" }: Props) => {
  const drops = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: -Math.random() * 2,
        duration: 0.7 + Math.random() * 0.9,
        height: 14 + Math.random() * 22,
        opacity: (0.25 + Math.random() * 0.45) * intensity,
        key: i,
      })),
    [count, intensity]
  );

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden z-[2] ${className}`}
      aria-hidden
      style={{ opacity: intensity }}
    >
      {drops.map((d) => (
        <span
          key={d.key}
          className="absolute block"
          style={{
            left: `${d.left}%`,
            top: 0,
            width: 1,
            height: d.height,
            background:
              "linear-gradient(to bottom, hsl(210 40% 90% / 0) 0%, hsl(210 40% 90% / 0.85) 100%)",
            opacity: d.opacity,
            animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Rain;
