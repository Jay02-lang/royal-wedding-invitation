import { describe, it, expect } from 'vitest';
import { createPetal, getMobileAdjustedPetalCount, updatePetalPosition, PetalParticle } from '../src/utils/petalPhysics';

describe('Petal Particle Physics Engine', () => {
  it('adjusts petal count for mobile screens to preserve battery life', () => {
    const mobileCount = getMobileAdjustedPetalCount(390, 'normal');
    const desktopCount = getMobileAdjustedPetalCount(1440, 'normal');
    expect(mobileCount).toBe(18);
    expect(desktopCount).toBe(36);
  });

  it('boosts petal count during celebration bursts', () => {
    const burstMobile = getMobileAdjustedPetalCount(390, 'burst');
    const burstDesktop = getMobileAdjustedPetalCount(1440, 'burst');
    expect(burstMobile).toBe(36);
    expect(burstDesktop).toBe(72);
  });

  it('creates petals with distinct botanical varieties (rose vs marigold)', () => {
    const rose = createPetal(1000, 800, 'rose');
    const marigold = createPetal(1000, 800, 'marigold');

    expect(rose.type).toBe('rose');
    expect(rose.colors.primary).toContain('#');
    expect(marigold.type).toBe('marigold');
    expect(marigold.colors.primary).toContain('#');
  });

  it('updates 3D tumbling physics and wraps around screen bounds', () => {
    const petal: PetalParticle = {
      x: 500,
      y: 825,
      size: 15,
      speedX: 1,
      speedY: 2,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      rotSpeedX: 0.02,
      rotSpeedY: 0.03,
      rotSpeedZ: 0.01,
      oscillation: 0,
      oscillationSpeed: 0.05,
      type: 'rose',
      colors: { primary: '#801B31', shadow: '#4A0E1C', highlight: '#C42042' },
      opacity: 0.9
    };

    const updated = updatePetalPosition(petal, 1000, 800);
    // Should wrap to top when exceeding height
    expect(updated.y).toBeLessThan(10);
    expect(updated.rotationX).toBeGreaterThan(0);
  });
});
