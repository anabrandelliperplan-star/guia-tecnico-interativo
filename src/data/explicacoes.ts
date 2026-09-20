// Explicações em linguagem simples para cada cláusula do memorial técnico.
// Ficam separadas do texto oficial (memorial.ts) de propósito: o memorial é
// o documento contratual; estas explicações são apenas material de apoio
// para o cliente entender o que a cláusula significa na prática. Em caso de
// divergência, vale sempre o memorial descritivo rubricado.

const explicacoesPorSecao: Record<string, string> = {
  'subsolos-estacionamento':
    'Descreve o que existe em cada andar de subsolo (garagens, elevadores, reservatórios, áreas técnicas) e quantas vagas há. "Vaga indeterminada" costuma significar que ela não tem número fixo e é atribuída por sorteio ou critério do condomínio; "vaga acessória" é a vaga vinculada à unidade. Confirme no seu contrato como fica a sua.',
  terreo:
    'Mostra tudo que fica no andar de entrada: portaria, áreas de lazer, áreas de serviço do condomínio e, em alguns prédios, apartamentos. É aqui que você confere quais espaços de lazer o empreendimento oferece.',
  pavimentos:
    'Explica quantos apartamentos existem por andar e como os andares estão organizados (andares tipo, coberturas, duplex). Serve para entender o tamanho do prédio e o tipo de unidade de cada andar.',
  'atico-reservatorios':
    'É o andar técnico no topo do prédio, onde ficam caixas d’água, casa de máquinas dos elevadores e acessos de manutenção. Não é área de uso dos moradores.',
}

const explicacoesPorTitulo: Record<string, string> = {
  'Serviços técnicos e projetos':
    'Garante que os projetos (estrutura, arquitetura, instalações) foram feitos por profissionais habilitados e seguem a NBR 15575, a norma de desempenho de edifícios residenciais, que define padrões mínimos de segurança, durabilidade e conforto. Os projetos também precisam ser aprovados pela prefeitura e pelas concessionárias (água, luz, gás).',
  'Ensaios tecnológicos':
    'Significa que um laboratório independente testa os materiais durante a obra (por exemplo, a resistência do concreto) para verificar se atendem ao que o projeto exige.',
  'Trabalhos em terra':
    'É o preparo do terreno antes da construção: escavar, cortar ou aterrar para deixar o solo nos níveis definidos em projeto.',
  'Fundações / Supraestruturas':
    'Fundação é a base que sustenta o prédio, definida a partir de sondagem do solo. Supraestrutura é a estrutura acima do solo. Em alvenaria estrutural, as próprias paredes de bloco sustentam o prédio e não podem ser retiradas; em concreto armado, a estrutura é feita de pilares e vigas. Em qualquer caso, alterar paredes exige projeto e responsável técnico habilitado.',
  Vedação:
    'São as paredes que dividem os ambientes e fecham o prédio. O memorial lista vários materiais com "e/ou", o que quer dizer que a construtora pode escolher entre eles, mantendo o mesmo desempenho técnico.',
  'Esquadrias de ferro':
    'Peças de ferro do prédio, como portões, grades e corrimãos. Recebem tratamento e pintura para resistir à ferrugem.',
  'Esquadrias de alumínio e/ou PVC':
    'Portas e janelas de alumínio ou PVC. O memorial diz onde cada uma é usada, por exemplo nas janelas dos dormitórios e nas portas que dão para a varanda. "E/ou" indica que a construtora escolhe um dos materiais.',
  'Portas incombustíveis':
    'São as portas corta-fogo das escadas de emergência. Precisam ser de marcas aceitas pelo Corpo de Bombeiros e não devem ser trocadas nem mantidas abertas, pois retardam a passagem de fogo e fumaça.',
  'Esquadrias de madeira':
    'Portas internas e de entrada do apartamento e seus batentes. Podem ser de madeira ou de material composto, e ser enceradas, envernizadas ou pintadas, conforme o projeto de arquitetura.',
  Ferragens:
    'Dobradiças, maçanetas e fechaduras das portas de madeira. O memorial lista marcas de referência; a construtora pode usar marca equivalente ou superior.',
  Vidros:
    'Indica o tipo de vidro de cada ambiente. Nos banheiros o vidro é pontilhado, fantasia ou leitoso, para dar privacidade; nos demais ambientes é liso e incolor.',
  Telhado:
    'Descreve a cobertura do prédio. A laje é impermeabilizada, e a telha (metálica, fibrocimento ou ondulada) protege a estrutura. A água da chuva é captada por ralos e levada por tubulações.',
  Impermeabilizações:
    'Tratamento que impede infiltração de água em lajes e reservatórios. O memorial indica que as áreas necessárias serão impermeabilizadas conforme projeto específico.',
  'Instalações elétricas':
    'Explica como a energia chega ao apartamento: eletrodutos (tubos que guardam os fios), tomadas e interruptores das marcas citadas ou equivalentes, e um quadro de distribuição com disjuntores em cada unidade. As luminárias só são entregues nas varandas e áreas comuns, então as demais ficam por sua conta.',
  'Antena e telefonia':
    '"Tubulação seca" é o tubo vazio já instalado na parede. A construtora entrega o caminho para os cabos, mas o serviço de TV, internet ou telefone e a passagem dos cabos são contratados por você junto à operadora. O memorial indica em quais cômodos há esses pontos.',
  'SPDA (sistema de para-raios)':
    'Sigla de Sistema de Proteção contra Descargas Atmosféricas, o para-raios do prédio. Protege pessoas e instalações contra raios e segue as normas técnicas brasileiras.',
  'Ar-condicionado':
    'A construtora entrega só a preparação: carga elétrica, tubulação vazia, dreno e caixa de passagem. A compra e a instalação dos aparelhos, e em geral a rede de gás refrigerante, são do proprietário. As condensadoras (parte externa) ficam na laje técnica. Os ambientes comuns que o memorial cita como climatizados são entregues com o equipamento; nos que só têm infraestrutura, o equipamento é providenciado pelo condomínio.',
  Elevadores:
    'Informa as marcas de elevador aceitas. "Ou equivalente" significa que a construtora pode usar outra marca de desempenho técnico igual ou superior.',
  'Aparelhos sanitários':
    'São as louças, como vasos sanitários e lavatórios. O memorial lista marcas de referência, aceitando equivalentes ou superiores.',
  'Metais sanitários':
    'São torneiras, misturadores e acabamentos de registro, com acabamento cromado. A ducha (chuveiro) não é entregue nas unidades, e você compra e instala a sua.',
  'Água fria':
    'Descreve os tubos que levam água fria ao prédio e ao apartamento. O memorial lista os materiais permitidos (PPR, PVC, CPVC ou PEX) e marcas de referência.',
  'Água quente':
    'A tubulação de água quente é entregue, mas o aquecedor a gás de passagem e o chuveiro devem ser comprados e instalados por você. Se o memorial citar recirculador, ele também fica por sua conta.',
  Gás:
    'A infraestrutura de gás é entregue conforme normas e Corpo de Bombeiros. O aquecedor a gás não é entregue: você o adquire. O memorial também diz se há previsão para fogão ou para churrasqueira a gás, o que varia de um empreendimento para outro.',
  'Esgoto e águas pluviais':
    'Sistema de tubos que leva esgoto e água da chuva para fora do prédio, executado conforme as normas técnicas.',
  'Medição individualizada':
    'Permite medir o consumo de água e gás de cada apartamento. A construtora entrega a previsão ou os equipamentos; a contratação do serviço de leitura e rateio, e a instalação de medidores quando só há previsão, cabem ao condomínio ou aos condôminos, conforme o memorial.',
  'Instalação de combate a incêndio':
    'Conjunto de hidrantes, extintores, sinalização e tubulações exigido pelo Corpo de Bombeiros. É executado conforme o projeto aprovado por eles.',
  'Entrega equipada':
    'Informa quais áreas de lazer são entregues mobiliadas e decoradas e quais recebem apenas a infraestrutura. Nesses casos, os equipamentos, como máquinas da lavanderia ou refrigeradores, são comprados pelo condomínio.',
}

