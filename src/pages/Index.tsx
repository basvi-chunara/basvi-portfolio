import { useEffect } from "react";
import Landing from "@/components/portfolio/Landing";
import Portfolio from "@/components/portfolio/Portfolio";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Fireflies from "@/components/portfolio/Fireflies";

const Index = () => {
  useEffect(() => {
    document.title = "Basvi Chunara · Data Enthusiast & CS Student";
    const desc =
      "Portfolio of Basvi Chunara — a Computing Science student at the University of Alberta turning data into useful, practical insights.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
    let c = document.querySelector('link[rel="canonical"]');
    if (!c) { c = document.createElement("link"); c.setAttribute("rel", "canonical"); document.head.appendChild(c); }
    c.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <>
      <CursorGlow />
      <Landing />
      <Portfolio />
      {/* Persistent fireflies that follow the user through the whole journey */}
      <div className="fixed inset-0 z-[60] pointer-events-none">
        <Fireflies count={10} />
      </div>
    </>
  );
};

export default Index;
