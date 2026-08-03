"use client";

import { useState } from "react";
import { Check, Minus, Sparkle } from "@phosphor-icons/react";
import { useAthlete } from "@/context/AthleteContext";
import {
  membershipFeatures,
  membershipPlans,
  type MembershipFeatureValue,
} from "@/lib/membership";
import type { Membership } from "@/lib/types";
import styles from "./membershipComparison.module.scss";

function FeatureValue({ value }: { value: MembershipFeatureValue }) {
  if (typeof value === "string") return <span>{value}</span>;

  return value ? (
    <span className={styles.included} aria-label="Incluso"><Check size={17} weight="bold" aria-hidden="true" /> Incluso</span>
  ) : (
    <span className={styles.notIncluded} aria-label="Non incluso"><Minus size={17} weight="bold" aria-hidden="true" /> Non incluso</span>
  );
}

export function MembershipComparison() {
  const { profile, hydrated, updateProfile } = useAthlete();
  const [announcement, setAnnouncement] = useState("");

  const selectPlan = (membership: Membership, name: string) => {
    updateProfile({ membership });
    setAnnouncement(`${name} è ora il tuo piano demo.`);
  };

  return (
    <section id="membership" className={styles.section} aria-labelledby="membership-title">
      <div className="shell">
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}><Sparkle size={15} weight="fill" aria-hidden="true" /> Scegli il tuo pass</span>
            <h2 id="membership-title">La performance giusta,<br />al livello giusto.</h2>
          </div>
          <p>Parti gratis, sblocca tutto con Premium o porta il percorso ancora più avanti con Pro Pass.</p>
        </div>

        <p className={styles.scrollHint}>Scorri per confrontare tutti i piani →</p>
        <div className={styles.tableScroll}>
          <table>
            <caption className="srOnly">Confronto tra i piani Free, Premium e Pro Pass</caption>
            <thead>
              <tr>
                <th scope="col" className={styles.featureHeading}>Cosa include</th>
                {membershipPlans.map((plan) => (
                  <th key={plan.id} scope="col" className={styles[plan.id]}>
                    <div className={styles.planTopline}>
                      <span>{plan.eyebrow}</span>
                      {plan.id === "premium" && <small>Consigliato</small>}
                    </div>
                    <strong>{plan.name}</strong>
                    <p>{plan.description}</p>
                    <div className={styles.price}><b>{plan.price}</b><span>{plan.cadence}</span></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {membershipFeatures.map((feature) => (
                <tr key={feature.label}>
                  <th scope="row">{feature.label}</th>
                  {membershipPlans.map((plan) => <td key={plan.id}><FeatureValue value={feature.plans[plan.id]} /></td>)}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row">Il tuo prossimo passo</th>
                {membershipPlans.map((plan) => {
                  const isCurrent = hydrated && profile.membership === plan.id;
                  return (
                    <td key={plan.id}>
                      <button
                        type="button"
                        className={styles[`${plan.id}Button`]}
                        disabled={!hydrated || isCurrent}
                        onClick={() => selectPlan(plan.id, plan.name)}
                      >
                        {isCurrent ? "Piano attuale" : plan.cta}
                      </button>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
        <div className={styles.note}>
          <span>Nessun pagamento richiesto: le CTA cambiano il piano salvato nella demo.</span>
          <span role="status" aria-live="polite">{announcement}</span>
        </div>
      </div>
    </section>
  );
}
