import React, { useState } from 'react';
import { WeddingEvent } from '../types/wedding';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { Calendar, Clock, Download, ExternalLink, MapPin, Sparkles } from 'lucide-react';

export interface ItinerarySectionProps {
  events: WeddingEvent[];
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ events }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id || 'haldi');
  const activeEvent = events.find(e => e.id === selectedEventId) || events[0];

  return (
    <section id="itinerary" className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
          Sacred Ceremonies & Celebrations
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#FCFAF6] mt-2 font-bold tracking-wide">
          The Royal Itinerary
        </h2>
        <p className="text-xs md:text-sm text-[#F7E5A9]/80 font-sans mt-3 max-w-lg mx-auto">
          Join us across three days of eternal Vedic rituals, imperial feasts, and joyous revelry by the waters of Lake Pichola.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      {/* Horizontal Event Tabs (Mobile Swipeable Scroll / Desktop Pill Bar) */}
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-none mb-8 md:mb-12 justify-start md:justify-center px-2">
        {events.map((evt) => {
          const isSelected = evt.id === selectedEventId;
          return (
            <button
              key={evt.id}
              onClick={() => setSelectedEventId(evt.id)}
              className={`flex-shrink-0 px-4 md:px-6 py-2.5 rounded-full border transition-all text-xs md:text-sm font-serif font-bold tracking-wider cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] border-[#FFF1C5] shadow-[0_4px_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-[#1A050B]/60 text-[#F7E5A9] border-[#D4AF37]/30 hover:border-[#D4AF37]/70 hover:bg-[#801B31]/30 backdrop-blur-sm'
              }`}
            >
              <span className="text-[10px] font-sans uppercase tracking-widest opacity-80">
                Day {evt.dayNumber}
              </span>
              <span>•</span>
              <span>{evt.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Event Showcase Card (Realistic Gilded Parchment) */}
      {activeEvent && (
        <div className="relative rounded-3xl bg-[#FCFAF6] text-[#1A1615] p-6 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-2 border-[#D4AF37]/70 animate-fade-in">
          
          {/* Ornate Gold Inner Filigree */}
          <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-dashed border-[#D4AF37]/40 pointer-events-none" />

          {/* Top Ceremony Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#801B31] text-[#F7E5A9] text-xs font-serif font-bold uppercase tracking-widest">
                Day {activeEvent.dayNumber}
              </span>
              <span className="text-xs md:text-sm font-sans font-semibold text-[#801B31]">
                {activeEvent.formattedDate}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs md:text-sm font-sans font-bold text-[#5D1022]">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>{activeEvent.time}</span>
            </div>
          </div>

          {/* Ceremony Title & Description */}
          <div className="py-6 space-y-3">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block">
              {activeEvent.subtitle}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#801B31]">
              {activeEvent.title}
            </h3>
            
            <p className="font-sans text-xs md:text-sm text-[#380813] leading-relaxed max-w-3xl">
              {activeEvent.description}
            </p>

            {/* Ritual Meaning Callout */}
            <div className="p-4 rounded-xl bg-[#801B31]/5 border border-[#801B31]/15 flex items-start gap-3 mt-4">
              <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <p className="font-sans text-xs text-[#5D1022] italic leading-relaxed">
                <strong className="font-serif font-semibold text-[#801B31] not-italic mr-1">Vedic Significance:</strong>
                {activeEvent.ritualSignificance}
              </p>
            </div>
          </div>

          {/* Venue & Hall Details */}
          <div className="my-6 p-4 rounded-xl bg-gradient-to-r from-[#FFFDF9] to-[#F7F2E8] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#801B31] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-bold text-[#801B31]">
                  {activeEvent.hall}
                </h4>
                <p className="font-sans text-xs text-[#4A0E1C]/80 mt-0.5">
                  {activeEvent.venue}, Lake Pichola, Udaipur
                </p>
              </div>
            </div>

            <a
              href={activeEvent.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-[#801B31] text-[#801B31] hover:bg-[#801B31] hover:text-[#FCFAF6] transition-all text-xs font-serif font-bold uppercase tracking-wider inline-flex items-center gap-1.5 flex-shrink-0"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Palace Directions</span>
            </a>
          </div>

          {/* Attire Guide & Color Palette Lookbook */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/30">
            <div className="mb-4">
              <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block">
                Imperial Dress Code & Color Palette
              </span>
              <h4 className="font-serif text-lg md:text-xl font-bold text-[#801B31] mt-0.5">
                {activeEvent.dressCode.title}
              </h4>
              <p className="text-xs text-[#5D1022] font-sans italic mt-0.5">
                {activeEvent.dressCode.subtitle}
              </p>
            </div>

            {/* Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
              {activeEvent.dressCode.colors.map((c, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl border border-black/10 bg-white/70 shadow-sm flex items-center gap-2.5"
                >
                  <div
                    className="w-6 h-6 rounded-full border border-black/20 shadow-inner flex-shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="overflow-hidden">
                    <span className="font-sans text-xs font-bold text-[#1A1615] block truncate">
                      {c.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#71717A] uppercase block">
                      {c.hex}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Fabrics and Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-[#801B31]/5 p-4 rounded-xl border border-[#801B31]/10 text-xs text-[#4A0E1C]">
              <div>
                <strong className="font-serif font-bold text-[#801B31] block mb-1">
                  Celebrated Fabrics:
                </strong>
                <p className="font-sans">
                  {activeEvent.dressCode.fabrics.join(' • ')}
                </p>
              </div>

              <div>
                <strong className="font-serif font-bold text-[#801B31] block mb-1">
                  Wardrobe Notes:
                </strong>
                <p className="font-sans leading-relaxed">
                  {activeEvent.dressCode.suggestions}
                </p>
              </div>
            </div>
          </div>

          {/* 1-Tap Calendar Buttons (Mobile Apple & Google Calendar) */}
          <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-end gap-3">
            <span className="text-xs text-[#9A7B38] font-sans font-medium mr-auto">
              Save this ceremony to your calendar:
            </span>

            <a
              href={generateGoogleCalendarUrl(activeEvent)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#801B31] text-[#FCFAF6] hover:bg-[#9E1B32] transition-colors text-xs font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Google Calendar</span>
            </a>

            <button
              type="button"
              onClick={() => downloadIcsFile(activeEvent)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-[#801B31] text-[#801B31] hover:bg-[#801B31]/10 transition-colors text-xs font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#801B31]" />
              <span>Apple / Outlook (.ics)</span>
            </button>
          </div>

        </div>
      )}
    </section>
  );
};
