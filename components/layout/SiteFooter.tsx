"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, EnvelopeSimple, SealCheck } from "@phosphor-icons/react";
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
        <section className={styles.footerHero} aria-labelledby="footer-hero-title">
          <div className={styles.heroCopy}>
            <p>IL PROSSIMO PASSO È TUO</p>
            <h2 id="footer-hero-title">Porta il tuo allenamento<br /><span>oltre il cronometro.</span></h2>
            <div className={styles.heroActions}>
              <TransitionLink href="/onboarding" className={styles.primaryAction}>
                Crea il tuo profilo <ArrowUpRight size={19} weight="bold" aria-hidden="true" />
              </TransitionLink>
              <TransitionLink href="/vantaggi" className={styles.secondaryAction}>
                Esplora i vantaggi <ArrowRight size={17} weight="bold" aria-hidden="true" />
              </TransitionLink>
            </div>
          </div>

          <div className={styles.heroPass} aria-hidden="true">
            <div className={styles.heroPassTop}><span>PERFORMANCE PASS</span><span>01 — 26</span></div>
            <strong>PP</strong>
            <div className={styles.heroPassBottom}><span>TRACK / FIELD</span><span>MOVE FORWARD</span></div>
          </div>
        </section>

        <div className={styles.footerMiddle}>
          <div className={styles.brandColumn}>
            <TransitionLink href="/" className={styles.logo} aria-label="Performance Pass, home">
              <span>P</span><strong>Performance<i>Pass</i></strong>
            </TransitionLink>
            <p>Video, mini-corsi e vantaggi selezionati intorno alla tua specialità atletica.</p>
            <div className={styles.brandStatus}><i /><span>Piattaforma demo attiva</span></div>
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

          <div className={styles.newsletter}>
            <div className={styles.newsletterHead}>
              <span className={styles.newsletterIcon}><EnvelopeSimple size={20} aria-hidden="true" /></span>
              <span><small>PASS NOTES</small><SealCheck size={15} weight="fill" aria-hidden="true" /></span>
            </div>
            <h3>Allenamento, vantaggi e nuove release.</h3>
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

        <div className={styles.wordmark} aria-hidden="true"><span>Performance</span><strong>Pass<span>™</span></strong></div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Performance Pass</span>
          <span>Progettato in Italia per chi vive l’atletica.</span>
          <a href="mailto:partner@performancepass.it">Diventa partner <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
