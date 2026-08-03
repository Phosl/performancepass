import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { AppHeader } from "@/components/layout/AppHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageTransitionProvider } from "@/components/transitions/PageTransitionProvider";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://performancepass.demo"),
  title: { default: "Performance Pass", template: "%s | Performance Pass" },
  description: "Video, mini-corsi e vantaggi personalizzati per ogni specialità dell’atletica leggera.",
  openGraph: { title: "Performance Pass", description: "Il tuo percorso nell’atletica, personale.", type: "website", locale: "it_IT" },
};

export const viewport: Viewport = { themeColor: "#f7f7f3", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${manrope.variable}`}>
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
