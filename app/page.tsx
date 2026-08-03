import type { Metadata } from "next";
import { HomeContent } from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "Allenati meglio",
  description: "Performance Pass crea un percorso personalizzato per ogni atleta con video, mini-corsi e vantaggi dedicati.",
};

export default function HomePage() {
  return <HomeContent />;
}
