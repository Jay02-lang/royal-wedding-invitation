import { describe, it, expect } from 'vitest';
import { WEDDING_DATA } from '../src/config/weddingData';

describe('WEDDING_DATA Configuration', () => {
  it('contains couple names and royal titles', () => {
    expect(WEDDING_DATA.groom.name).toBe('Aarav');
    expect(WEDDING_DATA.bride.name).toBe('Ananya');
    expect(WEDDING_DATA.coupleMonogram).toBe('A & A');
  });

  it('contains multi-day ceremonies including Haldi, Mehendi, Sangeet, Pheras, Reception', () => {
    expect(WEDDING_DATA.events.length).toBe(5);
    const eventIds = WEDDING_DATA.events.map(e => e.id);
    expect(eventIds).toContain('haldi');
    expect(eventIds).toContain('mehendi');
    expect(eventIds).toContain('sangeet');
    expect(eventIds).toContain('pheras');
    expect(eventIds).toContain('reception');
  });

  it('each event includes dress code, time, venue, and coordinates', () => {
    WEDDING_DATA.events.forEach(event => {
      expect(event.title).toBeDefined();
      expect(event.date).toBeDefined();
      expect(event.time).toBeDefined();
      expect(event.venue).toBeDefined();
      expect(event.dressCode.title).toBeDefined();
      expect(event.dressCode.colors.length).toBeGreaterThan(0);
    });
  });

  it('specifies Udaipur palace venue and customizable background video', () => {
    expect(WEDDING_DATA.venue.city).toBe('Udaipur');
    expect(WEDDING_DATA.backgroundVideoUrl).toBeDefined();
  });
});
