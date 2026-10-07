import React, { useState } from 'react';
import { VenueInfo } from '../types/wedding';
import { Anchor, Car, ExternalLink, MapPin, Plane, SunDim } from 'lucide-react';

export interface PalaceConciergeProps {
  venue: VenueInfo;
}

export const PalaceConcierge: React.FC<PalaceConciergeProps> = ({ venue }) => {
  const [activeTab, setActiveTab] = useState<'venue' | 'transit' | 'stay' | 'weather'>('venue');

  return (
    <section id="venue" className="relative w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
          Destination & Travel Guide
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#FCFAF6] mt-2 font-bold tracking-wide">
          Palace Concierge
        </h2>
        <p className="text-xs md:text-sm text-[#F7E5A9]/80 font-sans mt-3 max-w-lg mx-auto">
          Everything our honoured guests need for seamless arrivals, private boat crossings, and pleasant royal stays in Udaipur.
        </p>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
      </div>

      {/* Tab Navigation Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
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
              className={`px-4 md:px-6 py-2.5 rounded-full border transition-all text-xs md:text-sm font-serif font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] border-[#FFF1C5] shadow-[0_4px_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#1A050B]/60 text-[#F7E5A9] border-[#D4AF37]/30 hover:border-[#D4AF37]/60 backdrop-blur-sm'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Concierge Content Card */}
      <div className="relative rounded-3xl bg-[#FCFAF6] text-[#1A1615] p-6 sm:p-10 md:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-2 border-[#D4AF37]/70">
        
        {/* Tab 1: The Palaces */}
        {activeTab === 'venue' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block">
                Heritage Destination
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#801B31] mt-1">
                {venue.name}
              </h3>
              <p className="text-xs text-[#5D1022] font-sans font-semibold mt-0.5">
                {venue.palaceComplex}
              </p>
            </div>

            <p className="font-sans text-xs md:text-sm text-[#4A0E1C] leading-relaxed">
              Situated in the majestic waters of Lake Pichola against the backdrop of the Aravalli hills, Jagmandir Island Palace—also revered as the &lsquo;Lake Garden Palace&rsquo;—dates back to the 17th century. It served as an inspiration for the Taj Mahal and stands today as one of the world&rsquo;s most breathtaking royal wedding locations.
            </p>

            <div className="p-4 rounded-xl bg-[#801B31]/5 border border-[#801B31]/15 text-xs text-[#4A0E1C] space-y-1">
              <strong className="font-serif font-bold text-[#801B31] block">
                Official Address:
              </strong>
              <p>{venue.address}</p>
            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 aspect-[16/9] w-full shadow-md">
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
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block">
                Private Water Transit
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#801B31] mt-1">
                {venue.boatJetty.name}
              </h3>
              <p className="text-xs text-[#5D1022] font-sans font-semibold mt-0.5">
                Ceremonial Lake Catamarans & Solar Boats
              </p>
            </div>

            <p className="font-sans text-xs md:text-sm text-[#4A0E1C] leading-relaxed">
              {venue.arrivalGuide}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#801B31]/5 border border-[#801B31]/10 text-xs text-[#4A0E1C]">
                <strong className="font-serif font-bold text-[#801B31] block mb-1">
                  Valet & Concierge Welcome:
                </strong>
                <p>
                  Chauffeured cars and guest taxis should navigate directly to the City Palace Bansi Ghat entrance. Royal valet and luggage escorts will receive you upon arrival.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#801B31]/5 border border-[#801B31]/10 text-xs text-[#4A0E1C]">
                <strong className="font-serif font-bold text-[#801B31] block mb-1">
                  Shuttle Frequency:
                </strong>
                <p>
                  Boats depart continuously every 15 minutes across Lake Pichola. The crossing takes approximately 7 to 10 minutes, offering majestic photo vistas of the City Palace.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Flights & Transit */}
        {activeTab === 'stay' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block">
                Airports & Ground Transport
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#801B31] mt-1">
                {venue.airport.name} ({venue.airport.code})
              </h3>
              <p className="text-xs text-[#5D1022] font-sans font-semibold mt-0.5">
                Convenient Connections via Mumbai, Delhi, Bengaluru & Jaipur
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#FFFDF9] to-[#F7F2E8] border border-[#D4AF37]/50 text-xs">
                <div className="flex items-center gap-2 text-[#801B31] font-serif font-bold mb-1">
                  <Plane className="w-4 h-4 text-[#D4AF37]" />
                  <span>Airport Distance:</span>
                </div>
                <p className="text-[#1A1615] font-semibold text-sm">
                  {venue.airport.distanceKm} km from Lake Pichola
                </p>
                <p className="text-[#71717A] mt-1">
                  {venue.airport.travelTime}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#FFFDF9] to-[#F7F2E8] border border-[#D4AF37]/50 text-xs">
                <div className="flex items-center gap-2 text-[#801B31] font-serif font-bold mb-1">
                  <Car className="w-4 h-4 text-[#D4AF37]" />
                  <span>Concierge Airport Shuttles:</span>
                </div>
                <p className="text-[#1A1615] font-semibold text-sm">
                  Palace Chauffeurs Assigned Per Flight
                </p>
                <p className="text-[#71717A] mt-1">
                  Please share your flight arrival details in your RSVP response.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Weather & Notes */}
        {activeTab === 'weather' && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-[10px] md:text-[11px] font-sans uppercase tracking-[0.25em] text-[#9A7B38] font-bold block">
                Comfort & Climate
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#801B31] mt-1">
                Lakeside Weather & Footwear Guide
              </h3>
            </div>

            <p className="font-sans text-xs md:text-sm text-[#4A0E1C] leading-relaxed">
              {venue.weatherAdvice}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#801B31]/5 border border-[#801B31]/10 text-center">
                <span className="text-xl md:text-2xl font-serif font-bold text-[#801B31] block">
                  26°C / 78°F
                </span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#71717A] font-semibold mt-1 block">
                  Afternoon Highs
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#801B31]/5 border border-[#801B31]/10 text-center">
                <span className="text-xl md:text-2xl font-serif font-bold text-[#801B31] block">
                  14°C / 57°F
                </span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#71717A] font-semibold mt-1 block">
                  Evening Lake Breezes
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#801B31]/5 border border-[#801B31]/10 text-center">
                <span className="text-base font-serif font-bold text-[#801B31] block mt-1">
                  Cobblestone & Marble
                </span>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#71717A] font-semibold mt-1 block">
                  Comfortable Block Heels / Juttis
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Direct Google Maps Action Button */}
        <div className="mt-8 pt-6 border-t border-[#D4AF37]/30 flex justify-end">
          <a
            href="https://maps.google.com/?q=Jagmandir+Island+Palace+Lake+Pichola+Udaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#801B31] text-[#FCFAF6] hover:bg-[#9E1B32] transition-colors text-xs font-serif font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Open in Google Maps / Apple Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
};
