import assert from "node:assert/strict";
import test from "node:test";
import { canAccessContent } from "../lib/content-access";
import { courses, videos } from "../lib/mock-data";
import {
  LEGACY_PROFILE_V1_STORAGE_KEY,
  LEGACY_PROFILE_V2_STORAGE_KEY,
  MEMBER_PROFILE_STORAGE_KEY,
  activateDemoMembership,
  createDefaultMemberProfile,
  createDemoMemberNumber,
  readMemberProfile,
  toggleMemberFavorite,
  writeMemberProfile,
  type MemberProfileStorage,
} from "../lib/profile-storage";
import type { DemoMemberNumber, MemberProfileV3 } from "../lib/types";

const generatedNumber = "PP-DEMO-ABCDEFGH" as DemoMemberNumber;

class MemoryStorage implements MemberProfileStorage {
  readonly data = new Map<string, string>();
  readonly operations: string[] = [];
  failWrites = false;

  constructor(initial: Record<string, string> = {}) {
    for (const [key, value] of Object.entries(initial)) this.data.set(key, value);
  }

  getItem(key: string): string | null {
    this.operations.push(`get:${key}`);
    return this.data.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.operations.push(`set:${key}`);
    if (this.failWrites) throw new Error("storage blocked");
    this.data.set(key, value);
  }

  removeItem(key: string): void {
    this.operations.push(`remove:${key}`);
    this.data.delete(key);
  }
}

test("reads v3 before v2 and v1, then cleans legacy data", () => {
  const v3: MemberProfileV3 = {
    name: "Ada",
    status: "member",
    memberNumber: generatedNumber,
    azzurroRequestStatus: "pending",
    favorites: ["v1"],
  };
  const storage = new MemoryStorage({
    [MEMBER_PROFILE_STORAGE_KEY]: JSON.stringify(v3),
    [LEGACY_PROFILE_V2_STORAGE_KEY]: JSON.stringify({ name: "V2", membership: "premium", favorites: ["v2"] }),
    [LEGACY_PROFILE_V1_STORAGE_KEY]: JSON.stringify({ name: "V1", membership: "free", favorites: ["v3"] }),
  });

  assert.deepEqual(readMemberProfile(storage, () => generatedNumber), v3);
  assert.equal(storage.getItem(LEGACY_PROFILE_V2_STORAGE_KEY), null);
  assert.equal(storage.getItem(LEGACY_PROFILE_V1_STORAGE_KEY), null);
});

test("falls back from invalid v3 and migrates v2 premium/pro memberships to member", () => {
  for (const membership of ["premium", "pro"] as const) {
    const storage = new MemoryStorage({
      [MEMBER_PROFILE_STORAGE_KEY]: JSON.stringify({ unexpected: true }),
      [LEGACY_PROFILE_V2_STORAGE_KEY]: JSON.stringify({
        name: `  ${membership} member  `,
        membership,
        favorites: ["v2", "v2", 42],
      }),
    });

    const profile = readMemberProfile(storage, () => generatedNumber);

    assert.deepEqual(profile, {
      name: `${membership} member`,
      status: "member",
      memberNumber: generatedNumber,
      azzurroRequestStatus: "not-requested",
      favorites: ["v2"],
    });
    assert.deepEqual(JSON.parse(storage.getItem(MEMBER_PROFILE_STORAGE_KEY) ?? "null"), profile);
    assert.equal(readMemberProfile(storage, () => "PP-DEMO-ZZZZZZZZ").memberNumber, generatedNumber);
  }
});

test("migrates a v1 free membership to visitor while preserving name and favorites", () => {
  const storage = new MemoryStorage({
    [LEGACY_PROFILE_V1_STORAGE_KEY]: JSON.stringify({
      name: "Filippo",
      sport: "Corsa",
      membership: "free",
      favorites: ["v4", "v7"],
    }),
  });

  assert.deepEqual(readMemberProfile(storage, () => generatedNumber), {
    name: "Filippo",
    status: "visitor",
    memberNumber: null,
    azzurroRequestStatus: "not-requested",
    favorites: ["v4", "v7"],
  });
  assert.equal(storage.getItem(LEGACY_PROFILE_V1_STORAGE_KEY), null);
});

test("does not remove legacy data when the v3 write fails", () => {
  const legacy = JSON.stringify({ name: "Ada", membership: "premium", favorites: ["v2"] });
  const storage = new MemoryStorage({ [LEGACY_PROFILE_V2_STORAGE_KEY]: legacy });
  storage.failWrites = true;

  const profile = readMemberProfile(storage, () => generatedNumber);

  assert.equal(profile.status, "member");
  assert.equal(storage.getItem(LEGACY_PROFILE_V2_STORAGE_KEY), legacy);
  assert.equal(storage.operations.some((operation) => operation.startsWith("remove:")), false);
});

