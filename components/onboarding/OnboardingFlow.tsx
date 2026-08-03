"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Barbell, Bicycle, PersonSimpleRun, PersonSimpleSwim, TennisBall, YinYang } from "@phosphor-icons/react";
import { useAthlete } from "@/context/AthleteContext";
import { frequencies, goals, levels, sports, type AthleteProfile, type Sport } from "@/lib/types";
import { usePageTransition } from "@/components/transitions/PageTransitionProvider";
import styles from "./onboarding.module.scss";

const sportIcons = {
  Corsa: PersonSimpleRun,
  Ciclismo: Bicycle,
  Fitness: Barbell,
  Nuoto: PersonSimpleSwim,
  Tennis: TennisBall,
  Yoga: YinYang,
};

const steps = [
  { key: "sport", eyebrow: "01 · IL TUO MONDO", title: "Qual è il tuo sport?", description: "Partiamo da ciò che ami fare. Potrai cambiarlo quando vuoi.", options: sports },
  { key: "level", eyebrow: "02 · IL TUO PUNTO DI PARTENZA", title: "Come ti descriveresti?", description: "Ci aiuta a proporti il giusto livello di intensità e dettaglio.", options: levels },
  { key: "goal", eyebrow: "03 · LA TUA DIREZIONE", title: "Qual è il tuo obiettivo?", description: "Scegli la priorità su cui vuoi lavorare in questo momento.", options: goals },
  { key: "frequency", eyebrow: "04 · IL TUO RITMO", title: "Quanto ti alleni?", description: "Costruiamo un percorso realistico intorno alle tue abitudini.", options: frequencies },
] as const;

export function OnboardingFlow() {
  const { navigate } = usePageTransition();
  const { profile, updateProfile } = useAthlete();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState(() => ({ sport: profile.sport, level: profile.level, goal: profile.goal, frequency: profile.frequency }));
  const current = steps[step];
  const currentValue = draft[current.key];
  const progress = ((step + 1) / steps.length) * 100;

  const selectionSummary = useMemo(() => [draft.sport, draft.level, draft.goal, draft.frequency], [draft]);

  const select = (value: string) => setDraft((state) => ({ ...state, [current.key]: value }));
  const continueFlow = () => {
    if (step < steps.length - 1) {
      setStep((value) => value + 1);
      return;
    }
    updateProfile({ ...(draft as Pick<AthleteProfile, "sport" | "level" | "goal" | "frequency">), onboardingComplete: true });
    navigate("/dashboard");
  };

  return (
    <section className={styles.onboarding}>
      <div className={styles.topbar}>
        <div className={styles.stepLabel}>Profilo atleta <span>{step + 1} di {steps.length}</span></div>
        <div className={styles.progress} aria-label={`Progresso: step ${step + 1} di ${steps.length}`}><span style={{ width: `${progress}%` }} /></div>
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <p>{current.eyebrow}</p>
          <h1>{current.title}</h1>
          <span>{current.description}</span>
        </div>

        <div className={`${styles.options} ${current.key === "sport" ? styles.sportOptions : ""}`} role="radiogroup" aria-label={current.title}>
          {current.options.map((option) => {
            const Icon = current.key === "sport" ? sportIcons[option as Sport] : null;
            const active = currentValue === option;
            return (
              <button key={option} type="button" className={active ? styles.selected : ""} onClick={() => select(option)} role="radio" aria-checked={active}>
                {Icon && <Icon size={27} weight={active ? "fill" : "regular"} aria-hidden="true" />}
                <span>{option}</span>
                <i aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.back} onClick={() => step > 0 ? setStep((value) => value - 1) : navigate("/")}>
            <ArrowLeft size={18} weight="bold" aria-hidden="true" /> Indietro
          </button>
          <button type="button" className={styles.continue} onClick={continueFlow}>
            {step === steps.length - 1 ? "Crea il mio percorso" : "Continua"}<ArrowRight size={18} weight="bold" aria-hidden="true" />
          </button>
        </div>
      </div>

      <aside className={styles.summary} aria-label="Riepilogo profilo">
        {selectionSummary.map((value, index) => <span key={`${value}-${index}`} className={index <= step ? styles.summaryActive : ""}>{value}</span>)}
      </aside>
    </section>
  );
}
