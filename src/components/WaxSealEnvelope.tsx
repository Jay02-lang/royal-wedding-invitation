import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export interface WaxSealEnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
  coupleMonogram?: string;
  guestName?: string;
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
  coupleMonogram = 'A & A',
  guestName = 'Honoured Royal Guest'
}) => {
  const [isBreaking, setIsBreaking] = useState(false);
  const stateClasses = getEnvelopeStateClasses(isOpen);

  const handleSealClick = () => {
    if (isOpen) return;

    setIsBreaking(true);

    // Trigger celebratory gold and rose petal burst
    confetti({
      particleCount: 50,
      spread: 70,
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
    <div className="relative w-full max-w-lg mx-auto py-8 px-4 flex flex-col items-center select-none">
      {/* Royal Guest Calligraphy Ribbon */}
      <div className="mb-6 text-center animate-fade-in">
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
          Imperial Dispatch
        </span>
        <h3 className="font-serif text-lg md:text-xl text-[#F7E5A9] mt-1 tracking-wide">
          Cordially Addressed To Our {guestName}
        </h3>
      </div>

      {/* 3D Envelope Container with Real Perspective */}
      <div
        className="relative w-full aspect-[16/11] max-w-[440px] rounded-2xl bg-[#4A0E1C] shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-[#D4AF37]/40 p-1"
        style={{ perspective: '1200px' }}
      >
        {/* Exterior Envelope Body (Heavy textured Crimson Velvet & Gold foil trim) */}
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#5D1022] via-[#4A0E1C] to-[#2D060F] shadow-inner">
          
          {/* Ornate Gold Filigree Corner Ornaments */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

          {/* Golden Paisley Foil Lattice Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Invitation Card Inside (Slides up when opened) */}
          <div
            className={`absolute inset-x-4 top-4 bottom-4 bg-[#FCFAF6] rounded-lg shadow-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out border border-[#D4AF37]/50 ${stateClasses.cardTranslateY}`}
            style={{ zIndex: isOpen ? 30 : 5 }}
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center mb-2">
              <span className="font-serif text-xs text-[#801B31] font-bold">ॐ</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#9A7B38] font-bold">Royal Invitation</p>
            <h4 className="font-serif text-lg text-[#1A1615] font-bold mt-1">Aarav & Ananya</h4>
            <p className="text-[11px] text-[#4A0E1C] mt-1 font-sans italic">Lake Pichola, Udaipur</p>
          </div>

          {/* Side Pocket Flaps (Left and Right Triangles) */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)',
              background: 'linear-gradient(135deg, #4A0E1C 0%, #380813 100%)',
              borderRight: '1px solid rgba(212,175,55,0.2)'
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
              background: 'linear-gradient(225deg, #4A0E1C 0%, #380813 100%)',
              borderLeft: '1px solid rgba(212,175,55,0.2)'
            }}
          />

          {/* Bottom Flap (Trapezoid Triangle pointing up) */}
          <div
            className="absolute inset-0 pointer-events-none z-15"
            style={{
              clipPath: 'polygon(0% 100%, 50% 45%, 100% 100%)',
              background: 'linear-gradient(0deg, #380813 0%, #4A0E1C 100%)',
              boxShadow: '0 -4px 15px rgba(0,0,0,0.4)',
              borderTop: '1px solid rgba(212,175,55,0.3)'
            }}
          />

          {/* Top Flap (Triangular flap folding down, rotates open 180deg on X axis) */}
          <div
            className="absolute inset-x-0 top-0 h-full origin-top transition-transform duration-1000 ease-in-out z-20"
            style={{
              transform: stateClasses.flapRotation,
              transformStyle: 'preserve-3d',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 55%)',
              background: 'linear-gradient(180deg, #5D1022 0%, #3B0914 100%)',
              borderBottom: '1px solid rgba(212,175,55,0.4)',
              boxShadow: isOpen ? 'none' : '0 8px 25px rgba(0,0,0,0.6)'
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
              {/* Molten wax irregular drip background */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                {/* Outer molten irregular contour */}
                <div className="absolute inset-0 rounded-full bg-[#801B31] shadow-[0_12px_30px_rgba(0,0,0,0.8),inset_0_3px_5px_rgba(255,255,255,0.35),inset_0_-4px_8px_rgba(0,0,0,0.6)] border-2 border-[#9E1B32]" />
                
                {/* Irregular molten wax drops along the rim */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#801B31] shadow-inner" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-[#720F22] shadow-inner" />
                <div className="absolute bottom-2 -right-2 w-4 h-4 rounded-full bg-[#801B31]" />
                <div className="absolute -bottom-2 right-4 w-5 h-5 rounded-full bg-[#5D1022]" />

                {/* Inner Debossed Seal Bed */}
                <div className="relative w-18 h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#9E1B32] via-[#751125] to-[#450714] shadow-[inset_0_4px_10px_rgba(0,0,0,0.7),0_2px_4px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center border border-[#D4AF37]/50 p-2">
                  
                  {/* Fine Gold Stamped Perimeter Ring */}
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#D4AF37]/60 pointer-events-none" />

                  {/* Monogram Inscription */}
                  <span className="font-serif text-sm md:text-base font-bold text-[#F7E5A9] tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {coupleMonogram}
                  </span>
                  
                  {/* Subtle royal crown / lotus motif */}
                  <span className="text-[9px] text-[#D4AF37] tracking-wider mt-0.5">
                    ✦ ROYAL ✦
                  </span>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Interactive Helper Prompt */}
      {!isOpen && (
        <div className="mt-8 text-center animate-bounce">
          <button
            type="button"
            onClick={handleSealClick}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] transition-all cursor-pointer"
          >
            <span>Tap To Break Seal & Open</span>
            <span>⟶</span>
          </button>
          <p className="text-[11px] text-[#FCFAF6]/70 mt-2 font-sans tracking-wide">
            Touch the royal wax seal to unveil the auspicious celebration
          </p>
        </div>
      )}
    </div>
  );
};
