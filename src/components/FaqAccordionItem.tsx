import { useState } from 'react'
import type { FaqItem } from '../data/faq'

interface Props {
  item: FaqItem
}

export function FaqAccordionItem({ item }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-4 py-3 cursor-pointer"
      >
        <span className="flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
            {item.subcategoria}
          </span>
          <span className="font-medium text-[var(--color-text)]">{item.pergunta}</span>
        </span>
        <span
          className={`shrink-0 text-[var(--color-text-muted)] transition-transform ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>{item.resposta}</p>
          {item.fonteMemorial && (
            <p className="mt-2 text-xs italic text-[var(--color-text-muted)]/80">
              Fonte: {item.fonteMemorial}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
