"use client";

import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "🔍",
    title: "SEO Services",
    description: "Dominate search results and drive organic traffic that converts into paying customers.",
    features: ["Technical SEO", "On-Page Optimization", "Link Building"],
  },
  {
    icon: "📍",
    title: "Local SEO",
    description: "Get found by customers in Toronto and GTA searching for your services.",
    features: ["Google Business Optimization", "Local Citations", "Review Management"],
  },
  {
    icon: "🎯",
    title: "Google Ads",
    description: "Instant visibility with targeted PPC campaigns that maximize your ROI.",
    features: ["Search Ads", "Display Network", "Remarketing"],
  },
  {
    icon: "🎨",
    title: "Web Design",
    description: "High-converting websites designed to turn visitors into leads and customers.",
    features: ["Responsive Design", "Conversion Optimization", "SEO Integration"],
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    description: "Engaging content that establishes authority and attracts your ideal customers.",
    features: ["Blog Writing", "Video Content", "Infographics"],
  },
  {
    icon: "📱",
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with customers on the platforms they use.",
    features: ["Platform Strategy", "Content Creation", "Community Management"],
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Digital Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive strategies designed to grow your business and dominate your market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              className="p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gray-900 hover:bg-blue-600 text-white rounded-full py-6 transition-all duration-300 group-hover:bg-blue-600">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
