import { SectionHead } from "@/components/SectionHead";
import { LeadershipTabs } from "@/components/LeadershipTabs";
import { leadership } from "@/data/portfolio";

export function Leadership() {
  return (
    <section id="leadership" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-16 md:py-16">
        <SectionHead num="03" label="Leadership / Volunteer" />
        <LeadershipTabs events={leadership} />
      </div>
    </section>
  );
}
