import { PromiseFunctionType } from '@/types'

export * from './blurhash'
export * from './images'
export * from './reportAccessibility'

export const promisePool = async <T>(functions: PromiseFunctionType<T>[], n: number) => {
  let i = 0
  let result: T[] = []
  const callback = async () => {
    if (i === functions.length) {
      return
    }
    result.push(await functions[i++]())
    await callback()
  }

  const promises = Array.from({ length: n }, () => callback())
  await Promise.all(promises)
  return result
}