test("writes v3 before removing both legacy keys", () => {
  const storage = new MemoryStorage({
    [LEGACY_PROFILE_V2_STORAGE_KEY]: "legacy-v2",
    [LEGACY_PROFILE_V1_STORAGE_KEY]: "legacy-v1",
  });
  const profile: MemberProfileV3 = {
    name: "Ada",
    status: "visitor",
    memberNumber: null,
    azzurroRequestStatus: "not-requested",
    favorites: [],
  };

  writeMemberProfile(storage, profile);

  assert.deepEqual(storage.operations.slice(0, 3), [
    `set:${MEMBER_PROFILE_STORAGE_KEY}`,
    `remove:${LEGACY_PROFILE_V2_STORAGE_KEY}`,
    `remove:${LEGACY_PROFILE_V1_STORAGE_KEY}`,
  ]);
});

test("creates a demo number once and keeps Azzurro request status independent", () => {
  const visitor: MemberProfileV3 = {
    name: "Atleta",
    status: "visitor",
    memberNumber: null,
    azzurroRequestStatus: "pending",
    favorites: ["v2"],
  };
  const active = activateDemoMembership(visitor, { name: "  Ada  " }, () => generatedNumber);
  const activeAgain = activateDemoMembership(active, { name: "Ada B." }, () => "PP-DEMO-ZZZZZZZZ");

  assert.equal(active.name, "Ada");
  assert.equal(active.status, "member");
  assert.equal(active.memberNumber, generatedNumber);
  assert.equal(active.azzurroRequestStatus, "pending");
  assert.equal(activeAgain.memberNumber, generatedNumber);

  const requestedOnActivation = activateDemoMembership(
    { ...visitor, azzurroRequestStatus: "not-requested" },
    { name: "Ada", requestAzzurro: true },
    () => generatedNumber,
  );
  assert.equal(requestedOnActivation.azzurroRequestStatus, "pending");
});

test("reset state is a fresh visitor profile without demo claims", () => {
  const first = createDefaultMemberProfile();
  first.favorites.push("v2");
  const reset = createDefaultMemberProfile();

  assert.deepEqual(reset, {
    name: "Atleta",
    status: "visitor",
    memberNumber: null,
    azzurroRequestStatus: "not-requested",
    favorites: [],
  });
});

test("adds and removes favorites without changing membership or Azzurro state", () => {
  const profile: MemberProfileV3 = {
    name: "Ada",
    status: "member",
    memberNumber: generatedNumber,
    azzurroRequestStatus: "pending",
    favorites: ["v1"],
  };

  const added = toggleMemberFavorite(profile, "  v2  ");
  const removed = toggleMemberFavorite(added, "v1");

  assert.deepEqual(added.favorites, ["v1", "v2"]);
  assert.deepEqual(removed.favorites, ["v2"]);
  assert.equal(removed.status, "member");
  assert.equal(removed.memberNumber, generatedNumber);
  assert.equal(removed.azzurroRequestStatus, "pending");
});

test("generates PP-DEMO numbers using the restricted eight-character alphabet", () => {
  const values = [0, 0.999999, 0.25, 0.5, 0.75, 0.1, 0.9, 0.4];
  let index = 0;
  const number = createDemoMemberNumber(() => values[index++]);

  assert.match(number, /^PP-DEMO-[A-Z0-9]{8}$/);
});

test("grants previews to everyone and member content only to active members", () => {
  assert.equal(canAccessContent("preview", "visitor"), true);
  assert.equal(canAccessContent("preview", "member"), true);
  assert.equal(canAccessContent("member", "visitor"), false);
  assert.equal(canAccessContent("member", "member"), true);
});

test("uses the same preview/member contract for video and course data", () => {
  const accesses = [
    ...videos.map((video) => video.access),
    ...courses.flatMap((course) => course.lessons.map((lesson) => lesson.access)),
  ];

  assert.ok(accesses.includes("preview"));
  assert.ok(accesses.includes("member"));
  assert.ok(accesses.every((access) => access === "preview" || access === "member"));
  assert.ok(videos.filter((video) => video.access === "member").every((video) => !canAccessContent(video.access, "visitor")));
  assert.ok(courses.flatMap((course) => course.lessons).every((lesson) => canAccessContent(lesson.access, "member")));
});
