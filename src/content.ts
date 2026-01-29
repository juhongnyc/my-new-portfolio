export type Project = {
  title: string
  oneLiner: string
  tags: string[]
  period?: string
  description?: string
  link?: { label: string; href: string }
}

export const profile = {
  name: 'Juho Lee',
  role: 'UX Designer',
  tagline:
    'NYC–based UX designer who continuously explores and adopts new design approaches. I craft thoughtful, human-centered experiences where design and strategy meet — powered by technical AI workflows and automation.',
  location: 'New York, NY, USA',
  email: 'juho.nyc@gmail.com',
  links: [
    { label: "Juho's previous site", href: 'https://www.juholee.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juho-lee/' },
    { label: 'Resume', href: 'https://www.juholee.com/resume' },
  ],
}

export const highlightProjects: Project[] = [
  {
    title: 'Marquee',
    oneLiner: 'Designing a scalable UX for creative teams collaborating across markets.',
    tags: ['UX', 'Product Design', 'Design Culture'],
    period: 'Goldman Sachs',
    description:
      'Exploring interaction patterns for the request for pricing (RFQ) workflow through user research. The floating RFQ button was integrated and is now used at high volumes daily.',
    link: { label: 'View project', href: 'https://www.juholee.com/marquee' },
  },
  {
    title: 'Digital Lending',
    oneLiner: 'Improving clarity and trust in complex financial flows for borrowers and partners.',
    tags: ['UX', 'Service Design', 'Financial Services'],
    period: 'frog Design',
    description:
      'Building multiple digital solutions to enhance financial offerings and optimize customer experiences through end-to-end digital lending experiences.',
    link: { label: 'View project', href: 'https://www.juholee.com/digital-lending' },
  },
  {
    title: 'Castle',
    oneLiner: 'Crafting product UX where strategy, systems, and visual language meet.',
    tags: ['UX', 'Systems', 'Product Strategy'],
    period: 'frog Design',
    description:
      'Concepting an idea and designing the proof of concept to help a VC-backed startup win their next seed round. Crafted product UX where strategy, systems, and visual language meet.',
    link: { label: 'View project', href: 'https://www.juholee.com/castle' },
  },
]

export const featuredCaseStudy = {
  title: 'Featured Case Study: “From Figma to Tailwind”',
  context:
    'A UX case study implemented as a single-page portfolio to demonstrate collaboration-ready handoff and vibecoding workflow.',
  role: ['UX Research', 'Interaction Design', 'Visual QA', 'Front-end Implementation'],
  deliverables: ['Problem framing', 'User flows', 'Wireframes', 'Hi-fi UI in Figma', 'Responsive Tailwind build'],
  metrics: [
    { label: 'Goal', value: 'Show UX + implementation fluency' },
    { label: 'Scope', value: 'Single-page + 8 sections' },
    { label: 'Timebox', value: '5 hours' },
  ],
  sections: [
    {
      title: 'Problem',
      body: 'Hiring teams need signal: can this designer ship, communicate decisions, and collaborate with engineers?',
    },
    {
      title: 'Approach',
      body: 'Keep it minimal. Prioritize information hierarchy, spacing, and readable utility classes over heavy component abstraction.',
    },
    {
      title: 'Outcome',
      body: 'A clean, responsive portfolio that documents decisions and a practical AI-assisted workflow.',
    },
  ],
}

export const processSteps = [
  {
    title: 'Clarify',
    body: 'Set goals, success criteria, and story outline. I define content and success metrics first, then use Claude AI to draft the user story.',
  },
  {
    title: 'Explore',
    body: 'Sketch IA and spot risks early. Cursor AI helps with text-based IA sketches, Copilot simulates and prioritizes risks.',
  },
  {
    title: 'Build',
    body: 'Consistent spacing + design library. If a company design library exists, I use that. Otherwise, Cursor AI + Copilot generate React/Tailwind code directly, auto-applying shadcn/ui or similar libraries.',
  },
  {
    title: 'Translate',
    body: 'GA setup, states, and responsiveness. Claude AI optimizes graphic assets, Tailwind handles states and responsiveness — test live in the browser.',
  },
]

export type Stat = {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '8+', label: 'Years of experience' },
  { value: '50+', label: 'Projects shipped' },
  { value: '4+', label: 'Companies' },
  { value: 'Global', label: 'Teams led' },
]

export const vibecoding = {
  principles: [
    'Keep prompts specific: goal, audience, constraints, acceptance criteria.',
    'Ask for 2–3 options, pick one, then iterate in small diffs.',
    'Validate in the browser early: spacing, contrast, breakpoints.',
    'Use AI for structure and scaffolding — final decisions stay with the designer.',
  ],
  workflow: [
    { title: 'Frame', body: 'Define "done" early to align scope, quality, and expectations before generating anything.' },
    { title: 'Generate', body: 'Provide IA to AI, then get layout and content scaffolding generated.' },
    { title: 'Refine', body: 'Iterate on hierarchy, spacing, and microcopy in the browser.' },
    { title: 'Implement', body: 'Turn into React components with readable relevant library utilities.' },
    { title: 'QA', body: 'Compare against Figma or aligned design expectation, test md/lg breakpoints, fix edge cases.' },
  ],
  promptTemplate: `Hey! Let's build a responsive single-page portfolio together.
Stack: React + Vite + TailwindCSS
Style: dark mode only, system font, generous whitespace, mobile-first approach
Sections needed: Navbar, Hero, About, Highlight Projects, Featured Case Study, Process, Vibecoding Workflow, Contact
Please provide: file list + complete code for each file. Keep Tailwind classes clean and readable.`,
}

