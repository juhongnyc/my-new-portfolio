import { Container } from '../components/Container'
import { stats } from '../content'

export function Stats() {
  return (
    <section
      id="stats"
      className="scroll-mt-20 border-y border-slate-200 bg-slate-50/50 py-16 dark:border-white/10 dark:bg-zinc-950/30 md:py-24"
    >
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
