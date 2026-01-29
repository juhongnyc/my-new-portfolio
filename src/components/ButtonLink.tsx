import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
}

const base =
  'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950'

const variants: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'bg-blue-700 text-white hover:bg-blue-800 border border-blue-800 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 dark:border-blue-500',
  secondary:
    'bg-slate-100 text-zinc-900 hover:bg-slate-200 border border-slate-300 dark:bg-white/10 dark:text-zinc-50 dark:hover:bg-white/15 dark:border-white/10',
  ghost:
    'text-zinc-700 hover:text-zinc-900 hover:bg-slate-100 border border-transparent hover:border-slate-300 dark:text-zinc-200 dark:hover:text-white dark:hover:bg-white/5 dark:hover:border-white/10',
}

export function ButtonLink({ children, className = '', variant = 'secondary', ...props }: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}

