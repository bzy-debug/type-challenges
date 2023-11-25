// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<
    Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<
    Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>
  >,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]

// ============= Your Code Here =============
type Or<A extends boolean, B extends boolean> = A extends false
  ? B extends false
    ? false
    : true
  : true

type IsTruthy<A> = A extends
  | false
  | 0
  | ''
  | []
  | { [key: string]: never }
  | undefined
  | null
  ? false
  : true

// type AnyOf<T extends readonly any[]> = T extends [infer T1, ...infer T2]
//   ? Or<IsTruthy<T1>, AnyOf<T2>>
//   : false

type AnyOf<T extends readonly any[]> = T[number] extends
  | false
  | 0
  | ''
  | []
  | { [key: string]: never }
  | undefined
  | null
  ? false
  : true
