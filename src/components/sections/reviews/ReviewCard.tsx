import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Review, ReviewCardLayout } from '../../../config/reviews'

const ACCENT = '#A68B6A'
const spring = { type: 'spring' as const, stiffness: 320, damping: 28, mass: 0.85 }

type ReviewCardProps = {
  review: Review
  layout: ReviewCardLayout
  stackIndex: number
  isFront: boolean
  isMobile: boolean
  onFocus: () => void
}

function CornerBracketTopLeft() {
  return (
    <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 sm:left-5 sm:top-5 sm:h-5 sm:w-5" aria-hidden>
      <span className="absolute left-0 top-0 h-full w-px" style={{ backgroundColor: ACCENT }} />
      <span className="absolute left-0 top-0 h-px w-full" style={{ backgroundColor: ACCENT }} />
    </span>
  )
}

function CornerBracketBottomRight() {
  return (
    <span
      className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 sm:bottom-5 sm:right-5 sm:h-5 sm:w-5"
      aria-hidden
    >
      <span className="absolute bottom-0 right-0 h-full w-px" style={{ backgroundColor: ACCENT }} />
      <span className="absolute bottom-0 right-0 h-px w-full" style={{ backgroundColor: ACCENT }} />
    </span>
  )
}

function DecorativeQuote() {
  return (
    <div
      className="pointer-events-none absolute left-3 top-[62%] z-0 -translate-y-1/2 sm:left-5"
      aria-hidden
    >
      <span
        className="font-playfair text-[2.75rem] leading-none opacity-55 sm:text-[4rem]"
        style={{ color: ACCENT }}
      >
        &ldquo;
      </span>
    </div>
  )
}

export function ReviewCard({
  review,
  layout,
  stackIndex,
  isFront,
  isMobile,
  onFocus,
}: ReviewCardProps) {
  const rotate = isFront ? layout.rotate * 0.35 : layout.rotate

  return (
    <motion.button
      type="button"
      layout
      onClick={onFocus}
      className="absolute w-[min(44vw,168px)] max-w-[calc(100%-8px)] cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A68B6A] focus-visible:ring-offset-2 sm:w-[200px] sm:max-w-none md:w-[220px] lg:w-[250px] xl:w-[268px]"
      style={{
        top: layout.top,
        left: layout.left,
        zIndex: stackIndex + 1,
      }}
      initial={{ opacity: 0, y: isMobile ? 20 : 24, scale: isMobile ? 1 : 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      animate={{
        scale: isFront ? (isMobile ? 1 : 1.05) : 1,
        y: isFront ? (isMobile ? -8 : -14) : 0,
        rotate,
        boxShadow: isFront
          ? '0 28px 56px rgba(0,0,0,0.32)'
          : '0 18px 40px rgba(0,0,0,0.22)',
      }}
      whileHover={{
        scale: isFront ? (isMobile ? 1 : 1.06) : isMobile ? 1 : 1.02,
        y: isFront ? (isMobile ? -10 : -16) : isMobile ? 0 : -6,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        ...spring,
        opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        y: spring,
        scale: spring,
        rotate: spring,
        boxShadow: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      }}
      aria-label={`Review by ${review.name}. Click to bring to front.`}
    >
      <div className="relative min-h-[240px] bg-black px-4 pb-16 pt-6 sm:min-h-[280px] sm:px-5 sm:pb-18 sm:pt-7 lg:min-h-[320px] lg:px-6 lg:pb-20 lg:pt-8">
        <CornerBracketTopLeft />
        <CornerBracketBottomRight />
        <DecorativeQuote />

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="max-w-[92%] font-roboto text-[10px] leading-[1.6] text-white sm:text-[11px] sm:leading-[1.65] lg:text-xs lg:leading-6">
            {review.quote}
          </p>

          <div className="mt-4 flex justify-center gap-1 sm:mt-5 lg:mt-6" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 + i * 0.04, ...spring }}
              >
                <Star className="size-3 fill-white text-white sm:size-3.5 lg:size-4" strokeWidth={0} />
              </motion.span>
            ))}
          </div>

          <p className="mt-3 font-roboto text-sm font-bold text-white sm:mt-4 lg:mt-5">{review.name}</p>
          <p
            className="mt-1 font-roboto text-[10px] font-normal uppercase tracking-[0.18em] sm:text-[11px]"
            style={{ color: ACCENT }}
          >
            {review.role}
          </p>
        </div>

        <motion.div
          className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2"
          animate={{ scale: isFront ? 1.05 : 1 }}
          transition={spring}
        >
          <div className="bg-transparent p-1.5 sm:p-2" style={{ border: `1px solid ${ACCENT}` }}>
            <img
              src={review.avatar}
              alt=""
              width={48}
              height={48}
              className="size-11 object-cover sm:size-12 lg:size-14"
            />
          </div>
        </motion.div>
      </div>
    </motion.button>
  )
}
