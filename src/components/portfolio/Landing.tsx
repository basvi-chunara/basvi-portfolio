import { useState } from "react";
import skyBg from "@/assets/ghibli-sky.jpg";
import lotusImg from "@/assets/lotus.png";

interface Props { onEnter: () => void; }

const Landing = ({ onEnter }: Props) => {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 850);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${leaving ? "animate-zoom-out" : "animate-fade-in"}`}
    >
      {/* Sky background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-cloud"
        style={{ backgroundImage: `url(${skyBg})`, transform: "scale(1.08)" }}
      />
      {/* Soft veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />

      {/* Drifting clouds (CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[-10%] w-72 h-24 rounded-full bg-white/40 blur-2xl animate-cloud" style={{ animationDuration: "40s" }} />
        <div className="absolute top-[35%] right-[-15%] w-96 h-28 rounded-full bg-white/35 blur-3xl animate-cloud" style={{ animationDuration: "55s", animationDirection: "alternate-reverse" }} />
      </div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <p className="font-poetic text-2xl md:text-3xl text-sage-deep/80 mb-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          welcome, traveler
        </p>
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground/90 max-w-3xl text-balance leading-tight animate-fade-up" style={{ animationDelay: "0.5s" }}>
          Step into my world of <em className="text-lotus-deep not-italic font-medium">data</em>, stories,<br className="hidden md:inline" /> and quiet creation.
        </h1>
        <p className="mt-6 text-muted-foreground max-w-xl text-balance animate-fade-up" style={{ animationDelay: "0.9s" }}>
          A portfolio painted in pastels — touch the lotus to begin.
        </p>

        {/* Lotus button */}
        <button
          onClick={handleEnter}
          className="mt-12 group relative animate-fade-up"
          style={{ animationDelay: "1.2s" }}
          aria-label="Enter portfolio"
        >
          <div className="absolute inset-0 rounded-full bg-lotus/30 blur-2xl scale-110 animate-pulse-soft" />
          <img
            src={lotusImg}
            alt="A glowing lotus, the entry to the portfolio"
            width={180}
            height={180}
            className="relative w-40 h-40 md:w-48 md:h-48 animate-drift transition-soft group-hover:scale-110 group-active:scale-95"
            style={{ imageRendering: "auto" }}
          />
          <span className="block mt-4 font-poetic text-xl text-sage-deep/80 group-hover:text-lotus-deep transition-soft">
            enter
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
