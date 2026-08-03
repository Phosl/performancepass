"use client";

import { useMemo, useState } from "react";
import { FunnelSimple } from "@phosphor-icons/react";
import { videos } from "@/lib/mock-data";
import { disciplines, type ContentAccess, type Discipline } from "@/lib/types";
import { VideoCard } from "@/components/cards/VideoCard";
import styles from "./catalog.module.scss";

type AccessFilter = "tutti" | ContentAccess;

export function VideoCatalog() {
  const [discipline, setDiscipline] = useState<"Tutte" | Discipline>("Tutte");
  const [access, setAccess] = useState<AccessFilter>("tutti");
  const filtered = useMemo(() => videos.filter((video) => (discipline === "Tutte" || video.disciplines.includes(discipline)) && (access === "tutti" || video.access === access)), [discipline, access]);

  return (
    <div className="shell">
      <div className={styles.filters}>
        <div className={styles.filterLabel}><FunnelSimple size={18} aria-hidden="true" /><span>Filtra</span></div>
        <div className={styles.chips} role="group" aria-label="Filtra per specialità">
          {["Tutte", ...disciplines].map((item) => <button key={item} type="button" onClick={() => setDiscipline(item as "Tutte" | Discipline)} aria-pressed={discipline === item}>{item}</button>)}
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
