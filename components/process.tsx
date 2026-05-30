"use client";

import { Container } from "@/components/container";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We analyze your current marketing, identify opportunities, and understand your business goals.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Custom marketing strategy built for your industry, budget, and growth objectives.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Execute campaigns with precision, tracking every click, call, and customer.",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    description: "Continuous improvement through A/B testing, analysis, and iterative refinement.",
  },
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            How We Drive Your Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven four-step process that delivers consistent, measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-xl">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
