import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findVideoBySlug, videos } from "@/lib/mock-data";
import { VideoDetailView } from "@/components/video/VideoDetailView";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

interface VideoDetailPageProps { params: Promise<{ slug: string }> }

export function generateStaticParams() { return videos.map((video) => ({ slug: video.slug })); }

export async function generateMetadata({ params }: VideoDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = findVideoBySlug(slug);
  if (!video) return { title: "Video non trovato", robots: { index: false, follow: false } };
  return createPageMetadata({
    title: video.title,
    description: video.description,
    path: `/video/${video.slug}`,
    image: video.image,
    imageAlt: video.imageAlt,
    keywords: [...video.tags, ...video.disciplines, ...video.goals],
  });
}

export default async function VideoDetailPage({ params }: VideoDetailPageProps) {
  const { slug } = await params;
  const video = findVideoBySlug(slug);
  if (!video) notFound();
  const pageUrl = absoluteUrl(`/video/${video.slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: video.title,
    description: video.description,
    url: pageUrl,
    thumbnailUrl: absoluteUrl(video.image),
    inLanguage: "it-IT",
    learningResourceType: "Video training",
    educationalLevel: video.level,
    timeRequired: `PT${video.duration}M`,
    isAccessibleForFree: video.access === "free",
    about: [...video.disciplines, ...video.goals],
    provider: { "@type": "Organization", name: "Performance Pass", url: absoluteUrl("/") },
  };

  return <><JsonLd data={structuredData} /><VideoDetailView video={video} /></>;
}
