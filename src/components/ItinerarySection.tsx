import React from "react";
import { motion } from "framer-motion";
import { WeddingEvent } from "../types/wedding";
import { generateGoogleCalendarUrl } from "../utils/calendar";
import { MapPin, Clock, Calendar } from "lucide-react";
import { GaneshaLogo } from "./GaneshaLogo";

export interface ItinerarySectionProps {
  events: WeddingEvent[];
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({
  events,
}) => {
  return (
    <section
      id="itinerary"
      className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-6xl mx-auto flex flex-col items-center justify-center px-4 py-20 md:py-28 overflow-hidden bg-[#FAFAFA]/35 backdrop-blur-[2px] sm:backdrop-blur-[12px] rounded-[2rem] border border-white/40 shadow-2xl"
    >
      <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-24 w-full flex flex-col items-center">
          <GaneshaLogo className="w-16 h-16 md:w-20 md:h-20 text-[#6B4C0A] mb-8" />
          <span className="text-xs sm:text-sm font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-bold mb-6">
            Auspicious Ceremonies
          </span>
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#1A1615] font-normal tracking-wide uppercase mb-10">
            The Itinerary
          </h2>
          <div className="w-12 h-[1px] bg-[#6B4C0A]"></div>
        </div>

        {/* Vertical Timeline - Desktop */}
        <div className="relative w-full hidden md:block mt-8">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#6B4C0A]/30 -translate-x-1/2" />

          <div className="flex flex-col gap-32 w-full">
            {events.map((evt, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`relative flex items-center justify-between w-full ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-3.5 h-3.5 rounded-full bg-[#1A1615] -translate-x-1/2 shadow-[0_0_0_8px_rgba(230,220,205,0.4)] z-10" />

                  {/* Text Content */}
                  <div className={`w-[45%] flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'}`}>
                    <div className="flex items-center gap-3 text-[#6B4C0A] font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4">
                      <span>Day {evt.dayNumber}</span>
                      <span className="opacity-50">|</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{evt.time}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-4xl lg:text-5xl text-[#1A1615] uppercase tracking-wide mb-3">
                      {evt.title}
                    </h3>
                    
                    <div className="font-serif italic text-sm lg:text-base text-[#1A1615]/70 mb-6">
                      {evt.formattedDate}
                    </div>

                    <p className="font-sans text-sm text-[#1A1615]/80 leading-[1.8] mb-8 max-w-sm">
                      {evt.description}
                    </p>

                    <div className={`flex flex-col gap-2 mb-8 ${isEven ? 'items-end' : 'items-start'}`}>
                      <span className="text-[#6B4C0A] text-[10px] font-bold tracking-[0.2em] uppercase">Venue</span>
                      <span className="font-serif text-xl lg:text-2xl text-[#1A1615] uppercase tracking-wide">{evt.hall || evt.venue}</span>
                      <div className={`flex items-center gap-1.5 text-xs font-sans text-[#1A1615]/80 mt-1`}>
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>

                    <a
                      href={generateGoogleCalendarUrl(evt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1615] border-b border-[#1A1615] pb-1 hover:text-[#6B4C0A] hover:border-[#6B4C0A] transition-colors w-fit`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Add to Calendar
                    </a>
                  </div>

                  {/* Image Content Placeholder (matching screenshot behavior) */}
                  <div className={`w-[45%] flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-full max-w-[500px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-sm relative">
                      <img 
                        src={`/images/events/${evt.id}.jpg`} 
                        alt={evt.title} 
                        className="w-full h-full object-cover bg-[#E5DCD3]/50 text-xs text-[#1A1615]/50 border border-[#1A1615]/5 rounded-[32px]"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline - Mobile */}
        <div className="w-full md:hidden flex flex-col gap-16 mt-8">
          {events.map((evt, index) => (
             <motion.div
             key={evt.id}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="flex flex-col items-center text-center w-full"
           >
             <div className="flex items-center gap-2 text-[#6B4C0A] font-sans text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                <span>Day {evt.dayNumber}</span>
                <span className="opacity-50">|</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{evt.time}</span>
                </div>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1615] uppercase tracking-wide mb-2">
                {evt.title}
              </h3>
              
              <div className="font-serif italic text-sm text-[#1A1615]/70 mb-6">
                {evt.formattedDate}
              </div>

              {/* Image Placeholder Mobile */}
              <div className="w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-sm mb-6 relative">
                <img 
                  src={`/images/events/${evt.id}.jpg`} 
                  alt={evt.title} 
                  className="w-full h-full object-cover bg-[#E5DCD3]/50 text-xs text-[#1A1615]/50 border border-[#1A1615]/5 rounded-3xl"
                />
              </div>

              <p className="font-sans text-sm text-[#1A1615]/80 leading-[1.8] mb-8 max-w-sm mx-auto">
                {evt.description}
              </p>

              <div className="flex flex-col items-center gap-2 mb-8">
                <span className="text-[#6B4C0A] text-[10px] font-bold tracking-[0.2em] uppercase">Venue</span>
                <span className="font-serif text-xl sm:text-2xl text-[#1A1615] uppercase tracking-wide">{evt.hall || evt.venue}</span>
                <div className="flex items-center gap-1.5 text-xs font-sans text-[#1A1615]/80 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{evt.venue}</span>
                </div>
              </div>

              <a
                href={generateGoogleCalendarUrl(evt)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1615] border-b border-[#1A1615] pb-1 hover:text-[#6B4C0A] hover:border-[#6B4C0A] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Add to Calendar
              </a>
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
