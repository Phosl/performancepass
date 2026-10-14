import { MemberPassView } from "@/components/member/MemberPassView";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Il mio Pass demo",
  description: "Visualizza la membership demo, il numero locale, la richiesta Azzurro e i contenuti preferiti.",
  path: "/il-mio-pass",
  index: false,
});

export default function MyPassPage() {
  return <MemberPassView />;
}
