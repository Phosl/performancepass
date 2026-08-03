import type { Membership } from "@/lib/types";

export interface MembershipPlan {
  id: Membership;
  name: string;
  eyebrow: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  highlights: readonly string[];
}

export type MembershipFeatureValue = boolean | string;

export interface MembershipFeature {
  label: string;
  plans: Record<Membership, MembershipFeatureValue>;
}

export const membershipPlans: readonly MembershipPlan[] = [
  {
    id: "free",
    name: "Free",
    eyebrow: "Per iniziare",
    price: "0 €",
    cadence: "per sempre",
    description: "Il modo più semplice per scoprire il tuo percorso.",
    cta: "Inizia gratis",
    highlights: ["Selezione personalizzata", "Video e lezioni gratuite", "Anteprima vantaggi"],
  },
  {
    id: "premium",
    name: "Premium",
    eyebrow: "Più scelto",
    price: "8,99 €",
    cadence: "al mese",
    description: "Tutto ciò che serve per allenarti con continuità.",
    cta: "Prova Premium",
    highlights: ["Catalogo completo", "Tutti i mini-corsi", "Vantaggi partner"],
  },
  {
    id: "pro",
    name: "Pro Pass",
    eyebrow: "Massima performance",
    price: "16,99 €",
    cadence: "al mese",
    description: "Più profondità, priorità e vantaggi per fare sul serio.",
    cta: "Attiva Pro Pass",
    highlights: ["Tutto Premium", "Percorsi avanzati", "Vantaggi esclusivi Pro"],
  },
] as const;

export const membershipPlanById = Object.fromEntries(
  membershipPlans.map((plan) => [plan.id, plan]),
) as Record<Membership, MembershipPlan>;

export const membershipFeatures: readonly MembershipFeature[] = [
  {
    label: "Video training",
    plans: { free: "Selezione Free", premium: "Catalogo completo", pro: "Catalogo + sessioni Pro" },
  },
  {
    label: "Mini-corsi",
    plans: { free: "Prime 2 lezioni", premium: "Tutti i percorsi", pro: "Percorsi avanzati" },
  },
  {
    label: "Scelti per te",
    plans: { free: true, premium: true, pro: "Priorità Pro" },
  },
  {
    label: "Vantaggi partner",
    plans: { free: "Anteprima", premium: "Tutti i vantaggi", pro: "Vantaggi esclusivi" },
  },
  {
    label: "Profili sportivi",
    plans: { free: "1 sport", premium: "1 sport", pro: "Fino a 3 sport" },
  },
  {
    label: "Piano performance",
    plans: { free: false, premium: "Mensile", pro: "Settimanale" },
  },
] as const;
