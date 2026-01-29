import type { ReactNode } from 'react'
import { Container } from './Container'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <Container>
        <header className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-3xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-3 text-zinc-600 dark:text-zinc-300">{subtitle}</p> : null}
        </header>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}