// Áreas de uso comum: os títulos mudam de um empreendimento para outro,
// então as explicações são associadas por palavras-chave, na ordem abaixo.
const regrasAreasComuns: { padrao: RegExp; texto: string }[] = [
  {
    padrao: /^Entrega equipada/i,
    texto: explicacoesPorTitulo['Entrega equipada'],
  },
  {
    padrao: /estacionamento/i,
    texto:
      'Acabamento das áreas de garagem, rampas e áreas técnicas. São ambientes de uso funcional, por isso o piso é cimentado e as paredes e tetos têm pintura simples ou ficam aparentes.',
  },
  {
    padrao: /piscina|spa/i,
    texto:
      'Materiais de revestimento das piscinas e dos decks ao redor. Os decks usam pisos antiderrapantes para evitar escorregões.',
  },
  {
    padrao: /playground/i,
    texto:
      'Piso das áreas de recreação infantil, em material emborrachado ou similar, que amortece quedas.',
  },
  {
    padrao: /academia|fitness|brinquedoteca/i,
    texto:
      'Acabamento dos ambientes de exercício e recreação. O piso pode ser de vários tipos (vinílico, emborrachado, porcelanato etc.), a escolha é da construtora dentre as opções do memorial.',
  },
  {
    padrao: /family club/i,
    texto:
      'Acabamento das áreas de churrasqueira e convivência externa, com pisos apropriados para áreas abertas e bancadas de granito ou similar.',
  },
  {
    padrao: /bicicletário/i,
    texto: 'Acabamento do espaço de guarda de bicicletas, com piso e pintura resistentes ao uso.',
  },
  {
    padrao: /hall|lobby|salão|gourmet|coworking|lavanderia|mini ?mercado|market/i,
    texto:
      'Acabamento das áreas sociais e de convivência do condomínio, com porcelanato no piso e pintura ou revestimento nas paredes. As bancadas costumam ser de granito com cuba de inox ou louça.',
  },
  {
    padrao: /guarita|portaria|copa|vestiário|DML/i,
    texto:
      'Acabamento das áreas de apoio e dos funcionários do condomínio, como portaria, copa e vestiários. Nas paredes molhadas, como as dos banheiros e do lixo, há cerâmica.',
  },
]

export function getExplicacao(secaoId: string, titulo: string): string | undefined {
  if (secaoId === 'acabamentos-areas-comuns') {
    return regrasAreasComuns.find((r) => r.padrao.test(titulo))?.texto
  }
  return explicacoesPorTitulo[titulo] ?? explicacoesPorSecao[secaoId]
}
