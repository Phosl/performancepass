import type { Metadata } from "next";
import { CoursesCatalog } from "@/components/catalog/CoursesCatalog";

export const metadata: Metadata = {
  title: "Mini-corsi",
  description: "Mini-corsi di atletica leggera per costruire tecnica, velocità e forza esplosiva con lezioni progressive.",
};

export default function CoursesPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Impara il gesto.<br />Portalo in pista.</h1><p>Tre percorsi essenziali per capire cosa fare, perché funziona e come trasferirlo nella tua specialità.</p></header>
      <CoursesCatalog />
    </>
  );
}
