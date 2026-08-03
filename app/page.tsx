import { HomeContent } from "@/components/home/HomeContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Performance Pass | Allenamento per l’atletica leggera",
  description: "Performance Pass crea un percorso personalizzato per l’atletica leggera con tecnica, mini-corsi e vantaggi dedicati.",
  path: "/",
  absoluteTitle: true,
  keywords: ["performance atletica", "allenamento personalizzato", "atletica leggera", "contenuti per atleti"],
});

export default function HomePage() {
  return <HomeContent />;
}
