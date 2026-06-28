type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="mb-3 font-roboto text-xs font-medium uppercase tracking-[0.2em] text-gold-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-playfair text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-cormorant text-lg leading-relaxed text-ink-muted md:text-xl">
          {description}
        </p>
      )}
    </div>
  )
}
