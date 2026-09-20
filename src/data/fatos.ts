// Fatos estruturados extraídos dos memoriais, usados pelo assistente para
// responder perguntas objetivas (números, listas) sem IA. Cada fato cita o
// item do memorial de onde saiu. Totais somados (ex.: vagas) foram
// calculados a partir dos itens citados.

export type Topico =
  | 'vagas'
  | 'unidades'
  | 'arUnidade'
  | 'arComum'
  | 'piso'
  | 'bancadas'
  | 'churrasqueira'

export interface Fato {
  texto: string
  fonte: string
}

export interface FatoArComum {
  entregues: string
  condominio: string
  fonte: string
}

export const fatos: {
  vagas: Record<string, Fato>
  unidades: Record<string, Fato>
  arUnidade: Record<string, Fato>
  arComum: Record<string, FatoArComum>
  piso: Record<string, Fato>
  bancadas: Record<string, Fato>
  churrasqueira: Record<string, Fato>
} = {
  vagas: {
    'riverside-mb': {
      texto:
        '294 vagas de carro no total: 282 residenciais (59 no 3º subsolo, 96 no 2º, 120 no 1º, incluindo 2 PCD, e 7 PCD no térreo) e 12 vagas do condomínio comercial no 3º subsolo. Motos: 37 (9 + 14 + 14).',
      fonte: 'itens 2 e 2.1 a 2.4',
    },
    'mb-park': {
      texto:
        '264 vagas de carro no total: 8 do condomínio comercial (3º subsolo) e 256 residenciais (50 no 3º subsolo, 65 no 2º, 102 no 1º e 39 no térreo, sendo 26 do condomínio, 10 de visitantes e 3 utilitárias). Há vagas PCD (4 no 2º e 4 no 1º subsolo) e 12 vagas para idosos no térreo. Motos: 29 (13 + 6 + 10). Bicicletários para 30 bicicletas (6 + 8 + 16).',
      fonte: 'itens 2.1 a 2.4',
    },
    'cerqueira-2164': {
      texto: '52 vagas de carro: 33 no 1º subsolo e 19 no térreo, com 1 vaga PCD em cada. Motos: 13 (8 + 5).',
      fonte: 'itens 2.1 e 2.2',
    },
    'hype-residence': {
      texto:
        '266 vagas acessórias para moradores (138 no 2º subsolo e 128 no 1º), mais 2 vagas PNE (uma em cada subsolo) e 1 vaga de garagem autônoma no 2º subsolo, somando 269 vagas de carro. Motos: 31 (16 + 15). Também há 25 armários em cada subsolo.',
      fonte: 'itens 2.1 e 2.2',
    },
    'marquises-park': {
      texto:
        '332 vagas de carro (166 em cada subsolo), mais 2 vagas PNE (uma por subsolo). Cada apartamento tipo tem 4 vagas e cada Penthouse tem 6. Motos: 34 (15 + 19).',
      fonte: 'itens 2, 2.1 e 2.2',
    },
  },

  unidades: {
    'riverside-mb': {
      texto:
        '260 apartamentos residenciais em duas torres (inclui 12 apartamentos do térreo com quintal privativo e 8 coberturas), mais 5 lojas comerciais.',
      fonte: 'item 2',
    },
    'mb-park': {
      texto: '238 apartamentos residenciais (119 por torre, em duas torres), mais 3 lojas comerciais.',
      fonte: 'item 2',
    },
    'cerqueira-2164': {
      texto: '56 apartamentos, em uma única torre (7 andares com 8 apartamentos cada).',
      fonte: 'item 2',
    },
    'hype-residence': {
      texto:
        '99 apartamentos tipo (25 andares com 4 apartamentos), mais 1 apartamento Garden e 4 apartamentos Duplex.',
      fonte: 'item 2',
    },
    'marquises-park': {
      texto:
        '82 unidades privativas em quatro torres conjugadas: 80 apartamentos tipo (1 por andar em 20 andares) e 2 coberturas Penthouse.',
      fonte: 'item 2',
    },
  },

  arUnidade: {
    'riverside-mb': {
      texto:
        'Nos quartos e na sala. A construtora entrega carga elétrica, infraestrutura seca, dreno hidráulico e caixa de passagem; a rede frigorígena, os cabos e os aparelhos (compra e instalação) ficam por conta do proprietário. As condensadoras vão na laje técnica.',
      fonte: 'item 8.4',
    },
    'mb-park': {
      texto:
        'Nos quartos e na sala. A construtora entrega carga elétrica, infraestrutura seca, dreno hidráulico e caixa de passagem; a rede frigorígena, os cabos e os aparelhos ficam por conta do proprietário. As condensadoras vão na laje técnica.',
      fonte: 'item 8.4',
    },
    'cerqueira-2164': {
      texto:
        'Nos quartos e na sala. São entregues carga elétrica, dreno hidráulico e caixa de passagem; a rede frigorígena, o cabeamento, a instalação dos disjuntores e o equipamento (condensadora e evaporadora) ficam por conta do proprietário. As condensadoras vão na laje técnica.',
      fonte: 'item 8.4',
    },
    'hype-residence': {
      texto:
        'Nos dormitórios, na sala (jantar/living) e na varanda gourmet, para sistema mini VRF ou multi split. A preparação inclui área técnica, carga elétrica, rede frigorífica, cabos de comando e elétricos, dreno e caixa de passagem; a compra e instalação dos aparelhos ficam por conta do proprietário. As condensadoras vão na laje técnica.',
      fonte: 'item 8.4',
    },
    'marquises-park': {
      texto:
        'Nos dormitórios, nas salas, nas varandas e na copa/sala de almoço, para sistema VRF (split e/ou cassete). A compra e instalação dos aparelhos ficam por conta do proprietário. As condensadoras vão na laje técnica.',
      fonte: 'item 8.4',
    },
  },

  arComum: {
    'riverside-mb': {
      entregues: 'salão de festas, brinquedoteca, academia, coworking, delivery, mini market e guarita.',
      condominio: 'o memorial não cita nenhuma área comum que o condomínio precise climatizar.',
      fonte: 'item 8.4',
    },
    'mb-park': {
      entregues:
        'salão de festas, brinquedoteca, academia, coworking, lavanderia, market place, delivery e guarita.',
      condominio: 'o memorial não cita nenhuma área comum que o condomínio precise climatizar.',
      fonte: 'item 8.4',
    },
    'cerqueira-2164': {
      entregues: 'nenhuma já vem com o equipamento instalado.',
      condominio:
        'espaço de convivência/salão de festas, academia, lavanderia, minimercado e guarita recebem só a infraestrutura (carga elétrica, cabeamento, dreno e caixa de passagem). A rede frigorígena e os equipamentos (condensadoras e evaporadoras) ficam a cargo do condomínio.',
      fonte: 'item 8.4',
    },
    'hype-residence': {
      entregues:
        'em determinadas áreas comuns do térreo são instalados ar-condicionados tipo hi-wall ou cassete. O memorial não lista quais são.',
      condominio: 'o memorial não especifica.',
      fonte: 'item 8.4',
    },
    'marquises-park': {
      entregues:
        'em determinadas áreas comuns do térreo são instalados ar-condicionados tipo split ou cassete. O memorial não lista quais são.',
      condominio: 'o memorial não especifica.',
      fonte: 'item 8.4',
    },
  },

  piso: {
    'riverside-mb': {
      texto:
        'Porcelanato (Portobello, Eliane, Biancogress, Portinari, Incepa, Cecrisa, Villagres ou equivalente) em todos os ambientes: estar/jantar, dormitórios, suíte, varanda, quintal (térreo), lavabo, banheiros e cozinha/área de serviço. Rodapé em porcelanato e/ou PVC.',
      fonte: 'itens 9.3 e 9.5',
    },
    'mb-park': {
      texto:
        'Porcelanato (Portobello, Eliane, Biancogress, Portinari, Incepa, Cecrisa, Villagres ou equivalente) em estar/jantar, dormitório, suíte, varanda, quintal (térreo), banheiros e cozinha/área de serviço. Rodapé em porcelanato e/ou PVC.',
      fonte: 'item 9.2.1',
    },
    'cerqueira-2164': {
      texto:
        'Revestimento cerâmico e/ou porcelanato (Portobello, Eliane, Biancogress, Portinari, Incepa, Cecrisa, Villagres ou equivalente) em estar/jantar, dormitório, suíte (quando houver), varanda, banheiros e cozinha/área de serviço.',
      fonte: 'item 9.2.1',
    },
    'hype-residence': {
      texto:
        'Porcelanato (Portobello, Eliane, Portinari ou similar) em hall, sala de jantar/living, lavabo, varanda gourmet, circulação, dormitórios, cozinha, lavanderia, banheiros e WC de serviço. A laje técnica tem piso cimentado desempenado.',
      fonte: 'itens 9.4.1 a 9.4.4',
    },
    'marquises-park': {
      texto:
        'Porcelanato (Portobello, Eliane, Portinari, Roca, Incepa e outras marcas ou equivalente) em salas, varanda gourmet, copa/sala de almoço, circulação, dormitórios e lavabo. Cozinha, lavanderia, depósito, despensa e banheiros têm cerâmica ou porcelanato. A laje técnica tem piso cimentado desempenado.',
      fonte: 'itens 9.4.1 a 9.4.4',
    },
  },

  bancadas: {
    'riverside-mb': {
      texto:
        'Mármore ou granito com cuba embutida de inox na cozinha e cuba de louça nos banheiros. Nas coberturas, a suíte master tem cuba dupla de louça.',
      fonte: 'itens 9.3 e 9.5',
    },
    'mb-park': {
      texto:
        'Mármore ou granito com cuba embutida de inox na cozinha e na varanda, e cuba de louça nos banheiros.',
      fonte: 'item 9.2.1',
    },
    'cerqueira-2164': {
      texto:
        'Granito com cuba embutida de inox na cozinha e na varanda, e granito com cuba de louça nos banheiros.',
      fonte: 'item 9.2.1',
    },
    'hype-residence': {
      texto:
        'Cozinha: granito com cuba embutida de inox. Lavabo: mármore ou granito com cuba de louça. Varanda gourmet: cuba embutida de inox. Banheiros: mármore ou granito com cuba de louça, exceto o WC de serviço, que tem apenas cuba de louça suspensa. Lavanderia: tanque de louça.',
      fonte: 'itens 9.4.1, 9.4.2 e 9.4.4',
    },
    'marquises-park': {
      texto:
        'Cozinha: granito com cuba embutida de aço inox. Lavanderia: tanque embutido de aço inox. Lavabo: mármore ou granito com cuba de louça. Varanda gourmet: cuba de inox. Banheiros: mármore ou granito com cuba de louça, exceto o banheiro de serviço, com lavatório de louça suspenso.',
      fonte: 'itens 9.4.1, 9.4.2 e 9.4.4',
    },
  },

  churrasqueira: {
    'riverside-mb': {
      texto:
        'Sim, churrasqueira a gás na varanda, entregue já instalada pela construtora. Nas coberturas há varanda coberta com churrasqueira a gás e varanda descoberta com deck e banheira.',
      fonte: 'itens 8.5.3, 9.3 e 9.5',
    },
    'mb-park': {
      texto: 'Sim, churrasqueira elétrica na varanda (diferente do Riverside mb, que é a gás).',
      fonte: 'item 9.2.1',
    },
    'cerqueira-2164': {
      texto: 'O memorial não prevê churrasqueira na varanda das unidades.',
      fonte: 'item 9.2.1',
    },
    'hype-residence': {
      texto:
        'O memorial não prevê churrasqueira na varanda das unidades; a varanda gourmet tem bancada com cuba de inox. As churrasqueiras entregues são as das áreas comuns (Family Club e gourmet da quadra).',
      fonte: 'itens 9.4.1 e 10',
    },
    'marquises-park': {
      texto:
        'O memorial não prevê churrasqueira nas varandas das unidades. Há churrasqueira na área comum Family Club.',
      fonte: 'itens 9.4.1 e 10',
    },
  },
}
