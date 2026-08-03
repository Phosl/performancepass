"use client";

import { AthleteProvider } from "@/context/AthleteContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AthleteProvider>{children}</AthleteProvider>;
}
