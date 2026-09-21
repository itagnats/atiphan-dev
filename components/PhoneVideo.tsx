"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { featuredProject } from "@/data/portfolio";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/* Defined at module scope so their identity is stable — useSyncExternalStore
   resubscribes whenever `subscribe` changes, which for an inline arrow means
   every render. */
function subscribeToMotionPreference(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

/* There is no media query on the server, and assuming "reduced" there would
   render controls for everyone for one frame. */
const prefersReducedMotionOnServer = () => false;

/**
 * Screen recording of the live POCKITA app, playing inside the phone frame.
 *
 * Replaced PhoneCarousel here on 2026-09-20. A silent loop reads as a working
 * product in a way a stack of stills does not, and it removes the dots and
 * arrows a visitor had to notice before the screens told them anything.
 *
 * The clip is encoded at 540x1156 to match the frame's content box. That box is
 * 228x488, not 260x520: `.phone-frame` is border-box, so its 8px border and 8px
 * padding both come out of the declared size. Matching it means object-cover has
 * nothing to crop. If you ever change the frame's size, border or padding in
 * globals.css, re-encode the clip to the new ratio or the edges will clip.
 *
 * Two behaviours are deliberate:
 *
 *  - It pauses when scrolled out of view. Autoplay keeps a video decoding for
 *    as long as the tab is open, which on a laptop is a visible battery cost
 *    for a section nobody is looking at.
 *  - Under `prefers-reduced-motion` it does not autoplay and shows controls
 *    instead. Silent looping motion is exactly what that setting exists to
 *    suppress, and a visitor who set it would otherwise have no way to watch.
 */
export function PhoneVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { demo } = featuredProject;

  /* useSyncExternalStore rather than useState + useEffect: the media query is
     an external store, and setting state from an effect body triggers the
     cascading-render lint rule. This also keeps the server and first client
     render in agreement, so there is no hydration warning. */
  const reduceMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    prefersReducedMotion,
    prefersReducedMotionOnServer,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* A rejected play() is normal — a browser may refuse autoplay, or the
             element may be torn down mid-promise. Neither is worth surfacing. */
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-70 flex-col self-center md:mx-0">
      <div className="phone-frame relative overflow-hidden">
        <video
          ref={videoRef}
          /* `poster` covers the gap before the first frame decodes, so the
             frame is never an empty black rectangle on a slow connection. */
          poster={demo.poster}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reduceMotion}
          aria-label={demo.alt}
          className="size-full rounded-[22px] object-cover"
        >
          <source src={demo.src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
