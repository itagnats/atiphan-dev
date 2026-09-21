import { SectionHead } from "@/components/SectionHead";
import { ExperimentGrid } from "@/components/ExperimentGrid";
import { experiments } from "@/data/portfolio";

export function Experiments() {
  return (
    <section id="experiments" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="03" label="Interactive Experiments" />

        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-[26px] font-bold leading-none tracking-[-0.03em] md:text-[40px]">
            A Monthly Series, All Live
          </h3>
        </div>

        <ExperimentGrid experiments={experiments} />
      </div>
    </section>
  );
}
