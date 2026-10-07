import React, { useState } from 'react';
import { VenueInfo } from '../types/wedding';
import { LordGanesh } from './LordGanesh';
import { Anchor, Car, ExternalLink, MapPin, Plane, SunDim } from 'lucide-react';

export interface PalaceConciergeProps {
  venue: VenueInfo;
}

export const PalaceConcierge: React.FC<PalaceConciergeProps> = ({ venue }) => {
  const [activeTab, setActiveTab] = useState<'venue' | 'transit' | 'stay' | 'weather'>('venue');

  return (
    <section id="venue" className="relative min-h-screen w-full flex flex-col justify-center px-4 py-20 md:py-32">
      
      {/* Full-Bleed Section Container */}
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header with Giant Typography */}
        <div className="text-center mb-16">
          <LordGanesh size={68} className="w-16 h-16 text-[#D4AF37] mx-auto mb-3 drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)]" />
          <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
            Destination & Travel Guide
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FFF1C5] mt-3 font-black tracking-wide gold-foil-text drop-shadow-lg">
            Palace Concierge
          </h2>
          <p className="text-sm md:text-base text-[#F7E5A9]/80 font-sans mt-4 max-w-xl mx-auto leading-relaxed">
            Everything for seamless arrivals, private boat crossings across Lake Pichola, and royal stays.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'venue', label: 'The Palaces', icon: MapPin },
            { id: 'transit', label: 'Boat Transfers', icon: Anchor },
            { id: 'stay', label: 'Flights & Transit', icon: Plane },
            { id: 'weather', label: 'Weather & Notes', icon: SunDim },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-6 py-3.5 rounded-full border transition-all text-xs sm:text-sm font-serif font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] border-[#FFF1C5] shadow-[0_4px_25px_rgba(212,175,55,0.5)] scale-105'
                    : 'bg-black/60 text-[#F7E5A9] border-[#D4AF37]/30 hover:border-[#D4AF37]/70 backdrop-blur-md'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Full-Bleed Sheer Glass Concierge Container */}
        <div className="relative rounded-3xl bg-black/55 backdrop-blur-md text-[#FCFAF6] p-8 sm:p-14 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-[#D4AF37]/50">
          
          {/* Tab 1: The Palaces */}
          {activeTab === 'venue' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  Heritage Destination
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-black text-[#FFF1C5] mt-1 tracking-wide">
                  {venue.name}
                </h3>
                <p className="text-sm font-sans font-semibold text-[#D4AF37] mt-1">
                  {venue.palaceComplex}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base md:text-lg text-[#FCFAF6]/90 leading-relaxed max-w-4xl">
                Situated in the sacred waters of Lake Pichola against the backdrop of the Aravalli hills, Jagmandir Island Palace—also revered as the &lsquo;Lake Garden Palace&rsquo;—dates back to the 17th century. It stands today as one of the world&rsquo;s most breathtaking royal wedding locations.
              </p>

              <div className="p-5 rounded-2xl bg-black/40 border border-[#D4AF37]/30 text-xs sm:text-sm text-[#FCFAF6]/90 space-y-1">
                <strong className="font-serif font-bold text-[#D4AF37] block text-sm">
                  Official Venue Address:
                </strong>
                <p>{venue.address}</p>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/50 aspect-[16/9] w-full shadow-2xl">
                <iframe
                  title="Palace Venue Map"
                  src={venue.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          )}

          {/* Tab 2: Boat Transfers */}
          {activeTab === 'transit' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  Private Water Transit
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-black text-[#FFF1C5] mt-1 tracking-wide">
                  {venue.boatJetty.name}
                </h3>
                <p className="text-sm font-sans font-semibold text-[#D4AF37] mt-1">
                  Ceremonial Lake Catamarans & Solar Boats
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base md:text-lg text-[#FCFAF6]/90 leading-relaxed max-w-4xl">
                {venue.arrivalGuide}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/30 text-xs sm:text-sm text-[#FCFAF6]/90">
                  <strong className="font-serif font-bold text-[#D4AF37] block mb-2 text-base">
                    Valet & Welcome:
                  </strong>
                  <p className="leading-relaxed">
                    Cars should navigate directly to the City Palace Bansi Ghat entrance. Royal valet and luggage escorts will receive you upon arrival.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/30 text-xs sm:text-sm text-[#FCFAF6]/90">
                  <strong className="font-serif font-bold text-[#D4AF37] block mb-2 text-base">
                    Shuttle Frequency:
                  </strong>
                  <p className="leading-relaxed">
                    Catamaran yachts depart continuously every 15 minutes. The crossing takes approximately 7 to 10 minutes with stunning views.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Flights & Transit */}
          {activeTab === 'stay' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  Airports & Ground Transport
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-black text-[#FFF1C5] mt-1 tracking-wide">
                  {venue.airport.name} ({venue.airport.code})
                </h3>
                <p className="text-sm font-sans font-semibold text-[#D4AF37] mt-1">
                  Daily Non-Stop Flights from Delhi, Mumbai, Bengaluru, and Jaipur
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/40 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-serif font-bold mb-2 text-base">
                    <Plane className="w-5 h-5" />
                    <span>Airport Distance:</span>
                  </div>
                  <p className="text-[#FFF1C5] font-bold text-lg">
                    {venue.airport.distanceKm} km to Lake Pichola
                  </p>
                  <p className="text-[#FCFAF6]/70 mt-1">
                    {venue.airport.travelTime}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/40 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-serif font-bold mb-2 text-base">
                    <Car className="w-5 h-5" />
                    <span>Concierge Chauffeur Shuttles:</span>
                  </div>
                  <p className="text-[#FFF1C5] font-bold text-lg">
                    Private Palace Escorts Assigned
                  </p>
                  <p className="text-[#FCFAF6]/70 mt-1">
                    Please provide flight numbers in your RSVP to coordinate pickups.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Weather & Notes */}
          {activeTab === 'weather' && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  Climate & Footwear Advisory
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl font-black text-[#FFF1C5] mt-1 tracking-wide">
                  Lakeside Comfort
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base md:text-lg text-[#FCFAF6]/90 leading-relaxed max-w-4xl">
                {venue.weatherAdvice}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/30 text-center">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FFF1C5] block">
                    26°C / 78°F
                  </span>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold mt-2 block">
                    Afternoon Warmth
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/30 text-center">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#FFF1C5] block">
                    14°C / 57°F
                  </span>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold mt-2 block">
                    Evening Breezes
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/30 text-center">
                  <span className="text-xl sm:text-2xl font-serif font-bold text-[#FFF1C5] block mt-1">
                    Heritage Marble
                  </span>
                  <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] font-semibold mt-2 block">
                    Block Heels & Juttis Suggested
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Direct Navigation Button */}
          <div className="mt-12 pt-8 border-t border-[#D4AF37]/30 flex justify-end">
            <a
              href="https://maps.google.com/?q=Jagmandir+Island+Palace+Lake+Pichola+Udaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#801B31] border border-[#D4AF37] text-[#FCFAF6] hover:bg-[#9E1B32] transition-colors text-xs sm:text-sm font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2.5 shadow-lg"
            >
              <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
              <span>Open in Google Maps / Apple Maps</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
