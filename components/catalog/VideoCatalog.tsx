"use client";

import { useMemo, useState } from "react";
import { FunnelSimple } from "@phosphor-icons/react";
import { videos } from "@/lib/mock-data";
import { sports, type Membership, type Sport } from "@/lib/types";
import { VideoCard } from "@/components/cards/VideoCard";
import styles from "./catalog.module.scss";

type AccessFilter = "tutti" | Membership;

export function VideoCatalog() {
  const [sport, setSport] = useState<"Tutti" | Sport>("Tutti");
  const [access, setAccess] = useState<AccessFilter>("tutti");
  const filtered = useMemo(() => videos.filter((video) => (sport === "Tutti" || video.sports.includes(sport)) && (access === "tutti" || video.access === access)), [sport, access]);

  return (
    <div className="shell">
      <div className={styles.filters}>
        <div className={styles.filterLabel}><FunnelSimple size={18} aria-hidden="true" /><span>Filtra</span></div>
        <div className={styles.chips} role="group" aria-label="Filtra per sport">
          {["Tutti", ...sports].map((item) => <button key={item} type="button" onClick={() => setSport(item as "Tutti" | Sport)} aria-pressed={sport === item}>{item}</button>)}
        </div>
        <select value={access} onChange={(event) => setAccess(event.target.value as AccessFilter)} aria-label="Filtra per accesso">
          <option value="tutti">Free + Premium</option><option value="free">Solo Free</option><option value="premium">Solo Premium</option>
        </select>
      </div>
      <p className={styles.resultCount}>{filtered.length} contenuti</p>
      {filtered.length > 0 ? <div className={styles.videoGrid}>{filtered.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <div className={styles.empty}><h2>Nessun contenuto trovato</h2><p>Prova a cambiare uno dei filtri selezionati.</p></div>}
    </div>
  );
}
