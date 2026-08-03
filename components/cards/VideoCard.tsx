"use client";

import Image from "next/image";
import { useRef } from "react";
import { Clock, Play } from "@phosphor-icons/react";
import gsap from "gsap";
import type { TrainingVideo } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./cards.module.scss";

export function VideoCard({ video, featured = false }: { video: TrainingVideo; featured?: boolean }) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const animate = (active: boolean) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.to(cardRef.current, { y: active ? -5 : 0, duration: .3, ease: "power2.out" });
    gsap.to(imageRef.current, { scale: active ? 1.035 : 1, duration: .55, ease: "power2.out" });
  };

  return (
    <article
      ref={cardRef}
      className={`${styles.videoCard} ${featured ? styles.videoFeatured : ""}`}
      onMouseEnter={() => animate(true)}
      onMouseLeave={() => animate(false)}
    >
      <div className={styles.media}>
        <Image ref={imageRef} src={video.image} alt={video.imageAlt} fill sizes={featured ? "(max-width: 760px) 90vw, 55vw" : "(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 30vw"} />
        <TransitionLink href={`/video/${video.slug}`} className={styles.mediaLink} aria-label={`Apri il video ${video.title}`} />
        <div className={styles.mediaTop}>
          <Badge tone={video.access}>{video.access === "premium" ? "Premium" : "Free"}</Badge>
          <FavoriteButton videoId={video.id} />
        </div>
        <span className={styles.play}><Play size={17} weight="fill" aria-hidden="true" /></span>
      </div>
      <div className={styles.videoContent}>
        <p className={styles.cardEyebrow}>{video.eyebrow}</p>
        <h3><TransitionLink href={`/video/${video.slug}`}>{video.title}</TransitionLink></h3>
        <div className={styles.meta}>
          <span><Clock size={15} aria-hidden="true" />{video.duration} min</span>
          <span>{video.level}</span>
        </div>
      </div>
    </article>
  );
}
