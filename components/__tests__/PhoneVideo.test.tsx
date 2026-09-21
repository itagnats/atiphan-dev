import { describe, expect, it, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { PhoneVideo } from "@/components/PhoneVideo";
import { featuredProject } from "@/data/portfolio";

/* Swaps window.matchMedia for one test and puts it back afterwards.
   Deliberately NOT vi.stubGlobal + vi.unstubAllGlobals: unstubAllGlobals also
   drops the IntersectionObserver stub that vitest.setup.ts installs, and every
   later test in this file then dies inside PhoneVideo's observer effect. */
const realMatchMedia = window.matchMedia;

function stubReducedMotion(matches: boolean) {
  window.matchMedia = ((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

afterEach(() => {
  window.matchMedia = realMatchMedia;
});

describe("PhoneVideo", () => {
  it("plays silently and on a loop, inline on mobile", () => {
    render(<PhoneVideo />);
    const video = screen.getByLabelText(featuredProject.demo.alt) as HTMLVideoElement;

    // Without muted, a browser blocks autoplay outright; without playsInline,
    // iOS Safari takes the video fullscreen the moment it starts.
    expect(video.muted).toBe(true);
    expect(video.loop).toBe(true);
    expect(video).toHaveAttribute("playsinline");
  });

  it("names the recording for screen readers", () => {
    render(<PhoneVideo />);
    // A <video> with no label is announced as just "video" — useless when the
    // clip is the only thing describing the product.
    expect(screen.getByLabelText(featuredProject.demo.alt)).toBeInTheDocument();
  });

  it("shows a poster so the frame is never an empty black rectangle", () => {
    render(<PhoneVideo />);
    const video = screen.getByLabelText(featuredProject.demo.alt);
    expect(video).toHaveAttribute("poster", featuredProject.demo.poster);
  });

  it("does not autoplay, and offers controls, when the visitor asked for less motion", () => {
    stubReducedMotion(true);
    render(<PhoneVideo />);
    const video = screen.getByLabelText(featuredProject.demo.alt) as HTMLVideoElement;

    // Silent looping motion is precisely what prefers-reduced-motion exists to
    // suppress — but the visitor still needs a way to watch it.
    expect(video).toHaveAttribute("controls");
    expect(video.autoplay).toBe(false);
  });

  it("stays uncluttered for everyone else", () => {
    stubReducedMotion(false);
    render(<PhoneVideo />);
    expect(screen.getByLabelText(featuredProject.demo.alt)).not.toHaveAttribute("controls");
  });
});
