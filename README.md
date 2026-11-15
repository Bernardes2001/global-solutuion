# Serviço Fácil — Front-end Tailwind CSS

Template responsivo para consulta de serviços públicos com base nos dois arquivos JSON fornecidos.

## Requisitos
- Node.js 20 ou superior
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite no terminal.

## Gerar versão de produção

```bash
npm run build
npm run preview
```

## Estrutura

```text
servico-facil-tailwind/
├── data/
│   ├── nordeste.json
│   └── servicos.json
├── src/
│   ├── input.css
│   └── js/
│       └── app.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

O Tailwind CSS v4 é processado pelo plugin oficial do Vite. O arquivo `src/input.css` é a entrada do Tailwind; o Vite gera os estilos no build. Os dados são importados dos JSON locais e podem ser substituídos futuramente pela chamada à API.

## Como os dados aparecem
- 17 serviços nacionais e 24 variações estaduais são reunidos no catálogo.
- Pesquisa por nome, sinônimos, descrição e órgão responsável.
- Filtros por categoria e UF.
- Detalhes com público, condições, documentos, etapas, canais, custo, prazo, observações, pendências e fontes.
- Portais estaduais e fontes de integração são listados separadamente.

O projeto é informativo e não envia solicitações para órgãos públicos. O campo vazio ou nulo nos dados é exibido como informação não confirmada, não como ausência de requisito.
