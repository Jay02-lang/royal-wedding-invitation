import React from "react";

export const OrnamentDivider = ({
  width = 280,
  className = "",
}: {
  width?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height="20"
      viewBox="0 0 280 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`mx-auto opacity-70 ${className}`}
    >
      <path
        d="M 0 10 L 100 10 M 180 10 L 280 10"
        stroke="#6B4C0A"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <circle
        cx="140"
        cy="10"
        r="4"
        fill="none"
        stroke="#6B4C0A"
        strokeWidth="1"
      />
      <path
        d="M 130 10 L 135 5 L 140 10 L 135 15 Z"
        fill="#6B4C0A"
        opacity="0.5"
      />
      <path
        d="M 150 10 L 145 5 L 140 10 L 145 15 Z"
        fill="#6B4C0A"
        opacity="0.5"
      />
    </svg>
  );
};
