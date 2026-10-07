import { describe, it, expect } from 'vitest';
import { WEDDING_DATA } from '../src/config/weddingData';

describe('Itinerary Section Structure', () => {
  it('supplies 5 detailed events with dress code swatches and schedule', () => {
    expect(WEDDING_DATA.events.length).toBe(5);
    WEDDING_DATA.events.forEach(evt => {
      expect(evt.dressCode.colors.length).toBeGreaterThanOrEqual(3);
      expect(evt.dressCode.fabrics.length).toBeGreaterThanOrEqual(2);
      expect(evt.googleMapsUrl).toContain('maps.google.com');
    });
  });

  it('contains valid dates across the 3-day royal festivities', () => {
    const dates = WEDDING_DATA.events.map(e => e.date);
    expect(dates).toContain('2026-11-26');
    expect(dates).toContain('2026-11-27');
    expect(dates).toContain('2026-11-28');
  });
});
