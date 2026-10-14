import { PartnerDirectory } from "@/components/catalog/PartnerDirectory";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Partner Performance Pass",
  description: "L’area dedicata ai partner approvati della membership Performance Pass by Atletica TV.",
  path: "/partner",
  keywords: ["partner Performance Pass", "vantaggi membri", "negozi atletica", "Atletica TV"],
});

export default function PartnerPage() {
  return (
    <>
      <header className="shell pageTop">
        <h1>Una rete da costruire<br />con informazioni reali.</h1>
        <p>Qui compariranno soltanto partner approvati, insieme a condizioni e riferimenti verificabili. Al momento la directory è volutamente vuota.</p>
      </header>
      <PartnerDirectory />
    </>
  );
}
