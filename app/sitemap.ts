import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* The /work/[slug] case-study pages are deliberately absent. That route is
   switched off (see app/work/[slug]/page.tsx) and every URL under it now 404s,
   so listing them here would only invite search engines to crawl dead pages.
   Put them back if the detail pages are revived. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/cv`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
