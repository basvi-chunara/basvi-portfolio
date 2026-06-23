import { useEffect, useState } from "react";
import rainyBg from "@/assets/rainy-stop.jpg";
import Rain from "./Rain";

const Landing = () => {
  // 0 at top of page, 1 when the first viewport has fully scrolled away.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / vh)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Background gradually softens and blurs as the user scrolls into the portfolio.
  const blurPx = progress * 18;
  const sceneOpacity = 1 - progress * 0.9;
  const contentOpacity = 1 - Math.min(1, progress * 1.6);
  const rainIntensity = Math.max(0, 1 - progress * 1.15);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fixed background scene that fades + blurs while scrolling */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center will-change-[filter,opacity]"
        style={{
          backgroundImage: `url(${rainyBg})`,
          filter: `blur(${blurPx}px) brightness(${1 - progress * 0.35})`,
          opacity: sceneOpacity,
          transform: `scale(${1 + progress * 0.06})`,
        }}
        aria-hidden
      />
      {/* Soft veil for legibility — light, not gloomy */}
      <div
        className="fixed inset-0 z-0 bg-gradient-to-b from-rain-deep/40 via-rain-deep/15 to-rain-deep/55"
        style={{ opacity: sceneOpacity }}
        aria-hidden
      />

      {/* Rain — gradually thins out as user scrolls */}
      {rainIntensity > 0.02 && (
        <Rain count={140} intensity={rainIntensity * 0.9} />
      )}

      {/* Content */}
      <div
        className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity: contentOpacity, transform: `translateY(${progress * -20}px)` }}
      >
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
          Scroll to follow the fireflies inside.
        </p>
      </div>
    </section>
  );
};

export default Landing;
