import { empreendimentos, faqItems, getEmpreendimentoNome } from '../data/faq'
import { fatos, type Topico } from '../data/fatos'
import { memorialPorEmpreendimento } from '../data/memorial'

export interface LinhaResposta {
  empreendimento?: string
  texto: string
  fonte?: string
}

export interface BlocoResposta {
  titulo?: string
  linhas: LinhaResposta[]
}

export interface Resposta {
  blocos: BlocoResposta[]
  encontrou: boolean
}

const TODOS = empreendimentos.filter((e) => e.id !== 'geral').map((e) => e.id)

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[-_/]/g, ' ')
}

const nomesEmpreendimento: { padrao: RegExp; id: string }[] = [
  { padrao: /riverside/, id: 'riverside-mb' },
  { padrao: /mb ?park/, id: 'mb-park' },
  { padrao: /cerqueira/, id: 'cerqueira-2164' },
  { padrao: /hype/, id: 'hype-residence' },
  { padrao: /marquises/, id: 'marquises-park' },
]

const palavrasAreaComum = /comun|lazer|salao|piscina|academia|coworking|garagem|guarita|playground|brinquedoteca|lobby|hall|condominio/

const regrasTopicos: { topico: Topico; testar: (q: string) => boolean }[] = [
  { topico: 'vagas', testar: (q) => /\bvagas?\b|garagem|estacionamento/.test(q) },
  {
    topico: 'unidades',
    testar: (q) =>
      /(quantos|quantas|numero|total).*(apartamentos|unidades)|(apartamentos|unidades).*(total|tem o empreendimento|no empreendimento)/.test(
        q,
      ),
  },
  {
    topico: 'arComum',
    testar: (q) => /climatiz|ar condicionado|split/.test(q) && palavrasAreaComum.test(q),
  },
  {
    topico: 'arUnidade',
    testar: (q) => /climatiz|ar condicionado|split/.test(q) && !palavrasAreaComum.test(q),
  },
  {
    topico: 'piso',
    testar: (q) => /\bpisos?\b|porcelanato|ceramica/.test(q) && !palavrasAreaComum.test(q),
  },
  {
    topico: 'bancadas',
    testar: (q) => /bancada|cuba|granito|marmore|tanque|\bpia\b/.test(q) && !palavrasAreaComum.test(q),
  },
  { topico: 'churrasqueira', testar: (q) => /churrasqueira/.test(q) && !/comun|lazer|family/.test(q) },
]

const titulosTopicos: Record<Topico, string> = {
  vagas: 'Vagas de garagem',
  unidades: 'Número de unidades',
  arUnidade: 'Ar-condicionado nos apartamentos',
  arComum: 'Ar-condicionado nas áreas comuns',
  piso: 'Piso dos apartamentos',
  bancadas: 'Bancadas dos apartamentos',
  churrasqueira: 'Churrasqueira na varanda',
}

function empreendimentosDaPergunta(q: string, selecionado: string): string[] {
  const citados = nomesEmpreendimento.filter((n) => n.padrao.test(q)).map((n) => n.id)
  if (citados.length > 0) return citados
  return selecionado === 'geral' ? TODOS : [selecionado]
}

function montarBloco(topico: Topico, ids: string[]): BlocoResposta {
  const linhas: LinhaResposta[] = []
  for (const id of ids) {
    const empreendimento = getEmpreendimentoNome(id)
    if (topico === 'arComum') {
      const f = fatos.arComum[id]
      if (!f) continue
      linhas.push({
        empreendimento,
        texto: `Entregues climatizadas: ${f.entregues} Precisam ser climatizadas pelo condomínio: ${f.condominio}`,
        fonte: `Memorial Descritivo, ${f.fonte}`,
      })
    } else {
      const f = fatos[topico][id]
      if (!f) continue
      linhas.push({ empreendimento, texto: f.texto, fonte: `Memorial Descritivo, ${f.fonte}` })
    }
  }
  return { titulo: titulosTopicos[topico], linhas }
}

