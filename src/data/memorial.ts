// Transcrição estruturada dos memoriais descritivos completos de cada
// empreendimento. Diferente de faq.ts (perguntas mais prováveis do
// cliente), este arquivo cobre TODAS as seções do documento oficial,
// item a item, para consulta técnica completa. Cada subitem cita o
// número do item no memorial original (campo `fonte`), da mesma forma
// que faq.ts cita `fonteMemorial`.

export interface MemorialSubitem {
  titulo: string
  texto: string
  fonte: string
}

export interface MemorialSecao {
  id: string
  titulo: string
  subitens: MemorialSubitem[]
}

export interface MemorialEmpreendimento {
  empreendimentoId: string
  secoes: MemorialSecao[]
}

// Ordem e rótulos usados na navegação, iguais para todos os empreendimentos.
export const secoesOrdem: { id: string; titulo: string }[] = [
  { id: 'subsolos-estacionamento', titulo: 'Subsolos e Estacionamento' },
  { id: 'terreo', titulo: 'Térreo' },
  { id: 'pavimentos', titulo: 'Pavimentos' },
  { id: 'atico-reservatorios', titulo: 'Ático / Reservatórios' },
  { id: 'servicos-preliminares', titulo: 'Serviços Preliminares e Gerais' },
  { id: 'infraestrutura', titulo: 'Infraestrutura' },
  { id: 'paredes-vedacao', titulo: 'Paredes e Painéis de Vedação' },
  { id: 'esquadrias', titulo: 'Esquadrias (portas, ferragens e vidros)' },
  { id: 'cobertura-protecoes', titulo: 'Cobertura e Proteções' },
  { id: 'instalacoes-aparelhos', titulo: 'Instalações e Aparelhos' },
  { id: 'hidraulica-esgoto', titulo: 'Instalações Hidráulicas e de Esgoto' },
  { id: 'combate-incendio', titulo: 'Instalação de Combate a Incêndio' },
  { id: 'acabamentos-areas-comuns', titulo: 'Áreas de Uso Comum – Subsolos / Térreo' },
]

// ---------------------------------------------------------------------
// Blocos de conteúdo idênticos (mesmo texto e mesma numeração de item)
// em vários memoriais, para não repetir a transcrição.
// ---------------------------------------------------------------------

const servicosPreliminaresPadrao: MemorialSubitem[] = [
  {
    titulo: 'Serviços técnicos e projetos',
    texto:
      'Os serviços técnicos de fundação, projetos arquitetônicos, cálculo estrutural e de instalações são desenvolvidos por profissionais especializados em cada área, de acordo com a norma de Desempenho NBR 15575 e as normas específicas de cada item, sendo submetidos à aprovação das autoridades públicas e concessionárias locais.',
    fonte: 'item 3.1',
  },
  {
    titulo: 'Ensaios tecnológicos',
    texto: 'Todo o processo construtivo é rigorosamente acompanhado por controle tecnológico feito por laboratório especializado.',
    fonte: 'item 3.2',
  },
]

const servicosPreliminaresTorreConcreto: MemorialSubitem[] = [
  {
    titulo: 'Serviços técnicos e projetos',
    texto:
      'Os serviços técnicos de topografia, geotecnia, projetos arquitetônicos, cálculo estrutural e de instalações são desenvolvidos por profissionais especializados em cada área, rigorosamente de acordo com as normas específicas para cada item, e submetidos à aprovação das autoridades públicas e concessionárias locais.',
    fonte: 'item 3.1',
  },
  {
    titulo: 'Ensaios tecnológicos',
    texto: 'Todo o processo construtivo é rigorosamente acompanhado por controle tecnológico feito por laboratório especializado.',
    fonte: 'item 3.2',
  },
]

const paredesVedacaoPadrao: MemorialSubitem[] = [
  {
    titulo: 'Vedação',
    texto:
      'As paredes de vedação são em alvenaria comum e/ou estrutural, executadas em blocos cerâmicos e/ou blocos de concreto e/ou tijolos e/ou em drywall e/ou placas de concreto, revestidas com argamassa e/ou gesso quando necessário.',
    fonte: 'item 5.1',
  },
]

const paredesVedacaoTorreConcreto: MemorialSubitem[] = [
  {
    titulo: 'Vedação',
    texto:
      'As paredes de vedação são executadas em blocos cerâmicos e/ou blocos de concreto e/ou tijolos e/ou em placas de gesso e/ou placas de concreto, revestidas com argamassa e/ou gesso quando necessário, mantendo o mesmo desempenho técnico.',
    fonte: 'item 5.1',
  },
]

const coberturaProtecoesPadrao: MemorialSubitem[] = [
  {
    titulo: 'Telhado',
    texto: 'Laje impermeabilizada com telha metálica ou fibrocimento sobre estrutura apoiada na laje; área técnica com manta asfáltica.',
    fonte: 'item 7.1',
  },
  {
    titulo: 'Impermeabilizações',
    texto: 'Tratamento de impermeabilização nas áreas necessárias, conforme projeto específico.',
    fonte: 'item 7.2',
  },
]

const coberturaProtecoesTorreConcreto: MemorialSubitem[] = [
  {
    titulo: 'Telhado',
    texto:
      'Laje impermeabilizada e/ou telha ondulada sobre estrutura apoiada na laje. A captação de água é feita por ralos ligados às tubulações que conduzem as águas pluviais até o pavimento térreo.',
    fonte: 'item 7.1',
  },
  {
    titulo: 'Impermeabilizações',
    texto: 'O(s) reservatório(s) superior(es) é(são) impermeabilizado(s).',
    fonte: 'item 7.2',
  },
]

const combateIncendioPadrao: MemorialSubitem[] = [
  {
    titulo: 'Instalação de combate a incêndio',
    texto:
      'Executada rigorosamente de acordo com as normas da ABNT e o projeto aprovado pelo Corpo de Bombeiros. As prumadas de incêndio e os equipamentos de cada pavimento seguem o mesmo projeto aprovado.',
    fonte: 'item 8.5.5',
  },
]

