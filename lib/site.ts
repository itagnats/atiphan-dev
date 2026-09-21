/**
 * One definition of where this site lives.
 *
 * `metadataBase`, robots.txt and the sitemap all need an absolute origin, and
 * three copies of the same `process.env ?? localhost` expression is how one of
 * them quietly ends up pointing at localhost in production. Set
 * NEXT_PUBLIC_SITE_URL in the deploy environment — without it every Open Graph
 * image URL and every sitemap entry resolves to a machine nobody else can reach.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const SITE_NAME = "Atiphan Charoenphon";
export const SITE_TITLE = "Atiphan Charoenphon — Software Developer";
export const SITE_DESCRIPTION =
  "Software developer at the CP Leadership Institute, Bangkok. Frontend, API integration and system flow, with a background in industrial product design.";

/** The pre-generated CV. Lives in public/; see components/DownloadCvButton.tsx. */
export const CV_PDF_PATH = "/atiphan-charoenphon-cv.pdf";
