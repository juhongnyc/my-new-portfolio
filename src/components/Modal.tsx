import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
  title: string
  body: ReactNode
}

export function Modal({ isOpen, onClose, onContinue, title, body }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsClosing(false)
      setIsAnimating(false)
      // 다음 프레임에서 애니메이션 시작
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
    } else {
      document.body.style.overflow = ''
      setIsAnimating(false)
      setIsClosing(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 180)
  }

  const handleContinue = () => {
    setIsClosing(true)
    setTimeout(() => {
      onContinue()
    }, 180)
  }

  if (!isOpen && !isClosing) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 ${
        isClosing ? 'transition-opacity duration-150 ease-in opacity-0' : 'transition-opacity duration-200 ease-out opacity-100'
      }`}
      onClick={handleClose}
      aria-labelledby="modal-title"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-zinc-900/50 backdrop-blur-sm ${
          isClosing ? 'transition-opacity duration-150 ease-in opacity-0' : 'transition-opacity duration-200 ease-out opacity-100'
        }`}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-300 bg-slate-100 shadow-xl dark:border-white/10 dark:bg-zinc-900 ${
          isClosing
            ? 'transition-all duration-[180ms] ease-in translate-y-2 scale-95'
            : isAnimating
              ? 'transition-all duration-[250ms] ease-out translate-y-0 scale-100'
              : 'translate-y-2 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 id="modal-title" className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          <div className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">{body}</div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-300 bg-slate-50 px-6 py-4 dark:border-white/10 dark:bg-zinc-950/50">
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Stay here
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="rounded-lg border border-blue-700 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:border-blue-400 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  )
}
