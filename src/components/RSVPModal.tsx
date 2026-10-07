import React, { useState } from 'react';
import { WeddingEvent, RSVPSubmission } from '../types/wedding';
import { LordGanesh } from './LordGanesh';
import { Check, Heart, Music, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  events: WeddingEvent[];
  onSubmitted: (rsvp: RSVPSubmission) => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({
  isOpen,
  onClose,
  events,
  onSubmitted
}) => {
  const [guestName, setGuestName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [attendingEvents, setAttendingEvents] = useState<string[]>(events.map(e => e.id));
  const [dietaryRequirements, setDietaryRequirements] = useState<RSVPSubmission['dietaryRequirements']>('Pure Vegetarian');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [sangeetSongRequest, setSangeetSongRequest] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleToggleEvent = (id: string) => {
    setAttendingEvents(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !emailOrPhone.trim()) return;

    const newRsvp: RSVPSubmission = {
      id: `rsvp-${Date.now()}`,
      guestName: guestName.trim(),
      emailOrPhone: emailOrPhone.trim(),
      numberOfGuests,
      attendingEvents,
      dietaryRequirements,
      dietaryNotes: dietaryNotes.trim(),
      sangeetSongRequest: sangeetSongRequest.trim(),
      submittedAt: new Date().toISOString()
    };

    onSubmitted(newRsvp);
    setIsSuccess(true);

    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#801B31', '#F59E0B', '#10B981']
    });
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-title"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1A050B] text-[#FCFAF6] p-6 sm:p-10 shadow-[0_25px_90px_rgba(0,0,0,0.95)] border-2 border-[#D4AF37]">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close RSVP form"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-[#F7E5A9] hover:bg-[#D4AF37] hover:text-[#1A1615] transition-colors flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-12 space-y-4">
            <LordGanesh size={80} className="w-20 h-20 text-[#D4AF37] mx-auto mb-2" />
            <h3 className="font-serif text-3xl font-black text-[#FFF1C5]">
              Auspicious Wishes Received!
            </h3>

            <p className="font-sans text-sm text-[#FCFAF6]/90 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{guestName}</strong>. Your royal presence has been warmly confirmed. We eagerly await your arrival at Lake Pichola, Udaipur.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8222] text-[#1A1615] font-serif text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Back to Invitation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="text-center border-b border-[#D4AF37]/30 pb-5">
              <LordGanesh size={54} className="w-14 h-14 text-[#D4AF37] mx-auto mb-2" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                ॥ श्री गणेशाय नमः ॥
              </span>
              <h3 id="rsvp-title" className="font-serif text-3xl font-black text-[#FFF1C5] mt-1">
                Confirm Your Presence
              </h3>
              <p className="text-xs text-[#F7E5A9]/70 font-sans mt-1">
                Kindly respond to ensure graceful concierge arrangements.
              </p>
            </div>

            {/* Guest Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="guest-name" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                Full Name *
              </label>
              <input
                id="guest-name"
                type="text"
                required
                value={guestName}
                onChange={e => setGuestName(e.target.value)}
                placeholder="e.g. Mr. & Mrs. Sharma"
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/50 text-base text-[#FCFAF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            {/* Contact Phone / Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="contact-info" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                  WhatsApp or Phone *
                </label>
                <input
                  id="contact-info"
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={e => setEmailOrPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/50 text-base text-[#FCFAF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="guest-count" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                  Number of Attendees
                </label>
                <select
                  id="guest-count"
                  value={numberOfGuests}
                  onChange={e => setNumberOfGuests(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/50 text-base text-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num} className="bg-[#1A050B] text-white">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Events Attending Checkboxes */}
            <div className="space-y-2">
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                Ceremonies Attending:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {events.map(evt => {
                  const checked = attendingEvents.includes(evt.id);
                  return (
                    <button
                      key={evt.id}
                      type="button"
                      onClick={() => handleToggleEvent(evt.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        checked
                          ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#FFF1C5]'
                          : 'border-white/10 bg-black/30 text-[#FCFAF6]/60'
                      }`}
                    >
                      <div className="overflow-hidden pr-2">
                        <span className="font-serif text-xs font-bold block truncate">{evt.title}</span>
                        <span className="text-[10px] font-sans opacity-80 block truncate">Day {evt.dayNumber} • {evt.time}</span>
                      </div>
                      <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                        checked ? 'bg-[#D4AF37] border-[#D4AF37] text-[#1A1615]' : 'border-white/30'
                      }`}>
                        {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dietary Selection */}
            <div className="space-y-1.5">
              <label htmlFor="dietary" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37]">
                Dietary Preferences
              </label>
              <select
                id="dietary"
                value={dietaryRequirements}
                onChange={e => setDietaryRequirements(e.target.value as typeof dietaryRequirements)}
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/50 text-base text-[#FCFAF6] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                <option value="Pure Vegetarian" className="bg-[#1A050B] text-white">Pure Vegetarian (Gourmet Rajput & Global)</option>
                <option value="Jain" className="bg-[#1A050B] text-white">Strict Jain (No Root Vegetables / Onion / Garlic)</option>
                <option value="Non-Vegetarian" className="bg-[#1A050B] text-white">Royal Non-Vegetarian Delicacies</option>
                <option value="Special Allergies" className="bg-[#1A050B] text-white">Special Dietary Allergies</option>
              </select>
            </div>

            {/* Sangeet Song Request */}
            <div className="space-y-1.5">
              <label htmlFor="song-request" className="block text-xs font-serif font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Song for Sangeet DJ (Optional)</span>
              </label>
              <input
                id="song-request"
                type="text"
                value={sangeetSongRequest}
                onChange={e => setSangeetSongRequest(e.target.value)}
                placeholder="What song will get you dancing?"
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/50 bg-black/50 text-base text-[#FCFAF6] placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA8222] text-[#1A1615] font-serif text-sm font-bold uppercase tracking-widest shadow-[0_6px_25px_rgba(212,175,55,0.4)] hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-2 mt-6"
            >
              <Sparkles className="w-4 h-4 text-[#801B31]" />
              <span>Confirm Royal RSVP</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
