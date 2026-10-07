import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { LordGanesh } from './LordGanesh';

export interface WaxSealEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  coupleMonogram?: string;
}

export function getEnvelopeStateClasses(isOpen: boolean) {
  return {
    flapRotation: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
    sealVisibility: !isOpen,
    cardTranslateY: isOpen ? '-translate-y-44 md:-translate-y-64' : 'translate-y-0',
  };
}

export const WaxSealEnvelope: React.FC<WaxSealEnvelopeProps> = ({
  isOpen,
  onOpen,
  coupleMonogram = 'A & A'
}) => {
  const [isBreaking, setIsBreaking] = useState(false);
  const stateClasses = getEnvelopeStateClasses(isOpen);

  const handleSealClick = () => {
    if (isOpen) return;

    setIsBreaking(true);

    // Trigger celebratory gold and rose petal burst
    confetti({
      particleCount: 65,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#801B31', '#F59E0B', '#FFF1C5'],
      shapes: ['circle'],
      scalar: 1.2
    });

    setTimeout(() => {
      onOpen();
      setIsBreaking(false);
    }, 700);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto py-12 px-4 flex flex-col items-center select-none text-center animate-fade-in">
      
      {/* Sacred Lord Ganesha Blessing Header */}
      <div className="mb-8 flex flex-col items-center">
        <LordGanesh size={80} className="w-20 h-20 text-[#D4AF37] mb-2 drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]" />
        <span className="font-serif text-lg md:text-xl font-bold text-[#F7E5A9] tracking-widest block">
          ॥ श्री गणेशाय नमः ॥
        </span>
        <h2 className="font-serif text-2xl md:text-4xl text-[#FCFAF6] font-bold mt-2 tracking-wide uppercase">
          The Royal Wedding Invitation
        </h2>
        <p className="text-xs md:text-sm text-[#F7E5A9]/80 font-sans tracking-widest uppercase mt-1">
          Aarav & Ananya • Lake Pichola, Udaipur
        </p>
      </div>

      {/* 3D Envelope Container with Real Perspective */}
      <div
        className="relative w-full aspect-[16/11] max-w-[480px] rounded-2xl bg-[#4A0E1C] shadow-[0_30px_80px_rgba(0,0,0,0.9)] border-2 border-[#D4AF37]/50 p-1"
        style={{ perspective: '1200px' }}
      >
        {/* Exterior Envelope Body */}
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#5D1022] via-[#4A0E1C] to-[#2D060F] shadow-inner">
          
          {/* Ornate Gold Filigree Corner Ornaments */}
          <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
          <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]/70 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/70 pointer-events-none" />

          {/* Golden Paisley Foil Lattice Background */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Invitation Card Inside (Slides up when opened) */}
          <div
            className={`absolute inset-x-4 top-4 bottom-4 bg-[#FCFAF6] rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out border-2 border-[#D4AF37]/60 ${stateClasses.cardTranslateY}`}
            style={{ zIndex: isOpen ? 30 : 5 }}
          >
            <LordGanesh size={36} className="w-9 h-9 text-[#801B31] mb-1" />
            <span className="font-serif text-[11px] font-bold text-[#801B31] tracking-widest block">॥ श्री गणेशाय नमः ॥</span>
            <p className="text-[10px] uppercase tracking-widest text-[#9A7B38] font-bold mt-1">Royal Wedding Celebration</p>
            <h4 className="font-serif text-2xl text-[#1A1615] font-black mt-1">Aarav & Ananya</h4>
            <p className="text-xs text-[#4A0E1C] mt-1 font-sans italic">Lake Pichola, Udaipur</p>
          </div>

          {/* Side Flaps */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
              background: 'linear-gradient(135deg, #4A0E1C 0%, #380813 100%)',
              borderRight: '1px solid rgba(212,175,55,0.3)'
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
              background: 'linear-gradient(225deg, #4A0E1C 0%, #380813 100%)',
              borderLeft: '1px solid rgba(212,175,55,0.3)'
            }}
          />

          {/* Bottom Flap */}
          <div
            className="absolute inset-0 pointer-events-none z-15"
            style={{
              clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
              background: 'linear-gradient(0deg, #380813 0%, #4A0E1C 100%)',
              boxShadow: '0 -4px 15px rgba(0,0,0,0.5)',
              borderTop: '1px solid rgba(212,175,55,0.4)'
            }}
          />

          {/* Top Flap */}
          <div
            className="absolute inset-x-0 top-0 h-full origin-top transition-transform duration-1000 ease-in-out z-20"
            style={{
              transform: stateClasses.flapRotation,
              transformStyle: 'preserve-3d',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 55%)',
              background: 'linear-gradient(180deg, #5D1022 0%, #3B0914 100%)',
              borderBottom: '1px solid rgba(212,175,55,0.5)',
              boxShadow: isOpen ? 'none' : '0 8px 25px rgba(0,0,0,0.7)'
            }}
          />

          {/* Hyper-Realistic 3D Embossed Molten Wax Seal */}
          {stateClasses.sealVisibility && (
            <button
              type="button"
              onClick={handleSealClick}
              disabled={isBreaking}
              aria-label="Break wax seal and open invitation"
              className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 group cursor-pointer focus:outline-none transition-transform duration-300 ${
                isBreaking ? 'scale-125 opacity-70 rotate-6' : 'hover:scale-105 active:scale-95'
              }`}
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                {/* Outer molten irregular contour */}
                <div className="absolute inset-0 rounded-full bg-[#801B31] shadow-[0_12px_30px_rgba(0,0,0,0.85),inset_0_3px_5px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.6)] border-2 border-[#9E1B32]" />
                
                {/* Irregular molten wax drops along the rim */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#801B31] shadow-inner" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-[#720F22] shadow-inner" />
                <div className="absolute bottom-2 -right-2 w-4 h-4 rounded-full bg-[#801B31]" />
                <div className="absolute -bottom-2 right-4 w-5 h-5 rounded-full bg-[#5D1022]" />

                {/* Inner Debossed Seal Bed */}
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#9E1B32] via-[#751125] to-[#450714] shadow-[inset_0_4px_10px_rgba(0,0,0,0.7),0_2px_4px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center border border-[#D4AF37]/60 p-2">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#D4AF37]/60 pointer-events-none" />
                  <span className="font-serif text-base md:text-lg font-black text-[#F7E5A9] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {coupleMonogram}
                  </span>
                  <span className="text-[9px] text-[#D4AF37] tracking-wider mt-0.5">
                    ✦ SHREE ✦
                  </span>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Interactive Helper Prompt */}
      {!isOpen && (
        <div className="mt-10 text-center animate-bounce">
          <button
            type="button"
            onClick={handleSealClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-sm md:text-base font-bold uppercase tracking-widest shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_35px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer"
          >
            <span>Touch Wax Seal To Open</span>
            <span className="text-lg">⟶</span>
          </button>
        </div>
      )}
    </div>
  );
};
