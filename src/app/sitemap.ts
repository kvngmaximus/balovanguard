import type { MetadataRoute } from "next";
import { links } from "@/lib/data";

const baseUrl = "https://abdulmajeed.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...links.map((l) => l.hash)].filter(
    (p, idx, arr) => arr.indexOf(p) === idx
  );

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}