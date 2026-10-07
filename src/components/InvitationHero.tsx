import React from 'react';
import { WeddingConfig } from '../types/wedding';
import { useCountdown } from '../hooks/useCountdown';
import { generateGoogleCalendarUrl } from '../utils/calendar';
import { LordGanesh } from './LordGanesh';
import { Calendar, Heart, MapPin, RotateCcw, Sparkles } from 'lucide-react';

export interface InvitationHeroProps {
  weddingData: WeddingConfig;
  onOpenRSVP: () => void;
  onReplayEnvelope?: () => void;
}

export const InvitationHero: React.FC<InvitationHeroProps> = ({
  weddingData,
  onOpenRSVP,
  onReplayEnvelope
}) => {
  const countdown = useCountdown(weddingData.mainWeddingDate);
  const pherasEvent = weddingData.events.find(e => e.id === 'pheras') || weddingData.events[0];

  return (
    <section className="relative min-h-[95vh] w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center select-none">
      
      {/* Full-Screen Semi-Transparent Glass Frame (Letting Background Video & Petals Show Through) */}
      <div className="relative w-full max-w-6xl mx-auto rounded-3xl bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 p-6 sm:p-12 md:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
        
        {/* Ornate Gold Outer Filigree Trim */}
        <div className="absolute inset-2 sm:inset-4 rounded-2xl border border-dashed border-[#D4AF37]/40 pointer-events-none" />
        
        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />

        {/* Sacred Lord Ganesha Emblem & Invocations */}
        <div className="flex flex-col items-center mb-6">
          <LordGanesh size={96} className="w-24 h-24 text-[#D4AF37] drop-shadow-[0_4px_16px_rgba(212,175,55,0.6)] mb-3" />
          <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#F7E5A9] tracking-widest block drop-shadow-md">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <span className="text-xs md:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold mt-2">
            By The Divine Grace Of God & Royal Ancestors
          </span>
        </div>

        {/* Grand Invitation Proclamation */}
        <div className="max-w-4xl mx-auto my-6 space-y-4">
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#FCFAF6]/90 italic max-w-2xl mx-auto leading-relaxed">
            {weddingData.invitationNote}
          </p>

          {/* Enormous Royal Headings for Couple */}
          <div className="py-6 sm:py-10">
            <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold block mb-3">
              Cordially Request The Honour Of Your Presence At The Marriage Of
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#FFF1C5] tracking-wide leading-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] gold-foil-text">
              {weddingData.groom.name}
            </h1>

            <div className="flex items-center justify-center gap-4 my-2 sm:my-4">
              <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#D4AF37] font-light">
                &
              </span>
              <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#FFF1C5] tracking-wide leading-none drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] gold-foil-text">
              {weddingData.bride.name}
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm md:text-base text-[#F7E5A9] font-serif">
            <span className="font-bold tracking-wider">The Historic Palaces of Lake Pichola</span>
            <span className="hidden sm:inline text-[#D4AF37]">•</span>
            <span>Udaipur, Rajasthan</span>
          </div>
        </div>

        {/* Auspicious Date Callout */}
        <div className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#801B31]/80 border-2 border-[#D4AF37] my-6 text-[#FFF1C5] shadow-lg">
          <Calendar className="w-5 h-5 text-[#D4AF37]" />
          <span className="font-serif text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase">
            November 26 – 28, 2026
          </span>
        </div>

        {/* Countdown Timer with Gilded Frosted Frames */}
        <div className="my-8 pt-6 border-t border-[#D4AF37]/30 max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-4">
            Countdown To The Auspicious Saat Phere
          </span>

          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-black/60 backdrop-blur-md border border-[#D4AF37]/60 rounded-2xl p-3 sm:p-5 shadow-lg flex flex-col items-center"
              >
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-[#FFF1C5] drop-shadow-md">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Interactive Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenRSVP}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-sm md:text-base font-bold tracking-widest uppercase shadow-[0_6px_30px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current text-[#801B31]" />
            <span>RSVP Your Presence</span>
          </button>

          <a
            href={generateGoogleCalendarUrl(pherasEvent)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/60 border-2 border-[#D4AF37] text-[#F7E5A9] font-serif text-sm font-bold tracking-widest uppercase hover:bg-[#D4AF37]/20 transition-all cursor-pointer flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Add To Calendar</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#D4AF37]">
          <a
            href="#venue"
            className="hover:text-white underline decoration-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4" />
            <span>Palace Concierge</span>
          </a>

          {onReplayEnvelope && (
            <button
              type="button"
              onClick={onReplayEnvelope}
              className="hover:text-white underline decoration-[#D4AF37] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Re-Seal Envelope</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
