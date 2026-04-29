import { useState } from "react";
import rainyBg from "@/assets/rainy-stop.jpg";
import lanternImg from "@/assets/lantern.png";
import Rain from "./Rain";

interface Props { onEnter: () => void; }

const Landing = ({ onEnter }: Props) => {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onEnter, 850);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${leaving ? "animate-zoom-out" : "animate-fade-in"}`}
    >
      {/* Background scene */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${rainyBg})` }}
      />
      {/* Soft veil for legibility — light, not gloomy */}
      <div className="absolute inset-0 bg-gradient-to-b from-rain-deep/40 via-rain-deep/15 to-rain-deep/55" />

      {/* Rain */}
      <Rain count={140} intensity={0.9} />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-mist/90 mb-5 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Basvi Chunara
        </p>
        <h1
          className="font-display text-3xl md:text-5xl lg:text-6xl text-white max-w-3xl text-balance leading-tight animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          Turning data into useful insights.
        </h1>
        <p
          className="mt-5 text-sm md:text-base text-mist/90 max-w-md animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Tap the lamp to step inside.
        </p>

        {/* Lantern button — slightly off-center */}
        <button
          onClick={handleEnter}
          aria-label="Enter portfolio"
          className="group mt-12 ml-0 md:ml-32 relative animate-fade-up focus:outline-none focus-visible:ring-2 focus-visible:ring-lamp-soft rounded-full"
          style={{ animationDelay: "1s" }}
        >
          {/* Glow halo */}
          <div
            className={`absolute left-1/2 top-[26%] -translate-x-1/2 w-44 h-44 rounded-full bg-lamp-soft/40 blur-3xl ${
              leaving ? "animate-lamp-burst" : "animate-lamp"
            }`}
          />
          <div
            className={`absolute left-1/2 top-[28%] -translate-x-1/2 w-24 h-24 rounded-full bg-lamp/60 blur-2xl ${
              leaving ? "animate-lamp-burst" : "animate-lamp"
            }`}
          />
          <img
            src={lanternImg}
            alt="A glowing lamp inviting you in"
            width={220}
            height={220}
            className="relative w-40 md:w-48 transition-soft group-hover:scale-[1.04] group-active:scale-95 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          />
          <span className="block mt-3 text-xs uppercase tracking-[0.3em] text-mist/90 group-hover:text-white transition-soft">
            Enter
          </span>
        </button>
      </div>
    </div>
  );
};

export default Landing;
