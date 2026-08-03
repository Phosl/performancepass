"use client";

import { Crown, Sparkle } from "@phosphor-icons/react";
import { benefits } from "@/lib/mock-data";
import { useAthlete } from "@/context/AthleteContext";
import { BenefitCard } from "@/components/cards/BenefitCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PartnerDirectory } from "./PartnerDirectory";
import { membershipPlanById } from "@/lib/membership";
import styles from "./catalog.module.scss";

export function BenefitsCatalog() {
  const { profile } = useAthlete();
  const activePlan = membershipPlanById[profile.membership];
  return (
    <>
      <div className="shell" id="vantaggi-membri">
        <div className={styles.memberBanner}>
          <span><Crown size={22} weight="fill" aria-hidden="true" /></span>
          <div><small>IL TUO PASS</small><strong>{activePlan.name} attivo</strong><p>{profile.membership === "free" ? "Passa a Premium o Pro per usare tutti i codici partner." : "Tutti i vantaggi sono disponibili per te."}</p></div>
          {profile.membership === "free" && <ButtonLink href="/#membership" variant="secondary">Confronta i piani</ButtonLink>}
        </div>
        <div className={styles.benefitIntro}><Sparkle size={18} weight="fill" /><span>Nuovi vantaggi ogni mese, selezionati per chi si allena.</span></div>
        <div className={styles.benefitGrid}>{benefits.map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)}</div>
      </div>
      <PartnerDirectory />
    </>
  );
}
