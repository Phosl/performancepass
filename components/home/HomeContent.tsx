import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Broadcast, CheckCircle, IdentificationCard, Play, Storefront } from "@phosphor-icons/react/dist/ssr";
import { videos } from "@/lib/mock-data";
import { earlyMemberOffer } from "@/lib/site-content";
import { IntroScreen } from "./IntroScreen";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { PhysicalPassShowcase } from "@/components/membership/PhysicalPassShowcase";
import styles from "./home.module.scss";

const howItWorks = [
  ["01", "Attiva il tuo Pass demo", "Inserisci il nome e scopri la tua area membri. L’attivazione è dimostrativa, senza account o pagamento."],
  ["02", "Entra nei contenuti", "Esplora video, lezioni e percorsi formativi. Salva i preferiti per ritrovarli nel tuo Pass."],
  ["03", "Scopri i vantaggi", "Consulta le opportunità per i membri. Partner, sconti e condizioni compaiono quando sono confermati."],
] as const;

export function HomeContent() {
  return (
    <div className={styles.home}>
      <IntroScreen />
      <section className={styles.hero} aria-labelledby="home-title">
        <svg className={styles.track} viewBox="0 0 1440 880" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
          <defs><linearGradient id="track-blue" x1="1300" y1="0" x2="600" y2="880" gradientUnits="userSpaceOnUse"><stop stopColor="#043fbd" stopOpacity=".1"/><stop offset=".5" stopColor="#48b9ff"/><stop offset="1" stopColor="#1257ff" stopOpacity=".2"/></linearGradient></defs>
          <g stroke="#6082ad" strokeOpacity=".19" strokeWidth="1">
            <path d="M1550 -90C1350 200 730 90 890 400S1510 600 1000 1000"/><path d="M1480 -110C1280 180 660 90 820 400S1440 620 930 1000"/><path d="M1410 -130C1210 160 590 90 750 400S1370 640 860 1000"/><path d="M1270 -170C1070 120 450 90 610 400S1230 680 720 1000"/><path d="M1200 -190C1000 100 380 90 540 400S1160 700 650 1000"/>
          </g>
          <path className={styles.electricLane} d="M1340 -150C1140 140 520 90 680 400S1300 660 790 1000" stroke="url(#track-blue)" strokeWidth="2"/>
        </svg>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> LA MEMBERSHIP DI ATLETICA TV</p>
            <h1 id="home-title">Performance<br />in pista,<br /><em>vantaggi fuori</em></h1>
            <p className={styles.heroSubtitle}>Per professionisti ed amatori</p>
            <p className={styles.heroLead}>Contenuti riservati e vantaggi esclusivi per la community di Atletica TV</p>
            <div className={styles.heroActions}>
              <ButtonLink href="/iscriviti" variant="secondary" arrow>Diventa member</ButtonLink>
              <a href="#membership" className={styles.inlineLink}>Scopri il Pass <ArrowDown size={17} aria-hidden="true" /></a>
            </div>
            <p className={styles.demoNote}><CheckCircle size={14} aria-hidden="true" /> Demo locale · nessun account o pagamento</p>
          </div>
          <figure className={styles.heroVisual}>
            <div className={styles.visualKicker}><span>IL TUO PASS. LA TUA COMMUNITY.</span><span>01 / 26</span></div>
            <div className={styles.cardFrame}>
              <Image src="/brand/performance-pass-demo.jpg" alt="Card demo Performance Pass by Atletica TV di Alessandro Canale, numero 000001, Founding Member" width={1578} height={997} priority sizes="(max-width: 820px) 92vw, 46vw" />
            </div>
            <figcaption><span className={styles.cardDot} /><span>CARD DEMO <strong>Alessandro Canale</strong></span><span className={styles.founding}>FOUNDING MEMBER</span></figcaption>
          </figure>
        </div>
        <div className={`shell ${styles.heroBottom}`}><span>Una passione. Due modi per viverla.</span><a href="#membership">ESPLORA LA MEMBERSHIP <ArrowDown size={14} aria-hidden="true" /></a></div>
      </section>

      <section id="membership" className={styles.doorsSection} aria-labelledby="doors-title">
        <div className="shell">
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>DENTRO IL PASS</p><h2 id="doors-title">Più valore alla<br />tua passione.</h2></div><p>In pista condividiamo la stessa passione.<br />Fuori, nuove occasioni per coltivarla.</p></div>
          <div className={styles.doorsGrid}>
            <TransitionLink href="/contenuti" className={styles.doorCard}>
              <div className={styles.doorTop}><Broadcast size={28} aria-hidden="true" /><span>01 / IMPARA</span><ArrowUpRight size={24} aria-hidden="true" /></div>
              <h3>Contenuti formativi<br /><em>riservati.</em></h3>
              <p>Video, corsi, video-lezioni e webinar per conoscere l’atletica più da vicino, dalla tecnica alla cultura sportiva.</p>
              <span className={styles.doorLink}>Esplora i contenuti <ArrowRight size={18} aria-hidden="true" /></span>
            </TransitionLink>
            <TransitionLink href="/vantaggi" className={styles.doorCard}>
              <div className={styles.doorTop}><Storefront size={28} aria-hidden="true" /><span>02 / SCOPRI</span><ArrowUpRight size={24} aria-hidden="true" /></div>
              <h3>Vantaggi e sconti.<br /><em>Solo per i membri.</em></h3>
              <p>Uno spazio dedicato alle convenzioni e alle opportunità della community, con partner e condizioni sempre consultabili.</p>
              <span className={styles.doorLink}>Scopri i vantaggi <ArrowRight size={18} aria-hidden="true" /></span>
            </TransitionLink>
          </div>
          <p className={styles.availability}>La demo presenta il progetto: il catalogo è illustrativo e le convenzioni saranno disponibili dopo conferma dei partner.</p>
        </div>
      </section>

      <Reveal>
        <section className={styles.contentSection} aria-labelledby="content-preview-title">
          <div className="shell">
            <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CONTENUTI &amp; FORMAZIONE</p><h2 id="content-preview-title">La passione incontra<br />la conoscenza.</h2></div><TransitionLink href="/contenuti" className={styles.inlineLink}>Tutti i contenuti <ArrowUpRight size={20} aria-hidden="true" /></TransitionLink></div>
            <div className={styles.videoGrid}>{videos.slice(0, 3).map((video) => <VideoCard key={video.id} video={video} />)}</div>
            <p className={styles.availability}><Play size={13} aria-hidden="true" /> Un assaggio del catalogo demo. Ogni scheda indica l’accesso e la disponibilità del video.</p>
          </div>
        </section>
      </Reveal>

      <Reveal><PhysicalPassShowcase /></Reveal>

      <Reveal>
        <section className={styles.azzurriSection} aria-labelledby="azzurri-title">
          <div className={`shell ${styles.azzurriGrid}`}><div><p className={styles.eyebrow}>IL PERCORSO AZZURRI</p><h2 id="azzurri-title">Una passione<br />che veste azzurro.</h2></div><div><p>Fai parte del percorso Azzurri? Puoi segnalarlo durante l’attivazione del Pass. La richiesta demo resta in attesa di verifica e non attribuisce uno stato ufficiale.</p><ButtonLink href="/iscriviti#azzurri" variant="primary" arrow>Scopri la richiesta Azzurro</ButtonLink></div></div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.partnerPreview} aria-labelledby="partner-preview-title"><div className={`shell ${styles.partnerPreviewGrid}`}><Storefront size={32} aria-hidden="true" /><div><p className={styles.eyebrow}>IL MONDO DEI PARTNER</p><h2 id="partner-preview-title">Nuove opportunità, stessa passione.</h2><p>I partner e le convenzioni verranno pubblicati con condizioni confermate. Al momento non sono presenti offerte attive.</p></div><ButtonLink href="/partner" variant="ghost" arrow>Area partner</ButtonLink></div></section>
      </Reveal>

      {earlyMemberOffer && <section className={styles.earlyMember} aria-label="Early Member"><div className="shell"><h2>{earlyMemberOffer.title}</h2><p>{earlyMemberOffer.benefit}</p><span>{earlyMemberOffer.availability}</span></div></section>}

      <Reveal>
        <section className={styles.howSection} aria-labelledby="how-title"><div className="shell"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>COME FUNZIONA</p><h2 id="how-title">Il primo passo<br />è farne parte.</h2></div><IdentificationCard size={40} aria-hidden="true" /></div><ol className={styles.steps}>{howItWorks.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}</ol><p className={styles.availability}>Il Pass e i preferiti della demo restano salvati in questo browser.</p></div></section>
      </Reveal>
    </div>
  );
}
