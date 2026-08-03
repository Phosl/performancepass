import type { Metadata } from "next";
import { VideoCatalog } from "@/components/catalog/VideoCatalog";

export const metadata: Metadata = {
  title: "Video training",
  description: "Video tecnici per velocità, mezzofondo, ostacoli, salti, lanci, marcia e prove multiple.",
};

export default function VideoPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Il tuo prossimo<br />allenamento.</h1><p>Sessioni tecniche e complete. Scegli la specialità e trova il contenuto giusto per oggi.</p></header>
      <VideoCatalog />
    </>
  );
}
