"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Crown, Heart, SignOut, Sparkle, UserCircle } from "@phosphor-icons/react";
import { useAthlete } from "@/context/AthleteContext";
import { videos } from "@/lib/mock-data";
import { frequencies, goals, levels, sports, type AthleteProfile } from "@/lib/types";
import { VideoCard } from "@/components/cards/VideoCard";
import styles from "./profile.module.scss";

type EditableProfile = Pick<AthleteProfile, "name" | "sport" | "level" | "goal" | "frequency">;

export function ProfileView() {
  const { profile, hydrated, updateProfile, resetProfile } = useAthlete();
  const [form, setForm] = useState<EditableProfile>(() => ({ name: profile.name, sport: profile.sport, level: profile.level, goal: profile.goal, frequency: profile.frequency }));
  const [saved, setSaved] = useState(false);
  const favorites = useMemo(() => videos.filter((video) => profile.favorites.includes(video.id)), [profile.favorites]);

  useEffect(() => {
    if (hydrated) setForm({ name: profile.name, sport: profile.sport, level: profile.level, goal: profile.goal, frequency: profile.frequency });
  }, [hydrated, profile.name, profile.sport, profile.level, profile.goal, profile.frequency]);

  const field = <K extends keyof EditableProfile>(key: K, value: EditableProfile[K]) => setForm((current) => ({ ...current, [key]: value }));
  const save = (event: React.FormEvent) => {
    event.preventDefault();
    updateProfile({ ...form, name: form.name.trim() || "Atleta", onboardingComplete: true });
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  if (!hydrated) return <div className={`shell ${styles.loading}`} role="status">Caricamento profilo…</div>;

  return (
    <div className={`shell ${styles.layout}`}>
      <aside className={styles.sidebar}>
        <div className={styles.avatar}><UserCircle size={46} weight="duotone" aria-hidden="true" /></div>
        <h1>{profile.name}</h1>
        <p>{profile.sport} · {profile.level}</p>
        <span className={styles.membershipBadge}><Crown size={14} weight="fill" aria-hidden="true" />Pass {profile.membership === "premium" ? "Premium" : "Free"}</span>
        <nav aria-label="Sezioni profilo">
          <a href="#dati" className={styles.active}><UserCircle size={18} /> Profilo sportivo</a>
          <a href="#preferiti"><Heart size={18} /> Preferiti <span>{favorites.length}</span></a>
          <a href="#membership"><Crown size={18} /> Membership</a>
        </nav>
        <button type="button" className={styles.reset} onClick={() => { resetProfile(); setSaved(false); }}><SignOut size={18} /> Ripristina demo</button>
      </aside>

      <div className={styles.main}>
        <section id="dati" className={styles.panel}>
          <div className={styles.panelTitle}><div><p>LE TUE PREFERENZE</p><h2>Profilo sportivo</h2></div><span>Usiamo questi dati per scegliere i tuoi contenuti.</span></div>
          <form onSubmit={save}>
            <label className={styles.full}>Come vuoi essere chiamato?<input value={form.name} onChange={(event) => field("name", event.target.value)} maxLength={32} autoComplete="given-name" /></label>
            <label>Sport principale<select value={form.sport} onChange={(event) => field("sport", event.target.value as AthleteProfile["sport"])}>{sports.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Livello<select value={form.level} onChange={(event) => field("level", event.target.value as AthleteProfile["level"])}>{levels.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Obiettivo<select value={form.goal} onChange={(event) => field("goal", event.target.value as AthleteProfile["goal"])}>{goals.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Frequenza<select value={form.frequency} onChange={(event) => field("frequency", event.target.value as AthleteProfile["frequency"])}>{frequencies.map((item) => <option key={item}>{item}</option>)}</select></label>
            <div className={styles.formActions}><span>{saved && <><Check size={16} weight="bold" /> Modifiche salvate</>}</span><button type="submit">Salva modifiche</button></div>
          </form>
        </section>

        <section id="membership" className={`${styles.panel} ${styles.membershipPanel}`}>
          <div><span><Sparkle size={20} weight="fill" /></span><p>PERFORMANCE PASS PREMIUM</p><h2>Porta il tuo percorso al livello successivo.</h2><ul><li><Check size={16} weight="bold" /> Tutti i video e i mini-corsi</li><li><Check size={16} weight="bold" /> Vantaggi partner senza limiti</li><li><Check size={16} weight="bold" /> Nuovi percorsi ogni mese</li></ul></div>
          <div className={styles.price}><span><strong>8,99 €</strong> / mese</span><button type="button" onClick={() => updateProfile({ membership: profile.membership === "premium" ? "free" : "premium" })}>{profile.membership === "premium" ? "Torna al piano Free" : "Attiva la demo Premium"}</button><small>Nessun pagamento: modalità demo</small></div>
        </section>

        <section id="preferiti" className={styles.favoritesSection}>
          <div className={styles.panelTitle}><div><p>LA TUA RACCOLTA</p><h2>Video preferiti</h2></div><span>{favorites.length} salvati</span></div>
          {favorites.length ? <div className={styles.favoriteGrid}>{favorites.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <div className={styles.empty}>Non hai ancora salvato video. Usa il cuore sulle card per aggiungerli.</div>}
        </section>
      </div>
    </div>
  );
}
