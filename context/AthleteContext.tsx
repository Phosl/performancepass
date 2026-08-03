"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { AthleteProfile } from "@/lib/types";

const STORAGE_KEY = "performance-pass-profile-v1";

const defaultProfile: AthleteProfile = {
  name: "Atleta",
  sport: "Corsa",
  level: "Intermedio",
  goal: "Resistenza",
  frequency: "3–4 volte",
  membership: "free",
  favorites: ["v2"],
  onboardingComplete: false,
};

interface AthleteContextValue {
  profile: AthleteProfile;
  hydrated: boolean;
  updateProfile: (updates: Partial<AthleteProfile>) => void;
  toggleFavorite: (videoId: string) => void;
  isFavorite: (videoId: string) => boolean;
  resetProfile: () => void;
}

const AthleteContext = createContext<AthleteContextValue | null>(null);

function isStoredProfile(value: unknown): value is Partial<AthleteProfile> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function AthleteProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<AthleteProfile>(defaultProfile);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (isStoredProfile(parsed)) {
          setProfile({ ...defaultProfile, ...parsed });
        }
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
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
