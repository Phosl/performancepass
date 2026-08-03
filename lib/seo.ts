import type { Metadata } from "next";

const fallbackSiteUrl = "https://performancepass.it";

function resolveSiteUrl() {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export const siteConfig = {
  name: "Performance Pass",
  defaultTitle: "Performance Pass | Allenamento per l’atletica leggera",
  description: "Video tecnici, mini-corsi e vantaggi personalizzati per velocità, fondo, ostacoli, salti, lanci, marcia e prove multiple.",
  url: resolveSiteUrl(),
  locale: "it_IT",
  language: "it-IT",
  socialImage: "/images/generated/athletics-sprint.webp",
  socialImageAlt: "Velocista in accelerazione sulla pista di atletica Performance Pass",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
  imageAlt?: string;
  index?: boolean;
  keywords?: string[];
}

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = siteConfig.socialImage,
  imageAlt = siteConfig.socialImageAlt,
  index = true,
  keywords,
}: PageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: { "it-IT": path },
    },
    robots: index ? undefined : {
      index: false,
      follow: true,
      nocache: true,
      googleBot: { index: false, follow: true, noimageindex: true },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [{ url: image, width: 1448, height: 1086, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
