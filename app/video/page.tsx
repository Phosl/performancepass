import type { Metadata } from "next";
import { VideoCatalog } from "@/components/catalog/VideoCatalog";

export const metadata: Metadata = {
  title: "Video training",
  description: "Allenamenti video per corsa, fitness, ciclismo, nuoto, tennis e yoga. Filtra per sport e livello di accesso.",
};

export default function VideoPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Il tuo prossimo<br />allenamento.</h1><p>Sessioni brevi, tecniche e complete. Scegli lo sport e trova il contenuto giusto per oggi.</p></header>
      <VideoCatalog />
    </>
  );
}
