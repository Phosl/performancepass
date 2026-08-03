export const disciplines = ["Velocità", "Mezzofondo e fondo", "Ostacoli", "Salti", "Lanci", "Marcia", "Prove multiple"] as const;
export const levels = ["Principiante", "Intermedio", "Avanzato"] as const;
export const goals = ["Tecnica", "Velocità", "Resistenza", "Forza esplosiva", "Preparazione gara"] as const;
export const frequencies = ["1–2 volte", "3–4 volte", "5+ volte"] as const;

export type Discipline = (typeof disciplines)[number];
export type AthleteLevel = (typeof levels)[number];
export type Goal = (typeof goals)[number];
export type Frequency = (typeof frequencies)[number];
export type Membership = "free" | "premium" | "pro";
export type ContentAccess = Exclude<Membership, "pro">;

export interface AthleteProfile {
  name: string;
  discipline: Discipline;
  level: AthleteLevel;
  goal: Goal;
  frequency: Frequency;
  membership: Membership;
  favorites: string[];
  onboardingComplete: boolean;
}

export interface TrainingVideo {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  duration: number;
  level: AthleteLevel;
  access: ContentAccess;
  tags: string[];
  disciplines: Discipline[];
  goals: Goal[];
  image: string;
  imageAlt: string;
  accent: "lime" | "orange" | "blue" | "violet" | "sand";
  description: string;
}

export interface CourseLesson {
  title: string;
  duration: number;
  free: boolean;
}

export interface MiniCourse {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: AthleteLevel;
  image: string;
  imageAlt: string;
  lessons: CourseLesson[];
}

export interface Benefit {
  id: string;
  partner: string;
  category: string;
  title: string;
  description: string;
  value: string;
  code: string;
  accent: "lime" | "orange" | "blue" | "violet";
}

export interface PartnerStore {
  id: string;
  name: string;
  category: "Nutrizione" | "Training" | "Attrezzatura" | "Outdoor" | "Recovery" | "Servizi";
  description: string;
  availability: "Online" | "In store" | "Online + In store";
  location: string;
  memberBenefit: string;
  accent: "lime" | "orange" | "blue" | "violet" | "sand";
}
