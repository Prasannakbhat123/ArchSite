import { motion, useReducedMotion } from 'framer-motion'
import type { DnaSetConfig } from '../../../config/dna'
import { DnaImageCluster } from './DnaImageCluster'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
}

type DnaSetProps = {
  set: DnaSetConfig
}

export function DnaSet({ set }: DnaSetProps) {
  const reduceMotion = useReducedMotion()
  const imagesFirst = set.imagePosition === 'left'

  return (
    <motion.article
        initial={reduceMotion ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
        }}
        className={`relative z-10 grid items-center gap-10 lg:gap-14 ${
          imagesFirst ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
        }`}
      >
        <motion.div
          variants={fadeUp}
          className={imagesFirst ? 'lg:pr-4' : 'lg:order-2 lg:pl-4'}
        >
          <DnaImageCluster images={set.images} overlap={set.overlap} />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className={`flex flex-col justify-center ${
            imagesFirst ? 'lg:pl-6 xl:pl-10' : 'lg:order-1 lg:pr-6 xl:pr-10'
          }`}
        >
          <h3 className="font-playfair text-2xl leading-snug text-ink sm:text-[1.65rem] lg:text-[1.85rem] xl:text-[2rem]">
            {set.title}
          </h3>
          <p className="mt-4 max-w-md font-roboto text-sm leading-relaxed text-ink-muted sm:mt-5 sm:text-[15px] sm:leading-7">
            {set.description}
          </p>
        </motion.div>
    </motion.article>
  )
}
