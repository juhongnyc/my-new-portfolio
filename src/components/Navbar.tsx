import { useState } from 'react'
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

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/50 backdrop-blur dark:border-white/10 dark:bg-zinc-950/50">
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
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs text-gray-600 transition-colors duration-200 ease-out hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-100 dark:hover:text-gray-100"
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

