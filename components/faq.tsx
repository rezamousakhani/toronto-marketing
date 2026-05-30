"use client";

import { Container } from "@/components/container";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "While PPC campaigns can generate leads within days, SEO typically shows significant results in 3-6 months. Most clients see meaningful improvements in traffic and rankings within the first 90 days.",
  },
  {
    q: "What's included in your reporting?",
    a: "You'll receive detailed monthly reports showing keyword rankings, traffic growth, lead generation, and ROI. We use real-time dashboards so you can track performance anytime.",
  },
  {
    q: "What's your minimum budget?",
    a: "Our campaigns start at $1,500/month for small businesses. This includes comprehensive SEO, PPC management, and ongoing optimization. We'll recommend the best budget for your goals.",
  },
  {
    q: "Do you work with businesses outside Toronto?",
    a: "While we specialize in Toronto and GTA, we work with businesses across Canada and North America. Our local SEO expertise translates well to any market.",
  },
  {
    q: "How do you measure success?",
    a: "We track metrics that matter: leads generated, phone calls, form submissions, and ultimately revenue. You'll see exactly how our work impacts your bottom line.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <span className={`text-blue-600 text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
