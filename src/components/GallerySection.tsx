import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { GaneshaLogo } from "./GaneshaLogo";

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
];

interface CardProps {
  i: number;
  src: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, src, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  // Use overlay opacity instead of card opacity to prevent seeing cards underneath
  const overlayOpacity = useTransform(progress, range, [0, 0.7]);

  return (
    <div className="sticky top-0 h-screen w-full relative">
      <motion.div
        style={{
          scale,
          top: `calc(15vh + ${i * 12}px)`,
        }}
        className="absolute left-0 right-0 w-full h-[70vh] md:h-[80vh] rounded-t-[2rem] rounded-b-[2rem] md:rounded-t-[3rem] md:rounded-b-[3rem] overflow-hidden shadow-[0_-15px_50px_rgba(0,0,0,0.5)] origin-top border-t border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[#6B4C0A]/10 mix-blend-overlay z-10 pointer-events-none" />
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-[#1A1615] z-20 pointer-events-none" />
        <img
          src={src}
          className="w-full h-full object-cover sepia-[.2] contrast-[1.1]"
          alt={`Gallery Image ${i + 1}`}
        />
      </motion.div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="gallery" className="relative w-full bg-transparent pb-32">
      {/* Header */}
      <div className="w-full pt-32 pb-16 flex flex-col items-center text-center">
        <GaneshaLogo className="w-16 h-16 md:w-20 md:h-20 text-[#6B4C0A] mb-8" />
        <span className="text-xs sm:text-sm font-sans tracking-[0.4em] text-[#6B4C0A] uppercase font-bold mb-6 block">
          Eternal Memories
        </span>
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#1A1615] font-normal tracking-wide uppercase">
          The Gallery
        </h2>
      </div>

      {/* Stacked Cards Container */}
      <div ref={containerRef} className="relative w-full">
        {images.map((src, i) => {
          const targetScale = 1 - (images.length - 1 - i) * 0.05;
          const range = [i * (1 / (images.length - 1)), 1];

          return (
            <Card
              key={i}
              i={i}
              src={src}
              progress={scrollYProgress}
              range={range}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
