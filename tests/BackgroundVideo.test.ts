import { describe, it, expect } from 'vitest';
import { getVideoPlaybackProps, shouldShowFallback } from '../src/components/BackgroundVideo';

describe('Background Video Layer Utilities', () => {
  it('supplies all required mobile video attributes for autoplay without controls', () => {
    const props = getVideoPlaybackProps();
    expect(props.autoPlay).toBe(true);
    expect(props.muted).toBe(true);
    expect(props.loop).toBe(true);
    expect(props.playsInline).toBe(true);
    expect(props.preload).toBe('auto');
  });

  it('determines fallback state correctly when video errors or is absent', () => {
    expect(shouldShowFallback(true, '/video.mp4')).toBe(true);
    expect(shouldShowFallback(false, '')).toBe(true);
    expect(shouldShowFallback(false, '/video.mp4')).toBe(false);
  });
});
