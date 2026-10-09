import React from "react";

interface GaneshaLogoProps {
  className?: string;
}

export const GaneshaLogo: React.FC<GaneshaLogoProps> = ({
  className = "w-16 h-16",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/40 to-[#FBE18D]/20 blur-xl animate-pulse" />

      {/* The Masked Image */}
      <div
        className="relative z-10 w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{
          WebkitMaskImage: `url(${import.meta.env.BASE_URL}ganesha-logo.png)`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${import.meta.env.BASE_URL}ganesha-logo.png)`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#FFF5C3] via-[#D4AF37] to-[#805b10]" />
      </div>
    </div>
  );
};
