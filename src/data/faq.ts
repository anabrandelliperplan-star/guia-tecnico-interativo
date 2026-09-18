export type Categoria = 'acabamentos' | 'instalacoes'

export interface Empreendimento {
  id: string
  nome: string
}

export interface FaqItem {
  id: string
  empreendimentoId: string
  categoria: Categoria
  subcategoria: string
  pergunta: string
  resposta: string
  fonteMemorial?: string
}

// Conteúdo extraído dos memoriais descritivos fornecidos pela Perplan Incorporação.
// Ao adicionar um novo empreendimento, inclua-o aqui e cadastre as perguntas
// correspondentes em faqItems, citando a seção do memorial em fonteMemorial.
export const empreendimentos: Empreendimento[] = [
  { id: 'geral', nome: 'Dúvidas gerais (todos os empreendimentos)' },
  { id: 'riverside-mb', nome: 'Riverside mb' },
  { id: 'mb-park', nome: 'MB Park' },
  { id: 'cerqueira-2164', nome: 'Cerqueira 2164' },
  { id: 'hype-residence', nome: 'Hype Residence' },
  { id: 'marquises-park', nome: 'Marquises Park Residence' },
]

export const faqItems: FaqItem[] = [
  // ---------------------------------------------------------------------
  // GERAL — cláusulas e padrões que se repetem, com o mesmo texto, em
  // todos os memoriais descritivos analisados.
  // ---------------------------------------------------------------------
  {
    id: 'geral-duchas',
    empreendimentoId: 'geral',
    categoria: 'instalacoes',
    subcategoria: 'Hidráulica',
    pergunta: 'A unidade vem com duchas (chuveiro) instaladas nos banheiros?',
    resposta:
      'Não. Em todos os empreendimentos, a infraestrutura para o chuveiro é entregue (ponto de água quente com aquecedor a gás de passagem), mas a compra e instalação da ducha/chuveiro em si ficam por conta do proprietário.',
    fonteMemorial: 'Memorial Descritivo — item Metais Sanitários',
  },
  {
    id: 'geral-materiais-substituicao',
    empreendimentoId: 'geral',
    categoria: 'acabamentos',
    subcategoria: 'Contrato e garantias',
    pergunta:
      'As marcas de materiais citadas no memorial (pisos, louças, metais) são garantidas ou podem mudar?',
    resposta:
      'O memorial cita marcas de referência, mas a construtora se reserva o direito de utilizar materiais de desempenho igual ou equivalente caso a marca original saia de linha, haja fusão de empresas ou falta do produto no mercado no momento da compra.',
    fonteMemorial: 'Memorial Descritivo — item Observações (12.2)',
  },
  {
    id: 'geral-folder-vs-memorial',
    empreendimentoId: 'geral',
    categoria: 'acabamentos',
    subcategoria: 'Contrato e garantias',
    pergunta:
      'As imagens do folheto de vendas e do apartamento decorado valem como o que vou receber?',
    resposta:
      'Não. Ilustrações do material publicitário, perspectivas, maquetes e o próprio apartamento/stand decorado são meramente ilustrativos. Em caso de divergência, prevalece sempre a especificação escrita no memorial descritivo rubricado, que é parte do contrato.',
    fonteMemorial: 'Memorial Descritivo — item Observações (12.3 e 12.4)',
  },
  {
    id: 'geral-reformas',
    empreendimentoId: 'geral',
    categoria: 'instalacoes',
    subcategoria: 'Reformas',
    pergunta: 'Posso alterar as instalações elétricas ou hidráulicas da minha unidade depois da entrega?',
    resposta:
      'Qualquer reforma que envolva alteração de paredes, instalações elétricas/hidráulicas, remoção de piso, enchimento de sacada ou impermeabilização deve ser avaliada e assinada por profissional habilitado (CREA/CAU), com aprovação do condomínio e do projeto original. A construtora não autoriza, acompanha nem se responsabiliza pela execução de reformas.',
    fonteMemorial: 'Memorial Descritivo — item Observações (12.1)',
  },
  {
    id: 'geral-marmore-variacao',
    empreendimentoId: 'geral',
    categoria: 'acabamentos',
    subcategoria: 'Bancadas',
    pergunta: 'Por que a bancada/piso de mármore ou granito da minha unidade é diferente da mostrada no decorado?',
    resposta:
      'Pisos, revestimentos e bancadas de mármore ou granito são materiais naturais e estão sujeitos a variações de cor, tonalidade e veios — isso não é defeito, é característica do material.',
    fonteMemorial: 'Memorial Descritivo — item Observações (12.6)',
  },
  {
    id: 'geral-lavabo-cozinha-impermeabilizacao',
    empreendimentoId: 'geral',
    categoria: 'acabamentos',
    subcategoria: 'Limpeza e manutenção',
    pergunta: 'Posso lavar o chão do lavabo e da cozinha com água à vontade?',
    resposta:
      'Não é recomendado: o lavabo (quando existir) e a cozinha não são impermeabilizados, devendo ser limpos apenas com panos úmidos e produtos não agressivos. Os ralos existentes são apenas extravasores para vazamento acidental, e a lavagem direta dessas áreas é vetada.',
    fonteMemorial: 'Memorial Descritivo — item Observações (12.8)',
  },
  {
    id: 'geral-sancas-gesso',
    empreendimentoId: 'geral',
    categoria: 'instalacoes',
    subcategoria: 'Elétrica',
    pergunta: 'Por que existem rebaixos ou sancas de gesso em alguns cômodos da minha unidade?',
    resposta:
      'Eventualmente, por motivos técnicos, são executados ou eliminados enchimentos e forros/sancas de gesso nas dependências das unidades para permitir a passagem de tubulações e instalações.',
    fonteMemorial: 'Memorial Descritivo — item Observações (12.7)',
  },
  {
    id: 'geral-elevadores',
    empreendimentoId: 'geral',
    categoria: 'instalacoes',
    subcategoria: 'Elevadores',
    pergunta: 'Quais marcas de elevador são usadas nos empreendimentos da Perplan?',
    resposta:
      'Os elevadores são das marcas Atlas-Schindler, Otis, Thyssen Krupp, Kone ou outra com desempenho técnico equivalente ou superior.',
    fonteMemorial: 'Memorial Descritivo — item Elevadores',
  },

  // ---------------------------------------------------------------------
  // RIVERSIDE MB
  // ---------------------------------------------------------------------
  {
    id: 'riverside-piso-unidade',
    empreendimentoId: 'riverside-mb',
    categoria: 'acabamentos',
    subcategoria: 'Pisos',
    pergunta: 'Qual o piso da sala, quartos e banheiros no Riverside mb?',
    resposta:
      'Porcelanato das marcas Portobello, Eliane, Biancogress, Portinari, Incepa, Cecrisa, Villagres (ou equivalente) em estar/jantar, dormitórios, suíte, varanda, lavabo, banheiros e cozinha/área de serviço, com rodapé no mesmo padrão e/ou PVC.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 9.3',
  },
  {
    id: 'riverside-bancadas',
    empreendimentoId: 'riverside-mb',
    categoria: 'acabamentos',
    subcategoria: 'Bancadas',
    pergunta: 'De que material é a bancada da cozinha e dos banheiros?',
    resposta:
      'Mármore ou granito com cuba embutida de inox na cozinha e cuba de louça nos banheiros. Nas unidades de cobertura, a Suíte Master recebe bancada com cuba dupla de louça.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, itens 9.3 e 9.5',
  },
  {
    id: 'riverside-churrasqueira',
    empreendimentoId: 'riverside-mb',
    categoria: 'instalacoes',
    subcategoria: 'Gás',
    pergunta: 'A varanda do apartamento já vem com churrasqueira?',
    resposta:
      'Sim. Há previsão para instalação de churrasqueira a gás na varanda das unidades privativas, e a churrasqueira em si é entregue pela construtora já instalada.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 8.5.3',
  },
  {
    id: 'riverside-ar-condicionado',
    empreendimentoId: 'riverside-mb',
    categoria: 'instalacoes',
    subcategoria: 'Ar-condicionado',
    pergunta: 'A unidade já vem preparada para ar-condicionado?',
    resposta:
      'Há previsão de carga elétrica, infraestrutura seca, dreno hidráulico e caixa de passagem para instalação de ar-condicionado nos quartos e na sala, com as condensadoras posicionadas na laje técnica. A rede frigorígena, os cabos e a instalação do equipamento ficam por conta do proprietário. Áreas comuns como salão de festas, brinquedoteca, academia, coworking, delivery, mini market e guarita já são entregues climatizadas.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 8.4',
  },
  {
    id: 'riverside-agua-quente',
    empreendimentoId: 'riverside-mb',
    categoria: 'instalacoes',
    subcategoria: 'Água quente e gás',
    pergunta: 'Como funciona o aquecimento de água do chuveiro?',
    resposta:
      'O aquecimento ocorre por equipamento aquecedor de passagem a gás. O aquecedor e o chuveiro devem ser adquiridos e instalados pelo proprietário; a infraestrutura de gás já é entregue pronta.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 8.5.2',
  },
  {
    id: 'riverside-tv-telefone',
    empreendimentoId: 'riverside-mb',
    categoria: 'instalacoes',
    subcategoria: 'Elétrica',
    pergunta: 'Onde ficam os pontos para TV a cabo e telefone?',
    resposta:
      'A tubulação seca para futura instalação de antena coletiva/TV a cabo é prevista na sala de estar e na suíte/dormitório. Para telefonia, a tubulação seca fica na sala de estar.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 8.2',
  },
  {
    id: 'riverside-medicao',
    empreendimentoId: 'riverside-mb',
    categoria: 'instalacoes',
    subcategoria: 'Medição individualizada',
    pergunta: 'Água e gás são medidos individualmente por apartamento?',
    resposta:
      'O empreendimento é entregue com previsão para instalação de medidores individuais de água e gás, mas a instalação e gestão dos medidores é de responsabilidade dos condôminos.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 8.5.6',
  },
  {
    id: 'riverside-lavanderia',
    empreendimentoId: 'riverside-mb',
    categoria: 'instalacoes',
    subcategoria: 'Áreas comuns',
    pergunta: 'A lavanderia coletiva já vem com máquinas de lavar e secar?',
    resposta:
      'É entregue apenas a infraestrutura para dois conjuntos de máquina de lavar e secar; a aquisição dos equipamentos é de responsabilidade do condomínio.',
    fonteMemorial: 'Riverside mb — Memorial Descritivo, item 9.1.6',
  },

  // ---------------------------------------------------------------------
  // MB PARK
  // ---------------------------------------------------------------------
  {
    id: 'mbpark-piso-unidade',
    empreendimentoId: 'mb-park',
    categoria: 'acabamentos',
    subcategoria: 'Pisos',
    pergunta: 'Qual o piso da sala, quartos e banheiros no MB Park?',
    resposta:
      'Porcelanato das marcas Portobello, Eliane, Biancogress, Portinari, Incepa, Cecrisa, Villagres (ou equivalente) em estar/jantar, dormitório, suíte, varanda, banheiros e cozinha/área de serviço.',
    fonteMemorial: 'MB Park — Memorial Descritivo, item 9.2.1',
  },
  {
    id: 'mbpark-churrasqueira',
    empreendimentoId: 'mb-park',
    categoria: 'instalacoes',
    subcategoria: 'Elétrica',
    pergunta: 'A varanda do apartamento tem churrasqueira a gás como no Riverside?',
    resposta:
      'Não. No MB Park a churrasqueira da varanda privativa é elétrica, diferente do Riverside mb, que usa churrasqueira a gás.',
    fonteMemorial: 'MB Park — Memorial Descritivo, item 9.2.1',
  },
  {
    id: 'mbpark-gas-fogao',
    empreendimentoId: 'mb-park',
    categoria: 'instalacoes',
    subcategoria: 'Água quente e gás',
    pergunta: 'A cozinha já tem ponto de gás para o fogão?',
    resposta:
      'Sim, há previsão de instalação de fogão a gás na cozinha das unidades privativas, além da infraestrutura para aquecedor a gás das duchas.',
    fonteMemorial: 'MB Park — Memorial Descritivo, item 8.5.3',
  },
  {
    id: 'mbpark-ar-condicionado',
    empreendimentoId: 'mb-park',
    categoria: 'instalacoes',
    subcategoria: 'Ar-condicionado',
    pergunta: 'Quais áreas comuns já vêm climatizadas no MB Park?',
    resposta:
      'Salão de festas, brinquedoteca, academia, coworking, lavanderia, market place, delivery e guarita são entregues climatizados. Nos apartamentos, é entregue apenas a infraestrutura (carga elétrica, dreno e caixa de passagem) para quartos e sala — o equipamento é por conta do proprietário.',
    fonteMemorial: 'MB Park — Memorial Descritivo, item 8.4',
  },
  {
    id: 'mbpark-lavanderia',
    empreendimentoId: 'mb-park',
    categoria: 'instalacoes',
    subcategoria: 'Áreas comuns',
    pergunta: 'Quantas máquinas cabem na lavanderia coletiva do MB Park?',
    resposta:
      'É entregue a infraestrutura para duas máquinas de lavar e três máquinas de secar, sendo a aquisição dos equipamentos por conta do condomínio.',
    fonteMemorial: 'MB Park — Memorial Descritivo, item 9.1.5',
  },
  {
    id: 'mbpark-medicao',
    empreendimentoId: 'mb-park',
    categoria: 'instalacoes',
    subcategoria: 'Medição individualizada',
    pergunta: 'Água e gás são medidos individualmente no MB Park?',
    resposta:
      'Sim, o empreendimento é entregue com previsão para medidores individuais de água e gás, sob responsabilidade dos condôminos.',
    fonteMemorial: 'MB Park — Memorial Descritivo, item 8.5.6',
  },

  // ---------------------------------------------------------------------
  // CERQUEIRA 2164
  // ---------------------------------------------------------------------
  {
    id: 'cerqueira-piso-unidade',
    empreendimentoId: 'cerqueira-2164',
    categoria: 'acabamentos',
    subcategoria: 'Pisos',
    pergunta: 'Qual o piso das unidades no Cerqueira 2164?',
    resposta:
      'Revestimento cerâmico e/ou porcelanato das marcas Portobello, Eliane, Biancogress, Portinari, Incepa, Cecrisa, Villagres (ou equivalente) em estar/jantar, dormitório, suíte (quando houver), varanda, banheiros e cozinha/área de serviço.',
    fonteMemorial: 'Cerqueira 2164 — Memorial Descritivo, item 9.2.1',
  },
  {
    id: 'cerqueira-suite',
    empreendimentoId: 'cerqueira-2164',
    categoria: 'acabamentos',
    subcategoria: 'Plantas',
    pergunta: 'Todos os apartamentos do Cerqueira 2164 têm suíte?',
    resposta:
      'O memorial descreve a suíte como "quando houver", ou seja, a existência de suíte depende da opção de planta escolhida para a unidade — confirme no projeto específico do seu apartamento.',
    fonteMemorial: 'Cerqueira 2164 — Memorial Descritivo, item 9.2.1',
  },
  {
    id: 'cerqueira-ar-condicionado',
    empreendimentoId: 'cerqueira-2164',
    categoria: 'instalacoes',
    subcategoria: 'Ar-condicionado',
    pergunta: 'Como funciona a climatização das áreas comuns no Cerqueira 2164?',
    resposta:
      'Diferente de outros empreendimentos, aqui as áreas comuns (espaço de convivência/salão de festas, academia, lavanderia, minimercado e guarita) recebem apenas a infraestrutura (carga elétrica, cabeamento, dreno e caixa de passagem): a rede frigorígena e os equipamentos (condensadoras/evaporadoras) ficam a cargo do condomínio, não são entregues prontos.',
    fonteMemorial: 'Cerqueira 2164 — Memorial Descritivo, item 8.4',
  },
  {
    id: 'cerqueira-minimercado',
    empreendimentoId: 'cerqueira-2164',
    categoria: 'instalacoes',
    subcategoria: 'Áreas comuns',
    pergunta: 'O minimercado do condomínio já vem equipado?',
    resposta:
      'É entregue toda a marcenaria e a infraestrutura para dois refrigeradores, mas os refrigeradores em si devem ser adquiridos pelo condomínio.',
    fonteMemorial: 'Cerqueira 2164 — Memorial Descritivo, item 9.1.4',
  },
  {
    id: 'cerqueira-lavanderia',
    empreendimentoId: 'cerqueira-2164',
    categoria: 'instalacoes',
    subcategoria: 'Áreas comuns',
    pergunta: 'Quantas máquinas cabem na lavanderia coletiva do Cerqueira 2164?',
    resposta:
      'A infraestrutura entregue comporta 1 máquina de lavar e 1 máquina de secar, a serem adquiridas pelo condomínio — capacidade menor que a do MB Park e do Riverside mb, compatível com o porte do prédio (56 apartamentos).',
    fonteMemorial: 'Cerqueira 2164 — Memorial Descritivo, item 9.1.4',
  },
  {
    id: 'cerqueira-tv-telefone',
    empreendimentoId: 'cerqueira-2164',
    categoria: 'instalacoes',
    subcategoria: 'Elétrica',
    pergunta: 'Onde ficam os pontos para TV a cabo no Cerqueira 2164?',
    resposta:
      'A tubulação seca para antena coletiva/TV a cabo é prevista na sala de estar e nos dormitórios; a de telefonia, na sala de estar.',
    fonteMemorial: 'Cerqueira 2164 — Memorial Descritivo, item 8.2',
  },

  // ---------------------------------------------------------------------
  // HYPE RESIDENCE
  // ---------------------------------------------------------------------
  {
    id: 'hype-piso-unidade',
    empreendimentoId: 'hype-residence',
    categoria: 'acabamentos',
    subcategoria: 'Pisos',
    pergunta: 'Qual o piso da unidade no Hype Residence, incluindo os banheiros?',
    resposta:
      'Porcelanato das marcas Portobello, Eliane, Portinari (ou similar) em todos os ambientes privativos — hall, sala, dormitórios, varanda gourmet, cozinha, lavanderia e também nos banheiros e WC de serviço.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, itens 9.4.1, 9.4.2 e 9.4.4',
  },
  {
    id: 'hype-bancadas',
    empreendimentoId: 'hype-residence',
    categoria: 'acabamentos',
    subcategoria: 'Bancadas',
    pergunta: 'Quais bancadas vêm instaladas no apartamento do Hype Residence?',
    resposta:
      'Lavabo: mármore ou granito com cuba de louça. Varanda gourmet: cuba embutida de inox. Cozinha: granito com cuba embutida de inox. Banheiros: mármore ou granito com cuba de louça, exceto o WC de serviço, que tem apenas cuba de louça suspensa.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, itens 9.4.1, 9.4.2 e 9.4.4',
  },
  {
    id: 'hype-ar-condicionado',
    empreendimentoId: 'hype-residence',
    categoria: 'instalacoes',
    subcategoria: 'Ar-condicionado',
    pergunta: 'Que tipo de ar-condicionado o Hype Residence está preparado para receber?',
    resposta:
      'A unidade tem preparação para sistema mini VRF ou multi split, com evaporadoras tipo split, hi-wall ou cassete, nos dormitórios, na sala (jantar/living) e na varanda gourmet. As condensadoras ficam na laje técnica. A aquisição e instalação do equipamento, rede frigorífica e cabeamento ficam a cargo do proprietário.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, item 8.4',
  },
  {
    id: 'hype-agua-quente',
    empreendimentoId: 'hype-residence',
    categoria: 'instalacoes',
    subcategoria: 'Água quente e gás',
    pergunta: 'O aquecedor de água do Hype Residence atende quais pontos?',
    resposta:
      'O aquecedor a gás de passagem atende duchas, lavatórios dos banheiros e a pia da cozinha. O equipamento deve ser adquirido e instalado separadamente pelo proprietário.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, item 8.5.2',
  },
  {
    id: 'hype-duplex-piscina',
    empreendimentoId: 'hype-residence',
    categoria: 'acabamentos',
    subcategoria: 'Plantas',
    pergunta: 'As unidades duplex do Hype Residence têm piscina privativa?',
    resposta:
      'Sim, as unidades duplex contam com deck, terraço e piscina privativa, com piso em porcelanato e paredes revestidas em cerâmica na área da piscina.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, itens 9.4.5 e 9.4.6',
  },
  {
    id: 'hype-medicao',
    empreendimentoId: 'hype-residence',
    categoria: 'instalacoes',
    subcategoria: 'Medição individualizada',
    pergunta: 'Como funciona a medição individual de água e gás no Hype Residence?',
    resposta:
      'As unidades são entregues com os equipamentos para medição individual de água e gás, mas para ativar o rateio individualizado o condomínio precisa contratar e custear uma empresa especializada para leitura das contas.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, item 8.5.6',
  },
  {
    id: 'hype-tv-telefone',
    empreendimentoId: 'hype-residence',
    categoria: 'instalacoes',
    subcategoria: 'Elétrica',
    pergunta: 'Onde ficam os pontos para TV a cabo no Hype Residence?',
    resposta:
      'Nas unidades tipo, a tubulação seca fica no jantar/living e nos dormitórios. Nas unidades duplex, também há ponto na varanda gourmet.',
    fonteMemorial: 'Hype Residence — Memorial Descritivo, item 8.2',
  },

  // ---------------------------------------------------------------------
  // MARQUISES PARK RESIDENCE
  // ---------------------------------------------------------------------
  {
    id: 'marquises-piso-unidade',
    empreendimentoId: 'marquises-park',
    categoria: 'acabamentos',
    subcategoria: 'Pisos',
    pergunta: 'Qual o piso da unidade no Marquises Park Residence?',
    resposta:
      'Porcelanato (marcas Portobello, Eliane, Portinari, Roca, Incepa, Cecrisa, Villagres, Gerbi, Pamesa, Atlas, Colormix ou equivalente) em sala, dormitórios, circulação e varanda gourmet. Na cozinha, lavanderia, depósito e despensa, o piso é cerâmica ou porcelanato.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, itens 9.4.1 e 9.4.2',
  },
  {
    id: 'marquises-bancadas',
    empreendimentoId: 'marquises-park',
    categoria: 'acabamentos',
    subcategoria: 'Bancadas',
    pergunta: 'Quais bancadas vêm instaladas no apartamento do Marquises Park Residence?',
    resposta:
      'Cozinha: granito com cuba embutida de aço inox. Lavanderia: tanque embutido de aço inox. Lavabo: mármore ou granito com cuba de louça. Varanda gourmet: cuba de inox. Banheiros: mármore ou granito com cuba de louça, exceto o banheiro de serviço, com lavatório suspenso.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, itens 9.4.1, 9.4.2 e 9.4.4',
  },
  {
    id: 'marquises-vagas',
    empreendimentoId: 'marquises-park',
    categoria: 'acabamentos',
    subcategoria: 'Plantas',
    pergunta: 'Quantas vagas de garagem vêm com o apartamento no Marquises?',
    resposta:
      'As unidades tipo têm 4 vagas de garagem cada; as unidades Penthouse (21º pavimento) têm 6 vagas cada.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, item 2',
  },
  {
    id: 'marquises-ar-condicionado',
    empreendimentoId: 'marquises-park',
    categoria: 'instalacoes',
    subcategoria: 'Ar-condicionado',
    pergunta: 'Em quais ambientes o apartamento já tem previsão para ar-condicionado?',
    resposta:
      'Há preparação para sistema VRF (tipo split e/ou cassete) nos dormitórios, salas, varandas e copa/sala de almoço, com condensadoras na laje técnica. A aquisição e instalação do equipamento ficam a cargo do proprietário.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, item 8.4',
  },
  {
    id: 'marquises-agua-quente',
    empreendimentoId: 'marquises-park',
    categoria: 'instalacoes',
    subcategoria: 'Água quente e gás',
    pergunta: 'O aquecedor de água quente já vem instalado no Marquises?',
    resposta:
      'Não. Há infraestrutura para aquecedor a gás de passagem (duchas, lavatórios e pia da cozinha), mas o aquecedor e o recirculador de água quente devem ser adquiridos e instalados separadamente pelo proprietário.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, item 8.5.2',
  },
  {
    id: 'marquises-penthouse',
    empreendimentoId: 'marquises-park',
    categoria: 'acabamentos',
    subcategoria: 'Plantas',
    pergunta: 'O que diferencia a unidade Penthouse das unidades tipo no Marquises?',
    resposta:
      'A Penthouse tem 5 suítes (a máster com banho de senhor e banho de senhora), adega, sala de estar/jantar, home tv, sala de almoço, dormitório e banheiro de serviço, varanda gourmet com vestiário, varanda descoberta, deck e piscina privativa — além de ocupar duas torres conjugadas.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, item 2.5',
  },
  {
    id: 'marquises-tv-telefone',
    empreendimentoId: 'marquises-park',
    categoria: 'instalacoes',
    subcategoria: 'Elétrica',
    pergunta: 'Onde ficam os pontos para TV a cabo e telefone no Marquises?',
    resposta:
      'A tubulação seca é prevista na sala de estar/home, dormitórios, copa/sala de almoço e varanda gourmet; nas unidades Penthouse, também na sala do motorista.',
    fonteMemorial: 'Marquises Park Residence — Memorial Descritivo, item 8.2',
  },
]

export function getEmpreendimentoNome(id: string): string {
  return empreendimentos.find((e) => e.id === id)?.nome ?? id
}
