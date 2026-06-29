import { useEffect } from "react";
import Portfolio from "@/components/portfolio/Portfolio";
import CursorGlow from "@/components/portfolio/CursorGlow";

const Index = () => {
  useEffect(() => {
    // Always start at the very top on (re)load
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

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
      <Portfolio />
    </>
  );
};

export default Index;
