import { showcaseProjects } from '../../../config/projectsShowcase'
import { Container } from '../../ui'
import { ProjectShowcaseImages } from './ProjectShowcaseImages'
import { ProjectShowcaseText } from './ProjectShowcaseText'

export function ProjectScrollShowcaseMobile() {
  return (
    <Container className="flex flex-col gap-14 py-4 sm:gap-16 sm:py-6">
      {showcaseProjects.map((project, index) => (
        <article
          key={project.id}
          className={`flex flex-col gap-8 sm:gap-10 ${
            index < showcaseProjects.length - 1 ? 'border-b border-sand-300 pb-14 sm:pb-16' : ''
          }`}
        >
          <ProjectShowcaseImages project={project} variant="mobile" />
          <ProjectShowcaseText project={project} variant="mobile" />
        </article>
      ))}
    </Container>
  )
}
