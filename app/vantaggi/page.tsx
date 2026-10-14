import { BenefitsCatalog } from "@/components/catalog/BenefitsCatalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Vantaggi della membership",
  description: "L’area Performance Pass dedicata ai vantaggi approvati per i membri di Atletica TV.",
  path: "/vantaggi",
  keywords: ["sconti atleti", "negozi atletica", "scarpe chiodate", "partner sportivi", "recovery atleti"],
});

export default function BenefitsPage() {
  return (
    <>
      <header className="shell pageTop"><h1>Vantaggi, quando<br />sono davvero pronti.</h1><p>Questa area ospiterà opportunità dedicate ai membri. Nessun nome, codice o condizione viene mostrato prima dell’approvazione.</p></header>
      <BenefitsCatalog />
    </>
  );
}
