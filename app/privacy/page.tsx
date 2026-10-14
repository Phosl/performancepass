import { LegalPage } from "@/components/legal/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({ title: "Privacy", description: "Informativa privacy della demo Performance Pass e del profilo membership salvato localmente.", path: "/privacy", index: false });

const sections = [
  { title: "Profilo demo salvato nel browser", content: "Performance Pass usa il LocalStorage v3 del browser per conservare soltanto nome, stato membership simulato, numero membro demo, preferiti e stato locale dell’eventuale richiesta Azzurro. I dati restano sul dispositivo e non creano un account reale." },
  { title: "Attivazione senza registrazione o pagamento", content: "L’attivazione mostrata nella demo aggiorna esclusivamente il profilo locale. Non invia dati a un server, non crea credenziali, non attiva abbonamenti e non esegue o registra pagamenti." },
  { title: "Richiesta Azzurro non trasmessa", content: "La selezione relativa allo status Azzurro salva soltanto uno stato dimostrativo nel browser. Nessuna richiesta, prova documentale o informazione viene trasmessa ad Atletica TV o sottoposta a verifica." },
  { title: "Cookie e servizi esterni", content: "La demo non utilizza cookie pubblicitari, strumenti di profilazione o analytics di terze parti. I contenuti e gli asset mostrati sono ospitati localmente nel progetto." },
  { title: "Prima di un servizio reale", content: "Autenticazione, database, pagamenti o verifiche richiederanno una nuova informativa, basi giuridiche adeguate, misure di sicurezza, tempi di conservazione e procedure per esercitare i diritti degli interessati." },
];

export default function PrivacyPage() { return <LegalPage eyebrow="TRASPARENZA" title="Privacy, senza zone d’ombra." introduction="In questa demo il profilo membership resta nel browser: nessuna registrazione o richiesta viene inviata." sections={sections} />; }
