import React, { useState } from "react";
import { CodeFloralPattern } from "./CodeFloralPattern";
import { WildflowerBirds } from "./WildflowerBirds";

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
    preload: "auto" as const,
  };
}

export function shouldShowFallback(hasError: boolean, src: string): boolean {
  return hasError || !src || src.trim().length === 0;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  posterSrc = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85",
  overlayOpacity = "bg-white/40 backdrop-blur-sm",
}) => {
  const [hasError, setHasError] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const resolvedVideoSrc = React.useMemo(() => {
    if (!videoSrc) return "";
    if (
      videoSrc.startsWith("http://") ||
      videoSrc.startsWith("https://") ||
      videoSrc.startsWith("data:")
    ) {
      return videoSrc;
    }
    const cleanPath = videoSrc.replace(/^\.?\//, "");
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${cleanPath}`;
  }, [videoSrc]);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Background video autoplay blocked:", err);
        });
      }
    }
  }, [resolvedVideoSrc]);

  const playbackProps = getVideoPlaybackProps();
  const showFallback = shouldShowFallback(hasError, resolvedVideoSrc);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none select-none">
      {!showFallback ? (
        <video
          ref={videoRef}
          {...playbackProps}
          src={resolvedVideoSrc}
          poster={posterSrc}
          onError={(e) => {
            console.error("Video load error for:", resolvedVideoSrc, e);
            setHasError(true);
          }}
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

      {/* Main Opacity Overlay */}
      <div
        className={`absolute inset-0 ${overlayOpacity}`}
      />

      {/* PURE CODE Floral Background Pattern (Above video, low opacity) */}
      
      {/* PURE CODE Floral Art (Delicate, thin, and small, No copy-paste grid) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply text-[#1c2e1f] opacity-20">
        {/* Left Side: Original Uploaded Artwork */}
        <div className="absolute bottom-0 left-0 w-[90vw] sm:w-[45vw] max-w-[450px] mix-blend-multiply opacity-80">
           <CodeFloralPattern className="w-full h-auto" />
        </div>
        
        {/* Right Side: Different Delicate Artwork (No copy paste, flipped horizontally so birds are upright) */}
        <div className="absolute bottom-0 right-0 w-[80vw] sm:w-[40vw] max-w-[400px] mix-blend-multiply opacity-60 scale-x-[-1]">
           <WildflowerBirds className="w-full h-auto" />
        </div>
      </div>


      {/* Subtle radial luxury vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,4,7,0.3)_100%)]" />

      {/* Subtle gold ambient glow at corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full mix-blend-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full mix-blend-overlay" />
    </div>
  );
};
