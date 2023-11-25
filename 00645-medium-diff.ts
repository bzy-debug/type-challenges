// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

// ============= Your Code Here =============
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : (K extends keyof F ? F[K] : never)
}
type Diff<O, O1> = Merge<Omit<O, keyof O1>, Omit<O1, keyof O>>
