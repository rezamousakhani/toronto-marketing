"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const trustBadges = [
  { icon: "🏆", label: "Google Partner" },
  { icon: "⭐", label: "4.9★ Google Reviews" },
  { icon: "📈", label: "15+ Years Experience" },
  { icon: "🔒", label: "SOC 2 Certified" },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Growing Toronto Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their online presence with our data-driven strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, i) => (
            <Card
              key={i}
              className="p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <div className="font-semibold text-gray-900">{badge.label}</div>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-gray-500">
          {["Google", "Meta Business", "Microsoft Partner", "HubSpot Partner"].map((partner, i) => (
            <div key={i} className="font-semibold text-lg hover:text-gray-700 transition-colors">
              {partner}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
