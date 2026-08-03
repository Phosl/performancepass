"use client";

import Image from "next/image";
import { ArrowRight, CalendarBlank, Check, Fire, Play, Target } from "@phosphor-icons/react";
import { useAthlete } from "@/context/AthleteContext";
import { courses, videos } from "@/lib/mock-data";
import { getRecommendedVideos } from "@/lib/recommendations";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./dashboard.module.scss";

export function DashboardView() {
  const { profile, hydrated } = useAthlete();
  const recommended = getRecommendedVideos(profile, 4);
  const favoriteVideos = videos.filter((video) => profile.favorites.includes(video.id));
  const lead = recommended[0];

  if (!hydrated) {
    return <div className={`shell ${styles.loading}`} role="status"><span /><span /><span /><p>Prepariamo il tuo percorso…</p></div>;
  }

  return (
    <>
      <section className={styles.welcome}>
        <div className="shell">
          <div className={styles.welcomeTop}>
            <div>
              <p>IL TUO PERFORMANCE PASS</p>
              <h1>Ciao, {profile.name}.<br /><span>Pronto a muoverti?</span></h1>
            </div>
            <div className={styles.profileSummary}>
              <span>{profile.sport}</span><i />
              <span>{profile.level}</span><i />
              <span>{profile.goal}</span>
              <TransitionLink href="/profilo">Modifica profilo</TransitionLink>
            </div>
          </div>

          {!profile.onboardingComplete && (
            <div className={styles.onboardingNudge}>
              <Target size={23} weight="duotone" aria-hidden="true" />
              <div><strong>Rendi la selezione davvero tua</strong><span>Completa il profilo in meno di un minuto.</span></div>
              <ButtonLink href="/onboarding" variant="secondary">Inizia</ButtonLink>
            </div>
          )}

          <div className={styles.dashboardGrid}>
            <article className={styles.nextWorkout}>
              <Image src={lead.image} alt={lead.imageAlt} fill priority sizes="(max-width: 800px) 94vw, 66vw" />
              <div className={styles.nextTop}><Badge tone={lead.access}>Consigliato per te</Badge><span>{lead.duration} min</span></div>
              <div className={styles.nextBottom}>
                <div><small>{lead.eyebrow}</small><h2>{lead.title}</h2><p>{lead.description}</p></div>
                <TransitionLink href={`/video/${lead.slug}`} aria-label={`Inizia ${lead.title}`}><Play size={21} weight="fill" aria-hidden="true" /></TransitionLink>
              </div>
            </article>

            <aside className={styles.statsColumn}>
              <div className={styles.weekCard}>
                <div><span className={styles.statIcon}><Fire size={20} weight="fill" aria-hidden="true" /></span><small>Serie attuale</small><strong>4 giorni</strong></div>
                <div className={styles.weekDays}>{["L", "M", "M", "G", "V", "S", "D"].map((day, index) => <span key={`${day}-${index}`} className={index < 4 ? styles.done : ""}>{index < 4 ? <Check size={12} weight="bold" /> : day}</span>)}</div>
              </div>
              <div className={styles.metricCards}>
                <div><CalendarBlank size={20} aria-hidden="true" /><strong>3</strong><span>sessioni<br />questa settimana</span></div>
                <div><Target size={20} aria-hidden="true" /><strong>82</strong><span>minuti<br />in movimento</span></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section">
          <div className="shell">
            <SectionHeading eyebrow={`In base a ${profile.sport} e ${profile.goal}`} title="Continua il tuo percorso" href="/video" />
            <div className={styles.videoGrid}>{recommended.slice(1).map((video) => <VideoCard key={video.id} video={video} />)}</div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${styles.courseSection} section`}>
          <div className={`shell ${styles.courseLayout}`}>
            <div className={styles.courseCopy}>
              <p>IL TUO MINI-CORSO</p>
              <h2>Un passo alla volta, con una direzione chiara.</h2>
              <span>Riprendi da dove hai lasciato. Le prime due lezioni sono incluse nel tuo pass Free.</span>
              <TransitionLink href="/corsi">Esplora i corsi <ArrowRight size={17} weight="bold" /></TransitionLink>
            </div>
            <CourseCard course={courses[0]} />
          </div>
        </section>
      </Reveal>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="La tua raccolta" title="Salvati per dopo" href="/video" linkLabel="Trova video" />
          {favoriteVideos.length > 0 ? (
            <div className={styles.videoGrid}>{favoriteVideos.slice(0, 3).map((video) => <VideoCard key={video.id} video={video} />)}</div>
          ) : (
            <div className={styles.empty}><span>♡</span><h3>La tua raccolta è vuota</h3><p>Tocca il cuore su un video per ritrovarlo qui.</p><ButtonLink href="/video" variant="ghost">Esplora i video</ButtonLink></div>
          )}
        </div>
      </section>
    </>
  );
}
