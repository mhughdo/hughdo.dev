import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hughdo.dev/sitemap.xml',
    host: 'https://hughdo.dev',
  }
}
