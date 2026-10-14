import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { PROFILE } from "../content/profileData";

// Diagrams are MDX components; give AI readers a plain-text version instead of markup.
const readProp = (attrs: string, key: string) => {
  const start = attrs.indexOf(key + "={");
  if (start < 0) return undefined;
  let i = start + key.length + 2, depth = 1;
  for (let j = i; j < attrs.length; j++) {
    if (attrs[j] === "{") depth++;
    else if (attrs[j] === "}" && --depth === 0) return JSON.parse(attrs.slice(i, j));
  }
};
const flowToText = (body: string) =>
  body
    .replace(/^import .*$/gm, "")
    .replace(/<Flow ([\s\S]*?) \/>/g, (_m, attrs: string) => {
      const steps: { label: string; title?: string; items: string[] }[] = readProp(attrs, "steps") ?? [];
      const flow = steps.map((st) => `${st.label}${st.title ? ": " + st.title : ""} (${st.items.join(", ")})`).join(" -> ");
      const loop = readProp(attrs, "loop"), caption = readProp(attrs, "caption");
      return [`Diagram: ${flow}`, loop && `Loop: ${loop}`, caption && `Caption: ${caption}`].filter(Boolean).join("\n");
    });

export const GET: APIRoute = async () => {
  const strip = (h: string) => h.replace(/\s*<a [^>]*>(?:How|Learn more|See the work|Read more|See all client projects)[\s\S]*?<\/a>/g, "").replace(/<[^>]+>/g, "");
  const fmtLinks = (links: { label: string; href: string }[] = []) =>
    links.length ? "\n\nLinks: " + links.map((l) => `[${l.label}](${l.href})`).join(" · ") : "";
  const sec = async (name: "work" | "projects" | "experiences", heading: string) => {
    const items = (await getCollection(name)).sort((a: any, b: any) => (a.data.order ?? 99) - (b.data.order ?? 99));
    return `## ${heading}\n\n` + items.map((i: any) => {
      const t = i.data.company ? `${i.data.company} - ${i.data.title}` : i.data.title;
      const sub = [i.data.description ?? i.data.summary, i.data.role].filter(Boolean).join(" ");
      return `### ${t}\n\n${sub}${fmtLinks(i.data.links)}\n\n${flowToText(i.body).trim()}`;
    }).join("\n\n");
  };
  const body = `# ${PROFILE.name}

${PROFILE.headLine}

${PROFILE.headLine2}

${PROFILE.highlights.map((h) => `- ${h.title}: ${strip(h.html)}`).join("\n")}

Skills: ${PROFILE.skills.join(", ")}

Education: ${PROFILE.studies.map((s) => `${s.title} (${s.endYear})`).join("; ")}

Contact: ${PROFILE.links.emailText} · ${PROFILE.links.github} · ${PROFILE.links.linkedin}

${await sec("experiences", "Experience")}

${await sec("work", "Built at Agno")}

${await sec("projects", "Projects")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
