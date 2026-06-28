import { motion, useReducedMotion } from 'framer-motion'
import aboutImage from '../../assets/about/second.png'
import { aboutContent, aboutStats } from '../../config/about'
import { Container } from '../ui'
import { AboutPanel } from './AboutPanel'

const viewport = { once: true, margin: '-80px' as const }
const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
}

const imageReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease },
  },
}

const textStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const statsStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const statItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

function AboutHeadingContent({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      className="w-full max-w-[min(92vw,48rem)] lg:w-max"
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={viewport}
      variants={textStagger}
    >
      <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3 sm:mb-5">
        <span className="h-px w-10 shrink-0 bg-brand" aria-hidden="true" />
        <span className="font-roboto text-[11px] font-medium uppercase tracking-[0.2em] text-brand sm:text-xs">
          {aboutContent.eyebrow}
        </span>
      </motion.div>

      <h2 className="font-cormorant text-4xl font-normal leading-[1.12] text-inverse sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] xl:text-6xl xl:leading-[1.08] 2xl:text-[4.25rem]">
        <motion.span variants={fadeUp} className="block">
          {aboutContent.heading}
        </motion.span>
        <motion.span variants={fadeUp} className="block">
          <em className="font-cormorant font-normal italic">{aboutContent.headingEmphasis}</em>{' '}
          {aboutContent.headingSuffix}
        </motion.span>
      </h2>
    </motion.div>
  )
}

export function AboutShowcase() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="about" aria-label="About showcase" className="overflow-x-hidden">
      <div className="relative lg:grid lg:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[500px] xl:min-h-[560px]">
          <motion.img
            src={aboutImage}
            alt="Modern minimalist living room interior"
            className="absolute inset-0 h-full w-full object-cover"
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={imageReveal}
          />
        </div>

        <AboutPanel className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-14">
          <motion.div
            className="lg:hidden"
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <AboutHeadingContent reduceMotion={reduceMotion} />
          </motion.div>

          <motion.div
            className="mt-10 space-y-5 sm:mt-12 lg:mt-[17rem] xl:mt-[19rem] 2xl:mt-[21rem]"
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={textStagger}
          >
            {aboutContent.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                variants={fadeUp}
                className="max-w-lg font-roboto text-sm leading-relaxed text-inverse/85 sm:text-[15px] sm:leading-7 lg:pl-2"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </AboutPanel>

        <div className="pointer-events-none absolute top-[20%] left-1/2 z-30 hidden -translate-x-1/2 lg:block xl:top-[22%]">
          <AboutHeadingContent reduceMotion={reduceMotion} />
        </div>
      </div>

      <AboutPanel>
        <Container className="py-10 md:py-12 lg:py-14">
          <motion.ul
            className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-12"
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={statsStagger}
          >
            {aboutStats.map(({ value, lines }) => (
              <motion.li
                key={value}
                variants={statItem}
                className="flex items-center gap-4 sm:gap-5"
              >
                <span className="shrink-0 font-cormorant text-5xl font-normal leading-none text-inverse md:text-6xl lg:text-7xl">
                  {value}
                </span>
                <span className="font-roboto text-[10px] font-normal uppercase leading-snug tracking-[0.14em] text-inverse sm:text-[11px]">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </AboutPanel>
    </section>
  )
}
