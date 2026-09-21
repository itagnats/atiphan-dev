import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The One Young World routes already 404; this is belt and braces so a
        // crawler that saw them before does not keep asking.
        disallow: ["/assignments/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
