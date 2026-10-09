import React from 'react';
import { motion } from 'framer-motion';
import { PersonInfo } from '../types/wedding';
import { MinimalFloral } from './MinimalFloral';

export interface CoupleIntroProps {
  groom: PersonInfo;
  bride: PersonInfo;
}

export const CoupleIntro: React.FC<CoupleIntroProps> = ({ groom, bride }) => {
  return (
    <section className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] flex flex-col max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-10 md:pt-16 md:pb-20 overflow-hidden bg-[#FAFAFA]/35 backdrop-blur-[12px] rounded-[2rem] border border-white/40 shadow-2xl">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-row items-start justify-center gap-4 sm:gap-12 md:gap-32"
      >
        {/* Groom Profile */}
        <div className="flex flex-col items-center text-center w-1/2 max-w-[280px]">
          {/* Refined Classic Arch Portrait */}
          <div className="relative mb-8 sm:mb-10 mt-4 group">
            {/* Single delicate offset frame */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-t-full rounded-b-sm border-[1px] border-[#6B4C0A]/30 z-0 transition-transform duration-700 group-hover:scale-[1.02]" />
            
            {/* Image Container (Classic Arch) */}
            <div className="w-32 h-44 sm:w-56 sm:h-72 md:w-64 md:h-[22rem] rounded-t-full rounded-b-none overflow-hidden relative z-10 bg-[#FAFAFA] shadow-lg">
              <div className="absolute inset-0 bg-[#6B4C0A]/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img src={groom.photoUrl} alt={groom.name} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]" />
            </div>
          </div>
          
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1615] mb-2 tracking-tight">
            {groom.name}
          </h3>
          <div className="w-6 sm:w-10 h-px bg-[#6B4C0A]/40 mb-4" />
          <p className="text-[10px] sm:text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-[#6B4C0A]/80 mb-6 drop-shadow-sm px-1">
            {groom.parents}
          </p>
          <p className="font-serif text-xs sm:text-sm md:text-base text-[#1A1615]/80 leading-relaxed italic px-1 sm:px-2">
            {groom.about}
          </p>
        </div>

        {/* Ultra-Refined Vertical Spine */}
        <div className="flex flex-col items-center opacity-100 shrink-0 mt-16 sm:mt-24 md:mt-20">
          <div className="w-px h-16 sm:h-24 md:h-32 bg-gradient-to-b from-transparent to-[#6B4C0A]" />
          <MinimalFloral className="w-16 h-16 sm:w-24 sm:h-24 text-[#6B4C0A] my-4 sm:my-6 drop-shadow-sm" />
          <div className="w-px h-16 sm:h-24 md:h-32 bg-gradient-to-t from-transparent to-[#6B4C0A]" />
        </div>

        {/* Bride Profile */}
        <div className="flex flex-col items-center text-center w-1/2 max-w-[280px]">
          {/* Refined Classic Arch Portrait */}
          <div className="relative mb-8 sm:mb-10 mt-4 group">
            {/* Single delicate offset frame */}
            <div className="absolute -inset-2 sm:-inset-3 rounded-t-full rounded-b-sm border-[1px] border-[#6B4C0A]/30 z-0 transition-transform duration-700 group-hover:scale-[1.02]" />
            
            {/* Image Container (Classic Arch) */}
            <div className="w-32 h-44 sm:w-56 sm:h-72 md:w-64 md:h-[22rem] rounded-t-full rounded-b-none overflow-hidden relative z-10 bg-[#FAFAFA] shadow-lg">
              <div className="absolute inset-0 bg-[#6B4C0A]/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img src={bride.photoUrl} alt={bride.name} className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]" />
            </div>
          </div>
          
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1A1615] mb-2 tracking-tight">
            {bride.name}
          </h3>
          <div className="w-6 sm:w-10 h-px bg-[#6B4C0A]/40 mb-4" />
          <p className="text-[10px] sm:text-xs md:text-sm font-sans uppercase tracking-[0.3em] text-[#6B4C0A]/80 mb-6 drop-shadow-sm px-1">
            {bride.parents}
          </p>
          <p className="font-serif text-xs sm:text-sm md:text-base text-[#1A1615]/80 leading-relaxed italic px-1 sm:px-2">
            {bride.about}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
