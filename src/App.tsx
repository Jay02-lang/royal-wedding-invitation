import React, { useState } from 'react';
import { WEDDING_DATA } from './config/weddingData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { RSVPSubmission, GuestBlessing } from './types/wedding';

import { BackgroundVideo } from './components/BackgroundVideo';
import { PetalCanvas } from './components/PetalCanvas';
import { NavigationBar } from './components/NavigationBar';
import { WaxSealEnvelope } from './components/WaxSealEnvelope';
import { InvitationHero } from './components/InvitationHero';
import { CoupleStory } from './components/CoupleStory';
import { ItinerarySection } from './components/ItinerarySection';
import { PalaceConcierge } from './components/PalaceConcierge';
import { BlessingWall } from './components/BlessingWall';
import { RSVPModal } from './components/RSVPModal';
import { LordGanesh } from './components/LordGanesh';
import { Heart, Sparkles } from 'lucide-react';

const INITIAL_BLESSINGS: GuestBlessing[] = [
  {
    id: 'blessing-1',
    authorName: 'Yuvraj Vikram & Princess Meera',
    relation: 'Royal House of Jodhpur',
    message: 'May the timeless heritage of Mewar and Jaipur illuminate your sacred union. Wishing Aarav and Ananya a lifetime of cosmic harmony, boundless laughter, and shared glory.',
    timestamp: 'Oct 04, 2026'
  },
  {
    id: 'blessing-2',
    authorName: 'Dr. Siddharth & Dr. Sunita Singhania',
    relation: 'Family Elders',
    message: 'Heartiest congratulations to our dearest Aarav and Ananya! May your Vedic vows around the sacred Agni bring eternal joy and prosperity across generations.',
    timestamp: 'Oct 05, 2026'
  },
  {
    id: 'blessing-3',
    authorName: 'Raghav & Natasha',
    relation: 'Oxford Classmates',
    message: 'From college debates in England to this imperial palace wedding in Udaipur! We cannot wait to dance at the Sangeet. All our love to you both!',
    timestamp: 'Oct 06, 2026'
  }
];

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  
  // Persistent RSVPs and Blessings in localStorage
  const [rsvps, setRsvps] = useLocalStorage<RSVPSubmission[]>('royal_wedding_rsvps', []);
  const [blessings, setBlessings] = useLocalStorage<GuestBlessing[]>('royal_wedding_blessings', INITIAL_BLESSINGS);

  const handleRsvpSubmit = (newRsvp: RSVPSubmission) => {
    setRsvps(prev => [newRsvp, ...prev]);
  };

  const handleAddBlessing = (newBlessing: GuestBlessing) => {
    setBlessings(prev => [newBlessing, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#120407] text-[#FCFAF6] font-sans antialiased relative selection:bg-[#D4AF37] selection:text-[#120407]">
      
      {/* 1. Customizable Background Video Layer with Fallbacks */}
      <BackgroundVideo
        videoSrc={WEDDING_DATA.backgroundVideoUrl}
        posterSrc={WEDDING_DATA.backgroundFallbackPoster}
        overlayOpacity="bg-black/50"
      />

      {/* 2. High-Performance Falling Petal Canvas (Marigold & Kashmiri Rose) */}
      <PetalCanvas
        active={true}
        density="normal"
      />

      {/* 3. Responsive Royal Navigation Bar */}
      <NavigationBar
        coupleMonogram={WEDDING_DATA.coupleMonogram}
        onOpenRSVP={() => setIsRsvpOpen(true)}
      />

      {/* Main Content Choreography */}
      <main className="relative z-20 pt-16 pb-28 md:pb-20">
        
        {/* State A: Closed Envelope View (The Interactive Unboxing Ceremony) */}
        {!isEnvelopeOpen ? (
          <div className="min-h-[90vh] flex flex-col items-center justify-center py-12 px-4">
            <WaxSealEnvelope
              isOpen={false}
              onOpen={() => setIsEnvelopeOpen(true)}
              coupleMonogram={WEDDING_DATA.coupleMonogram}
            />
          </div>
        ) : (
          /* State B: Unveiled Royal Celebration Experience (Full-Bleed Sheer Sections) */
          <div className="space-y-16 animate-fade-in">
            
            {/* Primary Invitation Letter & Countdown Timer */}
            <InvitationHero
              weddingData={WEDDING_DATA}
              onOpenRSVP={() => setIsRsvpOpen(true)}
              onReplayEnvelope={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsEnvelopeOpen(false);
              }}
            />

            {/* Sacred Shloka & Royal Couple Story */}
            <CoupleStory
              groom={WEDDING_DATA.groom}
              bride={WEDDING_DATA.bride}
              shloka={WEDDING_DATA.shloka}
            />

            {/* Multi-Day Royal Itinerary & Attire Lookbook */}
            <ItinerarySection
              events={WEDDING_DATA.events}
            />

            {/* Palace Concierge & Lake Pichola Travel Guide */}
            <PalaceConcierge
              venue={WEDDING_DATA.venue}
            />

            {/* Full-Bleed Digital RSVP Callout Banner */}
            <section className="max-w-5xl mx-auto px-4 my-20 text-center">
              <div className="rounded-3xl bg-black/60 backdrop-blur-md p-10 sm:p-16 border border-[#D4AF37]/60 shadow-[0_25px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
                <LordGanesh size={84} className="w-20 h-20 text-[#D4AF37] mx-auto mb-4 drop-shadow-[0_4px_16px_rgba(212,175,55,0.6)]" />
                
                <span className="text-xs sm:text-sm font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-bold block mb-2">
                  ॥ श्री गणेशाय नमः ॥
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#FFF1C5] tracking-wide gold-foil-text drop-shadow-md">
                  Honour Us With Your Presence
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#FCFAF6]/90 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Kindly confirm your attendance and ceremony preferences to assist our royal hospitality concierge at Lake Pichola.
                </p>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setIsRsvpOpen(true)}
                    className="px-12 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-sm sm:text-base font-bold uppercase tracking-widest shadow-[0_6px_30px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_40px_rgba(212,175,55,0.7)] hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2.5"
                  >
                    <Heart className="w-5 h-5 fill-current text-[#801B31]" />
                    <span>Confirm Royal RSVP</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Live Blessing Wall & Guestbook */}
            <BlessingWall
              blessings={blessings}
              onAddBlessing={handleAddBlessing}
              rsvps={rsvps}
            />

          </div>
        )}

      </main>

      {/* Royal Footer */}
      <footer className="relative z-20 border-t border-[#D4AF37]/30 bg-black/85 backdrop-blur-md py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <LordGanesh size={54} className="w-14 h-14 text-[#D4AF37] mx-auto mb-2" />

          <p className="font-serif text-lg text-[#FFF1C5] font-bold tracking-widest">
            Aarav & Ananya
          </p>

          <p className="font-serif text-xs sm:text-sm text-[#D4AF37] italic max-w-lg mx-auto leading-relaxed">
            &ldquo;मङ्गलं भगवान् विष्णुर्मङ्गलं गरुडध्वजः।<br />
            मङ्गलं पुण्डरीकाक्षो मङ्गलायतनो हरिः॥&rdquo;
          </p>

          <p className="font-sans text-xs text-[#FCFAF6]/60 tracking-wider pt-3">
            November 26–28, 2026 • The Historic Palaces of Lake Pichola, Udaipur, Rajasthan
          </p>
        </div>
      </footer>

      {/* Interactive RSVP Modal Dialog */}
      <RSVPModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        events={WEDDING_DATA.events}
        onSubmitted={handleRsvpSubmit}
      />

    </div>
  );
}
