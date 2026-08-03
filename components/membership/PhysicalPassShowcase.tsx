"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { ArrowRight, MapPin, Sparkle, Storefront } from "@phosphor-icons/react";
import gsap from "gsap";
import { useAthlete } from "@/context/AthleteContext";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./physicalPassShowcase.module.scss";

export function PhysicalPassShowcase() {
  const { profile } = useAthlete();
  const cardRef = useRef<HTMLDivElement>(null);

  const moveCard = (event: PointerEvent<HTMLElement>) => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    const bounds = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    gsap.to(cardRef.current, { rotateY: x * 8, rotateX: y * -8, duration: .35, ease: "power2.out" });
  };

  const resetCard = () => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: .55, ease: "power3.out" });
  };

  return (
    <section id="physical-pass" className={styles.section} aria-labelledby="physical-pass-title">
      <div className={`shell ${styles.layout}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><Sparkle size={15} weight="fill" aria-hidden="true" /> Il Pass che ti segue in pista</span>
          <h2 id="physical-pass-title">Digitale nel percorso.<br /><span>Reale nei vantaggi.</span></h2>
          <p>Mostra il Pass nei negozi affiliati o usalo online per accedere ai vantaggi del tuo livello.</p>
          <ul>
            <li><Storefront size={18} aria-hidden="true" /><span><strong>16 partner selezionati</strong> tra pista, attrezzatura e recovery</span></li>
            <li><MapPin size={18} aria-hidden="true" /><span><strong>Online e in store</strong> con benefit pensati per l’atletica</span></li>
          </ul>
          <div className={styles.actions}>
            <ButtonLink href="#membership" variant="secondary" arrow>Confronta i Pass</ButtonLink>
            <TransitionLink href="/vantaggi#partner-directory">Scopri dove usarla <ArrowRight size={17} weight="bold" aria-hidden="true" /></TransitionLink>
          </div>
        </div>

        <div className={styles.cardStage}>
          <div className={styles.orbit} aria-hidden="true" />
          <div
            ref={cardRef}
            className={styles.card}
            onPointerMove={moveCard}
            onPointerLeave={resetCard}
            role="img"
            aria-label={`Pro Pass fisica intestata a ${profile.name}`}
          >
            <Image src="/images/generated/pro-pass-surface.webp" alt="" fill sizes="(max-width: 860px) 88vw, 52vw" />
            <div className={styles.cardGlow} aria-hidden="true" />
            <div className={styles.cardTop}>
              <span className={styles.cardBrand}>Performance<i>Pass</i></span>
              <span className={styles.cardTier}>PRO PASS</span>
            </div>
            <div className={styles.cardMonogram} aria-hidden="true">P</div>
            <div className={styles.cardBottom}>
              <div><small>ATLETA</small><strong>{profile.name || "Atleta"}</strong></div>
              <div><small>SPECIALITÀ</small><strong>{profile.discipline}</strong></div>
              <span>PP · 00017</span>
            </div>
          </div>
          <span className={styles.cardCaption}>Pro Edition · Card demo</span>
        </div>
      </div>
    </section>
  );
}
