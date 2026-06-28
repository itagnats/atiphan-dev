"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  src?: string;
  caption: string;
}

interface PhotoCarouselProps {
  photos: ReadonlyArray<Photo>;
}

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      if (idx !== active && idx >= 0 && idx < photos.length) {
        setActive(idx);
      }
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [active, photos.length]);

  const scrollTo = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: idx * track.clientWidth, behavior: "smooth" });
  };

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex aspect-4/3 snap-x snap-mandatory overflow-x-auto rounded-2xl border border-border-soft bg-bg-card"
      >
        {photos.map((p, i) => (
          <figure
            key={i}
            className="relative w-full shrink-0 snap-center"
          >
            {p.src ? (
              <Image
                src={p.src}
                alt={p.caption}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden
                className="absolute inset-0 flex items-end justify-start p-5"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(168, 85, 247, 0.32), transparent 60%), linear-gradient(135deg, #2a1147, #1a0f2e)",
                }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                  {p.caption}
                </span>
              </div>
            )}
          </figure>
        ))}
      </div>

      {/* Arrows — desktop only */}
      {photos.length > 1 && (
        <>
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-[rgba(15,8,28,0.85)] text-text backdrop-blur-md transition hover:bg-violet/20 md:flex"
          >
            <ChevronLeft className="size-4" strokeWidth={2} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 hidden size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border-strong bg-[rgba(15,8,28,0.85)] text-text backdrop-blur-md transition hover:bg-violet/20 md:flex"
          >
            <ChevronRight className="size-4" strokeWidth={2} />
          </button>
        </>
      )}

      {/* Dots */}
      {photos.length > 1 && (
        <div className="mt-3.5 flex justify-center gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Photo ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-violet shadow-[0_0_12px_var(--violet-glow)]"
                  : "w-2 bg-violet/25 hover:bg-violet/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
