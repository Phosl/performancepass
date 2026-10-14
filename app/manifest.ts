import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Performance Pass by Atletica TV",
    short_name: siteConfig.name,
    description: "La membership di Atletica TV con vantaggi dedicati, contenuti riservati e formazione per chi vive l’atletica.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f3",
    theme_color: "#75d9ff",
    lang: "it-IT",
    categories: ["sports", "fitness", "education"],
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
