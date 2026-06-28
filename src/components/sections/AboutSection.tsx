import { Compass, Leaf, Ruler } from 'lucide-react'
import { Container, Section, SectionHeading } from '../ui'

const values = [
  {
    icon: Ruler,
    title: 'Precision',
    text: 'Every line is resolved through proportion, structure, and the logic of the site.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    text: 'Materials and passive strategies are chosen for longevity and environmental care.',
  },
  {
    icon: Compass,
    title: 'Context',
    text: 'Architecture responds to climate, culture, and the rhythms of daily life.',
  },
] as const

export function AboutSection() {
  return (
    <Section id="about" muted>
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="About"
            title="A practice rooted in clarity and craft"
            description="Our studio brings together architecture, interiors, and material research to create calm, luminous spaces. We collaborate closely with clients from concept through construction."
          />

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-sm border border-border bg-surface p-6"
              >
                <div className="mb-4 inline-flex rounded-sm bg-gold-100 p-2.5 text-gold-800">
                  <Icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-xl text-ink">{title}</h3>
                <p className="mt-2 font-roboto text-sm leading-relaxed text-ink-muted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
