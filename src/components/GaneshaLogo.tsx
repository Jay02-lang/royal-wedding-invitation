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
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#b87333]/40 to-[#ffb380]/20 blur-xl animate-pulse" />

      {/* The Masked Image */}
      <div
        className="relative z-10 w-full h-full drop-shadow-[0_0_12px_rgba(184,115,51,0.6)]"
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
        <div className="w-full h-full bg-gradient-to-br from-[#e69f66] via-[#b87333] to-[#4a2b10]" />
      </div>
    </div>
  );
};
