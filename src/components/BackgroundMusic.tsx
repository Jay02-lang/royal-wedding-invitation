import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ──────────────────────────────────────────────────────────────────
//  Indian Flute synthesizer using Web Audio API
//  Plays a looping Raag Yaman-inspired pentatonic melody
// ──────────────────────────────────────────────────────────────────

// Frequencies for a soft Indian scale (Raag Yaman-ish, C4 based)
const NOTES: Record<string, number> = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.0,
  A4: 440.0,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  G5: 784.0,
};

// A gentle melodic phrase — note name + duration in seconds
const MELODY: [string, number][] = [
  ["G4", 0.6],
  ["A4", 0.5],
  ["B4", 0.4],
  ["C5", 0.8],
  ["D5", 0.6],
  ["C5", 0.4],
  ["B4", 0.5],
  ["A4", 0.7],
  ["G4", 0.5],
  ["E4", 0.4],
  ["G4", 0.6],
  ["A4", 0.8],
  ["B4", 0.5],
  ["G4", 0.4],
  ["A4", 0.6],
  ["G4", 0.9],
  ["C5", 0.5],
  ["B4", 0.4],
  ["A4", 0.5],
  ["G4", 0.6],
  ["F4", 0.4],
  ["G4", 0.5],
  ["A4", 0.7],
  ["G4", 1.0],
  ["E4", 0.6],
  ["D4", 0.5],
  ["E4", 0.4],
  ["G4", 0.8],
  ["A4", 0.5],
  ["G4", 0.6],
  ["E4", 0.4],
  ["D4", 1.2],
];

function playFlute(
  ctx: AudioContext,
  freq: number,
  when: number,
  dur: number,
  gain: GainNode,
) {
  // Primary sine oscillator (fundamental)
  const osc1 = ctx.createOscillator();
  osc1.type = "sine";
  osc1.frequency.setValueAtTime(freq, when);
  // Very slight vibrato
  osc1.frequency.setValueAtTime(freq, when + dur * 0.3);
  osc1.frequency.linearRampToValueAtTime(freq * 1.005, when + dur * 0.6);
  osc1.frequency.linearRampToValueAtTime(freq, when + dur);

  // 2nd harmonic (flute has strong 2nd harmonic)
  const osc2 = ctx.createOscillator();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(freq * 2, when);

  // Envelope
  const env = ctx.createGain();
  env.gain.setValueAtTime(0, when);
  env.gain.linearRampToValueAtTime(0.55, when + 0.06); // attack
  env.gain.setValueAtTime(0.55, when + dur * 0.5);
  env.gain.linearRampToValueAtTime(0, when + dur + 0.08); // release

  const env2 = ctx.createGain();
  env2.gain.setValueAtTime(0, when);
  env2.gain.linearRampToValueAtTime(0.15, when + 0.08);
  env2.gain.linearRampToValueAtTime(0, when + dur + 0.08);

  osc1.connect(env);
  osc2.connect(env2);
  env.connect(gain);
  env2.connect(gain);

  osc1.start(when);
  osc1.stop(when + dur + 0.15);
  osc2.start(when);
  osc2.stop(when + dur + 0.15);
}

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const schedulerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const noteIdxRef = useRef(0);
  const nextTimeRef = useRef(0);

  const stopScheduler = useCallback(() => {
    if (schedulerRef.current) clearTimeout(schedulerRef.current);
    schedulerRef.current = null;
  }, []);

  const scheduleNext = useCallback(() => {
    const ctx = ctxRef.current;
    const gain = gainRef.current;
    if (!ctx || !gain) return;

    // Schedule slightly ahead so notes don't gap
    const LOOKAHEAD = 0.15; // seconds
    const INTERVAL = 50; // ms polling

    while (nextTimeRef.current < ctx.currentTime + LOOKAHEAD) {
      const [note, dur] = MELODY[noteIdxRef.current % MELODY.length];
      playFlute(ctx, NOTES[note], nextTimeRef.current, dur, gain);
      nextTimeRef.current += dur + 0.06; // gap between notes
      noteIdxRef.current++;
    }

    schedulerRef.current = setTimeout(scheduleNext, INTERVAL);
  }, []);

  const start = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.35, ctx.currentTime);
    master.connect(ctx.destination);
    gainRef.current = master;

    nextTimeRef.current = ctx.currentTime + 0.1;
    noteIdxRef.current = 0;
    scheduleNext();
    setIsPlaying(true);
  }, [scheduleNext]);

  const stop = useCallback(() => {
    stopScheduler();
    gainRef.current?.gain.linearRampToValueAtTime(
      0,
      (ctxRef.current?.currentTime ?? 0) + 0.4,
    );
    setTimeout(() => {
      gainRef.current?.disconnect();
      gainRef.current = null;
    }, 500);
    setIsPlaying(false);
  }, [stopScheduler]);

  const toggle = () => {
    if (isPlaying) stop();
    else start();
  };

  return (
    <>
      {/* Floating music button — bottom-right */}
      <motion.button
        type="button"
        onClick={toggle}
        title={isPlaying ? "Pause music" : "Play Indian flute music"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center
          bg-white/85 backdrop-blur-md border border-[#6B4C0A]/40 shadow-xl
          hover:bg-white hover:border-[#6B4C0A] transition-all duration-300 cursor-pointer"
      >
        {/* Ripple rings when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.span
                key="r1"
                className="absolute inset-0 rounded-full border border-[#6B4C0A]/40"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                key="r2"
                className="absolute inset-0 rounded-full border border-[#6B4C0A]/25"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 2.8, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.7,
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Icon */}
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#6B4C0A">
            <rect x="5" y="4" width="4" height="16" rx="1" />
            <rect x="15" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18V5l12-2v13"
              stroke="#6B4C0A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="6" cy="18" r="3" fill="#6B4C0A" />
            <circle cx="18" cy="16" r="3" fill="#6B4C0A" />
          </svg>
        )}
      </motion.button>

      {/* "♪ Indian Flute" label */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="fixed bottom-7 right-20 z-50 pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6B4C0A] font-bold bg-white/85 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#6B4C0A]/30 shadow-md whitespace-nowrap">
              ♪ Indian Flute
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
