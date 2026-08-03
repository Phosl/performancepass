"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import type { Benefit } from "@/lib/types";
import styles from "./cards.module.scss";

export function BenefitCard({ benefit }: { benefit: Benefit }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(benefit.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className={`${styles.benefitCard} ${styles[benefit.accent]}`}>
      <div className={styles.benefitTop}>
        <span className={styles.partnerMark}>{benefit.partner.slice(0, 1)}</span>
        <p>{benefit.partner}</p>
        <span className={styles.benefitValue}>{benefit.value}</span>
      </div>
      <div className={styles.benefitBody}>
        <p className={styles.cardEyebrow}>{benefit.category}</p>
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
        <button type="button" onClick={copy} className={styles.codeButton} aria-live="polite">
          <span>Codice <strong>{benefit.code}</strong></span>
          {copied ? <><Check size={17} weight="bold" aria-hidden="true" /> Copiato</> : <><Copy size={17} aria-hidden="true" /> Copia</>}
        </button>
      </div>
    </article>
  );
}
