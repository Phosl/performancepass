import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findVideoBySlug, videos } from "@/lib/mock-data";
import { VideoDetailView } from "@/components/video/VideoDetailView";

interface VideoDetailPageProps { params: Promise<{ slug: string }> }

export function generateStaticParams() { return videos.map((video) => ({ slug: video.slug })); }

export async function generateMetadata({ params }: VideoDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = findVideoBySlug(slug);
  if (!video) return { title: "Video non trovato" };
  return { title: video.title, description: video.description };
}

export default async function VideoDetailPage({ params }: VideoDetailPageProps) {
  const { slug } = await params;
  const video = findVideoBySlug(slug);
  if (!video) notFound();
  return <VideoDetailView video={video} />;
}
