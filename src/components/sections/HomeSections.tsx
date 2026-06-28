import { motion, useReducedMotion } from 'framer-motion'
import { portfolioIntroContent, valuationContent } from '../../config/home'
import { useIsBelowLg } from '../../hooks/useIsBelowLg'
import { ReviewsSection } from './reviews/ReviewsSection'
import { SearchSection } from './search/SearchSection'

const viewport = { once: true, margin: '-60px' as const }

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
}

const imageReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease },
  },
}

const imageRevealDesktop = {
  hidden: { opacity: 0, y: 56, scale: 1.03 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease },
  },
}

const textStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
}

function PropertyValuationBlock() {
  const reduceMotion = useReducedMotion()
  const isBelowLg = useIsBelowLg()
  const valuationImageVariants = isBelowLg ? imageReveal : imageRevealDesktop
  const contentTop = 'pt-12 lg:pt-16 xl:pt-[4.25rem]'

  return (
    <section
      aria-label="Property valuation"
      className="relative z-30 overflow-x-hidden bg-[#141414] text-inverse lg:overflow-visible lg:min-h-[500px] xl:min-h-[540px]"
    >
      <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:items-stretch">
        <div className="relative min-h-[300px] overflow-hidden px-6 pb-8 sm:px-10 sm:pb-10 lg:overflow-visible lg:h-full lg:min-h-0 lg:px-8 lg:pb-0 lg:pr-2 xl:px-10 xl:pr-4">
          <motion.img
            src={valuationContent.image}
            alt={valuationContent.imageAlt}
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={valuationImageVariants}
            className="relative z-30 mx-auto aspect-[3/4] w-full max-w-md object-cover object-right sm:max-w-lg lg:absolute lg:left-auto lg:right-2 lg:top-16 lg:mx-0 lg:aspect-auto lg:h-[calc(100%-4rem+9rem)] lg:max-h-none lg:min-h-[420px] lg:w-[92%] lg:max-w-[400px] lg:object-cover lg:object-top xl:right-4 xl:top-[4.25rem] xl:h-[calc(100%-4.25rem+10rem)]"
          />
        </div>

        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewport}
          variants={textStagger}
          className={`relative z-10 flex flex-col justify-start px-6 pb-14 text-center sm:px-10 sm:pb-16 lg:px-12 lg:pb-16 lg:text-left xl:px-16 xl:pb-20 ${contentTop}`}
        >
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-xl font-playfair text-2xl uppercase leading-snug tracking-[0.06em] text-gold-300 sm:text-3xl lg:mx-0 lg:text-[2rem] xl:text-[2.35rem]"
          >
            {valuationContent.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg font-roboto text-sm leading-relaxed text-inverse/75 sm:mt-6 sm:text-[15px] sm:leading-7 lg:mx-0"
          >
            {valuationContent.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-nowrap justify-center gap-2.5 sm:mt-10 sm:gap-3 lg:mt-10 lg:flex-wrap lg:justify-start lg:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center bg-gold-500 px-3.5 py-2 font-roboto text-xs font-medium tracking-wide text-ink transition-colors hover:bg-gold-400 sm:px-4 sm:text-sm lg:px-8 lg:py-3"
            >
              {valuationContent.primaryCta}
            </a>
            <a
              href="#"
              className="inline-flex shrink-0 items-center justify-center bg-sand-300 px-3.5 py-2 font-roboto text-xs font-medium tracking-wide text-ink transition-colors hover:bg-sand-200 sm:px-4 sm:text-sm lg:px-8 lg:py-3"
            >
              {valuationContent.secondaryCta}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioIntroBlock() {
  const reduceMotion = useReducedMotion()
  const isBelowLg = useIsBelowLg()
  const imageVariants = isBelowLg ? fadeUp : fadeInRight
  const panelVariants = isBelowLg ? fadeUp : fadeInLeft

  return (
    <section
      aria-label="Portfolio introduction"
      className="relative z-10 overflow-x-hidden bg-white lg:overflow-visible"
    >
      <div className="relative py-14 md:py-20 lg:pt-32 lg:pb-20 xl:pb-24">
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="relative lg:min-h-[440px] xl:min-h-[480px]">
            <motion.div
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={viewport}
              variants={imageVariants}
              className="relative z-0 mt-10 lg:absolute lg:inset-y-0 lg:left-[52%] lg:right-0 lg:mt-0 lg:w-[48%]"
            >
              <img
                src={portfolioIntroContent.image}
                alt={portfolioIntroContent.imageAlt}
                className="min-h-[280px] w-full object-cover sm:min-h-[340px] lg:absolute lg:inset-0 lg:min-h-0 lg:h-full"
              />
            </motion.div>

            <motion.div
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={viewport}
              variants={panelVariants}
              className="relative z-20 w-full bg-[#F9F9F9] px-8 py-12 sm:px-12 sm:py-14 lg:absolute lg:left-0 lg:top-1/2 lg:w-[60%] lg:-translate-y-1/2 lg:px-14 lg:py-16 xl:px-16 xl:py-[4.5rem]"
            >
              <h2 className="text-center font-playfair text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.35rem]">
                {portfolioIntroContent.title}
              </h2>

              <p className="mt-6 font-roboto text-sm leading-relaxed text-ink sm:mt-7 sm:text-[15px] sm:leading-7">
                {portfolioIntroContent.description}
              </p>

              <a
                href={portfolioIntroContent.ctaHref}
                className="mt-8 inline-flex w-fit items-center gap-1 font-roboto text-sm font-semibold text-brand transition-colors hover:text-gold-700 sm:mt-10"
              >
                {portfolioIntroContent.ctaLabel}
                <span aria-hidden="true">›</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Navbar "Home" — property valuation + portfolio intro (after projects) */
export function HomeSections() {
  return (
    <div id="home" className="overflow-x-hidden lg:overflow-visible">
      <PropertyValuationBlock />
      <PortfolioIntroBlock />
      <ReviewsSection />
      <SearchSection />
    </div>
  )
}
