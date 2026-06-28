import type { ShowcaseProject } from '../../../config/projectsShowcase'

type ProjectShowcaseTextProps = {
  project: ShowcaseProject
  variant?: 'desktop' | 'mobile'
}

export function ProjectShowcaseText({
  project,
  variant = 'desktop',
}: ProjectShowcaseTextProps) {
  if (variant === 'mobile') {
    return (
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h3 className="font-playfair text-3xl leading-tight text-ink sm:text-4xl">
            {project.title}
          </h3>

          <p className="mx-auto mt-4 max-w-md font-cormorant text-lg leading-relaxed text-ink-muted sm:mt-5 sm:text-xl sm:leading-8">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <a
            href="#"
            className="inline-flex w-fit items-center gap-3 font-cormorant text-xl text-ink transition-colors hover:text-gold-800"
          >
            <span className="h-px w-10 bg-ink sm:w-12" aria-hidden="true" />
            More
          </a>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-3 font-cormorant text-xl text-ink transition-colors hover:text-gold-800"
          >
            Designs
            <span className="h-px w-10 bg-ink sm:w-12" aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-full min-h-0 flex-col justify-between py-6 sm:py-8 lg:py-10 lg:pl-2 xl:pl-4">
      <div>
        <h3 className="font-playfair text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15] xl:text-[2.65rem]">
          {project.title}
        </h3>

        <p className="mt-6 max-w-md font-cormorant text-lg leading-relaxed text-ink-muted lg:mt-8 lg:text-xl lg:leading-8">
          {project.description}
        </p>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-5 pt-8 lg:gap-6 lg:pt-10">
        <a
          href="#"
          className="inline-flex w-fit items-center gap-4 font-cormorant text-xl text-ink transition-colors hover:text-gold-800"
        >
          <span className="h-px w-12 bg-ink" aria-hidden="true" />
          More
        </a>
        <a
          href="#"
          className="inline-flex w-fit items-center gap-4 font-cormorant text-xl text-ink transition-colors hover:text-gold-800"
        >
          Designs
          <span className="h-px w-12 bg-ink" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
