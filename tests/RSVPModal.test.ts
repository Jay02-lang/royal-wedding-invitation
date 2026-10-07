import { describe, it, expect } from 'vitest';
import { generateRsvpCsv } from '../src/utils/csvExport';
import { RSVPSubmission } from '../src/types/wedding';

describe('RSVP CSV Export Utility', () => {
  it('generates standard CSV with correct headers and quotes', () => {
    const mockRsvps: RSVPSubmission[] = [
      {
        id: '1',
        guestName: 'Rohan Sharma',
        emailOrPhone: '+91 98765 43210',
        numberOfGuests: 2,
        attendingEvents: ['sangeet', 'pheras', 'reception'],
        dietaryRequirements: 'Jain',
        dietaryNotes: 'Strict Jain',
        sangeetSongRequest: 'Gallan Goodiyaan',
        submittedAt: '2026-10-07T10:00:00Z'
      }
    ];

    const csv = generateRsvpCsv(mockRsvps);
    expect(csv).toContain('Guest Name,Email or Phone,Guest Count,Attending Events,Dietary,Notes,Sangeet Song,Submitted At');
    expect(csv).toContain('"Rohan Sharma"');
    expect(csv).toContain('"Jain"');
    expect(csv).toContain('"Gallan Goodiyaan"');
  });
});
