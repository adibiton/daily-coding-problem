import { rgbArray } from './rgbArray';
/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(rgbArray()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(rgbArray()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(rgbArray()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(rgbArray()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { rgbArray(); }).toThrow();
 */

describe('rgbArray', () => {
  it('rgbArray should return the correct order', () => {
    expect(rgbArray(['G', 'B', 'R', 'R', 'B', 'R', 'G'])).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B'])
  })

  it('rgbArray should return the same input', () => {
    expect(rgbArray(['R', 'R', 'R'])).toEqual(['R', 'R', 'R'])
  })

  it('rgbArray should return the input if the length = 1', () => {
    expect(rgbArray(['G'])).toEqual(['G'])
  })
  it('rgbArray should throw if the input is not valid', () => {
      expect(() => rgbArray('R')).toThrow()
  })
})
