import React from "react";
import { motion } from "framer-motion";
import { WeddingEvent } from "../types/wedding";
import { generateGoogleCalendarUrl } from "../utils/calendar";
import { MapPin, Clock } from "lucide-react";
import { OrnamentDivider } from "./OrnamentDivider";

export interface ItinerarySectionProps {
  events: WeddingEvent[];
}

export const ItinerarySection: React.FC<ItinerarySectionProps> = ({
  events,
}) => {
  return (
    <section
      id="itinerary"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 md:py-16 overflow-hidden bg-transparent"
    >
      {/* Procedural Botanicals */}

      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 w-full flex flex-col items-center">
          <span className="text-xs sm:text-sm font-bold font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-semibold mb-6">
            Auspicious Ceremonies
          </span>
          <OrnamentDivider width={200} className="mb-8" />
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#1A1615] font-normal tracking-tight">
            Aarav <span className="text-[#6B4C0A] italic">&</span> Ananya
            <span className="block text-2xl sm:text-3xl text-[#1A1615]/70 mt-4 italic font-medium">
              The Wedding Itinerary
            </span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#1A1615]/20 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 w-full">
            {events.map((evt, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 md:gap-0 w-full`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#1A1615] -translate-x-[5.5px] md:-translate-x-[6px] mt-2 shadow-[0_0_0_6px_rgba(26,22,21,0.1)]" />

                  {/* Content (No Cards, Frameless) */}
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 flex flex-col ${
                      isEven
                        ? "md:pr-16 md:items-end md:text-right"
                        : "md:pl-16 md:items-start md:text-left"
                    }`}
                  >
                    <div className="flex items-center gap-4 text-[#6B4C0A] font-sans text-xs sm:text-sm font-bold font-semibold tracking-[0.3em] uppercase mb-4">
                      <span>Day {evt.dayNumber}</span>
                      <span className="w-1 h-1 rounded-full bg-[#6B4C0A]/40" />
                      <span>{evt.formattedDate}</span>
                    </div>

                    <h3 className="font-serif text-4xl sm:text-5xl text-[#1A1615] font-medium tracking-tight mb-6">
                      {evt.title}
                    </h3>

                    <p className="font-serif text-sm sm:text-base text-[#1A1615]/80 leading-[2.2] font-medium mb-8 max-w-sm">
                      {evt.description}
                    </p>

                    <div
                      className={`flex flex-col gap-4 text-xs font-sans tracking-widest uppercase text-[#1A1615]/70 mb-8 ${
                        isEven ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-3.5 h-3.5 text-[#6B4C0A]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-3.5 h-3.5 text-[#6B4C0A]" />
                        <span>{evt.venue}</span>
                      </div>
                    </div>

                    <a
                      href={generateGoogleCalendarUrl(evt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 border border-[#1A1615]/30 text-[#1A1615] hover:bg-[#1A1615] hover:text-[#FAFAFA] transition-colors duration-300 font-sans text-[9px] uppercase tracking-[0.2em]"
                    >
                      Save to Calendar
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
