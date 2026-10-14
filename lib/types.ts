export const disciplines = ["Velocità", "Mezzofondo e fondo", "Ostacoli", "Salti", "Lanci", "Marcia", "Prove multiple"] as const;
export const levels = ["Principiante", "Intermedio", "Avanzato"] as const;
export const goals = ["Tecnica", "Velocità", "Resistenza", "Forza esplosiva", "Preparazione gara"] as const;
export const frequencies = ["1–2 volte", "3–4 volte", "5+ volte"] as const;

export type Discipline = (typeof disciplines)[number];
export type AthleteLevel = (typeof levels)[number];
export type Goal = (typeof goals)[number];
export type Frequency = (typeof frequencies)[number];
export type MemberStatus = "visitor" | "member";
export type AzzurroRequestStatus = "not-requested" | "pending";
export type DemoMemberNumber = `PP-DEMO-${string}`;
export type ContentAccess = "preview" | "member";

export interface MemberProfileV3 {
  name: string;
  status: MemberStatus;
  memberNumber: DemoMemberNumber | null;
  azzurroRequestStatus: AzzurroRequestStatus;
  favorites: string[];
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
  access: ContentAccess;
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
