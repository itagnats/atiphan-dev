import { Webhook, type LucideIcon } from "lucide-react";
import {
  siFigma,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";

/**
 * Official brand marks from `simple-icons`, rendered as inline SVG.
 *
 * The map lives here rather than in data/portfolio.ts on purpose: named
 * imports are what let the bundler tree-shake a 3,000-icon package down to
 * the handful actually used. A dynamic lookup by string would pull in all of
 * them. Adding a logo therefore means one line in `ICONS` plus one entry in
 * `stack` — the only place in the project where content needs a code change.
 */
const ICONS: Record<string, SimpleIcon> = {
  react: siReact,
  typescript: siTypescript,
  nextdotjs: siNextdotjs,
  tailwindcss: siTailwindcss,
  figma: siFigma,
};

/**
 * Entries in `stack` that are concepts rather than products. simple-icons only
 * ships brand marks, so anything without one needs a generic glyph — otherwise
 * BrandIcon returns null and the row shows an empty box with a tooltip.
 */
const GENERIC: Record<string, LucideIcon> = {
  rest: Webhook,
};

/** Exported so data/__tests__/portfolio.test.ts can assert that every `stack`
 *  slug resolves to a mark here or in simple-icons, with no second list to
 *  keep in sync. */
export const GENERIC_SLUGS = Object.keys(GENERIC);

/**
 * Some brand colours are unusable on a dark card — Next.js is #000000, which
 * would render an invisible logo. Anything below this luminance falls back to
 * the page's own text colour instead of its official hex.
 */
function isTooDarkForDarkUi(hex: string): boolean {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  // Rec. 709 relative luminance, 0–255.
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
}

export function BrandIcon({
  slug,
  label,
  className,
}: {
  slug: string;
  /** Used as the accessible name for generic glyphs, which carry no title of
   *  their own. Brand marks use simple-icons' own title instead. */
  label?: string;
  className?: string;
}) {
  const icon = ICONS[slug];

  if (!icon) {
    const Generic = GENERIC[slug];
    if (!Generic) return null;
    return (
      <Generic
        role="img"
        aria-label={label ?? slug}
        className={className}
        strokeWidth={1.9}
      />
    );
  }

  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      className={className}
      style={{ fill: isTooDarkForDarkUi(icon.hex) ? "currentColor" : `#${icon.hex}` }}
    >
      <path d={icon.path} />
    </svg>
  );
}
