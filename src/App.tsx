import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from './config/weddingData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { GuestBlessing } from './types/wedding';

import { BackgroundVideo } from './components/BackgroundVideo';
import { WaxSealEnvelope } from './components/WaxSealEnvelope';
import { InvitationHero } from './components/InvitationHero';
import { CoupleIntro } from './components/CoupleIntro';
import { ItinerarySection } from './components/ItinerarySection';
import { PalaceConcierge } from './components/PalaceConcierge';
import { GallerySection } from './components/GallerySection';
import { BlessingWall } from './components/BlessingWall';

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

  // Force scroll to top on every refresh and disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);
    
  // Persistent Blessings in localStorage
    const [blessings, setBlessings] = useLocalStorage<GuestBlessing[]>('royal_wedding_blessings', INITIAL_BLESSINGS);

    const handleAddBlessing = (newBlessing: GuestBlessing) => {
    setBlessings(prev => [newBlessing, ...prev]);
  };

  return (
    <div className="min-h-[100dvh] bg-transparent text-[#1A1A1A] font-sans antialiased relative selection:bg-[#D4AF37] selection:text-[#FAFAFA]">
      
      {/* 1. Customizable Background Video Layer with Fallbacks */}
      <BackgroundVideo
        videoSrc={WEDDING_DATA.backgroundVideoUrl}
        posterSrc={WEDDING_DATA.backgroundFallbackPoster}
        overlayOpacity="bg-white/40 backdrop-blur-sm"
      />

      {/* The Envelope Layer (Full Screen overlay, unmounts itself when opened) */}
      <WaxSealEnvelope
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Main Content Choreography (Always renders underneath, ready when envelope fades) */}
      <main className="relative z-20 pt-4 pb-28 md:pb-20 space-y-0 md:space-y-6">
        
        {/* Primary Invitation Letter & Countdown Timer */}
        <InvitationHero
          weddingData={WEDDING_DATA}
          onReplayEnvelope={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsEnvelopeOpen(false);
          }}
        />

        {/* Sacred Shloka & Royal Couple Story */}
        <CoupleIntro
          groom={WEDDING_DATA.groom}
          bride={WEDDING_DATA.bride}
        />
        
        {/* Memories & Gallery */}
        <GallerySection />

        {/* Multi-Day Royal Itinerary & Attire Lookbook */}
        <ItinerarySection
          events={WEDDING_DATA.events}
        />

        {/* Palace Concierge & Lake Pichola Travel Guide */}
        <PalaceConcierge
          weddingData={WEDDING_DATA}
        />

        {/* Live Blessing Wall & Guestbook */}
        <BlessingWall
          blessings={blessings}
          onAddBlessing={handleAddBlessing}
        />

      </main>

      {/* Grand Footer */}
      <footer className="relative z-20 bg-[#1A1615] text-[#FAFAFA] py-24 px-4 text-center mt-32">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <span className="font-serif italic text-2xl text-[#D4AF37] mb-8 font-medium">
            With Love & Blessings
          </span>

          <h2 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Aarav & Ananya
          </h2>

          <div className="w-24 h-[1px] bg-[#D4AF37]/40 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 text-sm md:text-base font-sans tracking-widest uppercase text-[#FAFAFA]/70">
            <div className="flex flex-col space-y-2">
              <span className="text-[#D4AF37] font-serif italic normal-case text-xl mb-3">The Groom's Family</span>
              <span>Shri Vikramaditya Singh</span>
              <span>Shrimati Gayatri Devi</span>
              <span>House of Mewar</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-[#D4AF37] font-serif italic normal-case text-xl mb-3">The Bride's Family</span>
              <span>Shri Digvijay Singh Rathore</span>
              <span>Shrimati Radhika Devi</span>
              <span>House of Jaipur</span>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center opacity-50">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase">
              November 26-28, 2026 • Udaipur, Rajasthan
            </p>
          </div>
        </div>
      </footer></div>);}