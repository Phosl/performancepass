"use client";

import Image from "next/image";
import { Lightning, Play, Sparkle } from "@phosphor-icons/react";
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
import { TransitionLink } from "@/components/transitions/TransitionLink";
import { MembershipComparison } from "@/components/membership/MembershipComparison";
import { PhysicalPassShowcase } from "@/components/membership/PhysicalPassShowcase";
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
            <div className={styles.heroPill}><Sparkle size={15} weight="fill" aria-hidden="true" /> Atletica, su misura</div>
            <h1>Allenati da atleta.<br /><span>Supera il tuo prossimo limite.</span></h1>
            <p className={styles.heroLead}>Performance Pass crea un percorso personalizzato per ogni atleta: contenuti video, mini-corsi e vantaggi selezionati in base alla tua specialità, al tuo livello e al prossimo obiettivo.</p>
            <div className={styles.heroActions}>
              <ButtonLink href={profile.onboardingComplete ? "/dashboard" : "/onboarding"} variant="secondary" arrow>
                {profile.onboardingComplete ? "Vai al tuo percorso" : "Crea il tuo profilo atleta"}
              </ButtonLink>
              <TransitionLink href="#scelti-per-te" className={styles.inlineLink}><Play size={18} weight="fill" aria-hidden="true" /> Esplora i contenuti</TransitionLink>
            </div>
            <div className={styles.heroStats} aria-label="Numeri della piattaforma">
              <span><strong>12+</strong><small>sessioni tecniche</small></span>
              <span><strong>16</strong><small>partner premium</small></span>
              <span><strong>7</strong><small>specialità</small></span>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/generated/athletics-sprint.webp" alt="Velocista in accelerazione su una pista di atletica" fill priority sizes="(max-width: 800px) 94vw, 48vw" />
            <div className={styles.heroVisualTop}>
              <Badge tone="premium">Sprint Lab</Badge>
              <span>18 min</span>
            </div>
            <div className={styles.heroVisualBottom}>
              <div><small>VELOCITÀ · INTERMEDIO</small><strong>I primi 30 metri</strong></div>
              <TransitionLink href="/video/primi-30-metri" aria-label="Apri I primi 30 metri"><Play size={20} weight="fill" aria-hidden="true" /></TransitionLink>
            </div>
            <div className={styles.floatCard}><Lightning size={18} weight="fill" aria-hidden="true" /><span><strong>+6%</strong> potenza in uscita</span></div>
          </div>
        </div>
      </section>

      <Reveal><PhysicalPassShowcase /></Reveal>

      <Reveal>
        <section id="scelti-per-te" className="section">
          <div className="shell">
            <SectionHeading eyebrow={profile.onboardingComplete ? `Per ${profile.name} · ${profile.discipline}` : "In evidenza"} title="Scelti per te" description="Tecnica e performance selezionate per specialità, livello e obiettivo." href="/video" />
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
            <SectionHeading eyebrow="Impara, applica, porta in pista" title="Mini-corsi per fare progressi reali" description="Percorsi brevi per capire il gesto e trasferirlo nella tua specialità." href="/corsi" linkLabel="Tutti i corsi" />
            <div className={styles.courseGrid}>
              {courses.slice(0, 2).map((course) => <CourseCard key={course.id} course={course} compact />)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section">
          <div className="shell">
            <SectionHeading eyebrow="Solo per i membri" title="Vantaggi dentro e fuori la pista" description="Chiodate, impianti, cronometraggio, nutrizione e recovery." href="/vantaggi" />
            <div className={styles.benefitGrid}>
              {benefits.slice(0, 3).map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal><MembershipComparison /></Reveal>
    </>
  );
}
