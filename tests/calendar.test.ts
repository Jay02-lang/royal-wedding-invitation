import { describe, it, expect } from 'vitest';
import { generateGoogleCalendarUrl, generateIcsContent } from '../src/utils/calendar';
import { WeddingEvent } from '../src/types/wedding';

const mockEvent: WeddingEvent = {
  id: 'pheras',
  title: 'Shahi Baraat & Vedic Pheras',
  subtitle: 'The Royal Matrimonial Union',
  dayNumber: 3,
  date: '2026-11-28',
  formattedDate: 'Saturday, November 28, 2026',
  time: '4:00 PM – 8:00 PM',
  venue: 'Jagmandir Island Palace',
  hall: 'The Lake Pavilion',
  description: 'The ceremonial arrival followed by Saat Phere.',
  ritualSignificance: 'The eternal Vedic vows.',
  dressCode: {
    title: 'Traditional Royal',
    subtitle: 'Strict Traditional',
    colors: [{ name: 'Gold', hex: '#D4AF37' }],
    fabrics: ['Silk'],
    suggestions: 'Royal attire'
  },
  mapCoordinates: { lat: 24.5678, lng: 73.6781 },
  googleMapsUrl: 'https://maps.google.com/?q=Jagmandir'
};

describe('Calendar Utilities', () => {
  it('generates a valid Google Calendar URL with encoded parameters', () => {
    const urlString = generateGoogleCalendarUrl(mockEvent);
    expect(urlString).toContain('https://calendar.google.com/calendar/render');
    const url = new URL(urlString);
    expect(url.searchParams.get('action')).toBe('TEMPLATE');
    expect(url.searchParams.get('text')).toContain(mockEvent.title);
    expect(url.searchParams.get('location')).toContain(mockEvent.venue);
  });

  it('generates a valid iCal (.ics) string format with standard headers', () => {
    const ics = generateIcsContent(mockEvent);
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('VERSION:2.0');
    expect(ics).toContain('BEGIN:VEVENT');
    expect(ics).toContain('SUMMARY:Shahi Baraat & Vedic Pheras');
    expect(ics).toContain('LOCATION:Jagmandir Island Palace');
    expect(ics).toContain('END:VEVENT');
    expect(ics).toContain('END:VCALENDAR');
  });
});
