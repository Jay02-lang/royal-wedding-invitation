import React from 'react';
import { WeddingConfig } from '../types/wedding';
import { useCountdown } from '../hooks/useCountdown';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { Calendar, Heart, MapPin, RotateCcw } from 'lucide-react';

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
    <section className="relative w-full max-w-3xl mx-auto px-4 py-8 md:py-16 text-center animate-fade-in select-none">
      
      {/* Heavy 350gsm Deckle-Edge Card Frame with Intricate Gold Foil Filigree */}
      <div className="relative rounded-3xl bg-[#FCFAF6] text-[#1A1615] p-6 sm:p-10 md:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border-2 border-[#D4AF37]/70">
        
        {/* Ornate Gold Foil Outer Border Inlay */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-dashed border-[#D4AF37]/50 pointer-events-none" />

        {/* Traditional Rajasthani Corner Arch Brackets */}
        <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#801B31] pointer-events-none" />
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#801B31] pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#801B31] pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#801B31] pointer-events-none" />

        {/* Top Sacred Shloka Header */}
        <div className="mb-6">
          <span className="font-serif text-sm md:text-base font-bold text-[#801B31] tracking-widest block">
            ॥ श्री गणेशाय नमः ॥
          </span>
          <p className="text-[11px] md:text-xs text-[#9A7B38] font-sans uppercase tracking-[0.2em] font-semibold mt-1">
            By The Grace Of God & Royal Ancestors
          </p>
        </div>

        {/* Couple Royal Monogram Medallion */}
        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#FFF5D6] to-[#F5E298] shadow-md my-2">
          <span className="font-serif text-xl md:text-2xl font-black text-[#801B31] tracking-wider">
            {weddingData.coupleMonogram}
          </span>
        </div>

        {/* Invitation Text Body */}
        <div className="max-w-xl mx-auto my-4 space-y-2">
          <p className="font-serif text-xs md:text-sm text-[#5D1022] italic leading-relaxed">
            {weddingData.invitationNote}
          </p>

          <div className="py-4">
            <span className="text-[11px] font-sans tracking-[0.25em] text-[#9A7B38] uppercase font-bold block mb-1">
              Celebrating The Holy Union Of
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#801B31] tracking-wide leading-tight">
              {weddingData.groom.name}
            </h1>
            <span className="font-serif text-lg md:text-xl text-[#D4AF37] my-1 block">
              &
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#801B31] tracking-wide leading-tight">
              {weddingData.bride.name}
            </h1>
          </div>

          <p className="font-sans text-xs md:text-sm text-[#4A0E1C] max-w-lg mx-auto font-medium">
            At the historic island palaces of Lake Pichola, Udaipur, Rajasthan
          </p>
        </div>

        {/* Auspicious Date Callout */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#801B31]/5 border border-[#801B31]/20 my-4 text-[#801B31]">
          <Calendar className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-serif text-xs md:text-sm font-bold tracking-wider">
            November 26 – 28, 2026
          </span>
        </div>

        {/* Countdown Timer with Gilded Metallic Frames */}
        <div className="my-6 pt-4 border-t border-[#D4AF37]/30">
          <span className="text-[10px] md:text-xs font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block mb-3">
            Countdown To The Auspicious Saat Phere
          </span>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#FFFDF9] to-[#F7F2E8] border border-[#D4AF37]/50 rounded-xl p-2.5 sm:p-3 shadow-sm flex flex-col items-center"
              >
                <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#801B31]">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-[#725A24] font-semibold mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary Interactive CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenRSVP}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#801B31] via-[#9E1B32] to-[#610F1E] text-[#FCFAF6] font-serif text-sm font-bold tracking-widest uppercase shadow-[0_6px_25px_rgba(128,27,49,0.35)] hover:shadow-[0_8px_30px_rgba(128,27,49,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 fill-current text-[#D4AF37]" />
            <span>RSVP Your Presence</span>
          </button>

          <a
            href={generateGoogleCalendarUrl(pherasEvent)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-transparent border-2 border-[#D4AF37] text-[#801B31] font-serif text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-[#D4AF37]/10 transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#801B31]" />
            <span>Add To Calendar</span>
          </a>
        </div>

        {/* Replay Envelope / Venue Direct Link */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[#9A7B38]">
          <a
            href="#venue"
            className="hover:text-[#801B31] underline decoration-[#D4AF37] transition-colors inline-flex items-center gap-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Palace Concierge</span>
          </a>

          {onReplayEnvelope && (
            <button
              type="button"
              onClick={onReplayEnvelope}
              className="hover:text-[#801B31] underline decoration-[#D4AF37] transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Re-Seal Envelope</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
