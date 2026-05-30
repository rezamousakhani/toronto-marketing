"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const navItems = [
  { title: "Services", link: "/#services" },
  { title: "Results", link: "/#results" },
  { title: "Process", link: "/#process" },
  { title: "Industries", link: "/#industries" },
  { title: "FAQ", link: "/#faq" },
];

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <IoIosClose size={28} /> : <IoIosMenu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0a1628] transform transition-transform duration-300 lg:hidden pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <div className="mt-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-semibold rounded-lg">
              <Link href="/contact">Book Free Strategy Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
