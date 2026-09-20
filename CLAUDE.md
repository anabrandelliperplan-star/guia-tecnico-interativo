# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server.
- `npm run build` — type-check (`tsc -b`) and build for production.
- `npm run lint` — run `oxlint` over the codebase.
- `npm run preview` — preview the production build locally.

There is no test suite configured yet.

## Project purpose

This is the Perplan Incorporação "Guia Técnico Interativo": a client-facing
web app with (1) a FAQ answering the most common questions about
**acabamentos** (finishes) and **instalações** (installations), and (2) a
full section-by-section browser of each empreendimento's **memorial
descritivo**. Full product context, scope, and content workflow are in
[PRD.md](PRD.md) — read it before making product decisions.

## Architecture

Single-page React app, no backend, no routing library, two tabs sharing one
`empreendimentoId` selector and one search box. All content is static data,
not fetched from an API.

- [src/data/faq.ts](src/data/faq.ts) — "Dúvidas frequentes" tab content:
  `empreendimentos` (list of developments, includes the synthetic `'geral'`
  id) and `faqItems` (each question tagged with `empreendimentoId`,
  `categoria` `'acabamentos' | 'instalacoes'`, `subcategoria`, and an
  optional `fonteMemorial` citing the memorial descritivo section it came
  from).
- [src/data/memorial.ts](src/data/memorial.ts) — "Memorial técnico completo"
  tab content: the full memorial transcribed per development, structured as
  `memorialPorEmpreendimento` (one `MemorialEmpreendimento` per development,
  each with 13 `MemorialSecao` in the fixed order given by `secoesOrdem`:
  subsolos/estacionamento, térreo, pavimentos, ático/reservatórios, serviços
  preliminares, infraestrutura, paredes/vedação, esquadrias, cobertura,
  instalações e aparelhos, hidráulica/esgoto, combate a incêndio, and
  acabamentos das áreas comuns). Every development must have all 13 section
  ids — there's no automated check for this, so verify manually when editing
  (a one-off Node script comparing `.map(s => s.id)` against `secoesOrdem`
  is the fastest way). Unlike `faq.ts`, this file has no `'geral'` entry:
  `getMemorialDoEmpreendimento` returns `undefined` for `'geral'`, and
  `App.tsx` shows a prompt to pick a specific development instead.
- [src/App.tsx](src/App.tsx) — owns all filter state (active tab, search
  text, selected empreendimento, selected categoria) and derives the
  filtered FAQ list and filtered memorial sections with `useMemo`. Filtering
  logic lives here, not in the data layer.
- [src/components/FaqAccordionItem.tsx](src/components/FaqAccordionItem.tsx)
  and
  [src/components/MemorialSecaoAccordion.tsx](src/components/MemorialSecaoAccordion.tsx) —
  self-contained accordion rows, each with its own open/closed state.
- [src/lib/assistente.ts](src/lib/assistente.ts), [src/data/fatos.ts](src/data/fatos.ts) and [src/components/Assistente.tsx](src/components/Assistente.tsx) — the "Assistente" tab: a rule-based (no AI, no cost) Q&A. `fatos.ts` holds hand-structured facts per development (vagas, unidades, ar-condicionado, pisos, bancadas, churrasqueira), each citing the memorial item; totals such as vagas were summed by hand from the cited items. `responder()` matches keyword rules to those topics and otherwise falls back to a token-scored search over `memorial.ts` + `faq.ts`. New topic = add a `Topico`, a rule in `regrasTopicos`, a title in `titulosTopicos`, and data for all 5 developments in `fatos.ts`.
- The `'geral'` empreendimento id is special-cased in the FAQ filter logic in
  `App.tsx`: it means "show items regardless of which empreendimento they
  belong to" rather than an actual development. It has no equivalent on the
  memorial side (see above).

## Styling

Tailwind CSS v4 via the `@tailwindcss/vite` plugin (configured in
[vite.config.ts](vite.config.ts) — no separate `tailwind.config.js`).
Color tokens are CSS custom properties defined in
[src/index.css](src/index.css) (`--color-bg`, `--color-surface`,
`--color-border`, `--color-text`, `--color-text-muted`, `--color-accent`,
`--color-accent-bg`, `--color-accent-contrast`), with a `prefers-color-scheme:
dark` override. Components reference these via arbitrary-value Tailwind
classes like `bg-[var(--color-surface)]` rather than Tailwind's default
palette — keep using the CSS variables for any new UI so light/dark theming
stays consistent.

## Content workflow

Both `faq.ts` and `memorial.ts` are populated from real memorial descritivo
PDFs kept in `memoriais/` (gitignored, not committed). Five developments are
loaded: Riverside mb, MB Park, Cerqueira 2164, Hype Residence, and Marquises
Park Residence. When a new memorial PDF is added:

1. In `faq.ts`, follow the extraction workflow in PRD.md §5 — favor
   questions about what *differs* from the other developments (e.g. gas vs.
   electric grill on the balcony, VRF vs. simple split A/C prep) over
   restating identical boilerplate. Clauses worded identically across every
   memorial (duchas not included, natural stone color variation, the
   renovation-approval policy) belong under `empreendimentoId: 'geral'`
   rather than being duplicated per development.
2. In `memorial.ts`, add a new `MemorialEmpreendimento` covering all 13
   sections from `secoesOrdem`, even when a section's content is identical
   to another development's (reuse the shared constants like
   `paredesVedacaoPadrao` / `paredesVedacaoTorreConcreto` for boilerplate
   that's word-for-word the same, but every development's `secoes` array
   must still list all 13 ids — the memorial tab has no fallback content).
