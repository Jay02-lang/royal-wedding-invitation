import React, { useState } from "react";
import { GuestBlessing } from "../types/wedding";
import { OrnamentDivider } from "./OrnamentDivider";
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
      className="relative w-full flex flex-col px-4 py-12 md:py-16 overflow-hidden bg-transparent"
    >
      {" "}
      {/* Procedural Botanicals */}{" "}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {" "}
        {/* Header (No Cards) */}{" "}
        <div className="text-center mb-16 w-full flex flex-col items-center">
          {" "}
          <span className="text-xs sm:text-sm font-bold font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-semibold mb-6">
            {" "}
            Sacred Prayers{" "}
          </span>{" "}
          <OrnamentDivider width={200} className="mb-8" />{" "}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#1A1615] font-normal tracking-tight">
            {" "}
            Guest Blessings{" "}
          </h2>{" "}
          <p className="font-serif text-sm sm:text-base md:text-lg text-[#1A1615]/80 leading-[2.2] max-w-2xl font-medium mt-8">
            {" "}
            Leave your warm prayers and blessings for the couple as they step
            into holy matrimony.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full px-4">
          {" "}
          {/* Write a Blessing Form (Frameless, Minimalist) */}{" "}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full max-w-md mx-auto">
            {" "}
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1A1615] mb-8">
              {" "}
              Inscribe Your Prayer{" "}
            </h3>{" "}
            <form onSubmit={handleSubmit} className="w-full space-y-8">
              {" "}
              <div className="space-y-3">
                {" "}
                <input
                  id="blessing-name"
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Your Name (Optional)"
                  className="w-full bg-transparent border-b border-[#1A1615]/20 pb-2 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg focus:outline-none focus:border-[#6B4C0A] transition-colors"
                />{" "}
              </div>{" "}
              <div className="space-y-3">
                {" "}
                <textarea
                  id="blessing-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Blessing Message *"
                  className="w-full bg-transparent border-b border-[#1A1615]/20 pb-2 text-[#1A1615] placeholder-[#1A1615]/40 font-serif text-lg focus:outline-none focus:border-[#6B4C0A] transition-colors resize-none"
                />{" "}
              </div>{" "}
              <button
                type="submit"
                disabled={!message.trim()}
                className="w-full sm:w-auto px-10 py-3 border border-[#1A1615] text-[#1A1615] hover:bg-[#1A1615] hover:text-[#FAFAFA] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#1A1615] transition-colors duration-300 font-sans text-[10px] uppercase tracking-[0.2em]"
              >
                {" "}
                Send Blessing{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
          {/* Guestbook Entries (Frameless typography) */}{" "}
          <div className="flex flex-col gap-12 lg:pl-12 lg:border-l border-[#1A1615]/10 max-h-[600px] overflow-y-auto scrollbar-none">
            {" "}
            {blessings.map((blessing) => (
              <div
                key={blessing.id}
                className="flex flex-col animate-fade-in text-center sm:text-left"
              >
                {" "}
                <p className="font-serif text-sm sm:text-base text-[#1A1615] leading-[2.2] font-medium italic mb-4">
                  {" "}
                  "{blessing.message}"{" "}
                </p>{" "}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 font-sans text-[10px] tracking-widest uppercase text-[#6B4C0A] font-semibold">
                  {" "}
                  <span>{blessing.authorName}</span>{" "}
                  <span className="hidden sm:inline opacity-40">|</span>{" "}
                  <span className="opacity-60">{blessing.timestamp}</span>{" "}
                </div>{" "}
              </div>
            ))}{" "}
            {blessings.length === 0 && (
              <p className="font-serif text-[#1A1615]/50 italic text-center text-sm">
                {" "}
                Be the first to bless the couple.{" "}
              </p>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
