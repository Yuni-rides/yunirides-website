import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yunirides.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/services`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/about`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/careers`,             lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/become-a-driver`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`,                lastModified: new Date(), changeFrequency: 'daily',   priority: 0.6 },
  ]

  const statePages: MetadataRoute.Sitemap = [
    'california',
    'illinois',
    'arizona',
    'washington-school-transportation',
    'texas-school-transportation',
  ].map((state) => ({
    url: `${baseUrl}/${state}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const blogPosts: MetadataRoute.Sitemap = [
    'best-school-kids-transportation-service',
    'yuni-rides-safe-special-needs-transportation-services',
    'ultimate-guide-special-needs-student-transportation',
    'school-bus-alternatives-for-illinois-families',
    'chicago-special-needs-transportation-parents-trust',
    'california-school-driver-jobs',
    'unpredictable-uber-income-chicago',
    'evolution-of-school-transportation-2026',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // B2B pages — in banao phir uncomment karna
  // const b2bPages: MetadataRoute.Sitemap = [
  //   'school-district-transportation-services',
  //   'mckinney-vento-transportation',
  //   'iep-special-education-transportation',
  //   'special-needs-transportation-california',
  //   'special-needs-transportation-illinois',
  // ].map((slug) => ({
  //   url: `${baseUrl}/${slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.9,
  // }))

  return [...staticPages, ...statePages, ...blogPosts]
}