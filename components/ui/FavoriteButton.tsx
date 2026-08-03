"use client";

import { Heart } from "@phosphor-icons/react";
import { useAthlete } from "@/context/AthleteContext";
import styles from "./ui.module.scss";

export function FavoriteButton({ videoId }: { videoId: string }) {
  const { isFavorite, toggleFavorite } = useAthlete();
  const active = isFavorite(videoId);

  return (
    <button
      type="button"
      className={`${styles.favorite} ${active ? styles.favoriteActive : ""}`}
      onClick={(event) => { event.preventDefault(); toggleFavorite(videoId); }}
      aria-label={active ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
      aria-pressed={active}
    >
      <Heart size={19} weight={active ? "fill" : "regular"} aria-hidden="true" />
    </button>
  );
}
