import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard/DashboardView";

export const metadata: Metadata = {
  title: "Il tuo percorso",
  description: "La dashboard personalizzata Performance Pass con allenamenti, progressi e contenuti scelti per te.",
  robots: { index: false, follow: true },
};

export default function DashboardPage() {
  return <DashboardView />;
}
