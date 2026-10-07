import React, { useState } from 'react';
import { GuestBlessing, RSVPSubmission } from '../types/wedding';
import { downloadRsvpCsvFile } from '../utils/csvExport';
import { LordGanesh } from './LordGanesh';
import { Download, Heart, Send, Sparkles } from 'lucide-react';

export interface BlessingWallProps {
  blessings: GuestBlessing[];
  onAddBlessing: (blessing: GuestBlessing) => void;
  rsvps: RSVPSubmission[];
}

export const BlessingWall: React.FC<BlessingWallProps> = ({
  blessings,
  onAddBlessing,
  rsvps
}) => {
  const [authorName, setAuthorName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newBlessing: GuestBlessing = {
      id: `blessing-${Date.now()}`,
      authorName: authorName.trim() || 'Well-wisher',
      relation: 'Beloved Guest',
      message: message.trim(),
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    onAddBlessing(newBlessing);
    setAuthorName('');
    setMessage('');
  };

  return (
    <section id="blessings" className="relative min-h-screen w-full flex flex-col justify-center px-4 py-20 md:py-32">
      
      {/* Full-Bleed Section Container */}
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header with Giant Typography */}
        <div className="text-center mb-16">
          <LordGanesh size={68} className="w-16 h-16 text-[#D4AF37] mx-auto mb-3 drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)]" />
          <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
            Sacred Prayers & Good Wishes
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FFF1C5] mt-3 font-black tracking-wide gold-foil-text drop-shadow-lg">
            Royal Blessings
          </h2>
          <p className="text-sm md:text-base text-[#F7E5A9]/80 font-sans mt-4 max-w-xl mx-auto leading-relaxed">
            Leave your warm prayers and blessings for Aarav & Ananya as they step into holy matrimony.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Write a Blessing Form (Sheer Glass) */}
          <div className="lg:col-span-5 rounded-3xl bg-black/55 backdrop-blur-md text-[#FCFAF6] p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] border border-[#D4AF37]/50">
            <div className="mb-6">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-bold block">
                Inscribe Your Prayers
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#FFF1C5] mt-1">
                Send A Blessing
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="blessing-name" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                  Your Name (Optional)
                </label>
                <input
                  id="blessing-name"
                  type="text"
                  value={authorName}
                  onChange={e => setAuthorName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/40 text-base text-[#FCFAF6] placeholder-[#FCFAF6]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="blessing-message" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                  Your Blessing Message *
                </label>
                <textarea
                  id="blessing-message"
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="May God shower eternal happiness, good health, and grace upon both of you..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/40 text-base text-[#FCFAF6] placeholder-[#FCFAF6]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4 text-[#801B31]" />
                <span>Inscribe Blessing</span>
              </button>
            </form>

            {/* Admin Tool */}
            <div className="mt-10 pt-6 border-t border-[#D4AF37]/30 text-center">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37]/70 block mb-3">
                Guest Hospitality Concierge
              </span>
              <button
                type="button"
                onClick={() => downloadRsvpCsvFile(rsvps)}
                className="px-5 py-2.5 rounded-full border border-[#D4AF37]/50 text-[#F7E5A9] hover:bg-[#D4AF37]/20 text-xs font-serif font-bold tracking-wider inline-flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Export Guest List ({rsvps.length} RSVPs) (.csv)</span>
              </button>
            </div>

          </div>

          {/* Scroll of Blessings */}
          <div className="lg:col-span-7 space-y-4 max-h-[650px] overflow-y-auto pr-1">
            {blessings.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-black/50 backdrop-blur-md text-[#FCFAF6] border border-[#D4AF37]/40 shadow-lg relative"
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#D4AF37] fill-current" />
                    <span className="font-serif text-lg font-bold text-[#FFF1C5]">
                      {b.authorName}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37]/70">
                    {b.timestamp}
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#FCFAF6]/90 leading-relaxed italic">
                  &ldquo;{b.message}&rdquo;
                </p>
              </div>
            ))}

            {blessings.length === 0 && (
              <div className="p-10 text-center rounded-2xl bg-black/40 border border-dashed border-[#D4AF37]/40 text-[#F7E5A9]">
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                <p className="font-serif text-base">Be the first honoured guest to leave a blessing.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
