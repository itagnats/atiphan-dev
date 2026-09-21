import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * Deliberately no `script-src` / `style-src`: Next injects inline scripts and
 * Tailwind injects inline styles, so a strict policy needs per-request nonces
 * and a middleware to issue them. The directives below are the ones that cost
 * nothing and cannot break rendering — clickjacking, MIME sniffing, plugin
 * embedding, form hijacking and referrer leakage.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework version to anyone scanning.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
