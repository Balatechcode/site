import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webcrafty.in'

  // Define all the major routes
  const routes = [
    '',
    '/about',
    '/services',
    '/services/website-development',
    '/services/app-development',
    '/services/digital-marketing',
    '/portfolio',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
