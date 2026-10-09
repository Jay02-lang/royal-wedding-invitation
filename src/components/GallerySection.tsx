import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface GalleryImageProps {
  src: string;
  x: string;
  y: string;
  width: string;
  aspect: string;
  scrollYProgress: MotionValue<number>;
  scaleRange: [number, number];
  opacityRange: [number, number, number, number];
  opacityOutput?: [number, number, number, number];
  scaleOutput?: [number, number];
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  x,
  y,
  width,
  aspect,
  scrollYProgress,
  scaleRange,
  opacityRange,
  opacityOutput = [0, 1, 1, 0],
  scaleOutput = [0.2, 3.5],
}) => {
  const scale = useTransform(scrollYProgress, scaleRange, scaleOutput);
  const opacity = useTransform(scrollYProgress, opacityRange, opacityOutput);

  return (
    <motion.div
      className={`absolute ${width} ${aspect} rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-[#D4AF37]/30`}
      style={{
        scale,
        opacity,
        x,
        y,
        willChange: "transform, opacity",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/40 via-transparent to-[#FBE18D]/40 mix-blend-overlay z-10 opacity-70 pointer-events-none" />
      <img
        src={src}
        alt="Wedding Moment"
        className="w-full h-full object-cover sepia-[.35] contrast-[1.1] brightness-[1.05]"
      />
    </motion.div>
  );
};

export const GallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const finalScale = useTransform(scrollYProgress, [0.65, 0.9], [0.6, 1]);
  const finalOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-transparent"
      style={{ height: "600vh" }}
    >
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center pointer-events-none">
        

        {/* 8 Scattered Flying Images */}
        <GalleryImage
          src="https://images.unsplash.com/photo-1583939000088-75b22bbf5a45?auto=format&fit=crop&w=500&q=70"
          x="-75%"
          y="-50%"
          width="w-48 sm:w-64"
          aspect="aspect-[3/4]"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.0, 0.4]}
          opacityRange={[0.0, 0.15, 0.25, 0.35]}
          opacityOutput={[0.7, 1, 1, 0]}
          scaleOutput={[0.8, 3.5]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=70"
          x="65%"
          y="45%"
          width="w-56 sm:w-72"
          aspect="aspect-square"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.05, 0.45]}
          opacityRange={[0.05, 0.2, 0.3, 0.4]}
          opacityOutput={[0.5, 1, 1, 0]}
          scaleOutput={[0.6, 3.5]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=500&q=70"
          x="-65%"
          y="55%"
          width="w-40 sm:w-56"
          aspect="aspect-[4/5]"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.1, 0.5]}
          opacityRange={[0.1, 0.25, 0.35, 0.45]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1610173827002-622830f305f2?auto=format&fit=crop&w=500&q=70"
          x="75%"
          y="-65%"
          width="w-52 sm:w-64"
          aspect="aspect-[3/4]"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.15, 0.55]}
          opacityRange={[0.15, 0.3, 0.4, 0.5]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&q=70"
          x="-85%"
          y="10%"
          width="w-44 sm:w-60"
          aspect="aspect-square"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.2, 0.6]}
          opacityRange={[0.2, 0.35, 0.45, 0.55]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=500&q=70"
          x="85%"
          y="15%"
          width="w-48 sm:w-64"
          aspect="aspect-[4/5]"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.25, 0.65]}
          opacityRange={[0.25, 0.4, 0.5, 0.6]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1596484552993-9c8e1b30526b?auto=format&fit=crop&w=500&q=70"
          x="-35%"
          y="-75%"
          width="w-40 sm:w-52"
          aspect="aspect-[3/4]"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.3, 0.7]}
          opacityRange={[0.3, 0.45, 0.55, 0.65]}
        />
        <GalleryImage
          src="https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&w=500&q=70"
          x="35%"
          y="75%"
          width="w-48 sm:w-64"
          aspect="aspect-square"
          scrollYProgress={scrollYProgress}
          scaleRange={[0.35, 0.75]}
          opacityRange={[0.35, 0.5, 0.6, 0.7]}
        />

        {/* Final Full-Screen Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            scale: finalScale,
            opacity: finalOpacity,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        >
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80"
            alt="The Royal Couple"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};
