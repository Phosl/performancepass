import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./SiteFooter.module.scss";

const footerGroups = [
  {
    title: "Esplora",
    links: [
      { href: "/vantaggi", label: "Vantaggi" },
      { href: "/contenuti", label: "Contenuti & Formazione" },
      { href: "/partner", label: "Partner" },
    ],
  },
  {
    title: "Membership",
    links: [
      { href: "/iscriviti", label: "Iscriviti" },
      { href: "/il-mio-pass", label: "Il mio Pass" },
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

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <section className={styles.footerHero} aria-labelledby="footer-hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>PERFORMANCE PASS · BY ATLETICA TV</p>
            <h2 id="footer-hero-title">L’atletica, dentro<br /><span>e fuori la pista.</span></h2>
            <p className={styles.heroLead}>La membership di Atletica TV che riunisce vantaggi dedicati, contenuti riservati e formazione.</p>
            <div className={styles.heroActions}>
              <TransitionLink href="/iscriviti" className={styles.primaryAction}>
                Entra nel club <ArrowUpRight size={19} weight="bold" aria-hidden="true" />
              </TransitionLink>
              <TransitionLink href="/contenuti" className={styles.secondaryAction}>
                Scopri i contenuti <ArrowRight size={17} weight="bold" aria-hidden="true" />
              </TransitionLink>
            </div>
          </div>

          <div className={styles.heroPass} aria-hidden="true">
            <div className={styles.heroPassTop}><span>MEMBERSHIP DEMO</span><span>ACCESSO LOCALE</span></div>
            <BrandLockup className={styles.heroLockup} />
            <strong>PASS</strong>
            <div className={styles.heroPassBottom}><span>CONTENUTI</span><span>FORMAZIONE</span><span>VANTAGGI</span></div>
          </div>
        </section>

        <div className={styles.footerMiddle}>
          <div className={styles.brandColumn}>
            <TransitionLink href="/" className={styles.logo} aria-label="Performance Pass by Atletica TV, home">
              <BrandLockup className={styles.footerLockup} />
            </TransitionLink>
            <p>Un unico accesso all’universo Atletica TV, tra contenuti, formazione e opportunità dedicate alla community.</p>
            <div className={styles.brandStatus}><i /><span>Esperienza dimostrativa locale</span></div>
          </div>

          <nav className={styles.linkColumns} aria-label="Navigazione nel footer">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p>{group.title}</p>
                {group.links.map((link) => <TransitionLink key={link.href} href={link.href}>{link.label}</TransitionLink>)}
              </div>
            ))}
          </nav>

          <aside className={styles.endorsement} aria-labelledby="atletica-tv-title">
            <p className={styles.endorsementLabel}>BY ATLETICA TV</p>
            <h3 id="atletica-tv-title">L’atletica ha già una casa.</h3>
            <p>Performance Pass nasce dentro l’esperienza editoriale e formativa di Atletica TV.</p>
            <a href="https://atletica.tv/">
              Visita Atletica TV <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </aside>
        </div>

        <div className={styles.wordmark} aria-hidden="true"><span>Performance</span><strong>Pass</strong></div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Performance Pass</span>
          <span>Demo locale: nessun account o pagamento reale.</span>
          <a href="https://atletica.tv/">Atletica TV <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
