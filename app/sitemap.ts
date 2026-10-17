import type { MetadataRoute } from "next";
import { projects, siteUrl } from "@/lib/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl.href, changeFrequency: "monthly", priority: 1 }, ...projects.map((project) => ({ url: new URL(`/work/${project.slug}`, siteUrl).href, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
