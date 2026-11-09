import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lumin27.com",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
