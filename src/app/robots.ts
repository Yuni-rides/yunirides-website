import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      { userAgent: 'GPTBot',        allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot',     allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ChatGPT-User',  allow: '/' },
      { userAgent: 'GoogleOther',   allow: '/' },
    ],
    sitemap: 'https://www.yunirides.com/sitemap.xml',
  }
}