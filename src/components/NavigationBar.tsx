import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GaneshaLogo } from "./GaneshaLogo";

export interface NavigationBarProps {
  coupleMonogram?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Couple", href: "#story" },
    { label: "Itinerary", href: "#itinerary" },
    { label: "Destination", href: "#venue" },
    { label: "Blessings", href: "#blessings" },
  ];

  return (
    <>
      {/* Top Desktop & Tablet Sticky Navigation */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md border-b border-[#1A1615]/10 shadow-sm py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Ganesha Logo & Event Name */}
          <a
            href="#"
            className="flex items-center gap-3 text-[#1A1615] group cursor-pointer"
          >
            <GaneshaLogo className="text-[#6B4C0A] group-hover:scale-105 transition-transform" />
            <div className="hidden sm:block text-left">
              <span className="font-serif text-sm font-semibold tracking-wider block text-[#1A1615]">
                Aarav & Ananya
              </span>
              <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#1A1615]/60 block">
                Udaipur Wedding
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.2em] text-[#1A1615]/70 hover:text-[#1A1615] font-semibold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action (Mobile Menu Toggle) */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1A1615] hover:text-[#6B4C0A] transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-[#6B4C0A]/5 pointer-events-none" />

        <div className="relative h-full flex flex-col p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#1A1615] hover:text-[#6B4C0A] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            <GaneshaLogo className="text-[#6B4C0A] mb-6" />

            <nav className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl tracking-widest uppercase text-[#1A1615] hover:text-[#6B4C0A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 text-center">
              <span className="font-serif text-sm font-semibold tracking-wider block text-[#1A1615]">
                Aarav & Ananya
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#1A1615]/60 mt-2 block">
                Udaipur Wedding
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
