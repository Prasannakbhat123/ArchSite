import { motion, useReducedMotion } from 'framer-motion'
import { dnaContent, dnaSets } from '../../../config/dna'
import { Container } from '../../ui'
import { DnaCurve } from './DnaCurve'
import { DnaSet } from './DnaSet'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export function DnaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="dna"
      aria-label="Our DNA"
      className="relative bg-white py-16 max-lg:overflow-x-hidden md:py-20 lg:py-24"
    >
      <DnaCurve />

      <Container className="relative z-10">
        <motion.header
          className="mb-14 md:mb-16 lg:mb-20"
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-10 shrink-0 bg-brand" aria-hidden />
            <span className="font-roboto text-[11px] font-medium uppercase tracking-[0.2em] text-brand sm:text-xs">
              {dnaContent.eyebrow}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair text-4xl uppercase leading-none tracking-[0.02em] text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {dnaContent.title}
          </motion.h2>
        </motion.header>

        <div className="flex flex-col gap-20 md:gap-24 lg:gap-32 xl:gap-36">
          {dnaSets.map((set) => (
            <DnaSet key={set.id} set={set} />
          ))}
        </div>
      </Container>
    </section>
  )
}
