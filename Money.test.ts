import { describe, expect, it } from '@jest/globals';
import { Dollar } from './Dollar';
describe('Money Test', () => {
  it('test multiplication', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});