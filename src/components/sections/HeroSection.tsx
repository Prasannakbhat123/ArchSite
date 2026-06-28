import { motion, useReducedMotion } from 'framer-motion'
import { heroContent } from '../../config/hero'
import { useIsBelowLg } from '../../hooks/useIsBelowLg'
import { Button, Container } from '../ui'
import { HeroSpotlight } from './hero/HeroSpotlight'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
}

const textStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const isBelowLg = useIsBelowLg()

  const heroImageInitial = reduceMotion
    ? false
    : isBelowLg
      ? { opacity: 0, y: 24 }
      : { opacity: 0, x: 56, y: 20 }

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-72px)] overflow-x-clip overflow-y-hidden bg-white"
    >
      <motion.div
        className="pointer-events-auto absolute bottom-0 right-0 z-[1] h-[58vh] w-[80vw] max-h-[520px] max-w-full overflow-hidden sm:h-[60vh] sm:max-h-[560px] md:w-[74vw] md:max-w-[800px] lg:h-[calc(100vh-72px)] lg:max-h-none lg:w-[68vw] lg:max-w-[900px] xl:w-[64vw] xl:max-w-[980px]"
        initial={heroImageInitial}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.25 }}
      >
        <HeroSpotlight />
      </motion.div>

      <Container className="pointer-events-none relative z-10 flex min-h-[inherit] items-start pt-14 md:pt-16 lg:pt-20 xl:pt-24">
        <motion.div
          className="pointer-events-auto w-full max-w-xl lg:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={textStagger}
        >
          <motion.h1
            variants={fadeUp}
            className="font-playfair text-3xl font-bold uppercase leading-[1.08] tracking-[0.02em] text-ink sm:text-[2rem] md:text-4xl lg:text-[2.35rem] xl:text-[2.65rem]"
          >
            {heroContent.headline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl font-roboto text-base leading-relaxed text-ink-muted sm:text-[17px] sm:leading-8 md:text-lg lg:max-w-2xl"
          >
            {heroContent.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <Button
              href={heroContent.ctaHref}
              variant="muted"
              className="px-8 py-3.5 font-roboto text-sm font-normal tracking-normal"
            >
              {heroContent.ctaLabel}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
