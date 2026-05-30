"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand)] to-[var(--brand-light)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Heading className="text-white mb-6">
            Ready To Grow Your Business?
          </Heading>
          <Subheading className="text-white/90 text-lg md:text-xl mb-10">
            Book a free strategy session and discover opportunities your competitors are missing. No obligations, just actionable insights.
          </Subheading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[var(--brand-dark)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Phone className="w-5 h-5 mr-2" />
              Get My Free Strategy Call
            </Button>
          </div>
          <p className="mt-6 text-white/70 text-sm">
            Free 30-minute consultation • No commitment required
          </p>
        </div>
      </Container>
    </section>
  );
}
