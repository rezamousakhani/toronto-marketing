"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Grow Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Book a free strategy session and discover opportunities your competitors are missing.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-gray-100 px-10 py-6 text-xl rounded-full font-bold shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:-translate-y-1">
            Get My Free Strategy Call
          </Button>
          <p className="text-white/60 mt-6 text-sm">
            No obligation. 100% free. 30-minute consultation.
          </p>
        </div>
      </Container>
    </section>
  );
}
