"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, LockSimple, Play, ShareNetwork } from "@phosphor-icons/react";
import type { TrainingVideo } from "@/lib/types";
import { useAthlete } from "@/context/AthleteContext";
import { Badge } from "@/components/ui/Badge";
import { FavoriteButton } from "@/components/ui/FavoriteButton";
import styles from "./videoDetail.module.scss";

export function VideoDetailView({ video }: { video: TrainingVideo }) {
  const { profile } = useAthlete();
  const locked = video.access === "premium" && profile.membership !== "premium";

  return (
    <div className={`shell ${styles.page}`}>
      <Link href="/video" className={styles.back}><ArrowLeft size={17} weight="bold" /> Tutti i video</Link>
      <article className={styles.player}>
        <Image src={video.image} alt={video.imageAlt} fill priority sizes="(max-width: 800px) 94vw, 1180px" />
        <div className={styles.playerTop}><Badge tone={video.access}>{video.access === "premium" ? "Premium" : "Free"}</Badge><FavoriteButton videoId={video.id} /></div>
        <div className={styles.playControl}>
          <button type="button" aria-label={locked ? "Contenuto Premium bloccato" : `Riproduci ${video.title}`}>
            {locked ? <LockSimple size={28} weight="fill" /> : <Play size={28} weight="fill" />}
          </button>
          <span>{locked ? "Passa a Premium per iniziare" : "Premi play per iniziare"}</span>
        </div>
      </article>
      <div className={styles.details}>
        <div>
          <p>{video.eyebrow}</p><h1>{video.title}</h1><div className={styles.meta}><span><Clock size={16} />{video.duration} minuti</span><span>{video.level}</span><span>{video.sports.join(" · ")}</span></div>
          <p className={styles.description}>{video.description}</p>
          <div className={styles.tags}>{video.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
        </div>
        <aside>
          <ShareNetwork size={20} /><div><strong>Condividi la sessione</strong><span>Allenarsi insieme rende tutto più semplice.</span></div>
        </aside>
      </div>
    </div>
  );
}
