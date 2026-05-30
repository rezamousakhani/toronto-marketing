"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const clientLogos = [
  "Toronto Construction Co.",
  "GTA Dental Group",
  "Maple Leaf Legal",
  "HomeFix Services",
  "Urban Realty Partners",
  "North York Medical",
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen -mt-24 flex items-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/90">Toronto&apos;s #1 Rated Marketing Agency</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6 animate-fade-in-up delay-100">
            Toronto&apos;s Growth-Focused{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Marketing Agency
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-10 animate-fade-in-up delay-200">
            Generate more qualified leads, rank higher on Google, and grow revenue with data-driven SEO, PPC, and web design strategies built for Toronto businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
            <Button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1">
              Book Free Strategy Call
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg rounded-full font-semibold border border-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
              View Case Studies
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-400">
            {[
              { value: "$24M+", label: "Revenue Generated" },
              { value: "500+", label: "Clients Served" },
              { value: "340%", label: "Avg Traffic Increase" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="animate-fade-in-up delay-500">
            <p className="text-sm text-white/50 uppercase tracking-wider mb-4">Trusted by Growing Toronto Businesses</p>
            <div className="flex flex-wrap gap-6">
              {clientLogos.map((logo, i) => (
                <div key={i} className="text-white/40 font-semibold text-sm hover:text-white/70 transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
