import Image from "next/image";
import {
  ArrowRight,
  Broadcast,
  CheckCircle,
  IdentificationCard,
  Play,
  Storefront,
} from "@phosphor-icons/react/dist/ssr";
import { videos } from "@/lib/mock-data";
import { earlyMemberOffer } from "@/lib/site-content";
import { IntroScreen } from "./IntroScreen";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { PhysicalPassShowcase } from "@/components/membership/PhysicalPassShowcase";
import styles from "./home.module.scss";

const howItWorks = [
  ["01", "Attiva la demo", "Inserisci il tuo nome. Il Pass resta nel browser e non crea un account."],
  ["02", "Esplora la membership", "Apri anteprime, contenuti formativi e aree dedicate ai membri."],
  ["03", "Conserva ciò che conta", "Ritrova preferiti, numero demo e stato della richiesta Azzurro."],
] as const;

export function HomeContent() {
  return (
    <>
      <IntroScreen />

      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>PERFORMANCE PASS · BY ATLETICA TV</p>
            <h1>L’atletica,<br /><span>dentro e fuori</span><br />la pista.</h1>
            <p className={styles.heroLead}>La membership di Atletica TV che riunisce vantaggi dedicati, contenuti riservati e formazione.</p>
            <div className={styles.heroActions}>
              <ButtonLink href="/iscriviti" variant="secondary" arrow>Entra nel club</ButtonLink>
              <TransitionLink href="/contenuti" className={styles.inlineLink}><Play size={18} weight="fill" aria-hidden="true" /> Scopri i contenuti</TransitionLink>
            </div>
            <p className={styles.demoNote}><CheckCircle size={16} weight="fill" aria-hidden="true" /> Attivazione locale e dimostrativa. Nessun account o pagamento.</p>
          </div>

          <div className={styles.heroVisual}>
            <Image src="/images/generated/athletics-sprint.webp" alt="Velocista in accelerazione su una pista di atletica" fill priority sizes="(max-width: 800px) 94vw, 48vw" />
            <div className={styles.heroVisualTop}><span>ATLETICA TV</span><span>MEMBERSHIP DEMO</span></div>
            <div className={styles.heroVisualBottom}>
              <div><small>UN SOLO PASS</small><strong>Più vicini all’atletica.</strong></div>
              <TransitionLink href="/iscriviti" aria-label="Entra nel club"><ArrowRight size={21} weight="bold" aria-hidden="true" /></TransitionLink>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className={styles.doorsSection} aria-labelledby="doors-title">
          <div className="shell">
            <div className={styles.doorsIntro}>
              <p>Due porte, la stessa membership</p>
              <h2 id="doors-title">Scegli da dove entrare.</h2>
            </div>
            <div className={styles.doorsGrid}>
              <TransitionLink href="/vantaggi" className={styles.doorCard}>
                <span><Storefront size={25} aria-hidden="true" /> 01</span>
                <div><small>DENTRO E FUORI LA PISTA</small><h3>Vantaggi</h3><p>Lo spazio dedicato alle opportunità per i membri, pubblicate solo dopo approvazione.</p></div>
                <ArrowRight size={25} weight="bold" aria-hidden="true" />
              </TransitionLink>
              <TransitionLink href="/contenuti" className={styles.doorCard}>
                <span><Broadcast size={25} aria-hidden="true" /> 02</span>
                <div><small>GUARDA, IMPARA, APPROFONDISCI</small><h3>Contenuti &amp; Formazione</h3><p>Video, corsi, video-lezioni e webinar riuniti in un unico hub editoriale.</p></div>
                <ArrowRight size={25} weight="bold" aria-hidden="true" />
              </TransitionLink>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal><PhysicalPassShowcase /></Reveal>

      <Reveal>
        <section className="section" aria-labelledby="content-preview-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Contenuti & Formazione"
              title="Uno sguardo sul catalogo."
              description="Schede editoriali e percorsi dimostrativi: il video completo viene indicato con trasparenza quando non è disponibile."
              href="/contenuti"
              linkLabel="Apri l’hub"
            />
            <div id="content-preview-title" className={styles.videoGrid}>
              {videos.slice(0, 3).map((video, index) => <VideoCard key={video.id} video={video} featured={index === 0} />)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.azzurriSection} aria-labelledby="azzurri-title">
          <div className={`shell ${styles.azzurriGrid}`}>
            <div>
              <p>IL PERCORSO AZZURRI</p>
              <h2 id="azzurri-title">Una richiesta distinta dal Pass.</h2>
            </div>
            <div>
              <p>Chi fa parte del percorso Azzurri può segnalarlo durante l’attivazione. Nella demo la richiesta resta solo nel browser e viene mostrata come “in attesa di verifica”: non attribuisce uno stato ufficiale.</p>
              <ButtonLink href="/iscriviti#azzurri" variant="secondary" arrow>Richiedi nella demo</ButtonLink>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.partnerPreview} aria-labelledby="partner-preview-title">
          <div className={`shell ${styles.partnerPreviewGrid}`}>
            <div className={styles.partnerIcon}><Storefront size={34} aria-hidden="true" /></div>
            <div><p>PARTNER</p><h2 id="partner-preview-title">Solo nomi e condizioni approvati.</h2><span>La struttura è pronta; finché non ci sono informazioni confermate, mostriamo uno stato vuoto esplicito.</span></div>
            <ButtonLink href="/partner" variant="ghost" arrow>Vai all’area partner</ButtonLink>
          </div>
        </section>
      </Reveal>

      {earlyMemberOffer && (
        <section className={styles.earlyMember} aria-label="Early Member">
          <div className="shell"><h2>{earlyMemberOffer.title}</h2><p>{earlyMemberOffer.benefit}</p><span>{earlyMemberOffer.availability}</span></div>
        </section>
      )}

      <Reveal>
        <section className={styles.howSection} aria-labelledby="how-title">
          <div className="shell">
            <div className={styles.howHeading}><p>COME FUNZIONA</p><h2 id="how-title">Tre passaggi,<br />tutto chiaro.</h2></div>
            <ol className={styles.steps}>
              {howItWorks.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}
            </ol>
            <div className={styles.finalCta}><IdentificationCard size={25} aria-hidden="true" /><p>Pronto a vedere il tuo Pass?</p><ButtonLink href="/iscriviti" variant="secondary" arrow>Entra nel club</ButtonLink></div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
