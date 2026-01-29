import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { HighlightProjects } from './sections/HighlightProjects'
import { Process } from './sections/Process'
import { Stats } from './sections/Stats'
import { VibecodingWorkflow } from './sections/VibecodingWorkflow'
import { profile } from './content'
import { DevTodoPanel } from './components/DevTodoPanel'
import { useTheme } from './hooks/useTheme'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <Stats />
        <About />
        <HighlightProjects />
        <Process />
        <VibecodingWorkflow />
        <Contact />
      </main>
      {import.meta.env.DEV ? <DevTodoPanel /> : null}
      <SpeedInsights />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} {profile.name}. Built with React + Vite + TailwindCSS.
          </div>
          <div className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
            Designed & built intentionally.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
