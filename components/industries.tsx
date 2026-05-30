"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const industries = [
  { name: "Construction", icon: "🏗️", description: "Generate more project leads" },
  { name: "Dental", icon: "🦷", description: "Fill your appointment books" },
  { name: "Legal", icon: "⚖️", description: "Attract more cases" },
  { name: "Real Estate", icon: "🏠", description: "Drive property inquiries" },
  { name: "Home Services", icon: "🔧", description: "Book more jobs" },
  { name: "Healthcare", icon: "🏥", description: "Grow patient volume" },
  { name: "Professional Services", icon: "💼", description: "Generate qualified leads" },
];

export function Industries() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Industries</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized strategies for Toronto businesses across every industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, i) => (
            <Card
              key={i}
              className="p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer border-0"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>
              <p className="text-sm text-gray-500">{industry.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
