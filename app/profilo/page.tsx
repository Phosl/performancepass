import type { Metadata } from "next";
import { ProfileView } from "@/components/profile/ProfileView";

export const metadata: Metadata = {
  title: "Il tuo profilo",
  description: "Gestisci sport, livello, obiettivo, frequenza, membership e preferiti su Performance Pass.",
  robots: { index: false, follow: true },
};

export default function ProfilePage() {
  return <ProfileView />;
}
