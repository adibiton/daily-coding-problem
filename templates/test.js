'use strict'

module.exports = (name) => `\
import { ${name} } from './${name}'

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(${name}()).toEqual(123)
 *
 * - Testing that the function returns null:
 * expect(${name}()).toBeNull()
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(${name}()).toBeFalsy()
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(${name}()).toBeTruthy()
 *
 * - Testing that the function throws
 * expect(() => { ${name}(); }).toThrow()
 */

describe('${name}', () => {
  it('${name} does this thing...', () => {
    // TODO Your own assertion here
  })

  it('${name} does that other thing...', () => {
    // TODO Your own assertion here
  })

  it('${name} does a very cool thing...', () => {
    // TODO Your own assertion here
  })
})\n`
