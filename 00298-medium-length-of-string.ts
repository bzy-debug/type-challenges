// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

// ============= Your Code Here =============
type t = LengthOfString<'xx'>
type LengthOfString<S extends string, T extends any[] = []> = S extends `${string}${infer S}` ? LengthOfString<S, [...T, any]> : T['length']
