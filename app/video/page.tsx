import { VideoCatalog } from "@/components/catalog/VideoCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Video e video-lezioni",
  description: "Esplora le schede video e le video-lezioni della membership Performance Pass by Atletica TV.",
  path: "/video",
  keywords: ["video atletica", "tecnica di corsa", "allenamento velocità", "allenamento salti", "allenamento lanci"],
});

export default function VideoPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Video e<br />video-lezioni.</h1><p>Anteprime editoriali e contenuti riservati riuniti dalla membership. Le schede indicano con chiarezza quando il video completo non è disponibile nella demo.</p></header>
      <VideoCatalog />
    </>
  );
}
