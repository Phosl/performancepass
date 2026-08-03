import Link from "next/link";

export default function NotFound() {
  return <div className="shell pageTop"><p>ERRORE 404</p><h1>Questa pagina ha perso il ritmo.</h1><p>Il contenuto che cerchi non è disponibile.</p><Link href="/" style={{ display: "inline-block", marginTop: "1.5rem", textDecoration: "underline" }}>Torna alla home</Link></div>;
}
