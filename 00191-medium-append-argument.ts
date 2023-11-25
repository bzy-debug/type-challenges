// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]


// ============= Your Code Here =============
type ArgumentType<Fn extends Function> = Fn extends (...args:(infer Arg)) => unknown ? Arg : never
type ReturnType<Fn extends Function> = Fn extends (...args: any[]) => infer Ret ? Ret : never
type AppendArgument<Fn extends Function, A> = (...args:[...ArgumentType<Fn>, x: A]) => ReturnType<Fn>
