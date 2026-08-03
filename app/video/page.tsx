import { VideoCatalog } from "@/components/catalog/VideoCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Video di atletica leggera",
  description: "Video tecnici per velocità, mezzofondo, ostacoli, salti, lanci, marcia e prove multiple.",
  path: "/video",
  keywords: ["video atletica", "tecnica di corsa", "allenamento velocità", "allenamento salti", "allenamento lanci"],
});

export default function VideoPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Il tuo prossimo<br />allenamento.</h1><p>Sessioni tecniche e complete. Scegli la specialità e trova il contenuto giusto per oggi.</p></header>
      <VideoCatalog />
    </>
  );
}
