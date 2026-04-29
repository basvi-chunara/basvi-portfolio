import { useMemo } from "react";

interface Props { count?: number; }

const Petals = ({ count = 14 }: Props) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 14 + Math.random() * 16,
        size: 8 + Math.random() * 14,
        hue: Math.random() > 0.5 ? "var(--lotus)" : "var(--gold)",
        key: i,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[1]" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.key}
          className="absolute block rounded-[60%_40%_55%_45%/55%_50%_50%_45%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.7,
            background: `hsl(${p.hue} / 0.55)`,
            top: "-10vh",
            animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );
};

export default Petals;
