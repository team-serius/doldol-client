import type { MetadataRoute } from "next";

const BASE_URL = "https://doldol.wha1eson.co.kr/";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.NODE_ENV === "development") {
    return [];
  }

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
