import { useMemo, useState } from 'react'
import { FaqAccordionItem } from './components/FaqAccordionItem'
import { Assistente } from './components/Assistente'
import { MemorialSecaoAccordion } from './components/MemorialSecaoAccordion'
import { empreendimentos, faqItems, type Categoria } from './data/faq'
import { getMemorialDoEmpreendimento } from './data/memorial'

const categorias: { id: Categoria; label: string }[] = [
  { id: 'acabamentos', label: 'Acabamentos' },
  { id: 'instalacoes', label: 'Instalações' },
]

type Aba = 'faq' | 'memorial' | 'assistente'

function App() {
  const [aba, setAba] = useState<Aba>('faq')
  const [busca, setBusca] = useState('')
  const [empreendimentoId, setEmpreendimentoId] = useState('geral')
  const [categoria, setCategoria] = useState<Categoria | 'todas'>('todas')

  const itensFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    return faqItems.filter((item) => {
      const bateEmpreendimento =
        empreendimentoId === 'geral' || item.empreendimentoId === empreendimentoId
      const bateCategoria = categoria === 'todas' || item.categoria === categoria
      const bateBusca =
        termo === '' ||
        item.pergunta.toLowerCase().includes(termo) ||
        item.resposta.toLowerCase().includes(termo) ||
        item.subcategoria.toLowerCase().includes(termo)
      return bateEmpreendimento && bateCategoria && bateBusca
    })
  }, [busca, empreendimentoId, categoria])

  const memorial = useMemo(
    () => (empreendimentoId === 'geral' ? undefined : getMemorialDoEmpreendimento(empreendimentoId)),
    [empreendimentoId],
  )

  const secoesFiltradas = useMemo(() => {
    if (!memorial) return []
    const termo = busca.trim().toLowerCase()
    if (termo === '') return memorial.secoes
    return memorial.secoes
      .map((secao) => ({
        ...secao,
        subitens: secao.subitens.filter(
          (item) =>
            item.titulo.toLowerCase().includes(termo) || item.texto.toLowerCase().includes(termo),
        ),
      }))
      .filter((secao) => secao.subitens.length > 0 || secao.titulo.toLowerCase().includes(termo))
  }, [memorial, busca])

  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-2">
            Perplan Incorporação
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-[var(--color-text)] m-0">
            Guia Técnico Interativo
          </h1>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Respostas rápidas e o memorial descritivo completo de acabamentos e instalações de
            cada empreendimento.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setAba('faq')}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              aba === 'faq'
                ? 'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] border-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
            }`}
          >
            Dúvidas frequentes
          </button>
          <button
            type="button"
            onClick={() => setAba('memorial')}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              aba === 'memorial'
                ? 'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] border-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
            }`}
          >
            Memorial técnico completo
          </button>
          <button
            type="button"
            onClick={() => setAba('assistente')}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              aba === 'assistente'
                ? 'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] border-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
            }`}
          >
            Assistente
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {aba !== 'assistente' && (
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por palavra-chave (ex: piso, tomada, ar-condicionado)"
              className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
            />
          )}
          <select
            value={empreendimentoId}
            onChange={(e) => setEmpreendimentoId(e.target.value)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[var(--color-text)]"
          >
            {empreendimentos.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.nome}
              </option>
            ))}
          </select>
        </div>

        {aba === 'faq' && (
          <>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setCategoria('todas')}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                  categoria === 'todas'
                    ? 'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] border-[var(--color-accent)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                }`}
              >
                Todas
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategoria(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    categoria === cat.id
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] border-[var(--color-accent)]'
                      : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {itensFiltrados.length === 0 && (
                <p className="text-sm text-[var(--color-text-muted)]">
                  Nenhuma dúvida encontrada para esse filtro. Tente outra palavra-chave.
                </p>
              )}
              {itensFiltrados.map((item) => (
                <FaqAccordionItem key={item.id} item={item} />
              ))}
            </div>
          </>
        )}

        {aba === 'assistente' && <Assistente empreendimentoId={empreendimentoId} />}

        {aba === 'memorial' && (
          <div className="flex flex-col gap-3">
            {!memorial && (
              <p className="text-sm text-[var(--color-text-muted)]">
                Selecione um empreendimento específico acima para ver o memorial descritivo
                completo (o memorial é diferente para cada empreendimento).
              </p>
            )}
            {memorial && secoesFiltradas.length === 0 && (
              <p className="text-sm text-[var(--color-text-muted)]">
                Nenhuma seção do memorial corresponde a essa busca.
              </p>
            )}
            {memorial &&
              secoesFiltradas.map((secao) => (
                <MemorialSecaoAccordion key={secao.id} secao={secao} defaultOpen={busca.trim() !== ''} />
              ))}
          </div>
        )}
      </main>

      <footer className="max-w-3xl mx-auto px-4 py-8 text-xs text-[var(--color-text-muted)]">
        Conteúdo baseado no memorial descritivo de cada empreendimento. Em caso de dúvida,
        confirme sempre a especificação oficial do seu contrato com o time comercial da
        Perplan Incorporação.
      </footer>
    </div>
  )
}

export default App
