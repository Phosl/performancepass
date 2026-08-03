import { ProfileView } from "@/components/profile/ProfileView";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Il tuo profilo",
  description: "Gestisci specialità, livello, obiettivo, frequenza, membership e preferiti su Performance Pass.",
  path: "/profilo",
  index: false,
});

export default function ProfilePage() {
  return <ProfileView />;
}
