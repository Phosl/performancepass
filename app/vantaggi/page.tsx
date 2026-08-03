import type { Metadata } from "next";
import { BenefitsCatalog } from "@/components/catalog/BenefitsCatalog";

export const metadata: Metadata = {
  title: "Vantaggi per i membri",
  description: "Scopri partner e vantaggi Performance Pass per chiodate, pista, preparazione, gare e recovery.",
};

export default function BenefitsPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Il Pass che entra<br />anche in pista.</h1><p>Partner, impianti e prodotti selezionati per sostenere allenamento, gara e recupero.</p></header>
      <BenefitsCatalog />
    </>
  );
}
