export interface DressCode {
  title: string;
  subtitle: string;
  colors: {
    name: string;
    hex: string;
  }[];
  fabrics: string[];
  suggestions: string;
}

export interface WeddingEvent {
  id: string;
  title: string;
  subtitle: string;
  dayNumber: number;
  date: string; // ISO date string: YYYY-MM-DD
  formattedDate: string;
  time: string;
  venue: string;
  hall: string;
  description: string;
  ritualSignificance: string;
  dressCode: DressCode;
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
}

export interface PersonInfo {
  name: string;
  title: string;
  royalLineage: string;
  parents: string;
  about: string;
  photoUrl: string;
}

export interface VenueInfo {
  name: string;
  palaceComplex: string;
  city: string;
  state: string;
  country: string;
  address: string;
  arrivalGuide: string;
  airport: {
    name: string;
    code: string;
    distanceKm: number;
    travelTime: string;
  };
  boatJetty: {
    name: string;
    details: string;
  };
  weatherAdvice: string;
  googleMapsEmbedUrl: string;
}

export interface RSVPSubmission {
  id: string;
  guestName: string;
  emailOrPhone: string;
  numberOfGuests: number;
  attendingEvents: string[]; // event IDs
  dietaryRequirements: 'Jain' | 'Pure Vegetarian' | 'Non-Vegetarian' | 'Special Allergies';
  dietaryNotes?: string;
  sangeetSongRequest?: string;
  submittedAt: string;
}

export interface GuestBlessing {
  id: string;
  authorName: string;
  relation: string;
  message: string;
  timestamp: string;
}

export interface WeddingConfig {
  coupleMonogram: string;
  shloka: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
  };
  groom: PersonInfo;
  bride: PersonInfo;
  mainWeddingDate: string; // ISO timestamp
  events: WeddingEvent[];
  venue: VenueInfo;
  backgroundVideoUrl: string;
  backgroundFallbackPoster: string;
  invitationNote: string;
}
