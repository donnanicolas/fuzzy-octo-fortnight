/* global expect, describe, it */
import { memoize } from 'lodash';

let i = 0;

// eslint-disable-next-line no-return-assign
const fn = memoize(a => ({ val: i += 1, a }));

describe('memoize', () => {
  it('should memoize', () => {
    const callWithOne = fn(1);
    const callWithOneSecondTime = fn(1);
    const callWIthTwo = fn(2);

    expect(callWithOne).toEqual({ val: 1, a: 1 });
    expect(callWithOneSecondTime).toEqual({ val: 1, a: 1 });
    expect(callWithOne).toBe(callWithOneSecondTime);

    expect(callWIthTwo).toEqual({ val: 2, a: 2 });
    expect(callWithOne).not.toBe(callWIthTwo);
  });
});
