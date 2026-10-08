import React from "react";

// One repeating tile of the classic baroque scroll ornament, rotated vertically.
// Mimics the reference image: curling acanthus scrolls, broad leaves, spiral tendrils.
// Colors: deep crimson red fills + glittering golden accents + star sparkles.
const FloralTile: React.FC<{ side: "left" | "right"; tileIdx: number }> = ({
  side,
  tileIdx,
}) => {
  const isLeft = side === "left";
  // Stagger the glitter pulse timing across tiles
  const d1 = (tileIdx * 0.3) % 3;
  const d2 = (tileIdx * 0.5 + 1) % 3;
  const d3 = (tileIdx * 0.7 + 2) % 3;

  return (
    <svg
      width="72"
      height="260"
      viewBox="0 0 72 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${isLeft ? "" : "scale-x-[-1]"}`}
    >
      {/* ─── Solid gold edge bar ─── */}
      <rect x="0" y="0" width="5" height="260" fill="#6B4C0A" opacity="0.85" />
      <rect x="6" y="0" width="1.5" height="260" fill="#D4AF37" opacity="0.5" />

      {/* ─── Main stem / central vine ─── */}
      {/* Smooth S-curve down the tile */}
      <path
        d="M22,0 C22,40 50,60 36,130 C22,200 50,220 22,260"
        stroke="#6B4C0A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Golden highlight on stem */}
      <path
        d="M22,0 C22,40 50,60 36,130 C22,200 50,220 22,260"
        stroke="#D4AF37"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />

      {/* ─── TOP SCROLL ─── */}
      {/* Large left-curling acanthus leaf */}
      <path d="M22,30 C10,20 8,8 20,12 C30,16 28,28 22,30 Z" fill="#9E1B32" />
      <path
        d="M22,30 C14,22 14,14 20,16 C26,18 26,26 22,30 Z"
        fill="#DC2626"
        opacity="0.85"
      />
      {/* Spiral curl top-right */}
      <path
        d="M22,25 C36,10 52,14 48,26 C44,38 32,36 34,28 C36,22 44,24 42,30"
        stroke="#9E1B32"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M22,25 C36,10 52,14 48,26 C44,38 32,36 34,28 C36,22 44,24 42,30"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      {/* Small bud tip on spiral */}
      <ellipse cx="42" cy="30" rx="4" ry="3" fill="#801B31" />
      <ellipse cx="42" cy="30" rx="2.5" ry="1.8" fill="#DC2626" opacity="0.9" />

      {/* Leaf cluster top */}
      <path
        d="M30,15 C40,5 58,8 54,16 C50,24 38,20 30,15 Z"
        fill="#9E1B32"
        opacity="0.9"
      />
      <path
        d="M56,10 C64,4 70,8 66,14 C62,20 56,16 56,10 Z"
        fill="#9E1B32"
        opacity="0.75"
      />

      {/* ─── UPPER-MID SCROLL (mirrored curl) ─── */}
      <path
        d="M36,80 C52,68 68,74 62,86 C56,98 42,94 44,86 C46,80 56,82 54,88"
        stroke="#9E1B32"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M36,80 C52,68 68,74 62,86 C56,98 42,94 44,86 C46,80 56,82 54,88"
        stroke="#D4AF37"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* Broad leaf upper-mid */}
      <path d="M36,90 C22,80 18,66 28,68 C38,70 40,82 36,90 Z" fill="#9E1B32" />
      <path
        d="M36,90 C26,82 24,72 28,72 C34,72 36,84 36,90 Z"
        fill="#DC2626"
        opacity="0.8"
      />
      {/* Bud tip */}
      <ellipse cx="54" cy="88" rx="4" ry="3" fill="#801B31" />
      <ellipse
        cx="54"
        cy="88"
        rx="2.5"
        ry="1.8"
        fill="#EF4444"
        opacity="0.85"
      />

      {/* ─── CENTER BLOOM (most prominent) ─── */}
      {/* Central large leaf pair */}
      <path
        d="M36,118 C20,104 16,90 28,94 C40,98 42,112 36,118 Z"
        fill="#801B31"
      />
      <path
        d="M36,118 C26,106 26,96 30,98 C36,100 38,112 36,118 Z"
        fill="#9E1B32"
        opacity="0.85"
      />
      <path
        d="M36,142 C20,156 16,170 28,166 C40,162 42,148 36,142 Z"
        fill="#801B31"
      />
      <path
        d="M36,142 C26,154 26,164 30,162 C36,160 38,148 36,142 Z"
        fill="#9E1B32"
        opacity="0.85"
      />
      {/* Central floral medallion */}
      <circle cx="36" cy="130" r="10" fill="#5D1022" />
      <circle cx="36" cy="130" r="7" fill="#801B31" />
      <circle cx="36" cy="130" r="4" fill="#DC2626" />
      <circle cx="36" cy="130" r="2" fill="#D4AF37" />
      {/* Petals around the medallion */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={36 + Math.cos((angle * Math.PI) / 180) * 12}
          cy={130 + Math.sin((angle * Math.PI) / 180) * 12}
          rx="4"
          ry="2.5"
          fill="#9E1B32"
          opacity="0.85"
          transform={`rotate(${angle}, ${36 + Math.cos((angle * Math.PI) / 180) * 12}, ${130 + Math.sin((angle * Math.PI) / 180) * 12})`}
        />
      ))}

      {/* ─── LOWER-MID SCROLL (mirror of upper-mid) ─── */}
      <path
        d="M36,180 C52,192 68,186 62,174 C56,162 42,166 44,174 C46,180 56,178 54,172"
        stroke="#9E1B32"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M36,180 C52,192 68,186 62,174 C56,162 42,166 44,174 C46,180 56,178 54,172"
        stroke="#D4AF37"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
      {/* Broad leaf lower-mid */}
      <path
        d="M36,170 C22,180 18,194 28,192 C38,190 40,178 36,170 Z"
        fill="#9E1B32"
      />
      <path
        d="M36,170 C26,178 24,188 28,188 C34,188 36,176 36,170 Z"
        fill="#DC2626"
        opacity="0.8"
      />
      <ellipse cx="54" cy="172" rx="4" ry="3" fill="#801B31" />
      <ellipse
        cx="54"
        cy="172"
        rx="2.5"
        ry="1.8"
        fill="#EF4444"
        opacity="0.85"
      />

      {/* ─── BOTTOM SCROLL (mirror of top) ─── */}
      <path
        d="M22,235 C10,245 8,257 20,254 C30,251 28,240 22,235 Z"
        fill="#9E1B32"
      />
      <path
        d="M22,235 C14,242 14,250 20,248 C26,246 26,238 22,235 Z"
        fill="#DC2626"
        opacity="0.85"
      />
      <path
        d="M22,240 C36,255 52,252 48,240 C44,228 32,230 34,238 C36,244 44,242 42,236"
        stroke="#9E1B32"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M22,240 C36,255 52,252 48,240 C44,228 32,230 34,238 C36,244 44,242 42,236"
        stroke="#DC2626"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      <ellipse cx="42" cy="236" rx="4" ry="3" fill="#801B31" />
      <ellipse
        cx="42"
        cy="236"
        rx="2.5"
        ry="1.8"
        fill="#DC2626"
        opacity="0.9"
      />
      {/* Leaf cluster bottom */}
      <path
        d="M30,248 C40,258 58,256 54,248 C50,240 38,244 30,248 Z"
        fill="#9E1B32"
        opacity="0.9"
      />
      <path
        d="M56,252 C64,258 70,254 66,248 C62,242 56,248 56,252 Z"
        fill="#9E1B32"
        opacity="0.75"
      />

      {/* ─── GOLDEN GLITTER STARS ─── */}
      {/* 6-point star top */}
      <g
        style={{ animationDelay: `${d1}s`, animationDuration: "3s" }}
        className="animate-pulse"
      >
        <path
          d="M58,22 L59.5,27 L64,28.5 L59.5,30 L58,35 L56.5,30 L52,28.5 L56.5,27 Z"
          fill="#D4AF37"
        />
        <circle cx="58" cy="28.5" r="1.5" fill="#FCD34D" />
      </g>
      {/* Star mid */}
      <g
        style={{ animationDelay: `${d2}s`, animationDuration: "2.8s" }}
        className="animate-pulse"
      >
        <path
          d="M62,108 L63,112 L67,113 L63,114 L62,118 L61,114 L57,113 L61,112 Z"
          fill="#D4AF37"
        />
        <circle cx="62" cy="113" r="1.2" fill="#FCD34D" />
      </g>
      {/* Star lower-mid */}
      <g
        style={{ animationDelay: `${d3}s`, animationDuration: "3.5s" }}
        className="animate-pulse"
      >
        <path
          d="M60,195 L61,199 L65,200 L61,201 L60,205 L59,201 L55,200 L59,199 Z"
          fill="#D4AF37"
        />
        <circle cx="60" cy="200" r="1.2" fill="#FCD34D" />
      </g>
      {/* Tiny sparkle dots scattered */}
      <circle
        cx="50"
        cy="55"
        r="2"
        fill="#D4AF37"
        opacity="0.9"
        className="animate-pulse"
        style={{ animationDuration: "2s" }}
      />
      <circle
        cx="65"
        cy="148"
        r="2.5"
        fill="#FCD34D"
        opacity="0.85"
        className="animate-pulse"
        style={{
          animationDelay: `${(d1 + 1) % 3}s`,
          animationDuration: "2.5s",
        }}
      />
      <circle
        cx="55"
        cy="215"
        r="2"
        fill="#D4AF37"
        opacity="0.8"
        className="animate-pulse"
        style={{ animationDuration: "3s" }}
      />
      <circle cx="48" cy="68" r="1.5" fill="#FCD34D" opacity="0.7" />
      <circle cx="60" cy="165" r="1.5" fill="#D4AF37" opacity="0.7" />
    </svg>
  );
};

export const FloralBorders: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex justify-between overflow-hidden">
      {/* Left Boundary */}
      <div className="h-full flex flex-col">
        {[...Array(15)].map((_, i) => (
          <FloralTile key={`left-${i}`} side="left" tileIdx={i} />
        ))}
      </div>

      {/* Right Boundary */}
      <div className="h-full flex flex-col">
        {[...Array(15)].map((_, i) => (
          <FloralTile key={`right-${i}`} side="right" tileIdx={i} />
        ))}
      </div>
    </div>
  );
};
