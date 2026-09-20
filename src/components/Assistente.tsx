import { useState, type FormEvent } from 'react'
import { perguntasSugeridas, responder, type Resposta } from '../lib/assistente'

interface Mensagem {
  pergunta: string
  resposta: Resposta
}

interface Props {
  empreendimentoId: string
}

export function Assistente({ empreendimentoId }: Props) {
  const [texto, setTexto] = useState('')
  const [mensagens, setMensagens] = useState<Mensagem[]>([])

  function perguntar(pergunta: string, alternar = false) {
    const limpa = pergunta.trim()
    if (limpa === '') return
    setMensagens((atuais) => {
      const jaAberta = atuais.some((m) => m.pergunta === limpa)
      if (jaAberta && alternar) return atuais.filter((m) => m.pergunta !== limpa)
      const restantes = atuais.filter((m) => m.pergunta !== limpa)
      return [{ pergunta: limpa, resposta: responder(limpa, empreendimentoId) }, ...restantes]
    })
    setTexto('')
  }

  function aoEnviar(e: FormEvent) {
    e.preventDefault()
    perguntar(texto)
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-[var(--color-text-muted)]">
        Faça uma pergunta sobre vagas, ar-condicionado, pisos, bancadas e outros itens. As respostas vêm
        direto do memorial descritivo, sem inteligência artificial. Escolha um empreendimento acima ou cite
        o nome dele na pergunta; sem escolha, o assistente responde para todos.
      </p>

      <form onSubmit={aoEnviar} className="flex gap-2">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ex.: quais áreas comuns serão entregues climatizadas?"
          className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
        />
        <button
          type="submit"
          className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-accent-contrast)] cursor-pointer"
        >
          Perguntar
        </button>
      </form>

      <div className="flex gap-2 flex-wrap">
        {perguntasSugeridas.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => perguntar(p, true)}
            aria-pressed={mensagens.some((m) => m.pergunta === p)}
            className={`px-3 py-1.5 rounded-full text-xs border hover:border-[var(--color-accent)] cursor-pointer text-left ${
              mensagens.some((m) => m.pergunta === p)
                ? 'border-[var(--color-accent)] bg-[var(--color-accent-bg)] text-[var(--color-text)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {mensagens.map((m, i) => (
          <div
            key={`${mensagens.length - i}-${m.pergunta}`}
            className="border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] p-4 flex flex-col gap-3"
          >
            <p className="font-medium text-[var(--color-text)]">{m.pergunta}</p>
            {!m.resposta.encontrou && (
              <p className="text-sm text-[var(--color-text-muted)]">
                Não encontrei essa informação no memorial. Tente usar outras palavras ou consulte a aba
                "Memorial técnico completo".
              </p>
            )}
            {m.resposta.blocos.map((bloco, j) => (
              <div key={j} className="flex flex-col gap-2">
                {bloco.titulo && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                    {bloco.titulo}
                  </p>
                )}
                {bloco.linhas.map((linha, k) => (
                  <div key={k} className="text-sm leading-relaxed">
                    {linha.empreendimento && (
                      <span className="font-medium text-[var(--color-text)]">{linha.empreendimento}: </span>
                    )}
                    <span className="text-[var(--color-text-muted)]">{linha.texto}</span>
                    {linha.fonte && (
                      <span className="block text-xs italic text-[var(--color-text-muted)]/80">
                        Fonte: {linha.fonte}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
