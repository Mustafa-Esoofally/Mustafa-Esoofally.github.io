import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { PROFILE } from "../content/profileData";

// https://llmstxt.org - a plain-markdown map of the site for AI assistants.
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? "https://mustafa-esoofally.github.io/").replace(/\/$/, "");
  const strip = (h: string) => h.replace(/\s*<a [^>]*>(?:How|Learn more|See the work|Read more|See all client projects)[\s\S]*?<\/a>/g, "").replace(/<[^>]+>/g, "");
  const work = (await getCollection("work")).sort((a, b) => a.data.order - b.data.order);
  const projects = (await getCollection("projects")).sort((a, b) => a.data.order - b.data.order);
  const exps = (await getCollection("experiences")).sort((a, b) => a.data.order - b.data.order);
  const body = `# ${PROFILE.name}

> ${PROFILE.headLine} ${PROFILE.status}.

${PROFILE.highlights.map((h) => `- ${h.title}: ${strip(h.html)}`).join("\n")}
- ${PROFILE.shortIntros.map((i) => `${i.label}: ${strip(i.html)}`).join("")}

Contact: ${PROFILE.links.emailText} · GitHub: ${PROFILE.links.github} · LinkedIn: ${PROFILE.links.linkedin}

## Built at Agno
${work.map((w) => `- [${w.data.title}](${base}/work/${w.id}/): ${w.data.description}`).join("\n")}

## Projects
${projects.map((p) => `- [${p.data.title}](${base}/projects/${p.id}/): ${p.data.description}${p.data.private ? " (private repository)" : ""}`).join("\n")}

## Experience
${exps.map((e) => `- [${e.data.company} - ${e.data.title}](${base}/experiences/${e.id}/)`).join("\n")}

## Optional
- [Full site as one markdown file](${base}/llms-full.txt)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
