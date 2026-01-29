import { Section } from '../components/Section'
import { vibecoding } from '../content'

export function VibecodingWorkflow() {
  return (
    <Section
      id="vibecoding"
      eyebrow="Workflow"
      title="Vibecoding workflow"
      subtitle="A practical workflow for collaborating with AI while preserving design intent"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <div className="relative rounded-2xl border border-slate-300 bg-indigo-50/30 p-6 shadow-sm transition-colors duration-150 transition-transform duration-300 ease-out hover:scale-[1.05] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
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

          <div className="relative rounded-2xl border border-slate-300 bg-indigo-50/30 p-6 shadow-sm transition-colors duration-150 transition-transform duration-300 ease-out hover:scale-[1.05] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Prompt example
            </h3>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              I start with constraints and "definition of done" so outputs are usable.
            </p>
            <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-slate-300 bg-indigo-50/30 p-4 text-xs leading-relaxed text-zinc-800 shadow-sm transition-colors duration-150 dark:border-white/10 dark:bg-zinc-950/60 dark:text-zinc-200 dark:shadow-none">
              {vibecoding.promptTemplate}
            </pre>
            <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
              Real prompts usually start messier — this is a cleaned-up version.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-300 bg-indigo-50/30 p-5 shadow-sm transition-colors duration-150 transition-transform duration-300 ease-out hover:scale-[1.05] hover:z-10 origin-center dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Loop</h3>
          <ol className="mt-6 space-y-4">
            {vibecoding.workflow.map((s, idx) => (
              <li key={s.title}>
                <div className="p-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">0{idx + 1}</span>
                    <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

