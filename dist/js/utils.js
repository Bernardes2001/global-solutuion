/* Serviço Fácil — funções e tabelas usadas por mais de uma página. */

const nomesCategorias = {
  habilitacao: 'Habilitação',
  identificacao_civil: 'Identificação civil',
  documentacao_civil: 'Documentação civil',
  educacao: 'Educação',
  cidadania: 'Cidadania',
  trabalho: 'Trabalho',
  assistencia_social: 'Assistência social'
};

const nomesUf = {
  AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia', CE: 'Ceará',
  DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão',
  MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais', PA: 'Pará',
  PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí', RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul', RO: 'Rondônia', RR: 'Roraima',
  SC: 'Santa Catarina', SP: 'São Paulo', SE: 'Sergipe', TO: 'Tocantins'
};

/* Evita que textos dos dados virem HTML ao serem inseridos com innerHTML. */
function escaparHtml(valor) {
  return String(valor ?? '').replace(/[&<>"']/g, (caractere) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[caractere]));
}

function comoLista(valor) {
  return Array.isArray(valor) ? valor : [];
}

function nomeCategoria(chave) {
  return nomesCategorias[chave] || chave || 'Sem categoria';
}

function nomeLocal(servico) {
  const uf = servico.localidade && servico.localidade.uf;
  return uf ? `${nomesUf[uf] || uf} (${uf})` : 'Nacional';
}

/* Remove acentos para que "habilitacao" encontre "Habilitação". */
function normalizar(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}
