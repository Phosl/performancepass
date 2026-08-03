import { DashboardView } from "@/components/dashboard/DashboardView";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Il tuo percorso",
  description: "La dashboard atletica personalizzata con tecnica, progressi e contenuti scelti per la tua specialità.",
  path: "/dashboard",
  index: false,
});

export default function DashboardPage() {
  return <DashboardView />;
}
