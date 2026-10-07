import { describe, it, expect } from 'vitest';
import { calculateTimeRemaining } from '../src/hooks/useCountdown';

describe('Countdown Calculation', () => {
  it('calculates days, hours, minutes, seconds remaining accurately', () => {
    const now = new Date('2026-11-20T12:00:00Z').getTime();
    const target = new Date('2026-11-28T12:00:00Z').getTime();
    
    const result = calculateTimeRemaining(target, now);
    expect(result.days).toBe(8);
    expect(result.hours).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.seconds).toBe(0);
    expect(result.isExpired).toBe(false);
  });

  it('handles fractional hours and minutes correctly', () => {
    const now = new Date('2026-11-27T10:15:30Z').getTime();
    const target = new Date('2026-11-28T12:30:45Z').getTime();
    
    const result = calculateTimeRemaining(target, now);
    expect(result.days).toBe(1);
    expect(result.hours).toBe(2);
    expect(result.minutes).toBe(15);
    expect(result.seconds).toBe(15);
    expect(result.isExpired).toBe(false);
  });

  it('marks isExpired true when target date has passed', () => {
    const now = new Date('2026-11-29T12:00:00Z').getTime();
    const target = new Date('2026-11-28T12:00:00Z').getTime();
    
    const result = calculateTimeRemaining(target, now);
    expect(result.days).toBe(0);
    expect(result.isExpired).toBe(true);
  });
});
