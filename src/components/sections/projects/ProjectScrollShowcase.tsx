import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { showcaseProjects } from '../../../config/projectsShowcase'
import { Container } from '../../ui'
import { ProjectShowcaseImages } from './ProjectShowcaseImages'
import { ProjectShowcaseText } from './ProjectShowcaseText'
import { ProjectScrollShowcaseMobile } from './ProjectScrollShowcaseMobile'

const PROJECT_COUNT = showcaseProjects.length

const SEGMENT = 1 / PROJECT_COUNT
/** Most of each segment is a gradual crossfade, not a quick snap */
const TRANSITION_SHARE = 0.58
const OFFSET_MAX = 28

const SCROLL_HEIGHT_VH = PROJECT_COUNT * 62 + (PROJECT_COUNT - 1) * 24

type SlideState = {
  offsetPercent: number
  opacity: number
}

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t))
  return x * x * (3 - 2 * x)
}

function easeInOutSine(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2
}

function gentleFade(t: number) {
  return smoothstep(smoothstep(t))
}

function computeSlideState(progress: number, index: number): SlideState {
  const p = Math.min(1, Math.max(0, progress))
  const segStart = index * SEGMENT
  const segEnd = (index + 1) * SEGMENT
  const transLength = SEGMENT * TRANSITION_SHARE
  const transStart = segEnd - transLength

  if (p < segStart) {
    if (index === 0) {
      return { offsetPercent: 0, opacity: 1 }
    }

    const enterStart = segStart - transLength
    if (p >= enterStart) {
      const t = easeInOutSine((p - enterStart) / transLength)
      const fade = gentleFade(t)
      return {
        offsetPercent: OFFSET_MAX * (1 - t),
        opacity: fade,
      }
    }

    return { offsetPercent: OFFSET_MAX, opacity: 0 }
  }

  if (p < transStart || index === PROJECT_COUNT - 1) {
    return { offsetPercent: 0, opacity: 1 }
  }

  if (p < segEnd) {
    const t = easeInOutSine((p - transStart) / transLength)
    const fade = gentleFade(1 - t)
    return {
      offsetPercent: -OFFSET_MAX * t,
      opacity: fade,
    }
  }

  return { offsetPercent: -OFFSET_MAX, opacity: 0 }
}

function useSlideMotion(progress: MotionValue<number>, index: number) {
  const state = useTransform(progress, (p) => computeSlideState(p, index))

  const y = useTransform(state, (s) => `${s.offsetPercent}%`)
  const x = useTransform(state, (s) => `${s.offsetPercent}%`)
  const opacity = useTransform(state, (s) => s.opacity)
  const pointerEvents = useTransform(opacity, (v) => (v > 0.05 ? 'auto' : 'none'))

  return { y, x, opacity, pointerEvents }
}

type AnimatedPanelProps = {
  index: number
  progress: MotionValue<number>
  axis: 'vertical' | 'horizontal'
  children: ReactNode
}

function AnimatedPanel({ index, progress, axis, children }: AnimatedPanelProps) {
  const { y, x, opacity, pointerEvents } = useSlideMotion(progress, index)

  return (
    <motion.div
      className="absolute inset-0 will-change-[transform,opacity]"
      style={{
        y: axis === 'vertical' ? y : undefined,
        x: axis === 'horizontal' ? x : undefined,
        opacity,
        pointerEvents,
      }}
    >
      {children}
    </motion.div>
  )
}

export function ProjectScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 38,
    damping: 26,
    mass: 0.55,
    restDelta: 0.0005,
  })

  return (
    <>
      <div className="lg:hidden">
        <ProjectScrollShowcaseMobile />
      </div>

      <div
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
      >
      <div className="sticky top-[72px] z-10 h-[calc(100dvh-72px)] overflow-x-clip overflow-y-visible">
        <Container className="flex h-full items-center py-6 sm:py-8">
          <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,13fr)_minmax(0,7fr)] lg:gap-10 xl:gap-14">
            <div className="relative isolate min-h-[min(70vh,640px)] w-full sm:min-h-[min(68vh,680px)] lg:min-h-[min(72vh,720px)]">
              {showcaseProjects.map((project, index) => (
                <AnimatedPanel
                  key={project.id}
                  index={index}
                  progress={smoothProgress}
                  axis="vertical"
                >
                  <ProjectShowcaseImages project={project} />
                </AnimatedPanel>
              ))}
            </div>

            <div className="relative isolate min-h-[min(70vh,640px)] w-full sm:min-h-[min(68vh,680px)] lg:min-h-[min(72vh,720px)]">
              {showcaseProjects.map((project, index) => (
                <AnimatedPanel
                  key={project.id}
                  index={index}
                  progress={smoothProgress}
                  axis="horizontal"
                >
                  <ProjectShowcaseText project={project} />
                </AnimatedPanel>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
    </>
  )
}
