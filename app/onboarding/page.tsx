import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Crea il tuo profilo",
  description: "Personalizza Performance Pass in base a specialità atletica, livello, obiettivo e frequenza di allenamento.",
  path: "/onboarding",
  index: false,
});

export default function OnboardingPage() {
  return <OnboardingFlow />;
}
