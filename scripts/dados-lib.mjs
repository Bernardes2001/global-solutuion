/* Serviço Fácil — leitura dos dados da pesquisa e montagem do js/dados.js.
 * Usado por scripts/gerar-dados.mjs e scripts/validar-dados.mjs. */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const caminhos = {
  servicos: path.join(raiz, 'data/servicos.json'),
  nordeste: path.join(raiz, 'data/nordeste.json'),
  norte: path.join(raiz, 'data/norte.json'),
  sudeste: path.join(raiz, 'data/sudeste.json'),
  centroOeste: path.join(raiz, 'data/centro-oeste.json'),
  sul: path.join(raiz, 'data/sul.json'),
  dadosJs: path.join(raiz, 'js/dados.js')
};

function normalizarUtilidade(valor) {
  const texto = String(valor || '').toLowerCase();
  if (texto.includes('alta')) return 'alta';
  if (texto.includes('baixa') || texto.includes('pouca')) return 'baixa';
  return 'media';
}

function normalizarAutenticacao(valor) {
  const estado = valor && typeof valor === 'object' ? valor.necessaria : valor;
  if (estado === true || estado === false) return estado;
  return null;
}

function normalizarPesquisaRegional(arquivo) {
  const pesquisa = JSON.parse(readFileSync(arquivo, 'utf8'));
  const estados = (pesquisa.ufs || []).map((uf) => {
    const apis = (uf.apis || []).map((api) => {
      const url = api.url_base || api.url_documentacao || api.url_oficial;
      if (!url) return null;
      return {
        nome: api.nome,
        autenticacao: normalizarAutenticacao(api.autenticacao),
        url,
        utilidade: normalizarUtilidade(api.utilidade)
      };
    }).filter(Boolean);
    const urlsApis = new Set(apis.map((api) => api.url.replace(/\/$/, '')));
    const portais_servicos = (uf.portais || []).map((portal) => ({
      nome: portal.nome,
      url: portal.url,
      utilidade: normalizarUtilidade(portal.utilidade)
    })).filter((portal) => portal.url && !urlsApis.has(portal.url.replace(/\/$/, '')));
    return {
      estado: uf.nome,
      sigla: uf.uf,
      fonte: uf.portais?.find((portal) => /cin|cnh|ident|habilit|servi/i.test(portal.nome))?.orgao || `Governo de ${uf.nome}`,
      apis,
      portais_servicos
    };
  });
  return { ...pesquisa, estados };
}

export function lerDados() {
  return {
    pesquisa: JSON.parse(readFileSync(caminhos.servicos, 'utf8')),
    nordeste: JSON.parse(readFileSync(caminhos.nordeste, 'utf8')),
    norte: JSON.parse(readFileSync(caminhos.norte, 'utf8')),
    sudeste: normalizarPesquisaRegional(caminhos.sudeste),
    centroOeste: normalizarPesquisaRegional(caminhos.centroOeste),
    sul: normalizarPesquisaRegional(caminhos.sul)
  };
}

/* Remove acentos, caixa e espaços repetidos para comparar textos. */
export function normalizar(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function semRepetidos(lista) {
  return lista.filter((item, i) => lista.findIndex((outro) => normalizar(outro) === normalizar(item)) === i);
}

/* Cada variação estadual herda do serviço base os nomes populares (para a busca). */
export function montarServicos(pesquisa) {
  const bases = new Map((pesquisa.servicos_base || []).map((base) => [base.id, base]));
  const variacoes = (pesquisa.variacoes_estaduais || []).map((ficha) => {
    const base = bases.get(ficha.servico_base);
    const populares = semRepetidos([...(base ? base.nomes_populares : []), ...(ficha.nomes_populares || [])]);
    const montada = {};
    for (const [chave, valor] of Object.entries(ficha)) {
      montada[chave] = valor;
      if (chave === 'nome') montada.nomes_populares = populares;
    }
    return montada;
  });
  return [...pesquisa.servicos_nacionais, ...variacoes];
}

const json = (valor) => JSON.stringify(valor, null, 2);

export function gerarDadosJs({ pesquisa, nordeste, norte, sudeste, centroOeste, sul }) {
  const legendas = pesquisa.legendas || {};
  return `/* Serviço Fácil — base de dados do catálogo.
 * ARQUIVO GERADO: não edite à mão. Edite os arquivos em data/ e rode \`npm run dados\`.
 * Pesquisa do grupo, consulta em ${pesquisa.data_consulta}. Lido pelo js/servicos.js e js/impacto.js. */

const servicos = ${json(montarServicos(pesquisa))};

const servicosBase = ${json(pesquisa.servicos_base || [])};

const legendaStatus = ${json(legendas.status_conteudo || {})};

const legendaCusto = ${json(legendas.status_custo || {})};

const legendaPrazo = ${json(legendas.status_prazo || {})};

const legendaDocumentos = ${json(legendas.status_documentos || {})};

const portaisEstaduais = ${json((nordeste.estados || []).concat(norte.estados || [], sudeste.estados || [], centroOeste.estados || [], sul.estados || []))};

const fontesIntegracao = ${json(pesquisa.fontes_integracao_comuns || [])};
`;
}
