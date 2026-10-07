import { WeddingEvent } from '../types/wedding';

/**
 * Format date string to UTC iCal format: YYYYMMDDTHHmmssZ
 */
function formatToIcsDate(dateStr: string, timeStr: string): { start: string; end: string } {
  // Use event date base
  const cleanDate = dateStr.replace(/-/g, '');
  // Extract hour from e.g. "4:00 PM – 8:00 PM"
  let startHour = 10;
  let endHour = 14;

  if (timeStr.includes('PM')) {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (match) {
      let h = parseInt(match[1], 10);
      if (match[3].toUpperCase() === 'PM' && h < 12) h += 12;
      startHour = h;
      endHour = Math.min(23, startHour + 4);
    }
  }

  const startFormatted = `${cleanDate}T${String(startHour).padStart(2, '0')}0000Z`;
  const endFormatted = `${cleanDate}T${String(endHour).padStart(2, '0')}0000Z`;

  return { start: startFormatted, end: endFormatted };
}

/**
 * Generates a direct Google Calendar template URL
 */
export function generateGoogleCalendarUrl(event: WeddingEvent): string {
  const { start, end } = formatToIcsDate(event.date, event.time);
  const baseUrl = 'https://calendar.google.com/calendar/render';
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.title} | Aarav & Ananya Wedding`,
    dates: `${start}/${end}`,
    details: `${event.description}\n\nDress Code: ${event.dressCode.title} (${event.dressCode.suggestions})\n\nVenue: ${event.hall}, ${event.venue}`,
    location: `${event.venue}, Udaipur, Rajasthan`,
    ctz: 'Asia/Kolkata'
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Generates standard RFC 5545 iCalendar (.ics) content for Apple Calendar & Outlook
 */
export function generateIcsContent(event: WeddingEvent): string {
  const { start, end } = formatToIcsDate(event.date, event.time);
  const uid = `${event.id}-${Date.now()}@wedding.aarav-ananya.royal`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Royal Wedding//Aarav and Ananya Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description.replace(/\n/g, ' ')} - Dress Code: ${event.dressCode.title}`,
    `LOCATION:${event.venue}, Udaipur, Rajasthan`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

/**
 * Trigger client-side file download of .ics calendar file
 */
export function downloadIcsFile(event: WeddingEvent): void {
  const icsData = generateIcsContent(event);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.setAttribute('download', `${event.id}-aarav-ananya-wedding.ics`);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  window.URL.revokeObjectURL(url);
}
