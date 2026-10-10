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
  const [guestCount, setGuestCount] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !authorName.trim()) return;
    
    const newBlessing: GuestBlessing = {
      id: `blessing-${Date.now()}`,
      authorName: authorName.trim(),
      relation: "Beloved Guest",
      message: `${message.trim()} (Attending: ${guestCount})`,
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    
    onAddBlessing(newBlessing);
    
    const whatsappText = `*Wedding RSVP & Blessing* 🌸\n*Name:* ${authorName.trim()}\n*Guests:* ${guestCount}\n*Message:* ${message.trim()}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');

    setAuthorName("");
    setMessage("");
    setGuestCount("1");
  };

  return (
    <section
      id="blessings"
      className="relative w-full flex flex-col items-center justify-center px-4 pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-[#FAFAFA]/35 backdrop-blur-[2px] sm:backdrop-blur-[12px] border-y border-white/40 shadow-2xl"
    >
      <div className="max-w-[800px] mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16 w-full flex flex-col items-center">
          <GaneshaLogo className="w-16 h-16 md:w-20 md:h-20 text-[#6B4C0A] mb-8" />
          <span className="text-xs sm:text-sm font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-bold mb-6">
            Please let us know if you'll be attending!
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#1A1615] font-normal tracking-wide uppercase">
            Respond with Love
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-10 mb-32">
          <div className="w-full max-w-[600px] flex flex-col items-center gap-3">
            <label htmlFor="blessing-name" className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#6B4C0A] font-bold">
              YOUR NAME
            </label>
            <input
              id="blessing-name"
              type="text"
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="E.g. Rahul Sharma"
              className="w-full bg-transparent border border-[#1A1615]/20 rounded-xl p-4 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg md:text-xl text-center focus:outline-none focus:border-[#6B4C0A] focus:ring-1 focus:ring-[#6B4C0A] transition-all"
            />
          </div>

          <div className="w-full max-w-[600px] flex flex-col items-center gap-3">
            <label htmlFor="guest-count" className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#6B4C0A] font-bold">
              NUMBER OF GUESTS
            </label>
            <input
              id="guest-count"
              type="number"
              min="1"
              max="20"
              required
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              placeholder="1"
              className="w-full bg-transparent border border-[#1A1615]/20 rounded-xl p-4 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg md:text-xl text-center focus:outline-none focus:border-[#6B4C0A] focus:ring-1 focus:ring-[#6B4C0A] transition-all"
            />
          </div>

          <div className="w-full max-w-[600px] flex flex-col items-center gap-3">
            <label htmlFor="blessing-message" className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#6B4C0A] font-bold">
              YOUR MESSAGE
            </label>
            <textarea
              id="blessing-message"
              required
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="LEAVE A BLESSING FOR THE COUPLE..."
              className="w-full bg-transparent border border-[#1A1615]/20 rounded-xl p-4 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg md:text-xl text-center focus:outline-none focus:border-[#6B4C0A] focus:ring-1 focus:ring-[#6B4C0A] transition-all resize-none overflow-hidden"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = `${target.scrollHeight}px`;
              }}
            />
          </div>

          <button
            type="submit"
            disabled={!message.trim() || !authorName.trim()}
            className="mt-4 flex items-center justify-center gap-3 px-8 py-4 border border-[#6B4C0A] rounded-xl text-[#6B4C0A] hover:bg-[#6B4C0A] hover:text-white transition-all text-[10px] sm:text-xs font-bold font-sans tracking-[0.2em] uppercase disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#6B4C0A]"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            CONFIRM ON WHATSAPP
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
