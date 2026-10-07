import { describe, it, expect } from 'vitest';
import { getEnvelopeStateClasses } from '../src/components/WaxSealEnvelope';

describe('Wax Seal Envelope State Management', () => {
  it('returns appropriate 3D perspective and flap rotation classes when closed', () => {
    const classes = getEnvelopeStateClasses(false);
    expect(classes.flapRotation).toContain('rotateX(0deg)');
    expect(classes.sealVisibility).toBe(true);
    expect(classes.cardTranslateY).toContain('translate-y-0');
  });

  it('returns unfolded flap classes and card slide-out when opened', () => {
    const classes = getEnvelopeStateClasses(true);
    expect(classes.flapRotation).toContain('rotateX(180deg)');
    expect(classes.sealVisibility).toBe(false);
    expect(classes.cardTranslateY).toContain('-translate-y-');
  });
});
