import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GaneshaLogo } from "./GaneshaLogo";
import { CodeFloralPattern } from "./CodeFloralPattern";
import { WildflowerBirds } from "./WildflowerBirds";
import { FinalFlapArt } from "./FinalFlapArt";
import { FlapFloralArt } from "./FlapFloralArt";


interface WaxSealEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const WaxSealEnvelope: React.FC<WaxSealEnvelopeProps> = ({
  isOpen,
  onOpen,
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  const [isFullyUnmounted, setIsFullyUnmounted] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      setInternalOpen(false);
      setIsFullyUnmounted(false);
      setIsBreaking(false);
    }
  }, [isOpen]);

  const handleSealClick = () => {
    if (internalOpen) return;
    setInternalOpen(true);
    onOpen();
    setTimeout(() => setIsFullyUnmounted(true), 1200); // Wait for flap animations to finish before unmounting
  };

  return (
    <AnimatePresence>
      {!isFullyUnmounted && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1A1615]"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Envelope Backing (Dark behind flaps, flashes to pure white on open) */}
          <div className="absolute inset-0 bg-[#170206]">
            {/* Blinding White Flash */}
            <motion.div
              className="absolute inset-0 bg-white z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: internalOpen ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            />
          </div>

          {/* Side Flaps */}
          {/* Left Flap */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden origin-left"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: internalOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)",
              background: "linear-gradient(135deg, #2A040D 0%, #170206 100%)",
              backfaceVisibility: "hidden",
              boxShadow: internalOpen ? "none" : "inset -10px 0 30px rgba(0,0,0,0.5)"
            }}
          >
            {/* Single Solid Gold Edge */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0 0 L 50 50 L 0 100" vectorEffect="non-scaling-stroke" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
            </svg>
            {/* FULL COVER Seamless Delicate Art */}
            <div className="absolute inset-0 opacity-[0.20] text-[#D4AF37] mix-blend-screen pointer-events-none overflow-hidden">
              <FinalFlapArt className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right Flap */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden origin-right"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: internalOpen ? 180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)",
              background: "linear-gradient(225deg, #2A040D 0%, #170206 100%)",
              backfaceVisibility: "hidden",
              boxShadow: internalOpen ? "none" : "inset 10px 0 30px rgba(0,0,0,0.5)"
            }}
          >
            {/* Single Solid Gold Edge */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 100 0 L 50 50 L 100 100" vectorEffect="non-scaling-stroke" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
            </svg>
            {/* FULL COVER Seamless Delicate Art */}
            <div className="absolute inset-0 opacity-[0.20] text-[#D4AF37] mix-blend-screen pointer-events-none overflow-hidden">
               <FinalFlapArt className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Bottom Flap */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden origin-bottom"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: internalOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              clipPath: "polygon(0% 100%, 50% 50%, 100% 100%)",
              background: "linear-gradient(0deg, #170206 0%, #2A040D 100%)",
              backfaceVisibility: "hidden",
              boxShadow: internalOpen ? "none" : "0 -20px 50px rgba(0,0,0,0.9), inset 0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            {/* Single Solid Gold Edge */}
            <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0 100 L 50 50 L 100 100" vectorEffect="non-scaling-stroke" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
            </svg>
            {/* FULL COVER Seamless Delicate Art */}
            <div className="absolute inset-0 opacity-[0.20] text-[#D4AF37] mix-blend-screen pointer-events-none overflow-hidden">
               <FinalFlapArt className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Top Flap (Opens massively) */}
          <motion.div
            className="absolute inset-0 z-30 origin-top overflow-hidden"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: internalOpen ? 180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 50% 55%)",
              background: "linear-gradient(180deg, #380813 0%, #1A0308 100%)",
              backfaceVisibility: "hidden",
              boxShadow: internalOpen ? "none" : "0 25px 60px rgba(0,0,0,0.9)",
            }}
          >
            {/* Top Flap Solid Gold Edge */}
            <svg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 0 0 L 50 55 L 100 0" vectorEffect="non-scaling-stroke" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
            </svg>
            {/* FULL COVER Seamless Delicate Art */}
            <div className="absolute inset-0 opacity-[0.20] text-[#D4AF37] mix-blend-screen pointer-events-none overflow-hidden">
               <FinalFlapArt className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
            {/* Top flap inner shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>

          {/* 3D Wax Seal in the Exact Center */}
          <motion.div
            className="absolute top-[52%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            initial={{ scale: 1, opacity: 1 }}
            animate={
              isBreaking
                ? { scale: 1.1, opacity: 0, rotate: 10 }
                : internalOpen
                  ? { scale: 1.3, opacity: 0 }
                  : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.4 }}
          >
            <button
              type="button"
              onClick={handleSealClick}
              disabled={internalOpen}
              className="group cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300"
            >
              <div className="relative w-36 h-36 md:w-48 md:h-48 flex items-center justify-center">
                
                {/* CLEAN, BRIGHT WAX BASE (No drips, bright colors) */}
                <div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E32636] via-[#B81525] to-[#801B31]"
                  style={{ 
                    boxShadow: "0px 15px 30px rgba(0,0,0,0.7), inset 0px 6px 12px rgba(255,255,255,0.4), inset 0px -8px 16px rgba(0,0,0,0.5)"
                  }}
                />

                {/* Glossy Highlights */}
                <div className="absolute top-3 left-5 w-16 h-8 bg-white/30 rounded-full blur-md transform -rotate-45 pointer-events-none" />

                {/* Debossed Stamped Center */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#9E1B32] via-[#801B31] to-[#5C0D1A] shadow-[inset_0_6px_12px_rgba(0,0,0,0.8),0_2px_4px_rgba(255,255,255,0.4)] flex flex-col items-center justify-center border border-[#D4AF37]/70">
                  <div className="absolute inset-2 rounded-full border-[2px] border-dashed border-[#D4AF37]/60 pointer-events-none" />
                  
                  {/* Bright Gold Ganesha Logo */}
                  <GaneshaLogo className="w-14 h-14 md:w-20 md:h-20 text-[#FFD700] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-100" />
                </div>
              </div>
            </button>
          </motion.div>

          {/* Click to Open Helper Text */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
            animate={{ opacity: internalOpen ? 0 : [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-[#D4AF37] drop-shadow-lg whitespace-nowrap font-semibold">
              Tap the seal to open
            </p>
          </motion.div>

          {/* Quick Access Action in Corner */}
          {!internalOpen && (
            <button
              onClick={handleSealClick}
              className="absolute top-6 right-6 z-40 px-4 py-2 rounded-full border border-[#D4AF37]/50 bg-black/50 text-[#F7E5A9] text-xs md:text-xs uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-[#170206] transition-all cursor-pointer font-sans shadow-lg"
            >
              Enter Invitation →
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
