import React, { useState } from 'react';

export interface BackgroundVideoProps {
  videoSrc: string;
  posterSrc?: string;
  overlayOpacity?: string;
}

export function getVideoPlaybackProps() {
  return {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: 'auto' as const,
  };
}

export function shouldShowFallback(hasError: boolean, src: string): boolean {
  return hasError || !src || src.trim().length === 0;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  posterSrc = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85',
  overlayOpacity = 'bg-black/55',
}) => {
  const [hasError, setHasError] = useState(false);
  const playbackProps = getVideoPlaybackProps();
  const showFallback = shouldShowFallback(hasError, videoSrc);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none select-none">
      {!showFallback ? (
        <video
          {...playbackProps}
          src={videoSrc}
          poster={posterSrc}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover scale-105 motion-safe:transition-transform duration-1000"
        />
      ) : (
        <div
          className="w-full h-full bg-cover bg-center transition-opacity duration-1000 scale-105"
          style={{ backgroundImage: `url(${posterSrc})` }}
        >
          {/* Subtle slow ambient zoom for fallback poster */}
          <div className="w-full h-full bg-gradient-to-b from-[#120407]/60 via-[#120407]/40 to-[#120407]/80" />
        </div>
      )}

      {/* Royal Contrast & Vignette Overlays to ensure 100% legibility */}
      <div className={`absolute inset-0 ${overlayOpacity} backdrop-blur-[0.5px]`} />
      
      {/* Subtle radial luxury vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,4,7,0.7)_100%)]" />

      {/* Subtle royal gold ambient glow at corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#801B31]/10 blur-3xl rounded-full" />
    </div>
  );
};
