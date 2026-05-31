"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search, Bell, Bookmark } from "lucide-react";
import { featuredProject } from "@/data/portfolio";

export function PhoneCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const phones = featuredProject.phones;

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
            key={i}
            className="phone-frame flex shrink-0 snap-center flex-col overflow-hidden"
          >
            <PhoneStatusBar />
            {phone.type === "home" ? (
              <HomePhoneContent />
            ) : (
              <DetailPhoneContent />
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {phones.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Screen ${i + 1}`}
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
          aria-label="Previous"
          className="flex size-9 items-center justify-center rounded-full border border-border-strong bg-violet/10 text-text transition hover:bg-violet/20"
        >
          <ChevronLeft className="size-3.5" strokeWidth={2} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="flex size-9 items-center justify-center rounded-full border border-border-strong bg-violet/10 text-text transition hover:bg-violet/20"
        >
          <ChevronRight className="size-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className="mb-3.5 flex items-center justify-between px-1 font-display text-[10px] font-semibold">
      <span>9:41</span>
      <div className="flex gap-1 opacity-80">
        <svg width="11" height="9" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="9" width="2" height="3" rx="0.5" />
          <rect x="4" y="6" width="2" height="6" rx="0.5" />
          <rect x="8" y="3" width="2" height="9" rx="0.5" />
          <rect x="12" y="0" width="2" height="12" rx="0.5" />
        </svg>
        <svg width="12" height="9" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 5a12 12 0 0114 0M4.5 8a8 8 0 019 0M7 11a4 4 0 014 0" />
        </svg>
        <svg width="16" height="9" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="2" width="20" height="8" rx="2" />
          <rect x="3" y="4" width="14" height="4" fill="currentColor" />
          <rect x="22" y="4.5" width="1.5" height="3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function HomePhoneContent() {
  const phone = featuredProject.phones[0];
  if (phone.type !== "home") return null;
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="font-display text-sm font-bold tracking-tight">
          POCK<span className="text-violet">ITA</span>
        </div>
        <div className="flex gap-2 text-text-muted">
          <Search className="size-3.5" strokeWidth={2} />
          <Bell className="size-3.5" strokeWidth={2} />
        </div>
      </div>
      <h5 className="mb-1 font-display text-[18px] font-semibold leading-tight">
        {phone.headline.line1} <span className="text-violet">{phone.headline.line2}</span>
      </h5>
      <p className="mb-3.5 whitespace-pre-line text-[10.5px] leading-snug text-text-muted">
        {phone.sub}
      </p>
      <div className="mb-3.5 flex items-center gap-1.5 rounded-full border border-border-soft bg-violet/6 px-2.5 py-1.5 text-[10px] text-text-dim">
        <Search className="size-2.75 shrink-0" strokeWidth={2} />
        Search…
      </div>
      <div className="mb-2.5 text-[11px] font-medium">Featured for you</div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "Item one", rating: "★★★★★" },
          { name: "Item two", rating: "★★★★☆" },
        ].map((p) => (
          <div key={p.name} className="overflow-hidden rounded-[10px] border border-border-soft bg-bg-card-2">
            <div
              className="h-19 border-b border-border-soft"
              style={{
                background:
                  "radial-gradient(circle at 40% 50%, rgba(168, 85, 247, 0.4), transparent 60%), linear-gradient(135deg, #2a1147, #1a0f2e)",
              }}
            />
            <div className="px-2 pb-2 pt-1.5">
              <div className="mb-0.5 text-[9.5px] font-medium leading-tight">{p.name}</div>
              <div className="mb-0.5 text-[9.5px] font-semibold text-violet">$ 00.00</div>
              <div className="text-[8px] tracking-widest text-[#f5c518]">{p.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function DetailPhoneContent() {
  const phone = featuredProject.phones[1];
  if (phone.type !== "detail") return null;
  return (
    <>
      <div className="mb-3.5 flex items-center justify-between">
        <button
          aria-label="Back"
          className="flex size-6.5 items-center justify-center rounded-full border border-border-soft bg-violet/10 text-text"
        >
          <ChevronLeft className="size-3" strokeWidth={2} />
        </button>
        <button
          aria-label="Save"
          className="flex size-6.5 items-center justify-center rounded-full border border-border-soft bg-violet/10 text-text"
        >
          <Bookmark className="size-3" strokeWidth={2} />
        </button>
      </div>
      <div
        className="mb-3.5 h-45 shrink-0 rounded-[14px] border border-border-soft"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.5), transparent 60%), linear-gradient(135deg, #2a1147, #1a0f2e)",
        }}
      />
      <div className="mb-1.5 font-display text-[15px] font-semibold leading-tight">
        {phone.productName}
      </div>
      <div className="mb-3.5 flex items-center gap-2.5">
        <span className="font-display text-[15px] font-bold text-violet">{phone.price}</span>
        <span className="text-[10px] text-text-muted">
          <span className="mr-0.5 text-[#f5c518]">★</span>
          {phone.rating}
        </span>
      </div>
      <div className="mb-auto flex flex-col gap-1.5">
        <div className="h-1.5 rounded-[3px] bg-violet/15" />
        <div className="h-1.5 w-[70%] rounded-[3px] bg-violet/15" />
        <div className="h-1.5 rounded-[3px] bg-violet/15" />
        <div className="h-1.5 w-1/2 rounded-[3px] bg-violet/15" />
      </div>
      <button className="mt-3 rounded-full bg-violet-2 px-2.5 py-2.5 font-display text-[10px] font-semibold uppercase tracking-widest text-white">
        Get item
      </button>
    </>
  );
}
