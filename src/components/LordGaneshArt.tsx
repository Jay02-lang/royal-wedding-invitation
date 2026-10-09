import React from "react";

export const LordGaneshArt: React.FC<{
  className?: string;
  style?: React.CSSProperties;
}> = ({ className = "w-16 h-16", style }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={style}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#b87333]/40 to-[#ffb380]/20 blur-xl animate-pulse" />

      {/* The Masked Image */}
      <div
        className="relative z-10 w-full h-full drop-shadow-[0_0_12px_rgba(184,115,51,0.6)]"
        style={{
          WebkitMaskImage: `url(${import.meta.env.BASE_URL}ganesha_fixed.png)`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${import.meta.env.BASE_URL}ganesha_fixed.png)`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        {/* We paint the mask with our custom rose gold/bronze gradient! */}
        <div className="w-full h-full bg-gradient-to-br from-[#e69f66] via-[#b87333] to-[#4a2b10]" />
      </div>
    </div>
  );
};
