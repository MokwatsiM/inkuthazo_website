import { useEffect, useState } from 'react'
import { client } from './sanity'

/**
 * Fetches published content, falling back to the value baked into the bundle.
 *
 * The fallback is the content that shipped with the build, so a Sanity outage,
 * a slow connection, or an empty dataset degrades to the current copy instead
 * of an empty section. That matters on a page that quotes fees and benefits:
 * a blank membership section is worse than a slightly stale one.
 */
export function useSanityData<T>(query: string, fallback: T): T {
  const [data, setData] = useState<T>(fallback)

  useEffect(() => {
    let cancelled = false

    client
      .fetch<T>(query)
      .then((result) => {
        // An empty array or null means nothing is published yet — keep the fallback.
        const isEmpty =
          result === null ||
          result === undefined ||
          (Array.isArray(result) && result.length === 0)

        if (!cancelled && !isEmpty) {
          setData(result)
        }
      })
      .catch(() => {
        // Network or CORS failure: the fallback is already in state.
      })

    return () => {
      cancelled = true
    }
  }, [query])

  return data
}
