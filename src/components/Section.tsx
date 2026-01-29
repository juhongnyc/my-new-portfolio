import { useRef, useEffect, useState } from 'react'
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
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollTop = window.scrollY || document.documentElement.scrollTop
        const sectionTop = rect.top + scrollTop
        const offset = scrollTop - sectionTop
        setScrollOffset(offset * 1.2) // Parallax 효과 (120% 속도)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기 위치 설정
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id={id} className="relative overflow-hidden scroll-mt-20 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-12 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(-50%, ${scrollOffset * 0.8}px)` }}
        />
        <div
          className="absolute bottom-12 right-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${-scrollOffset * 0.6}px)` }}
        />
      </div>
      <Container className="relative">
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

