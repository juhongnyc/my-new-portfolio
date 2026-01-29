import { useState } from 'react'
import { Section } from '../components/Section'
import { ButtonLink } from '../components/ButtonLink'
import { Modal } from '../components/Modal'
import { highlightProjects } from '../content'

export function HighlightProjects() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; href: string | null }>({
    isOpen: false,
    href: null,
  })

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setModalState({ isOpen: true, href })
  }

  const handleClose = () => {
    setModalState({ isOpen: false, href: null })
  }

  const handleContinue = () => {
    if (modalState.href) {
      window.open(modalState.href, '_blank', 'noopener,noreferrer')
    }
    setModalState({ isOpen: false, href: null })
  }

  return (
    <>
      <Section
        id="projects"
        eyebrow="Work"
        title="Highlight projects"
        subtitle="A small set of projects that reflect how I think: structure first, polish second."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlightProjects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-300 bg-indigo-50/30 p-6 shadow-sm transition hover:bg-indigo-50/50 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{p.title}</h3>
              {p.period ? (
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{p.period}</p>
              ) : null}
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{p.oneLiner}</p>

              {p.description ? (
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{p.description}</p>
              ) : null}

              <div className={`mt-4 flex flex-wrap gap-2 text-xs text-zinc-700 dark:text-zinc-300 ${!p.description ? 'mt-6' : ''}`}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 dark:border-white/10 dark:bg-zinc-950/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link ? (
                <div className="mt-6">
                  <ButtonLink
                    href={p.link.href}
                    variant="primary"
                    onClick={(e) => handleButtonClick(e, p.link!.href)}
                  >
                    {p.link.label} →
                  </ButtonLink>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Modal
        isOpen={modalState.isOpen}
        onClose={handleClose}
        onContinue={handleContinue}
        title="You're about to click this, aren't you?"
        body={
          <>
            <p>This project lives on my previous site.</p>
            <p className="mt-2">
              Clicking Continue means you're curious — and that curiosity will be anonymously tracked via Google
              Analytics.
            </p>
            <div className="mt-4 flex items-start gap-2">
              <span className="text-base">☀️</span>
              <div className="flex-1">
                <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Quick heads-up</p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  The next site supports light mode only.
                </p>
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                  If you're currently in dark mode, expect a brighter experience.
                </p>
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

