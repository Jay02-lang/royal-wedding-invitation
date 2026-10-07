import { describe, it, expect } from 'vitest';
import { WEDDING_DATA } from '../src/config/weddingData';

describe('Palace Concierge Data', () => {
  it('supplies full venue, airport, boat jetty, and weather guidance', () => {
    expect(WEDDING_DATA.venue.name).toContain('Jagmandir');
    expect(WEDDING_DATA.venue.city).toBe('Udaipur');
    expect(WEDDING_DATA.venue.airport.code).toBe('UDR');
    expect(WEDDING_DATA.venue.boatJetty.name).toContain('Bansi Ghat');
    expect(WEDDING_DATA.venue.weatherAdvice).toContain('November');
  });
});
