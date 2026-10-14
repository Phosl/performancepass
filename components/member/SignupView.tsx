"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, IdentificationCard, ShieldCheck } from "@phosphor-icons/react";
import { useMember } from "@/context/MemberContext";
import { usePageTransition } from "@/components/transitions/PageTransitionProvider";
import { BrandLockup } from "@/components/brand/BrandLockup";
import styles from "./member.module.scss";

export function SignupView() {
  const { hydrated } = useMember();

  if (!hydrated) return <div className={`shell ${styles.loading}`} role="status">Preparazione del Pass demo…</div>;

  return <SignupForm />;
}

function SignupForm() {
  const { profile, isMember, activateMembership } = useMember();
  const { navigate } = usePageTransition();
  const [name, setName] = useState(() => profile.name === "Atleta" ? "" : profile.name);
  const [requestAzzurro, setRequestAzzurro] = useState(() => profile.azzurroRequestStatus === "pending");
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedName = name.trim();
    if (!normalizedName) {
      setError("Inserisci il nome da mostrare sul Pass demo.");
      return;
    }

    setError("");
    activateMembership({ name: normalizedName, requestAzzurro });
    navigate("/il-mio-pass");
  }

  return (
    <div className={`shell ${styles.signupPage}`}>
      <section className={styles.signupIntro} aria-labelledby="signup-title">
        <BrandLockup className={styles.introLockup} />
        <p className={styles.eyebrow}>ATTIVAZIONE LOCALE · DEMO</p>
        <h1 id="signup-title">Entra nel club.<br /><span>Senza creare un account.</span></h1>
        <p>Attiva una versione dimostrativa del Pass in questo browser. Non vengono richiesti email, password o pagamento.</p>
        <ul>
          <li><IdentificationCard size={19} aria-hidden="true" /><span>Numero membro <strong>PP-DEMO-*</strong> stabile sul dispositivo</span></li>
          <li><ShieldCheck size={19} aria-hidden="true" /><span>Dati salvati esclusivamente nel LocalStorage del browser</span></li>
          <li><CheckCircle size={19} aria-hidden="true" /><span>Accesso ai dettagli dimostrativi per membri</span></li>
        </ul>
      </section>

      <form className={styles.signupForm} onSubmit={submit} noValidate>
        <div className={styles.formHeading}>
          <span>{isMember ? "PASS GIÀ ATTIVO" : "IL TUO PASS DEMO"}</span>
          <h2>{isMember ? "Aggiorna il nome sulla card" : "Come vuoi comparire?"}</h2>
          {isMember && <p>Il numero {profile.memberNumber} resterà invariato.</p>}
        </div>

        <label className={styles.field}>
          <span>Nome sul Pass</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={64}
            value={name}
            onChange={(event) => { setName(event.target.value); setError(""); }}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "name-error" : "name-help"}
            placeholder="Il tuo nome"
          />
          <small id="name-help">Verrà mostrato sulla card e resterà su questo dispositivo.</small>
          {error && <strong id="name-error" className={styles.error} role="alert">{error}</strong>}
        </label>

        <label id="azzurri" className={styles.checkField}>
          <input type="checkbox" checked={requestAzzurro} onChange={(event) => setRequestAzzurro(event.target.checked)} />
          <span>
            <strong>Segnala la richiesta Azzurro</strong>
            <small>Facoltativa. Sarà indicata come “in attesa di verifica — demo locale”. Non attribuisce uno stato ufficiale.</small>
          </span>
        </label>

        <button type="submit" className={styles.submitButton}>
          {isMember ? "Salva e apri Il mio Pass" : "Attiva il Pass demo"}
        </button>
        <p className={styles.disclaimer}>Il submit non trasmette dati, non crea un account e non avvia un acquisto.</p>
      </form>
    </div>
  );
}
