import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  isPlaying?: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ isPlaying = true }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Soft background volume
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.warn("Autoplay was blocked by browser:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);

      if (!nextMuted) {
        // Ensure it starts playing if it was blocked
        audioRef.current.play().catch((err) => {
          console.warn("Play was blocked:", err);
        });
      }
    }
  };

  return (
    <>
      {/* Romantic instrumental background song */}
      <audio
        ref={audioRef}
        src="/background_music.mpeg"
        loop
        muted={isMuted}
        playsInline
      />

      {/* Small mute/unmute button — bottom-right */}
      <button
        type="button"
        onClick={toggleMute}
        title={isMuted ? "Unmute music" : "Mute music"}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-white/85 backdrop-blur-md border border-[#6B4C0A]/40 shadow-xl hover:bg-white hover:border-[#6B4C0A] transition-all duration-300 cursor-pointer text-[#6B4C0A]"
      >
        {isMuted ? <VolumeX size={18} strokeWidth={2.5} /> : <Volume2 size={18} strokeWidth={2.5} />}
      </button>
    </>
  );
};
