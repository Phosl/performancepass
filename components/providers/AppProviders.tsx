"use client";

import { MemberProvider } from "@/context/MemberContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <MemberProvider>{children}</MemberProvider>;
}
