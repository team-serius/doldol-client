import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (process.env.NODE_ENV === "development") {
    return {
      rules: {
        userAgent: "*",
        disallow: ["/"],
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/paper/", "/my-page/", "/invite/"],
    },
    sitemap: "https://doldol.wha1eson.co.kr/sitemap.xml",
  };
}
