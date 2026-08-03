import type { Metadata } from "next";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";

export const metadata: Metadata = {
  title: "Crea il tuo profilo",
  description: "Personalizza Performance Pass in base al tuo sport, livello, obiettivo e frequenza di allenamento.",
  robots: { index: false, follow: true },
};

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
