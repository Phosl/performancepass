import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/contenuti", "/partner"],
      disallow: ["/dashboard", "/onboarding", "/profilo", "/iscriviti", "/il-mio-pass"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url.origin,
  };
}
