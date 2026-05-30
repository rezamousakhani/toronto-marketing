"use client";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const services = [
  "SEO Services",
  "Local SEO",
  "Google Ads",
  "Web Design",
  "Content Marketing",
  "Social Media",
];

const company = [
  { title: "About Us", link: "/about" },
  { title: "Case Studies", link: "/case-studies" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const legal = [
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Terms of Service", link: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 leading-relaxed">
              Toronto&apos;s growth-focused digital marketing agency. We help local businesses generate more leads, rank higher on Google, and grow revenue through data-driven strategies.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[var(--accent)]" />
                <span>Toronto, Ontario, Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--accent)]" />
                <span>(416) 555-0123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--accent)]" />
                <span>hello@tmarketingagency.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-[var(--accent)] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.title}>
                  <Link href={item.link} className="hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--brand)] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--brand)] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--brand)] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--brand)] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
