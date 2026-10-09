import React from "react";
import { motion } from "framer-motion";
import { WeddingConfig } from "../types/wedding";
import { OrnamentDivider } from "./OrnamentDivider";

export interface InvitationHeroProps {
  weddingData: WeddingConfig;
  onReplayEnvelope?: () => void;
}

export const InvitationHero: React.FC<InvitationHeroProps> = ({
  weddingData,
  onReplayEnvelope,
}) => {
  return (
    <section className="relative min-h-[75dvh] w-full flex flex-col items-center justify-center px-4 pt-8 pb-4 text-center select-none overflow-hidden bg-[#FAFAFA]/35 backdrop-blur-[2px] sm:backdrop-blur-[12px] border-y border-white/40 shadow-2xl">
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center z-10">
        {/* Ganesha Art (Very Top) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="relative flex items-center justify-center w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#b87333]/40 to-[#ffb380]/20 blur-xl animate-pulse" />

            {/* The Masked Image */}
            <div
              className="relative z-10 w-full h-full drop-shadow-[0_0_12px_rgba(184,115,51,0.6)]"
              style={{
                WebkitMaskImage: `url(${import.meta.env.BASE_URL}ganesha-hero.png)`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${import.meta.env.BASE_URL}ganesha-hero.png)`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#e69f66] via-[#b87333] to-[#4a2b10]" />
            </div>
          </div>
        </motion.div>

        {/* TOP ORNAMENT DIVIDER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <OrnamentDivider width={320} className="opacity-80" />
        </motion.div>

        {/* FAMILIES INVITATION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-full max-w-4xl mx-auto px-4 py-10 flex flex-col items-center"
        >
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#1A1615] font-semibold leading-loose sm:leading-loose text-center tracking-[0.2em] uppercase drop-shadow-sm max-w-2xl">
            {weddingData.invitationNote}
          </p>
        </motion.div>

        {/* TO CELEBRATE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex flex-col items-center"
        >
          <span className="font-serif italic text-lg sm:text-2xl text-[#6B4C0A] mb-8 drop-shadow-sm font-medium">
            To Witness The Eternal Union Of
          </span>
        </motion.div>

        {/* COUPLE NAMES */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mb-14 flex flex-col items-center relative"
        >
          <h1 className="font-serif text-6xl sm:text-8xl md:text-[9rem] font-medium text-[#1A1615] tracking-tight leading-none drop-shadow-xl">
            {weddingData.groom.name.split(" ")[0]}
            <span className="block text-4xl sm:text-6xl md:text-7xl text-[#6B4C0A] font-light my-4 sm:my-6">
              &
            </span>
            {weddingData.bride.name.split(" ")[0]}
          </h1>
        </motion.div>

        {/* BOTTOM ORNAMENT DIVIDER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mb-10"
        >
          <OrnamentDivider width={320} className="opacity-80" />
        </motion.div>

        {/* DATE & VENUE (CLEAN) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center px-8 w-full"
        >
          <span className="font-sans uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#1A1615] text-sm sm:text-base font-bold drop-shadow-sm mb-4">
            November 26 — 28, 2026
          </span>
          <span className="font-serif italic text-xl sm:text-3xl text-[#6B4C0A] drop-shadow-sm font-semibold tracking-wide">
            {weddingData.events[0].venue}
          </span>

          <button
            onClick={onReplayEnvelope}
            className="mt-16 text-xs sm:text-sm font-sans tracking-widest uppercase text-[#6B4C0A] hover:text-[#1A1615] transition-colors flex items-center gap-2 opacity-80 hover:opacity-100 font-bold border-b border-[#6B4C0A]/30 pb-1"
          >
            Replay Envelope
          </button>
        </motion.div>
      </div>
    </section>
  );
};
