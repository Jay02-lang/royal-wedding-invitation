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

export function getCandidateVideoSources(base: string, videoSrc: string): string[] {
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const candidates: string[] = [];

  let resolvedSrc = videoSrc;
  if (
    videoSrc &&
    !videoSrc.startsWith("http://") &&
    !videoSrc.startsWith("https://") &&
    !videoSrc.startsWith("data:")
  ) {
    const cleanPath = videoSrc.replace(/^\.?\//, "");
    resolvedSrc = `${normalizedBase}${cleanPath}`;
  }

  if (resolvedSrc) candidates.push(resolvedSrc);

  const fallbacks = [
    `${normalizedBase}video/14249219_1920_1080_100fps.mp4`,
    `${normalizedBase}14249219_1920_1080_100fps.mp4`,
    `${normalizedBase}video/wedding-bg.mp4`,
    `${normalizedBase}wedding-bg.mp4`,
    "/video/14249219_1920_1080_100fps.mp4",
    "/14249219_1920_1080_100fps.mp4",
    "./video/14249219_1920_1080_100fps.mp4",
    "./14249219_1920_1080_100fps.mp4",
  ];

  for (const src of fallbacks) {
    if (!candidates.includes(src)) {
      candidates.push(src);
    }
  }

  return candidates;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoSrc,
  posterSrc = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85",
  overlayOpacity = "bg-white/15",
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

  // Multiple candidate sources to guarantee playback regardless of root vs subfolder
  const candidateSources = React.useMemo(() => {
    return getCandidateVideoSources(import.meta.env.BASE_URL, videoSrc);
  }, [videoSrc]);

  React.useEffect(() => {
    const playVideo = () => {
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
    };

    playVideo();

    // User gesture listener to guarantee playback if browser autoplay policy blocks unprompted autoplay
    const handleInteraction = () => {
      playVideo();
    };

    window.addEventListener("click", handleInteraction, { once: true, passive: true });
    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });
    window.addEventListener("scroll", handleInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [resolvedVideoSrc]);

  const playbackProps = getVideoPlaybackProps();
  const showFallback = shouldShowFallback(hasError, resolvedVideoSrc);

  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden pointer-events-none select-none">
      {!showFallback ? (
        <video
          ref={videoRef}
          {...playbackProps}
          poster={posterSrc}
          onError={(e) => {
            console.error("Video load error for:", resolvedVideoSrc, e);
            setHasError(true);
          }}
          className="w-full h-full object-cover scale-105 motion-safe:transition-transform duration-1000"
        >
          {candidateSources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
      ) : (
        <div
          className="w-full h-full bg-cover bg-center transition-opacity duration-1000 scale-105"
          style={{ backgroundImage: `url(${posterSrc})` }}
        >
          {/* Subtle slow ambient zoom for fallback poster */}
          <div className="w-full h-full bg-gradient-to-b from-[#120407]/60 via-[#120407]/40 to-[#120407]/80" />
        </div>
      )}

      {/* Main Opacity Overlay - Sheer tint without heavy blur for crisp video visibility */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />



      {/* Subtle radial luxury vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(18,4,7,0.25)_100%)]" />

      {/* Subtle gold ambient glow at corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full mix-blend-overlay" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full mix-blend-overlay" />
    </div>
  );
};
