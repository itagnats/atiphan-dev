import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(cleanup);

/** jsdom implements neither of these; Navigation and the carousels rely on them. */
class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: readonly number[] = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
vi.stubGlobal("IntersectionObserver", IntersectionObserverStub);

if (!Element.prototype.scrollTo) {
  Element.prototype.scrollTo = function scrollTo() {};
}

/* jsdom has no matchMedia. PhoneVideo reads prefers-reduced-motion through it,
   so without this stub every test that renders the home page throws. Defaults
   to "motion is fine" — a test that wants the reduced-motion branch overrides
   this with its own vi.stubGlobal. */
if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

/* jsdom does not implement media playback: HTMLMediaElement.play() throws
   "Not implemented" and pollutes every run with errors. */
HTMLMediaElement.prototype.play = () => Promise.resolve();
HTMLMediaElement.prototype.pause = () => {};
