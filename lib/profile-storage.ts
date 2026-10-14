import type {
  AzzurroRequestStatus,
  DemoMemberNumber,
  MemberProfileV3,
  MemberStatus,
} from "./types";

export const MEMBER_PROFILE_STORAGE_KEY = "performance-pass-profile-v3";
export const LEGACY_PROFILE_V2_STORAGE_KEY = "performance-pass-profile-v2";
export const LEGACY_PROFILE_V1_STORAGE_KEY = "performance-pass-profile-v1";

export const defaultMemberProfile: MemberProfileV3 = {
  name: "Atleta",
  status: "visitor",
  memberNumber: null,
  azzurroRequestStatus: "not-requested",
  favorites: [],
};

export interface MemberProfileStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface ActivateDemoMembershipInput {
  name: string;
  requestAzzurro?: boolean;
}

const memberStatuses: readonly MemberStatus[] = ["visitor", "member"];
const azzurroRequestStatuses: readonly AzzurroRequestStatus[] = ["not-requested", "pending"];
const legacyMemberships = ["free", "premium", "pro"] as const;
const demoMemberNumberPattern = /^PP-DEMO-[A-Z0-9]{8}$/;
const demoMemberNumberAlphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function includes<T extends string>(values: readonly T[], value: unknown): value is T {
  return typeof value === "string" && values.includes(value as T);
}

export function normalizeMemberName(value: unknown): string {
  return typeof value === "string" && value.trim()
    ? value.trim().slice(0, 64)
    : defaultMemberProfile.name;
}

function normalizeFavorites(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return [...new Set(
    value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean),
  )];
}

function isDemoMemberNumber(value: unknown): value is DemoMemberNumber {
  return typeof value === "string" && demoMemberNumberPattern.test(value);
}

export function createDefaultMemberProfile(): MemberProfileV3 {
  return { ...defaultMemberProfile, favorites: [] };
}

export function createDemoMemberNumber(random: () => number = Math.random): DemoMemberNumber {
  let suffix = "";

  for (let index = 0; index < 8; index += 1) {
    const randomValue = Math.min(Math.max(random(), 0), 0.9999999999999999);
    suffix += demoMemberNumberAlphabet[Math.floor(randomValue * demoMemberNumberAlphabet.length)];
  }

  return `PP-DEMO-${suffix}`;
}

export function normalizeMemberProfileV3(
  value: unknown,
  createMemberNumber: () => DemoMemberNumber = createDemoMemberNumber,
): MemberProfileV3 | null {
  if (!isRecord(value) || !includes(memberStatuses, value.status)) return null;

  const status = value.status;
  const memberNumber = status === "member"
    ? isDemoMemberNumber(value.memberNumber) ? value.memberNumber : createMemberNumber()
    : null;

  return {
    name: normalizeMemberName(value.name),
    status,
    memberNumber,
    azzurroRequestStatus: includes(azzurroRequestStatuses, value.azzurroRequestStatus)
      ? value.azzurroRequestStatus
      : "not-requested",
    favorites: normalizeFavorites(value.favorites),
  };
}

function normalizeLegacyProfile(
  value: unknown,
  createMemberNumber: () => DemoMemberNumber,
): MemberProfileV3 | null {
  if (!isRecord(value) || !includes(legacyMemberships, value.membership)) return null;

  const status: MemberStatus = value.membership === "free" ? "visitor" : "member";

  return {
    name: normalizeMemberName(value.name),
    status,
    memberNumber: status === "member" ? createMemberNumber() : null,
    azzurroRequestStatus: "not-requested",
    favorites: normalizeFavorites(value.favorites),
  };
}

function parseProfile(
  value: string | null,
  normalize: (parsed: unknown) => MemberProfileV3 | null,
): MemberProfileV3 | null {
  if (!value) return null;

  try {
    return normalize(JSON.parse(value) as unknown);
  } catch {
    return null;
  }
}

export function writeMemberProfile(storage: Pick<MemberProfileStorage, "setItem" | "removeItem">, profile: MemberProfileV3): void {
  storage.setItem(MEMBER_PROFILE_STORAGE_KEY, JSON.stringify(profile));

  for (const legacyKey of [LEGACY_PROFILE_V2_STORAGE_KEY, LEGACY_PROFILE_V1_STORAGE_KEY]) {
    try {
      storage.removeItem(legacyKey);
    } catch {
      // The v3 profile is already safe; stale legacy data can be retried later.
    }
  }
}

export function readMemberProfile(
  storage: MemberProfileStorage,
  createMemberNumber: () => DemoMemberNumber = createDemoMemberNumber,
): MemberProfileV3 {
  const candidates = [
    {
      key: MEMBER_PROFILE_STORAGE_KEY,
      normalize: (value: unknown) => normalizeMemberProfileV3(value, createMemberNumber),
    },
    {
      key: LEGACY_PROFILE_V2_STORAGE_KEY,
      normalize: (value: unknown) => normalizeLegacyProfile(value, createMemberNumber),
    },
    {
      key: LEGACY_PROFILE_V1_STORAGE_KEY,
      normalize: (value: unknown) => normalizeLegacyProfile(value, createMemberNumber),
    },
  ] as const;

  for (const candidate of candidates) {
    const profile = parseProfile(storage.getItem(candidate.key), candidate.normalize);
    if (!profile) continue;

    try {
      writeMemberProfile(storage, profile);
    } catch {
      // Keep the migrated profile in memory without deleting its legacy source.
    }

    return profile;
  }

  return createDefaultMemberProfile();
}

export function activateDemoMembership(
  profile: MemberProfileV3,
  input: ActivateDemoMembershipInput,
  createMemberNumber: () => DemoMemberNumber = createDemoMemberNumber,
): MemberProfileV3 {
  return {
    ...profile,
    name: normalizeMemberName(input.name),
    status: "member",
    memberNumber: profile.memberNumber ?? createMemberNumber(),
    azzurroRequestStatus: input.requestAzzurro ? "pending" : profile.azzurroRequestStatus,
  };
}

export function toggleMemberFavorite(profile: MemberProfileV3, contentId: string): MemberProfileV3 {
  const normalizedId = contentId.trim();
  if (!normalizedId) return profile;

  return {
    ...profile,
    favorites: profile.favorites.includes(normalizedId)
      ? profile.favorites.filter((id) => id !== normalizedId)
      : [...profile.favorites, normalizedId],
  };
}
