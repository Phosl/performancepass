import { HomeContent } from "@/components/home/HomeContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Performance Pass by Atletica TV | Membership per l’atletica",
  description: "La membership di Atletica TV che riunisce vantaggi dedicati, contenuti riservati e formazione.",
  path: "/",
  absoluteTitle: true,
  keywords: ["Performance Pass", "Atletica TV", "membership atletica", "contenuti atletica", "formazione atletica"],
});

export default function HomePage() {
  return <HomeContent />;
}
