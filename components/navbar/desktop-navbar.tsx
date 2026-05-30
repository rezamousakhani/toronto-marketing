"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Services", link: "/#services" },
  { title: "Results", link: "/#results" },
  { title: "Process", link: "/#process" },
  { title: "Industries", link: "/#industries" },
  { title: "FAQ", link: "/#faq" },
];

export function DesktopNavbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10 shadow-xl"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25">
              <Link href="/contact">Book Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
