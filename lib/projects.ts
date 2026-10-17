export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tools: string[];
  summary: string;
  coverImage: string;
  accentColor: string;
  sections: { heading: string; body: string; image?: string }[];
};

// Deliberately unfilled: replace these placeholders with verified project facts.
export const projects: Project[] = [
  { slug: "project-1", title: "[PROJECT 1]", accentColor: "#9A3412" },
  { slug: "project-2", title: "[PROJECT 2]", accentColor: "#3F6212" },
  { slug: "project-3", title: "[PROJECT 3]", accentColor: "#1E40AF" },
  { slug: "project-4", title: "[PROJECT 4]", accentColor: "#166534" },
].map((project) => ({
  ...project,
  client: "[Client type]",
  year: "[Year]",
  role: "[Role]",
  tools: ["[Tools]"],
  summary: "A space for the project story. Details, process, and final work will be added here when available.",
  coverImage: `/covers/${project.slug}.jpg`,
  sections: [
    { heading: "The brief", body: "[Add the verified client context, the problem to solve, and the goals of this project.]" },
    { heading: "The approach", body: "[Describe your contribution, design decisions, development process, and the tools actually used.]", image: `/covers/${project.slug}.jpg` },
    { heading: "The outcome", body: "[Add the completed work and verified outcomes. Include metrics or a testimonial only with supporting evidence and permission.]" },
  ],
}));

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com");
// Example address; replace with a real studio inbox before publishing.
export const contactEmail = "hello@jetit.example";
export const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxMCI+PHBhdGggZmlsbD0iI2UyZThmMCIgZD0iTTAgMGgxNnYxMEgweiIvPjwvc3ZnPg==";

export function jsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
