import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Results />
      <Industries />
      <Testimonials />
      <Blog />
      <CTA />
      <FAQ />
    </>
  );
}
