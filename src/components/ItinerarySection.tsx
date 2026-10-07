import React, { useState } from 'react';
import { WeddingEvent } from '../types/wedding';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { LordGanesh } from './LordGanesh';
import { Calendar, Clock, Download, ExternalLink, MapPin, Sparkles } from 'lucide-react';

export interface ItinerarySectionProps {
  events: WeddingEvent[];
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({ events }) => {
  const [selectedEventId, setSelectedEventId] = useState<string>(events[0]?.id || 'haldi');
  const activeEvent = events.find(e => e.id === selectedEventId) || events[0];

  return (
    <section id="itinerary" className="relative min-h-screen w-full flex flex-col justify-center px-4 py-20 md:py-32">
      
      {/* Full-Bleed Section Container */}
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header with Giant Typography */}
        <div className="text-center mb-16">
          <LordGanesh size={68} className="w-16 h-16 text-[#D4AF37] mx-auto mb-3 drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)]" />
          <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
            Auspicious Ceremonies & Revelry
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FFF1C5] mt-3 font-black tracking-wide gold-foil-text drop-shadow-lg">
            The Royal Itinerary
          </h2>
          <p className="text-sm md:text-base text-[#F7E5A9]/80 font-sans mt-4 max-w-xl mx-auto leading-relaxed">
            Three days of eternal Vedic rituals, imperial banquets, and celebration overlooking Lake Pichola.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Horizontal Event Tabs Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-12 justify-start md:justify-center px-2">
          {events.map((evt) => {
            const isSelected = evt.id === selectedEventId;
            return (
              <button
                key={evt.id}
                onClick={() => setSelectedEventId(evt.id)}
                className={`flex-shrink-0 px-6 py-3.5 rounded-full border transition-all text-xs sm:text-sm font-serif font-bold tracking-wider cursor-pointer whitespace-nowrap flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] border-[#FFF1C5] shadow-[0_4px_25px_rgba(212,175,55,0.5)] scale-105'
                    : 'bg-black/60 text-[#F7E5A9] border-[#D4AF37]/30 hover:border-[#D4AF37]/70 hover:bg-[#801B31]/40 backdrop-blur-md'
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

        {/* Active Ceremony Showcase (Full-Bleed Sheer Glass Frame) */}
        {activeEvent && (
          <div className="relative rounded-3xl bg-black/55 backdrop-blur-md text-[#FCFAF6] p-8 sm:p-14 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-[#D4AF37]/50 animate-fade-in">
            
            {/* Ornate Gold Filigree Inner Trim */}
            <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-dashed border-[#D4AF37]/30 pointer-events-none" />

            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#D4AF37]/30">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#801B31] border border-[#D4AF37]/60 text-[#F7E5A9] text-xs sm:text-sm font-serif font-bold uppercase tracking-widest">
                  Day {activeEvent.dayNumber}
                </span>
                <span className="text-sm sm:text-base font-sans font-bold text-[#F7E5A9]">
                  {activeEvent.formattedDate}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm sm:text-base font-sans font-bold text-[#D4AF37]">
                <Clock className="w-5 h-5" />
                <span>{activeEvent.time}</span>
              </div>
            </div>

            {/* Huge Ceremony Title & Description */}
            <div className="py-8 space-y-4">
              <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] text-[#D4AF37] font-bold block">
                {activeEvent.subtitle}
              </span>
              
              <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-[#FFF1C5] tracking-wide leading-tight gold-foil-text">
                {activeEvent.title}
              </h3>
              
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#FCFAF6]/90 leading-relaxed max-w-4xl">
                {activeEvent.description}
              </p>

              {/* Vedic Significance Callout */}
              <div className="p-5 rounded-2xl bg-[#801B31]/30 border border-[#D4AF37]/40 flex items-start gap-4 mt-6">
                <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-[#F7E5A9] italic leading-relaxed">
                  <strong className="font-serif font-bold text-[#FFF1C5] not-italic mr-1.5">Vedic Significance:</strong>
                  {activeEvent.ritualSignificance}
                </p>
              </div>
            </div>

            {/* Venue & Hall Details */}
            <div className="my-8 p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFF1C5]">
                    {activeEvent.hall}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#FCFAF6]/80 mt-1">
                    {activeEvent.venue}, Lake Pichola, Udaipur
                  </p>
                </div>
              </div>

              <a
                href={activeEvent.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border-2 border-[#D4AF37] text-[#F7E5A9] hover:bg-[#D4AF37] hover:text-[#1A1615] transition-all text-xs sm:text-sm font-serif font-bold uppercase tracking-wider inline-flex items-center gap-2 flex-shrink-0"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Palace Directions</span>
              </a>
            </div>

            {/* Attire Guide & Swatches */}
            <div className="mt-10 pt-8 border-t border-[#D4AF37]/30">
              <div className="mb-6">
                <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  Imperial Dress Code
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF1C5] mt-1">
                  {activeEvent.dressCode.title}
                </h4>
                <p className="text-sm text-[#F7E5A9]/80 font-sans italic mt-1">
                  {activeEvent.dressCode.subtitle}
                </p>
              </div>

              {/* Swatches */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                {activeEvent.dressCode.colors.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-white/10 bg-black/50 shadow-md flex items-center gap-3"
                  >
                    <div
                      className="w-7 h-7 rounded-full border-2 border-white/30 shadow-inner flex-shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="overflow-hidden">
                      <span className="font-sans text-xs sm:text-sm font-bold text-[#FCFAF6] block truncate">
                        {c.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#D4AF37] uppercase block">
                        {c.hex}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fabrics & Suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/40 p-6 rounded-2xl border border-[#D4AF37]/30 text-xs sm:text-sm text-[#FCFAF6]/90">
                <div>
                  <strong className="font-serif font-bold text-[#D4AF37] block mb-1 text-sm">
                    Celebrated Fabrics:
                  </strong>
                  <p className="font-sans">
                    {activeEvent.dressCode.fabrics.join(' • ')}
                  </p>
                </div>

                <div>
                  <strong className="font-serif font-bold text-[#D4AF37] block mb-1 text-sm">
                    Wardrobe Guidance:
                  </strong>
                  <p className="font-sans leading-relaxed">
                    {activeEvent.dressCode.suggestions}
                  </p>
                </div>
              </div>
            </div>

            {/* 1-Tap Calendar Actions */}
            <div className="mt-10 pt-8 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-end gap-4">
              <span className="text-sm text-[#F7E5A9]/80 font-sans font-medium mr-auto">
                Save ceremony to your phone:
              </span>

              <a
                href={generateGoogleCalendarUrl(activeEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#801B31] border border-[#D4AF37] text-[#FCFAF6] hover:bg-[#9E1B32] transition-colors text-xs sm:text-sm font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Google Calendar</span>
              </a>

              <button
                type="button"
                onClick={() => downloadIcsFile(activeEvent)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-black/60 border border-[#D4AF37] text-[#F7E5A9] hover:bg-[#D4AF37]/20 transition-colors text-xs sm:text-sm font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Apple / Outlook (.ics)</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
