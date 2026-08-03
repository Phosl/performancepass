"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightning, Play, Sparkle } from "@phosphor-icons/react";
import { videos, courses, benefits } from "@/lib/mock-data";
import { useAthlete } from "@/context/AthleteContext";
import { getRecommendedVideos } from "@/lib/recommendations";
import { IntroScreen } from "./IntroScreen";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "@/components/cards/VideoCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { BenefitCard } from "@/components/cards/BenefitCard";
import styles from "./home.module.scss";

export function HomeContent() {
  const { profile, hydrated } = useAthlete();
  const recommendations = profile.onboardingComplete ? getRecommendedVideos(profile, 3) : videos.slice(0, 3);

  return (
    <>
      <IntroScreen />
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroPill}><Sparkle size={15} weight="fill" aria-hidden="true" /> Il tuo sport, più personale</div>
            <h1>Allenati meglio.<br /><span>Sblocca di più.</span></h1>
            <p className={styles.heroLead}>Performance Pass crea un percorso personalizzato per ogni atleta: contenuti video, mini-corsi e vantaggi selezionati in base al tuo profilo sportivo.</p>
            <div className={styles.heroActions}>
              <ButtonLink href={profile.onboardingComplete ? "/dashboard" : "/onboarding"} variant="secondary" arrow>
                {profile.onboardingComplete ? "Vai al tuo percorso" : "Crea il tuo profilo"}
              </ButtonLink>
              <Link href="#scelti-per-te" className={styles.inlineLink}><Play size={18} weight="fill" aria-hidden="true" /> Esplora i contenuti</Link>
            </div>
            <div className={styles.heroStats} aria-label="Numeri della piattaforma">
              <span><strong>120+</strong><small>video guidati</small></span>
              <span><strong>16</strong><small>partner premium</small></span>
              <span><strong>6</strong><small>discipline</small></span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/running.svg" alt="Atleta che corre durante una sessione Performance Pass" fill priority sizes="(max-width: 800px) 94vw, 48vw" />
            <div className={styles.heroVisualTop}>
              <Badge tone="premium">Workout del giorno</Badge>
              <span>18 min</span>
            </div>
            <div className={styles.heroVisualBottom}>
              <div><small>RUNNING · INTERMEDIO</small><strong>Potenza nella corsa</strong></div>
              <Link href="/video/potenza-nella-corsa" aria-label="Riproduci Potenza nella corsa"><Play size={20} weight="fill" aria-hidden="true" /></Link>
            </div>
            <div className={styles.floatCard}><Lightning size={18} weight="fill" aria-hidden="true" /><span><strong>+8%</strong> questa settimana</span></div>
          </div>
        </div>
      </section>

      <Reveal>
        <section id="scelti-per-te" className="section">
          <div className="shell">
            <SectionHeading eyebrow={profile.onboardingComplete ? `Per ${profile.name} · ${profile.sport}` : "In evidenza"} title="Scelti per te" description="Una selezione che si adatta a sport, livello e obiettivi." href="/video" />
            <div className={styles.videoGrid}>
              {recommendations.map((video, index) => <VideoCard key={video.id} video={video} featured={index === 0} />)}
            </div>
            {!hydrated && <p className="srOnly" role="status">Caricamento del profilo…</p>}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={`${styles.darkSection} section`}>
          <div className="shell">
            <SectionHeading eyebrow="Impara, applica, migliora" title="Mini-corsi per fare progressi reali" description="Percorsi brevi costruiti da coach e professionisti della performance." href="/corsi" linkLabel="Tutti i corsi" />
            <div className={styles.courseGrid}>
              {courses.slice(0, 2).map((course) => <CourseCard key={course.id} course={course} compact />)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="shell">
            <SectionHeading eyebrow="Solo per i membri" title="Vantaggi che vanno oltre l’allenamento" description="Benefit concreti per attrezzatura, nutrizione, recovery e servizi." href="/vantaggi" />
            <div className={styles.benefitGrid}>
              {benefits.slice(0, 3).map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)}
            </div>
          </div>
        </section>
      </Reveal>

      <section className={styles.membership}>
        <div className={`shell ${styles.membershipInner}`}>
          <div>
            <Badge tone="accent">Performance Pass Premium</Badge>
            <h2>Più contenuti.<br />Più vantaggi. Più tu.</h2>
          </div>
          <div className={styles.membershipAction}>
            <p>Sblocca l’intero catalogo, tutti i mini-corsi e i vantaggi riservati.</p>
            <ButtonLink href="/profilo" variant="secondary">Scopri Premium <ArrowRight size={18} weight="bold" /></ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