const palavrasVazias = new Set([
  'que', 'qual', 'quais', 'como', 'tem', 'ter', 'para', 'por', 'com', 'das', 'dos', 'uma', 'uns', 'umas',
  'sao', 'ser', 'serao', 'nos', 'nas', 'esta', 'esse', 'essa', 'isso', 'onde', 'quando', 'quanto', 'quantos',
  'quantas', 'mais', 'muito', 'sobre', 'vem', 'vai', 'tem', 'sera', 'pode', 'posso', 'existe', 'existem',
  'meu', 'minha', 'seu', 'sua', 'aos', 'pelo', 'pela', 'the', 'entre', 'ate', 'apartamento', 'apartamentos',
])

function tokens(texto: string): string[] {
  const unicos = new Set<string>()
  for (const t of normalizar(texto).split(/[^a-z0-9]+/)) {
    if (t.length < 3 || palavrasVazias.has(t)) continue
    unicos.add(t.replace(/s$/, ''))
  }
  return [...unicos]
}

interface Documento {
  empreendimentoId: string
  titulo: string
  texto: string
  fonte: string
  secaoId?: string
}

const documentos: Documento[] = [
  ...memorialPorEmpreendimento.flatMap((m) =>
    m.secoes.flatMap((s) =>
      s.subitens.map((i) => ({
        empreendimentoId: m.empreendimentoId,
        titulo: i.titulo,
        texto: i.texto,
        fonte: `Memorial Descritivo, ${i.fonte}`,
        secaoId: s.id,
      })),
    ),
  ),
  ...faqItems.map((f) => ({
    empreendimentoId: f.empreendimentoId,
    titulo: f.pergunta,
    texto: f.resposta,
    fonte: f.fonteMemorial ?? '',
  })),
]

function buscar(pergunta: string, ids: string[], daAreaComum: boolean): BlocoResposta | undefined {
  const termos = tokens(pergunta)
  if (termos.length === 0) return undefined

  const idsComGeral = new Set([...ids, 'geral'])
  const pontuados = documentos
    .filter((d) => idsComGeral.has(d.empreendimentoId))
    .map((d) => {
      const titulo = new Set(tokens(d.titulo))
      const corpo = new Set(tokens(d.texto))
      let pontos = 0
      for (const t of termos) {
        if (titulo.has(t)) pontos += 3
        else if (corpo.has(t)) pontos += 1
      }
      if (daAreaComum && d.secaoId === 'acabamentos-areas-comuns') pontos += 6
      return { d, pontos }
    })
    .filter((x) => x.pontos >= 2)
    .sort((a, b) => b.pontos - a.pontos)

  const vistos = new Set<string>()
  const linhas: LinhaResposta[] = []
  for (const { d } of pontuados) {
    const chave = `${d.empreendimentoId}|${d.texto}`
    if (vistos.has(chave)) continue
    vistos.add(chave)
    linhas.push({
      empreendimento:
        d.empreendimentoId === 'geral' ? 'Todos os empreendimentos' : getEmpreendimentoNome(d.empreendimentoId),
      texto: `${d.titulo}: ${d.texto}`,
      fonte: d.fonte,
    })
    if (linhas.length === 3) break
  }
  return linhas.length > 0 ? { titulo: 'Trechos do memorial relacionados à sua pergunta', linhas } : undefined
}

export function responder(pergunta: string, empreendimentoSelecionado: string): Resposta {
  const q = normalizar(pergunta)
  const ids = empreendimentosDaPergunta(q, empreendimentoSelecionado)

  const blocos = regrasTopicos
    .filter((r) => r.testar(q))
    .map((r) => montarBloco(r.topico, ids))
    .filter((b) => b.linhas.length > 0)

  if (blocos.length > 0) return { blocos, encontrou: true }

  const encontrado = buscar(pergunta, ids, palavrasAreaComum.test(q))
  if (encontrado) return { blocos: [encontrado], encontrou: true }
  return { blocos: [], encontrou: false }
}

export const perguntasSugeridas = [
  'Quantas vagas de garagem tem no total?',
  'Quais pontos dos apartamentos têm ar-condicionado?',
  'Quais áreas comuns serão entregues climatizadas?',
  'Quais áreas comuns precisam ser climatizadas pelo condomínio?',
  'Qual o piso dos apartamentos?',
  'Qual a bancada da cozinha e dos banheiros?',
  'Tem churrasqueira na varanda?',
  'Quantos apartamentos tem o empreendimento?',
]
