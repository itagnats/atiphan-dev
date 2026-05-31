interface SectionHeadProps {
  num: string;
  label: string;
}

export function SectionHead({ num, label }: SectionHeadProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm tracking-widest text-violet">{num}</span>
      <span className="rounded-md border border-border-strong bg-(--pill-bg) px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-violet">
        {label}
      </span>
    </div>
  );
}
