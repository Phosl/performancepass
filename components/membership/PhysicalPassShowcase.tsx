"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { ArrowRight, Heart, IdentificationCard, ShieldCheck } from "@phosphor-icons/react";
import gsap from "gsap";
import { useMember } from "@/context/MemberContext";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./physicalPassShowcase.module.scss";

export function PhysicalPassShowcase() {
  const { profile, isMember } = useMember();
  const cardRef = useRef<HTMLDivElement>(null);
  const displayedNumber = profile.memberNumber ?? "PP-DEMO-••••••••";

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
    <section id="pass-preview" className={styles.section} aria-labelledby="pass-preview-title">
      <div className={`shell ${styles.layout}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><IdentificationCard size={16} weight="fill" aria-hidden="true" /> Il mio Pass</span>
          <h2 id="pass-preview-title">La membership,<br /><span>in una sola card.</span></h2>
          <p>Un punto di accesso alla demo per ritrovare stato del Pass, contenuti preferiti e richiesta Azzurro.</p>
          <ul>
            <li><ShieldCheck size={18} aria-hidden="true" /><span><strong>Numero demo stabile</strong> salvato solo in questo browser</span></li>
            <li><Heart size={18} aria-hidden="true" /><span><strong>Preferiti conservati</strong> senza creare un account reale</span></li>
          </ul>
          <div className={styles.actions}>
            <ButtonLink href={isMember ? "/il-mio-pass" : "/iscriviti"} variant="secondary" arrow>{isMember ? "Apri Il mio Pass" : "Attiva il Pass demo"}</ButtonLink>
            <TransitionLink href="/contenuti">Esplora i contenuti <ArrowRight size={17} weight="bold" aria-hidden="true" /></TransitionLink>
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
            aria-label={`Card membership demo intestata a ${profile.name}, numero ${displayedNumber}`}
          >
            <Image src="/images/generated/pro-pass-surface.webp" alt="" fill sizes="(max-width: 860px) 88vw, 52vw" />
            <div className={styles.cardGlow} aria-hidden="true" />
            <div className={styles.cardTop}>
              <BrandLockup className={styles.cardLockup} />
              <span className={styles.cardStatus}>MEMBRO DEMO</span>
            </div>
            <div className={styles.cardMonogram} aria-hidden="true">P</div>
            <div className={styles.cardBottom}>
              <div><small>NOME</small><strong>{profile.name || "Atleta"}</strong></div>
              <div><small>NUMERO</small><strong>{displayedNumber}</strong></div>
              <div><small>FIRMA</small><strong>Atletica TV</strong></div>
            </div>
          </div>
          <span className={styles.cardCaption}>Card membership · anteprima locale non operativa</span>
        </div>
      </div>
    </section>
  );
}
