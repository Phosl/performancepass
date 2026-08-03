import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { AppHeader } from "@/components/layout/AppHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageTransitionProvider } from "@/components/transitions/PageTransitionProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: { default: siteConfig.defaultTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "sport",
  referrer: "origin-when-cross-origin",
  keywords: ["atletica leggera", "allenamento atletica", "video training", "mini-corsi atletica", "velocità", "mezzofondo", "salti", "lanci"],
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
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [{ url: siteConfig.socialImage, width: 1448, height: 1086, alt: siteConfig.socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { themeColor: "#f7f7f3", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      inLanguage: siteConfig.language,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      applicationCategory: "SportsApplication",
      operatingSystem: "Web",
      inLanguage: siteConfig.language,
    },
  ];

  return (
    <html lang="it">
      <body className={`${inter.variable} ${manrope.variable}`}>
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
