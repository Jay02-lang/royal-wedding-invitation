import React from "react";
import { PersonInfo } from "../types/wedding";
import { GaneshaLogo } from "./GaneshaLogo";
import { Crown, Sparkles } from "lucide-react";
export interface CoupleStoryProps {
  groom: PersonInfo;
  bride: PersonInfo;
  shloka: { sanskrit: string; transliteration: string; meaning: string };
}
export const CoupleStory: React.FC<CoupleStoryProps> = ({
  groom,
  bride,
  shloka,
}) => {
  return (
    <section
      id="story"
      className="relative w-full flex flex-col px-4 py-10 md:py-16 overflow-hidden bg-transparent"
    >
      {" "}
      {/* 100% Unique Procedural Botanical Art (Not copy-pasted) */}{" "}
      {/* Full-Bleed Section Container with Sheer Luxury Backdrop */}{" "}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {" "}
        {/* Section Header with Enormous Regal Typography */}{" "}
        <div className="text-center mb-16">
          {" "}
          <GaneshaLogo className="w-18 h-18 text-[#D4AF37] mx-auto mb-3 drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)]" />{" "}
          <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
            {" "}
            Sacred Vedic Lineage & Royal Union{" "}
          </span>{" "}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FFF1C5] mt-3 font-black tracking-wide gold-foil-text drop-shadow-lg">
            {" "}
            Two Hearts, Two Dynasties{" "}
          </h2>{" "}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />{" "}
        </div>{" "}
        {/* Sacred Vedic Invocations Banner (Sheer Glass with Gold Trim) */}{" "}
        <div className="relative rounded-3xl bg-black/50 backdrop-blur-md border border-[#D4AF37]/50 p-8 sm:p-12 text-center max-w-4xl mx-auto mb-20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {" "}
          <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
            {" "}
            <Sparkles className="w-5 h-5" />{" "}
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] font-sans font-bold">
              Vedic Mangalacharan
            </span>{" "}
            <Sparkles className="w-5 h-5" />{" "}
          </div>{" "}
          <p className="font-serif text-xl sm:text-3xl md:text-4xl text-[#FFF1C5] font-black leading-relaxed whitespace-pre-line tracking-wide drop-shadow-md">
            {" "}
            {shloka.sanskrit}{" "}
          </p>{" "}
          <p className="font-sans text-sm sm:text-base text-[#FCFAF6]/90 italic mt-4 whitespace-pre-line tracking-wider">
            {" "}
            {shloka.transliteration}{" "}
          </p>{" "}
          <div className="mt-6 pt-6 border-t border-[#D4AF37]/30">
            {" "}
            <p className="font-sans text-xs sm:text-sm text-[#F7E5A9]/80 leading-relaxed max-w-2xl mx-auto">
              {" "}
              &ldquo;{shloka.meaning}&rdquo;{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Dual Royal Showcase (Full-Bleed Sheer Glass Paneling) */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {" "}
          {/* The Groom */}{" "}
          <div className="relative rounded-3xl bg-black/50 backdrop-blur-md text-[#FCFAF6] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#D4AF37]/50 flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all">
            {" "}
            {/* Jharokha Arch Frame */}{" "}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-[120px] rounded-b-2xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl mb-8">
              {" "}
              <img
                src={groom.photoUrl}
                alt={groom.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />{" "}
              <div className="absolute bottom-4 inset-x-0 text-center">
                {" "}
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#801B31] border border-[#D4AF37]/60 text-[#F7E5A9] text-xs font-serif uppercase tracking-widest font-bold">
                  {" "}
                  The Groom{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-2">
              {" "}
              <Crown className="w-5 h-5" />{" "}
              <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] font-bold">
                {" "}
                {groom.royalLineage}{" "}
              </span>{" "}
            </div>{" "}
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#FFF1C5] mt-1 tracking-wide">
              {" "}
              {groom.title}{" "}
            </h3>{" "}
            <p className="text-xs sm:text-sm text-[#D4AF37] font-sans font-semibold mt-2">
              {" "}
              {groom.parents}{" "}
            </p>{" "}
            <p className="font-sans text-xs sm:text-sm text-[#FCFAF6]/80 mt-5 leading-relaxed max-w-md">
              {" "}
              {groom.about}{" "}
            </p>{" "}
          </div>{" "}
          {/* The Bride */}{" "}
          <div className="relative rounded-3xl bg-black/50 backdrop-blur-md text-[#FCFAF6] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#D4AF37]/50 flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all">
            {" "}
            {/* Jharokha Arch Frame */}{" "}
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-t-[120px] rounded-b-2xl overflow-hidden border-4 border-[#D4AF37] shadow-2xl mb-8">
              {" "}
              <img
                src={bride.photoUrl}
                alt={bride.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />{" "}
              <div className="absolute bottom-4 inset-x-0 text-center">
                {" "}
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#801B31] border border-[#D4AF37]/60 text-[#F7E5A9] text-xs font-serif uppercase tracking-widest font-bold">
                  {" "}
                  The Bride{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inline-flex items-center gap-2 text-[#D4AF37] mb-2">
              {" "}
              <Crown className="w-5 h-5" />{" "}
              <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] font-bold">
                {" "}
                {bride.royalLineage}{" "}
              </span>{" "}
            </div>{" "}
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#FFF1C5] mt-1 tracking-wide">
              {" "}
              {bride.title}{" "}
            </h3>{" "}
            <p className="text-xs sm:text-sm text-[#D4AF37] font-sans font-semibold mt-2">
              {" "}
              {bride.parents}{" "}
            </p>{" "}
            <p className="font-sans text-xs sm:text-sm text-[#FCFAF6]/80 mt-5 leading-relaxed max-w-md">
              {" "}
              {bride.about}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
