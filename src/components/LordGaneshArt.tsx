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
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6B4C0A]/10 to-transparent blur-md" />

      {/* The Masked Image */}
      <div
        className="relative z-10 w-full h-full"
        style={{
          WebkitMaskImage: "url(/ganesha_fixed.png)",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: "url(/ganesha_fixed.png)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      >
        {/* We paint the mask with our custom royal golden gradient! */}
        <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] via-[#6B4C0A] to-[#805b10]" />
      </div>
    </div>
  );
};
