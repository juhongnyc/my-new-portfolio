import { ButtonLink } from '../components/ButtonLink'
import { Section } from '../components/Section'
import { profile } from '../content'

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something calm and useful"
      subtitle="If you're hiring or collaborating, send me a message."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative rounded-2xl border border-slate-300 bg-indigo-50/30 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">Email</p>
          <p className="mt-2 text-base font-medium text-zinc-900 dark:text-zinc-50">{profile.email}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              Email me
            </ButtonLink>
            <ButtonLink href="#top" variant="secondary">
              Back to top
            </ButtonLink>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-300 bg-indigo-50/30 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">Links</p>
          <ul className="mt-4 space-y-3 text-sm">
            {profile.links.map((l) => (
              <li key={l.href}>
                <a
                  className="text-zinc-900 transition hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-white"
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

