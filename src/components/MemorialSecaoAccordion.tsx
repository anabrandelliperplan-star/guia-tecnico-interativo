import { useState } from 'react'
import { getExplicacao } from '../data/explicacoes'
import type { MemorialSecao } from '../data/memorial'

interface Props {
  secao: MemorialSecao
  defaultOpen?: boolean
}

export function MemorialSecaoAccordion({ secao, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-4 py-3 cursor-pointer"
      >
        <span className="font-medium text-[var(--color-text)]">{secao.titulo}</span>
        <span
          className={`shrink-0 text-[var(--color-text-muted)] transition-transform ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 flex flex-col gap-5">
          {secao.subitens.map((item) => {
            const explicacao = getExplicacao(secao.id, item.titulo)
            return (
              <div key={item.titulo} className="flex flex-col gap-2">
                <p className="text-sm font-medium text-[var(--color-accent)]">{item.titulo}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)] mb-1">
                    Texto do memorial
                  </p>
                  <p className="text-sm text-[var(--color-text)] leading-relaxed">{item.texto}</p>
                  <p className="mt-1 text-xs italic text-[var(--color-text-muted)]/80">
                    Fonte: Memorial Descritivo, {item.fonte}
                  </p>
                </div>
                {explicacao && (
                  <div className="rounded-md bg-[var(--color-accent-bg)] px-3 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-1">
                      Explicação em linguagem simples
                    </p>
                    <p className="text-sm text-[var(--color-text)] leading-relaxed">{explicacao}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
