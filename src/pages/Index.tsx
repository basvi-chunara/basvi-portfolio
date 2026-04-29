import { useEffect, useState } from "react";
import Landing from "@/components/portfolio/Landing";
import Portfolio from "@/components/portfolio/Portfolio";
import CursorGlow from "@/components/portfolio/CursorGlow";
import Petals from "@/components/portfolio/Petals";

const Index = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.title = "Basvi Chunara · Data Science Portfolio";
    const desc = "Ghibli-inspired portfolio of Basvi Chunara — Computing Science student crafting calm, considered work in data science, ML and analytics.";
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
      <Petals count={12} />
      {!entered && <Landing onEnter={() => setEntered(true)} />}
      <Portfolio />
    </>
  );
};

export default Index;
