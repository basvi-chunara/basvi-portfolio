import { describe, expect, it } from "vitest";
import { getPortfolioImageUrl } from "./assets";

describe("portable portfolio images", () => {
  it("resolves hosted images without requesting GitHub's domain root", () => {
    expect(getPortfolioImageUrl({ url: "/__l5e/assets-v1/id/photo.jpg" }))
      .toBe("https://basvichunara.lovable.app/__l5e/assets-v1/id/photo.jpg");
  });

  it("preserves an already absolute image address", () => {
    expect(getPortfolioImageUrl({ url: "https://example.com/photo.jpg" }))
      .toBe("https://example.com/photo.jpg");
  });
});