import { expect, test } from '@jest/globals';
import { sum } from '../service/functions';

test('ADD 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
