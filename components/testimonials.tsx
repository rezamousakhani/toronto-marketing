"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const testimonials = [
  {
    name: "Michael Thompson",
    company: "BuildRight Construction",
    role: "CEO",
    quote: "Toronto Marketing Agency transformed our online presence. We went from page 5 to #1 for construction companies Toronto and our leads tripled in just 6 months.",
    result: "+320% Leads",
  },
  {
    name: "Sarah Chen",
    company: "BrightSmile Dental",
    role: "Practice Manager",
    quote: "They helped us dominate local search for dental clinics in Toronto. Our patient bookings increased by 200% and the ROI has been incredible.",
    result: "+200% Bookings",
  },
  {
    name: "David Park",
    company: "ProFix Plumbing",
    role: "Owner",
    quote: "Best investment we made for our business. The team understands Toronto market and delivers real results. Our phone rings constantly now.",
    result: "+450% Calls",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-0">
            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {testimonials[active].quote}
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{testimonials[active].name}</div>
                  <div className="text-gray-500">{testimonials[active].role}, {testimonials[active].company}</div>
                </div>
              </div>
              <div className="inline-block px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold">
                {testimonials[active].result}
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
