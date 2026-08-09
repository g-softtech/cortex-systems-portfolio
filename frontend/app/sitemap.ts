import { MetadataRoute } from 'next';
import { client } from '../sanity/lib/client';
import { articleSlugsQuery } from '../sanity/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultMap: MetadataRoute.Sitemap = [
    {
      url: 'https://cortexsystems.io',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  try {
    const articles = await client.fetch<{ slug: string }[]>(articleSlugsQuery);
    
    const articleMap: MetadataRoute.Sitemap = articles.map((article) => ({
      url: `https://cortexsystems.io/insights/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    return [...defaultMap, ...articleMap];
  } catch (error) {
    console.error("Failed to fetch Sanity articles for sitemap:", error);
    return defaultMap; // Always return the root map if Sanity goes down
  }
}