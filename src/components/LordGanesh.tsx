import React from 'react';

interface LordGaneshProps {
  className?: string;
  size?: number;
}

export const LordGanesh: React.FC<LordGaneshProps> = ({
  className = 'w-16 h-16 text-[#D4AF37]',
  size = 64
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lord Ganesha Emblem"
    >
      <defs>
        <linearGradient id="ganeshGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1C5" />
          <stop offset="35%" stopColor="#F5D061" />
          <stop offset="70%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B38" />
        </linearGradient>
        <radialGradient id="auraGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Aura background glow */}
      <circle cx="60" cy="60" r="56" fill="url(#auraGlow)" />

      {/* Ornate halo ring */}
      <circle cx="60" cy="60" r="52" stroke="url(#ganeshGold)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

      {/* Mukut / Crown */}
      <path
        d="M60 12 L67 28 L78 30 L69 40 L72 52 L60 46 L48 52 L51 40 L42 30 L53 28 Z"
        fill="url(#ganeshGold)"
        stroke="#5D1022"
        strokeWidth="0.8"
      />
      <circle cx="60" cy="22" r="2.5" fill="#FFF1C5" />
      <circle cx="60" cy="34" r="3.5" fill="#801B31" stroke="url(#ganeshGold)" strokeWidth="1" />

      {/* Tilak / Trishul on Forehead */}
      <path
        d="M58 48 C58 44 62 44 62 48 L61 56 C61 58 59 58 59 56 Z"
        fill="#801B31"
      />
      <circle cx="60" cy="46" r="2" fill="#EAB308" />

      {/* Ganesha Ears (Supada Karna) */}
      {/* Right Ear */}
      <path
        d="M68 50 C86 46 96 60 92 74 C88 86 78 84 72 78"
        stroke="url(#ganeshGold)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M74 58 C84 56 88 66 84 72"
        stroke="url(#ganeshGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />

      {/* Left Ear */}
      <path
        d="M52 50 C34 46 24 60 28 74 C32 86 42 84 48 78"
        stroke="url(#ganeshGold)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M46 58 C36 56 32 66 36 72"
        stroke="url(#ganeshGold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />

      {/* Head & Cheek Curvatures */}
      <path
        d="M48 62 C48 54 72 54 72 62 C72 74 68 84 64 94"
        stroke="url(#ganeshGold)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Trunk (Vakratunda) curving gracefully to the left */}
      <path
        d="M60 66 C62 76 65 88 56 98 C48 106 38 102 36 94 C34 86 42 82 46 86 C48 88 48 91 46 92"
        stroke="url(#ganeshGold)"
        strokeWidth="3.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Modak (Sweet) held near trunk */}
      <circle cx="44" cy="88" r="3.5" fill="#F59E0B" stroke="url(#ganeshGold)" strokeWidth="1" />
      <circle cx="43" cy="87" r="1" fill="#FFF1C5" />

      {/* Right Tusk (Ekadanta - Complete) */}
      <path
        d="M68 76 L75 80 L69 82 Z"
        fill="#FCFAF6"
        stroke="url(#ganeshGold)"
        strokeWidth="0.8"
      />

      {/* Left Tusk (Broken Tusk) */}
      <path
        d="M53 76 L48 78 L51 80 Z"
        fill="#FCFAF6"
        stroke="url(#ganeshGold)"
        strokeWidth="0.8"
      />

      {/* Eyes */}
      <ellipse cx="66" cy="56" rx="2" ry="1.2" fill="#1A1615" transform="rotate(-15 66 56)" />
      <ellipse cx="54" cy="56" rx="2" ry="1.2" fill="#1A1615" transform="rotate(15 54 56)" />

      {/* Sacred Om Symbol Footnote */}
      <circle cx="60" cy="110" r="1.5" fill="url(#ganeshGold)" />
      <circle cx="54" cy="110" r="1" fill="url(#ganeshGold)" opacity="0.6" />
      <circle cx="66" cy="110" r="1" fill="url(#ganeshGold)" opacity="0.6" />
    </svg>
  );
};
