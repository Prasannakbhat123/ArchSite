import { useReducedMotion } from 'framer-motion'
import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../../lib/gsap'
import { DNA_CURVE_PATH } from './dnaCurvePath'

export function DnaCurve() {
  const pathRef = useRef<SVGPathElement>(null)
  const reduceMotion = useReducedMotion()

  useLayoutEffect(() => {
    const path = pathRef.current
    const section = document.getElementById('dna')
    if (!path || !section) return

    let ctx = gsap.context(() => {}, section)

    const setup = () => {
      ctx.revert()
      ctx = gsap.context(() => {}, section)

      if (!window.matchMedia('(min-width: 1024px)').matches) {
        gsap.set(path, { clearProps: 'strokeDasharray,strokeDashoffset' })
        return
      }

      const length = path.getTotalLength()
      if (length < 2) return

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      if (reduceMotion) {
        gsap.set(path, { strokeDashoffset: 0 })
        return
      }

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'bottom 25%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
    }

    setup()

    const mql = window.matchMedia('(min-width: 1024px)')
    mql.addEventListener('change', setup)

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh()
      setup()
    })
    resizeObserver.observe(section)

    return () => {
      mql.removeEventListener('change', setup)
      resizeObserver.disconnect()
      ctx.revert()
    }
  }, [reduceMotion])

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full lg:block"
      viewBox="0 0 1000 2200"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        ref={pathRef}
        d={DNA_CURVE_PATH}
        fill="none"
        stroke="#fbbf00"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
