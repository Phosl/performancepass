import type { Metadata } from "next";
import { DashboardView } from "@/components/dashboard/DashboardView";

export const metadata: Metadata = {
  title: "Il tuo percorso",
  description: "La dashboard atletica personalizzata con tecnica, progressi e contenuti scelti per la tua specialità.",
  robots: { index: false, follow: true },
};

export default function DashboardPage() {
  return <DashboardView />;
}
