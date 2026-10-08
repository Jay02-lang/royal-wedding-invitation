import React from "react";

// This is a continuous, non-repeating, large-scale elegant floral branch.
// No <pattern> tiling. Just clean, sweeping bezier curves wrapping the envelope.
export const BespokeFloralLines: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#6B4C0A"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      >
        {/* ======================================= */}
        {/* LEFT SWEEPING VINE & CHRYSANTHEMUM      */}
        {/* ======================================= */}
        {/* Main sweeping stem from bottom left */}
        <path
          d="M -100,1100 C 100,900 200,600 350,500 C 500,400 450,200 400,50"
          strokeWidth="3"
        />

        {/* Branching off */}
        <path d="M 200,670 C 100,550 50,400 80,300" strokeWidth="2" />
        <path d="M 330,515 C 380,600 450,700 600,650" strokeWidth="2" />

        {/* Leaves on left stem */}
        <path
          d="M 120,770 Q 50,750 60,700 Q 120,680 150,730 Z"
          strokeWidth="1.5"
        />
        <path
          d="M 180,820 Q 100,850 90,900 Q 150,920 220,870 Z"
          strokeWidth="1.5"
        />
        <path
          d="M 300,560 Q 250,500 280,450 Q 330,480 320,540 Z"
          strokeWidth="1.5"
        />
        <path
          d="M 430,250 Q 500,200 520,150 Q 480,100 420,150 Z"
          strokeWidth="1.5"
        />

        {/* Large Elegant Lotus/Chrysanthemum (Bottom Left) */}
        <g transform="translate(180, 750) rotate(-30)">
          {/* Inner petals */}
          <path
            d="M0,0 C-10,-20 -20,-40 0,-60 C20,-40 10,-20 0,0"
            strokeWidth="2"
          />
          <path
            d="M0,0 C-20,-15 -40,-20 -50,0 C-40,20 -20,15 0,0"
            strokeWidth="2"
          />
          <path d="M0,0 C20,-15 40,-20 50,0 C40,20 20,15 0,0" strokeWidth="2" />
          {/* Outer sweeping petals */}
          <path
            d="M0,0 C-40,-40 -60,-80 -20,-100 C-10,-70 -20,-40 0,0"
            strokeWidth="1.5"
          />
          <path
            d="M0,0 C40,-40 60,-80 20,-100 C10,-70 20,-40 0,0"
            strokeWidth="1.5"
          />
          <path
            d="M0,0 C-60,-20 -100,-40 -120,-10 C-90,10 -60,-10 0,0"
            strokeWidth="1.5"
          />
          <path
            d="M0,0 C60,-20 100,-40 120,-10 C90,10 60,-10 0,0"
            strokeWidth="1.5"
          />
        </g>

        {/* ======================================= */}
        {/* RIGHT SWEEPING VINE & CHRYSANTHEMUM     */}
        {/* ======================================= */}
        {/* Main sweeping stem from top right */}
        <path
          d="M 1100,-100 C 900,100 800,400 650,500 C 500,600 550,800 600,950"
          strokeWidth="3"
        />

        {/* Branching off */}
        <path d="M 800,330 C 900,450 950,600 920,700" strokeWidth="2" />
        <path d="M 670,485 C 620,400 550,300 400,350" strokeWidth="2" />

        {/* Leaves on right stem */}
        <path
          d="M 880,230 Q 950,250 940,300 Q 880,320 850,270 Z"
          strokeWidth="1.5"
        />
        <path
          d="M 820,180 Q 900,150 910,100 Q 850,80 780,130 Z"
          strokeWidth="1.5"
        />
        <path
          d="M 700,440 Q 750,500 720,550 Q 670,520 680,460 Z"
          strokeWidth="1.5"
        />
        <path
          d="M 570,750 Q 500,800 480,850 Q 520,900 580,850 Z"
          strokeWidth="1.5"
        />

        {/* Large Elegant Lotus/Chrysanthemum (Top Right) */}
        <g transform="translate(820, 250) rotate(150)">
          {/* Inner petals */}
          <path
            d="M0,0 C-10,-20 -20,-40 0,-60 C20,-40 10,-20 0,0"
            strokeWidth="2"
          />
          <path
            d="M0,0 C-20,-15 -40,-20 -50,0 C-40,20 -20,15 0,0"
            strokeWidth="2"
          />
          <path d="M0,0 C20,-15 40,-20 50,0 C40,20 20,15 0,0" strokeWidth="2" />
          {/* Outer sweeping petals */}
          <path
            d="M0,0 C-40,-40 -60,-80 -20,-100 C-10,-70 -20,-40 0,0"
            strokeWidth="1.5"
          />
          <path
            d="M0,0 C40,-40 60,-80 20,-100 C10,-70 20,-40 0,0"
            strokeWidth="1.5"
          />
          <path
            d="M0,0 C-60,-20 -100,-40 -120,-10 C-90,10 -60,-10 0,0"
            strokeWidth="1.5"
          />
          <path
            d="M0,0 C60,-20 100,-40 120,-10 C90,10 60,-10 0,0"
            strokeWidth="1.5"
          />
        </g>

        {/* Beautiful sweeping foil accents (floating lines mimicking etched gold) */}
        <path
          d="M 250,900 C 350,850 400,950 500,850"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <path
          d="M 750,100 C 650,150 600,50 500,150"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        <circle cx="150" cy="650" r="3" fill="#6B4C0A" />
        <circle cx="170" cy="670" r="2" fill="#6B4C0A" />
        <circle cx="130" cy="680" r="1.5" fill="#6B4C0A" />

        <circle cx="850" cy="350" r="3" fill="#6B4C0A" />
        <circle cx="830" cy="330" r="2" fill="#6B4C0A" />
        <circle cx="870" cy="320" r="1.5" fill="#6B4C0A" />
      </g>
    </svg>
  );
};
