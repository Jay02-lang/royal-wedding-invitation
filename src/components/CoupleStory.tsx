import React from 'react';
import { PersonInfo } from '../types/wedding';
import { Crown, Sparkles } from 'lucide-react';

export interface CoupleStoryProps {
  groom: PersonInfo;
  bride: PersonInfo;
  shloka: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
  };
}

export const CoupleStory: React.FC<CoupleStoryProps> = ({
  groom,
  bride,
  shloka
}) => {
  return (
    <section id="story" className="relative w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
      
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
          Sacred Lineage & Royal Union
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-[#FCFAF6] mt-2 font-bold tracking-wide">
          Two Hearts, Two Dynasties
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      {/* Sacred Vedic Invocations Banner */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#4A0E1C]/90 to-[#2A060F]/90 border border-[#D4AF37]/50 p-6 md:p-8 text-center max-w-3xl mx-auto mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <div className="flex items-center justify-center gap-2 text-[#D4AF37] mb-3">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-widest font-sans font-bold">Vedic Mangalacharan</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <p className="font-serif text-lg md:text-2xl text-[#F7E5A9] font-bold leading-relaxed whitespace-pre-line tracking-wide">
          {shloka.sanskrit}
        </p>

        <p className="font-sans text-xs md:text-sm text-[#FCFAF6]/80 italic mt-3 whitespace-pre-line tracking-wider">
          {shloka.transliteration}
        </p>

        <div className="mt-4 pt-4 border-t border-[#D4AF37]/20">
          <p className="font-sans text-xs text-[#F7E5A9]/70 leading-relaxed max-w-xl mx-auto">
            &ldquo;{shloka.meaning}&rdquo;
          </p>
        </div>
      </div>

      {/* Dual Royal Portrait Cards (Groom & Bride) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* The Groom Card */}
        <div className="relative rounded-3xl bg-[#FCFAF6] text-[#1A1615] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#D4AF37]/60 flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all">
          
          {/* Rajasthani Arch Frame (Jharokha Style) */}
          <div className="relative w-48 h-60 md:w-56 md:h-68 rounded-t-[100px] rounded-b-2xl overflow-hidden border-4 border-[#D4AF37] shadow-xl mb-6">
            <img
              src={groom.photoUrl}
              alt={groom.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A050B]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 inset-x-0 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#801B31] text-[#F7E5A9] text-[10px] font-serif uppercase tracking-widest font-bold">
                The Groom
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[#801B31] mb-1">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold">
              {groom.royalLineage}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#801B31] mt-1">
            {groom.title}
          </h3>

          <p className="text-xs text-[#9A7B38] font-sans font-semibold mt-1">
            {groom.parents}
          </p>

          <p className="font-sans text-xs md:text-sm text-[#4A0E1C] mt-4 leading-relaxed max-w-sm">
            {groom.about}
          </p>
        </div>

        {/* The Bride Card */}
        <div className="relative rounded-3xl bg-[#FCFAF6] text-[#1A1615] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-[#D4AF37]/60 flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all">
          
          {/* Rajasthani Arch Frame (Jharokha Style) */}
          <div className="relative w-48 h-60 md:w-56 md:h-68 rounded-t-[100px] rounded-b-2xl overflow-hidden border-4 border-[#D4AF37] shadow-xl mb-6">
            <img
              src={bride.photoUrl}
              alt={bride.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A050B]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 inset-x-0 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-[#801B31] text-[#F7E5A9] text-[10px] font-serif uppercase tracking-widest font-bold">
                The Bride
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[#801B31] mb-1">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-bold">
              {bride.royalLineage}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#801B31] mt-1">
            {bride.title}
          </h3>

          <p className="text-xs text-[#9A7B38] font-sans font-semibold mt-1">
            {bride.parents}
          </p>

          <p className="font-sans text-xs md:text-sm text-[#4A0E1C] mt-4 leading-relaxed max-w-sm">
            {bride.about}
          </p>
        </div>

      </div>
    </section>
  );
};
