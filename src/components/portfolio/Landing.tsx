import { useState } from "react";
import rainyBg from "@/assets/rainy-stop.jpg";
import Rain from "./Rain";
import Fireflies from "./Fireflies";
import { Button } from "@/components/ui/button";

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

      {/* Ambient fireflies — purely decorative */}
      <Fireflies count={18} />

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
        <div
          className="mt-8 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button
            onClick={handleEnter}
            className="rounded-full bg-firefly/90 text-rain-deep hover:bg-firefly px-7 py-5 text-sm tracking-wide shadow-lamp"
          >
            Step inside
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
