import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../../config/site'
import { Button, Container, Section, SectionHeading } from '../ui'

const contactItems = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\D/g, '')}` },
  { icon: MapPin, label: 'Studio', value: site.address, href: '#' },
] as const

export function ContactSection() {
  return (
    <Section id="contact" className="bg-sand-200/50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Contact"
            title="Let's discuss your project"
            description="Share your vision, site, and timeline. We typically respond within two business days."
          />

          <div className="space-y-6">
            <ul className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-start gap-4 rounded-sm border border-border bg-surface p-5 transition-colors hover:border-gold-300"
                  >
                    <span className="inline-flex rounded-sm bg-gold-100 p-2.5 text-gold-800">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block font-roboto text-xs uppercase tracking-[0.15em] text-gold-700">
                        {label}
                      </span>
                      <span className="mt-1 block font-roboto text-sm text-ink group-hover:text-gold-800">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Button href={`mailto:${site.email}`} variant="primary">
              Start a conversation
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
