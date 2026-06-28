import { personal } from "@/data/portfolio";

/**
 * 30-second OYW pitch video. Drop the file at `public/oyw-video.mp4`
 * (any extension works; just match the src below). Until then, the
 * player shows a broken-media state — replace with a real file to fix.
 */
const VIDEO_SRC = "/oyw-video.mp4";

export function VideoContent() {
  return (
    <article className="mt-10 md:mt-14">
      <div className="rounded-3xl border border-border-strong bg-bg-card p-5 shadow-[0_0_80px_-30px_var(--violet-glow)] md:p-8">
        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-border-soft bg-[#07040f] md:max-w-sm">
          <video
            className="aspect-[9/16] w-full"
            controls
            preload="metadata"
            playsInline
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            Your browser doesn&apos;t support inline video playback. Use the
            Download button above to save the file.
          </video>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-dim">
            30-second pitch · {personal.fullName}
          </div>
        </div>
      </div>
    </article>
  );
}

export { VIDEO_SRC };
