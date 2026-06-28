import { projectsIntro } from '../../config/projectsShowcase'
import { Container } from '../ui'
import { ProjectScrollShowcase } from './projects/ProjectScrollShowcase'

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white pb-20 max-lg:overflow-x-hidden md:pb-28">
      <Container className="pt-20 md:pt-28">
        <header className="w-full max-w-5xl">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:gap-5">
            <span
              className="h-[2px] w-12 shrink-0 bg-ink sm:h-[2.5px] sm:w-[35%] sm:max-w-[42rem]"
              aria-hidden="true"
            />
            <h2 className="min-w-0 font-playfair text-2xl leading-none text-ink sm:text-3xl md:text-4xl lg:text-[2.75rem]">
              Selected Work
            </h2>
          </div>

          <p className="mt-6 w-full max-w-5xl font-roboto text-sm leading-relaxed text-ink sm:mt-8 sm:text-[15px] sm:leading-7 lg:pl-30">
            {projectsIntro}
          </p>
        </header>
      </Container>

      <div className="mt-14 md:mt-20">
        <ProjectScrollShowcase />
      </div>
    </section>
  )
}
