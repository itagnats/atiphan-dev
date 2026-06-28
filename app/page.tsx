import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
// OYW: Work import kept to allow easy flip-back of the disabled <Work /> below
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Work /> — hidden for OYW application; flip back on after */}
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
      <Navigation />
    </>
  );
}
