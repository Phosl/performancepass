import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = { title: "Privacy", description: "Informativa privacy della demo Performance Pass." };

const sections = [
  { title: "Una demo che resta sul tuo dispositivo", content: "Questa versione di Performance Pass non crea account reali e non invia il tuo profilo a un server. Sport, livello, obiettivo, frequenza, membership demo e preferiti vengono salvati esclusivamente nel LocalStorage del browser." },
  { title: "Iscrizione a Pass Notes", content: "Anche l’indirizzo inserito nel footer viene memorizzato soltanto sul dispositivo per simulare il flusso newsletter. Non viene trasmesso, condiviso o utilizzato per comunicazioni reali." },
  { title: "Cookie e servizi esterni", content: "La demo non utilizza cookie pubblicitari, strumenti di profilazione o analytics di terze parti. Le fotografie sportive sono asset originali ospitati localmente nel progetto." },
  { title: "Evoluzione futura", content: "Una futura versione con autenticazione e Supabase richiederà consenso, policy RLS, tempi di conservazione e procedure per accesso o cancellazione dei dati. Questa informativa verrà aggiornata prima di attivare tali servizi." },
];

export default function PrivacyPage() { return <LegalPage eyebrow="TRASPARENZA" title="Privacy, senza zone d’ombra." introduction="In questa demo i tuoi dati non lasciano il browser. Qui trovi, in modo semplice, cosa viene salvato e perché." sections={sections} />; }
