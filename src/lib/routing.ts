/** Apply Vite's deployment prefix only when the URL is actually under it. */
export function getAppBasename(pathname: string, baseUrl: string): string {
  const base = `/${baseUrl.split("/").filter(Boolean).join("/")}`;
  return base !== "/" && (pathname === base || pathname.startsWith(`${base}/`))
    ? base
    : "/";
}