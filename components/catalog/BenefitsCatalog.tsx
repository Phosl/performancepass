"use client";

import { Gift, Info, Ticket, Trophy } from "@phosphor-icons/react";
import { useMember } from "@/context/MemberContext";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PartnerDirectory } from "./PartnerDirectory";
import styles from "./catalog.module.scss";

const benefitAreas = [
  {
    title: "Esperienze e appuntamenti",
    description: "Accessi e occasioni legate al mondo dell’atletica potranno essere presentati qui dopo l’approvazione.",
    icon: Trophy,
  },
  {
    title: "Servizi per i membri",
    description: "Eventuali servizi dedicati saranno pubblicati con condizioni, durata e disponibilità verificabili.",
    icon: Ticket,
  },
  {
    title: "Opportunità selezionate",
    description: "Ogni proposta mostrerà il soggetto responsabile e i termini reali, senza codici dimostrativi.",
    icon: Gift,
  },
] as const;

export function BenefitsCatalog() {
  const { profile, isMember } = useMember();

  return (
    <>
      <div className="shell" id="vantaggi-membri">
        <div className={styles.memberBanner}>
          <span><Info size={22} weight="fill" aria-hidden="true" /></span>
          <div>
            <small>STATO DEL PASS</small>
            <strong>{isMember ? `Membro demo · ${profile.memberNumber}` : "Pass non ancora attivato"}</strong>
            <p>Questa demo non pubblica offerte, codici o percentuali non approvati.</p>
          </div>
          <ButtonLink href={isMember ? "/il-mio-pass" : "/iscriviti"} variant="secondary">
            {isMember ? "Apri Il mio Pass" : "Entra nel club"}
          </ButtonLink>
        </div>

        <div className={styles.opportunityIntro}>
          <p>Vantaggi in preparazione</p>
          <h2>Uno spazio pronto per opportunità reali.</h2>
          <span>Le aree qui sotto descrivono la struttura prevista, non offerte già disponibili.</span>
        </div>

        <div className={styles.opportunityGrid}>
          {benefitAreas.map(({ title, description, icon: Icon }) => (
            <article key={title} className={styles.opportunityCard}>
              <Icon size={24} aria-hidden="true" />
              <span className={styles.statusChip}>In valutazione</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
      <PartnerDirectory />
    </>
  );
}
