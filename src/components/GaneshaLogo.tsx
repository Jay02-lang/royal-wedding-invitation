import React from "react";

interface GaneshaLogoProps {
  className?: string;
}

export const GaneshaLogo: React.FC<GaneshaLogoProps> = ({
  className = "w-16 h-16",
}) => {
  return (
    <img src="/ganesha-logo.png" alt="Lord Ganesha" className={className} />
  );
};
