import { useEffect, useState } from 'react'

const QUERY = '(max-width: 1023px)'

/** True below the `lg` breakpoint (1024px). */
export function useIsBelowLg() {
  const [isBelowLg, setIsBelowLg] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const update = () => setIsBelowLg(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isBelowLg
}
