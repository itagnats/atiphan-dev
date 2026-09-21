"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredProject } from "@/data/portfolio";

/**
 * Carousel of real POCKITA screenshots inside a phone frame.
 *
 * This used to render a hand-coded mockup with placeholder copy. It now shows
 * actual screens from the live app — add or reorder them in
 * `featuredProject.phones` in data/portfolio.ts, no changes needed here.
 */
export interface Screen {
  src: string;
  alt: string;
}

/** Defaults to the POCKITA screens; pass `screens` to reuse the frame elsewhere. */
export function PhoneCarousel({
  screens,
}: {
  screens?: ReadonlyArray<Screen>;
} = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const phones = screens ?? featuredProject.phones;

  const phoneStep = () => {
    if (!trackRef.current) return 0;
    const firstPhone = trackRef.current.querySelector(".phone-frame") as HTMLElement | null;
    return firstPhone ? firstPhone.offsetWidth + 24 : 0;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const step = phoneStep();
      if (!step) return;
      const idx = Math.round(track.scrollLeft / step);
      if (idx !== active && idx >= 0 && idx < phones.length) {
        setActive(idx);
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [active, phones.length]);

  const scrollTo = (idx: number) => {
    trackRef.current?.scrollTo({ left: idx * phoneStep(), behavior: "smooth" });
  };

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * phoneStep(), behavior: "smooth" });
  };

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-70 flex-col self-center md:mx-0">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto"
        style={{ paddingInline: "max(0px, calc((100% - 260px) / 2))" }}
      >
        {phones.map((phone, i) => (
          <div
            key={phone.src}
            className="phone-frame relative shrink-0 snap-center overflow-hidden"
          >
            <Image
              src={phone.src}
              alt={phone.alt}
              fill
              sizes="260px"
              className="rounded-[22px] object-cover object-top"
              /* The first screen is above the fold on desktop. */
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {phones.length > 1 && (
        <>
          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {phones.map((phone, i) => (
              <button
                key={phone.src}
                onClick={() => scrollTo(i)}
                aria-label={`Screen ${i + 1} of ${phones.length}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "w-6 bg-violet shadow-[0_0_12px_var(--violet-glow)]"
                    : "w-2 bg-violet/25 hover:bg-violet/45"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="mt-3.5 flex justify-center gap-2.5">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous screen"
              className="flex size-9 items-center justify-center rounded-full border border-border-strong bg-violet/10 text-text transition hover:bg-violet/20"
            >
              <ChevronLeft className="size-3.5" strokeWidth={2} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next screen"
              className="flex size-9 items-center justify-center rounded-full border border-border-strong bg-violet/10 text-text transition hover:bg-violet/20"
            >
              <ChevronRight className="size-3.5" strokeWidth={2} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
