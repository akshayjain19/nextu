import { insights } from "@/data/insights";
import { siteConfig } from "@/lib/config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const posts = insights.map((p) => `/insights/${p.slug}`);

  return [...staticRoutes, ...posts].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
