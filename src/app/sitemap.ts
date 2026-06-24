import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.yunirides.com', lastModified: new Date() },
    { url: 'https://www.yunirides.com/become-a-driver', lastModified: new Date() },
    { url: 'https://www.yunirides.com/services', lastModified: new Date() },
    { url: 'https://www.yunirides.com/blog', lastModified: new Date() },
    { url: 'https://www.yunirides.com/contact-us', lastModified: new Date() },
    { url: 'https://www.yunirides.com/about', lastModified: new Date() },
    { url: 'https://www.yunirides.com/careers', lastModified: new Date() },
  ]
}