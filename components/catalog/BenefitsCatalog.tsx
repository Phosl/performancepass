"use client";

import { Crown, Sparkle } from "@phosphor-icons/react";
import { benefits } from "@/lib/mock-data";
import { useAthlete } from "@/context/AthleteContext";
import { BenefitCard } from "@/components/cards/BenefitCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./catalog.module.scss";

export function BenefitsCatalog() {
  const { profile } = useAthlete();
  return (
    <div className="shell">
      <div className={styles.memberBanner}>
        <span><Crown size={22} weight="fill" aria-hidden="true" /></span>
        <div><small>IL TUO PASS</small><strong>{profile.membership === "premium" ? "Premium attivo" : "Membership Free"}</strong><p>{profile.membership === "premium" ? "Tutti i vantaggi sono disponibili per te." : "Passa a Premium per usare tutti i codici partner."}</p></div>
        {profile.membership === "free" && <ButtonLink href="/profilo" variant="secondary">Scopri Premium</ButtonLink>}
      </div>
      <div className={styles.benefitIntro}><Sparkle size={18} weight="fill" /><span>Nuovi vantaggi ogni mese, selezionati per chi si allena.</span></div>
      <div className={styles.benefitGrid}>{benefits.map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)}</div>
    </div>
  );
}
