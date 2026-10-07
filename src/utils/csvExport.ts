import { RSVPSubmission } from '../types/wedding';

/**
 * Generates properly formatted RFC 4180 CSV string of RSVP submissions
 */
export function generateRsvpCsv(rsvps: RSVPSubmission[]): string {
  const headers = [
    'Guest Name',
    'Email or Phone',
    'Guest Count',
    'Attending Events',
    'Dietary',
    'Notes',
    'Sangeet Song',
    'Submitted At'
  ].join(',');

  const rows = rsvps.map(r => {
    return [
      `"${(r.guestName || '').replace(/"/g, '""')}"`,
      `"${(r.emailOrPhone || '').replace(/"/g, '""')}"`,
      r.numberOfGuests || 1,
      `"${(r.attendingEvents || []).join('; ')}"`,
      `"${(r.dietaryRequirements || '').replace(/"/g, '""')}"`,
      `"${(r.dietaryNotes || '').replace(/"/g, '""')}"`,
      `"${(r.sangeetSongRequest || '').replace(/"/g, '""')}"`,
      `"${r.submittedAt || ''}"`
    ].join(',');
  });

  return [headers, ...rows].join('\r\n');
}

/**
 * Triggers client-side browser download of RSVP submissions CSV file
 */
export function downloadRsvpCsvFile(rsvps: RSVPSubmission[]): void {
  const csvContent = generateRsvpCsv(rsvps);
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', `aarav-ananya-wedding-rsvps-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(url);
}
