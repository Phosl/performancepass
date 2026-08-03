import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./LegalPage.module.scss";

interface LegalSection { title: string; content: string }

export function LegalPage({ eyebrow, title, introduction, sections }: { eyebrow: string; title: string; introduction: string; sections: LegalSection[] }) {
  return (
    <article className={`shell ${styles.page}`}>
      <TransitionLink href="/" className={styles.back}><ArrowLeft size={17} weight="bold" aria-hidden="true" /> Torna alla home</TransitionLink>
      <header><p>{eyebrow}</p><h1>{title}</h1><span>{introduction}</span></header>
      <div className={styles.content}>
        <aside><span>ULTIMO AGGIORNAMENTO</span><strong>3 agosto 2026</strong><a href="mailto:privacy@performancepass.it">Hai una domanda?</a></aside>
        <div className={styles.sections}>{sections.map((section, index) => <section key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2><p>{section.content}</p></div></section>)}</div>
      </div>
    </article>
  );
}
