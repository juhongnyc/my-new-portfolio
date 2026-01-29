import { Section } from '../components/Section'
import { vibecoding } from '../content'

export function VibecodingWorkflow() {
  return (
    <Section
      id="vibecoding"
      eyebrow="Workflow"
      title="Vibecoding workflow"
      subtitle="How I use AI as a collaborator — without losing design intent."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <div className="relative rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Principles</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {vibecoding.principles.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Prompt template
            </h3>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              I start with constraints and “definition of done” so outputs are usable.
            </p>
            <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-slate-300 bg-slate-100 p-4 text-xs leading-relaxed text-zinc-800 shadow-sm dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-200 dark:shadow-none">
              {vibecoding.promptTemplate}
            </pre>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-300 bg-slate-100 p-6 shadow-sm transition-transform duration-200 ease-out hover:scale-[1.06] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Loop</h3>
          <ol className="mt-4 space-y-4">
            {vibecoding.workflow.map((s, idx) => (
              <li
                key={s.title}
                className="rounded-xl border border-slate-300 bg-slate-100 p-4 shadow-sm dark:border-white/10 dark:bg-zinc-950/30 dark:shadow-none"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    {idx + 1}. {s.title}
                  </p>
                </div>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

