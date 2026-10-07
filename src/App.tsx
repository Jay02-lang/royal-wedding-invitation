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
    relation: 'Family Elders & Well-wishers',
    message: 'Heartiest congratulations to our dearest Aarav and Ananya! May your Vedic vows around the sacred Agni bring eternal joy and prosperity across generations.',
    timestamp: 'Oct 05, 2026'
  },
  {
    id: 'blessing-3',
    authorName: 'Raghav & Natasha',
    relation: 'Oxford Alumni Batchmates',
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
        density={isEnvelopeOpen ? 'normal' : 'normal'}
      />

      {/* 3. Responsive Royal Navigation Bar (Top bar + Mobile sticky bottom bar) */}
      <NavigationBar
        coupleMonogram={WEDDING_DATA.coupleMonogram}
        onOpenRSVP={() => setIsRsvpOpen(true)}
      />

      {/* Main Content Choreography */}
      <main className="relative z-20 pt-20 pb-28 md:pb-20">
        
        {/* State A: Closed Envelope View (The Interactive Unboxing Ceremony) */}
        {!isEnvelopeOpen ? (
          <div className="min-h-[85vh] flex flex-col items-center justify-center py-8">
            <WaxSealEnvelope
              isOpen={false}
              onOpen={() => setIsEnvelopeOpen(true)}
              coupleMonogram={WEDDING_DATA.coupleMonogram}
              guestName="Honoured Guest"
            />
          </div>
        ) : (
          /* State B: Unveiled Royal Celebration Experience */
          <div className="space-y-12 animate-fade-in">
            
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

            {/* Digital RSVP Callout Banner */}
            <section className="max-w-4xl mx-auto px-4 my-16 text-center">
              <div className="rounded-3xl bg-gradient-to-r from-[#4A0E1C] via-[#801B31] to-[#3B0914] p-8 md:p-12 border-2 border-[#D4AF37]/60 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
                <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                <h3 className="font-serif text-2xl md:text-4xl font-bold text-[#F7E5A9] tracking-wide">
                  Honour Us With Your Gracious Presence
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#FCFAF6]/80 mt-2 max-w-xl mx-auto leading-relaxed">
                  Kindly confirm your attendance, event preferences, and travel timings to assist our royal hospitality concierge.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setIsRsvpOpen(true)}
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-sm font-bold uppercase tracking-widest shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-current text-[#801B31]" />
                    <span>Confirm Your Royal RSVP</span>
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
      <footer className="relative z-20 border-t border-[#D4AF37]/30 bg-[#120407]/90 py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] bg-[#801B31] text-[#F7E5A9] font-serif text-sm font-bold shadow-sm">
            {WEDDING_DATA.coupleMonogram}
          </div>

          <p className="font-serif text-sm text-[#F7E5A9] font-bold tracking-widest">
            Aarav & Ananya
          </p>

          <p className="font-serif text-xs text-[#D4AF37]/80 italic max-w-lg mx-auto">
            &ldquo;मङ्गलं भगवान् विष्णुर्मङ्गलं गरुडध्वजः।<br />
            मङ्गलं पुण्डरीकाक्षो मङ्गलायतनो हरिः॥&rdquo;
          </p>

          <p className="font-sans text-[11px] text-[#FCFAF6]/50 tracking-wider pt-2">
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
