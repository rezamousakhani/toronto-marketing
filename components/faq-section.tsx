"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "While you may see some initial improvements within 3-4 months, significant results typically appear within 6-12 months. SEO is a long-term investment that compounds over time, delivering sustainable organic growth that continues to generate leads for years."
  },
  {
    question: "What's included in your digital marketing packages?",
    answer: "Our packages include SEO optimization, content creation, technical website improvements, local SEO setup, monthly reporting, and dedicated account management. We customize each package based on your business goals, industry, and budget."
  },
  {
    question: "Do you work with businesses outside of Toronto?",
    answer: "While we're based in Toronto and specialize in local SEO for GTA businesses, we work with companies across Canada and North America. Our strategies are adaptable to any location."
  },
  {
    question: "How do you measure success?",
    answer: "We track key performance indicators including organic traffic growth, keyword rankings, lead generation, conversion rates, and revenue attribution. You'll receive detailed monthly reports showing exactly how your investment is performing."
  },
  {
    question: "What makes your agency different from others?",
    answer: "We're data-driven and transparent. Every strategy we implement is backed by analytics and continuous testing. We focus on delivering measurable ROI, not vanity metrics. Our team has deep expertise in local SEO and serving Toronto/GTA businesses."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "We offer flexible engagement terms. While we recommend a minimum 6-month commitment for SEO to see meaningful results, we don't lock clients into long-term contracts. Our retention rate speaks to the value we deliver."
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Heading>Frequently Asked Questions</Heading>
          <Subheading className="mt-4 max-w-2xl mx-auto">
            Get answers to common questions about our digital marketing services
          </Subheading>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--brand)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
