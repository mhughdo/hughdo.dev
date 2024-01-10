import { kv } from '@vercel/kv'

export const getFromCache = async <T>(key: string): Promise<T | null> => {
  if (process.env.NODE_ENV !== 'production') {
    return null
  }
  try {
    const res = await kv.get<T>(key)
    if (!res) {
      return null
    }
    return res
  } catch (error) {
    console.log('Error getting from cache', error)
  }
  return null
}

export const setToCache = async <T>(key: string, value: T, ex: number = 60 * 60) => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }
  try {
    await kv.set(key, value, { ex, nx: true })
  } catch (error) {
    console.log('Error setting to cache', error)
  }
}
