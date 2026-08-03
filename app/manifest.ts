import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "PPass",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f3",
    theme_color: "#c8ff45",
    lang: "it-IT",
    categories: ["sports", "fitness", "education"],
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
