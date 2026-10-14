import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
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
            <p className={styles.eyebrow}>LA TUA COMMUNITY, IL TUO PASS</p>
            <h2 id="footer-hero-title">Performance in pista,<br /><span>vantaggi fuori.</span></h2>
            <p className={styles.heroLead}>Formazione riservata e vantaggi dedicati. Entra nel mondo di Atletica TV.</p>
          </div>
          <TransitionLink href="/iscriviti" className={styles.primaryAction}>
            Diventa member <ArrowUpRight size={19} weight="bold" aria-hidden="true" />
          </TransitionLink>
        </section>

        <div className={styles.footerMiddle}>
          <div className={styles.brandColumn}>
            <TransitionLink href="/" className={styles.logo} aria-label="Performance Pass by Atletica TV, home">
              <BrandLockup className={styles.footerLockup} />
            </TransitionLink>
            <p>La membership di Atletica TV. Contenuti formativi riservati e vantaggi per chi vive l’atletica.</p>
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
            <p className={styles.endorsementLabel}>IL NOSTRO MONDO</p>
            <h3 id="atletica-tv-title">L’atletica ha già una casa.</h3>
            <p>Performance Pass nasce dentro l’esperienza editoriale e formativa di Atletica TV.</p>
            <a href="https://www.atletica.tv/">
              Visita Atletica TV <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
            <a href="https://talent.atletica.tv/">
              Scopri Talent <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </aside>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Performance Pass</span>
          <span>Demo locale: nessun account o pagamento reale.</span>
          <a href="https://www.atletica.tv/">Atletica TV <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
