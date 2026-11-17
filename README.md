# Serviço Fácil

> Global Solution 2026/2 · **CitizenTech** · FIAP — Engenharia de Software (1ESOR)

O Serviço Fácil reúne, em linguagem simples, **o que levar, o passo a passo, o custo, o prazo e o canal oficial** de 26 serviços públicos: CPF, título de eleitor, Cadastro Único, Enem, CNH e outros. São 23 serviços nacionais e 3 com regras próprias em 8 estados (CIN e CNH), somando 47 fichas.

**Para quem:** pessoas com pouca familiaridade com a internet. Segundo o IBGE (PNAD Contínua TIC 2023), "não saber usar" é o motivo mais citado por quem não usa a internet (46,3%), e mais da metade dessas pessoas (51,6%) são idosas.

**ODS:** 4 (Educação de qualidade), 10 (Redução das desigualdades) e 11 (Cidades e comunidades sustentáveis).

## Links

<!-- TODO (Luis): colar os links quando existirem (vídeo: AG-20, prazo interno 19/11). -->
- **Vídeo pitch:** _PREENCHER LINK_
- **Site publicado (GitHub Pages):** _PREENCHER LINK_

## Como abrir

Dê dois cliques no **`index.html`**. O site abre direto no navegador, sem instalar nada: o CSS já vem compilado em `css/style.css`.

### Só para quem for editar o visual

O CSS é escrito com Tailwind CSS, usado com autorização do professor. Depois de mudar classes no HTML ou no JS, recompile:

```bash
npm install
npm run css        # gera css/style.css
npm run css:watch  # recompila automaticamente enquanto você edita
```

## Páginas

| Página | Arquivo | O que tem |
|---|---|---|
| Início | `index.html` | O cidadão, o problema com dado real e fonte, a proposta e os ODS |
| Serviços (solução) | `servicos.html` | Busca, filtros por categoria e estado, detalhes e checklist de documentos |
| Impacto | `impacto.html` | Números do catálogo, quem ganha, indicadores, ODS e ecossistema de fontes |
| Sobre nós | `sobre-nos.html` | Missão, como a pesquisa foi feita e a equipe |
| Fale conosco | `contato.html` | Formulário com validação em JavaScript |

## Funcionalidades

- **Simulação interativa:** os dados vêm de um array de objetos com 47 fichas (`js/dados.js`, gerado de `data/`); CIN e CNH aparecem em um card só, com a escolha do estado, e são exibidos pelo DOM. A busca ignora acentos e entende nomes populares ("tirar CPF").
- **Checklist de documentos:** o usuário marca o que já tem e vê quantos documentos ainda faltam.
- **Formulário validado:** os erros aparecem abaixo de cada campo, com um resumo no topo, e a mensagem de sucesso aparece na própria página.
- **Acessibilidade:**
  - HTML semântico;
  - link "Pular para o conteúdo";
  - navegação completa pelo teclado;
  - `label` em todos os campos e `alt` nas imagens;
  - **alto contraste** e **ajuste do tamanho da fonte (A− / A+)**, que ficam salvos entre as páginas.
- **Responsivo:** layout com flexbox e grid, menu recolhível no celular e media queries.

## Estrutura

```text
├── index.html  servicos.html  impacto.html  sobre-nos.html  contato.html
├── css/
│   ├── input.css      # fonte do Tailwind (tokens de cor, componentes, alto contraste)
│   └── style.css      # CSS compilado usado pelas páginas
├── js/
│   ├── main.js        # menu, fonte e contraste (todas as páginas)
│   ├── utils.js       # funções compartilhadas
│   ├── dados.js       # array de serviços (base do catálogo)
│   ├── servicos.js    # busca, filtros, detalhes e checklist
│   ├── impacto.js     # números do catálogo e fontes
│   └── contato.js     # validação do formulário
├── img/               # logotipo e ilustração
├── data/              # pesquisa original em JSON (única fonte dos dados)
└── scripts/           # gera o js/dados.js e valida os dados
```

## Dados

Os dados ficam em `data/servicos.json`, `data/nordeste.json` e `data/norte.json`. O `js/dados.js` é **gerado** a partir deles — não edite à mão.

```bash
npm run dados     # gera o js/dados.js e confere se há erros
npm run validar   # relatório completo: erros + o que ainda falta pesquisar
```

O validador acusa como **erro** (e encerra com código 1): ID ou nome repetido, valor fora do padrão, fonte citada que não existe, ficha "confirmado" com custo ou documentos pendentes e `js/dados.js` desatualizado. Como **aviso**, lista o que ainda está incompleto: valor da taxa, prazo, lista de documentos etc.

Padrões usados nas fichas:

- `custo.status`: `gratuito` · `pago` (com `valor_brl`, ou `null` se o valor não foi confirmado) · `variavel` · `pendente`
- `prazo.status`: `confirmado` · `com_ressalva` · `pendente`
- `documentos_status`: `confirmado` · `nao_se_aplica` (pedido só com dados/login) · `pendente` (lista ainda não pesquisada)
- Serviços com regras por estado (CIN, 2ª via e renovação da CNH) ficam em `servicos_base`; cada ficha estadual aponta para ele em `servico_base` e herda os nomes populares.

## Integrantes

<!-- TODO (Luis): preencher os RMs (e o sobrenome do Matheus). Nomes conforme o Jira (CONTEXTO-CLAUDE.md). -->

| Nome | RM |
|---|---|
| Luis Felipe Schimith da Silva | _PREENCHER RM_ |
| Felipe Tadeu Rodrigues da Silva | _PREENCHER RM_ |
| Lucas Cauã Silva Brasil | _PREENCHER RM_ |
| Gabriel Bernardes dos Santos | _PREENCHER RM_ |
| Matheus _PREENCHER SOBRENOME_ | _PREENCHER RM_ |

## Fontes

- IBGE — PNAD Contínua, módulo TIC 2023, divulgada em 16/08/2024: <https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/41026-em-2023-87-2-das-pessoas-com-10-anos-ou-mais-utilizaram-internet>
- Portais gov.br, Detrans e portais estaduais: cada serviço lista as próprias fontes e a data da consulta. Elas aparecem nos detalhes do serviço no site.

## Uso de IA generativa

| Ferramenta | Para quê |
|---|---|
| Claude (Anthropic) | Revisão dos requisitos da GS, proposta de layout no Claude Design, apoio na reestruturação do código e revisão de texto |

Todo o código foi revisado e entendido pelo grupo antes da entrega.
<!-- TODO: o grupo deve ajustar esta seção com as ferramentas que realmente usou. -->
