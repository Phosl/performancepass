import { SignupView } from "@/components/member/SignupView";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Attiva il Pass demo",
  description: "Attiva localmente la membership dimostrativa Performance Pass by Atletica TV.",
  path: "/iscriviti",
  index: false,
});

export default function SignupPage() {
  return <SignupView />;
}
