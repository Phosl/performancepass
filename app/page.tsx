import { HomeContent } from "@/components/home/HomeContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Performance Pass by Atletica TV | Membership per l’atletica",
  description: "Performance in pista, vantaggi fuori. Contenuti riservati e vantaggi esclusivi per la community di Atletica TV. Per professionisti ed amatori.",
  path: "/",
  absoluteTitle: true,
  keywords: ["Performance Pass", "Atletica TV", "membership atletica", "contenuti atletica", "formazione atletica"],
});

export default function HomePage() {
  return <HomeContent />;
}
