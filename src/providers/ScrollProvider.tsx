import Lenis from 'lenis'
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { defaultActiveNavId, navLinks, NAVBAR_OFFSET } from '../config/navigation'
import { connectLenisScrollTrigger } from '../lib/lenisScrollTrigger'

type ScrollContextValue = {
  activeNavId: string
  scrollToSection: (sectionId: string) => void
}

const ScrollContext = createContext<ScrollContextValue | null>(null)

function resolveActiveSection(scrollY: number): string {
  const position = scrollY + NAVBAR_OFFSET + 80

  let active = defaultActiveNavId
  let bestTop = -1

  for (const { id } of navLinks) {
    const section = document.getElementById(id)
    if (section && section.offsetTop <= position && section.offsetTop >= bestTop) {
      bestTop = section.offsetTop
      active = id
    }
  }

  return active
}

type ScrollProviderProps = {
  children: ReactNode
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [activeNavId, setActiveNavId] = useState(defaultActiveNavId)
  const lenisRef = useRef<Lenis | null>(null)

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    const onScroll = (instance: Lenis) => {
      setActiveNavId(resolveActiveSection(instance.scroll))
    }

    lenis.on('scroll', onScroll)

    const disconnectScrollTrigger = connectLenisScrollTrigger(lenis)

    return () => {
      disconnectScrollTrigger()
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId)

    if (!target || !lenisRef.current) return

    lenisRef.current.scrollTo(target, {
      offset: -NAVBAR_OFFSET,
      duration: 1.1,
    })
  }, [])

  const value = useMemo(
    () => ({ activeNavId, scrollToSection }),
    [activeNavId, scrollToSection],
  )

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

export function useScroll() {
  const context = useContext(ScrollContext)

  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider')
  }

  return context
}
