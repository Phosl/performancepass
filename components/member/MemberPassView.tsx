"use client";

import { Heart, IdentificationCard, Info, ShieldCheck, Trash } from "@phosphor-icons/react";
import { useMember } from "@/context/MemberContext";
import { videos } from "@/lib/mock-data";
import { PhysicalPassShowcase } from "@/components/membership/PhysicalPassShowcase";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import styles from "./member.module.scss";

export function MemberPassView() {
  const { profile, hydrated, isMember, requestAzzurroVerification, resetProfile } = useMember();
  const favorites = videos.filter((video) => profile.favorites.includes(video.id));

  function resetDemo() {
    if (window.confirm("Vuoi azzerare il Pass, la richiesta Azzurro e tutti i preferiti salvati in questo browser?")) resetProfile();
  }

  if (!hydrated) return <div className={`shell ${styles.loading}`} role="status">Caricamento del Pass demo…</div>;

  return (
    <>
      <header className={`shell pageTop ${styles.passHeader}`}>
        <p className={styles.eyebrow}>AREA LOCALE</p>
        <h1>Il mio Pass.</h1>
        <p>Stato della membership demo, richiesta Azzurro e preferiti salvati in questo browser.</p>
      </header>

      {!isMember && (
        <div className={`shell ${styles.visitorBanner}`}>
          <IdentificationCard size={28} aria-hidden="true" />
          <div><strong>Il Pass demo non è ancora attivo</strong><p>Puoi esplorare le anteprime oppure attivarlo localmente in pochi secondi.</p></div>
          <ButtonLink href="/iscriviti" variant="secondary" arrow>Entra nel club</ButtonLink>
        </div>
      )}

      <PhysicalPassShowcase />

      <section className={styles.memberPanels} aria-label="Dettagli del Pass demo">
        <div className={`shell ${styles.panelGrid}`}>
          <article className={styles.statusPanel}>
            <span className={styles.panelIcon}><ShieldCheck size={23} weight="fill" aria-hidden="true" /></span>
            <p className={styles.panelEyebrow}>STATO MEMBERSHIP</p>
            <h2>{isMember ? "Membro demo" : "Visitatore"}</h2>
            <dl>
              <div><dt>Nome</dt><dd>{profile.name}</dd></div>
              <div><dt>Numero</dt><dd>{profile.memberNumber ?? "Non assegnato"}</dd></div>
              <div><dt>Memoria</dt><dd>Solo questo browser</dd></div>
            </dl>
            {isMember && <ButtonLink href="/iscriviti" variant="ghost">Modifica il nome</ButtonLink>}
          </article>

          <article className={styles.azzurroPanel}>
            <span className={styles.panelIcon}><Info size={23} weight="fill" aria-hidden="true" /></span>
            <p className={styles.panelEyebrow}>RICHIESTA AZZURRO</p>
            <h2>{profile.azzurroRequestStatus === "pending" ? "In attesa di verifica — demo locale" : "Nessuna richiesta salvata"}</h2>
            <p>La richiesta è indipendente dalla membership e non viene trasmessa ad Atletica TV o a terzi.</p>
            {profile.azzurroRequestStatus !== "pending" && <button type="button" onClick={requestAzzurroVerification}>Salva una richiesta demo</button>}
          </article>
        </div>

        <div className={`shell ${styles.favoritesPanel}`}>
          <div className={styles.favoritesHeading}>
            <div><p className={styles.panelEyebrow}>PREFERITI</p><h2>Contenuti salvati</h2></div>
            <Heart size={24} weight={favorites.length ? "fill" : "regular"} aria-hidden="true" />
          </div>
          {favorites.length ? (
            <ul>{favorites.map((video) => <li key={video.id}><div><small>{video.eyebrow}</small><strong>{video.title}</strong></div><TransitionLink href={`/video/${video.slug}`}>Apri</TransitionLink></li>)}</ul>
          ) : (
            <div className={styles.emptyFavorites}><p>Non hai ancora salvato contenuti.</p><ButtonLink href="/contenuti" variant="ghost">Esplora il catalogo</ButtonLink></div>
          )}
        </div>

        <div className={`shell ${styles.resetRow}`}>
          <p><Info size={16} aria-hidden="true" /> L’azzeramento riguarda soltanto i dati locali di questa demo.</p>
          <button type="button" onClick={resetDemo}><Trash size={16} aria-hidden="true" /> Azzera dati demo</button>
        </div>
      </section>
    </>
  );
}
