/** Lovable's asset endpoint is not provided by external static hosts. */
export function getPortfolioImageUrl(asset: { url: string }): string {
  return new URL(asset.url, "https://basvichunara.lovable.app").href;
}