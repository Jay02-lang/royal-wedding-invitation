import React, { useState, useEffect } from 'react';
import { Calendar, Heart, MapPin, Menu, X } from 'lucide-react';

export interface NavigationBarProps {
  onOpenRSVP: () => void;
  coupleMonogram?: string;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  onOpenRSVP,
  coupleMonogram = 'A & A'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Royal Story', href: '#story' },
    { label: 'Itinerary', href: '#itinerary' },
    { label: 'Concierge & Map', href: '#venue' },
    { label: 'Blessings', href: '#blessings' }
  ];

  return (
    <>
      {/* Top Desktop & Tablet Sticky Navigation */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#120407]/90 backdrop-blur-md border-b border-[#D4AF37]/40 shadow-lg py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          {/* Couple Royal Monogram Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#F7E5A9] group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full border border-[#D4AF37] bg-gradient-to-br from-[#801B31] to-[#4A0E1C] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-serif text-xs font-bold text-[#F7E5A9] tracking-wider">
                {coupleMonogram}
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <span className="font-serif text-sm font-bold tracking-wider block text-[#F7E5A9]">
                Aarav & Ananya
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-[#D4AF37]/80 block">
                Udaipur Royal Wedding
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-serif text-xs uppercase tracking-widest text-[#FCFAF6]/90 hover:text-[#D4AF37] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop RSVP CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenRSVP}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#801B31] to-[#9E1B32] text-[#FCFAF6] font-serif text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/40 shadow-md hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-[#D4AF37]" />
              <span>RSVP</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 text-[#F7E5A9] hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#120407]/95 backdrop-blur-xl border-b border-[#D4AF37]/40 px-6 py-6 space-y-4 animate-fade-in text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-sm uppercase tracking-widest text-[#F7E5A9] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRSVP();
                }}
                className="w-full py-3 rounded-full bg-[#801B31] text-[#FCFAF6] font-serif text-xs font-bold uppercase tracking-widest"
              >
                RSVP Your Presence
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating Mobile Bottom Action Bar */}
      <div
        className={`sm:hidden fixed bottom-3 inset-x-3 z-40 transition-transform duration-300 pb-[env(safe-area-inset-bottom)] ${
          isScrolled ? 'translate-y-0' : 'translate-y-24'
        }`}
      >
        <div className="rounded-full bg-[#1A050B]/95 backdrop-blur-lg border border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] p-1.5 flex items-center justify-between">
          <a
            href="#itinerary"
            className="flex-1 py-2 text-center font-serif text-[11px] font-bold tracking-wider text-[#F7E5A9] flex items-center justify-center gap-1"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Itinerary</span>
          </a>

          <div className="w-px h-5 bg-[#D4AF37]/30" />

          <a
            href="#venue"
            className="flex-1 py-2 text-center font-serif text-[11px] font-bold tracking-wider text-[#F7E5A9] flex items-center justify-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Map</span>
          </a>

          <div className="w-px h-5 bg-[#D4AF37]/30" />

          <button
            type="button"
            onClick={onOpenRSVP}
            className="flex-1 py-2 px-3 rounded-full bg-[#801B31] text-[#FCFAF6] font-serif text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-md"
          >
            <Heart className="w-3 h-3 fill-current text-[#D4AF37]" />
            <span>RSVP</span>
          </button>
        </div>
      </div>
    </>
  );
};
