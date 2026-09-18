# PRD — Guia Técnico Interativo (Perplan Incorporação)

## 1. Problema

Clientes da Perplan Incorporação têm dúvidas recorrentes sobre acabamentos e
instalações das unidades, cujas respostas já existem no memorial descritivo
de cada empreendimento — mas o documento é longo, técnico e pouco consultado.
Isso gera retrabalho para o time comercial/pós-venda, que responde manualmente
as mesmas perguntas.

## 2. Objetivo

Criar um guia web interativo com duas formas de consulta, onde o cliente
escolhe o empreendimento e:
1. Encontra rapidamente a resposta para as dúvidas mais comuns sobre
   acabamentos e instalações (aba "Dúvidas frequentes"); ou
2. Navega pelo memorial descritivo completo daquele empreendimento,
   organizado por seção técnica (aba "Memorial técnico completo"), para
   quando a dúvida não está nas perguntas mais comuns.

Em ambos os casos, o conteúdo é extraído/baseado no memorial descritivo
oficial do empreendimento.

## 3. Público-alvo

- Clientes que compraram ou estão avaliando a compra de uma unidade Perplan.
- Time comercial/pós-venda, como material de apoio ao atendimento.

## 4. Escopo (v1)

**Aba "Dúvidas frequentes":**
- Listagem de perguntas frequentes organizadas por:
  - Empreendimento (cada empreendimento tem seu próprio memorial).
  - Categoria: **Acabamentos** e **Instalações**.
  - Subcategoria (ex.: Pisos, Pintura, Bancadas, Elétrica, Hidráulica,
    Climatização).
- Filtro por empreendimento e por categoria.
- Cada resposta cita a seção do memorial descritivo de onde foi extraída
  (rastreabilidade da informação).

**Aba "Memorial técnico completo":**
- Para o empreendimento selecionado, mostra **todas** as seções do memorial
  descritivo original, não apenas as perguntas mais prováveis:
  Subsolos e Estacionamento, Térreo, Pavimentos, Ático/Reservatórios,
  Serviços Preliminares e Gerais, Infraestrutura, Paredes e Painéis de
  Vedação, Esquadrias (portas, ferragens e vidros), Cobertura e Proteções,
  Instalações e Aparelhos, Instalações Hidráulicas e de Esgoto, Instalação
  de Combate a Incêndio, e Áreas de Uso Comum – Subsolos/Térreo (acabamentos).
- Exige a seleção de um empreendimento específico (não há visão "geral"
  aqui, pois cada memorial é um documento próprio).

**Em ambas as abas:**
- Busca por palavra-chave (pergunta/resposta na aba FAQ; título/texto de
  cada item na aba memorial).
- Seletor de empreendimento compartilhado entre as duas abas.
- Responsivo (uso majoritário esperado via celular).

### Fora de escopo (v1)

- Login/autenticação de cliente.
- Upload de memoriais pela interface (conteúdo é curado manualmente).
- Chat com IA respondendo livremente (v1 é FAQ estruturado, não abre para
  perguntas fora da base).
- Painel administrativo para edição do conteúdo (conteúdo é editado
  diretamente no código/dados por enquanto).

## 5. Fonte de conteúdo

O conteúdo de cada pergunta/resposta e de cada seção do memorial completo é
extraído dos memoriais descritivos (PDF) de cada empreendimento, fornecidos
pela Perplan e guardados na pasta `memoriais/` (fora do controle de
versão). Os 5 empreendimentos já carregados são: Riverside mb, MB Park,
Cerqueira 2164, Hype Residence e Marquises Park Residence — em
[src/data/faq.ts](src/data/faq.ts) (perguntas frequentes) e
[src/data/memorial.ts](src/data/memorial.ts) (memorial completo).

Fluxo para adicionar um novo empreendimento:
1. Colocar o PDF do memorial descritivo em `memoriais/`.
2. **Para a aba de dúvidas frequentes**: extrair as seções relevantes
   (Revestimentos/Acabamentos, Pintura, Bancadas, Instalações Elétricas,
   Instalações Hidrossanitárias, Climatização, Medição individualizada
   etc.) e transformar cada especificação relevante em uma pergunta que o
   cliente provavelmente faria + resposta baseada no texto oficial, dando
   preferência ao que **difere** do padrão dos outros empreendimentos (ex.:
   churrasqueira a gás vs. elétrica, tipo de sistema de ar-condicionado).
   Adicionar o empreendimento em `empreendimentos` e as perguntas em
   `faqItems`, citando a seção do memorial em `fonteMemorial`. Cláusulas que
   se repetem com o mesmo texto em todos os memoriais (ex.: duchas não
   inclusas, variação natural de mármore/granito, política de reformas) vão
   em `empreendimentoId: 'geral'`, para não duplicar conteúdo por
   empreendimento.
3. **Para a aba de memorial completo**: transcrever/resumir todas as seções
   do documento (da localização/subsolos até as observações finais) em
   `memorialPorEmpreendimento`, em `memorial.ts`. Diferente da aba de FAQ,
   aqui a cobertura deve ser total — todo empreendimento precisa ter as
   mesmas 13 seções preenchidas, mesmo quando o conteúdo repete o texto de
   outro empreendimento.

## 6. Critérios de sucesso

- Cliente encontra a resposta para uma dúvida comum de acabamento/instalação
  em menos de 30 segundos, sem precisar abrir o PDF do memorial.
- Redução de perguntas repetitivas encaminhadas ao time comercial.

## 7. Stack técnica

- React + TypeScript + Vite.
- Tailwind CSS para estilo.
- Sem backend na v1 — dados estáticos em
  [src/data/faq.ts](src/data/faq.ts) e [src/data/memorial.ts](src/data/memorial.ts).

## 8. Próximos passos / evoluções futuras (fora da v1)

- Processar memoriais reais dos empreendimentos ativos da Perplan.
- Avaliar necessidade de painel administrativo simples para o time de
  pós-venda editar perguntas sem mexer em código.
- Avaliar analytics de busca (quais termos os clientes mais buscam e não
  encontram resposta) para priorizar novas perguntas.
