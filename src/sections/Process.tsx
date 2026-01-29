import { Section } from '../components/Section'
import { processSteps } from '../content'

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="A simple, repeatable process"
      subtitle="Lightweight steps that keep quality high without slowing shipping."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {processSteps.map((s, idx) => (
          <div
            key={s.title}
            className="relative rounded-2xl border border-slate-300 bg-indigo-50/30 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">0{idx + 1}</span>
              <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

