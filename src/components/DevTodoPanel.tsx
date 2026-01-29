import { useMemo, useState } from 'react'
import { devTodosKo } from '../devTodo'

export function DevTodoPanel() {
  const [open, setOpen] = useState(true)
  const items = useMemo(() => devTodosKo, [])

  return (
    <div className="fixed bottom-4 right-4 z-[100] w-[320px] max-w-[calc(100vw-2rem)]">
      <div className="rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
          aria-expanded={open}
        >
          <div>
            <p className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Dev</p>
            <p className="mt-1 text-sm font-semibold text-zinc-50">내 작업 To-do (한국어)</p>
          </div>
          <span className="text-xs text-zinc-400">{open ? 'Hide' : 'Show'}</span>
        </button>

        {open ? (
          <div className="border-t border-white/10 px-4 py-3">
            <ul className="space-y-2 text-sm text-zinc-200">
              {items.map((t) => (
                <li key={t.id} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
                  <span className="text-zinc-200">{t.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-zinc-500">
              이 패널은 개발 모드에서만 보입니다. (배포/프로덕션에는 숨김)
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

