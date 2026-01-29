import { useRef, useEffect, useState } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { Container } from '../components/Container'
import { profile } from '../content'

export function Hero() {
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
    <section ref={sectionRef} id="top" className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translate(-50%, ${scrollOffset * 0.8}px)` }}
        />
        <div
          className="absolute -bottom-32 right-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${-scrollOffset * 0.6}px)` }}
        />
      </div>

      <Container>
        <div className="max-w-3xl">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {profile.role} · {profile.location}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            NYC-based UX designer crafting human-centered experiences where product strategy, complex workflows, and
            AI-powered systems intersect — blending clarity, curiosity, and scale.
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-zinc-500 dark:text-zinc-400">
            This portfolio was built to demonstrate a vibecoding workflow — translating my previous portfolio into a
            TailwindCSS site through AI-assisted collaboration.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" variant="primary">
              View work
            </ButtonLink>
            <ButtonLink href="#vibecoding" variant="ghost">
              How this site was built →
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}

