import { LegalPage } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Termini della demo", description: "Condizioni d’uso, natura dimostrativa e limiti dei contenuti Performance Pass.", path: "/termini", index: false });

const sections = [
  { title: "Natura dimostrativa", content: "Performance Pass è attualmente una demo frontend. Account, membership, progressi, corsi e operazioni mostrate nell’interfaccia sono simulati e non costituiscono un servizio commerciale attivo." },
  { title: "Partner e vantaggi mock", content: "Nomi, negozi, codici promozionali e percentuali presenti nella piattaforma sono contenuti dimostrativi. Non rappresentano offerte reali e non possono essere utilizzati per acquisti o prenotazioni." },
  { title: "Contenuti atletici", content: "Allenamenti e descrizioni hanno finalità di presentazione del prodotto e non sostituiscono il parere di coach, medici, fisioterapisti o professionisti qualificati. Ogni attività va adattata alle proprie condizioni." },
  { title: "Proprietà dei materiali", content: "Interfaccia, testi, illustrazioni e fotografie originali della demo sono materiali del progetto Performance Pass. Non è consentito riutilizzarli o distribuirli senza autorizzazione." },
];

export default function TermsPage() { return <LegalPage eyebrow="CONDIZIONI D’USO" title="Termini chiari, fin dall’inizio." introduction="Le regole essenziali per esplorare questa versione dimostrativa di Performance Pass." sections={sections} />; }
