"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: "📊",
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics and real data. We don't guess — we test, measure, and optimize.",
  },
  {
    icon: "🔍",
    title: "Transparent Reporting",
    description: "Know exactly where your budget goes with detailed monthly reports and real-time dashboards.",
  },
  {
    icon: "📍",
    title: "Local Toronto Expertise",
    description: "Strategies built specifically for Toronto and GTA businesses by marketers who know the market.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[var(--surface)]">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            The Toronto Marketing Agency Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another agency. We're your growth partners committed to real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <Card
              key={i}
              className="p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border-0"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
