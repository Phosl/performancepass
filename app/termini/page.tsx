import { LegalPage } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Termini della demo", description: "Condizioni d’uso, natura dimostrativa e limiti dei contenuti Performance Pass.", path: "/termini", index: false });

const sections = [
  { title: "Natura dimostrativa", content: "Performance Pass è attualmente una demo frontend della membership di Atletica TV. Le interazioni mostrate servono a presentare il prodotto e non costituiscono un servizio commerciale attivo." },
  { title: "Nessun account o pagamento reale", content: "L’attivazione del Pass è simulata nel browser: non crea un account, non conclude un contratto, non attiva un abbonamento e non acquisisce né elabora dati di pagamento." },
  { title: "Partner e vantaggi non attivi", content: "La demo non pubblica nomi, codici, percentuali o convenzioni non approvati. Le aree predisposte non rappresentano offerte utilizzabili per acquisti, prenotazioni o richieste di rimborso." },
  { title: "Contenuti non erogati", content: "Titoli, anteprime, corsi, video-lezioni e webinar rappresentano la futura esperienza editoriale. La demo non eroga video reali né garantisce accesso a contenuti riservati." },
  { title: "Status Azzurro simulato", content: "L’eventuale richiesta Azzurro non viene trasmessa e non produce riconoscimenti o diritti. Una futura procedura reale richiederà criteri, documentazione e verifica approvati da Atletica TV." },
  { title: "Proprietà dei materiali", content: "Interfaccia, testi, illustrazioni e fotografie originali della demo sono materiali del progetto Performance Pass. Non è consentito riutilizzarli o distribuirli senza autorizzazione." },
];

export default function TermsPage() { return <LegalPage eyebrow="CONDIZIONI D’USO" title="Termini chiari, fin dall’inizio." introduction="I limiti essenziali per esplorare la demo della membership Performance Pass." sections={sections} />; }
