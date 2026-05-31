"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { astronautMessages, personal } from "@/data/portfolio";

interface AstronautDialogProps {
  open: boolean;
  onClose: () => void;
}

export function AstronautDialog({ open, onClose }: AstronautDialogProps) {
  // Pick a random message every time the dialog opens
  const message = useMemo(() => {
    if (!open) return "";
    return astronautMessages[Math.floor(Math.random() * astronautMessages.length)];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Typewriter effect
  useEffect(() => {
    if (!open || !message) return;
    setDisplayed("");
    setIsTyping(true);
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(message.slice(0, i));
      if (i < message.length) {
        timerRef.current = window.setTimeout(tick, 28);
      } else {
        setIsTyping(false);
      }
    };
    timerRef.current = window.setTimeout(tick, 200);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [open, message]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Click anywhere on the dialog: if still typing → complete instantly; if done → close
  const handleDialogClick = useCallback(() => {
    if (isTyping) {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setDisplayed(message);
      setIsTyping(false);
    } else {
      onClose();
    }
  }, [isTyping, message, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-[rgba(10,6,18,0.78)] p-4 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleDialogClick}
            className="relative flex w-full max-w-160 cursor-pointer flex-col overflow-hidden rounded-3xl border border-border-strong bg-[rgba(15,8,28,0.96)] md:flex-row"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close dialog"
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full border border-border-soft bg-[rgba(26,15,46,0.7)] text-text-muted transition hover:border-border-strong hover:text-text"
            >
              <X className="size-4" strokeWidth={2} />
            </button>

            {/* Astronaut artwork */}
            <div className="relative h-45 w-full shrink-0 overflow-hidden bg-[#1a0f2e] md:h-auto md:w-60">
              <Image
                src="/images/avatar.webp"
                alt="Astronaut"
                fill
                sizes="(max-width: 768px) 100vw, 240px"
                className="object-cover"
              />
              {/* Right-edge fade into dialog box (desktop) / bottom on mobile */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent to-[rgba(15,8,28,0.7)] md:bg-linear-to-r md:from-transparent md:via-transparent md:to-[rgba(15,8,28,0.5)]"
              />
            </div>

            {/* Dialog text panel */}
            <div className="flex flex-1 flex-col justify-between p-6 pt-7 md:p-8">
              <div>
                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-violet">
                  <span className="size-1.5 rounded-full bg-violet shadow-[0_0_8px_var(--violet)]" />
                  {personal.name}
                </div>
                <p className="min-h-28 font-display text-[16px] leading-normal text-text md:min-h-31 md:text-[18px]">
                  {displayed}
                  {isTyping && (
                    <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] -translate-y-px animate-pulse bg-violet align-middle" />
                  )}
                </p>
              </div>

              {/* Pokemon-style continue indicator */}
              <div className="mt-5 flex items-center justify-end">
                {isTyping ? (
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-dim">
                    Tap to skip…
                  </span>
                ) : (
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-violet"
                  >
                    Tap to close ▼
                  </motion.span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
