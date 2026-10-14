import { CoursesCatalog } from "@/components/catalog/CoursesCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Corsi e formazione di atletica",
  description: "Percorsi formativi e corsi della membership Performance Pass by Atletica TV.",
  path: "/corsi",
  keywords: ["corsi atletica", "corso velocità", "tecnica salto in lungo", "forza esplosiva atletica"],
});

export default function CoursesPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Formazione da seguire.<br />Con i tuoi tempi.</h1><p>Percorsi brevi dedicati alla cultura tecnica dell’atletica. Alcune lezioni sono anteprime, le altre mostrano dettagli riservati ai membri demo.</p></header>
      <CoursesCatalog />
    </>
  );
}
