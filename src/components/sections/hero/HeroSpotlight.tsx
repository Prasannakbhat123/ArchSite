import { useCallback, useEffect, useLayoutEffect, useRef, type PointerEvent } from 'react'
import colorImage from '../../../assets/hero/color.png'
import outlineImage from '../../../assets/hero/outline.png'
import { heroSpotlight } from '../../../config/hero'

const LERP = 0.22

export function HeroSpotlight() {
  const stageRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLImageElement>(null)
  const colorRef = useRef<HTMLImageElement>(null)
  const hoveringRef = useRef(false)
  const posRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const rafRef = useRef<number | null>(null)

  const layoutImages = useCallback(() => {
    const stage = stageRef.current
    const outline = outlineRef.current
    const color = colorRef.current
    if (!stage || !outline || !color) return

    const masterW = outline.naturalWidth || heroSpotlight.masterWidth
    const masterH = outline.naturalHeight || heroSpotlight.masterHeight
    const colorW = color.naturalWidth
    const colorH = color.naturalHeight
    if (!masterW || !masterH || !colorW || !colorH) return

    const scale = Math.min(stage.clientWidth / masterW, stage.clientHeight / masterH)
    const { x: offsetX, y: offsetY } = heroSpotlight.colorOffset
    const autoOffsetX = -(masterW - colorW) * scale * 0.5
    const autoOffsetY = (colorH - masterH) * scale
    const translateX = offsetX + autoOffsetX
    const translateY = offsetY + autoOffsetY

    const applyLayout = (
      img: HTMLImageElement,
      width: number,
      height: number,
      extraTransform = '',
    ) => {
      const transform = [extraTransform].filter(Boolean).join(' ') || 'none'
      Object.assign(img.style, {
        position: 'absolute',
        right: '0',
        bottom: '0',
        width: `${width * scale}px`,
        height: `${height * scale}px`,
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'fill',
        objectPosition: 'right bottom',
        pointerEvents: 'none',
        transform,
      })
    }

    applyLayout(outline, masterW, masterH)
    applyLayout(
      color,
      colorW,
      colorH,
      translateX || translateY ? `translate(${translateX}px, ${translateY}px)` : '',
    )
  }, [])

  const hideColorLayer = useCallback(() => {
    const color = colorRef.current
    if (!color) return

    color.style.opacity = '0'
    color.style.visibility = 'hidden'
    color.style.maskImage = 'none'
    color.style.webkitMaskImage = 'none'
  }, [])

  const applyMask = useCallback(() => {
    const color = colorRef.current
    if (!color) return

    if (!hoveringRef.current) {
      hideColorLayer()
      return
    }

    const { x, y } = posRef.current
    const { radius } = heroSpotlight
    const gradient = `radial-gradient(circle ${radius}px at ${x}px ${y}px, #000 0%, #000 98%, transparent 100%)`

    color.style.visibility = 'visible'
    color.style.maskImage = gradient
    color.style.webkitMaskImage = gradient
    color.style.opacity = '1'
  }, [hideColorLayer])

  const tick = useCallback(() => {
    const pos = posRef.current
    pos.x += (pos.targetX - pos.x) * LERP
    pos.y += (pos.targetY - pos.y) * LERP

    applyMask()

    const moving =
      Math.abs(pos.targetX - pos.x) > 0.5 || Math.abs(pos.targetY - pos.y) > 0.5

    if (hoveringRef.current || moving) {
      rafRef.current = requestAnimationFrame(tick)
    } else {
      rafRef.current = null
    }
  }, [applyMask])

  const startAnimation = useCallback(() => {
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(tick)
    }
  }, [tick])

  const setPointerFromEvent = useCallback(
    (clientX: number, clientY: number) => {
      const img = colorRef.current
      if (!img) return

      const rect = img.getBoundingClientRect()
      posRef.current.targetX = clientX - rect.left
      posRef.current.targetY = clientY - rect.top
      startAnimation()
    },
    [startAnimation],
  )

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      hoveringRef.current = true
      setPointerFromEvent(event.clientX, event.clientY)
    },
    [setPointerFromEvent],
  )

  const handlePointerEnter = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      hoveringRef.current = true
      setPointerFromEvent(event.clientX, event.clientY)
    },
    [setPointerFromEvent],
  )

  const handlePointerLeave = useCallback(() => {
    hoveringRef.current = false
    startAnimation()
  }, [startAnimation])

  const handleImageReady = useCallback(() => {
    layoutImages()
    hideColorLayer()
  }, [layoutImages, hideColorLayer])

  useLayoutEffect(() => {
    hideColorLayer()
    layoutImages()
    hideColorLayer()

    const stage = stageRef.current
    if (!stage) return

    const observer = new ResizeObserver(() => layoutImages())
    observer.observe(stage)

    return () => observer.disconnect()
  }, [layoutImages, hideColorLayer])

  useEffect(() => {
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="relative h-full w-full overflow-hidden"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <img
        ref={outlineRef}
        src={outlineImage}
        alt=""
        aria-hidden
        draggable={false}
        onLoad={handleImageReady}
        className="absolute right-0 bottom-0"
      />
      <img
        ref={colorRef}
        src={colorImage}
        alt="Terraced houses architectural illustration"
        draggable={false}
        onLoad={handleImageReady}
        className="absolute right-0 bottom-0 opacity-0"
        style={{ visibility: 'hidden' }}
      />
    </div>
  )
}
