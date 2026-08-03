"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { AthleteProfile } from "@/lib/types";
import { defaultProfile, readAthleteProfile, writeAthleteProfile } from "@/lib/profile-storage";

interface AthleteContextValue {
  profile: AthleteProfile;
  hydrated: boolean;
  updateProfile: (updates: Partial<AthleteProfile>) => void;
  toggleFavorite: (videoId: string) => void;
  isFavorite: (videoId: string) => boolean;
  resetProfile: () => void;
}

const AthleteContext = createContext<AthleteContextValue | null>(null);

export function AthleteProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<AthleteProfile>(defaultProfile);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setProfile(readAthleteProfile(window.localStorage));
    } catch {
      setProfile(defaultProfile);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) writeAthleteProfile(window.localStorage, profile);
  }, [hydrated, profile]);

  const updateProfile = useCallback((updates: Partial<AthleteProfile>) => {
    setProfile((current) => ({ ...current, ...updates }));
  }, []);

  const toggleFavorite = useCallback((videoId: string) => {
    setProfile((current) => ({
      ...current,
      favorites: current.favorites.includes(videoId)
        ? current.favorites.filter((id) => id !== videoId)
        : [...current.favorites, videoId],
    }));
  }, []);

  const resetProfile = useCallback(() => setProfile(defaultProfile), []);
  const isFavorite = useCallback((videoId: string) => profile.favorites.includes(videoId), [profile.favorites]);

  const value = useMemo(
    () => ({ profile, hydrated, updateProfile, toggleFavorite, isFavorite, resetProfile }),
    [profile, hydrated, updateProfile, toggleFavorite, isFavorite, resetProfile],
  );

  return <AthleteContext.Provider value={value}>{children}</AthleteContext.Provider>;
}

export function useAthlete() {
  const context = useContext(AthleteContext);
  if (!context) throw new Error("useAthlete deve essere usato dentro AthleteProvider");
  return context;
}
