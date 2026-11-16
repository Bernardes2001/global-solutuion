# Serviço Fácil

> Global Solution 2026/2 · **CitizenTech** · FIAP — Engenharia de Software (1ESOR)

O Serviço Fácil reúne, em linguagem simples, **o que levar, o passo a passo, o custo, o prazo e o canal oficial** de 41 serviços públicos: CPF, título de eleitor, Cadastro Único, Enem, CNH e outros. Os serviços são nacionais e há variações estaduais.

**Para quem:** pessoas com pouca familiaridade com a internet. Segundo o IBGE (PNAD Contínua TIC 2023), "não saber usar" é o motivo mais citado por quem não usa a internet (46,3%), e mais da metade dessas pessoas (51,6%) são idosas.

**ODS:** 4 (Educação de qualidade), 10 (Redução das desigualdades) e 11 (Cidades e comunidades sustentáveis).

## Links

- **Vídeo pitch:** _a preencher_
- **Site publicado (GitHub Pages):** _a preencher_

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
| Sobre nós | `sobre.html` | Missão, como a pesquisa foi feita e a equipe |
| Fale conosco | `contato.html` | Formulário com validação em JavaScript |

## Funcionalidades

- **Simulação interativa:** os dados vêm de um array de objetos com 41 registros (`js/dados.js`) e são exibidos pelo DOM. A busca ignora acentos e entende nomes populares ("tirar CPF").
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
├── index.html  servicos.html  impacto.html  sobre.html  contato.html
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
└── data/              # pesquisa original em JSON (origem do js/dados.js)
```

## Integrantes

<!-- TODO: completar nomes e RMs -->

| Nome | RM |
|---|---|
| Luis Felipe — _sobrenome a preencher_ | _a preencher_ |
| Gabriel — _sobrenome a preencher_ | _a preencher_ |
| Matheus — _sobrenome a preencher_ | _a preencher_ |
| _a preencher_ | _a preencher_ |
| _a preencher_ | _a preencher_ |

## Fontes

- IBGE — PNAD Contínua, módulo TIC 2023, divulgada em 16/08/2024: <https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/41026-em-2023-87-2-das-pessoas-com-10-anos-ou-mais-utilizaram-internet>
- Portais gov.br, Detrans e portais estaduais: cada serviço lista as próprias fontes e a data da consulta. Elas aparecem nos detalhes do serviço no site.

## Uso de IA generativa

| Ferramenta | Para quê |
|---|---|
| Claude (Anthropic) | Revisão dos requisitos da GS, proposta de layout no Claude Design, apoio na reestruturação do código e revisão de texto |

Todo o código foi revisado e entendido pelo grupo antes da entrega.
<!-- TODO: o grupo deve ajustar esta seção com as ferramentas que realmente usou. -->
