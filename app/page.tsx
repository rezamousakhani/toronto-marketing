import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/trust-section";
import { Services } from "@/components/services";
import { Results } from "@/components/results";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { Industries } from "@/components/industries";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <Services />
      <Results />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Industries />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
