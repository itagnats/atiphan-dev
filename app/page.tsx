import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { Experiments } from "@/components/sections/Experiments";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      {/* Experiments sits directly after Work. Each section's SectionHead number
          and the order of `navItems` both encode this order, so moving a section
          means changing all three — app/__tests__/page-structure catches it. */}
      <Experiments />
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
      <Navigation />
    </>
  );
}
