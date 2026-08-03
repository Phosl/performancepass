"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, EnvelopeSimple } from "@phosphor-icons/react";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./SiteFooter.module.scss";

const footerGroups = [
  {
    title: "Piattaforma",
    links: [
      { href: "/", label: "Home" },
      { href: "/video", label: "Video training" },
      { href: "/corsi", label: "Mini-corsi" },
      { href: "/vantaggi", label: "Vantaggi" },
    ],
  },
  {
    title: "Il tuo Pass",
    links: [
      { href: "/onboarding", label: "Crea il profilo" },
      { href: "/dashboard", label: "Percorso personale" },
      { href: "/profilo", label: "Profilo e membership" },
    ],
  },
  {
    title: "Informazioni",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/termini", label: "Termini della demo" },
    ],
  },
] as const;

type NewsletterStatus = "idle" | "success" | "error";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NewsletterStatus>("idle");

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      window.localStorage.setItem("performance-pass-newsletter", email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.footerTop}>
          <div className={styles.callout}>
            <p>ALLENATI CON UNA DIREZIONE</p>
            <h2>La tua performance,<br /><span>un passo alla volta.</span></h2>
            <TransitionLink href="/onboarding" className={styles.calloutLink}>
              Crea il tuo profilo <ArrowUpRight size={19} weight="bold" aria-hidden="true" />
            </TransitionLink>
          </div>

          <div className={styles.newsletter}>
            <span className={styles.newsletterIcon}><EnvelopeSimple size={21} aria-hidden="true" /></span>
            <p>PASS NOTES</p>
            <h3>Nuove sessioni e vantaggi, senza rumore.</h3>
            {status === "success" ? (
              <div className={styles.newsletterSuccess} role="status"><Check size={18} weight="bold" aria-hidden="true" /> Sei nella lista.</div>
            ) : (
              <form onSubmit={subscribe}>
                <label className="srOnly" htmlFor="footer-email">La tua email</label>
                <input id="footer-email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setStatus("idle"); }} placeholder="La tua email" autoComplete="email" required />
                <button type="submit" aria-label="Iscriviti a Pass Notes"><ArrowRight size={19} weight="bold" aria-hidden="true" /></button>
              </form>
            )}
            <small>{status === "error" ? "Non siamo riusciti a salvare l’indirizzo. Riprova." : "Demo locale: l’indirizzo resta solo su questo dispositivo."}</small>
          </div>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.brandColumn}>
            <TransitionLink href="/" className={styles.logo} aria-label="Performance Pass, home">
              <span>P</span><strong>Performance<i>Pass</i></strong>
            </TransitionLink>
            <p>Video, mini-corsi e vantaggi selezionati intorno al tuo profilo sportivo.</p>
            <a href="mailto:hello@performancepass.it">hello@performancepass.it</a>
          </div>
          <nav className={styles.linkColumns} aria-label="Navigazione nel footer">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p>{group.title}</p>
                {group.links.map((link) => <TransitionLink key={link.href} href={link.href}>{link.label}</TransitionLink>)}
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.wordmark} aria-hidden="true"><span>Performance</span><strong>Pass</strong></div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Performance Pass</span>
          <span>Progettato per ogni atleta.</span>
          <a href="mailto:partner@performancepass.it">Diventa partner <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
