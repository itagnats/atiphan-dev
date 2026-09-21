import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Experiment {
  slug: string;
  numeral: string;
  name: string;
  tagline: string;
  url: string;
  urlLabel: string;
  detail: string;
  tech: readonly string[];
  cover: { src: string; alt: string };
}

interface ExperimentGridProps {
  experiments: ReadonlyArray<Experiment>;
}

/**
 * The experiments as a row of illustrated covers.
 *
 * The artwork is a transparent plaque that already carries the project's title,
 * so the card deliberately has no background, no border and no title overlay —
 * anything behind it would box in a shape that is meant to float, and a second
 * title would sit on top of the painted one. The caption underneath adds only
 * what the art cannot say: what the thing is technically, and where it lives.
 */
export function ExperimentGrid({ experiments }: ExperimentGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-4 lg:gap-x-5">
      {experiments.map((exp) => (
        <a
          key={exp.slug}
          href={exp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${exp.name.split(" — ")[0]} — opens in a new tab`}
          className="group flex flex-col gap-3 rounded-2xl outline-offset-4 transition focus-visible:outline-2 focus-visible:outline-violet"
        >
          <div className="relative aspect-square">
            <Image
              src={exp.cover.src}
              alt={exp.cover.alt}
              fill
              sizes="(max-width: 640px) 46vw, (max-width: 1024px) 44vw, 300px"
              className="object-contain drop-shadow-[0_14px_30px_rgba(10,5,20,0.55)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
            />

            <span className="pointer-events-none absolute -right-1 -top-1 z-2 flex size-8 items-center justify-center rounded-full border border-border-strong bg-[rgba(15,8,28,0.82)] text-violet opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
            </span>
          </div>

          <div className="flex flex-col gap-1 px-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet">
              {exp.numeral} · Live
            </div>
            <div className="text-[12px] leading-snug text-text-muted md:text-[13px]">
              {exp.tagline}
            </div>
            <div className="font-mono text-[10px] tracking-[0.06em] text-violet/60 transition group-hover:text-violet">
              {exp.urlLabel}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
