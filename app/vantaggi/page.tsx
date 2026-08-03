import { BenefitsCatalog } from "@/components/catalog/BenefitsCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Vantaggi e partner per atleti",
  description: "Scopri partner e vantaggi Performance Pass per chiodate, pista, preparazione, gare e recovery.",
  path: "/vantaggi",
  keywords: ["sconti atleti", "negozi atletica", "scarpe chiodate", "partner sportivi", "recovery atleti"],
});

export default function BenefitsPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Il Pass che entra<br />anche in pista.</h1><p>Partner, impianti e prodotti selezionati per sostenere allenamento, gara e recupero.</p></header>
      <BenefitsCatalog />
    </>
  );
}
