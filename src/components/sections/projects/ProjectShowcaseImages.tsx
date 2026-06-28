import type { ShowcaseProject } from '../../../config/projectsShowcase'

type ProjectShowcaseImagesProps = {
  project: ShowcaseProject
  variant?: 'desktop' | 'mobile'
}

export function ProjectShowcaseImages({
  project,
  variant = 'desktop',
}: ProjectShowcaseImagesProps) {
  if (variant === 'mobile') {
    return (
      <div className="relative w-full overflow-hidden pb-4">
        <span
          className="pointer-events-none absolute left-0 top-0 z-[1] select-none font-roboto text-[4.5rem] font-thin leading-[0.8] tracking-[-0.04em] text-transparent sm:text-[5rem]"
          style={{ WebkitTextStroke: '1.5px var(--color-sand-300)' }}
          aria-hidden="true"
        >
          {project.number}
        </span>

        <div className="relative z-10 ml-auto w-[76%] max-w-[260px] pt-2 sm:max-w-[300px] sm:pt-4 sm:w-[74%]">
          <img
            src={project.images.back}
            alt={`${project.title} interior overview`}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <div className="relative z-20 -mt-[26%] ml-1 w-[66%] max-w-[230px] sm:-mt-[28%] sm:ml-2 sm:max-w-[250px] sm:w-[64%]">
          <img
            src={project.images.front}
            alt={`${project.title} detail view`}
            className="aspect-[5/4] w-full object-cover shadow-[0_18px_40px_rgba(42,35,28,0.2)]"
          />
        </div>

        <div className="relative z-30 mt-6 flex justify-center sm:mt-8">
          <a
            href="#"
            className="inline-block bg-sand-200 px-8 py-2.5 font-cormorant text-lg text-ink transition-colors hover:bg-sand-300"
          >
            View Case
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full pb-16 sm:pb-20">
      <span
        className="pointer-events-none absolute left-0 top-0 z-[1] select-none font-roboto text-[clamp(4.5rem,9vw,9rem)] font-thin leading-[0.8] tracking-[-0.04em] text-transparent lg:text-[9.5rem]"
        style={{ WebkitTextStroke: '1.5px var(--color-sand-300)' }}
        aria-hidden="true"
      >
        {project.number}
      </span>

      <div className="relative z-10 ml-[clamp(2.25rem,8vw,5.5rem)] w-full max-w-[38rem] pt-1 sm:max-w-[40rem] lg:max-w-[42rem]">
        <div className="relative ml-auto w-[80%] sm:w-[78%]">
          <img
            src={project.images.back}
            alt={`${project.title} interior overview`}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <div className="absolute -left-[12%] top-[46%] z-20 w-[48%] sm:-left-[14%] sm:top-[42%] sm:w-[50%] md:top-[40%] lg:-left-[15%] lg:top-[38%] lg:w-[52%]">
          <img
            src={project.images.front}
            alt={`${project.title} detail view`}
            className="aspect-[5/4] w-full object-cover shadow-[0_22px_50px_rgba(42,35,28,0.22)]"
          />
        </div>

        <div className="relative z-10 mt-8 flex justify-center sm:mt-9">
          <a
            href="#"
            className="inline-block translate-x-6 bg-sand-200 px-10 py-2.5 font-cormorant text-lg text-ink transition-colors hover:bg-sand-300 sm:translate-x-8 lg:translate-x-10"
          >
            View Case
          </a>
        </div>
      </div>
    </div>
  )
}
