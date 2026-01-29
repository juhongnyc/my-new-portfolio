import { Container } from '../components/Container'
import { Section } from '../components/Section'
import { featuredCaseStudy } from '../content'

export function FeaturedCaseStudy() {
  return (
    <Section id="case-study" eyebrow="Case Study" title={featuredCaseStudy.title} subtitle={featuredCaseStudy.context}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-3 gap-4">
              {featuredCaseStudy.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">{m.label}</p>
                  <p className="mt-2 text-sm text-zinc-100">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Role</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-200">
                {featuredCaseStudy.role.map((r) => (
                  <li key={r} className="rounded-full border border-white/10 bg-zinc-950/40 px-2.5 py-1">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Deliverables</p>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-300">
                {featuredCaseStudy.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-[1px]">
            <div className="rounded-2xl bg-zinc-950 p-6">
              <div className="aspect-[16/10] w-full rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-white/5 to-fuchsia-500/10" />
              <p className="mt-4 text-xs text-zinc-400">
                Replace this placeholder with a screenshot from Figma (export as PNG/WebP) or an embedded prototype.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {featuredCaseStudy.sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-semibold tracking-tight text-zinc-50">{s.title}</h3>
                <p className="mt-3 text-sm text-zinc-300">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Container>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-300">
              Tip: Keep your case study short but specific. Show the “why” behind decisions and include 2–3 annotated
              screens (before/after, key flow, edge cases).
            </p>
          </div>
        </Container>
      </div>
    </Section>
  )
}

