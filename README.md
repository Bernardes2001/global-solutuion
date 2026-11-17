# Serviço Fácil

Catálogo responsivo e informativo para consultar serviços públicos, documentos, etapas, custos e canais oficiais. O projeto usa somente HTML, CSS e JavaScript, sem ferramentas de build, servidor ou dependências.

## Como abrir
Abra o arquivo `index.html` diretamente no navegador. Não é necessário instalar ou executar nada.

## Estrutura do projeto

```text
global-solutuion/
├── data/
│   ├── nordeste.js
│   └── servicos.js
├── css/
│   └── style.css
├── img/
├── js/
│   └── app.js
├── index.html
└── README.md
```

Os estilos ficam em `css/`, a lógica da interface em `js/`, as imagens do projeto em `img/` e os dados locais em `data/`. Os arquivos de dados são JavaScript local carregado por tags `<script>` comuns, para funcionar também ao abrir a página diretamente pelo sistema de arquivos.

## Funcionalidades
- 17 serviços nacionais e 24 variações estaduais são reunidos no catálogo.
- Pesquisa por nome, sinônimos, descrição e órgão responsável.
- Filtros por categoria e UF.
- Detalhes com público, condições, documentos, etapas, canais, custo, prazo, observações, pendências e fontes.
- Portais estaduais e fontes de integração são listados separadamente.

## Integrantes
- Nome: [preencher]
- Nome: [preencher]
- Nome: [preencher]

## Pitch
Link para a apresentação: [inserir URL do pitch]

O projeto é informativo e não envia solicitações para órgãos públicos. Campos vazios ou nulos nos dados são apresentados como informação não confirmada, não como ausência de requisito.
