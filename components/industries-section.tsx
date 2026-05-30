"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { Building2, Stethoscope, Scale, Home, Heart, Briefcase } from "lucide-react";

const industries = [
  { name: "Construction", icon: Building2, count: "47+ Clients" },
  { name: "Dental", icon: Stethoscope, count: "32+ Clients" },
  { name: "Legal", icon: Scale, count: "28+ Clients" },
  { name: "Home Services", icon: Home, count: "63+ Clients" },
  { name: "Healthcare", icon: Heart, count: "19+ Clients" },
  { name: "Professional Services", icon: Briefcase, count: "41+ Clients" },
];

export function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-[var(--surface)]">
      <Container>
        <div className="text-center mb-16">
          <Heading>Industries We Serve</Heading>
          <Subheading className="mt-4 max-w-2xl mx-auto">
            Specialized digital marketing strategies tailored for Toronto and GTA businesses across various industries
          </Subheading>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--brand)]/10 flex items-center justify-center group-hover:bg-[var(--brand)]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-gray-500">{industry.count}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
