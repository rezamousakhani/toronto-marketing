"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const caseStudies = [
  {
    industry: "Construction",
    client: "BuildRight Construction",
    metrics: [
      { label: "Traffic Increase", value: "+420%" },
      { label: "Monthly Leads", value: "180+" },
      { label: "Revenue Growth", value: "$1.2M" },
    ],
  },
  {
    industry: "Dental",
    client: "BrightSmile Dental",
    metrics: [
      { label: "Local Rankings", value: "#1" },
      { label: "New Patients", value: "85/mo" },
      { label: "ROI", value: "650%" },
    ],
  },
  {
    industry: "Home Services",
    client: "ProFix Plumbing",
    metrics: [
      { label: "Organic Traffic", value: "+280%" },
      { label: "Call Inquiries", value: "200+" },
      { label: "Ad Spend ROI", value: "8.5x" },
    ],
  },
];

export function Results() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-blue-950">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Real Results. Real Business Growth.
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See how we&apos;ve helped Toronto businesses achieve extraordinary growth through strategic digital marketing.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "$24M+", label: "Client Revenue Generated" },
            { value: "500+", label: "Businesses Helped" },
            { value: "340%", label: "Average Traffic Increase" },
            { value: "89%", label: "Client Retention Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <Card
              key={i}
              className="p-8 bg-white rounded-3xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                {study.industry}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
              <div className="space-y-4">
                {study.metrics.map((metric, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <span className="text-gray-500">{metric.label}</span>
                    <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                View Full Case Study →
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
