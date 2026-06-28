import type Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'

/** Official Lenis + GSAP ScrollTrigger wiring (see lenis README). */
export function connectLenisScrollTrigger(lenis: Lenis) {
  lenis.on('scroll', ScrollTrigger.update)

  const onTick = (time: number) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(onTick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(onTick)
    lenis.off('scroll', ScrollTrigger.update)
  }
}
