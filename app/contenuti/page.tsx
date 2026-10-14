import { CoursesCatalog } from "@/components/catalog/CoursesCatalog";
import { VideoCatalog } from "@/components/catalog/VideoCatalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { createPageMetadata } from "@/lib/seo";
import styles from "./content-page.module.scss";

export const metadata = createPageMetadata({
  title: "Contenuti e formazione",
  description: "Scopri contenuti video, corsi e video-lezioni della membership Performance Pass by Atletica TV.",
  path: "/contenuti",
  keywords: ["contenuti Atletica TV", "video atletica", "corsi atletica", "formazione sportiva", "Performance Pass"],
});

export default function ContentPage() {
  return (
    <>
      <header className="shell pageTop">
        <h1>Contenuti per chi<br />vive l’atletica.</h1>
        <p>Video, approfondimenti e formazione selezionati da Atletica TV, raccolti in un unico Pass.</p>
      </header>

      <nav className={`shell ${styles.contentNav}`} aria-label="Tipi di contenuto">
        <a href="#video">Video</a>
        <a href="#corsi">Corsi</a>
        <a href="#video-lezioni">Video-lezioni</a>
        <a href="#webinar">Webinar</a>
      </nav>

      <section id="video" className="section" aria-label="Libreria video Performance Pass">
        <div className="shell">
          <SectionHeading
            eyebrow="Contenuti video"
            title="Guarda, salva, ritrova."
            description="Esplora le anteprime della libreria e salva i contenuti che vuoi ritrovare nel tuo Pass."
            href="/video"
            linkLabel="Tutti i video"
          />
        </div>
        <VideoCatalog />
      </section>

      <section id="corsi" className={`${styles.courseSection} section`} aria-label="Corsi Performance Pass">
        <div className={`shell ${styles.courseHeading}`}>
          <SectionHeading
            eyebrow="Formazione"
            title="Corsi da approfondire."
            description="Percorsi tematici pensati per approfondire tecnica, preparazione e cultura dell’atletica."
            href="/corsi"
            linkLabel="Tutti i corsi"
          />
        </div>
        <CoursesCatalog />
      </section>

      <section className={`${styles.upcomingSection} section`} aria-labelledby="upcoming-title">
        <div className="shell">
          <div className={styles.upcomingHeading}><p>PROSSIMI FORMATI</p><h2 id="upcoming-title">Spazi pronti, palinsesto da approvare.</h2></div>
          <div className={styles.upcomingGrid}>
            <article id="video-lezioni"><span>VIDEO-LEZIONI</span><h3>Catalogo in preparazione</h3><p>Le video-lezioni compariranno quando materiali e accessi saranno confermati.</p></article>
            <article id="webinar"><span>WEBINAR</span><h3>Nessun appuntamento pubblicato</h3><p>Non mostriamo date, relatori o disponibilità finché il calendario non è approvato.</p></article>
          </div>
          <p className={styles.upcomingNote}>Questi stati vuoti non rappresentano contenuti già inclusi nella membership.</p>
          <TransitionLink href="/il-mio-pass" className={styles.passLink}>Ritrova i preferiti ne Il mio Pass</TransitionLink>
        </div>
      </section>
    </>
  );
}
