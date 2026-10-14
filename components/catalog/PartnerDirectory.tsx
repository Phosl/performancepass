import { CheckCircle, Storefront } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./catalog.module.scss";

export function PartnerDirectory() {
  return (
    <Reveal>
      <section id="partner-directory" className={styles.partnerSection} aria-labelledby="partner-directory-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Informazioni verificate"
            title="Partner in fase di approvazione."
            description="Pubblicheremo solo realtà confermate, con condizioni chiare e riferimenti ufficiali."
          />
          <div className={styles.partnerEmpty} role="status">
            <Storefront size={30} aria-hidden="true" />
            <h3 id="partner-directory-title">Nessun partner pubblicato al momento</h3>
            <p>La sezione è pronta, ma non mostra nomi, vantaggi o condizioni finché non sono stati approvati.</p>
            <span><CheckCircle size={16} weight="fill" aria-hidden="true" /> Nessun codice demo attivo</span>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
