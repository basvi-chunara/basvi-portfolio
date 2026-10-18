import { describe, expect, it } from "vitest";
import { getAppBasename } from "./routing";

describe("deployment routing", () => {
  it("strips the GitHub Pages repository prefix from the homepage", () => {
    expect(getAppBasename("/basvi-portfolio/", "/basvi-portfolio/")).toBe("/basvi-portfolio");
  });

  it("keeps the Lovable root homepage reachable", () => {
    expect(getAppBasename("/", "/basvi-portfolio/")).toBe("/");
  });

  it("keeps unknown routes inside the repository routed to the existing fallback", () => {
    expect(getAppBasename("/basvi-portfolio/missing", "/basvi-portfolio/")).toBe("/basvi-portfolio");
  });

  it("does not confuse similarly named paths with the deployment prefix", () => {
    expect(getAppBasename("/basvi-portfolio-other/", "/basvi-portfolio/")).toBe("/");
  });
});