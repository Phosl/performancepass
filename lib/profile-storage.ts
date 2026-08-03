import {
  disciplines,
  frequencies,
  goals,
  levels,
  type AthleteProfile,
  type Discipline,
  type Goal,
  type Membership,
} from "@/lib/types";

export const PROFILE_STORAGE_KEY = "performance-pass-profile-v2";
export const LEGACY_PROFILE_STORAGE_KEY = "performance-pass-profile-v1";

export const defaultProfile: AthleteProfile = {
  name: "Atleta",
  discipline: "Velocità",
  level: "Intermedio",
  goal: "Velocità",
  frequency: "3–4 volte",
  membership: "free",
  favorites: ["v2"],
  onboardingComplete: false,
};

const legacyDisciplineMap: Record<string, Discipline> = {
  Corsa: "Mezzofondo e fondo",
  Ciclismo: "Mezzofondo e fondo",
  Nuoto: "Mezzofondo e fondo",
  Fitness: "Velocità",
  Tennis: "Velocità",
  Yoga: "Prove multiple",
};

const legacyGoalMap: Record<string, Goal> = {
  Resistenza: "Resistenza",
  Forza: "Forza esplosiva",
  Velocità: "Velocità",
  Mobilità: "Tecnica",
  Benessere: "Tecnica",
};

const memberships: readonly Membership[] = ["free", "premium", "pro"];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function includes<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === "string" && values.includes(value as T);
}

export function normalizeStoredProfile(value: unknown): AthleteProfile | null {
  if (!isRecord(value)) return null;

  const discipline = includes(disciplines, value.discipline)
    ? value.discipline
    : typeof value.sport === "string"
      ? legacyDisciplineMap[value.sport] ?? defaultProfile.discipline
      : defaultProfile.discipline;
  const goal = includes(goals, value.goal)
    ? value.goal
    : typeof value.goal === "string"
      ? legacyGoalMap[value.goal] ?? defaultProfile.goal
      : defaultProfile.goal;

  return {
    name: typeof value.name === "string" && value.name.trim() ? value.name.trim().slice(0, 32) : defaultProfile.name,
    discipline,
    level: includes(levels, value.level) ? value.level : defaultProfile.level,
    goal,
    frequency: includes(frequencies, value.frequency) ? value.frequency : defaultProfile.frequency,
    membership: includes(memberships, value.membership) ? value.membership : defaultProfile.membership,
    favorites: Array.isArray(value.favorites) ? value.favorites.filter((item): item is string => typeof item === "string") : defaultProfile.favorites,
    onboardingComplete: typeof value.onboardingComplete === "boolean" ? value.onboardingComplete : defaultProfile.onboardingComplete,
  };
}

function parseProfile(value: string | null): AthleteProfile | null {
  if (!value) return null;
  try {
    return normalizeStoredProfile(JSON.parse(value) as unknown);
  } catch {
    return null;
  }
}

export function readAthleteProfile(storage: Pick<Storage, "getItem">): AthleteProfile {
  return parseProfile(storage.getItem(PROFILE_STORAGE_KEY))
    ?? parseProfile(storage.getItem(LEGACY_PROFILE_STORAGE_KEY))
    ?? defaultProfile;
}

export function writeAthleteProfile(
  storage: Pick<Storage, "setItem" | "removeItem">,
  profile: AthleteProfile,
) {
  storage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  storage.removeItem(LEGACY_PROFILE_STORAGE_KEY);
}
