import React, { useState } from 'react';
import { GuestBlessing, RSVPSubmission } from '../types/wedding';
import { downloadRsvpCsvFile } from '../utils/csvExport';
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
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !message.trim()) return;

    const newBlessing: GuestBlessing = {
      id: `blessing-${Date.now()}`,
      authorName: authorName.trim(),
      relation: relation.trim() || 'Well-wisher & Friend',
      message: message.trim(),
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    };

    onAddBlessing(newBlessing);
    setAuthorName('');
    setRelation('');
    setMessage('');
  };

  return (
    <section id="blessings" className="relative w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
          Love & Auspicious Wishes
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#FCFAF6] mt-2 font-bold tracking-wide">
          Royal Guest Blessings
        </h2>
        <p className="text-xs md:text-sm text-[#F7E5A9]/80 font-sans mt-3 max-w-lg mx-auto">
          Leave your warmest prayers, shlokas, and blessings for Aarav & Ananya as they embark upon their sacred journey together.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Write a Blessing Form Card (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-[#FCFAF6] text-[#1A1615] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#D4AF37]/60">
          <div className="mb-4">
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#9A7B38] font-bold block">
              Inscribe Your Words
            </span>
            <h3 className="font-serif text-xl font-bold text-[#801B31] mt-0.5">
              Send Your Blessings
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="blessing-name" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#801B31]">
                Your Name *
              </label>
              <input
                id="blessing-name"
                type="text"
                required
                value={authorName}
                onChange={e => setAuthorName(e.target.value)}
                placeholder="e.g. Dadi & Dada Ji / Priya Verma"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-white text-base text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#801B31]/40"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="blessing-relation" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#801B31]">
                Relation or Family
              </label>
              <input
                id="blessing-relation"
                type="text"
                value={relation}
                onChange={e => setRelation(e.target.value)}
                placeholder="e.g. Groom's Family / Oxford Classmate"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-white text-base text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#801B31]/40"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="blessing-message" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#801B31]">
                Your Blessing Message *
              </label>
              <textarea
                id="blessing-message"
                required
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="May God shower eternal happiness, health, and grace upon both of you..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/50 bg-white text-base text-[#1A1615] focus:outline-none focus:ring-2 focus:ring-[#801B31]/40 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#801B31] text-[#FCFAF6] font-serif text-xs font-bold uppercase tracking-widest hover:bg-[#9E1B32] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Inscribe In Blessing Book</span>
            </button>
          </form>

          {/* Couple's Admin CSV Export Tool */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 text-center">
            <span className="text-[10px] font-sans uppercase tracking-widest text-[#71717A] block mb-2">
              Couple & Concierge Admin
            </span>
            <button
              type="button"
              onClick={() => downloadRsvpCsvFile(rsvps)}
              className="px-4 py-2 rounded-full border border-[#801B31]/40 text-[#801B31] hover:bg-[#801B31]/10 text-xs font-serif font-bold tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Export Guest List ({rsvps.length} RSVPs) (.csv)</span>
            </button>
          </div>

        </div>

        {/* Scroll of Blessings (7 cols) */}
        <div className="lg:col-span-7 space-y-4 max-h-[600px] overflow-y-auto pr-1">
          {blessings.map((b) => (
            <div
              key={b.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#FCFAF6] text-[#1A1615] border border-[#D4AF37]/50 shadow-md relative"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#801B31] fill-current" />
                  <span className="font-serif text-base font-bold text-[#801B31]">
                    {b.authorName}
                  </span>
                  <span className="text-xs text-[#9A7B38] font-sans font-medium">
                    • {b.relation}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#71717A]">
                  {b.timestamp}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#4A0E1C] leading-relaxed italic">
                &ldquo;{b.message}&rdquo;
              </p>
            </div>
          ))}

          {blessings.length === 0 && (
            <div className="p-8 text-center rounded-2xl bg-[#FCFAF6]/90 border border-dashed border-[#D4AF37]/40 text-[#4A0E1C]">
              <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
              <p className="font-serif text-sm">Be the first honoured guest to leave a blessing.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
