import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
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
import { LordGaneshArt } from './components/LordGaneshArt';
import { CodeFloralPattern } from './components/CodeFloralPattern';
import { WildflowerBirds } from './components/WildflowerBirds';
import { BackgroundMusic } from './components/BackgroundMusic';

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
    
    // Initialize Smooth Scrolling (Lenis)
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Effortless exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    return () => {
      lenis.destroy();
    };
  }, []);
    
  // Persistent Blessings in localStorage
    const [blessings, setBlessings] = useLocalStorage<GuestBlessing[]>('royal_wedding_blessings', INITIAL_BLESSINGS);

    const handleAddBlessing = (newBlessing: GuestBlessing) => {
    setBlessings(prev => [newBlessing, ...prev]);
  };

  return (
    <div className="min-h-[100dvh] bg-transparent text-[#1A1A1A] font-sans antialiased relative selection:bg-[#D4AF37] selection:text-[#FAFAFA]">
      
      <BackgroundMusic isPlaying={isEnvelopeOpen} />
      
      {/* 1. Customizable Background Video Layer with Fallbacks */}
      <BackgroundVideo
        videoSrc={WEDDING_DATA.backgroundVideoUrl}
        posterSrc={WEDDING_DATA.backgroundFallbackPoster}
        overlayOpacity="bg-white/15"
      />

      {/* The Envelope Layer (Full Screen overlay, unmounts itself when opened) */}
      <WaxSealEnvelope
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Main Content Choreography (Always renders underneath, ready when envelope fades) */}
      <main className="relative z-20 pt-6 pb-28 md:pb-20 space-y-8 md:space-y-16">


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
      <footer className="relative z-20 bg-[#1A1615] text-[#FAFAFA] py-32 px-4 text-center mt-16 overflow-hidden">
        {/* Floral Background for Footer (Covers full height left and right) */}
        <div className="absolute inset-0 pointer-events-none text-[#C5A059] opacity-[0.09]">
          <div className="absolute top-0 bottom-0 left-0 w-[45vw] sm:w-[40vw] max-w-[420px]">
            <CodeFloralPattern className="w-full h-full object-fill" preserveAspectRatio="none" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 w-[45vw] sm:w-[35vw] max-w-[380px] scale-x-[-1]">
            <WildflowerBirds className="w-full h-full object-fill" preserveAspectRatio="none" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          
          <LordGaneshArt className="w-14 h-14 mb-16 opacity-90" />

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#C5A059] font-normal tracking-widest uppercase mb-10">
            Aarav <span className="font-serif italic font-light">&</span> Ananya
          </h2>

          <div className="w-64 h-[1px] bg-[#C5A059]/30 mb-12" />

          <div className="font-serif italic text-lg sm:text-xl text-[#C5A059] mb-20 leading-[2.2]">
            <p>"मङ्गलं भगवान् विष्णुर्मङ्गलं गरुडध्वजः।</p>
            <p>मङ्गलं पुण्डरीकाक्षो मङ्गलायतनो हरिः॥"</p>
          </div>

          <div className="flex flex-col items-center gap-5">
            <span className="font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-[#FAFAFA]/90 font-bold">
              We Eagerly Await Your Presence
            </span>
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#FAFAFA]/40 font-semibold">
              Udaipur, Rajasthan
            </span>
          </div>

        </div>
      </footer></div>);}