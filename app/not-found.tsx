import type { Metadata } from "next";
import { TransitionLink } from "@/components/transitions/TransitionLink";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <div className="shell pageTop"><p>ERRORE 404</p><h1>Questa pagina ha perso il ritmo.</h1><p>Il contenuto che cerchi non è disponibile.</p><TransitionLink href="/" style={{ display: "inline-block", marginTop: "1.5rem", textDecoration: "underline" }}>Torna alla home</TransitionLink></div>;
}
