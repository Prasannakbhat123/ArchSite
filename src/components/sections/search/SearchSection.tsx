import { motion, useReducedMotion } from 'framer-motion'
import { Bed, ChevronDown, Coins, Home, MapPin, User } from 'lucide-react'
import { useState } from 'react'
import searchBg from '../../../assets/search/search.png'
import { searchContent } from '../../../config/search'

const viewport = { once: true, margin: '-60px' as const }
const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const filterIcons = {
  price: Coins,
  type: Home,
  beds: Bed,
} as const

function ServiceCard({ label }: { label: string }) {
  return (
    <div className="flex h-[148px] w-[168px] flex-col items-center justify-center rounded-sm border border-white/30 bg-white/15 px-5 py-8 backdrop-blur-sm sm:h-[158px] sm:w-[188px] lg:h-[168px] lg:w-[210px]">
      <User className="mb-5 size-9 text-white sm:size-10" strokeWidth={1.25} />
      <span className="text-center font-roboto text-[10px] font-medium uppercase leading-[1.45] tracking-[0.14em] text-white sm:text-[11px]">
        {label}
      </span>
    </div>
  )
}

export function SearchSection() {
  const reduceMotion = useReducedMotion()
  const [mode, setMode] = useState<(typeof searchContent.modes)[number]>('Buy')

  return (
    <section
      id="search"
      aria-label="Property search"
      className="relative min-h-[440px] overflow-hidden sm:min-h-[480px] lg:min-h-[520px]"
    >
      <img
        src={searchBg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="relative z-10 mx-auto flex h-full min-h-[inherit] max-w-5xl flex-col justify-between px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="font-playfair text-3xl uppercase leading-tight tracking-[0.06em] text-white sm:text-4xl lg:text-[2.75rem] lg:tracking-[0.08em]"
          >
            {searchContent.title}
          </motion.h2>

          <motion.ul
            initial={reduceMotion ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
            }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 sm:gap-5 lg:gap-6"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.li key={i} variants={fadeUp}>
                <ServiceCard label={searchContent.serviceLabel} />
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mx-auto mt-10 w-full max-w-4xl sm:mt-12"
        >
          <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg sm:flex-row sm:items-stretch">
            <div className="flex shrink-0 items-center gap-5 border-b border-sand-300/80 px-5 py-3 sm:border-b-0 sm:border-r sm:py-0 sm:pl-5 sm:pr-4">
              {searchContent.modes.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`font-roboto text-sm transition-colors ${
                    mode === item
                      ? 'font-semibold text-ink'
                      : 'font-normal text-ink-muted hover:text-ink'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="hidden w-px shrink-0 bg-sand-300/80 sm:block" aria-hidden />

            <input
              type="search"
              placeholder={searchContent.placeholder}
              className="min-w-0 flex-1 border-b border-sand-300/80 px-5 py-3 font-roboto text-sm text-ink outline-none placeholder:text-ink-muted/60 sm:border-b-0 sm:py-3.5"
            />

            <div className="hidden w-px shrink-0 bg-sand-300/80 sm:block" aria-hidden />

            <div className="flex items-center border-b border-sand-300/80 sm:border-b-0 sm:border-r">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 px-5 py-3 font-roboto text-xs font-medium uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink sm:py-3.5"
              >
                <MapPin className="size-4 shrink-0" strokeWidth={1.5} />
                {searchContent.regionLabel}
              </button>
            </div>

            <button
              type="button"
              className="shrink-0 bg-[#F2D95C] px-8 py-3.5 font-roboto text-sm font-semibold text-ink transition-colors hover:bg-[#e8c84a] sm:px-10"
            >
              {searchContent.searchCta}
            </button>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {searchContent.filters.map(({ id, label }) => {
              const Icon = filterIcons[id as keyof typeof filterIcons]
              return (
                <button
                  key={id}
                  type="button"
                  className="flex items-center justify-between gap-3 rounded-lg bg-white px-4 py-3 font-roboto text-sm text-ink shadow-md transition-colors hover:bg-sand-50"
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="size-4 shrink-0 text-ink-muted" strokeWidth={1.5} />
                    {label}
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-ink-muted" strokeWidth={1.5} />
                </button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
