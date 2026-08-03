import type { Metadata } from "next";
import { BenefitsCatalog } from "@/components/catalog/BenefitsCatalog";

export const metadata: Metadata = {
  title: "Vantaggi per i membri",
  description: "Sconti e benefit riservati ai membri Performance Pass su nutrizione, attrezzatura, training e recovery.",
};

export default function BenefitsPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Il Pass che ti dà<br />qualcosa in più.</h1><p>Partner selezionati, prodotti utili e vantaggi concreti per sostenere la tua performance.</p></header>
      <BenefitsCatalog />
    </>
  );
}
