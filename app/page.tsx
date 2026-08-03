import type { Metadata } from "next";
import { HomeContent } from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Allenati da atleta",
  description: "Performance Pass crea un percorso personalizzato per l’atletica leggera con tecnica, mini-corsi e vantaggi dedicati.",
};

export default function HomePage() {
  return <HomeContent />;
}
