import { Section } from '../components/Section'

const bullets = [
  'Strong at problem framing and information hierarchy',
  'Comfortable collaborating with engineers (tokens, specs, QA)',
  'Build generative workflows and automation for content creation and management',
]

const skills = [
  {
    label: 'Tools',
    value: 'Figma, Notion, n8n, Make, Claude, Midjourney, ComfyUI, Framer AI, Cursor',
  },
  { label: 'Methods', value: 'Research, IA, flows, usability testing' },
  { label: 'Build', value: 'TailwindCSS, React basics, component QA' },
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="How I work"
      subtitle="I'm a UX designer who cares about clarity, constraints, and implementation details. I also build generative workflows and automation to streamline content creation and management."
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
          <p>
            I design digital products end-to-end: define the problem, map flows, prototype in Figma, and work closely
            with engineers to keep the final UI true to intent.
          </p>
          <ul className="space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <dl className="grid gap-5">
            {skills.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                  {s.label}
                </dt>
                <dd className="mt-2 text-sm text-zinc-900 dark:text-zinc-100">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

