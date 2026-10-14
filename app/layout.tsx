import type { Metadata, Viewport } from "next";
import { AppProviders } from "@/components/providers/AppProviders";
import { AppHeader } from "@/components/layout/AppHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageTransitionProvider } from "@/components/transitions/PageTransitionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.scss";

const siteTitle = "Performance Pass | La membership di Atletica TV";
const siteDescription = "Performance Pass è la membership di Atletica TV con vantaggi dedicati, contenuti riservati e formazione per chi vive l’atletica.";
const socialImageAlt = "Atleta in pista per Performance Pass, la membership di Atletica TV";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: { default: siteTitle, template: `%s | ${siteConfig.name}` },
  description: siteDescription,
  applicationName: siteConfig.name,
  authors: [{ name: "Atletica TV" }],
  creator: "Atletica TV",
  publisher: "Atletica TV",
  category: "sport",
  referrer: "origin-when-cross-origin",
  keywords: ["Performance Pass", "Atletica TV", "membership atletica", "vantaggi atleti", "contenuti atletica", "corsi atletica", "video-lezioni atletica", "webinar atletica"],
  alternates: { canonical: "/", languages: { "it-IT": "/" } },
  manifest: "/manifest.webmanifest",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: siteConfig.socialImage, width: 1448, height: 1086, alt: socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteConfig.socialImage],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { themeColor: "#07090d", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      alternateName: "Performance Pass by Atletica TV",
      url: absoluteUrl("/"),
      description: siteDescription,
      inLanguage: siteConfig.language,
      publisher: { "@id": "https://atletica.tv/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://atletica.tv/#organization",
      name: "Atletica TV",
      url: "https://atletica.tv/",
      brand: {
        "@type": "Brand",
        name: siteConfig.name,
        url: absoluteUrl("/"),
      },
    },
  ];

  return (
    <html lang="it">
      <body>
        <JsonLd data={structuredData} />
        <AppProviders>
          <PageTransitionProvider persistent={<AppHeader />}>
            <main id="main-content" tabIndex={-1}>{children}</main>
            <SiteFooter />
          </PageTransitionProvider>
        </AppProviders>
      </body>
    </html>
  );
}
