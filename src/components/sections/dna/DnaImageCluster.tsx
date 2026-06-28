import type { DnaSetConfig } from '../../../config/dna'

type DnaImageClusterProps = {
  images: DnaSetConfig['images']
  overlap: DnaSetConfig['overlap']
}

export function DnaImageCluster({ images, overlap }: DnaImageClusterProps) {
  const overlapClass =
    overlap === 'top-left'
      ? 'left-0 top-0 w-[52%] -translate-x-[10%] -translate-y-[14%] sm:w-[50%] sm:-translate-x-[8%]'
      : 'right-0 top-0 w-[52%] translate-x-[10%] -translate-y-[14%] sm:w-[50%] sm:translate-x-[8%]'

  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[88%] w-[94%] border-[9px] border-sand-300 sm:border-[10px]"
        aria-hidden
      />

      <div className="relative z-10 ml-4 pt-6 sm:ml-6 sm:pt-8">
        <div className="relative border-[9px] border-sand-300 bg-white sm:border-[10px]">
          <img
            src={images.bottom}
            alt={images.bottomAlt}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className={`absolute z-20 shadow-[0_20px_44px_rgba(42,35,28,0.18)] ${overlapClass}`}>
          <img
            src={images.top}
            alt={images.topAlt}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
