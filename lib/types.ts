export const sports = ["Corsa", "Ciclismo", "Fitness", "Nuoto", "Tennis", "Yoga"] as const;
export const levels = ["Principiante", "Intermedio", "Avanzato"] as const;
export const goals = ["Resistenza", "Forza", "Velocità", "Mobilità", "Benessere"] as const;
export const frequencies = ["1–2 volte", "3–4 volte", "5+ volte"] as const;

export type Sport = (typeof sports)[number];
export type AthleteLevel = (typeof levels)[number];
export type Goal = (typeof goals)[number];
export type Frequency = (typeof frequencies)[number];
export type Membership = "free" | "premium";

export interface AthleteProfile {
  name: string;
  sport: Sport;
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
  access: Membership;
  tags: string[];
  sports: Sport[];
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
