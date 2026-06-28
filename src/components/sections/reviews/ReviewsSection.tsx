import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { reviews, reviewsContent } from '../../../config/reviews'
import { Container } from '../../ui'
import { ReviewCard } from './ReviewCard'

const viewport = { once: true, margin: '-60px' as const }
const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

function useIsMobileScatter() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isMobile
}

export function ReviewsSection() {
  const reduceMotion = useReducedMotion()
  const isMobile = useIsMobileScatter()
  const initialOrder = useMemo(
    () => [...reviews].sort((a, b) => a.layout.zIndex - b.layout.zIndex).map((r) => r.id),
    [],
  )
  const [stackOrder, setStackOrder] = useState(initialOrder)

  const bringToFront = useCallback((id: string) => {
    setStackOrder((prev) => {
      if (prev[prev.length - 1] === id) return prev
      return [...prev.filter((item) => item !== id), id]
    })
  }, [])

  const frontId = stackOrder[stackOrder.length - 1]

  return (
    <section
      id="reviews"
      aria-label="Customer reviews"
      className="overflow-x-hidden bg-white py-16 md:py-20 lg:py-24"
    >
      <Container className="overflow-x-hidden">
        <motion.div
          className="mb-10 md:mb-12 lg:mb-14"
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-10 shrink-0 bg-brand" aria-hidden />
            <span className="font-roboto text-[11px] font-medium uppercase tracking-[0.2em] text-brand sm:text-xs">
              {reviewsContent.eyebrow}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="max-w-3xl font-playfair text-3xl font-normal uppercase leading-[1.1] tracking-[0.02em] text-ink sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
          >
            {reviewsContent.title}
          </motion.h2>
        </motion.div>

        <div className="relative mx-auto min-h-[560px] w-full max-w-full overflow-hidden sm:min-h-[680px] md:max-w-6xl lg:min-h-[920px]">
          {reviews.map((review) => {
            const stackIndex = stackOrder.indexOf(review.id)
            const activeLayout = isMobile ? review.mobileLayout : review.layout

            return (
              <ReviewCard
                key={review.id}
                review={review}
                layout={activeLayout}
                stackIndex={stackIndex}
                isFront={review.id === frontId}
                isMobile={isMobile}
                onFocus={() => bringToFront(review.id)}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}
