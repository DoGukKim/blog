import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://guk.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://guk.vercel.app/blog',
      lastModified: new Date(),
    },
  ]
}
