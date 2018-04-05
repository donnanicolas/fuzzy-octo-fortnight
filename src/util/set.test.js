/* global expect, describe, it */
import set from './set';

describe('set', () => {
  it('should set easy path', () => {
    const a = {};
    const b = set(a, ['a'], 1);
    expect(b).toEqual({ a: 1 });
    expect(b).not.toBe(a);
  });

  it('should support undefined object', () => {
    const b = set(undefined, ['a'], 1);
    expect(b).toEqual({ a: 1 });
  });

  it('should set nested path', () => {
    const a = {};
    const b = set(a, ['a', 'b'], 1);
    expect(b).toEqual({ a: { b: 1 } });
    expect(b).not.toBe(a);
  });

  it('should set really nested path', () => {
    const a = {};
    const b = set(a, ['a', 'b', 'c', 'd'], 1);
    expect(b).toEqual({ a: { b: { c: { d: 1 } } } });
    expect(b).not.toBe(a);
  });
});
