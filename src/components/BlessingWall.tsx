import React, { useState } from "react";
import { GuestBlessing } from "../types/wedding";
import { GaneshaLogo } from "./GaneshaLogo";

export interface BlessingWallProps {
  blessings: GuestBlessing[];
  onAddBlessing: (blessing: GuestBlessing) => void;
}

export const BlessingWall: React.FC<BlessingWallProps> = ({
  blessings,
  onAddBlessing,
}) => {
  const [authorName, setAuthorName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const newBlessing: GuestBlessing = {
      id: `blessing-${Date.now()}`,
      authorName: authorName.trim() || "Well-wisher",
      relation: "Beloved Guest",
      message: message.trim(),
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    
    onAddBlessing(newBlessing);
    setAuthorName("");
    setMessage("");
  };

  return (
    <section
      id="blessings"
      className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-6xl mx-auto flex flex-col items-center justify-center px-4 pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-[#FAFAFA]/35 backdrop-blur-[12px] rounded-[2rem] border border-white/40 shadow-2xl"
    >
      <div className="max-w-[800px] mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20 w-full flex flex-col items-center">
          <GaneshaLogo className="w-16 h-16 md:w-20 md:h-20 text-[#6B4C0A] mb-8" />
          <span className="text-xs sm:text-sm font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-bold mb-6">
            Guestbook
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#1A1615] font-normal tracking-wide uppercase">
            Blessing Wall
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-12 mb-32">
          <input
            id="blessing-name"
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="YOUR NAME"
            className="w-full max-w-[600px] bg-transparent border-b border-[#1A1615]/20 pb-4 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg md:text-xl text-center focus:outline-none focus:border-[#6B4C0A] transition-colors"
          />
          <textarea
            id="blessing-message"
            required
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="LEAVE A BLESSING FOR THE COUPLE..."
            className="w-full max-w-[600px] bg-transparent border-b border-[#1A1615]/20 pb-4 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg md:text-xl text-center focus:outline-none focus:border-[#6B4C0A] transition-colors resize-none overflow-hidden"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className="mt-4 text-[10px] font-bold font-sans tracking-[0.2em] uppercase text-[#1A1615] border-b border-[#1A1615] pb-1 hover:text-[#6B4C0A] hover:border-[#6B4C0A] transition-colors disabled:opacity-50 disabled:hover:text-[#1A1615] disabled:hover:border-[#1A1615]"
          >
            Post Blessing
          </button>
        </form>

        {/* Guestbook Entries */}
        <div className="flex flex-col gap-16 w-full max-w-[600px]">
          {blessings.map((blessing) => (
            <div
              key={blessing.id}
              className="flex flex-col items-center text-center animate-fade-in"
            >
              <p className="font-serif text-xl sm:text-2xl text-[#1A1615] leading-relaxed italic mb-6">
                "{blessing.message}"
              </p>
              <div className="flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#6B4C0A] font-bold">
                <span>{blessing.authorName}</span>
                <span className="opacity-40">|</span>
                <span className="opacity-60">{blessing.timestamp}</span>
              </div>
            </div>
          ))}
          {blessings.length === 0 && (
            <p className="font-serif text-[#1A1615]/50 italic text-center text-base">
              Be the first to bless the couple.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
