import { CoursesCatalog } from "@/components/catalog/CoursesCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Mini-corsi di atletica leggera",
  description: "Mini-corsi di atletica leggera per costruire tecnica, velocità e forza esplosiva con lezioni progressive.",
  path: "/corsi",
  keywords: ["corsi atletica", "corso velocità", "tecnica salto in lungo", "forza esplosiva atletica"],
});

export default function CoursesPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Impara il gesto.<br />Portalo in pista.</h1><p>Tre percorsi essenziali per capire cosa fare, perché funziona e come trasferirlo nella tua specialità.</p></header>
      <CoursesCatalog />
    </>
  );
}
