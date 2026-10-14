import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? "https://mustafa-esoofally.github.io/").replace(/\/$/, "");
  const paths = [
    "/", "/work/", "/projects/", "/experiences/",
    ...(await getCollection("work")).map((e) => `/work/${e.id}/`),
    ...(await getCollection("projects")).map((e) => `/projects/${e.id}/`),
    ...(await getCollection("experiences")).map((e) => `/experiences/${e.id}/`),
    "/llms.txt", "/llms-full.txt",
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
