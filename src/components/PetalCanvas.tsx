import React, { useEffect, useRef } from "react";
import {
  createPetal,
  drawPetal,
  getMobileAdjustedPetalCount,
  PetalParticle,
  updatePetalPosition,
} from "../utils/petalPhysics";

interface PetalCanvasProps {
  active?: boolean;
  density?: "normal" | "burst";
}

export const PetalCanvas: React.FC<PetalCanvasProps> = ({
  active = true,
  density = "normal",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let petals: PetalParticle[] = [];

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const targetCount = getMobileAdjustedPetalCount(width, density);
      // Initialize or scale petal pool
      petals = Array.from({ length: targetCount }, () =>
        createPetal(width, height),
      );
      // Spread initial Y positions across whole screen so petals are already visible
      petals.forEach((p) => {
        p.y = Math.random() * height;
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      petals = petals.map((p) => {
        const updated = updatePetalPosition(p, width, height);
        drawPetal(ctx, updated);
        return updated;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [active, density]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