export const memorialPorEmpreendimento: MemorialEmpreendimento[] = [
  // -----------------------------------------------------------------
  // RIVERSIDE MB
  // -----------------------------------------------------------------
  {
    empreendimentoId: 'riverside-mb',
    secoes: [
      {
        id: 'subsolos-estacionamento',
        titulo: 'Subsolos e Estacionamento',
        subitens: [
          {
            titulo: '3º subsolo',
            texto:
              'Parte comercial: acesso de veículos, áreas permeáveis, 12 vagas para carros e 5 lojas comerciais. Parte residencial: caixa de deflúvio, rampa de acesso, 2 elevadores, hall, lixo, 53 vagas indeterminadas + 6 vagas acessórias para carros e 9 vagas comuns para motos.',
            fonte: 'item 2.1',
          },
          {
            titulo: '2º subsolo',
            texto:
              'Parte comercial: 5 depósitos. Parte residencial: rampas de acesso, 2 escadas, 4 elevadores, 2 lixos, 2 halls, bicicletários, 78 vagas indeterminadas + 18 vagas acessórias para carros e 14 vagas para motos.',
            fonte: 'item 2.2',
          },
          {
            titulo: '1º subsolo',
            texto:
              'Rampas de acesso, 2 escadas, 4 elevadores, 2 lixos, 2 halls, reservatório inferior, reserva técnica, casa de máquinas, reservatório da piscina, bicicletários e 100 vagas indeterminadas + 20 vagas acessórias para carros (2 delas PCD) e 14 vagas para motos.',
            fonte: 'item 2.3',
          },
        ],
      },
      {
        id: 'terreo',
        titulo: 'Térreo',
        subitens: [
          {
            titulo: 'Áreas comuns e de lazer',
            texto:
              'Rampa de acesso, lixo, previsão para gerador, beach tênis, entrada social, guarita com WC, delivery, entrada de serviço, vivência e vestiário de funcionários, salão de festas com 2 WCs (1 PCD), churrasqueira com 2 WCs PCD, quadra, playground, ducha, lava-pés, piscina raia, deck molhado, piscina infantil e 7 vagas de carro adaptadas para PCD.',
            fonte: 'item 2.4',
          },
          {
            titulo: 'Torre 1 (térreo)',
            texto: 'Acesso, lobby/hall, lavanderia, U-Market, coworking, elevadores e 7 apartamentos residenciais térreos com quintal privativo.',
            fonte: 'item 2.4',
          },
          {
            titulo: 'Torre 2 (térreo)',
            texto: 'Acesso, lobby/hall, brinquedoteca, varanda, vestiários adaptados para PCD, academia, elevadores e 5 apartamentos residenciais térreos com quintal privativo.',
            fonte: 'item 2.4',
          },
        ],
      },
      {
        id: 'pavimentos',
        titulo: 'Pavimentos',
        subitens: [
          {
            titulo: '1º ao 15º pavimento',
            texto: '8 apartamentos residenciais por andar em cada torre, totalizando 120 apartamentos por torre.',
            fonte: 'item 2.5',
          },
          {
            titulo: '16º pavimento (cobertura)',
            texto: '4 apartamentos residenciais tipo cobertura por torre.',
            fonte: 'item 2.6',
          },
        ],
      },
      {
        id: 'atico-reservatorios',
        titulo: 'Ático / Reservatórios',
        subitens: [
          {
            titulo: '17º ao 19º pavimento',
            texto: 'Ático e reservatório, comuns às duas torres: vazios de elevadores, área técnica, alçapão, escada tipo marinheiro e telhado metálico.',
            fonte: 'item 2.7',
          },
        ],
      },
      { id: 'servicos-preliminares', titulo: 'Serviços Preliminares e Gerais', subitens: servicosPreliminaresPadrao },
      {
        id: 'infraestrutura',
        titulo: 'Infraestrutura',
        subitens: [
          {
            titulo: 'Trabalhos em terra',
            texto: 'Cortes, escavações e aterros executados conforme as cotas de projeto, quando necessário.',
            fonte: 'item 4.1',
          },
          {
            titulo: 'Fundações / Supraestruturas',
            texto:
              'Estrutura mista em alvenaria estrutural e concreto armado/pré-fabricado, conforme sondagem do terreno e projeto estrutural específico, com controle tecnológico de qualidade e resistência dos materiais.',
            fonte: 'item 4.2',
          },
        ],
      },
      { id: 'paredes-vedacao', titulo: 'Paredes e Painéis de Vedação', subitens: paredesVedacaoPadrao },
      {
        id: 'esquadrias',
        titulo: 'Esquadrias (portas, ferragens e vidros)',
        subitens: [
          {
            titulo: 'Esquadrias de ferro',
            texto:
              'Portão de acesso do estacionamento, portões de pedestres, grades de proteção, corrimãos das escadas, grelhas, alçapões e escada marinheiro em ferro, com tratamento e pintura na cor preto ou a definir em projeto.',
            fonte: 'item 6.1',
          },
          {
            titulo: 'Esquadrias de alumínio e/ou PVC',
            texto: 'Portas e janelas do térreo nas áreas comuns. Nas unidades privativas: janelas de dormitórios, banheiros e área de serviço, e portas da sala para a varanda.',
            fonte: 'item 6.2',
          },
          {
            titulo: 'Portas incombustíveis',
            texto: 'Porta corta-fogo nas escadarias de acesso aos pavimentos e demais locais definidos em projeto aprovado pelo Corpo de Bombeiros, de marca aceita pelo Corpo de Bombeiros.',
            fonte: 'item 6.3',
          },
          {
            titulo: 'Esquadrias de madeira',
            texto: 'Portas de entrada e internas dos apartamentos, e algumas portas internas das áreas comuns do térreo, em madeira e/ou compostos de madeira, enceradas, envernizadas ou pintadas.',
            fonte: 'item 6.4',
          },
          {
            titulo: 'Ferragens',
            texto: 'Dobradiças, maçanetas e fechaduras de primeira qualidade: La Fonte, Papaiz, Arouca, Pado, Aliança, Soprano ou outra com desempenho técnico equivalente ou superior.',
            fonte: 'item 6.5',
          },
          {
            titulo: 'Vidros',
            texto: 'Pontilhados, fantasia ou leitosos nos banheiros; liso incolor nos dormitórios, cozinha, área de serviço e portas de varanda; liso incolor também nas áreas de lazer do térreo.',
            fonte: 'item 6.6',
          },
        ],
      },
      { id: 'cobertura-protecoes', titulo: 'Cobertura e Proteções', subitens: coberturaProtecoesPadrao },
      {
        id: 'instalacoes-aparelhos',
        titulo: 'Instalações e Aparelhos',
        subitens: [
          {
            titulo: 'Instalações elétricas',
            texto:
              'Conforme projeto e normas ABNT; eletrodutos aparentes no entreforro e/ou embutidos. Marcas Schneider, Pial Legrand, Iriel, Siemens, Alumbra ou equivalente; interruptores e tomadas em termoplástico de embutir; quadro de distribuição por apartamento em caixa padrão da concessionária; luminárias entregues apenas nas varandas e áreas comuns.',
            fonte: 'item 8.1',
          },
          {
            titulo: 'Antena e telefonia',
            texto: 'Tubulação seca para futura antena coletiva/TV a cabo na sala de estar e suíte/dormitório; para telefonia, tubulação seca na sala de estar.',
            fonte: 'item 8.2',
          },
          {
            titulo: 'SPDA (sistema de para-raios)',
            texto: 'Sistema de proteção contra descargas atmosféricas conforme normas técnicas brasileiras; quadros gerais de medidores conforme projeto aprovado pela concessionária local.',
            fonte: 'item 8.3',
          },
          {
            titulo: 'Ar-condicionado',
            texto:
              'Infraestrutura (carga elétrica, infra seca, dreno hidráulico, caixa de passagem) nos quartos e na sala; equipamento, rede frigorígena e cabos por conta do cliente, condensadoras previstas na laje técnica. Áreas comuns (salão de festas, brinquedoteca, academia, coworking, delivery, mini market e guarita) são entregues climatizadas.',
            fonte: 'item 8.4',
          },
          {
            titulo: 'Elevadores',
            texto: 'Atlas-Schindler, Otis, Thyssen Krupp, Kone ou outra com desempenho técnico equivalente ou superior.',
            fonte: 'item 8.5.7',
          },
          {
            titulo: 'Aparelhos sanitários',
            texto: 'Louças das marcas Celite, Deca, Incepa, Rocca, Icasa, Izy, Etna ou equivalente.',
            fonte: 'item 8.6',
          },
          {
            titulo: 'Metais sanitários',
            texto: 'Acabamento cromado, marcas Deca, Docol, Perflex, Celite, Etna, Izy, Icasa ou equivalente. Duchas para banho não são entregues, ficando por conta do proprietário.',
            fonte: 'item 8.7',
          },
        ],
      },
      {
        id: 'hidraulica-esgoto',
        titulo: 'Instalações Hidráulicas e de Esgoto',
        subitens: [
          {
            titulo: 'Água fria',
            texto: 'Tubos de PPR e/ou PVC e/ou CPVC e/ou PEX, marcas Tigre, Cardinali, Amanco, Brazil ou equivalente.',
            fonte: 'item 8.5.1',
          },
          {
            titulo: 'Água quente',
            texto: 'Mesmos materiais da água fria. Aquecimento por equipamento aquecedor de passagem a gás, a ser adquirido e instalado pelo proprietário.',
            fonte: 'item 8.5.2',
          },
          {
            titulo: 'Gás',
            texto:
              'Infraestrutura para aquecedor a gás das duchas (aquisição do proprietário) e para churrasqueira a gás na varanda das unidades privativas — esta última entregue já instalada pela construtora.',
            fonte: 'item 8.5.3',
          },
          {
            titulo: 'Esgoto e águas pluviais',
            texto: 'Colunas, ramais e tubulações de águas pluviais executados conforme normas ABNT.',
            fonte: 'item 8.5.4',
          },
          {
            titulo: 'Medição individualizada',
            texto: 'Previsão para instalação de medidores individuais de água e gás; instalação e gestão de responsabilidade dos condôminos.',
            fonte: 'item 8.5.6',
          },
        ],
      },
      { id: 'combate-incendio', titulo: 'Instalação de Combate a Incêndio', subitens: combateIncendioPadrao },
      {
        id: 'acabamentos-areas-comuns',
        titulo: 'Áreas de Uso Comum – Subsolos / Térreo',
        subitens: [
          {
            titulo: 'Estacionamento, rampas, áreas técnicas e calçada',
            texto: 'Piso cimentado; paredes em tinta acrílica PVA e/ou blocos aparentes/textura; teto em tinta PVA sobre laje e/ou laje aparente/textura/telha de fibrocimento.',
            fonte: 'item 9.1.1',
          },
          {
            titulo: 'Guarita, DML, vestiários, WC portaria, WCs PCD e churrasqueira',
            texto:
              'Piso cerâmico/porcelanato; paredes com cerâmica nas áreas hidráulicas e no lixo (todas as paredes), demais em PVA sobre gesso liso; bancada da copa em mármore sintético/granito com cuba de inox; louças com coluna e caixa acoplada.',
            fonte: 'item 9.1.2',
          },
          {
            titulo: 'Piscinas e deck molhado',
            texto: 'Revestimento cerâmico/porcelanato; borda em granito e/ou pedra.',
            fonte: 'item 9.1.3',
          },
          { titulo: 'Playground', texto: 'Piso em grama sintética e/ou emborrachado.', fonte: 'item 9.1.4' },
          {
            titulo: 'Hall, salão de festas, vestiários, churrasqueira, espaço gourmet, coworking, mini market, lavanderia, varanda jogos, delivery, lounge sunset',
            texto: 'Piso e rodapé em porcelanato; paredes em porcelanato e/ou PVA sobre gesso liso; bancadas em granito com cuba de inox e/ou louça embutida.',
            fonte: 'item 9.1.5',
          },
          {
            titulo: 'Academia e brinquedoteca',
            texto: 'Piso vinílico e/ou carpete de madeira e/ou porcelanato e/ou emborrachado e/ou cerâmica; paredes e teto pintados sobre gesso.',
            fonte: 'item 9.1.6',
          },
          {
            titulo: 'Entrega equipada',
            texto:
              'Piscina, playground, salão de festas e demais áreas de convívio (exceto lavanderia), academia e brinquedoteca são entregues equipados e decorados. A lavanderia recebe apenas a infraestrutura para 2 conjuntos de máquina de lavar/secar, a serem adquiridos pelo condomínio.',
            fonte: 'nota do item 9.1',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------
  // MB PARK
  // -----------------------------------------------------------------
  {
    empreendimentoId: 'mb-park',
    secoes: [
      {
        id: 'subsolos-estacionamento',
        titulo: 'Subsolos e Estacionamento',
        subitens: [
          {
            titulo: '3º subsolo',
            texto:
              'Parte comercial: acessos às lojas, 8 vagas para carros (1 PCD, 1 idosos, 1 carga/descarga), lixo e 3 lojas comerciais. Parte residencial: rampa de acesso, hall, escada, 2 elevadores, bicicletário para 6 bicicletas, reserva técnica e 50 vagas indeterminadas + 13 vagas para motos.',
            fonte: 'item 2.1',
          },
          {
            titulo: '2º subsolo',
            texto:
              'Parte comercial: vazios e 3 mezaninos das lojas. Parte residencial: rampa, hall, escada, 2 elevadores, bicicletário para 8 bicicletas, reserva técnica e 65 vagas indeterminadas (4 PCD) + 6 vagas para motos.',
            fonte: 'item 2.2',
          },
          {
            titulo: '1º subsolo',
            texto:
              'Rampa, 2 halls, 2 escadas, 4 elevadores, bicicletário para 16 bicicletas, reservatórios inferiores, 2 reservas técnicas e 102 vagas indeterminadas (4 PCD) + 10 vagas para motos.',
            fonte: 'item 2.3',
          },
        ],
      },
      {
        id: 'terreo',
        titulo: 'Térreo',
        subitens: [
          {
            titulo: 'Áreas comuns e de lazer',
            texto:
              'Guarita com WC, delivery, vestiário e vivência de funcionários, salão de festas com copa, churrasqueira 1 e churrasqueira 2 (cada uma com vestiários PCD), market place, fitness externo, playground, brinquedoteca, plataforma elevatória, piscina infantil e adulto, deck molhado, academia e quadra descoberta; 26 vagas para carros (12 para idosos) + 10 vagas de visitantes + 3 vagas utilitárias.',
            fonte: 'item 2.4',
          },
          { titulo: 'Torre 01 (térreo)', texto: 'Acesso, área técnica, DML, elevadores, coworking com apoio e 7 apartamentos residenciais.', fonte: 'item 2.4' },
          { titulo: 'Torre 02 (térreo)', texto: 'Acesso, área técnica, DML, elevadores, lavanderia com apoio e 7 apartamentos residenciais.', fonte: 'item 2.4' },
        ],
      },
      {
        id: 'pavimentos',
        titulo: 'Pavimentos',
        subitens: [
          {
            titulo: '1º ao 14º pavimento',
            texto: '8 apartamentos residenciais por andar em cada torre, totalizando 119 apartamentos por torre.',
            fonte: 'item 2.5',
          },
        ],
      },
      {
        id: 'atico-reservatorios',
        titulo: 'Ático / Reservatórios',
        subitens: [
          {
            titulo: 'Ático / Reservatórios',
            texto: 'Em cada torre: vazios de elevadores, área técnica, 2 alçapões, 2 escadas tipo marinheiro e telha metálica.',
            fonte: 'item 2.6',
          },
        ],
      },
      { id: 'servicos-preliminares', titulo: 'Serviços Preliminares e Gerais', subitens: servicosPreliminaresPadrao },
      {
        id: 'infraestrutura',
        titulo: 'Infraestrutura',
        subitens: [
          { titulo: 'Trabalhos em terra', texto: 'Cortes, escavações e aterros executados conforme as cotas de projeto, quando necessário.', fonte: 'item 4.1' },
          {
            titulo: 'Fundações / Supraestruturas',
            texto: 'Estrutura mista em alvenaria estrutural e concreto armado/pré-fabricado, conforme sondagem do terreno e projeto estrutural específico, com controle tecnológico de qualidade e resistência dos materiais.',
            fonte: 'item 4.2',
          },
        ],
      },
      { id: 'paredes-vedacao', titulo: 'Paredes e Painéis de Vedação', subitens: paredesVedacaoPadrao },
      {
        id: 'esquadrias',
        titulo: 'Esquadrias (portas, ferragens e vidros)',
        subitens: [
          {
            titulo: 'Esquadrias de ferro',
            texto: 'Portão de acesso do estacionamento, portões de pedestres, grades de proteção, corrimãos, grelhas, alçapões e escada marinheiro em ferro, com tratamento e pintura na cor preto ou a definir em projeto.',
            fonte: 'item 6.1',
          },
          {
            titulo: 'Esquadrias de alumínio e/ou PVC',
            texto: 'Portas e janelas do térreo nas áreas comuns. Nas unidades privativas: janelas de dormitórios, banheiros e área de serviço, e portas da sala para a varanda.',
            fonte: 'item 6.2',
          },
          {
            titulo: 'Portas incombustíveis',
            texto: 'Porta corta-fogo nas escadarias e locais definidos em projeto aprovado pelo Corpo de Bombeiros.',
            fonte: 'item 6.3',
          },
          {
            titulo: 'Esquadrias de madeira',
            texto: 'Portas de entrada e internas dos apartamentos, e algumas portas internas das áreas comuns do térreo, em madeira e/ou compostos de madeira, enceradas, envernizadas ou pintadas.',
            fonte: 'item 6.4',
          },
          {
            titulo: 'Ferragens',
            texto: 'La Fonte, Papaiz, Arouca, Pado, Aliança, Soprano ou outra com desempenho técnico equivalente ou superior.',
            fonte: 'item 6.5',
          },
          {
            titulo: 'Vidros',
            texto: 'Pontilhados, fantasia ou leitosos nos banheiros; liso incolor nos dormitórios, cozinha, área de serviço e portas de varanda; liso incolor nas áreas de lazer do térreo.',
            fonte: 'item 6.6',
          },
        ],
      },
      { id: 'cobertura-protecoes', titulo: 'Cobertura e Proteções', subitens: coberturaProtecoesPadrao },
      {
        id: 'instalacoes-aparelhos',
        titulo: 'Instalações e Aparelhos',
        subitens: [
          {
            titulo: 'Instalações elétricas',
            texto: 'Conforme projeto e normas ABNT; marcas Schneider, Pial Legrand, Iriel, Siemens, Alumbra ou equivalente; quadro de distribuição por apartamento; luminárias entregues apenas nas varandas e áreas comuns.',
            fonte: 'item 8.1',
          },
          {
            titulo: 'Antena e telefonia',
            texto: 'Tubulação seca na sala de estar e na suíte (dormitório, na tipologia sem suíte); telefonia com tubulação na sala de estar.',
            fonte: 'item 8.2',
          },
          { titulo: 'SPDA (sistema de para-raios)', texto: 'Sistema de para-raios conforme normas técnicas brasileiras; medidores conforme projeto da concessionária.', fonte: 'item 8.3' },
          {
            titulo: 'Ar-condicionado',
            texto: 'Infraestrutura nos quartos e sala, equipamento por conta do adquirente, condensadoras na laje técnica. Áreas comuns — salão de festas, brinquedoteca, academia, coworking, lavanderia, market place, delivery e guarita — são entregues climatizadas.',
            fonte: 'item 8.4',
          },
          { titulo: 'Elevadores', texto: 'Atlas-Schindler, Otis, Thyssen Krupp, Kone ou equivalente.', fonte: 'item 8.5.7' },
          { titulo: 'Aparelhos sanitários', texto: 'Louças Celite, Deca, Incepa, Rocca, Icasa, Izy, Etna ou equivalente.', fonte: 'item 8.6' },
          {
            titulo: 'Metais sanitários',
            texto: 'Acabamento cromado, marcas Deca, Docol, Perflex, Celite, Etna, Izy, Icasa ou equivalente; duchas não inclusas.',
            fonte: 'item 8.7',
          },
        ],
      },
      {
        id: 'hidraulica-esgoto',
        titulo: 'Instalações Hidráulicas e de Esgoto',
        subitens: [
          { titulo: 'Água fria', texto: 'Tubos PPR e/ou PVC e/ou CPVC e/ou PEX, marcas Tigre, Cardinali, Amanco, Brazil ou equivalente.', fonte: 'item 8.5.1' },
          {
            titulo: 'Água quente',
            texto: 'Mesmos materiais da água fria; aquecimento por aquecedor de passagem a gás, adquirido pelo proprietário.',
            fonte: 'item 8.5.2',
          },
          {
            titulo: 'Gás',
            texto:
              'Infraestrutura para aquecedor a gás das duchas e previsão para fogão a gás na cozinha. Diferente do Riverside mb, aqui a churrasqueira da varanda privativa é elétrica, não a gás.',
            fonte: 'item 8.5.3',
          },
          { titulo: 'Esgoto e águas pluviais', texto: 'Colunas, ramais e tubulações pluviais conforme normas ABNT.', fonte: 'item 8.5.4' },
          {
            titulo: 'Medição individualizada',
            texto: 'Previsão para medidores individuais de água e gás, responsabilidade dos condôminos.',
            fonte: 'item 8.5.6',
          },
        ],
      },
      { id: 'combate-incendio', titulo: 'Instalação de Combate a Incêndio', subitens: combateIncendioPadrao },
      {
        id: 'acabamentos-areas-comuns',
        titulo: 'Áreas de Uso Comum – Subsolos / Térreo',
        subitens: [
          {
            titulo: 'Estacionamento, rampas, áreas técnicas e calçada',
            texto: 'Piso cimentado; paredes em PVA e/ou blocos aparentes/textura; teto em PVA sobre laje e/ou telha metálica/fibrocimento.',
            fonte: 'item 9.1.1',
          },
          {
            titulo: 'Guarita, DML, vestiários, WC portaria, WCs PCD, churrasqueira e circulação externa',
            texto: 'Piso cerâmico/porcelanato; bancada da copa em mármore sintético/granito com cuba de inox.',
            fonte: 'item 9.1.2',
          },
          {
            titulo: 'Piscina e deck molhado',
            texto: 'Revestimento cerâmico e/ou porcelanato e/ou madeira ecológica; borda em granito, pedra, cerâmico ou porcelanato.',
            fonte: 'item 9.1.3',
          },
          { titulo: 'Playground e fitness externo', texto: 'Piso emborrachado ou adequado ao uso.', fonte: 'item 9.1.4' },
          {
            titulo: 'Hall, salão de festas, copa de apoio, churrasqueiras, coworking, market place, lavanderia, delivery',
            texto: 'Piso cerâmico/porcelanato; bancadas em granito com cuba de inox e/ou louça embutida.',
            fonte: 'item 9.1.5',
          },
          {
            titulo: 'Academia e brinquedoteca',
            texto: 'Piso vinílico e/ou carpete de madeira e/ou porcelanato e/ou emborrachado e/ou cerâmica.',
            fonte: 'item 9.1.6',
          },
          {
            titulo: 'Entrega equipada',
            texto: 'Áreas de lazer (exceto lavanderia) são entregues equipadas e decoradas. A lavanderia recebe infraestrutura para 2 máquinas de lavar e 3 de secar, a serem adquiridas pelo condomínio.',
            fonte: 'nota do item 9.1',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------
  // CERQUEIRA 2164
  // -----------------------------------------------------------------
  {
    empreendimentoId: 'cerqueira-2164',
    secoes: [
      {
        id: 'subsolos-estacionamento',
        titulo: 'Subsolos e Estacionamento',
        subitens: [
          {
            titulo: '1º subsolo (único)',
            texto: 'Rampa de acesso, escada de emergência, 2 elevadores, reserva técnica, pressurização e 33 vagas indeterminadas para carros (1 PCD) + 8 vagas para motos.',
            fonte: 'item 2.1',
          },
        ],
      },
      {
        id: 'terreo',
        titulo: 'Térreo',
        subitens: [
          {
            titulo: 'Áreas comuns e de lazer',
            texto:
              'Acesso principal com pulmão, guarita com WC, lavanderia coletiva, lobby, minimercado, copa e WC de funcionários, 2 vestiários PCD, espaço de convivência/salão de festas, academia, jardim de pausa, piscina adulto com prainha; 19 vagas indeterminadas (1 PCD) + 5 vagas para motos.',
            fonte: 'item 2.2',
          },
        ],
      },
      {
        id: 'pavimentos',
        titulo: 'Pavimentos',
        subitens: [
          {
            titulo: '1º ao 7º pavimento',
            texto: '8 apartamentos residenciais por andar, totalizando 56 apartamentos na única torre do edifício.',
            fonte: 'item 2.3',
          },
        ],
      },
      {
        id: 'atico-reservatorios',
        titulo: 'Ático / Reservatórios',
        subitens: [
          {
            titulo: '8º pavimento',
            texto: 'Pavimento técnico: escada de emergência, área técnica, 1 alçapão e 1 escada marinheiro.',
            fonte: 'item 2.4',
          },
        ],
      },
      { id: 'servicos-preliminares', titulo: 'Serviços Preliminares e Gerais', subitens: servicosPreliminaresPadrao },
      {
        id: 'infraestrutura',
        titulo: 'Infraestrutura',
        subitens: [
          { titulo: 'Trabalhos em terra', texto: 'Cortes, escavações e aterros executados conforme as cotas de projeto, quando necessário.', fonte: 'item 4.1' },
          {
            titulo: 'Fundações / Supraestruturas',
            texto: 'Estrutura mista em alvenaria estrutural e concreto armado e/ou pré-fabricado, conforme sondagem do terreno e projeto estrutural específico, com controle tecnológico de qualidade dos materiais.',
            fonte: 'item 4.2',
          },
        ],
      },
      { id: 'paredes-vedacao', titulo: 'Paredes e Painéis de Vedação', subitens: paredesVedacaoPadrao },
      {
        id: 'esquadrias',
        titulo: 'Esquadrias (portas, ferragens e vidros)',
        subitens: [
          {
            titulo: 'Esquadrias de ferro',
            texto: 'Portão do estacionamento, portões de pedestres, grades, corrimãos, grelhas, alçapões e escada marinheiro em ferro, com tratamento e pintura.',
            fonte: 'item 6.1',
          },
          {
            titulo: 'Esquadrias de alumínio e/ou PVC',
            texto: 'Portas e janelas do térreo nas áreas comuns. Nas unidades privativas: janelas de dormitórios, banheiro e área de serviço, e portas da sala para a varanda.',
            fonte: 'item 6.2',
          },
          {
            titulo: 'Portas incombustíveis',
            texto: 'Porta corta-fogo nas escadarias e locais definidos em projeto aprovado pelo Corpo de Bombeiros.',
            fonte: 'item 6.3',
          },
          {
            titulo: 'Esquadrias de madeira',
            texto: 'Portas de entrada e internas dos apartamentos, e algumas portas internas das áreas comuns do térreo, em madeira e/ou compostos de madeira.',
            fonte: 'item 6.4',
          },
          {
            titulo: 'Ferragens',
            texto: 'La Fonte, Papaiz, Arouca, Pado, Aliança, Soprano ou outra com desempenho técnico equivalente ou superior.',
            fonte: 'item 6.5',
          },
          {
            titulo: 'Vidros',
            texto: 'Pontilhados, fantasia ou leitosos nos banheiros; liso incolor nos dormitórios, área de serviço e portas de varanda; liso incolor nas áreas de lazer do térreo.',
            fonte: 'item 6.6',
          },
        ],
      },
      { id: 'cobertura-protecoes', titulo: 'Cobertura e Proteções', subitens: coberturaProtecoesPadrao },
      {
        id: 'instalacoes-aparelhos',
        titulo: 'Instalações e Aparelhos',
        subitens: [
          {
            titulo: 'Instalações elétricas',
            texto: 'Conforme projeto e normas ABNT; marcas Schneider, Pial Legrand, Iriel, Siemens, Alumbra ou equivalente; quadro de distribuição por apartamento.',
            fonte: 'item 8.1',
          },
          { titulo: 'Antena e telefonia', texto: 'Tubulação seca na sala de estar e nos dormitórios; telefonia com tubulação na sala de estar.', fonte: 'item 8.2' },
          { titulo: 'SPDA (sistema de para-raios)', texto: 'Sistema de para-raios conforme normas técnicas brasileiras.', fonte: 'item 8.3' },
          {
            titulo: 'Ar-condicionado',
            texto:
              'Nos apartamentos: infra de carga elétrica, dreno hidráulico e caixa de passagem, com equipamento e cabeamento por conta do cliente. Diferente do Riverside mb e do MB Park, nas áreas comuns (salão de festas/convivência, academia, lavanderia, minimercado, guarita) apenas a infraestrutura é entregue — a rede frigorígena e os equipamentos (condensadoras/evaporadoras) ficam a cargo do condomínio.',
            fonte: 'item 8.4',
          },
          { titulo: 'Elevadores', texto: 'Atlas-Schindler, Otis, Thyssen Krupp, Kone ou equivalente.', fonte: 'item 8.5.7' },
          { titulo: 'Aparelhos sanitários', texto: 'Louças Celite, Deca, Incepa, Rocca, Icasa, Izy, Etna ou equivalente.', fonte: 'item 8.6' },
          {
            titulo: 'Metais sanitários',
            texto: 'Acabamento cromado, marcas Deca, Docol, Bognar, Perflex, Celite, Etna, Izy, Icasa ou equivalente; duchas não inclusas.',
            fonte: 'item 8.7',
          },
        ],
      },
      {
        id: 'hidraulica-esgoto',
        titulo: 'Instalações Hidráulicas e de Esgoto',
        subitens: [
          { titulo: 'Água fria', texto: 'Tubos PPR e/ou PVC e/ou CPVC e/ou PEX, marcas Tigre, Cardinali, Amanco, Brazil ou equivalente.', fonte: 'item 8.5.1' },
          { titulo: 'Água quente', texto: 'Mesmos materiais da água fria; aquecimento por aquecedor de passagem a gás, adquirido pelo proprietário.', fonte: 'item 8.5.2' },
          { titulo: 'Gás', texto: 'Infraestrutura para aquecedor a gás das duchas e previsão para fogão a gás nas cozinhas.', fonte: 'item 8.5.3' },
          { titulo: 'Esgoto e águas pluviais', texto: 'Colunas, ramais e tubulações pluviais conforme normas ABNT.', fonte: 'item 8.5.4' },
          { titulo: 'Medição individualizada', texto: 'Previsão para medidores individuais de água e gás, responsabilidade dos condôminos.', fonte: 'item 8.5.6' },
        ],
      },
      { id: 'combate-incendio', titulo: 'Instalação de Combate a Incêndio', subitens: combateIncendioPadrao },
      {
        id: 'acabamentos-areas-comuns',
        titulo: 'Áreas de Uso Comum – Subsolos / Térreo',
        subitens: [
          {
            titulo: 'Estacionamento, áreas técnicas, escada de emergência e calçada',
            texto: 'Piso cimentado; paredes em PVA e/ou blocos aparentes/textura.',
            fonte: 'item 9.1.1',
          },
          {
            titulo: 'Guarita, copa de funcionários, vestiário, lixo, WC portaria, WCs PCD',
            texto: 'Piso cerâmico/porcelanato; bancada da copa em mármore sintético/granito com cuba de inox.',
            fonte: 'item 9.1.2',
          },
          { titulo: 'Piscina', texto: 'Revestimento cerâmico/porcelanato; borda em granito, pedra, cerâmico ou porcelanato.', fonte: 'item 9.1.3' },
          {
            titulo: 'Lobby, espaço de convivência/salão de festas, minimercado, lavanderia',
            texto: 'Piso cerâmico/porcelanato; bancadas do espaço de convivência e lavanderia em granito com cuba de inox.',
            fonte: 'item 9.1.4',
          },
          { titulo: 'Academia', texto: 'Piso vinílico e/ou carpete de madeira e/ou porcelanato e/ou emborrachado e/ou cerâmica.', fonte: 'item 9.1.5' },
          {
            titulo: 'Entrega equipada',
            texto:
              'Piscina, áreas de convivência (exceto lavanderia e minimercado) e academia são entregues equipadas e decoradas. Lavanderia: infra para 1 máquina de lavar + 1 de secar. Minimercado: marcenaria e infra para 2 refrigeradores — ambos os equipamentos a cargo do condomínio.',
            fonte: 'nota do item 9.1',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------
  // HYPE RESIDENCE
  // -----------------------------------------------------------------
  {
    empreendimentoId: 'hype-residence',
    secoes: [
      {
        id: 'subsolos-estacionamento',
        titulo: 'Subsolos e Estacionamento',
        subitens: [
          {
            titulo: '2º subsolo',
            texto:
              'Rampas de acesso, 4 elevadores sociais, 1 de serviço, 2 lobbies sociais, DML, área técnica, reservatórios inferiores, espaço pet, 25 armários e garagem com 138 vagas para moradores + 16 vagas para motos + 1 vaga PNE + 1 vaga autônoma.',
            fonte: 'item 2.1',
          },
          {
            titulo: '1º subsolo',
            texto:
              'Acessos de veículos e pedestres com clausura, reservatórios de deflúvio, casa de bombas da piscina, gerador, centro de medição, sala de quadros, bicicletário, abrigo de lixo, cabine de hidrômetro/gás, 25 armários e garagem com 128 vagas para moradores + 15 vagas para motos + 1 vaga PNE.',
            fonte: 'item 2.2',
          },
        ],
      },
      {
        id: 'terreo',
        titulo: 'Térreo',
        subitens: [
          {
            titulo: 'Áreas comuns e de lazer',
            texto:
              'Guarita com WC, espelhos d’água, port cochere, lobby, coworking, salão de festas com copa e WCs, espaço gourmet, sala de jogos, brinquedoteca, fitness, primeiros socorros, Family Club com piscina e churrasqueira, praças, piscina adulto/raia, deck molhado, piscina infantil, solário, playground e quadra recreativa.',
            fonte: 'item 2.3',
          },
          { titulo: 'Mezanino', texto: 'Vestiários, copa, área técnica, DML e pressurização, comuns à torre.', fonte: 'item 2.5' },
        ],
      },
      {
        id: 'pavimentos',
        titulo: 'Pavimentos',
        subitens: [
          {
            titulo: '1º ao 25º pavimento tipo',
            texto: '4 apartamentos residenciais por andar, totalizando 99 unidades tipo, mais depósitos por pavimento.',
            fonte: 'item 2.6',
          },
          { titulo: '26º pavimento (Duplex inferior)', texto: '4 apartamentos duplex nível inferior.', fonte: 'item 2.7' },
          {
            titulo: '27º pavimento (Duplex superior)',
            texto: '4 apartamentos duplex nível superior, com varanda descoberta e piscina privativa.',
            fonte: 'item 2.8',
          },
        ],
      },
      {
        id: 'atico-reservatorios',
        titulo: 'Ático / Reservatórios',
        subitens: [
          {
            titulo: '28º pavimento',
            texto: 'Ático/reservatórios/cobertura: casa de máquinas, barrilete, bombas, laje impermeabilizada descoberta, escada marinheiro e reservatórios superiores (célula e hidrantes).',
            fonte: 'item 2.9',
          },
        ],
      },
      { id: 'servicos-preliminares', titulo: 'Serviços Preliminares e Gerais', subitens: servicosPreliminaresTorreConcreto },
      {
        id: 'infraestrutura',
        titulo: 'Infraestrutura',
        subitens: [
          { titulo: 'Trabalhos em terra', texto: 'Cortes, escavações e aterros conforme cotas de projeto, quando necessário.', fonte: 'item 4.1' },
          {
            titulo: 'Fundações / Supraestruturas',
            texto:
              'Estrutura em concreto armado (diferente do Riverside mb, MB Park e Cerqueira 2164, que usam alvenaria estrutural combinada com concreto), conforme projeto estrutural específico e controle tecnológico de qualidade.',
            fonte: 'item 4.2',
          },
        ],
      },
      { id: 'paredes-vedacao', titulo: 'Paredes e Painéis de Vedação', subitens: paredesVedacaoTorreConcreto },
      {
        id: 'esquadrias',
        titulo: 'Esquadrias (portas, ferragens e vidros)',
        subitens: [
          {
            titulo: 'Esquadrias de ferro',
            texto: 'Portões de acesso ao estacionamento, corrimãos, grelhas, alçapões e escada marinheiro em ferro, com tratamento e pintura.',
            fonte: 'item 6.1',
          },
          {
            titulo: 'Esquadrias de alumínio e/ou PVC',
            texto:
              'Áreas comuns, acesso de pedestres, gradil, guarda-corpos e portas/janelas do térreo. Nas unidades: janelas de dormitórios/banheiros/salas, portas da sala e cozinha para a varanda, guarda-corpo da varanda gourmet e da laje técnica.',
            fonte: 'item 6.2',
          },
          { titulo: 'Portas incombustíveis', texto: 'Escadarias e cabine de força com porta corta-fogo aprovada pelo Corpo de Bombeiros.', fonte: 'item 6.3' },
          {
            titulo: 'Esquadrias de madeira',
            texto: 'Portas de entrada e internas dos apartamentos em madeira e/ou compostos de madeira, enceradas, envernizadas ou pintadas.',
            fonte: 'item 6.4',
          },
          { titulo: 'Ferragens', texto: 'La Fonte, Papaiz, Arouca, Pado, Aliança, Soprano ou equivalente.', fonte: 'item 6.5' },
          {
            titulo: 'Vidros',
            texto: 'Pontilhados, fantasia ou leitosos nos banheiros; transparente liso em dormitórios, salas e cozinha; liso incolor nas varandas e áreas de lazer do térreo.',
            fonte: 'item 6.6',
          },
        ],
      },
      { id: 'cobertura-protecoes', titulo: 'Cobertura e Proteções', subitens: coberturaProtecoesTorreConcreto },
      {
        id: 'instalacoes-aparelhos',
        titulo: 'Instalações e Aparelhos',
        subitens: [
          {
            titulo: 'Instalações elétricas',
            texto: 'Conforme projeto e normas ABNT; marcas Schneider, Pial Legrand, Iriel, Siemens, Alumbra ou equivalente; quadro de distribuição em caixa padrão CPFL.',
            fonte: 'item 8.1',
          },
          {
            titulo: 'Antena e telefonia',
            texto: 'Tubulação seca em jantar/living e dormitórios nas unidades tipo; também na varanda gourmet nas unidades duplex.',
            fonte: 'item 8.2',
          },
          { titulo: 'SPDA (sistema de para-raios)', texto: 'Sistema de para-raios conforme normas brasileiras; medidores conforme projeto aprovado pela CPFL.', fonte: 'item 8.3' },
          {
            titulo: 'Ar-condicionado',
            texto:
              'Preparação para sistema mini VRF ou multi split (evaporadoras split, hi-wall ou cassete) nos dormitórios, living e varanda gourmet, com condensadoras na laje técnica; equipamento por conta do adquirente. Algumas áreas comuns do térreo já recebem ar-condicionado tipo hi-wall/cassete instalado.',
            fonte: 'item 8.4',
          },
          { titulo: 'Elevadores', texto: '4 elevadores sociais e 1 de serviço, marcas Atlas-Schindler, Otis, Thyssen Krupp ou equivalente.', fonte: 'item 8.6' },
          { titulo: 'Aparelhos sanitários', texto: 'Louças Celite, Deca, Incepa, Rocca ou equivalente.', fonte: 'item 8.7' },
          { titulo: 'Metais sanitários', texto: 'Cromados, marcas Deca, Docol, Perflex ou equivalente; duchas não inclusas.', fonte: 'item 8.8' },
        ],
      },
      {
        id: 'hidraulica-esgoto',
        titulo: 'Instalações Hidráulicas e de Esgoto',
        subitens: [
          { titulo: 'Água fria', texto: 'PPR e/ou PVC e/ou CPVC e/ou PEX, marcas Tigre, Cardinali, Amanco, Brazil ou equivalente.', fonte: 'item 8.5.1' },
          {
            titulo: 'Água quente',
            texto: 'PPR e/ou CPVC e/ou PEX; aquecimento por aquecedor de passagem a gás para duchas, lavatórios e pia da cozinha, adquirido separadamente pelo proprietário.',
            fonte: 'item 8.5.2',
          },
          { titulo: 'Gás', texto: 'Infraestrutura para aquecedor a gás; distribuição conforme normas ABNT e do Corpo de Bombeiros.', fonte: 'item 8.5.3' },
          { titulo: 'Esgoto e águas pluviais', texto: 'Colunas e ramais conforme normas específicas.', fonte: 'item 8.5.4' },
          {
            titulo: 'Medição individualizada',
            texto: 'Equipamentos de medição entregues; o condomínio precisa contratar empresa especializada para leitura e rateio das contas.',
            fonte: 'item 8.5.6',
          },
        ],
      },
      { id: 'combate-incendio', titulo: 'Instalação de Combate a Incêndio', subitens: combateIncendioPadrao },
      {
        id: 'acabamentos-areas-comuns',
        titulo: 'Áreas de Uso Comum – Subsolos / Térreo',
        subitens: [
          {
            titulo: 'Estacionamento, manobras, reservatórios, gerador, pressurização',
            texto: 'Piso cimentado desempenado e/ou asfaltado e/ou com faixas demarcatórias.',
            fonte: 'item 9.1.1',
          },
          {
            titulo: 'Hall social/serviço, lobby, sala de jogos, salão de festas, copa de apoio, espaço gourmet',
            texto: 'Piso porcelanato (Portobello, Eliane, Portinari ou equivalente); bancadas em mármore/granito com cuba de inox.',
            fonte: 'item 9.1.2',
          },
          {
            titulo: 'Guarita, copa de funcionários, DML, primeiros socorros, depósitos, vestiários',
            texto: 'Piso porcelanato; paredes com cerâmica no lixo e vestiários, demais em tinta acrílica PVA.',
            fonte: 'item 9.1.3',
          },
          {
            titulo: 'Fitness, coworking e brinquedoteca',
            texto: 'Piso vinílico/carpete de madeira/porcelanato/emborrachado/cerâmica; teto com opções de forro acústico ou ripas de madeira.',
            fonte: 'item 9.1.4',
          },
          {
            titulo: 'Piscinas e espelhos d’água',
            texto: 'Revestimento cerâmico/porcelanato; deck/solário/ducha em cimentício ou porcelanato antiderrapante, pedra natural, piso atérmico ou madeira plástica.',
            fonte: 'item 9.1.6',
          },
          {
            titulo: 'Family Club e churrasqueira',
            texto: 'Piso cimentício/porcelanato; bancada em granito com cuba de inox embutida.',
            fonte: 'item 9.1.8',
          },
          {
            titulo: 'Entrega equipada',
            texto: 'Ambientes de lazer, fitness/coworking e Family Club são entregues equipados e decorados.',
            fonte: 'nota do item 9.1',
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------
  // MARQUISES PARK RESIDENCE
  // -----------------------------------------------------------------
  {
    empreendimentoId: 'marquises-park',
    secoes: [
      {
        id: 'subsolos-estacionamento',
        titulo: 'Subsolos e Estacionamento',
        subitens: [
          {
            titulo: '2º subsolo',
            texto: '166 vagas para carros, 1 vaga PNE, 15 vagas para motos, reservatórios inferiores, 2 salas de exaustão, 41 armários individuais, acesso a 2 escadas de emergência e aos 6 elevadores (4 sociais + 2 de serviço).',
            fonte: 'item 2.1',
          },
          {
            titulo: '1º subsolo',
            texto: '166 vagas para carros, 1 vaga PNE, 19 vagas para motos, centro de medição, casa de bombas, área técnica, depósito de lixo e reservatório de retenção e retardo.',
            fonte: 'item 2.2',
          },
          {
            titulo: 'Total de vagas',
            texto: '332 vagas de garagem no total; unidades tipo com 4 vagas cada e Penthouse com 6 vagas cada, mais 2 vagas PNE e 34 vagas para motos.',
            fonte: 'item 2 (introdução)',
          },
        ],
      },
      {
        id: 'terreo',
        titulo: 'Térreo',
        subitens: [
          {
            titulo: 'Áreas comuns e de lazer',
            texto:
              'Portaria com WC, quadra recreativa, Family Club (piscina, spa, churrasqueira, playground, lounge), solário, piscina adulto com deck molhado e piscina infantil, sauna com piscina, praça da escultura com espelho d’água, lobby/hall social, salão de festas com copa, fitness, pilates, brinquedoteca, pet care, coworking, espaço gourmet e varanda de jogos.',
            fonte: 'item 2.3',
          },
        ],
      },
      {
        id: 'pavimentos',
        titulo: 'Pavimentos',
        subitens: [
          {
            titulo: '1º ao 20º pavimento tipo',
            texto: '1 apartamento por andar em cada uma das 4 torres conjugadas — apartamentos tipo lateral (com home tv) e tipo central, ambos com 4 suítes (ou conforme opção de planta).',
            fonte: 'item 2.4',
          },
          { titulo: '21º pavimento (Penthouse)', texto: '2 apartamentos Penthouse, cada um ocupando duas torres, com 5 suítes cada.', fonte: 'item 2.5' },
        ],
      },
      {
        id: 'atico-reservatorios',
        titulo: 'Ático / Reservatórios',
        subitens: [
          {
            titulo: 'Ático / Barrilete',
            texto:
              'Comum às 4 torres: caixa de escadas, casas de máquinas dos elevadores, barrilete, cobertura e reservatórios superiores dimensionados para a demanda do edifício e para a reserva exigida pelo Corpo de Bombeiros.',
            fonte: 'item 2.6',
          },
        ],
      },
      { id: 'servicos-preliminares', titulo: 'Serviços Preliminares e Gerais', subitens: servicosPreliminaresTorreConcreto },
      {
        id: 'infraestrutura',
        titulo: 'Infraestrutura',
        subitens: [
          { titulo: 'Trabalhos em terra', texto: 'Cortes, escavações e aterros conforme cotas de projeto, quando necessário.', fonte: 'item 4.1' },
          {
            titulo: 'Fundações / Supraestruturas',
            texto: 'Estrutura em concreto armado, conforme projeto estrutural específico e controle tecnológico de qualidade dos materiais.',
            fonte: 'item 4.2',
          },
        ],
      },
      { id: 'paredes-vedacao', titulo: 'Paredes e Painéis de Vedação', subitens: paredesVedacaoTorreConcreto },
      {
        id: 'esquadrias',
        titulo: 'Esquadrias (portas, ferragens e vidros)',
        subitens: [
          {
            titulo: 'Esquadrias de ferro',
            texto: 'Portões de estacionamento, guarda-corpos das varandas (laje técnica), corrimãos, grelhas, alçapões e escada marinheiro em ferro, com tratamento e pintura.',
            fonte: 'item 6.1',
          },
          {
            titulo: 'Esquadrias de alumínio e/ou PVC',
            texto:
              'Gradis de fechamento, guarda-corpos, portas e janelas do térreo. Nas unidades: janelas de dormitórios/banheiros/sala/serviço/cozinha, portas da sala e da copa para a varanda, e guarda-corpo da varanda gourmet.',
            fonte: 'item 6.2',
          },
          { titulo: 'Portas incombustíveis', texto: 'Escadarias e cabine de força com porta corta-fogo aprovada pelo Corpo de Bombeiros.', fonte: 'item 6.3' },
          {
            titulo: 'Esquadrias de madeira',
            texto: 'Portas de entrada e internas dos apartamentos em madeira e/ou compostos de madeira, enceradas, envernizadas ou pintadas.',
            fonte: 'item 6.4',
          },
          { titulo: 'Ferragens', texto: 'La Fonte, Papaiz, Arouca, Pado, Aliança ou outra com desempenho técnico equivalente ou superior.', fonte: 'item 6.5' },
          {
            titulo: 'Vidros',
            texto: 'Pontilhados, fantasia ou leitosos em banheiros e área de serviço; transparente liso em dormitórios, estar e cozinha; liso incolor nas varandas e lazer do térreo.',
            fonte: 'item 6.6',
          },
        ],
      },
      { id: 'cobertura-protecoes', titulo: 'Cobertura e Proteções', subitens: coberturaProtecoesTorreConcreto },
      {
        id: 'instalacoes-aparelhos',
        titulo: 'Instalações e Aparelhos',
        subitens: [
          {
            titulo: 'Instalações elétricas',
            texto: 'Conforme projeto e normas ABNT; marcas Schneider, Pial Legrand, Iriel, Siemens, Alumbra ou equivalente; quadro de distribuição em caixa padrão CPFL.',
            fonte: 'item 8.1',
          },
          {
            titulo: 'Antena e telefonia',
            texto: 'Tubulação seca na sala de estar/home, dormitórios, copa/sala de almoço e varanda gourmet; na Penthouse, também na sala do motorista.',
            fonte: 'item 8.2',
          },
          { titulo: 'SPDA (sistema de para-raios)', texto: 'Sistema de para-raios conforme normas brasileiras; medidores conforme projeto aprovado pela CPFL.', fonte: 'item 8.3' },
          {
            titulo: 'Ar-condicionado',
            texto:
              'Preparação para sistema VRF tipo split e/ou cassete nos dormitórios, salas, varandas e copa/sala de almoço, com condensadoras na laje técnica; equipamento por conta do adquirente. Áreas comuns do térreo recebem ar-condicionado split/cassete já instalado.',
            fonte: 'item 8.4',
          },
          {
            titulo: 'Elevadores',
            texto: '1 elevador social e 1 de serviço por torre (o de serviço comum a cada duas torres), marcas Atlas-Schindler, Otis, Thyssen Krupp ou equivalente.',
            fonte: 'item 8.6',
          },
          { titulo: 'Aparelhos sanitários', texto: 'Deca, Celite, Incepa, Rocca, Fabrimar, Icasa ou equivalente.', fonte: 'item 8.7' },
          { titulo: 'Metais sanitários', texto: 'Docol, Deca, Meber, Perflex, Celfix, Fabrimar ou equivalente; duchas não inclusas.', fonte: 'item 8.8' },
        ],
      },
      {
        id: 'hidraulica-esgoto',
        titulo: 'Instalações Hidráulicas e de Esgoto',
        subitens: [
          { titulo: 'Água fria', texto: 'PPR e/ou PVC e/ou CPVC e/ou PEX, marcas Tigre, Cardinali, Amanco, Brazil ou equivalente.', fonte: 'item 8.5.1' },
          {
            titulo: 'Água quente',
            texto:
              'PPR e/ou CPVC e/ou PEX; aquecimento por aquecedor de passagem a gás para duchas, lavatórios e pia da cozinha. O aquecedor e o recirculador de água quente devem ser adquiridos e instalados separadamente pelo proprietário.',
            fonte: 'item 8.5.2',
          },
          { titulo: 'Gás', texto: 'Infraestrutura para aquecedor a gás; distribuição conforme normas ABNT e do Corpo de Bombeiros.', fonte: 'item 8.5.3' },
          { titulo: 'Esgoto e águas pluviais', texto: 'Colunas e ramais conforme normas específicas.', fonte: 'item 8.5.4' },
          {
            titulo: 'Medição individualizada',
            texto: 'Equipamentos de medição entregues; o condomínio precisa contratar empresa especializada para leitura e rateio das contas.',
            fonte: 'item 8.5.6',
          },
        ],
      },
      { id: 'combate-incendio', titulo: 'Instalação de Combate a Incêndio', subitens: combateIncendioPadrao },
      {
        id: 'acabamentos-areas-comuns',
        titulo: 'Áreas de Uso Comum – Subsolos / Térreo',
        subitens: [
          {
            titulo: 'Estacionamento, manobras, centro de medição, gerador',
            texto: 'Piso cimentado desempenado e/ou asfaltado e/ou intertravado.',
            fonte: 'item 9.1.1',
          },
          {
            titulo: 'Lobby/hall social, salão de festas, espaço gourmet, pet care, coworking, varanda de jogos',
            texto:
              'Piso porcelanato (Portobello, Eliane, Portinari, Roca, Incepa e outras); revestimento decorativo em pedra/porcelanato no hall, coworking e varanda de jogos; bancadas em mármore/granito com cuba de louça ou inox.',
            fonte: 'item 9.1.2',
          },
          {
            titulo: 'Portaria, copa de funcionários, vestiários, DML',
            texto: 'Piso porcelanato; paredes cerâmicas, exceto na copa (apenas parede hidráulica) e no WC PNE do subsolo (pintura).',
            fonte: 'item 9.1.3',
          },
          { titulo: 'Fitness e brinquedoteca', texto: 'Piso vinílico/carpete de madeira/porcelanato/cerâmica.', fonte: 'item 9.1.4' },
          { titulo: 'Bicicletário', texto: 'Piso cimentado com pintura ou porcelanato/cerâmica.', fonte: 'item 9.1.5' },
          {
            titulo: 'Piscina, spa e áreas externas',
            texto:
              'Revestimento cerâmico nas piscinas; deck/solário em cimentício ou porcelanato antiderrapante, pedra natural ou madeira plástica; playground em piso emborrachado; quadra recreativa cimentada e demarcada.',
            fonte: 'itens 9.1.7 e 9.1.8',
          },
          {
            titulo: 'Family Club e churrasqueira',
            texto: 'Piso cimentício/porcelanato; bancada em granito ou pré-moldado com cuba de inox embutida.',
            fonte: 'item 9.1.9',
          },
          {
            titulo: 'Entrega equipada',
            texto: 'Ambientes de lazer, fitness, piscina e Family Club são entregues equipados e decorados.',
            fonte: 'nota do item 9.1',
          },
        ],
      },
    ],
  },
]

export function getMemorialDoEmpreendimento(empreendimentoId: string): MemorialEmpreendimento | undefined {
  return memorialPorEmpreendimento.find((m) => m.empreendimentoId === empreendimentoId)
}
