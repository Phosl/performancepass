import type { Metadata } from "next";
import { CoursesCatalog } from "@/components/catalog/CoursesCatalog";

export const metadata: Metadata = {
  title: "Mini-corsi",
  description: "Mini-corsi Performance Pass per costruire tecnica, forza e recupero con lezioni brevi e progressive.",
};

export default function CoursesPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Impara. Applica.<br />Migliora.</h1><p>Tre percorsi essenziali per capire cosa fare, perché funziona e come portarlo nel tuo allenamento.</p></header>
      <CoursesCatalog />
    </>
  );
}
