import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  return [
    {
      url: "https://doldol.wha1eson.co.kr/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
