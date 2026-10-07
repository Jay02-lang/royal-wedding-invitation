import { WeddingConfig } from '../types/wedding';

export const WEDDING_DATA: WeddingConfig = {
  coupleMonogram: 'A & A',
  shloka: {
    sanskrit: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    transliteration: 'Vakratuṇḍa Mahākāya Sūryakoṭi Samaprabha |\nNirvighnaṁ Kuru Me Deva Sarvakāryeṣu Sarvadā ||',
    meaning: 'O Lord with the curved trunk and immense form, whose brilliance matches millions of suns, please grace our sacred union and remove all obstacles from our journey forever.'
  },
  groom: {
    name: 'Aarav',
    title: 'Maharaj Kunwar Aarav',
    royalLineage: 'House of Sisodia & Royal House of Mewar',
    parents: 'Son of Shri Vikramaditya Singh & Shrimati Gayatri Devi',
    about: 'An alumnus of Oxford and classical horseman, Aarav honors centuries of timeless Mewar heritage with a contemporary global vision for art and sustainable preservation.',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
  },
  bride: {
    name: 'Ananya',
    title: 'Rajkumari Ananya',
    royalLineage: 'Royal House of Jaipur & Kachhwaha Dynasty',
    parents: 'Daughter of Shri Digvijay Singh Rathore & Shrimati Radhika Devi',
    about: 'An accomplished classical Odissi dancer and architectural conservationist, Ananya weaves grace, intellect, and profound reverence for imperial Rajasthani craftsmanship.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
  },
  mainWeddingDate: '2026-11-28T16:30:00+05:30', // Big Day: Royal Pheras at sunset
  invitationNote: 'With the divine blessings of our beloved ancestors and the Almighty, the royal families of Mewar and Jaipur cordially invite you to celebrate the joyous wedding festivities of our children.',
  
  // Custom video background provided by user or default palace loop
  backgroundVideoUrl: '/video/wedding-bg.mp4',
  backgroundFallbackPoster: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85',

  events: [
    {
      id: 'haldi',
      title: 'Phoolon Ki Haldi',
      subtitle: 'The Sacred Auspicious Turmeric & Floral Shower',
      dayNumber: 1,
      date: '2026-11-26',
      formattedDate: 'Thursday, November 26, 2026',
      time: '10:00 AM – 1:30 PM',
      venue: 'The Zenana Mahal Courtyard',
      hall: 'Sunlit Marble Pavilion',
      description: 'An effervescent morning of golden auspicious turmeric paste, fresh marigold and rose petal showers, live Rajasthani folk dholaks, and cheerful floral blessings.',
      ritualSignificance: 'Purification ritual invoking warmth, beauty, and auspicious beginnings prior to the holy matrimony.',
      dressCode: {
        title: 'Shades of Sunshine & Marigold',
        subtitle: 'Haldi Festive & Floral Elegance',
        colors: [
          { name: 'Marigold Gold', hex: '#F59E0B' },
          { name: 'Mustard Yellow', hex: '#D97706' },
          { name: 'Raw Ochre', hex: '#CA8A04' },
          { name: 'Ivory Shimmer', hex: '#FEF9C3' }
        ],
        fabrics: ['Chanderi Silk', 'Mulmul Cotton', 'Kota Doria'],
        suggestions: 'Breezy yellow lehengas, vibrant kurtas with bandhani stoles. Fresh floral jewelry is warmly celebrated.'
      },
      mapCoordinates: { lat: 24.5764, lng: 73.6835 },
      googleMapsUrl: 'https://maps.google.com/?q=Zenana+Mahal+City+Palace+Udaipur'
    },
    {
      id: 'mehendi',
      title: 'Royal Mehendi Bazaar',
      subtitle: 'Intricate Henna Artistry & Folk Festivities',
      dayNumber: 1,
      date: '2026-11-26',
      formattedDate: 'Thursday, November 26, 2026',
      time: '4:30 PM – 8:30 PM',
      venue: 'Manek Chowk Courtyard',
      hall: 'Imperial Lakeside Garden',
      description: 'Master henna artisans craft intricate Rajasthani bridal motifs under illuminated velvet shamianas, accompanied by puppet theatrics and spiced royal chai.',
      ritualSignificance: 'Symbolizing deep devotion, prosperity, and the blossoming bond between the two royal houses.',
      dressCode: {
        title: 'Mint, Emerald & Lime Festive',
        subtitle: 'Playful Festive Pastels',
        colors: [
          { name: 'Mint Green', hex: '#10B981' },
          { name: 'Lime Sage', hex: '#84CC16' },
          { name: 'Teal Turquoise', hex: '#0D9488' },
          { name: 'Champagne', hex: '#FDE68A' }
        ],
        fabrics: ['Georgette', 'Raw Silk', 'Embroidered Linen'],
        suggestions: 'Flowing Anarkalis, shararas, and pastel Nehru jackets tailored for breezy outdoor lakeside relaxation.'
      },
      mapCoordinates: { lat: 24.5764, lng: 73.6835 },
      googleMapsUrl: 'https://maps.google.com/?q=Manek+Chowk+City+Palace+Udaipur'
    },
    {
      id: 'sangeet',
      title: 'The Sangeet & Sufi Night',
      subtitle: 'Glittering Imperial Symphony of Music & Dance',
      dayNumber: 2,
      date: '2026-11-27',
      formattedDate: 'Friday, November 27, 2026',
      time: '7:30 PM – Late Midnight',
      venue: 'The Promenade at Jagmandir Island',
      hall: 'Crystal Ballroom & Lake Terrace',
      description: 'Choreographed family performances, an electrifying Sufi ensemble, midnight fireworks reflecting across Lake Pichola, and bespoke cocktails by master mixologists.',
      ritualSignificance: 'A night of unbound joy where two lineages celebrate unison through the sacred ecstasy of music and celebration.',
      dressCode: {
        title: 'Midnight Emerald & Velvet Glamour',
        subtitle: 'Indo-Western Glitz & Regal Royalty',
        colors: [
          { name: 'Imperial Emerald', hex: '#0E3B2F' },
          { name: 'Deep Midnight Navy', hex: '#1E1B4B' },
          { name: 'Antique Gold Brocade', hex: '#D4AF37' },
          { name: 'Wine Velvet', hex: '#4C0519' }
        ],
        fabrics: ['Silk Velvet', 'Banarasi Brocade', 'Metallic Zari'],
        suggestions: 'Heavy mirror-work lehengas, bespoke Bandhgala suits, embroidered sherwanis with jeweled brooches.'
      },
      mapCoordinates: { lat: 24.5678, lng: 73.6781 },
      googleMapsUrl: 'https://maps.google.com/?q=Jagmandir+Island+Palace+Lake+Pichola+Udaipur'
    },
    {
      id: 'pheras',
      title: 'Shahi Baraat & Vedic Pheras',
      subtitle: 'The Royal Matrimonial Union at Sunset',
      dayNumber: 3,
      date: '2026-11-28',
      formattedDate: 'Saturday, November 28, 2026',
      time: '4:00 PM – 8:00 PM',
      venue: 'Jagmandir Island Palace Mandap',
      hall: 'The Lake Pavilion Overlooking Pichola',
      description: 'The ceremonial arrival of the Groom with royal elephant regalia and dhol procession across the water, followed by the sacred Saat Phere around the Agni at sunset.',
      ritualSignificance: 'The eternal Vedic vows binding soul to soul across seven lifetimes in presence of the Agni and cosmic witnesses.',
      dressCode: {
        title: 'Imperial Ivory & Traditional Royal Pink',
        subtitle: 'Strict Traditional Regal Attire',
        colors: [
          { name: 'Royal Sindoor Red', hex: '#801B31' },
          { name: 'Rose Quartz Pink', hex: '#F43F5E' },
          { name: 'Warm Ivory Silk', hex: '#FEF08A' },
          { name: 'Antique Gold', hex: '#D4AF37' }
        ],
        fabrics: ['Pure Banarasi Katan Silk', 'Zardozi Handwoven Silk', 'Chikankari'],
        suggestions: 'Traditional bridal red and rani pink silks with polki jewelry; Achkan sherwanis with royal Safa turbans.'
      },
      mapCoordinates: { lat: 24.5678, lng: 73.6781 },
      googleMapsUrl: 'https://maps.google.com/?q=Jagmandir+Island+Palace+Lake+Pichola+Udaipur'
    },
    {
      id: 'reception',
      title: 'Grand Imperial Reception',
      subtitle: 'Banquet of Dynasties & Black-Tie Soirée',
      dayNumber: 3,
      date: '2026-11-28',
      formattedDate: 'Saturday, November 28, 2026',
      time: '8:30 PM – Midnight',
      venue: 'The Grand Durbar Hall, Fateh Prakash Palace',
      hall: 'The Royal Crystal Dining Pavilion',
      description: 'An imperial banquet featuring 56 royal Rajput thali specialties, international gourmet pairings, symphonic string quartets, and heartfelt toasts to the newlyweds.',
      ritualSignificance: 'The formal presentation of the newly wedded couple to society and global dignitaries.',
      dressCode: {
        title: 'Formal Black Tie or Regal Gold Formals',
        subtitle: 'Couture Elegance',
        colors: [
          { name: 'Obsidian Black', hex: '#18181B' },
          { name: 'Burnished Gold', hex: '#EAB308' },
          { name: 'Champagne Cream', hex: '#FEF3C7' },
          { name: 'Deep Ruby', hex: '#881337' }
        ],
        fabrics: ['Italian Super-150s Wool', 'Raw Tussar Silk', 'Organza & Crystal'],
        suggestions: 'Tuxedos, structured evening gowns, or opulent royal sherwanis with pocket squares and safas.'
      },
      mapCoordinates: { lat: 24.5752, lng: 73.6826 },
      googleMapsUrl: 'https://maps.google.com/?q=Fateh+Prakash+Palace+The+Durbar+Hall+Udaipur'
    }
  ],

  venue: {
    name: 'Jagmandir Island Palace & City Palace Complex',
    palaceComplex: 'The Historic Mewar Palaces of Lake Pichola',
    city: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    address: 'The City Palace Complex, Lake Pichola, Udaipur, Rajasthan 313001',
    arrivalGuide: 'All guests attending island ceremonies will board private ceremonial royal solar boats at the Bansi Ghat Jetty located at City Palace. Boat shuttles operate continuously every 15 minutes.',
    airport: {
      name: 'Maharana Pratap Airport',
      code: 'UDR',
      distanceKm: 24,
      travelTime: '35–45 minutes by chauffeured palace concierge car'
    },
    boatJetty: {
      name: 'Bansi Ghat Private Royal Jetty',
      details: 'Valet parking and private concierge escort directly onto lake catamaran yachts.'
    },
    weatherAdvice: 'November in Udaipur features pleasant sunny afternoons (26°C / 78°F) and crisp, cool lakeside evenings (14°C / 57°F). A light pashmina or tailored shawl is recommended for night events.',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.324209146197!2d73.67551067605927!3d24.567849978121683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56317b96055%3A0xe5f9b415e612cb7!2sJagmandir!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
  }
};
