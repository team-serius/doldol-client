import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/auth/','/paper/','/my-page/']
    },
    sitemap: 'https://doldol.wha1eson.co.kr//sitemap.xml',
  }
}