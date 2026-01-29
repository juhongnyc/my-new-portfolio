import { useState, useEffect } from 'react'
import { Container } from './Container'
import { profile } from '../content'
import type { Theme } from '../hooks/useTheme'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Workflow', href: '#vibecoding' },
  { label: 'Contact', href: '#contact' },
]

type NavbarProps = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export function Navbar({ theme, setTheme }: NavbarProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const resolvedIsDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const handleToggleTheme = () => {
    setIsAnimating(true)
    setTheme(resolvedIsDark ? 'light' : 'dark')
    setTimeout(() => setIsAnimating(false), 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollableHeight = documentHeight - windowHeight
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // 초기 값 설정

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative sticky top-0 z-50 border-b border-zinc-200/60 bg-white/50 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }} />
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {profile.name}
          </a>
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-zinc-900 dark:hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
            >
              Let’s talk
            </a>
            <button
              type="button"
              onClick={handleToggleTheme}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 transition-colors duration-200 ease-out hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              aria-label="Toggle color mode"
            >
              <span
                className={`inline-block transition-transform duration-150 ease-out ${
                  isAnimating ? 'scale-95' : 'scale-100'
                }`}
              >
                {resolvedIsDark ? '☀' : '☾'}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}

