import type { MetadataRoute } from "next";
import { videos } from "@/lib/mock-data";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const publicPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/video"), lastModified, changeFrequency: "weekly", priority: .9 },
    { url: absoluteUrl("/corsi"), lastModified, changeFrequency: "monthly", priority: .8 },
    { url: absoluteUrl("/vantaggi"), lastModified, changeFrequency: "weekly", priority: .8 },
  ];
  const videoPages: MetadataRoute.Sitemap = videos.map((video) => ({
    url: absoluteUrl(`/video/${video.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: .7,
    images: [absoluteUrl(video.image)],
  }));

  return [...publicPages, ...videoPages];
}
