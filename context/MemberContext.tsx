"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  activateDemoMembership,
  createDefaultMemberProfile,
  normalizeMemberName,
  readMemberProfile,
  toggleMemberFavorite,
  writeMemberProfile,
  type ActivateDemoMembershipInput,
} from "@/lib/profile-storage";
import type { MemberProfileV3 } from "@/lib/types";

interface MemberContextValue {
  profile: MemberProfileV3;
  hydrated: boolean;
  isMember: boolean;
  activateMembership: (input: ActivateDemoMembershipInput) => void;
  updateName: (name: string) => void;
  requestAzzurroVerification: () => void;
  toggleFavorite: (contentId: string) => void;
  isFavorite: (contentId: string) => boolean;
  resetProfile: () => void;
}

const MemberContext = createContext<MemberContextValue | null>(null);

export function MemberProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<MemberProfileV3>(createDefaultMemberProfile);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setProfile(readMemberProfile(window.localStorage));
    } catch {
      setProfile(createDefaultMemberProfile());
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      writeMemberProfile(window.localStorage, profile);
    } catch {
      // The frontend demo remains usable for this session if storage is blocked.
    }
  }, [hydrated, profile]);

  const activateMembership = useCallback((input: ActivateDemoMembershipInput) => {
    setProfile((current) => activateDemoMembership(current, input));
  }, []);

  const updateName = useCallback((name: string) => {
    setProfile((current) => ({
      ...current,
      name: normalizeMemberName(name),
    }));
  }, []);

  const requestAzzurroVerification = useCallback(() => {
    setProfile((current) => ({ ...current, azzurroRequestStatus: "pending" }));
  }, []);

  const toggleFavorite = useCallback((contentId: string) => {
    setProfile((current) => toggleMemberFavorite(current, contentId));
  }, []);

  const resetProfile = useCallback(() => setProfile(createDefaultMemberProfile()), []);
  const isFavorite = useCallback((contentId: string) => profile.favorites.includes(contentId), [profile.favorites]);

  const value = useMemo(
    () => ({
      profile,
      hydrated,
      isMember: profile.status === "member",
      activateMembership,
      updateName,
      requestAzzurroVerification,
      toggleFavorite,
      isFavorite,
      resetProfile,
    }),
    [
      profile,
      hydrated,
      activateMembership,
      updateName,
      requestAzzurroVerification,
      toggleFavorite,
      isFavorite,
      resetProfile,
    ],
  );

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>;
}

export function useMember(): MemberContextValue {
  const context = useContext(MemberContext);
  if (!context) throw new Error("useMember deve essere usato dentro MemberProvider");
  return context;
}
