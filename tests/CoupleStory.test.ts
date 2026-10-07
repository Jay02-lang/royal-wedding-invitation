import { describe, it, expect } from 'vitest';
import { WEDDING_DATA } from '../src/config/weddingData';

describe('Couple Story Data & Presentation', () => {
  it('supplies full lineage, parents, and about descriptions for both groom and bride', () => {
    expect(WEDDING_DATA.groom.royalLineage).toContain('Mewar');
    expect(WEDDING_DATA.groom.parents).toContain('Vikramaditya');
    expect(WEDDING_DATA.bride.royalLineage).toContain('Jaipur');
    expect(WEDDING_DATA.bride.parents).toContain('Digvijay');
  });

  it('contains complete Sanskrit shloka with transliteration and translation', () => {
    expect(WEDDING_DATA.shloka.sanskrit).toContain('वक्रतुण्ड');
    expect(WEDDING_DATA.shloka.transliteration).toContain('Vakratuṇḍa');
    expect(WEDDING_DATA.shloka.meaning).toBeDefined();
  });
});
